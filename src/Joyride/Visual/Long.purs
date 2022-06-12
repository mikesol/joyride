module Joyride.Visual.Long where

import Prelude

import Control.Alt ((<|>))
import Data.DateTime.Instant (unInstant)
import Data.Filterable (filter)
import Data.Foldable (oneOf)
import Data.Maybe (Maybe(..))
import Joyride.Visual.EmptyMatrix (emptyMatrix)
import Data.Newtype (unwrap)
import Data.Profunctor (dimap, lcmap)
import Data.Time.Duration (Milliseconds(..))
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Aff.AVar as AVar
import Effect.Class (liftEffect)
import Effect.Now (now)
import FRP.Behavior (sampleBy, sample_)
import FRP.Behavior.Time (instant)
import FRP.Event (Event, keepLatest, memoize, sampleOn)
import FRP.Event.Class (bang)
import FRP.Event.Time (withTime)
import FRP.Event.VBus (V, vbus)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Rider (rider, toRide)
import Joyride.FRP.SampleJIT (sampleJIT)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Wags (AudibleChildEnd(..), AudibleEnd(..))
import Rito.Core (Instance)
import Rito.Properties as P
import Rito.RoundRobin (InstanceId, singleInstance)
import Safe.Coerce (coerce)
import Type.Proxy (Proxy(..))
import Types (HitLongMe(..), HitLongOtherPlayer(..), HitLongVisualForLabel(..), JMilliseconds(..), MakeLong, Position(..), ReleaseLongMe(..), ReleaseLongOtherPlayer(..), ReleaseLongVisualForLabel(..), entryZ, normalizedColumn, touchPointZ)
import WAGS.Core (silence, sound)
import WAGS.Math (calcSlope)
import Web.TouchEvent.Touch as Touch
import Web.UIEvent.MouseEvent as MouseEvent

type LongActions = V (iWasPlayed :: HitLongMe, iWasReleased :: ReleaseLongMe)

long
  :: forall r lock payload
   . { | MakeLong r }
  -> Event (InstanceId -> Instance lock payload)
long makeLong = keepLatest $ vbus (Proxy :: _ LongActions) \push event -> do
  let
    setPlayed = push.iWasPlayed
    iWasPlayed = event.iWasPlayed
    setReleased = push.iWasReleased
    iWasReleased = event.iWasReleased
    played = (iWasPlayed $> unit)
      <|> ((filter (\(HitLongOtherPlayer { uniqueId }) -> makeLong.uniqueId == uniqueId) otherPlayedMe) $> unit)
    released = (iWasReleased $> unit)
      <|> ((filter (\(ReleaseLongOtherPlayer { uniqueId }) -> makeLong.uniqueId == uniqueId) otherReleasedMe) $> unit)
    rateInfoOnAtTouch = keepLatest (fireAndForget played $> animatedStuff.rateInfo)
    rateInfoOffAtTouch = keepLatest (fireAndForget released $> animatedStuff.rateInfo)
    forRendering = sampleBy (#) makeLong.renderingInfo
      ( sampleOn (bang Nothing <|> fireAndForget (sample_ (unInstant >>> coerce >>> Just <$> instant) played))
          ( sampleOn ratioEvent
              ( map
                  { rateInfo: _
                  , ratio: _
                  , endTime: _
                  , renderingInfo: _
                  }
                  animatedStuff.rateInfo
              )
          )
      )
    drawingMatrix' = forRendering <#>
      \{ rateInfo
       , ratio
       , endTime
       , renderingInfo
       } ->
        { n14: ((renderingInfo.halfAmbitus * (2.0 * (normalizedColumn makeLong.column) - 1.0)) * ratio.r)
        , n24: 0.0
        , n34:
            let
              -- for now, hardcode 1 beat after the appearance point
              -- if too fast, slow down?
              o = calcSlope (unwrap makeLong.appearsAt) (appearancePoint renderingInfo) (unwrap makeLong.appearsAt + 1.0) (p1bar renderingInfo) (unwrap rateInfo.beats)
            in
              o - (longZThickness / 2.0)
        , n11: oneEighth * ratio.r
        , n22: longYThickness
        , n33: shrinkMe endTime longZThickness rateInfo
        , n12: 0.0
        , n13: 0.0
        , n21: 0.0
        , n23: 0.0
        , n31: 0.0
        , n32: 0.0
        , n41: 0.0
        , n42: 0.0
        , n43: 0.0
        , n44: 1.0
        }
  keepLatest $ memoize drawingMatrix' \drawingMatrix ->
    keepLatest $ memoize (filter (\(HitLongOtherPlayer { player }) -> player /= makeLong.myPlayer) otherPlayedMe) \hitLongOtherPlayer -> rider
      ( toRide
          { event: bang
              ( oneOf
                  [ bang $ AudibleChildEnd
                      ( sound
                          ((\(AudibleEnd e) -> e) (makeLong.sound { on: rateInfoOnAtTouch, off: rateInfoOffAtTouch }))
                      )
                  , keepLatest $ (withTime (bang unit)) <#> \{ time } -> lowPrioritySchedule makeLong.lpsCallback
                      (JMilliseconds 10000.0 + (coerce $ unInstant time))
                      (bang $ AudibleChildEnd silence)

                  ]
              )
          , push: makeLong.pushAudio
          }
      )
      ( bang
          ( ( singleInstance
                ( oneOf
                    [ bang $ P.matrix4 $ makeLong.mkMatrix4 emptyMatrix
                    , P.matrix4 <<< makeLong.mkMatrix4 <$> drawingMatrix
                    , let
                        f :: Event (_ -> Effect (Effect Unit))
                        f = oneOf
                          [ -- if someone else has hit this, turn off the listener
                            fireAndForget $ keepLatest $ hitLongOtherPlayer <#> \(HitLongOtherPlayer hbop) ->
                              rider
                                ( toRide
                                    { event: do
                                        let
                                          hitLongVisualForLabel issuedAt = HitLongVisualForLabel
                                            { uniqueId: hbop.uniqueId
                                            , hitAt: hbop.hitAt
                                            , issuedAt
                                            , translation: drawingMatrix <#> \{ n14, n24, n34 } -> { x: n14, y: n24, z: n34 }
                                            , player: hbop.player
                                            }
                                        sampleBy (#) (map (unInstant >>> coerce) instant) (bang hitLongVisualForLabel)
                                    , push: makeLong.pushHitLongVisualForLabel
                                    }
                                )
                                -- the cancelation is nullary here, so don't worry about changing
                                (bang (\_ -> pure (pure unit)))
                          , -- a bit kludgy, we want to turn it off on release, but we're also using this to
                            -- send the visual information. in reality, they should be separate concerns.
                            -- but this is the most convenient way to get the visual information.
                            -- look into decoupling later
                            fireAndForget $ keepLatest $ hitLongOtherPlayer <#> \(HitLongOtherPlayer hbop) ->
                              rider
                                ( toRide
                                    { event: do
                                        let
                                          hitLongVisualForLabel issuedAt = HitLongVisualForLabel
                                            { uniqueId: hbop.uniqueId
                                            , hitAt: hbop.hitAt
                                            , issuedAt
                                            , translation: drawingMatrix <#> \{ n14, n24, n34 } -> { x: n14, y: n24, z: n34 }
                                            , player: hbop.player
                                            }
                                        sampleBy (#) (map (unInstant >>> coerce) instant) (bang hitLongVisualForLabel)
                                    , push: makeLong.pushHitLongVisualForLabel
                                    }
                                )
                                -- the cancelation is nullary here, so don't worry about changing
                                (bang (\_ -> pure (pure unit)))
                          -- otherwise keep alive
                          , sampleJIT makeLong.animatedStuff $ bang \av _ -> do
                              launchAff_ do
                                n <- liftEffect $ now
                                { rateInfo } <- AVar.read av
                                let
                                  broadcastInfo =
                                    { uniqueId: makeLong.uniqueId
                                    , hitAt: rateInfo.beats
                                    , issuedAt: coerce $ unInstant n
                                    }
                                let
                                  hitLongMe = HitLongMe
                                    { uniqueId: broadcastInfo.uniqueId
                                    , hitAt: broadcastInfo.hitAt
                                    , issuedAt: broadcastInfo.issuedAt
                                    }
                                  hitLongVisualForLabel = HitLongVisualForLabel
                                    { uniqueId: broadcastInfo.uniqueId
                                    , hitAt: broadcastInfo.hitAt
                                    , issuedAt: broadcastInfo.issuedAt
                                    , translation: drawingMatrix <#> \{ n14, n24, n34 } -> { x: n14, y: n24, z: n34 }
                                    , player: makeLong.myPlayer
                                    }
                                liftEffect $ makeLong.pushHitLongVisualForLabel hitLongVisualForLabel
                                liftEffect $ makeLong.pushHitLong.push hitLongMe
                                liftEffect $ setPlayed hitLongMe
                              -- release
                              pure $ launchAff_ do
                                n <- liftEffect $ now
                                { rateInfo } <- AVar.read av
                                let
                                  broadcastInfo =
                                    { uniqueId: makeLong.uniqueId
                                    , releaseAt: rateInfo.beats
                                    , issuedAt: coerce $ unInstant n
                                    }
                                let
                                  releaseLongMe = ReleaseLongMe
                                    { uniqueId: broadcastInfo.uniqueId
                                    , releasedAt: broadcastInfo.releaseAt
                                    , issuedAt: broadcastInfo.issuedAt
                                    }
                                  releaseLongVisualForLabel = ReleaseLongVisualForLabel
                                    { uniqueId: broadcastInfo.uniqueId
                                    , releasedAt: broadcastInfo.releaseAt
                                    , issuedAt: broadcastInfo.issuedAt
                                    , translation: drawingMatrix <#> \{ n14, n24, n34 } -> { x: n14, y: n24, z: n34 }
                                    , player: makeLong.myPlayer
                                    }
                                liftEffect $ makeLong.pushReleaseLongVisualForLabel releaseLongVisualForLabel
                                liftEffect $ makeLong.pushReleaseLong.push releaseLongMe
                                liftEffect $ setReleased releaseLongMe
                          ]
                      in
                        if makeLong.isMobile then P.onTouchStart <$> map
                          ( dimap
                              ( \e ->
                                  { cx: Touch.clientX e
                                  , cy: Touch.clientY e
                                  }
                              )
                              (map \i -> { end: i, cancel: i })
                          )
                          f
                        else P.onMouseDown <$> map
                          ( lcmap
                              ( \e ->
                                  { cx: MouseEvent.clientX e
                                  , cy: MouseEvent.clientY e
                                  }
                              )
                          )
                          f
                    ]
                )
            )
          )
      )
  where
  animatedStuff =
    { rateInfo: _.rateInfo <$> makeLong.animatedStuff
    , playerPositions: _.playerPositions <$> makeLong.animatedStuff
    }
  p1bar ri = touchPointZ ri Position1
  appearancePoint ri = entryZ ri
  oneEighth = 1.0 / 8.0
  ratioEvent = map (\{ iw, ih } -> { iw, ih, r: iw / ih }) (bang makeLong.initialDims <|> makeLong.resizeEvent)
  shrinkRate = 3.0
  longYThickness = 0.04
  longZThickness = 1.0
  shrinkMe endTime longThickness ri = case endTime of
    Nothing -> longThickness
    Just (JMilliseconds startTime) -> let (JMilliseconds currentTime) = ri.epochTime in max 0.0 (longThickness - (longThickness * shrinkRate * (currentTime - startTime) / 1000.0))
  otherPlayedMe = filter (\(HitLongOtherPlayer { uniqueId }) -> makeLong.uniqueId == uniqueId) makeLong.notifications.hitLong
  otherReleasedMe = filter (\(ReleaseLongOtherPlayer { uniqueId }) -> makeLong.uniqueId == uniqueId) makeLong.notifications.releaseLong

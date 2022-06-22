module Joyride.Visual.Leap where

import Prelude

import Control.Alt ((<|>))
import Data.DateTime.Instant (unInstant)
import Data.Filterable (filter)
import Data.Foldable (oneOf)
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Profunctor (dimap)
import Data.Time.Duration (Milliseconds(..))
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Aff.AVar as AVar
import Effect.Class (liftEffect)
import FRP.Behavior (sampleBy, sample_)
import FRP.Event (Event, bus, keepLatest, memoize, sampleOn)
import FRP.Event.Class (bang)
import FRP.Event.Time as LocalTime
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Rider (rider, toRide)
import Joyride.FRP.SampleJIT (sampleJIT)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Timing.CoordinatedNow (cInstant)
import Joyride.Visual.EmptyMatrix (emptyMatrix)
import Joyride.Ocarina (AudibleChildEnd(..), AudibleEnd(..))
import Rito.Core (Instance)
import Rito.Properties as P
import Rito.RoundRobin (InstanceId, singleInstance)
import Safe.Coerce (coerce)
import Types (HitLeapMe(..), HitLeapOtherPlayer(..), HitLeapVisualForLabel(..), JMilliseconds(..), MakeLeap, Position(..), entryZ, normalizedColumn, playerPosition', touchPointZ)
import Ocarina.Core (silence, sound)
import Ocarina.Math (calcSlope)
import Web.TouchEvent.Touch as Touch
import Web.UIEvent.MouseEvent as MouseEvent

leap
  :: forall r lock payload
   . { | MakeLeap r }
  -> Event (InstanceId -> Instance lock payload)
leap makeLeap = keepLatest $ bus \setPlayed iWasPlayed -> do
  let
    -- this is the event that we listen to to know when to stop playing audio
    -- we stop _eitehr_ when we get an internal played _or_ when one is reported
    -- over the wire
    played = (iWasPlayed $> unit)
      <|> ((filter (\(HitLeapOtherPlayer { uniqueId }) -> makeLeap.uniqueId == uniqueId) otherPlayedMe) $> unit)
    rateInfoOnAtTouch = keepLatest (fireAndForget played $> animatedStuff.rateInfo)
    forRendering = sampleBy (#) makeLeap.renderingInfo
      ( sampleOn (bang Nothing <|> fireAndForget (sample_ (coerce >>> Just <$> cInstant makeLeap.cnow) played))
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
        { n14: ((renderingInfo.halfAmbitus * (2.0 * (normalizedColumn makeLeap.column) - 1.0)) * ratio.r)
        , n24: 0.0
        , n34:
            let
              -- for now, hardcode 1 beat after the appearance point
              -- if too fast, slow down?
              o = calcSlope (unwrap makeLeap.appearsAt) (appearancePoint renderingInfo) (unwrap makeLeap.appearsAt + 1.0) (p1bar renderingInfo) (unwrap rateInfo.beats)
            in
              o - (leapZThickness / 2.0)
        , n11:
            let
              oneEightRatio = oneEighth * ratio.r
            in
              case endTime of
                Nothing -> oneEightRatio
                Just (JMilliseconds startTime) -> let (JMilliseconds currentTime) = rateInfo.epochTime in max 0.0 (oneEightRatio - (oneEightRatio * shrinkRate * (currentTime - startTime) / 1000.0))
        -- we use `fireAndForget` because we don't need the full rate info, only the first one to grab the initial value
        , n22: shrinkMe endTime leapYThickness rateInfo
        , n33: shrinkMe endTime leapZThickness rateInfo
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
    keepLatest $ memoize (filter (\(HitLeapOtherPlayer { player }) -> player /= makeLeap.myPlayer) otherPlayedMe) \hitLeapOtherPlayer -> rider
      ( toRide
          -- we bang this as soon as the rider initializes, which is
          -- when the element is first painted on screen
          -- this is because the leap could be triggered at any moment after paint
          { event: bang
              ( oneOf
                  [ bang $ AudibleChildEnd
                      ( sound
                          ((\(AudibleEnd e) -> e) (makeLeap.sound rateInfoOnAtTouch))
                      )
                  , keepLatest $ (LocalTime.withTime (bang unit)) <#> \{ time } -> lowPrioritySchedule makeLeap.lpsCallback
                      (JMilliseconds 10000.0 + (coerce $ unInstant time))
                      (bang $ AudibleChildEnd silence)

                  ]
              )
          , push: makeLeap.pushAudio
          }
      )
      ( bang
          ( ( singleInstance
                ( oneOf
                    [ bang $ P.matrix4 $ makeLeap.mkMatrix4 emptyMatrix
                    , P.matrix4 <<< makeLeap.mkMatrix4 <$> drawingMatrix
                    , let
                        f :: Event (_ -> Effect (Effect Unit))
                        f = oneOf
                          [ -- if I touched this, turn off the listener
                            iWasPlayed $> (\_ -> pure (pure unit))
                          ,
                            -- if someone else has touched this, turn off the listener
                            fireAndForget $ keepLatest $ hitLeapOtherPlayer <#> \(HitLeapOtherPlayer hbop) ->
                              rider
                                ( toRide
                                    { event: do
                                        let
                                          hitLeapVisualForLabel issuedAt = HitLeapVisualForLabel
                                            { uniqueId: hbop.uniqueId
                                            , oldPosition: hbop.oldPosition
                                            , newPosition: hbop.newPosition
                                            , hitAt: hbop.hitAt
                                            , issuedAt
                                            , translation: drawingMatrix <#> \{ n14, n24, n34 } -> { x: n14, y: n24, z: n34 }
                                            , player: hbop.player
                                            }
                                        sampleBy (#) (map coerce $ cInstant makeLeap.cnow) (bang hitLeapVisualForLabel)
                                    , push: makeLeap.pushLeapVisualForLabel
                                    }
                                )
                                (bang (\_ -> pure (pure unit)))
                          -- otherwise keep alive
                          , sampleJIT makeLeap.animatedStuff $ bang \av _ -> do
                              launchAff_ do
                                n <- liftEffect $ makeLeap.cnow
                                { rateInfo, playerPositions } <- AVar.read av
                                let
                                  pos = playerPosition' makeLeap.myPlayer playerPositions
                                let
                                  broadcastInfo =
                                    { uniqueId: makeLeap.uniqueId
                                    , position: pos
                                    , hitAt: rateInfo.beats
                                    , issuedAt: coerce n
                                    }
                                let
                                  hitLeapMe = HitLeapMe
                                    { uniqueId: broadcastInfo.uniqueId
                                    , hitAt: broadcastInfo.hitAt
                                    , issuedAt: broadcastInfo.issuedAt
                                    , oldPosition: broadcastInfo.position
                                    , newPosition: makeLeap.newPosition
                                    }
                                  hitLeapVisualForLabel = HitLeapVisualForLabel
                                    { uniqueId: broadcastInfo.uniqueId
                                    , oldPosition: broadcastInfo.position
                                    , newPosition: makeLeap.newPosition
                                    , hitAt: broadcastInfo.hitAt
                                    , issuedAt: broadcastInfo.issuedAt
                                    , translation: drawingMatrix <#> \{ n14, n24, n34 } -> { x: n14, y: n24, z: n34 }
                                    , player: makeLeap.myPlayer
                                    }
                                liftEffect $ makeLeap.pushLeapVisualForLabel hitLeapVisualForLabel
                                liftEffect $ makeLeap.pushLeap.push hitLeapMe
                                liftEffect $ setPlayed hitLeapMe
                              -- no need for unsubscribe, we're done
                              pure (pure unit)
                          ]
                      in
                        if makeLeap.isMobile then P.onTouchStart <$> map
                          ( dimap
                              ( \e ->
                                  { cx: Touch.clientX e
                                  , cy: Touch.clientY e
                                  }
                              )
                              (map \i -> { end: \_ -> i, cancel: \_ -> i })
                          )
                          f
                        else P.onMouseDown <$> map
                          ( dimap
                              ( \e ->
                                  { cx: MouseEvent.clientX e
                                  , cy: MouseEvent.clientY e
                                  }
                              )
                              (map const)

                          )
                          f
                    ]
                )
            )
          )
      )
  where
  animatedStuff =
    { rateInfo: _.rateInfo <$> makeLeap.animatedStuff
    , playerPositions: _.playerPositions <$> makeLeap.animatedStuff
    }
  p1bar ri = touchPointZ ri Position1
  appearancePoint ri = entryZ ri
  oneEighth = 1.0 / 8.0
  ratioEvent = map (\{ iw, ih } -> { iw, ih, r: iw / ih }) (bang makeLeap.initialDims <|> makeLeap.resizeEvent)
  shrinkRate = 3.0
  leapYThickness = 0.04
  leapZThickness = 0.2
  shrinkMe endTime leapThickness ri = case endTime of
    Nothing -> leapThickness
    Just (JMilliseconds startTime) -> let (JMilliseconds currentTime) = ri.epochTime in max 0.0 (leapThickness - (leapThickness * shrinkRate * (currentTime - startTime) / 1000.0))
  otherPlayedMe = filter (\(HitLeapOtherPlayer { uniqueId }) -> makeLeap.uniqueId == uniqueId) makeLeap.notifications.hitLeap

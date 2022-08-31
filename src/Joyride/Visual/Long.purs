module Joyride.Visual.Long where

import Prelude

import Control.Alt ((<|>))
import Data.DateTime.Instant (unInstant)
import Data.Filterable (filter)
import Data.Foldable (oneOf)
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Number (abs)
import Data.Profunctor (dimap)
import Data.Time.Duration (Milliseconds(..))
import Data.Tuple (snd)
import Data.Tuple.Nested ((/\))
import Effect (Effect)
import Effect.Aff (joinFiber, launchAff, launchAff_)
import Effect.Aff.AVar as AVar
import Effect.Class (liftEffect)
import FRP.Behavior (sampleBy, sample_)
import FRP.Event.EffectFn (Event, keepLatest, mapAccum, memoize, sampleOn)
import FRP.Event.EffectFn.Time as LocalTime
import FRP.Event.EffectFn.VBus (V, vbus)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Rider (rider, toRide)
import Joyride.FRP.SampleJIT (sampleJIT)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Timing.CoordinatedNow (cInstant)
import Joyride.Visual.EmptyMatrix (emptyMatrix)
import Joyride.Ocarina (AudibleChildEnd(..), AudibleEnd(..))
import Record (union)
import Rito.Core (Instance)
import Rito.Properties as P
import Rito.RoundRobin (InstanceId, singleInstance)
import Safe.Coerce (coerce)
import Type.Proxy (Proxy(..))
import Types (HitLongMe(..), HitLongOtherPlayer(..), HitLongVisualForLabel(..), JMilliseconds(..), MakeLong, Position(..), ReleaseLongMe(..), ReleaseLongOtherPlayer(..), ReleaseLongVisualForLabel(..), entryZ, normalizedColumn, playerPosition', touchPointZ)
import Ocarina.Core (silence, sound)
import Ocarina.Math (calcSlope)
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
      ( sampleOn (pure Nothing <|> (released $> Nothing) <|> sample_ ((coerce :: Milliseconds -> Number) >>> Just <$> cInstant makeLong.cnow) played)
          ( sampleOn ratioEvent
              ( map
                  { animatedStuff: _
                  , ratio: _
                  , endTime: _
                  , renderingInfo: _
                  }
                  makeLong.animatedStuff

              )
          )
      )
    newForRendering = mapAccum
      ( \fr { prevZ, consumedByPress } ->

          let
            logicalZ = calcSlope (unwrap makeLong.appearsAt) (appearancePoint fr.renderingInfo) (unwrap makeLong.hitsLastPositionAt) (p4bar fr.renderingInfo) (unwrap fr.animatedStuff.rateInfo.beats)
            newConsumed = case fr.endTime, prevZ of
              Just _, Just pz -> consumedByPress + (logicalZ - pz)
              _, _ -> consumedByPress
          in
            { prevZ: Just logicalZ, consumedByPress: newConsumed } /\ union fr { logicalZ, prevZ, consumedByPress: newConsumed }
      )
      forRendering
      { prevZ: Nothing, consumedByPress: 0.0 }
    drawingMatrix' = newForRendering <#>
      \fr@
         { ratio
         , logicalZ
         , consumedByPress
         , renderingInfo
         } -> do
        let
          n33 = max 0.0 $ makeLong.length - consumedByPress
        fr /\
          { n14: (renderingInfo.halfAmbitus * (2.0 * (normalizedColumn makeLong.column) - 1.0)) * ratio.r
          , n24: 0.0
          , n34: logicalZ - (makeLong.length / 2.0) - consumedByPress
          , n11: if n33 == 0.0 then 0.0 else renderingInfo.halfAmbitus * ratio.r / 9.0
          , n22: if n33 == 0.0 then 0.0 else longYThickness
          , n33: n33
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
    keepLatest $ memoize (filter (\(HitLongOtherPlayer { player }) -> player /= makeLong.myPlayer) otherPlayedMe) \hitLongOtherPlayer ->
      keepLatest $ memoize (filter (\(ReleaseLongOtherPlayer { player }) -> player /= makeLong.myPlayer) otherReleasedMe) \releaseLongOtherPlayer -> rider
        ( toRide
            { event: pure
                ( oneOf
                    [ pure $ AudibleChildEnd
                        ( sound
                            ((\(AudibleEnd e) -> e) (makeLong.sound { on: rateInfoOnAtTouch, off: rateInfoOffAtTouch }))
                        )
                    , keepLatest $ (LocalTime.withTime (pure unit)) <#> \{ time } -> lowPrioritySchedule makeLong.lpsCallback
                        (JMilliseconds 10000.0 + (coerce $ unInstant time))
                        (pure $ AudibleChildEnd silence)

                    ]
                )
            , push: makeLong.pushAudio
            }
        )
        ( pure
            ( ( singleInstance
                  ( oneOf
                      [ pure $ P.matrix4 $ makeLong.mkMatrix4 emptyMatrix
                      , P.matrix4 <<< makeLong.mkMatrix4 <$> (map snd drawingMatrix)
                      , let
                          callF ev = sampleJIT drawingMatrix' $ ev $> \av _ -> do
                            hitAtFiber <- launchAff AVar.empty
                            distanceFiber <- launchAff AVar.empty
                            launchAff_ do
                              n <- liftEffect $ makeLong.cnow
                              { animatedStuff: { rateInfo, playerPositions }, renderingInfo } /\ { n33 } <- AVar.read av
                              let
                                pos = playerPosition' makeLong.myPlayer playerPositions
                                myPosInThreeCoords = touchPointZ renderingInfo pos

                                outerBroadcastInfo =
                                  { uniqueId: makeLong.uniqueId
                                  , hitAt: rateInfo.beats
                                  , issuedAt: coerce n
                                  }
                                distance = abs (myPosInThreeCoords - n33)
                                hitLongMe = HitLongMe
                                  { uniqueId: outerBroadcastInfo.uniqueId
                                  , hitAt: outerBroadcastInfo.hitAt
                                  , issuedAt: outerBroadcastInfo.issuedAt
                                  , distance
                                  }
                                hitLongVisualForLabel = HitLongVisualForLabel
                                  { uniqueId: outerBroadcastInfo.uniqueId
                                  , hitAt: outerBroadcastInfo.hitAt
                                  , issuedAt: outerBroadcastInfo.issuedAt
                                  , distance
                                  , translation: (map snd drawingMatrix) <#> \{ n14, n24, n34 } -> { x: n14, y: n24, z: n34 }
                                  , player: makeLong.myPlayer
                                  }
                              hitAt <- joinFiber hitAtFiber
                              AVar.put outerBroadcastInfo.hitAt hitAt
                              dist <- joinFiber distanceFiber
                              AVar.put distance dist
                              liftEffect $ makeLong.pushHitLongVisualForLabel hitLongVisualForLabel
                              liftEffect $ makeLong.pushHitLong.push hitLongMe
                              liftEffect $ setPlayed hitLongMe
                            -- release
                            pure $ launchAff_ do
                              n <- liftEffect $ makeLong.cnow
                              { animatedStuff: { rateInfo }, consumedByPress } /\ _ <- AVar.read av
                              hitAt <- joinFiber hitAtFiber
                              outerHitAt <- AVar.take hitAt
                              dist <- joinFiber distanceFiber
                              distance <- AVar.take dist
                              let pctConsumed = clamp 0.0 1.0 (consumedByPress / makeLong.length)

                              let
                                broadcastInfo =
                                  { uniqueId: makeLong.uniqueId
                                  , releasedAt: rateInfo.beats
                                  , issuedAt: coerce n
                                  }
                                releaseLongMe = ReleaseLongMe
                                  { uniqueId: broadcastInfo.uniqueId
                                  , releasedAt: rateInfo.beats
                                  , issuedAt: broadcastInfo.issuedAt
                                  , pctConsumed
                                  , hitAt: outerHitAt
                                  , distance
                                  }
                                releaseLongVisualForLabel = ReleaseLongVisualForLabel
                                  { uniqueId: broadcastInfo.uniqueId
                                  , hitAt: outerHitAt
                                  , releasedAt: broadcastInfo.releasedAt
                                  , distance
                                  , pctConsumed
                                  , issuedAt: broadcastInfo.issuedAt
                                  , translation: (map snd drawingMatrix) <#> \{ n14, n24, n34 } -> { x: n14, y: n24, z: n34 }
                                  , player: makeLong.myPlayer
                                  }
                              liftEffect $ makeLong.pushReleaseLongVisualForLabel releaseLongVisualForLabel
                              liftEffect $ makeLong.pushReleaseLong.push releaseLongMe
                              liftEffect $ setReleased releaseLongMe

                          f :: Event (_ -> Effect (Effect Unit))
                          f = oneOf
                            [ iWasPlayed $> (\_ -> pure (pure unit))
                            , callF (iWasReleased $> unit)
                            , -- if someone else has hit this, turn off the listener
                              fireAndForget $ keepLatest $ hitLongOtherPlayer <#> \(HitLongOtherPlayer hlop) ->
                                rider
                                  ( toRide
                                      { event: do
                                          let
                                            hitLongVisualForLabel issuedAt = HitLongVisualForLabel
                                              { uniqueId: hlop.uniqueId
                                              , hitAt: hlop.hitAt
                                              , distance: hlop.distance
                                              , issuedAt
                                              , translation: (map snd drawingMatrix) <#> \{ n14, n24, n34 } -> { x: n14, y: n24, z: n34 }
                                              , player: hlop.player
                                              }
                                          sampleBy (#) (map (coerce) $ cInstant makeLong.cnow) (pure hitLongVisualForLabel)
                                      , push: makeLong.pushHitLongVisualForLabel
                                      }
                                  )
                                  -- the cancelation is nullary here, so don't worry about changing
                                  (pure (\_ -> pure (pure unit)))
                            , -- a bit kludgy, we want to turn it off on release, but we're also using this to
                              -- send the visual information. in reality, they should be separate concerns.
                              -- but this is the most convenient way to get the visual information.
                              -- look into decoupling later
                              fireAndForget $ keepLatest $ releaseLongOtherPlayer <#> \(ReleaseLongOtherPlayer rlop) ->
                                rider
                                  ( toRide
                                      { event: do
                                          let
                                            releaseLongVisualForLabel issuedAt = ReleaseLongVisualForLabel
                                              { uniqueId: rlop.uniqueId
                                              , hitAt: rlop.hitAt
                                              , releasedAt: rlop.releasedAt
                                              , distance: rlop.distance
                                              , issuedAt
                                              , pctConsumed: rlop.pctConsumed
                                              , translation: (map snd drawingMatrix) <#> \{ n14, n24, n34 } -> { x: n14, y: n24, z: n34 }
                                              , player: rlop.player
                                              }
                                          sampleBy (#) (map coerce $ cInstant makeLong.cnow) (pure releaseLongVisualForLabel)
                                      , push: makeLong.pushReleaseLongVisualForLabel
                                      }
                                  )
                                  -- the cancelation is nullary here, so don't worry about changing
                                  (callF (pure unit))
                            -- otherwise keep alive
                            -- todo: even though the sampling is JIT, we still have one extra calculation for the press
                            -- as drawingMatrix' is computed already for the render
                            -- is there any way to reuse that?
                            , callF (pure unit)
                            ]
                        in
                          if makeLong.isMobile then P.onTouchStart <$> map
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
    { rateInfo: _.rateInfo <$> makeLong.animatedStuff
    , playerPositions: _.playerPositions <$> makeLong.animatedStuff
    }
  p4bar ri = touchPointZ ri Position4
  appearancePoint ri = entryZ ri
  ratioEvent = map (\{ iw, ih } -> { iw, ih, r: iw / ih }) (pure makeLong.initialDims <|> makeLong.resizeEvent)
  longYThickness = 0.04
  otherPlayedMe = filter (\(HitLongOtherPlayer { uniqueId }) -> makeLong.uniqueId == uniqueId) makeLong.notifications.hitLong
  otherReleasedMe = filter (\(ReleaseLongOtherPlayer { uniqueId }) -> makeLong.uniqueId == uniqueId) makeLong.notifications.releaseLong

module Joyride.Visual.Basic where

import Prelude

import Control.Alt ((<|>))
import Data.Compactable (compact)
import Data.DateTime.Instant (unInstant)
import Data.FastVect.FastVect (index)
import Data.Filterable (filter)
import Data.Foldable (oneOf, oneOfMap)
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Profunctor (dimap)
import Data.Time.Duration (Milliseconds(..))
import Effect.Aff (launchAff_)
import Effect.Aff.AVar as AVar
import Effect.Class (liftEffect)
import FRP.Behavior (sampleBy, sample_)
import FRP.Event (Event, bus, keepLatest, memoize, sampleOn)
import FRP.Event.Time as LocalTime
import Joyride.Constants.Visual as Visual.Constants
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Rider (rider, toRide)
import Joyride.FRP.SampleJIT (sampleJIT)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Ocarina (AudibleChildEnd(..), AudibleEnd(..))
import Joyride.Timing.CoordinatedNow (cInstant)
import Joyride.Visual.EmptyMatrix (emptyMatrix)
import Ocarina.Core (silence, sound)
import Ocarina.Math (calcSlope)
import Rito.Core (Instance)
import Rito.Matrix4 (Matrix4')
import Rito.Properties as P
import Rito.RoundRobin (InstanceId, singleInstance)
import Safe.Coerce (coerce)
import Type.Proxy (Proxy(..))
import Types (Beats, HitBasicMe(..), HitBasicOtherPlayer(..), HitBasicVisualForLabel(..), JMilliseconds(..), MakeBasic, Position(..), RateInfo, RenderingInfo, entryZ, normalizedColumn, playerPosition', touchPointZ)
import Web.TouchEvent.Touch as Touch
import Web.UIEvent.MouseEvent as MouseEvent

basic
  :: forall r lock payload
   . { | MakeBasic r }
  -> Event (InstanceId -> Instance lock payload)
basic makeBasic = keepLatest $ bus \setPlayed iWasPlayed -> do
  let
    -- this is the event that we listen to to know when to stop playing audio
    -- we stop _eitehr_ when we get an internal played _or_ when one is reported
    -- over the wire
    -- __ = spy "beats" makeBasic.beats
    played :: Event Beats
    played = oneOf
      [ -- either I was played
        map (unwrap >>> _.logicalBeat) iWasPlayed
      -- or another player was played
      , map (unwrap >>> _.logicalBeat) (filter (\(HitBasicOtherPlayer { uniqueId }) -> makeBasic.myInfo.uniqueId == uniqueId) otherPlayedMe)
      ]

    -- when a tile-touch happens, we start emitting rate info to the audio engine
    rateInfoAtTouchForAudio :: Event RateInfo
    rateInfoAtTouchForAudio = compact
      ( sampleOn (pure Nothing <|> (map Just played))
          ( animatedStuff.rateInfo <#> \ri p -> case p of
              -- only emit the rate info if the beat has not been touched
              -- or it has been touched a bit early
              Nothing -> Just ri
              Just logicalBeat
                | logicalBeat >= ri.beats -> Just ri
                | otherwise -> Nothing
          )
      )

    -- all the info we need for rendering
    forRendering
      :: Event
           { rateInfo :: RateInfo
           , ratio :: { ih :: Number, iw :: Number, r :: Number }
           , endTime :: Maybe JMilliseconds
           , renderingInfo :: RenderingInfo
           }
    forRendering = sampleBy (#) makeBasic.renderingInfo
      ( sampleOn (pure Nothing <|> fireAndForget (sample_ (coerce >>> Just <$> cInstant makeBasic.cnow) played))
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

    -- the matrix we'll need to draw a tile
    drawingMatrix' :: Event Matrix4'
    drawingMatrix' = forRendering <#>
      \{ rateInfo
       , ratio
       , endTime
       , renderingInfo
       } ->
        { n14: ((renderingInfo.halfAmbitus * (2.0 * (normalizedColumn makeBasic.myInfo.column) - 1.0)) * ratio.r)
        , n24: 0.0
        , n34:
            let
              o
                | rateInfo.beats < p1.startsAt = calcSlope (unwrap makeBasic.myInfo.appearsAt) (appearancePoint renderingInfo) (unwrap p1.startsAt) (p1bar renderingInfo) (unwrap rateInfo.beats)
                | rateInfo.beats < p2.startsAt = calcSlope (unwrap p1.startsAt) (p1bar renderingInfo) (unwrap p2.startsAt) (p2bar renderingInfo) (unwrap rateInfo.beats)
                | rateInfo.beats < p3.startsAt = calcSlope (unwrap p2.startsAt) (p2bar renderingInfo) (unwrap p3.startsAt) (p3bar renderingInfo) (unwrap rateInfo.beats)
                | rateInfo.beats < p4.startsAt = calcSlope (unwrap p3.startsAt) (p3bar renderingInfo) (unwrap p4.startsAt) (p4bar renderingInfo) (unwrap rateInfo.beats)
                | otherwise = calcSlope (unwrap p4.startsAt) (p4bar renderingInfo) (unwrap p4.startsAt + 0.2) (p4bar renderingInfo + 0.5) (unwrap rateInfo.beats)
            in
              o - (basicZThickness / 2.0)
        , n11:
            let
              baseWidth = renderingInfo.halfAmbitus * ratio.r / 9.0
            in
              case endTime of
                Nothing -> baseWidth
                Just (JMilliseconds startTime) -> let (JMilliseconds currentTime) = rateInfo.epochTime in max 0.0 (baseWidth - (baseWidth * shrinkRate * (currentTime - startTime) / 1000.0))
        -- we use `fireAndForget` because we don't need the full rate info, only the first one to grab the initial value
        , n22: shrinkMe endTime basicYThickness rateInfo
        , n33: shrinkMe endTime basicZThickness rateInfo
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
    keepLatest $ memoize (filter (\(HitBasicOtherPlayer { player }) -> player /= makeBasic.myPlayer) otherPlayedMe) \hitBasicOtherPlayer -> rider
      ( toRide
          { event: oneOfMap pure
              ( makeBasic.myInfo.beats <#>
                  \{ audio } -> oneOf
                    [ pure $ AudibleChildEnd
                        ( sound
                            ((\(AudibleEnd e) -> e) (audio rateInfoAtTouchForAudio))
                        )
                    , keepLatest $ (LocalTime.withTime (pure unit)) <#> \{ time } -> lowPrioritySchedule makeBasic.lpsCallback
                        (JMilliseconds 10000.0 + (coerce $ unInstant time))
                        (pure $ AudibleChildEnd silence)

                    ]
              )
          , push: makeBasic.pushAudio
          }
      )
      ( pure
          ( ( singleInstance
                ( oneOf
                    [ pure $ P.matrix4 $ makeBasic.mkMatrix4 emptyMatrix
                    , P.matrix4 <<< makeBasic.mkMatrix4 <$> drawingMatrix
                    , let
                        f = oneOf
                          [ -- if I touched this, turn off the listener
                            iWasPlayed $> (\_ -> pure (pure unit))
                          ,
                            -- if someone else has touched this, turn off the listener
                            fireAndForget $ keepLatest $ hitBasicOtherPlayer <#> \(HitBasicOtherPlayer hbop) ->
                              rider
                                ( toRide
                                    { event: do
                                        let
                                          hitBasicVisualForLabel issuedAt = HitBasicVisualForLabel
                                            { uniqueId: hbop.uniqueId
                                            , logicalBeat: hbop.logicalBeat
                                            , deltaBeats: hbop.deltaBeats
                                            , hitAt: hbop.hitAt
                                            , issuedAt
                                            , translation: drawingMatrix <#> \{ n14, n24, n34 } -> { x: n14, y: n24, z: n34 }
                                            , player: hbop.player
                                            }
                                        sampleBy (#) (map coerce (cInstant makeBasic.cnow)) (pure hitBasicVisualForLabel)
                                    , push: makeBasic.pushBasicVisualForLabel
                                    }
                                )
                                (pure (\_ -> pure (pure unit)))
                          -- otherwise keep alive
                          -- no need for an unsub, so just pure (pure unit)
                          , sampleJIT makeBasic.animatedStuff $ pure \av _ -> pure (pure unit) <* launchAff_ do
                              n <- liftEffect $ makeBasic.cnow
                              { rateInfo, playerPositions } <- AVar.read av
                              let
                                pos = playerPosition' makeBasic.myPlayer playerPositions
                                rightBeat = case pos of
                                  Position1 -> p1
                                  Position2 -> p2
                                  Position3 -> p3
                                  Position4 -> p4
                              let
                                broadcastInfo =
                                  { uniqueId: makeBasic.myInfo.uniqueId
                                  , position: pos
                                  , hitAt: rateInfo.beats
                                  , issuedAt: coerce n
                                  , logicalBeat: rightBeat.startsAt
                                  , deltaBeats: rateInfo.beats - rightBeat.startsAt
                                  }
                              let
                                hitBasicMe = HitBasicMe
                                  { uniqueId: broadcastInfo.uniqueId
                                  , logicalBeat: broadcastInfo.logicalBeat
                                  , deltaBeats: broadcastInfo.deltaBeats
                                  , hitAt: broadcastInfo.hitAt
                                  , issuedAt: broadcastInfo.issuedAt
                                  }
                                hitBasicVisualForLabel = HitBasicVisualForLabel
                                  { uniqueId: broadcastInfo.uniqueId
                                  , logicalBeat: broadcastInfo.logicalBeat
                                  , deltaBeats: broadcastInfo.deltaBeats
                                  , hitAt: broadcastInfo.hitAt
                                  , issuedAt: broadcastInfo.issuedAt
                                  , translation: drawingMatrix <#> \{ n14, n24, n34 } -> { x: n14, y: n24, z: n34 }
                                  , player: makeBasic.myPlayer
                                  }
                              liftEffect $ makeBasic.pushBasicVisualForLabel hitBasicVisualForLabel
                              liftEffect $ makeBasic.pushBasic.push hitBasicMe
                              liftEffect $ setPlayed hitBasicMe
                          ]
                      in
                        if makeBasic.isMobile then P.onTouchStart <$> map
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
    { rateInfo: _.rateInfo <$> makeBasic.animatedStuff
    , playerPositions: _.playerPositions <$> makeBasic.animatedStuff
    }
  p1 = index (Proxy :: _ 0) makeBasic.myInfo.beats
  p2 = index (Proxy :: _ 1) makeBasic.myInfo.beats
  p3 = index (Proxy :: _ 2) makeBasic.myInfo.beats
  p4 = index (Proxy :: _ 3) makeBasic.myInfo.beats
  p1bar ri = touchPointZ ri Position1
  p2bar ri = touchPointZ ri Position2
  p3bar ri = touchPointZ ri Position3
  p4bar ri = touchPointZ ri Position4
  appearancePoint ri = entryZ ri
  ratioEvent = map (\{ iw, ih } -> { iw, ih, r: iw / ih }) (pure makeBasic.initialDims <|> makeBasic.resizeEvent)
  shrinkRate = 3.0
  basicYThickness = Visual.Constants.basicYThickness
  basicZThickness = 0.23
  shrinkMe endTime basicThickness ri = case endTime of
    Nothing -> basicThickness
    Just (JMilliseconds startTime) -> let (JMilliseconds currentTime) = ri.epochTime in max 0.0 (basicThickness - (basicThickness * shrinkRate * (currentTime - startTime) / 1000.0))
  otherPlayedMe = filter (\(HitBasicOtherPlayer { uniqueId }) -> makeBasic.myInfo.uniqueId == uniqueId) makeBasic.notifications.hitBasic

--  mesh { mesh: makeBasic.threeDI.mesh } (box { box: makeBasic.threeDI.boxGeometry })
--                 ( meshPhongMaterial
--                     { meshPhongMaterial: makeBasic.threeDI.meshPhongMaterial
--                     , color: makeBasic.mkColor (RGB 0.798 0.927 0.778)
--                     }
--                     empty
--                 )
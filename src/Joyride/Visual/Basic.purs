module Joyride.Visual.Basic where

import Prelude

import Control.Alt ((<|>))
import Data.Compactable (compact)
import Data.DateTime.Instant (unInstant)
import Data.FastVect.FastVect (index)
import Data.Foldable (oneOf, oneOfMap)
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Profunctor (lcmap)
import Data.Time.Duration (Milliseconds(..))
import Effect.Aff (launchAff_)
import Effect.Aff.AVar as AVar
import Effect.Class (liftEffect)
import Effect.Now (now)
import FRP.Behavior (sampleBy, sample_)
import FRP.Behavior.Time (instant)
import FRP.Event (Event, bus, keepLatest, sampleOn)
import FRP.Event.Class (bang)
import FRP.Event.Time (withTime)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Rider (rider, toRide)
import Joyride.FRP.SampleJIT (sampleJIT)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Wags (AudibleChildEnd(..), AudibleEnd(..))
import Rito.Core (Instance)
import Rito.Properties as P
import Rito.RoundRobin (InstanceId, singleInstance)
import Type.Proxy (Proxy(..))
import Types (MakeBasic, Player(..), Position(..), entryZ, normalizedColumn, touchPointZ)
import WAGS.Core (silence, sound)
import WAGS.Math (calcSlope)
import Web.TouchEvent.Touch as Touch
import Web.UIEvent.MouseEvent as MouseEvent

basic :: forall r lock payload. { | MakeBasic r } -> Event (InstanceId -> Instance lock payload)
basic makeBasic = keepLatest $ bus \setPlayed played -> do
  let
    -- would this benefit from some sort of auto-turn off
    -- so we are not streaming nothings?
    -- that'd add overhead for listening for the auto-off, but once off
    -- there'd be no more Nothings, so maybe faster?
    rateInfoOffAtTouch = compact
      ( sampleOn (bang true <|> played $> false)
          (animatedStuff.rateInfo <#> \ri tf -> if tf then Just ri else Nothing)
      )
  rider
    ( toRide
        { event: oneOfMap bang
            ( map
                ( \{ audio } -> oneOf
                    [ bang $ AudibleChildEnd
                        ( sound
                            ( (\(AudibleEnd e) -> e)
                                (audio rateInfoOffAtTouch)
                            )
                        )
                    , ( keepLatest $ (withTime (bang unit)) <#> \{ time } -> lowPrioritySchedule makeBasic.lpsCallback
                          (Milliseconds 10000.0 <> (unInstant time))
                          (bang $ AudibleChildEnd silence)
                      )
                    ]
                )
                makeBasic.beats
            )
        , push: makeBasic.pushAudio
        }
    )
    ( bang
        ( ( singleInstance
              ( oneOf
                  [ bang $ P.matrix4 $ makeBasic.mkMatrix4 { n11: 0.0, n12: 0.0, n13: 0.0, n14: 0.0, n21: 0.0, n22: 0.0, n23: 0.0, n24: 0.0, n31: 0.0, n32: 0.0, n33: 0.0, n34: 0.0, n41: 0.0, n42: 0.0, n43: 0.0, n44: 1.0 }
                  , sampleBy (#) makeBasic.renderingInfo
                      ( sampleOn (bang Nothing <|> fireAndForget (sample_ (unInstant >>> Just <$> instant) played))
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
                      ) <#>
                      \{ rateInfo
                       , ratio
                       , endTime
                       , renderingInfo
                       } -> P.matrix4 $ makeBasic.mkMatrix4
                        { n14: ((renderingInfo.halfAmbitus * (2.0 * (normalizedColumn makeBasic.column) - 1.0)) * ratio)
                        , n24: 0.0
                        , n34:
                            let
                              o
                                | rateInfo.beats < p1.startsAt = calcSlope (unwrap makeBasic.appearsAt) (appearancePoint renderingInfo) (unwrap p1.startsAt) (p1bar renderingInfo) (unwrap rateInfo.beats)
                                | rateInfo.beats < p2.startsAt = calcSlope (unwrap p1.startsAt) (p1bar renderingInfo) (unwrap p2.startsAt) (p2bar renderingInfo) (unwrap rateInfo.beats)
                                | rateInfo.beats < p3.startsAt = calcSlope (unwrap p2.startsAt) (p2bar renderingInfo) (unwrap p3.startsAt) (p3bar renderingInfo) (unwrap rateInfo.beats)
                                | otherwise = calcSlope (unwrap p3.startsAt) (p3bar renderingInfo) (unwrap p4.startsAt) (p4bar renderingInfo) (unwrap rateInfo.beats)
                            in
                              o - (basicZThickness / 2.0)
                        , n11:
                            let
                              oneEightRatio = oneEighth * ratio
                            in
                              case endTime of
                                Nothing -> oneEightRatio
                                Just (Milliseconds startTime) -> let (Milliseconds currentTime) = rateInfo.epochTime in max 0.0 (oneEightRatio - (oneEightRatio * shrinkRate * (currentTime - startTime) / 1000.0))
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
                  , let
                      f = sampleJIT makeBasic.animatedStuff $ bang \av cxcy -> launchAff_ do
                        n <- liftEffect $ now
                        { rateInfo, playerPositions } <- AVar.read av
                        let
                          pos = playerPositions # case makeBasic.myPlayer of
                            Player1 -> _.p1p
                            Player2 -> _.p2p
                            Player3 -> _.p3p
                            Player4 -> _.p4p
                          rightBeat = case pos of
                            Position1 -> p1
                            Position2 -> p2
                            Position3 -> p3
                            Position4 -> p4
                        liftEffect $ makeBasic.pushBasicTap
                          { clientX: cxcy.cx
                          , clientY: cxcy.cy
                          , pushedAt: unInstant n
                          , deltaBeats: rateInfo.beats - rightBeat.startsAt
                          }
                        liftEffect $ setPlayed unit
                    in
                      if makeBasic.isMobile then P.onTouchStart <$> map
                        ( lcmap
                            ( \e ->
                                { cx: Touch.clientX e
                                , cy: Touch.clientY e
                                }
                            )
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
    { rateInfo: _.rateInfo <$> makeBasic.animatedStuff
    , playerPositions: _.playerPositions <$> makeBasic.animatedStuff
    }
  p1 = index (Proxy :: _ 0) makeBasic.beats
  p2 = index (Proxy :: _ 1) makeBasic.beats
  p3 = index (Proxy :: _ 2) makeBasic.beats
  p4 = index (Proxy :: _ 3) makeBasic.beats
  p1bar ri = touchPointZ ri Position1
  p2bar ri = touchPointZ ri Position2
  p3bar ri = touchPointZ ri Position3
  p4bar ri = touchPointZ ri Position4
  appearancePoint ri = entryZ ri
  oneEighth = 1.0 / 8.0
  ratioEvent = map (\i -> i.iw / i.ih) (bang makeBasic.initialDims <|> makeBasic.resizeEvent)
  shrinkRate = 3.0
  basicYThickness = 0.04
  basicZThickness = 0.2
  shrinkMe endTime basicThickness ri = case endTime of
    Nothing -> basicThickness
    Just (Milliseconds startTime) -> let (Milliseconds currentTime) = ri.epochTime in max 0.0 (basicThickness - (basicThickness * shrinkRate * (currentTime - startTime) / 1000.0))
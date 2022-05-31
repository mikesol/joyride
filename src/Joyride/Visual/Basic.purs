module Joyride.Visual.Basic where

import Prelude

import Control.Alt ((<|>))
import Control.Plus (empty)
import Data.Compactable (compact)
import Data.DateTime.Instant (unInstant)
import Data.FastVect.FastVect (index)
import Data.Foldable (oneOf, oneOfMap)
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Time.Duration (Milliseconds(..))
import Data.Tuple (Tuple(..))
import Effect.Now (now)
import FRP.Behavior (sampleBy, sample_)
import FRP.Behavior.Time (instant)
import FRP.Event (bus, keepLatest, sampleOn)
import FRP.Event.Class (bang, biSampleOn)
import FRP.Event.Time (withTime)
import Joyride.Debug (debugX')
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Rider (rider, toRide)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Wags (AudibleChildEnd(..), AudibleEnd(..))
import Rito.Color (RGB(..))
import Rito.Core (AMesh)
import Rito.Geometries.Box (box)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.Mesh (mesh)
import Rito.Properties as P
import Type.Proxy (Proxy(..))
import Types (MakeBasic, Position(..), entryZ, normalizedColumn, touchPointZ)
import WAGS.Core (envy, sound, silence)
import WAGS.Math (calcSlope)
import Web.UIEvent.MouseEvent (clientX, clientY)

basic :: forall r lock payload. { | MakeBasic r } -> AMesh lock payload
basic makeBasic = envy
  $ keepLatest
  $ bus \setPlayed played -> do
      let
        -- would this benefit from some sort of auto-turn off
        -- so we are not streaming nothings?
        -- that'd add overhead for listening for the auto-off, but once off
        -- there'd be no more Nothings, so maybe faster?
        rateInfoOffAtTouch = compact
          ( sampleOn (bang true <|> played $> false)
              (makeBasic.rateInfo <#> \ri tf -> if tf then Just ri else Nothing)
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
            ( ( mesh
                  (box {} empty)
                  ( meshStandardMaterial
                      { color: makeBasic.mkColor $ RGB 1.0 1.0 1.0 }
                      (played <#> \_ -> P.color $ makeBasic.mkColor (RGB 0.1 0.8 0.6))
                  )
                  ( oneOf
                      [ sampleBy Tuple makeBasic.renderingInfo (debugX' makeBasic.debug ratioEvent makeBasic.rateInfo) <#> \(Tuple ri ratio) -> P.positionX
                          ((ri.halfAmbitus * (2.0 * (normalizedColumn makeBasic.column) - 1.0)) * ratio)
                      , bang $ P.positionY 0.0
                      , sampleBy Tuple makeBasic.renderingInfo makeBasic.rateInfo <#> \(Tuple ri { beats: currentBeats }) ->
                          let
                            o
                              | currentBeats < p1.startsAt = calcSlope (unwrap makeBasic.appearsAt) (appearancePoint ri) (unwrap p1.startsAt) (p1bar ri) (unwrap currentBeats)
                              | currentBeats < p2.startsAt = calcSlope (unwrap p1.startsAt) (p1bar ri) (unwrap p2.startsAt) (p2bar ri) (unwrap currentBeats)
                              | currentBeats < p3.startsAt = calcSlope (unwrap p2.startsAt) (p2bar ri) (unwrap p3.startsAt) (p3bar ri) (unwrap currentBeats)
                              | otherwise = calcSlope (unwrap p3.startsAt) (p3bar ri) (unwrap p4.startsAt) (p4bar ri) (unwrap currentBeats)
                          in
                            P.positionZ o
                      , (bang $ P.scaleX 0.0) <|> (ratioEvent <#> \ratio -> P.scaleX (oneEighth * ratio)) <|> keepLatest (biSampleOn ratioEvent (Tuple <$> fireAndForget (sample_ (unInstant <$> instant) played)) <#> \(Tuple (Milliseconds startTime) ratio) -> let oneEightRatio = oneEighth * ratio in makeBasic.rateInfo <#> \{ epochTime: Milliseconds currentTime } -> P.scaleX $ max 0.0 (oneEightRatio - (oneEightRatio * shrinkRate * (currentTime - startTime) / 1000.0)))
                      -- we use `fireAndForget` because we don't need the full rate info, only the first one to grab the initial value
                      , (bang $ P.scaleY 0.0) <|> fireAndForget (makeBasic.rateInfo $> P.scaleY basicYThickness) <|> shrinkMe played P.scaleY basicYThickness
                      , (bang $ P.scaleZ 0.0) <|> fireAndForget (makeBasic.rateInfo $> P.scaleZ basicZThickness) <|> shrinkMe played P.scaleZ basicZThickness
                      , bang $
                          if makeBasic.isMobile then P.onTouchStart \_ -> setPlayed unit
                          else P.onMouseDown \e -> do
                            n <- now
                            makeBasic.pushBasicTap { clientX: clientX e, clientY: clientY e, pushedAt: unInstant n, deltaTime: Milliseconds 0.0 }
                            setPlayed unit
                      ]
                  )
              )
            )
        )
  where
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
  basicZThickness = 0.4
  shrinkMe played f basicThickness = keepLatest (fireAndForget (sample_ (unInstant <$> instant) played) <#> \(Milliseconds startTime) -> makeBasic.rateInfo <#> \{ epochTime: Milliseconds currentTime } -> f $ max 0.0 (basicThickness - (basicThickness * shrinkRate * (currentTime - startTime) / 1000.0)))
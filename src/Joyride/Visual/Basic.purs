module Joyride.Visual.Basic where

import Prelude

import Control.Alt ((<|>))
import Control.Plus (empty)
import Data.Compactable (compact)
import Data.FastVect.FastVect (index)
import Data.Foldable (oneOf, oneOfMap)
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Time.Duration (Milliseconds(..))
import Data.Tuple (Tuple(..))
import FRP.Behavior (sampleBy)
import FRP.Event (bus, keepLatest, sampleOn)
import FRP.Event.Class (bang)
import Joyride.Debug (debugX')
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Rider (rider, toRide)
import Joyride.FRP.Schedule (oneOff)
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

basic :: forall r lock payload. { | MakeBasic r } -> AMesh lock payload
basic
  { mkColor
  , initialDims
  , resizeEvent
  , rateInfo
  , appearsAt
  , column
  , debug
  , renderingInfo
  , isMobile
  , lpsCallback
  , pushAudio
  , beats
  } = envy
  $ keepLatest
  $ bus \setPlayed played -> do
      let
        -- would this benefit from some sort of auto-turn off
        -- so we are not streaming nothings?
        -- that'd add overhead for listening for the auto-off, but once off
        -- there'd be no more Nothings, so maybe faster?
        rateInfoOffAtTouch = compact
          ( sampleOn (bang true <|> played $> false)
              (rateInfo <#> \ri tf -> if tf then Just ri else Nothing)
          )
      rider
        ( toRide
            { event: oneOfMap bang
                ( map
                    ( \{ startsAt, audio } -> oneOf
                        [ bang $ AudibleChildEnd
                            ( sound
                                ( (\(AudibleEnd e) -> e)
                                    (audio rateInfoOffAtTouch)
                                )
                            )
                        , ( lowPrioritySchedule lpsCallback
                              (Milliseconds ((unwrap startsAt * 1000.0) + 10000.0))
                              (bang $ AudibleChildEnd silence)
                          )
                        ]
                    )
                    beats
                )
            , push: pushAudio
            }
        )
        ( bang
            ( ( mesh
                  (box {} empty)
                  ( meshStandardMaterial
                      { color: mkColor $ RGB 1.0 1.0 1.0 }
                      (played <#> \_ -> P.color $ mkColor (RGB 0.1 0.8 0.6))
                  )
                  ( oneOf
                      [ sampleBy Tuple renderingInfo (debugX' debug ratioEvent rateInfo) <#> \(Tuple ri ratio) -> P.positionX
                          ((ri.halfAmbitus * (2.0 * (normalizedColumn column) - 1.0)) * ratio)
                      , bang $ P.positionY 0.0
                      , sampleBy Tuple renderingInfo rateInfo <#> \(Tuple ri { beats: currentBeats }) ->
                          let
                            o
                              | currentBeats < p1.startsAt = calcSlope (unwrap appearsAt) (appearancePoint ri) (unwrap p1.startsAt) (p1bar ri) (unwrap currentBeats)
                              | currentBeats < p2.startsAt = calcSlope (unwrap p1.startsAt) (p1bar ri) (unwrap p2.startsAt) (p2bar ri) (unwrap currentBeats)
                              | currentBeats < p3.startsAt = calcSlope (unwrap p2.startsAt) (p2bar ri) (unwrap p3.startsAt) (p3bar ri) (unwrap currentBeats)
                              | otherwise = calcSlope (unwrap p3.startsAt) (p3bar ri) (unwrap p4.startsAt) (p4bar ri) (unwrap currentBeats)
                          in
                            P.positionZ o
                      , (bang $ P.scaleX 0.0) <|> (ratioEvent <#> \ratio -> P.scaleX (oneEighth * ratio))
                      , (bang $ P.scaleY 0.0) <|> oneOff Just (rateInfo $> P.scaleY 0.04)
                      , (bang $ P.scaleZ 0.0) <|> oneOff Just (rateInfo $> P.scaleZ 0.4)
                      , bang $
                          if isMobile then P.onTouchStart \_ -> setPlayed unit
                          else P.onMouseDown \_ -> setPlayed unit
                      ]
                  )
              )
            )
        )
  where
  p1 = index (Proxy :: _ 0) beats
  p2 = index (Proxy :: _ 1) beats
  p3 = index (Proxy :: _ 2) beats
  p4 = index (Proxy :: _ 3) beats
  p1bar ri = touchPointZ ri Position1
  p2bar ri = touchPointZ ri Position2
  p3bar ri = touchPointZ ri Position3
  p4bar ri = touchPointZ ri Position4
  appearancePoint ri = entryZ ri
  oneEighth = 1.0 / 8.0
  ratioEvent = map (\i -> i.iw / i.ih) (bang initialDims <|> resizeEvent)
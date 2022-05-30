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
import FRP.Event (bus, keepLatest, sampleOn)
import FRP.Event.Class (bang)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Rider (rider, toRide)
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
                      [ ratioEvent <#> \ratio -> P.positionX
                          ((renderingInfo.halfAmbitus * (2.0 * (normalizedColumn column) - 1.0)) * ratio)
                      , bang $ P.positionY 0.0
                      , rateInfo <#> \{ beats: currentBeats } ->
                          let
                            o
                              | currentBeats < p1.startsAt = calcSlope (unwrap appearsAt) appearancePoint (unwrap p1.startsAt) p1bar (unwrap currentBeats)
                              | currentBeats < p2.startsAt = calcSlope (unwrap p1.startsAt) p1bar (unwrap p2.startsAt) p2bar (unwrap currentBeats)
                              | currentBeats < p3.startsAt = calcSlope (unwrap p2.startsAt) p2bar (unwrap p3.startsAt) p3bar (unwrap currentBeats)
                              | otherwise = calcSlope (unwrap p3.startsAt) p3bar (unwrap p4.startsAt) p4bar (unwrap currentBeats)
                          in
                            P.positionZ o
                      , ratioEvent <#> \ratio -> P.scaleX (0.5 * ratio)
                      , bang $ P.scaleY 0.04
                      , bang $ P.scaleZ 0.4
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
  p1bar = touchPointZ renderingInfo Position1
  p2bar = touchPointZ renderingInfo Position2
  p3bar = touchPointZ renderingInfo Position3
  p4bar = touchPointZ renderingInfo Position4
  appearancePoint = entryZ renderingInfo
  ratioEvent = map (\i -> i.iw / i.ih) (bang initialDims <|> resizeEvent)
module Joyride.Audio.Graph.Ride where

import Prelude

import Data.Foldable (oneOf)
import Data.Int as Int
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Number (pi, pow)
import Data.Typelevel.Num (D2)
import FRP.Behavior (Behavior, sample_)
import FRP.Event (Event)
import FRP.Event.Class (bang)
import Foreign.Object as Object
import Joyride.Constants.Ride (rideStartOffset)
import Joyride.FRP.Schedule (oneOff)
import Joyride.Ocarina (AudibleChildEnd(..))
import Ocarina.Control (gain_, playBuf)
import Ocarina.Core (Audible, AudioOnOff(..), _on, dyn)
import Ocarina.Properties (buffer, onOff)
import Ocarina.WebAPI (BrowserAudioBuffer)
import Types (Beats(..), RateInfo, beatToTime)

twoPi = 2.0 * pi :: Number

midi2cps :: Int -> Number
midi2cps i = 440.0 * (2.0 `pow` (((Int.toNumber i) - 69.0) / 12.0))

graph
  :: forall lock payload
   . { basics :: Event (Event AudibleChildEnd)
     , leaps :: Event (Event AudibleChildEnd)
     , rateInfo :: Event RateInfo
     , buffers :: Behavior (Object.Object BrowserAudioBuffer)
     , silence :: BrowserAudioBuffer
     }
  -> Array (Audible D2 lock payload)
graph { basics, leaps, rateInfo, silence, buffers } =
  [ gain_ 1.0
      [ dyn ((map <<< map) (\(AudibleChildEnd e) -> e) basics)
      ]
  , gain_ 1.0
      [ dyn ((map <<< map) (\(AudibleChildEnd e) -> e) leaps)
      ]
  , gain_ 1.0
      [ playBuf { buffer: silence }
          ( oneOf
              [ sample_ buffers (bang unit) <#> Object.lookup "butterflies" >>> case _ of
                  Just b -> buffer b
                  Nothing -> buffer silence
              , oneOff
                  ( \i@{ beats } ->
                      if beats > rideStartOffset then Just i else Nothing
                  )
                  rateInfo <#> (\ri -> onOff $ AudioOnOff { o: unwrap $ beatToTime ri rideStartOffset, x: _on })
              ]

          )
      ]
  ]

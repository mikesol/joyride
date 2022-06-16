module Joyride.Audio.Graph where

import Prelude

import Data.Foldable (oneOf)
import Data.Int as Int
import Data.Maybe (Maybe(..))
import Data.Number (pi, pow)
import Data.Typelevel.Num (D2)
import FRP.Behavior (Behavior, sample_)
import FRP.Event (Event)
import FRP.Event.Class (bang)
import Foreign.Object as Object
import Joyride.FRP.Schedule (oneOff)
import Joyride.Wags (AudibleChildEnd(..))
import Types (RateInfo, Seconds(..))
import WAGS.Control (gain_, playBuf)
import WAGS.Core (Audible, AudioOnOff(..), _on, dyn)
import WAGS.Properties (buffer, onOff)
import WAGS.WebAPI (BrowserAudioBuffer)

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
                  ( \i@{ time: Seconds time } ->
                      if time > 0.94 then Just i else Nothing
                  )
                  rateInfo <#> (\_ -> onOff $ AudioOnOff { o: 1.0, x: _on })
              ]

          )
      ]
  ]

module Joyride.Audio.Graph where

import Prelude

import Data.Int as Int
import Data.Number (pi, pow)
import Data.Typelevel.Num (D2)
import FRP.Event (Event)
import Joyride.Wags (AudibleChildEnd(..))
import WAGS.Control (gain_)
import WAGS.Core (Audible, dyn)

twoPi = 2.0 * pi :: Number

midi2cps :: Int -> Number
midi2cps i = 440.0 * (2.0 `pow` (((Int.toNumber i) - 69.0) / 12.0))

graph
  :: forall lock payload
   . { basics :: Event (Event AudibleChildEnd)
     , leaps :: Event (Event AudibleChildEnd)
     }
  -> Array (Audible D2 lock payload)
graph { basics, leaps } =
  [ gain_ 1.0
      [ dyn ((map <<< map) (\(AudibleChildEnd e) -> e) basics)
      ]
  , gain_ 1.0
      [ dyn ((map <<< map) (\(AudibleChildEnd e) -> e) leaps)
      ]
  ]

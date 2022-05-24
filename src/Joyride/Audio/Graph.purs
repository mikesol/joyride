module Joyride.Audio.Graph where

import Prelude

import Control.Alt ((<|>))
import Data.Int as Int
import Data.Number (pi, pow)
import Data.Time.Duration (Seconds(..))
import Data.Typelevel.Num (D2)
import Effect (Effect)
import FRP.Event (Event, bang)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.Wags (AudibleEnd(..))
import WAGS.Control (gain_)
import WAGS.Core (Audible, dyn, silence, sound)

twoPi = 2.0 * pi :: Number

midi2cps :: Int -> Number
midi2cps i = 440.0 * (2.0 `pow` (((Int.toNumber i) - 69.0) / 12.0))

graph
  :: forall lock payload
   . { lpsCallback :: Number -> Effect Unit -> Effect Unit
     , basics :: Event { startsAt :: Seconds, audio :: AudibleEnd }
     }
  -> Array (Audible D2 lock payload)
graph { lpsCallback, basics } =
  [ gain_ 1.0
      [ dyn $
          map
            ( \{ startsAt: Seconds startsAt, audio: AudibleEnd ae } ->
                ( (bang (sound ae)) <|>
                    ( lowPrioritySchedule lpsCallback
                        (startsAt + 10000.0)
                        (bang silence)
                    )
                )
            )
            basics
      ]
  ]

module Joyride.Audio.Graph where

import Prelude

import Control.Alt ((<|>))
import Data.Array.NonEmpty as NEA
import Data.Int as Int
import Data.Number (pi, pow)
import Data.Typelevel.Num (D2)
import Effect (Effect)
import FRP.Event (Event, bang)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Types (Animated)
import WAGS.Control (gain_, playBuf)
import WAGS.Core (Audible, dyn, silence, sound)
import WAGS.Properties (onOff) as P

twoPi = 2.0 * pi :: Number


midi2cps :: Int -> Number
midi2cps i = 440.0 * (2.0 `pow` (((Int.toNumber i) - 69.0) / 12.0))

graph
  :: forall lock payload
   . (Number -> Effect Unit -> Effect Unit)
  -> Event Animated
  -> Array (Audible D2 lock payload)
graph lps e =
  [ gain_ 1.0
      [ dyn $
          map
            ( \nea ->
                ( ( bang
                      ( sound
                          ( gain_ 1.0
                              ( NEA.toArray $ map
                                  ( \{ time, buffer } -> gain_ 1.0
                                      [ playBuf
                                          buffer
                                          (bang (P.onOff time))
                                      ]
                                  )
                                  nea
                              )
                          )
                      )
                  )
                    <|>
                      ( lowPrioritySchedule lps
                          ((NEA.last nea).startsAt + 10000.0)
                          (bang silence)
                      )
                )
            )
            e
      ]
  ]

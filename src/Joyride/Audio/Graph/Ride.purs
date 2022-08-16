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
import Foreign.Object as Object
import Joyride.Constants.Audio (startOffset)
import Joyride.FRP.Schedule (oneOff)
import Joyride.Ocarina (AudibleChildEnd(..))
import Ocarina.Control (gain_, playBuf)
import Ocarina.Core (Audible, AudioOnOff(..), _on, dyn)
import Ocarina.Properties (buffer, bufferOffset, onOff)
import Ocarina.WebAPI (BrowserAudioBuffer)
import Types (RateInfo, beatToTime)

twoPi = 2.0 * pi :: Number

midi2cps :: Int -> Number
midi2cps i = 440.0 * (2.0 `pow` (((Int.toNumber i) - 69.0) / 12.0))

graph
  :: forall lock payload
   . { bgtrack :: String
     , basics :: Event (Event AudibleChildEnd)
     , leaps :: Event (Event AudibleChildEnd)
     , rateInfo :: Event RateInfo
     , baseFileOffsetInSeconds :: Number
     , buffers :: Behavior (Object.Object BrowserAudioBuffer)
     , silence :: BrowserAudioBuffer
     }
  -> Array (Audible D2 lock payload)
graph { bgtrack, basics, leaps, rateInfo, silence, buffers, baseFileOffsetInSeconds } =
  [ gain_ 1.0
      [ dyn ((map <<< map) (\(AudibleChildEnd e) -> e) basics)
      ]
  , gain_ 1.0
      [ dyn ((map <<< map) (\(AudibleChildEnd e) -> e) leaps)
      ]
  , gain_ 1.0
      [ playBuf { buffer: silence }
          ( oneOf
              [ sample_ buffers (pure unit) <#> Object.lookup bgtrack >>> case _ of
                  Just b -> buffer b
                  Nothing -> buffer silence
              , pure $ bufferOffset baseFileOffsetInSeconds
              , oneOff
                  ( \i@{ beats } ->
                      if beats > startOffset then Just i else Nothing
                  )
                  rateInfo <#> (\ri -> onOff $ AudioOnOff { o: (unwrap $ beatToTime ri startOffset), x: _on })
              ]

          )
      ]
  ]

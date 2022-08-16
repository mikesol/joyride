module Joyride.Audio.Graph.Tutorial where

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
import Ocarina.Control (gain_, playBuf, convolver)
import Ocarina.Core (Audible, AudioOnOff(..), _on, dyn)
import Ocarina.Properties (buffer, bufferOffset, onOff)
import Ocarina.WebAPI (BrowserAudioBuffer)
import Types (Beats(..), RateInfo, beatToTime)

twoPi = 2.0 * pi :: Number

midi2cps :: Int -> Number
midi2cps i = 440.0 * (2.0 `pow` (((Int.toNumber i) - 69.0) / 12.0))

graph
  :: forall lock payload
   . { basics :: Event (Event AudibleChildEnd)
     , leaps :: Event (Event AudibleChildEnd)
     , longs :: Event (Event AudibleChildEnd)
     , rateInfo :: Event RateInfo
     , buffers :: Behavior (Object.Object BrowserAudioBuffer)
     , longVerb :: BrowserAudioBuffer
     , bgtrack :: String
     , silence :: BrowserAudioBuffer
     , baseFileOffsetInSeconds :: Number
     }
  -> Array (Audible D2 lock payload)
graph { basics, leaps, longs, longVerb, rateInfo, silence, buffers, bgtrack, baseFileOffsetInSeconds } =
  [ gain_ 1.0
      [ dyn ((map <<< map) (\(AudibleChildEnd e) -> e) basics)
      ]
  , gain_ 1.0
      [ dyn ((map <<< map) (\(AudibleChildEnd e) -> e) leaps)
      ]
  , convolver longVerb
      [ dyn ((map <<< map) (\(AudibleChildEnd e) -> e) longs)
      ]
  , gain_ 1.0
      [ playBuf { buffer: silence }
          ( oneOf
              [ sample_ buffers (pure unit) <#> Object.lookup bgtrack >>> case _ of
                  Just b -> buffer b
                  Nothing -> buffer silence
              , pure $ bufferOffset baseFileOffsetInSeconds
              , oneOff
                  ( \i@{ beats: Beats beats } ->
                      if beats > 0.94 then Just i else Nothing
                  )
                  rateInfo <#> (\ri -> onOff $ AudioOnOff { o: (unwrap $ beatToTime ri startOffset), x: _on })
              ]

          )
      ]
  ]

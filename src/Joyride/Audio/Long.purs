module Joyride.Audio.Long where

import Prelude

import Control.Alt ((<|>))
import Data.Typelevel.Num (D2)
import FRP.Event.EffectFn (Event)
import Joyride.Ocarina (onAt)
import Ocarina.Control (gain, playBuf)
import Ocarina.Core (Audible, AudioEnvelope(..))
import Ocarina.Properties as P
import Ocarina.WebAPI (BrowserAudioBuffer)

long
  :: forall lock payload
   . { silence :: BrowserAudioBuffer
     , buffer :: Event BrowserAudioBuffer
     , offAt :: Event Number
     , onAt :: Event Number
     }
  -> Audible D2 lock payload
long x = gain 1.0
  ( x.offAt <#> \oa -> P.gain $ AudioEnvelope
      { d: 1.0
      , o: oa
      , p: [ 1.0, 0.0 ]
      }
  )
  [ playBuf { buffer: x.silence }
      ((P.buffer <$> x.buffer) <|> onAt x.onAt) -- <|> offAt (map (add 3.0) x.offAt))
  ]
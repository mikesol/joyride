module Joyride.Audio.Long where

import Prelude

import Control.Alt ((<|>))
import Data.Typelevel.Num (D2)
import FRP.Event (Event)
import Joyride.Wags (offAt, onAt)
import WAGS.Control (gain_, playBuf)
import WAGS.Core (Audible)
import WAGS.Properties as P
import WAGS.WebAPI (BrowserAudioBuffer)

long
  :: forall lock payload
   . { silence :: BrowserAudioBuffer
     , buffer :: Event BrowserAudioBuffer
     , offAt :: Event Number
     , onAt :: Event Number
     }
  -> Audible D2 lock payload
long x = gain_ 1.0
  [ playBuf { buffer: x.silence }
      ((P.buffer <$> x.buffer) <|> onAt x.onAt <|> offAt x.offAt)
  ]
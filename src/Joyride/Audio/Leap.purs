module Joyride.Audio.Leap where

import Prelude

import Control.Alt ((<|>))
import Data.Typelevel.Num (D2)
import FRP.Event (Event)
import Joyride.Ocarina (offAt, onAt)
import Ocarina.Control (gain_, playBuf)
import Ocarina.Core (Audible)
import Ocarina.Properties as P
import Ocarina.WebAPI (BrowserAudioBuffer)

leap
  :: forall lock payload
   . { silence :: BrowserAudioBuffer
     , buffer :: Event BrowserAudioBuffer
     , offAt :: Event Number
     , onAt :: Event Number
     }
  -> Audible D2 lock payload
leap x = gain_ 1.0
  [ playBuf { buffer: x.silence }
      ((P.buffer <$> x.buffer) <|> onAt x.onAt <|> offAt x.offAt)
  ]
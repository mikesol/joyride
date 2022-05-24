module Joyride.Audio.Basic where

import Control.Alt ((<|>))
import Data.Typelevel.Num (D2)
import FRP.Event (Event)
import Joyride.Wags (offAt, onAt)
import WAGS.Control (gain_, playBuf)
import WAGS.Core (Audible)
import WAGS.WebAPI (BrowserAudioBuffer)

-- problem: audio will need to respond to visual
-- in the event hierarchy, this means that bus won't work
-- bus creates an _internal_ event bus, so it only works if we
-- have the same subscriber
-- what we really want is one of two things
-- - a single subscription for audio, visual & DOM that cases on the input
-- - a direcitonal subscription if we are sure that we won't need to close the loop
basic
  :: forall lock payload
   . { buffer :: BrowserAudioBuffer
     , offAt :: Event Number
     , onAt :: Event Number
     }
  -> Audible D2 lock payload
basic x = gain_ 1.0 [ playBuf { buffer: x.buffer } (onAt x.onAt <|> offAt x.offAt) ]
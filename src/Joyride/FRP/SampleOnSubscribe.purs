module Joyride.FRP.SampleOnSubscribe where

import Prelude

import Control.Alt ((<|>))
import Control.Plus (class Plus, empty)
import Data.Maybe (Maybe(..))
import FRP.Behavior (ABehavior, sample_)
import FRP.Event (AnEvent, bang)

sampleOnSubscribe :: forall m. Applicative m => ABehavior (AnEvent m) ~> AnEvent m
sampleOnSubscribe b = sample_ b (bang unit)

initializeWithEmpty
  :: forall m f a
   . Applicative m
  => Plus f
  => Applicative f
  => AnEvent m a
  -> AnEvent m (f a)
initializeWithEmpty e = bang empty <|> map pure e
module Joyride.FRP.SampleOnSubscribe where

import Prelude

import Control.Alt ((<|>))
import Control.Plus (class Plus, empty)
import FRP.Behavior (Behavior, sample_)
import FRP.Event (Event)

sampleOnSubscribe :: Behavior ~> Event
sampleOnSubscribe b = sample_ b (pure unit)

initializeWithEmpty
  :: forall f a
   . Plus f
  => Applicative f
  => Event a
  -> Event (f a)
initializeWithEmpty e = pure empty <|> map pure e
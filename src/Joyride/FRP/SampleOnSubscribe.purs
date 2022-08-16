module Joyride.FRP.SampleOnSubscribe where

import Prelude

import Control.Alt ((<|>))
import Control.Monad.ST.Class (class MonadST)
import Control.Plus (class Plus, empty)
import FRP.Behavior (ABehavior, sample_)
import FRP.Event (AnEvent)

sampleOnSubscribe :: forall s m. MonadST s m => ABehavior (AnEvent m) ~> AnEvent m
sampleOnSubscribe b = sample_ b (pure unit)

initializeWithEmpty
  :: forall s m f a
   . MonadST s m
  => Plus f
  => Applicative f
  => AnEvent m a
  -> AnEvent m (f a)
initializeWithEmpty e = pure empty <|> map pure e
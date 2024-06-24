module Joyride.Effect.Random where

import Prelude

import Data.Array (length, (!!))
import Data.Maybe (Maybe)
import Effect (Effect)
import Effect.Random (randomInt)

randElt :: forall a. Array a -> Effect (Maybe a)
randElt a = do
  i <- randomInt 0 (max 0 (length a - 1))
  pure $ a !! i
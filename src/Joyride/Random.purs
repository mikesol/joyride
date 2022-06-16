module Joyride.Random where

import Prelude

import Data.Array (fold, replicate)
import Data.Traversable (sequence)
import Effect (Effect)
import Effect.Random (randomInt)

randId' :: Int -> Effect String
randId' n = map fold $ sequence (replicate n (map show $ randomInt 0 9))

randId :: Effect String
randId = randId' 32
module Joyride.Random where

import Prelude

import Data.Array (fold, replicate)
import Data.Traversable (sequence)
import Effect (Effect)
import Effect.Random (randomInt)

randId :: Effect String
randId = map fold $ sequence (replicate 32 (map show $ randomInt 0 9))

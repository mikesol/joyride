module Joyride.Ledger.Long where

import Prelude

import Data.Either (Either(..))
import Data.Number (abs)
import Types (PointOutcome(..), Points(..))

magicLongPointMultiplier = 20.0 :: Number

longToPointOutcome :: Number -> Number -> PointOutcome
longToPointOutcome distance fracConsumed = PointOutcome
  $ Right
  $ Points (abs (2.0 - distance) * fracConsumed * magicLongPointMultiplier)
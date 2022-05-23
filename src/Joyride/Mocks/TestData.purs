module Joyride.Mocks.TestData where

import Prelude

import BMS.Types (Column(..), Note(..), Offset(..))
import Data.Array ((..))
import Data.Int as Int
import Data.Map (Map)
import Data.Map as Map
import Data.Tuple.Nested ((/\))

end = 15 :: Int
fac = 4.0 :: Number

i2n :: Int -> Note
i2n = Note <<< case _ of
  0 -> "VA"
  1 -> "VF"
  2 -> "VH"
  3 -> "VL"
  4 -> "VU"
  5 -> "W8"
  6 -> "5H"
  7 -> "5I"
  8 -> "5J"
  9 -> "5K"
  10 -> "5L"
  11 -> "5M"
  12 -> "5N"
  13 -> "5O"
  14 -> "5P"
  15 -> "5Q"
  _ -> "VA"

testData :: Map Column (Map Offset Note)
testData = Map.fromFoldable
  $ map
      ( \i -> (PlayColumn i) /\
          ( Map.fromFoldable $ map
              ( \j -> Offset ((Int.toNumber i / (Int.toNumber end + 1.0) * fac) + (fac * Int.toNumber j))
                  /\ i2n i
              )
              (0 .. 399)
          )
      )
      (0 .. end)
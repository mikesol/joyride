module Joyride.Editor.ADT where

import Prelude

newtype Marker = Marker { at :: Number }
newtype LongLength = LongLength { len :: Number }

data Landmark
  = LBasic { id :: Int, l1 :: Marker, l2 :: Marker, l3 :: Marker, l4 :: Marker }
  | LLeap { id :: Int, start :: Marker, end :: Marker }
  | LLong { id :: Int, start :: Marker, end :: Marker, len :: LongLength }

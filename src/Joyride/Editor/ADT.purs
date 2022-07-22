module Joyride.Editor.ADT where

import Prelude

newtype Marker = Marker { at :: Number }
newtype LongLength = LongLength { len :: Number }

data Landmark
  = LBasic { l1 :: Marker, l2 :: Marker, l3 :: Marker, l4 :: Marker }
  | LLeap { start :: Marker, end :: Marker }
  | LLong { start :: Marker, end :: Marker, len :: LongLength }

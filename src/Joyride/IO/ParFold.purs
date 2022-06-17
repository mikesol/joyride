module Joyride.IO.ParFold where

import Prelude

import Data.Symbol (class IsSymbol)
import Effect.Aff (Aff, ParAff, parallel)
import Heterogeneous.Folding (class FoldingWithIndex)
import Prim.Row (class Lacks, class Cons)
import Record (insert)
import Type.Proxy (Proxy)

data ParFold = ParFold

instance
  ( Cons sym a x' x
  , IsSymbol sym
  , Lacks sym x'
  ) =>
  FoldingWithIndex ParFold
    (Proxy sym)
    (ParAff { | x' })
    (Aff a)
    (ParAff { | x }) where
  foldingWithIndex ParFold prop x' affA = insert prop <$> parallel affA <*> x'

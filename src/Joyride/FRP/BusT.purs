module Joyride.FRP.BusT where

import Control.Monad.ST.Class (class MonadST)
import Data.Tuple.Nested ((/\), type (/\))
import FRP.Event (AnEvent)
import FRP.Event.VBus (class VBus, V, vbus)
import Prim.RowList (class RowToList)

vbust
  :: forall proxy ri i s m p e o
   . RowToList i ri
  => MonadST s m
  => VBus ri p e m
  => proxy (V i)
  -> (({ | p } /\ { | e }) -> o)
  -> AnEvent m o
vbust a b = vbus a \x y -> b (x /\ y)
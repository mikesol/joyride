module Joyride.FRP.BusT where

import Data.Tuple.Nested ((/\), type (/\))
import FRP.Event.EffectFn (Event)
import FRP.Event.EffectFn.VBus (class VBus, V, vbus)
import Prim.RowList (class RowToList)

vbust
  :: forall proxy ri i p e o
   . RowToList i ri
  => VBus ri p e
  => proxy (V i)
  -> (({ | p } /\ { | e }) -> o)
  -> Event o
vbust a b = vbus a \x y -> b (x /\ y)
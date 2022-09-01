module Joyride.FRP.Dedup where

import Prelude

import Data.Compactable (compact)
import Data.Maybe (Maybe(..))
import Data.Tuple (Tuple(..))
import FRP.Event (Event, mapAccum)

dedup :: forall a. Eq a => Event a -> Event a
dedup e = compact $
  mapAccum (\a b -> let ja = Just a in Tuple ja (if b == ja then Nothing else Just a)) e Nothing
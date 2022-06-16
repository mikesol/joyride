module Joyride.FRP.Dedup where

import Prelude

import Control.Monad.ST.Class (class MonadST)
import Data.Compactable (compact)
import Data.Maybe (Maybe(..))
import Data.Tuple (Tuple(..))
import FRP.Event (AnEvent, mapAccum)

dedup :: forall s m a. Eq a => Applicative m => MonadST s m => AnEvent m a -> AnEvent m a
dedup e = compact $
  mapAccum (\a b -> let ja = Just a in Tuple ja (if b == ja then Nothing else Just a)) e Nothing
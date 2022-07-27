module Joyride.FRP.Monad where

import Prelude

import FRP.Event (AnEvent, makeEvent)

mToEvent :: forall m. Monad m => m ~> AnEvent m
mToEvent e = makeEvent \k -> (e >>= k) *> pure (pure unit)
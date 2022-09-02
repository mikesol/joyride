module Joyride.FRP.Monad where

import Prelude

import Effect (Effect)
import FRP.Event (Event, makeEvent)

mToEvent :: Effect ~> Event
mToEvent e = makeEvent \k -> (e >>= k) *> pure (pure unit)
module Joyride.QualifiedDo.Apply where

import Data.Function (apply)
import Prelude (Unit)

bind :: forall a r. ((a -> r) -> r) -> (a -> r) -> r
bind = apply

discard :: forall r. ((Unit -> r) -> r) -> (Unit -> r) -> r
discard = apply
module Joyride.QualifiedDo.Apply where

import Data.Function (apply)
import Prelude (Unit)

bind :: forall a b. (a -> b) -> a -> b
bind = apply

discard :: forall r. ((Unit -> r) -> r) -> (Unit -> r) -> r
discard = apply
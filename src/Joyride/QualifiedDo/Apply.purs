module Joyride.QualifiedDo.Apply where

import Prelude hiding (bind, discard, apply)
import Data.Function (apply)

bind :: forall a r q. ((a -> r) -> q) -> (a -> r) -> q
bind = apply

discard :: forall r q. ((Unit -> r) -> q) -> (Unit -> r) -> q
discard = bind
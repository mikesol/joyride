module Joyride.QualifiedDo.Apply where

import Prelude

bind ∷ ∀ a b. (a -> b) -> a -> b
bind f a = f a

-- not quite right, but we'll never use it anyway
discard ∷ ∀ a b. a -> (Unit → b) -> b
discard _ f = f unit
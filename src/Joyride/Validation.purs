module Joyride.Validation where

import Prelude

disallowedUsername :: String -> Boolean
disallowedUsername = eq ""
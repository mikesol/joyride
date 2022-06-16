module Joyride.App.Clipboard where

import Prelude

import Control.Promise (Promise, toAffE)
import Effect (Effect)
import Effect.Aff (Aff)

foreign import writeText :: String -> Effect (Promise Unit)

writeTextAff :: String -> Aff Unit
writeTextAff = toAffE <<< writeText
module Joyride.Stats where

import Prelude

import Effect (Effect)
import Effect.Uncurried (EffectFn1)

data Stats

foreign import makeStats :: Effect Stats
foreign import beginStats :: EffectFn1 Stats Unit
foreign import endStats :: EffectFn1 Stats Unit

-- foreign import
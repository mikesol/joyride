module Joyride.EmitsTouchEvents where

import Effect (Effect)

foreign import emitsTouchEvents :: Effect Boolean

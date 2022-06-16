module Joyride.Screenful where

import Prelude

import Control.Promise (Promise, toAffE)
import Effect (Effect)
import Effect.Aff (Aff)
import Effect.Class.Console as Log

data Screenful

foreign import screenful :: Effect (Promise Screenful)

screenfulAff :: Aff Screenful
screenfulAff = toAffE screenful

foreign import isEnabled :: Screenful -> Boolean
foreign import request :: Screenful -> Effect (Promise Unit)

requestAff :: Screenful -> Aff Unit
requestAff = toAffE <<< request

requestFullScreen :: Aff Unit
requestFullScreen = do
  sf <- screenfulAff
  -- Log.info $ show $ isEnabled sf
  if isEnabled sf
    then requestAff sf
    else pure unit

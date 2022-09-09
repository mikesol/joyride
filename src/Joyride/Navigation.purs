module Joyride.Navigation where

import Prelude

import Effect (Effect)
import Web.HTML (window)
import Web.HTML.Location (setHash)
import Web.HTML.Window (location)

navigateToHash :: String -> Effect Unit
navigateToHash s = do
  w <- window
  l <- location w
  setHash s l
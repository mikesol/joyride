module Joyride.Navigation where

import Prelude

import Data.String (drop, take)
import Effect (Effect)
import Web.HTML (window)
import Web.HTML.Location (setHash)
import Web.HTML.Window (location)

navigateToHash :: String -> Effect Unit
navigateToHash s' = do
  let s = if take 1 s' /= "/" then "/" <> s' else if take 2 s' == "//" then drop 1 s' else s'
  w <- window
  l <- location w
  setHash s l
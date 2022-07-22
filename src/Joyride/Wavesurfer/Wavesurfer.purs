module Joyride.Wavesurfer.Wavesurfer where

import Prelude

import Effect (Effect)
import Web.DOM as Web.DOM

foreign import makeWavesurfer
  :: Effect Unit
  -> Web.DOM.Element
  -> String
  -> Effect Unit
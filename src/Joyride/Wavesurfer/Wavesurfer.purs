module Joyride.Wavesurfer.Wavesurfer where

import Prelude

import Effect (Effect)
import Web.DOM as Web.DOM

data WaveSurfer

foreign import makeWavesurfer
  :: Effect Unit
  -> Web.DOM.Element
  -> String
  -> Effect WaveSurfer

foreign import zoom :: WaveSurfer -> Number -> Effect Unit

foreign import addMarker :: WaveSurfer -> {time :: Number, label :: String, color :: String } -> Effect Unit
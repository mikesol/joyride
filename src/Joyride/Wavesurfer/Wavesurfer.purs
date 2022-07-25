module Joyride.Wavesurfer.Wavesurfer where

import Prelude

import Effect (Effect)
import Web.DOM as Web.DOM

data WaveSurfer

foreign import makeWavesurfer
  :: Array Marker -> Effect Unit
  -> Web.DOM.Element
  -> String
  -> Effect WaveSurfer

foreign import zoom :: WaveSurfer -> Number -> Effect Unit
type Marker = {time :: Number, label :: String, color :: String }
foreign import addMarker :: WaveSurfer -> Marker -> Effect Unit
foreign import hideMarker :: WaveSurfer -> Int -> Effect Unit
foreign import showMarker :: WaveSurfer -> Int -> Effect Unit
module Joyride.Wavesurfer.Wavesurfer where

import Prelude

import Data.Maybe (Maybe)
import Effect (Effect)
import Web.DOM as Web.DOM

data WaveSurfer
data MarkerBlob

foreign import getMarkers :: WaveSurfer -> Effect (Array { time :: Number, id :: Int, offset :: Int, blob :: MarkerBlob })

foreign import makeWavesurfer
  :: Maybe String
  -> (String -> Maybe String)
  -> (Int -> Int -> Int -> Maybe String -> Number -> Effect Unit)
  -> Effect Unit
  -> Web.DOM.Element
  -> String
  -> Effect WaveSurfer

foreign import zoom :: WaveSurfer -> Number -> Effect Unit
type Marker = { time :: Number, label :: String, color :: String }

foreign import addMarker :: WaveSurfer -> Int -> Int -> Marker -> Effect MarkerBlob
foreign import associateEventDocumentIdWithMarker :: MarkerBlob -> String -> Effect Unit
foreign import associateEventDocumentIdWithSortedMarkerIdList :: WaveSurfer -> Array { ix :: Int, id :: String } -> Effect Unit
foreign import hideMarker :: WaveSurfer -> Int -> Effect Unit
foreign import mute :: WaveSurfer -> Int -> Effect Unit
foreign import muteExcept :: WaveSurfer -> Array (Array Int) -> Effect Unit
foreign import removeMarker :: WaveSurfer -> Int -> Effect Unit
foreign import showMarker :: WaveSurfer -> Int -> Effect Unit
foreign import getCurrentTime :: WaveSurfer -> Effect Number
foreign import getDuration :: WaveSurfer -> Effect Number
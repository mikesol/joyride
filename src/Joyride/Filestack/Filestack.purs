module Joyride.Filestack.Filestack where

import Prelude

import Effect (Effect)
import Effect.Exception (Error)

data FSClient

foreign import init :: Effect FSClient

type PickerFileMetadata = { url :: String }
type FSProgressEvent = { totalBytes :: Number, totalPercent :: Number }

foreign import picker
  :: (PickerFileMetadata -> Effect Unit) -- cancel
  -> (PickerFileMetadata -> Error -> Effect Unit) -- error
  -> (PickerFileMetadata -> FSProgressEvent -> Effect Unit) -- progress
  -> (PickerFileMetadata -> Effect Unit) -- success
  -> FSClient
  -> Effect Unit

foreign import pickerAccepting
  :: Array String -- https://filestack.github.io/filestack-js/interfaces/pickeroptions.html#accept
  -> (PickerFileMetadata -> Effect Unit) -- cancel
  -> (PickerFileMetadata -> Error -> Effect Unit) -- error
  -> (PickerFileMetadata -> FSProgressEvent -> Effect Unit) -- progress
  -> (PickerFileMetadata -> Effect Unit) -- success
  -> FSClient
  -> Effect Unit
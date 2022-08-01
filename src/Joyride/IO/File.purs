module Joyride.IO.File where

import Control.Promise (Promise)
import Effect (Effect)
import Web.File.FileList (FileList)

foreign import fileList :: Effect (Promise FileList)
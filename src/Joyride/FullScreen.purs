module Joyride.FullScreen where

import Prelude

import Data.Maybe (Maybe(..))
import Effect (Effect)
import Joyride.LocalStorage as LocalStorage
import Web.HTML (window)
import Web.HTML.Window (localStorage)
import Web.Storage.Storage as LS
import Joyride.EmitsTouchEvents (emitsTouchEvents)

foreign import fullscreenEnabled :: Effect Boolean
foreign import requestFullScreen :: Effect Unit -> Effect Unit -> Effect Unit
foreign import exitFullScreen :: Effect Unit -> Effect Unit -> Effect Unit

simpleExitFullScreen :: Effect Unit
simpleExitFullScreen = exitFullScreen (pure unit) (pure unit)

fullScreenFlow :: Effect Unit -> Effect Unit
fullScreenFlow cont = emitsTouchEvents >>= case _ of
  false -> cont
  true -> do
    w <- window
    -- storage
    stor <- localStorage w
    grantState <- LS.getItem LocalStorage.fullScreenGrantState stor
    let
      flow = do
        enabled <- fullscreenEnabled
        let fsf st = LS.setItem LocalStorage.fullScreenGrantState st stor *> cont
        if enabled then requestFullScreen (fsf LocalStorage.fullScreenDenied) (fsf LocalStorage.fullScreenGranted) else cont
    case grantState of
      Nothing -> flow
      Just x
        | x == LocalStorage.fullScreenGranted -> flow
        | otherwise -> cont

module Joyride.FRP.Orientation where

import Prelude

import Data.DateTime.Instant (unInstant)
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Effect (Effect)
import Effect.Now (now)
import Effect.Ref as Ref
import FRP.Event (Event, create)
import Joyride.Transport.PubNub (PlayerAction(..), PubNub, publish)
import Types (Orientation, Player, GTP)
import Unsafe.Coerce (unsafeCoerce)
import Web.Event.Event (EventType(..))
import Web.Event.EventTarget (addEventListener, eventListener)
import Web.HTML (Window)
import Web.HTML.Window (toEventTarget)


posFromOrientation :: GTP -> Number -> Number
posFromOrientation gtp time = case gtp.time of
  Nothing -> 0.0
  Just t -> min 1.0 $ max (-1.0) $ (time - t) * gtp.gamma * orientationDampening + gtp.pos
  where
  orientationDampening = 0.001 :: Number

xForTouch ::  Window ->Player -> PubNub -> Effect (Event (Number -> Number))
xForTouch w myPlayer pubNub = do
  evt <- create
  xpe <- Ref.new { gamma: 0.0, time: Nothing, pos: 0.0 }
  orientationListener <- eventListener \e' -> do
    let e = (unsafeCoerce :: _ -> Orientation) e'
    time <- map (unInstant >>> unwrap) now
    nw <- Ref.modify (\gtp -> { gamma: e.gamma, time: Just time, pos: posFromOrientation gtp time }) xpe
    publish pubNub { action: XPositionMobile nw, player: myPlayer }
    evt.push nw
  addEventListener (EventType "deviceorientation") orientationListener true (toEventTarget w)
  pure (map posFromOrientation evt.event)
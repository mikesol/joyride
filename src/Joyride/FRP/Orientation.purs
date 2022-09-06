module Joyride.FRP.Orientation where

import Prelude

import Control.Promise (Promise)
import Data.Maybe (Maybe(..))
import Data.Profunctor (lcmap)
import Data.Time.Duration (Milliseconds(..))
import Effect (Effect)
import Effect.Ref as Ref
import FRP.Event (Event, create)
import Safe.Coerce (coerce)
import Types (GTP, JMilliseconds(..), Orientation, Player, PlayerAction(..), RateInfo)
import Unsafe.Coerce (unsafeCoerce)
import Web.Event.Event (EventType(..))
import Web.Event.EventTarget (addEventListener, eventListener)
import Web.HTML (Window)
import Web.HTML.Window (toEventTarget)

foreign import hasOrientationPermission :: Effect Boolean
foreign import orientationPermission :: Effect (Promise Boolean)

posFromOrientation :: GTP -> JMilliseconds -> Number
posFromOrientation gtp (JMilliseconds curMs) = case gtp.time of
  Nothing -> 0.0
  -- ugggh. why 2.5? why not... seems to work...
  Just (JMilliseconds prevMs) -> min 2.5 $ max (-2.5) $ ((curMs - prevMs) / 1000.0) * gtp.gamma * orientationDampening + gtp.pos
  where
  orientationDampening = 0.055 :: Number

xForTouch :: Effect Milliseconds -> Window -> Player -> (PlayerAction -> Effect Unit) ->  Effect (Event (RateInfo -> Number))
xForTouch cnow w myPlayer pub = do
  evt <- create
  xpe <- Ref.new { gamma: 0.0, time: Nothing, pos: 0.0 }
  do
    orientationListener <- eventListener \e' -> do
      let e = (unsafeCoerce :: _ -> Orientation) e'
      time <- coerce <$> cnow
      nw <- Ref.modify (\gtp -> { gamma: e.gamma, time: Just time, pos: posFromOrientation gtp time }) xpe
      pub $ XPositionMobile { gtp: nw, player: myPlayer }
      evt.push nw
    addEventListener (EventType "deviceorientation") orientationListener true (toEventTarget w)
    pure ((posFromOrientation >>> lcmap _.epochTime) <$> evt.event)
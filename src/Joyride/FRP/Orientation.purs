module Joyride.FRP.Orientation where

import Prelude

import Control.Promise (Promise)
import Data.DateTime.Instant (unInstant)
import Data.Maybe (Maybe(..))
import Data.Profunctor (lcmap)
import Data.Time.Duration (Milliseconds(..))
import Effect (Effect)
import Effect.Now (now)
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
  Just (JMilliseconds prevMs) -> min 1.0 $ max (-1.0) $ ((curMs - prevMs) / 1000.0) * gtp.gamma * orientationDampening + gtp.pos
  where
  orientationDampening = 0.03 :: Number

xForTouch :: Window -> Player -> (PlayerAction -> Effect Unit) ->  Effect (Event (RateInfo -> Number))
xForTouch w myPlayer pub = do
  evt <- create
  xpe <- Ref.new { gamma: 0.0, time: Nothing, pos: 0.0 }
  do
    orientationListener <- eventListener \e' -> do
      let e = (unsafeCoerce :: _ -> Orientation) e'
      time <- unInstant >>> coerce <$> now
      nw <- Ref.modify (\gtp -> { gamma: e.gamma, time: Just time, pos: posFromOrientation gtp time }) xpe
      pub $ XPositionMobile { gtp: nw, player: myPlayer }
      evt.push nw
    addEventListener (EventType "deviceorientation") orientationListener true (toEventTarget w)
    pure ((posFromOrientation >>> lcmap _.epochTime) <$> evt.event)
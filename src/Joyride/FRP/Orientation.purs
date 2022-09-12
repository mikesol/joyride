module Joyride.FRP.Orientation where

import Prelude

import Control.Promise (Promise)
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Profunctor (lcmap)
import Data.Time.Duration (Milliseconds(..))
import Effect (Effect)
import Effect.Ref as Ref
import FRP.Event (Event, create)
import Joyride.Constants.Visual (initialOrientationDampening)
import Safe.Coerce (coerce)
import Types (GTPD, JMilliseconds(..), Orientation, Player, PlayerAction(..), RateInfo)
import Unsafe.Coerce (unsafeCoerce)
import Web.Event.Event (EventType(..))
import Web.Event.EventTarget (addEventListener, eventListener)
import Web.HTML (Window)
import Web.HTML.Window (toEventTarget)

foreign import hasOrientationPermission :: Effect Boolean
foreign import orientationPermission :: Effect (Promise Boolean)

posFromOrientation :: GTPD -> JMilliseconds -> Number
posFromOrientation gtpd curMs = case gtpd.time of
  Nothing -> 0.0
  -- ugggh. why 2.5? why not... seems to work...
  Just (JMilliseconds prevMs) -> min 2.5 $ max (-2.5) $ ((unwrap curMs - prevMs) / 1000.0) * gtpd.gamma * gtpd.dampening + gtpd.pos

xForTouch :: Ref.Ref Number -> Effect Milliseconds -> Window -> Player -> (PlayerAction -> Effect Unit) -> Effect (Event (RateInfo -> Number))
xForTouch dampeningRef cnow w myPlayer pub = do
  evt <- create
  xpe <- Ref.new { gamma: 0.0, time: Nothing, pos: 0.0, dampening: initialOrientationDampening }
  do
    orientationListener <- eventListener \e' -> do
      let e = (unsafeCoerce :: _ -> Orientation) e'
      time <- coerce <$> cnow
      dampening <- Ref.read dampeningRef
      nw <- Ref.modify
        ( \gtpd ->
            { gamma: e.gamma
            , time: Just time
            , dampening
            , pos: posFromOrientation gtpd time
            }
        )
        xpe
      pub $ XPositionMobile { gtpd: nw, player: myPlayer }
      evt.push nw
    addEventListener (EventType "deviceorientation") orientationListener true (toEventTarget w)
    pure ((posFromOrientation  >>> lcmap _.epochTime) <$> evt.event)
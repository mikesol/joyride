module Joyride.FRP.Keypress where

import Prelude

import Data.DateTime.Instant (unInstant)
import Data.Foldable (traverse_)
import Data.Maybe (Maybe(..))
import Data.Number (pow)
import Data.Profunctor (lcmap)
import Data.Time.Duration (Milliseconds(..))
import Effect (Effect)
import Effect.Now (now)
import Effect.Ref as Ref
import FRP.Event (Event, create)
import Types (KTP, Player, PlayerAction(..), RateInfo, XDirection(..))
import Web.Event.Event (EventType(..))
import Web.Event.EventTarget (addEventListener, eventListener)
import Web.HTML (Window)
import Web.HTML.Window (toEventTarget)
import Web.UIEvent.KeyboardEvent (code)
import Web.UIEvent.KeyboardEvent as KeyboardEvent

-- primitive, but no need to worry about friction...
posFromKeypress :: KTP -> Milliseconds -> Number
posFromKeypress ktp (Milliseconds curMs) = case ktp.time of
  Nothing -> 0.0
  Just (Milliseconds prevMs) ->
    let
      tdiff = (curMs - prevMs) * msToSeconds
      -- acceleration
      tdiffsqo2 = dampeningFactor * (tdiff `pow` 2.0) / 2.0
    in
      case ktp.curXDir of
        Still -> ktp.pos
        ToLeft -> -2.0 * tdiffsqo2 + ktp.pos
        ToRight -> 2.0 * tdiffsqo2 + ktp.pos
  where
  msToSeconds = 1.0 / 1000.0
  dampeningFactor = 0.77

xForKeyboard :: Window -> Player -> (PlayerAction -> Effect Unit) -> Effect (Event (RateInfo -> Number))
xForKeyboard w myPlayer pub = do
  evt <- create
  xpe <- Ref.new { curXDir: Still, time: Nothing, pos: 0.0 }
  let
    makeListener isUp = eventListener
      $ KeyboardEvent.fromEvent >>> traverse_ \e -> do
          let keyCode = code e
          when (keyCode == "ArrowLeft" || keyCode == "ArrowRight") do
            let
              curXDir
                | isUp = Still
                | keyCode == "ArrowLeft" = ToLeft
                | otherwise = ToRight
            time <- unInstant <$> now
            nw <- Ref.modify (\ktp -> if ktp.curXDir == curXDir then ktp else { curXDir, time: Just time, pos: posFromKeypress ktp time }) xpe
            evt.push nw
            pub $ XPositionKeyboard { ktp:  nw, player: myPlayer }
  keydownListener <- makeListener false
  keyupListener <- makeListener true
  addEventListener (EventType "keydown") keydownListener true (toEventTarget w)
  addEventListener (EventType "keyup") keyupListener true (toEventTarget w)
  pure ((posFromKeypress >>> lcmap _.epochTime) <$> evt.event)
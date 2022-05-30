module Joyride.FRP.Keypress where

import Prelude

import Data.DateTime.Instant (unInstant)
import Data.Foldable (traverse_)
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Number (pow)
import Effect (Effect)
import Effect.Now (now)
import Effect.Ref as Ref
import FRP.Event (Event, create)
import Joyride.Transport.PubNub (PlayerAction(..), PubNub, publish)
import Types (Player, XDirection(..), KTP)
import Web.Event.Event (EventType(..))
import Web.Event.EventTarget (addEventListener, eventListener)
import Web.HTML (Window)
import Web.HTML.Window (toEventTarget)
import Web.UIEvent.KeyboardEvent (code)
import Web.UIEvent.KeyboardEvent as KeyboardEvent


-- primitive, but no need to worry about friction...
posFromKeypress :: KTP -> Number -> Number
posFromKeypress ktp time = case ktp.time of
  Nothing -> 0.0
  Just t ->
    let
      tdiff = (time - t) / 1000.0
      tdiffsqo2 = (tdiff `pow` 2.0) / 2.0
    in
      case ktp.curXDir of
        Still -> ktp.pos
        ToLeft -> -2.0 * tdiffsqo2 + ktp.pos
        ToRight -> 2.0 * tdiffsqo2 + ktp.pos

xForKeyboard :: Window -> Player -> PubNub -> Effect (Event (Number -> Number))
xForKeyboard w myPlayer pubNub = do
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
            -- Log.info keyCode
            time <- map (unInstant >>> unwrap) now
            nw <- Ref.modify (\ktp -> if ktp.curXDir == curXDir then ktp else { curXDir, time: Just time, pos: posFromKeypress ktp time }) xpe
            evt.push nw
            publish pubNub { action: XPositionKeyboard nw, player: myPlayer }
  keydownListener <- makeListener false
  keyupListener <- makeListener true
  addEventListener (EventType "keydown") keydownListener true (toEventTarget w)
  addEventListener (EventType "keyup") keyupListener true (toEventTarget w)
  pure (posFromKeypress <$> evt.event)
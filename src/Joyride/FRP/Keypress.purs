module Joyride.FRP.Keypress where

import Prelude

import Data.Foldable (traverse_)
import Data.Maybe (Maybe(..))
import Data.Number (pow)
import Data.Profunctor (lcmap)
import Data.Time.Duration (Milliseconds(..))
import Effect (Effect)
import Effect.Ref as Ref
import FRP.Event (Event, create)
import Joyride.Constants.Visual (keyboardInitialDampeningFactor)
import Safe.Coerce (coerce)
import Types (JMilliseconds(..), KTPD, Player, PlayerAction(..), RateInfo, XDirection(..))
import Web.Event.Event (EventType(..))
import Web.Event.EventTarget (addEventListener, eventListener)
import Web.HTML (Window)
import Web.HTML.Window (toEventTarget)
import Web.UIEvent.KeyboardEvent (code)
import Web.UIEvent.KeyboardEvent as KeyboardEvent

-- primitive, but no need to worry about friction...
posFromKeypress :: KTPD -> JMilliseconds -> Number
posFromKeypress ktpd (JMilliseconds curMs) = case ktpd.time of
  Nothing -> 0.0
  Just (JMilliseconds prevMs) ->
    let
      tdiff = (curMs - prevMs) * msToSeconds
      -- acceleration
      tdiffsqo2 = ktpd.dampening * (tdiff `pow` 2.0) / 2.0
    in
      case ktpd.curXDir of
        Still -> ktpd.pos
        ToLeft -> -2.0 * tdiffsqo2 + ktpd.pos
        ToRight -> 2.0 * tdiffsqo2 + ktpd.pos
  where
  msToSeconds = 1.0 / 1000.0

xForKeyboard :: Effect Milliseconds -> Window -> Player -> (PlayerAction -> Effect Unit) -> Effect (Event (RateInfo -> Number))
xForKeyboard cnow w myPlayer pub = do
  evt <- create
  xpe <- Ref.new { curXDir: Still, time: Nothing, pos: 0.0, dampening: keyboardInitialDampeningFactor }
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
            time <- coerce <$> cnow
            nw <- Ref.modify
              ( \ktpd ->
                  if ktpd.curXDir == curXDir then ktpd
                  else
                    { curXDir
                    , time: Just time
                    , pos: posFromKeypress ktpd time
                    , dampening: ktpd.dampening
                    }
              )
              xpe
            evt.push nw
            pub $ XPositionKeyboard { ktpd: nw, player: myPlayer }
  keydownListener <- makeListener false
  keyupListener <- makeListener true
  addEventListener (EventType "keydown") keydownListener true (toEventTarget w)
  addEventListener (EventType "keyup") keyupListener true (toEventTarget w)
  pure ((posFromKeypress >>> lcmap _.epochTime) <$> evt.event)
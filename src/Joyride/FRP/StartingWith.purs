module Joyride.FRP.StartingWith where

import Prelude

import Control.Alt (class Alt, (<|>))
import FRP.Event.Class (class IsEvent)

startingWith :: forall e a. Alt e => IsEvent e => a -> e a -> e a
startingWith a e = pure a <|> e
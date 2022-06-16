module Joyride.FRP.StartingWith where

import Control.Alt (class Alt, (<|>))
import FRP.Event.Class (class IsEvent, bang)

startingWith :: forall e a. Alt e => IsEvent e => a -> e a -> e a
startingWith a e = bang a <|> e
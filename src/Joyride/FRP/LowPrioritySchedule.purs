module Joyride.FRP.LowPrioritySchedule where

import Prelude

import Data.Time.Duration (Milliseconds)
import Effect (Effect)
import FRP.Event (Event, subscribe, makeEvent)

lowPrioritySchedule
  :: (Milliseconds -> Effect Unit -> Effect Unit) -> Milliseconds -> Event ~> Event
lowPrioritySchedule f n e = makeEvent \k -> do
  void $ subscribe e \i ->
    f n (k i)
  pure (pure unit)

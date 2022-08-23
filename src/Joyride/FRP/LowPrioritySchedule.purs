module Joyride.FRP.LowPrioritySchedule where

import Prelude

import Effect (Effect)
import FRP.Event (Event, subscribe, makeEvent)

lowPrioritySchedule
  :: forall n. (n -> Effect Unit -> Effect Unit) -> n -> Event ~> Event
lowPrioritySchedule f n e = makeEvent \k -> do
  void $ subscribe e \i ->
    f n (k i)
  pure (pure unit)

schedulingIntervalInMS :: Int
schedulingIntervalInMS = 1000
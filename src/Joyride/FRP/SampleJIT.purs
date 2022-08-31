module Joyride.FRP.SampleJIT where

import Prelude

import Effect.Aff (joinFiber, launchAff, launchAff_)
import Effect.Aff.AVar as AVar
import Effect.Class (liftEffect)
import FRP.Event.EffectFn (Event, subscribe, makeEvent)

-- | Samples the first event JIT when the second event is actually used.
-- | This is like sampleOn, but it defers the sampling until the avar is consumed.
-- | Useful when the second event is an effectful callbaack
-- | in which case we do not want to recreate the callback
-- | every time the first event fires.
sampleJIT :: forall a b. Event a -> Event (AVar.AVar a -> b) -> Event b
sampleJIT e ae = makeEvent \k -> do
  o <- launchAff do
    av <- AVar.empty
    liftEffect do
      u0 <- subscribe e \v -> launchAff_ do
        void $ AVar.tryTake av
        AVar.put v av
      u1 <- subscribe ae \v -> k (v av)
      pure (u0 *> u1)
  pure $ launchAff_ do
    thunk <- joinFiber o
    liftEffect thunk
module Joyride.FRP.Aff where

import Prelude

import Data.Either (Either(..))
import Data.Int (round)
import Effect.Aff (Aff, Canceler(..), Milliseconds(..), error, killFiber, launchAff, launchAff_, makeAff)
import Effect.Class (liftEffect)
import Effect.Ref as Ref
import Effect.Timer (clearTimeout, setTimeout)
import FRP.Event.EffectFn (Event, makeEvent, subscribe)

-- if the cancelers cancels, theoretically we don't need to unsubscribe
-- as nothing will be firing
affToEvent :: Aff ~> Event
affToEvent a = makeEvent \k -> do
  fib <- launchAff (a >>= liftEffect <<< k)
  pure (launchAff_ (killFiber (error "Event unsubscribed") fib))

eventToAff :: Event ~> Aff
eventToAff e = makeAff \k -> do
  u <- Ref.new (pure unit)
  unsub <- subscribe e \v -> do
    k (Right v)
    join (Ref.read u)
    Ref.write (pure unit) u
  Ref.write unsub u
  pure (Canceler \_ -> liftEffect (join (Ref.read u)))

collectEventToAff :: forall a. Milliseconds -> Event a -> Aff (Array a)
collectEventToAff (Milliseconds ms) e = makeAff \k -> do
  c <- Ref.new []
  tid <- setTimeout (round ms) do
    Ref.read c >>= k <<< Right
  unsub <- subscribe e \v -> do
    Ref.modify_ (_ <> [ v ]) c
  pure (Canceler \_ -> liftEffect (clearTimeout tid) *> liftEffect unsub)
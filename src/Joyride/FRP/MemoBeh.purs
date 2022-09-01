module Joyride.FRP.Beh where

import Prelude

import Control.Monad.ST.Class (liftST)
import Control.Monad.ST.Internal as STRef
import FRP.Event (Event, create, makeEvent, subscribe)

memoBeh :: forall a r. Event a -> a -> (Event a -> r) -> Event r
memoBeh e a f = makeEvent \k -> do
  { push, event } <- create
  current <- liftST (STRef.new a)
  let
    writeVal v = liftST (STRef.write v current)
    event' = makeEvent \k' -> do
      liftST (STRef.read current) >>= k'
      subscribe event k'
  k (f event')
  subscribe e (\v -> writeVal v *> push v)
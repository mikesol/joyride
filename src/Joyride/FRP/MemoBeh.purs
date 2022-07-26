module Joyride.FRP.Beh where

import Prelude

import Control.Monad.ST.Class (class MonadST, liftST)
import Control.Monad.ST.Internal as STRef
import FRP.Event (AnEvent, create, makeEvent, subscribe)

memoBeh :: forall m a t r. Applicative m => MonadST t m => AnEvent m a -> a -> (AnEvent m a -> r) -> AnEvent m r
memoBeh e a f = makeEvent \k -> do
  { push, event } <- create
  current <- liftST (STRef.new a)
  let
    writeVal v = liftST (STRef.write v current) :: m a
    event' = makeEvent \k' -> do
      liftST (STRef.read current) >>= k'
      subscribe event k'
  k (f event')
  subscribe e (\v -> writeVal v *> push v)
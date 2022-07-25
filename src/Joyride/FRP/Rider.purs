module Joyride.FRP.Rider where

import Prelude

import Data.Exists (Exists, mkExists, runExists)
import Data.Newtype (class Newtype, unwrap)
import FRP.Event (AnEvent, makeEvent, subscribe)

-- todo: export from hyrule
type AnEventIO m a =
  { event :: AnEvent m a
  , push :: a -> m Unit
  }
newtype RiderF m a = RiderF (AnEventIO m a)

derive instance Newtype (RiderF m a) _
type Rider m = Exists (RiderF m)

toRide :: forall m a. AnEventIO m a -> Rider m
toRide i = mkExists (RiderF i)

rider :: forall m. Monad m => Rider m -> AnEvent m ~> AnEvent m
rider r e = makeEvent \k -> do
  u0 <- subscribe e k
  u1 <- runExists (unwrap >>> (subscribe <$> _.event <*> _.push)) r
  pure (u0 *> u1)
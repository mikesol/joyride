module Joyride.FRP.Rider where

import Prelude

import Data.Exists (Exists, mkExists, runExists)
import Data.Newtype (class Newtype, unwrap)
import FRP.Event (Event, EventIO, makeEvent, subscribe)

newtype RiderF a = RiderF (EventIO a)

derive instance Newtype (RiderF a) _
type Rider = Exists RiderF

toRide :: forall a. EventIO a -> Rider
toRide i = mkExists (RiderF i)

rider :: Rider -> Event ~> Event
rider r e = makeEvent \k -> do
  u0 <- subscribe e k
  u1 <- runExists (unwrap >>> (subscribe <$> _.event <*> _.push)) r
  pure (u0 *> u1)
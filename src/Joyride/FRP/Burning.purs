module Joyride.FRP.Burning where

import Prelude

import Control.Alt ((<|>))
import Control.Monad.ST.Class (class MonadST, liftST)
import Control.Monad.ST.Internal as Ref
import FRP.Event (AnEvent, create, makeEvent, subscribe)

-- | Makes an event _burning_ hot. Like hot, it will start firing immediately on left bind. In addition, it _always_ fires _immediately_ upon subscription with the most recent value.
burning
  :: forall m s a
   . MonadST s m
  => a
  -> AnEvent m a
  -> m { event :: AnEvent m a, unsubscribe :: m Unit }
burning i e = do
  r <- liftST $ Ref.new i
  { event, push } <- create
  unsubscribe <- subscribe e \x -> do
    _ <- liftST $ Ref.write x r
    push x
  pure
    { event: event <|> makeEvent \k -> do
        liftST (Ref.read r) >>= k
        pure (pure unit)
    , unsubscribe
    }

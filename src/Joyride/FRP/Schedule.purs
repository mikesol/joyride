module Joyride.FRP.Schedule where

import Prelude

import Control.Comonad (extract)
import Control.Comonad.Cofree (Cofree)
import Control.Comonad.Cofree.Class (unwrapCofree)
import Control.Monad.ST.Class (class MonadST, liftST)
import Control.Monad.ST.Internal as Ref
import Data.Compactable (compact)
import Data.Either (Either(..))
import Data.Maybe (Maybe(..))
import Data.Tuple.Nested (type (/\), (/\))
import FRP.Event (AnEvent, makeEvent, mapAccum, subscribe)

fireAndForget
  :: forall s m
   . MonadST s m
  => AnEvent m ~> AnEvent m
fireAndForget = oneOff Just

oneOff :: forall s m a b
   . MonadST s m
  => (a -> Maybe b)
  -> AnEvent m a
  -> AnEvent m b
oneOff f e = compact $ emitUntil (\a -> case f a of
  Nothing -> Right Nothing
  Just x -> Left (Just x)) e

emitUntil
  :: forall s m a b
   . MonadST s m
  => (a -> Either b b)
  -> AnEvent m a
  -> AnEvent m b
emitUntil aToB e = makeEvent \k -> do
  r <- liftST $ Ref.new true
  u <- liftST $ Ref.new (pure unit)
  usu <- subscribe e \n -> do
    l <- liftST $ Ref.read r
    when l $ do
      case aToB n of
        Right b -> k b
        Left b -> do
          k b
          void $ liftST $ Ref.write false r
          join (liftST $ Ref.read u)
          void $ liftST $ Ref.write (pure unit) u
  void $ liftST $ Ref.write usu u
  pure do
    join (liftST $ Ref.read u)

scheduleCf
  :: forall s m r val
   . MonadST s m
  => (r -> Cofree ((->) r) val)
  -> AnEvent m r
  -> AnEvent m val
scheduleCf ll e = makeEvent \k -> do
  r <- liftST $ Ref.new ll
  u <- liftST $ Ref.new (pure unit)
  usu <- subscribe e \n -> do
    l <- liftST $ Ref.read r
    let { init, rest } = go n l
    k init
    void $ liftST $ Ref.write rest r
  void $ liftST $ Ref.write usu u
  pure do
    join (liftST $ Ref.read u)
  where
  go n f = let c = f n in { init: extract c, rest: unwrapCofree c }
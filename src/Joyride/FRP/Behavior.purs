module Joyride.FRP.Behavior where

import Prelude

import Control.Monad.ST.Class (liftST)
import Control.Monad.ST.Internal as RRef
import Data.Compactable (compact)
import Data.Maybe (Maybe(..))
import Effect (Effect)
import Effect.Ref as Ref
import FRP.Behavior (ABehavior, Behavior, behavior, sampleBy)
import FRP.Event (Event, makeEvent, subscribe)

-- | Turns a mutable reference into a behavior
refToBehavior :: Ref.Ref ~> Behavior
refToBehavior r = behavior \e -> makeEvent \k -> subscribe e \f -> Ref.read r >>=
  (k <<< f)

-- | A behavior that mutes values based on a predicate. It's sort of like filter map.
misbehavior :: forall a b. (a -> Maybe b) -> ABehavior (Event) a -> Behavior b
misbehavior mab bv = behavior \e -> compact $ sampleBy
  ( \a f -> case mab a of
      Nothing -> Nothing
      Just b -> Just (f b)
  )
  bv
  e

howShouldIBehave :: forall a. Effect a -> Event (Effect a) -> Behavior a
howShouldIBehave m e1 = behavior \e2 -> makeEvent \k -> do
  r <- liftST $ RRef.new m
  u0 <- subscribe e1 \m' -> void $ liftST $ RRef.write m' r
  u1 <- subscribe e2 \f -> do
    m' <- liftST $ RRef.read r
    m' >>= k <<< f
  pure (u0 *> u1)

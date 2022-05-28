module Joyride.FRP.Behavior where

import Prelude

import Data.Compactable (compact)
import Data.Maybe (Maybe(..))
import Effect.Ref as Ref
import FRP.Behavior (Behavior, behavior, sampleBy)
import FRP.Event (makeEvent, subscribe)

-- | Turns a mutable reference into a behavior
refToBehavior :: Ref.Ref ~> Behavior
refToBehavior r = behavior \e -> makeEvent \k -> subscribe e \f -> Ref.read r >>=
  (k <<< f)

-- | A behavior that mutes values based on a predicate. It's sort of like filter map.
misbehavior :: forall a b. (a -> Maybe b) -> Behavior a -> Behavior b
misbehavior mab bv = behavior \e -> compact $ sampleBy
  ( \a f -> case mab a of
      Nothing -> Nothing
      Just b -> Just (f b)
  )
  bv
  e

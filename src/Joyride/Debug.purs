module Joyride.Debug where

import Prelude

import Control.Monad.ST.Class (liftST)
import Control.Monad.ST.Internal as Ref
import Data.Array (deleteBy)
import Data.Array as Array
import Data.Foldable (traverse_)
import Debug (traceM)
import Effect (Effect)
import Effect.Unsafe (unsafePerformEffect)
import FRP.Event.EffectFn (Create(..), Event, Backdoor, makeEvent, sampleOn_)
import Unsafe.Reference (unsafeRefEq)

debugX :: forall a. Boolean -> Event a -> Event Unit
debugX tf e = if tf then void e else pure unit

debugX' :: forall a r. Boolean -> Event a -> Event r -> Event a
debugX' tf e r = if tf then sampleOn_ e r else e

foreign import incrSub :: Effect Unit
foreign import decrSub :: Effect Unit


altCreate :: Create
altCreate = Create do
  subscribers <- liftST $ Ref.new []
  pure
    { event:
        makeEvent \k -> do
          _ <- liftST $ Ref.modify (_ <> [ k ]) subscribers
          pure (unsafePerformEffect incrSub)
          pure do
            l0 <- Array.length <$> liftST (Ref.read subscribers)
            _ <- liftST $ Ref.modify (deleteBy unsafeRefEq k) subscribers
            l1 <- Array.length <$> liftST (Ref.read subscribers)
            when (l0 /= l1) do
              pure (unsafePerformEffect decrSub)
            pure unit
    , push:
        \a -> do
          (liftST $ (Ref.read subscribers)) >>= traverse_ \k -> k a
    }

foreign import monkeyPatchCreateImpl :: Backdoor -> Create -> Effect Unit
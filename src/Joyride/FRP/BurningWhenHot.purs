module Joyride.FRP.BurningWhenHot where

import Prelude

import Data.Array (deleteBy)
import Data.Foldable (traverse_)
import Data.Maybe (Maybe(..))
import Effect (Effect, foreachE)
import Effect.Ref as Ref
import FRP.Event (EventIO, makeEvent)
import Unsafe.Reference (unsafeRefEq)

burningWhenHot
  :: forall a
   . Effect (EventIO a)
burningWhenHot = do
  subscribers <- Ref.new []
  mostRecent <- Ref.new Nothing
  pure
    { event:
        makeEvent \k -> do
          rk <- Ref.new k
          Ref.modify_ (_ <> [ rk ]) subscribers
          Ref.read mostRecent >>= traverse_ k
          pure do
            Ref.write mempty rk
            _ <- Ref.modify (deleteBy unsafeRefEq rk) subscribers
            pure unit
    , push:
        \a -> do
          Ref.write (Just a) mostRecent
          o <- Ref.read subscribers
          foreachE o \rk -> do
            k <- Ref.read rk
            k a
    }
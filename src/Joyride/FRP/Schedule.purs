module Joyride.FRP.Schedule where

import Prelude

import Control.Comonad (extract)
import Control.Comonad.Cofree (Cofree)
import Control.Comonad.Cofree.Class (unwrapCofree)
import Control.Monad.ST.Class (liftST)
import Control.Monad.ST.Internal as Ref
import Data.Compactable (compact)
import Data.Maybe (Maybe(..))
import Data.Tuple.Nested ((/\))
import Effect (Effect)
import FRP.Event (Event, makeEvent, mapAccum, subscribe)

fireAndForget
  :: Event ~> Event
fireAndForget = oneOff Just

oneOff
  :: forall a b
   . (a -> Maybe b)
  -> Event a
  -> Event b
oneOff f e = compact $ emitUntil identity
  ( mapAccum
      ( \b a -> case f a, b of
          _, true -> true /\ Nothing
          Nothing, false -> false /\ Just Nothing
          Just x, false -> true /\ Just (Just x)
      )
      false
      e
  )

emitUntil
  :: forall a b
   . (a -> Maybe b)
  -> Event a
  -> Event b
emitUntil aToB e = makeEvent \k -> do
  o <- subscribe (withUnsubscribe e) \{ unsubscribe, value } ->
    case aToB value of
      Just b -> k b
      Nothing -> unsubscribe
  pure o

withUnsubscribe :: forall a. Event a -> Event { unsubscribe :: Effect Unit, value :: a }
withUnsubscribe e = makeEvent \ff -> do
  let f unsubscribe value = ff { unsubscribe, value }
  active <- liftST $ Ref.new true
  ro <- liftST $ Ref.new (pure unit)
  let
    cancel = do
      _ <- liftST $ Ref.write false active
      join (liftST $ Ref.read ro)
    f' = f cancel
    callback a = do
      whenM (liftST $ Ref.read active) (f' a)
  o <- subscribe e callback
  (liftST $ Ref.read active) >>= case _ of
    false -> o $> pure unit
    true -> liftST $ Ref.write o ro $> o

scheduleCf
  :: forall r val
   . (r -> Cofree ((->) r) val)
  -> Event r
  -> Event val
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
module Joyride.FRP.Schedule where

import Prelude

import Control.Comonad (extract)
import Control.Comonad.Cofree (Cofree)
import Control.Comonad.Cofree.Class (unwrapCofree)
import Data.Maybe (Maybe(..))
import Effect.Ref as Ref
import FRP.Event (Event, makeEvent, subscribe)

oneOff :: forall a b. (a -> Maybe b) -> Event a -> Event b
oneOff aToB e = makeEvent \k -> do
  r <- Ref.new true
  u <- Ref.new (pure unit)
  usu <- subscribe e \n -> do
    l <- Ref.read r
    when l $ do
      case aToB n of
        Nothing -> pure unit
        Just b -> do
          k b
          Ref.write false r
          join (Ref.read u)
          Ref.write (pure unit) u
  Ref.write usu u
  pure do
    join (Ref.read u)

scheduleCf
  :: forall r val
   . (r -> Cofree ((->) r) val)
  -> Event r
  -> Event val
scheduleCf ll e = makeEvent \k -> do
  r <- Ref.new ll
  u <- Ref.new (pure unit)
  usu <- subscribe e \n -> do
    l <- Ref.read r
    let { init, rest } = go n l
    k init
    Ref.write rest r
  Ref.write usu u
  pure do
    join (Ref.read u)
  where
  go n f = let c = f n in { init: extract c, rest: unwrapCofree c }
module Joyride.FRP.Schedule where

import Prelude

import Control.Comonad (extract)
import Control.Comonad.Cofree (Cofree)
import Control.Comonad.Cofree.Class (unwrapCofree)
import Data.List (List(..))
import Data.List as List
import Effect.Ref as Ref
import FRP.Event (Event, makeEvent, subscribe)

schedule
  :: forall time val
   . Semigroup time
  => Ord time
  => (val -> time)
  -> List val
  -> Event { lookAhead :: time, time :: time }
  -> Event (List val)
schedule  ba ll e = makeEvent \k -> do
  r <- Ref.new ll
  u <- Ref.new (pure unit)
  usu <- subscribe e \n -> do
    l <- Ref.read r
    let { init, rest } = go n l
    k init
    case rest of
      Nil -> do
        join (Ref.read u)
        Ref.write (pure unit) u
      x -> Ref.write x r
  Ref.write usu u
  pure do
    join (Ref.read u)
  where
  go { lookAhead, time } = let lh = time <> lookAhead in List.span (\i -> let t = ba i in t >= time && t < lh)

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
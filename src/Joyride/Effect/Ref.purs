module Joyride.Effect.Ref where

import Prelude

import Data.Symbol (class IsSymbol, reflectSymbol)
import Effect (Effect)
import Effect.Ref (Ref)
import Prim.Row (class Cons, class Lacks)
import Type.Proxy (Proxy)

foreign import writeToRecordImpl :: forall x y. String -> x -> Ref y -> Effect Unit

foreign import readFromRecordImpl :: forall x y. String -> Ref y -> Effect x

writeToRecord
  :: forall key val r' r
   . IsSymbol key
  => Cons key val r' r
  => Lacks key r'
  => Proxy key
  -> val
  -> Ref { | r }
  -> Effect Unit
writeToRecord px = writeToRecordImpl (reflectSymbol px)

readFromRecord
  :: forall key val r' r
   . IsSymbol key
  => Cons key val r' r
  => Lacks key r'
  => Proxy key
  -> Ref { | r }
  -> Effect val
readFromRecord px = readFromRecordImpl (reflectSymbol px)
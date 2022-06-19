module Joyride.Random where

import Prelude

import Data.Array (fold, replicate)
import Data.Traversable (sequence)
import Effect (Effect)
import Effect.Random (randomInt)

randId' :: Int -> Effect String
randId' n = map fold $ sequence (replicate n (map show $ randomInt 0 9))

randId :: Effect String
randId = randId' 32

type ABCD :: forall k. k -> Row k -> Row k
type ABCD n r = (a :: n, b :: n, c :: n, d :: n | r)

foreign import sfc32 :: forall x. { | ABCD Number x } -> { | ABCD Number (r :: Number) }
foreign import cyrb128 :: String -> { | ABCD Number () }
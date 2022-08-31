module Joyride.Effect.Lowpass where

import Prelude

import Data.Maybe (Maybe(..))
import Data.Tuple.Nested ((/\))
import FRP.Event.EffectFn (Event, mapAccum)

lpf :: Number -> Event Number -> Event Number
lpf lowpassFactor = flip
  ( mapAccum
      ( \a b -> Just a /\ case b of
          Nothing -> a
          Just x -> (x * lowpassFactor) + (a * (1.0 - lowpassFactor))
      )
  )
  Nothing
module Joyride.Effect.Lowpass where

import Prelude

import Data.Maybe (Maybe(..))
import Data.Tuple.Nested ((/\))
import FRP.Event (Event, mapAccum)

lpf :: Number -> Event Number -> Event Number
lpf lowpassFactor =
  ( mapAccum
      ( \b a -> Just a /\ case b of
          Nothing -> a
          Just x -> (x * lowpassFactor) + (a * (1.0 - lowpassFactor))
      )
  )
    Nothing
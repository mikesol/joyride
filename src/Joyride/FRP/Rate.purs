module Joyride.FRP.Rate where

import Prelude

import Data.Maybe (Maybe(..), maybe)
import Data.Newtype (unwrap)
import Data.Time.Duration (Seconds(..))
import Data.Tuple.Nested ((/\))
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (Event, mapAccum)

timeFromRate
  :: Behavior { rate :: Number }
  -> Event { real :: Seconds }
  -> Event
       { prevReal :: Maybe Seconds
       , real :: Seconds
       , prevAdjusted :: Maybe Seconds
       , adjusted :: Seconds
       }
timeFromRate clengthB afE = mapAccum
  ( \{ clength, acTime: Seconds acTime } { prevReal, prevAdjusted } -> do
      let prevAC = maybe 0.0 unwrap prevReal
      let prevAJ = maybe 0.0 unwrap prevAdjusted
      let gap = acTime - prevAC
      let adjGap = gap / clength
      let adjusted = Seconds $ adjGap + prevAJ
      { prevReal: Just $ Seconds acTime, prevAdjusted: Just adjusted } /\
        { prevReal, prevAdjusted, real: Seconds acTime, adjusted }
  )
  ( sampleBy { clength: _, acTime: _ }
      (_.rate <$> clengthB)
      (_.real <$> afE)
  )
  { prevReal: Nothing, prevAdjusted: Nothing }

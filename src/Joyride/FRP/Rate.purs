module Joyride.FRP.Rate where

import Prelude

import Data.DateTime.Instant (unInstant)
import Data.Maybe (Maybe(..), fromMaybe)
import Data.Newtype (unwrap)
import Data.Tuple.Nested ((/\))
import FRP.Behavior (Behavior, sampleBy)
import FRP.Behavior.Time (instant)
import FRP.Event (Event, mapAccum)
import Types (Beats(..), Seconds(..), RateInfo)

timeFromRate
  :: Behavior { rate :: Number }
  -> Event { real :: Seconds }
  -> Event RateInfo
timeFromRate clengthB afE = mapAccum
  ( \{ behaviors: { clength, epochTime }, acTime } { prevTime, prevBeats } -> do
      let prevAC = fromMaybe (Seconds 0.0) prevTime
      let prevAJ = fromMaybe (Beats 0.0) prevBeats
      let gap = acTime - prevAC
      let adjGap = gap / (Seconds clength)
      let beats = Beats ((unwrap adjGap) + (unwrap prevAJ))
      { prevTime: Just $ acTime, prevBeats: Just beats } /\
        { prevTime, prevBeats, time: acTime, beats, epochTime }
  )
  ( sampleBy { behaviors: _, acTime: _ }
      ( { clength: _, epochTime: _ }
          <$> (_.rate <$> (clengthB))
          <*> (unInstant <$> instant)
      )
      (_.real <$> afE)
  )
  { prevTime: Nothing, prevBeats: Nothing }

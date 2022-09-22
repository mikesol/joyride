module Joyride.FRP.Rate where

import Prelude

import Data.Maybe (Maybe(..), fromMaybe)
import Data.Newtype (unwrap)
import Data.Time.Duration (Milliseconds(..))
import Data.Tuple.Nested ((/\))
-- import Debug (spy)
import Effect (Effect)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (Event, mapAccum)
import Joyride.Timing.CoordinatedNow (cInstant)
import Safe.Coerce (coerce)
import Types (Beats(..), JMilliseconds(..), RateInfo, Seconds(..))

timeFromRate
  :: Effect Milliseconds
  -> Behavior { rate :: Number }
  -> Event { real :: Seconds }
  -> Event RateInfo
timeFromRate ems clengthB afE = mapAccum
  ( \{ prevTime, prevBeats } { behaviors: { clength, epochTime }, acTime } -> do
      let prevAC = fromMaybe (Seconds 0.0) prevTime
      let prevAJ = fromMaybe (Beats 0.0) prevBeats
      let gap = acTime - prevAC
      let adjGap = gap / (Seconds clength)
      let beats = Beats ((unwrap adjGap) + (unwrap prevAJ))
      let retval = { prevTime, prevBeats, time: acTime, beats, epochTime }
      -- let ____ = spy "info" retval
      { prevTime: Just $ acTime, prevBeats: Just beats } /\ retval
  )
  { prevTime: Nothing, prevBeats: Nothing }
  ( sampleBy { behaviors: _, acTime: _ }
      ( { clength: _, epochTime: _ }
          <$> (_.rate <$> (clengthB))
          <*> (coerce <$> cInstant ems)
      )
      (_.real <$> afE)
  )

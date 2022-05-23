module Joyride.FRP.Animate where

import Prelude

import BMS.Types (Column, Note(..), Offset(..))
import Data.Array as Array
import Data.Array.NonEmpty as NEA
import Data.Compactable (compact)
import Data.DateTime.Instant (unInstant)
import Data.FunctorWithIndex (mapWithIndex)
import Data.List (List(..))
import Data.Map as Map
import Data.Maybe (Maybe(..), fromMaybe)
import Data.Newtype (unwrap)
import Data.Number (pi)
import Data.Tuple.Nested (type (/\), (/\))
import FRP.Behavior (Behavior, sampleBy)
import FRP.Behavior.Time (instant)
import FRP.Event (Event, filterMap, mapAccum)
import Foreign.Object as Object
import Types (Animated)
import WAGS.Math (calcSlope)
import WAGS.WebAPI (BrowserAudioBuffer)

twoPi = 2.0 * pi :: Number

speed = 4.0 :: Number

animate
  :: Behavior (Object.Object BrowserAudioBuffer)
  -> Behavior Number
  -> Map.Map Offset (List (Column /\ Note))
  -> Event Number
  -> Event Animated
animate babB clengthB offsetMap afE = compact
  $ map (NEA.fromArray <<< Array.fromFoldable)
  $
    ( (map <<< filterMap)
        ( \{ time, buffer, startsAt, column } -> case buffer of
            Just bf -> Just $ { time, buffer: bf, startsAt, column }
            Nothing -> Nothing
        )
    )
  $ mapAccum
      ( \{ behaviors: { clength, bab, tnow }, acTime } { writeAdj, prevACTime, prevAdjTime } -> do
          let prevAC = fromMaybe 0.0 prevACTime
          let prevAJ = fromMaybe 0.0 prevAdjTime
          let gap = acTime - prevAC
          let adjGap = gap / clength
          let adjTime = adjGap + prevAJ
          let lookAhead = 0.3 -- 1 beat
          let
            f wa =
              if wa < adjTime + lookAhead then
                ( let
                    wa1 = wa + 1.0
                    q /\ r = f wa1
                  in
                    q
                      /\
                        ( Cons
                            ( let
                                haps = Map.submap (Just $ Offset wa)
                                  (Just $ Offset wa1)
                                  offsetMap
                              in
                                join $ Map.values $ mapWithIndex
                                  ( \(Offset offset) -> map
                                      \(c /\ Note n) ->
                                        { startsAt: unwrap $ unInstant tnow
                                        , buffer: Object.lookup n bab
                                        , column: c
                                        , time:
                                            if prevAJ == 0.0 then offset
                                            else calcSlope prevAJ prevAC adjTime
                                              acTime
                                              offset
                                        }
                                  )
                                  haps
                            )
                            r
                        )
                )
              else wa /\ Nil
          let w /\ a = f writeAdj
          { writeAdj: w, prevACTime: Just acTime, prevAdjTime: Just adjTime } /\
            join a
      )
      ( sampleBy { behaviors: _, acTime: _ }
          ({ clength: _, bab: _, tnow: _ } <$> clengthB <*> babB <*> instant)
          (afE)
      )
      { writeAdj: 0.0, prevACTime: Nothing, prevAdjTime: Nothing }

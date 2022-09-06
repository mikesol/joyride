module Joyride.Scores.AugmentedTypes where

import Prelude

import Control.Monad.State (evalState, gets, modify_)
import Data.Array (sortBy)
import Data.Function (on)
import Data.Map as Map
import Data.Maybe (Maybe, fromMaybe)
import Data.Traversable (traverse)
import Joyride.Types (Column, EventV0(..), Event_(..), Position(..), Version)
import Record (union)

-- this is all a bit hackish
-- basically, the data format that we have from the server does not contain all of the information for
-- efficient rendering
-- for example, we need to add when a tile becomes the first in its lane for the purpose of raycasting
-- which is a computable property
-- so what we do is use a type that is almost exactly the same as
-- Event_ with minor modifications
-- eventually, we'll at least want to get rid of the code dup by making the rows extensible
-- if not more aggressive refactoring.

data AugmentedEvent_ = AugmentedEventV0 AugmentedEventV0

type AugmentedBasicEventV0' =
  { marker1Time :: Number
  , marker1AudioURL :: Maybe String
  , marker2Time :: Number
  , marker2AudioURL :: Maybe String
  , marker3Time :: Number
  , marker3AudioURL :: Maybe String
  , marker4Time :: Number
  , marker4AudioURL :: Maybe String
  , column :: Column
  , name :: Maybe String
  , raycastingCanStartAt :: Position -> Number
  , version :: Version 0
  }

type AugmentedLeapEventV0' =
  { marker1Time :: Number
  , marker2Time :: Number
  , audioURL :: Maybe String
  , column :: Column
  , position :: Position
  , name :: Maybe String
  , raycastingCanStartAt :: Position -> Number
  , version :: Version 0
  }

type AugmentedLongEventV0' =
  { marker1Time :: Number
  , marker2Time :: Number
  , audioURL :: Maybe String
  , length :: Number
  , column :: Column
  , raycastingCanStartAt :: Position -> Number
  , name :: Maybe String
  , version :: Version 0
  }

data AugmentedEventV0
  = AugmentedBasicEventV0 AugmentedBasicEventV0'
  | AugmentedLeapEventV0 AugmentedLeapEventV0'
  | AugmentedLongEventV0 AugmentedLongEventV0'

raycastStopsAt = 0.2 :: Number

toAugmentedEvents :: Array Event_ -> Array AugmentedEvent_
toAugmentedEvents arr = evalState
  ( traverse
      ( \(EventV0 i) -> do
          let
            { column, newRaycastingCanStartAt } = case i of
              BasicEventV0 b ->
                { column: b.column
                , newRaycastingCanStartAt: add raycastStopsAt <<< case _ of
                    Position1 -> b.marker1Time
                    Position2 -> b.marker2Time
                    Position3 -> b.marker3Time
                    Position4 -> b.marker4Time

                }
              LeapEventV0 b ->
                { column: b.column
                , newRaycastingCanStartAt: add raycastStopsAt <<< case _ of
                    Position1 -> b.marker1Time
                    Position2 -> (b.marker2Time - b.marker1Time) * 0.33 + b.marker1Time
                    Position3 -> (b.marker2Time - b.marker1Time) * 0.66 + b.marker1Time
                    Position4 -> b.marker2Time
                }
              LongEventV0 b ->
                { column: b.column
                , newRaycastingCanStartAt: add raycastStopsAt <<< case _ of
                    Position1 -> b.marker1Time
                    Position2 -> (b.marker2Time - b.marker1Time) * 0.33 + b.marker1Time
                    Position3 -> (b.marker2Time - b.marker1Time) * 0.66 + b.marker1Time
                    Position4 -> b.marker2Time
                }
          raycastingCanStartAt <- fromMaybe (const 0.0) <$> gets (Map.lookup column)
          modify_ (Map.insert column newRaycastingCanStartAt)
          pure $ case i of
            BasicEventV0 b -> AugmentedEventV0 (AugmentedBasicEventV0 ( { raycastingCanStartAt } `union` b))
            LeapEventV0 b -> AugmentedEventV0 (AugmentedLeapEventV0 ( { raycastingCanStartAt } `union` b))
            LongEventV0 b -> AugmentedEventV0 (AugmentedLongEventV0 ( { raycastingCanStartAt } `union` b))
      )
      ( sortBy
          ( compare `on` case _ of
              EventV0 (BasicEventV0 b) -> b.marker1Time
              EventV0 (LeapEventV0 b) -> b.marker1Time
              EventV0 (LongEventV0 b) -> b.marker1Time
          )
          arr
      )
  )
  Map.empty
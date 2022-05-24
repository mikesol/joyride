module Types
  ( Player(..)
  , Position(..)
  , Column(..)
  , normalizedColumn
  , Orientation
  , WindowDims
  , XDirection(..)
  , KTP
  , GTP
  , Points(..)
  , Penalty(..)
  , BufferName(..)
  , allPlayers
  ) where

import Prelude

import Data.Maybe (Maybe)
import Data.Newtype (class Newtype)
import Data.Tuple.Nested (type (/\))
import Effect (Effect)
import FRP.Event.VBus (V)
import Foreign (ForeignError(..), fail)
import Simple.JSON (writeJSON)
import Simple.JSON as JSON

type CanvasInfo = { x :: Number, y :: Number } /\ Number

type WindowDims = { iw :: Number, ih :: Number }

type Orientation = { absolute :: Number, alpha :: Number, beta :: Number, gamma :: Number }
type GTP = { gamma :: Number, time :: Maybe Number, pos :: Number }
type KTP = { curXDir :: XDirection, time :: Maybe Number, pos :: Number }

data XDirection = ToLeft | ToRight | Still

derive instance Eq XDirection
instance Show XDirection where
  show = JSON.writeJSON

instance JSON.ReadForeign XDirection where
  readImpl i = do
    ri <- JSON.readImpl i
    case ri of
      "ToLeft" -> pure ToLeft
      "ToRight" -> pure ToRight
      "Still" -> pure Still
      _ -> fail $ ForeignError ("No idea how to parse: " <> writeJSON i)

instance JSON.WriteForeign XDirection where
  writeImpl ToLeft = JSON.writeImpl "ToLeft"
  writeImpl ToRight = JSON.writeImpl "ToRight"
  writeImpl Still = JSON.writeImpl "Still"

data Player = Player1 | Player2 | Player3 | Player4

derive instance Eq Player
instance Show Player where
  show = JSON.writeJSON

instance JSON.ReadForeign Player where
  readImpl i = do
    ri <- JSON.readImpl i
    case ri of
      "Player1" -> pure Player1
      "Player2" -> pure Player2
      "Player3" -> pure Player3
      "Player4" -> pure Player4
      _ -> fail $ ForeignError ("No idea how to parse: " <> writeJSON i)

instance JSON.WriteForeign Player where
  writeImpl Player1 = JSON.writeImpl "Player1"
  writeImpl Player2 = JSON.writeImpl "Player2"
  writeImpl Player3 = JSON.writeImpl "Player3"
  writeImpl Player4 = JSON.writeImpl "Player4"

allPlayers :: Array Player
allPlayers = [Player1, Player2, Player3, Player4]

data Position = Position1 | Position2 | Position3 | Position4

derive instance Eq Position
instance Show Position where
  show = JSON.writeJSON

instance JSON.ReadForeign Position where
  readImpl i = do
    ri <- JSON.readImpl i
    case ri of
      "Position1" -> pure Position1
      "Position2" -> pure Position2
      "Position3" -> pure Position3
      "Position4" -> pure Position4
      _ -> fail $ ForeignError ("No idea how to parse: " <> writeJSON i)

instance JSON.WriteForeign Position where
  writeImpl Position1 = JSON.writeImpl "Position1"
  writeImpl Position2 = JSON.writeImpl "Position2"
  writeImpl Position3 = JSON.writeImpl "Position3"
  writeImpl Position4 = JSON.writeImpl "Position4"

newtype Points = Points Number
derive instance Newtype Points _
newtype Penalty = Penalty Number
derive instance Newtype Penalty _
newtype BufferName = BufferName String
derive instance Newtype BufferName _
data Column = C0 | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 | C10 | C11 | C12 | C13 | C14 | C15

normalizedColumn :: Column -> Number
normalizedColumn C0 = 0.0 / 16.0
normalizedColumn C1 = 1.0 / 16.0
normalizedColumn C2 = 2.0 / 16.0
normalizedColumn C3 = 3.0 / 16.0
normalizedColumn C4 = 4.0 / 16.0
normalizedColumn C5 = 5.0 / 16.0
normalizedColumn C6 = 6.0 / 16.0
normalizedColumn C7 = 7.0 / 16.0
normalizedColumn C8 = 8.0 / 16.0
normalizedColumn C9 = 9.0 / 16.0
normalizedColumn C10 = 10.0 / 16.0
normalizedColumn C11 = 11.0 / 16.0
normalizedColumn C12 = 12.0 / 16.0
normalizedColumn C13 = 13.0 / 16.0
normalizedColumn C14 = 14.0 / 16.0
normalizedColumn C15 = 15.0 / 16.0
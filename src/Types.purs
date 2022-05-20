module Types where

import Prelude

import Data.Generic.Rep (class Generic)
import Data.Maybe (Maybe)
import Foreign (ForeignError(..), fail)
import Simple.JSON (writeJSON)
import Simple.JSON as JSON

type Orientation = { absolute :: Number, alpha :: Number, beta :: Number, gamma :: Number }
type GTP = { gamma :: Number, time :: Maybe Number, pos :: Number }
type KTP = { curXDir :: XDirection, time :: Maybe Number, pos :: Number }


data XDirection = ToLeft | ToRight | Still
derive instance Eq XDirection
derive instance Generic XDirection _
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

data Player = Player1 | Player2
derive instance Eq Player
derive instance Generic Player _
instance Show Player where
  show = JSON.writeJSON

instance JSON.ReadForeign Player where
  readImpl i = do
    ri <- JSON.readImpl i
    case ri of
      "Player1" -> pure Player1
      "Player2" -> pure Player2
      _ -> fail $ ForeignError ("No idea how to parse: " <> writeJSON i)

instance JSON.WriteForeign Player where
  writeImpl Player1 = JSON.writeImpl "Player1"
  writeImpl Player2 = JSON.writeImpl "Player2"

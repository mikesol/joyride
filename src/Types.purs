module Types
  ( Player(..)
  , Position(..)
  , AnimatedS
  , Orientation
  , ToplevelInfo
  , WindowDims
  , Positionable
  , XDirection(..)
  , Animated
  , KTP
  , GTP
  , Points
  , Penalty
  , UIEvents
  ) where

import Prelude

import BMS.Types (Column, Note, Offset)
import Data.Array.NonEmpty as NEA
import Data.FastVect.FastVect (Vect)
import Data.List (List)
import Data.Map as Map
import Data.Maybe (Maybe)
import Data.Tuple.Nested (type (/\))
import Effect (Effect)
import Effect.Ref as Ref
import FRP.Behavior (Behavior)
import FRP.Event (Event)
import FRP.Event.VBus (V)
import Foreign (ForeignError(..), fail)
import Foreign.Object as Object
import Rito.THREE (ThreeStuff)
import Simple.JSON (writeJSON)
import Simple.JSON as JSON
import WAGS.WebAPI (BrowserAudioBuffer)
import Web.HTML.Window (RequestIdleCallbackId, Window)

type CanvasInfo = { x :: Number, y :: Number } /\ Number
type UIEvents = V
  ( start :: Unit
  , stop :: Effect Unit
  , slider :: Number
  , animationFrame :: Number
  , toAnimate :: Animated
  )

type ToplevelInfo =
  { loaded :: Event Boolean
  , threeStuff :: ThreeStuff
  , isMobile :: Boolean
  , lowPriorityCb :: Number -> Effect Unit -> Effect Unit
  , maxColumns :: Int
  , myPlayer :: Player
  , player2XBehavior :: Behavior (Number -> Number)
  , xPosB :: Behavior (Number -> Number)
  , resizeE :: Event WindowDims
  , initialDims :: WindowDims
  , icid :: Ref.Ref (Maybe RequestIdleCallbackId)
  , wdw :: Window
  , unschedule :: Ref.Ref (Map.Map Number (Effect Unit))
  , soundObj :: Ref.Ref (Object.Object BrowserAudioBuffer)
  , offsetsToNoteColumns :: Map.Map Offset (List (Column /\ Note))
  }

type WindowDims = { iw :: Number, ih :: Number }

type Animated = NEA.NonEmptyArray
  { startsAt :: Number
  , time :: Number
  , column :: Column
  , buffer :: BrowserAudioBuffer
  }

type AnimatedS =
  { startsAt :: Number
  , time :: Number
  , buffer :: BrowserAudioBuffer
  , column :: Column
  }

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
newtype Penalty = Penalty Number
type Positionable a = Vect 4 a
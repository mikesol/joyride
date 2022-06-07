module Types
  ( Player(..)
  , entryZ
  , RenderingInfo
  , RenderingInfo'
  , Position(..)
  , Axis(..)
  , Channel(..)
  , IAm(..)
  , touchPointZ
  , Column(..)
  , Success'
  , normalizedColumn
  , Orientation
  , Claim(..)
  , PlayerAction(..)
  , WindowDims
  , XDirection(..)
  , KTP
  , GTP
  , Points(..)
  , Penalty(..)
  , BufferName(..)
  , Beats(..)
  , Seconds(..)
  , RateInfo
  , beatToTime
  , allPlayers
  , allPositions
  , allAxes
  , MakeBasic
  , MakeBasics
  , PlayerPositions
  , PlayerPositionsF
  , initialPositions
  , playerPosition
  , Textures(..)
  , HitBasicOverTheWire(..)
  , HitBasicMe(..)
  , HitBasicOtherPlayer(..)
  , HitBasicVisual(..)
  , HitBasicVisualForLabel(..)
  , Negotiation(..)
  ) where

import Prelude

import Data.FastVect.FastVect (Vect)
import Data.FoldableWithIndex (foldlWithIndex)
import Data.Lens (_Just, over)
import Data.Lens.Record (prop)
import Data.Map (SemigroupMap(..))
import Data.Map as Map
import Data.Maybe (Maybe(..))
import Data.Newtype (class Newtype, unwrap)
import Data.Time.Duration (Milliseconds(..))
import Data.Tuple (Tuple(..))
import Data.Tuple.Nested (type (/\))
import Effect (Effect)
import FRP.Behavior (Behavior)
import FRP.Event (Event, EventIO)
import Foreign (ForeignError(..), fail)
import Foreign.Object as Object
import Joyride.Wags (AudibleChildEnd, AudibleEnd)
import Record (union)
import Rito.Color (Color, RGB)
import Rito.Matrix4 (Matrix4, Matrix4')
import Rito.THREE (ThreeStuff)
import Rito.Texture (Texture)
import Rito.Vector3 (Vector3')
import Simple.JSON (writeJSON)
import Simple.JSON as JSON
import Type.Proxy (Proxy(..))
import WAGS.Math (calcSlope)
import WAGS.WebAPI (BrowserAudioBuffer)

type CanvasInfo = { x :: Number, y :: Number } /\ Number

type WindowDims = { iw :: Number, ih :: Number }

type Orientation = { absolute :: Number, alpha :: Number, beta :: Number, gamma :: Number }
type GTP = { gamma :: Number, time :: Maybe Milliseconds, pos :: Number }
type KTP = { curXDir :: XDirection, time :: Maybe Milliseconds, pos :: Number }

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
derive instance Ord Player
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
allPlayers = [ Player1, Player2, Player3, Player4 ]

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

allPositions :: Array Position
allPositions = [ Position1, Position2, Position3, Position4 ]

data Axis = AxisX | AxisY | AxisZ

derive instance Eq Axis
instance Show Axis where
  show = JSON.writeJSON

instance JSON.ReadForeign Axis where
  readImpl i = do
    ri <- JSON.readImpl i
    case ri of
      "AxisX" -> pure AxisX
      "AxisY" -> pure AxisY
      "AxisZ" -> pure AxisZ
      _ -> fail $ ForeignError ("No idea how to parse: " <> writeJSON i)

instance JSON.WriteForeign Axis where
  writeImpl AxisX = JSON.writeImpl "AxisX"
  writeImpl AxisY = JSON.writeImpl "AxisY"
  writeImpl AxisZ = JSON.writeImpl "AxisZ"

allAxes :: Array Axis
allAxes = [ AxisX, AxisY, AxisZ ]

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

-- | Beats, or a temporal unit based on seconds modulated by a tempo.
newtype Beats = Beats Number

derive instance Newtype Beats _
derive newtype instance Eq Beats
derive newtype instance Ord Beats
derive newtype instance Semiring Beats
derive newtype instance Ring Beats
derive newtype instance CommutativeRing Beats
derive newtype instance EuclideanRing Beats
derive newtype instance JSON.ReadForeign Beats
derive newtype instance JSON.WriteForeign Beats
instance showBeats :: Show Beats where
  show (Beats n) = "(Beats " <> show n <> ")"

newtype Seconds = Seconds Number

derive instance Newtype Seconds _
derive newtype instance Eq Seconds
derive newtype instance Ord Seconds
derive newtype instance Semiring Seconds
derive newtype instance Ring Seconds
derive newtype instance CommutativeRing Seconds
derive newtype instance EuclideanRing Seconds
instance showSeconds :: Show Seconds where
  show (Seconds n) = "(Seconds " <> show n <> ")"

type RateInfo =
  { prevTime :: Maybe Seconds
  , time :: Seconds
  , prevBeats :: Maybe Beats
  , beats :: Beats
  , epochTime :: Milliseconds
  }

beatToTime :: RateInfo -> Beats -> Seconds
beatToTime
  { beats: Beats beats
  , prevBeats
  , time: Seconds time
  , prevTime
  }
  (Beats b) = case prevBeats, prevTime of
  Just (Beats pb), Just (Seconds pt) -> Seconds (calcSlope pb pt beats time b)
  _, _ -> Seconds 0.0

type RenderingInfo' slider =
  { halfAmbitus :: slider
  , barZSpacing :: slider
  , sphereOffsetY :: slider
  , cameraLookAtOffsetY :: slider
  , cameraOffsetY :: slider
  , cameraLookAtOffsetZ :: slider
  , cameraOffsetZ :: slider
  }

type RenderingInfo = RenderingInfo' Number

touchPointZ :: RenderingInfo -> Position -> Number
touchPointZ { barZSpacing } = go
  where
  go Position1 = -3.0 * barZSpacing
  go Position2 = -2.0 * barZSpacing
  go Position3 = -1.0 * barZSpacing
  go Position4 = 0.0

entryZ :: RenderingInfo -> Number
entryZ { barZSpacing } = -4.0 * barZSpacing

type MakeBasic r =
  ( column :: Column
  , appearsAt :: Beats
  , uniqueId :: Int
  , beats :: Vect 4 { startsAt :: Beats, audio :: Event RateInfo -> AudibleEnd }
  | MakeBasics r
  )

type MakeBasics r =
  ( initialDims :: WindowDims
  , renderingInfo :: Behavior RenderingInfo
  , resizeEvent :: Event WindowDims
  , isMobile :: Boolean
  , myPlayer :: Player
  , notifications :: { hitBasic :: Event HitBasicOtherPlayer }
  , lpsCallback :: Milliseconds -> Effect Unit -> Effect Unit
  , pushAudio :: Event AudibleChildEnd -> Effect Unit
  , mkColor :: RGB -> Color
  , animatedStuff :: Event { rateInfo :: RateInfo, playerPositions :: PlayerPositions }
  , buffers :: Behavior (Object.Object BrowserAudioBuffer)
  , silence :: BrowserAudioBuffer
  , debug :: Boolean
  , pushBasic :: EventIO HitBasicMe
  , pushBasicVisualForLabel :: HitBasicVisualForLabel -> Effect Unit
  , mkMatrix4 :: Matrix4' -> Matrix4
  , textures :: Textures Texture
  | r
  )

type PlayerPositions =
  { p1x :: Number
  , p1y :: Number
  , p1z :: Number
  , p1p :: Position
  , p2x :: Number
  , p2y :: Number
  , p2z :: Number
  , p2p :: Position
  , p3x :: Number
  , p3y :: Number
  , p3z :: Number
  , p3p :: Position
  , p4x :: Number
  , p4y :: Number
  , p4z :: Number
  , p4p :: Position
  }

type PlayerPositionsF =
  { p1x :: RateInfo -> Number
  , p1y :: RateInfo -> Number
  , p1z :: RateInfo -> Number
  , p1p :: Position
  , p2x :: RateInfo -> Number
  , p2y :: RateInfo -> Number
  , p2z :: RateInfo -> Number
  , p2p :: Position
  , p3x :: RateInfo -> Number
  , p3y :: RateInfo -> Number
  , p3z :: RateInfo -> Number
  , p3p :: Position
  , p4x :: RateInfo -> Number
  , p4y :: RateInfo -> Number
  , p4z :: RateInfo -> Number
  , p4p :: Position
  }

initialPositions :: RenderingInfo -> PlayerPositionsF
initialPositions ri =
  { p1x: const 0.0
  , p1y: const 0.0
  , p1z: const $ touchPointZ ri Position1
  , p1p: Position1
  , p2x: const 0.0
  , p2y: const 0.0
  , p2z: const $ touchPointZ ri Position2
  , p2p: Position2
  , p3x: const 0.0
  , p3y: const 0.0
  , p3z: const $ touchPointZ ri Position3
  , p3p: Position3
  , p4x: const 0.0
  , p4y: const 0.0
  , p4z: const $ touchPointZ ri Position4
  , p4p: Position4
  }

playerPosition :: Player -> Axis -> PlayerPositions -> Number
playerPosition Player1 AxisX = _.p1x
playerPosition Player1 AxisY = _.p1y
playerPosition Player1 AxisZ = _.p1z
playerPosition Player2 AxisX = _.p2x
playerPosition Player2 AxisY = _.p2y
playerPosition Player2 AxisZ = _.p2z
playerPosition Player3 AxisX = _.p3x
playerPosition Player3 AxisY = _.p3y
playerPosition Player3 AxisZ = _.p3z
playerPosition Player4 AxisX = _.p4x
playerPosition Player4 AxisY = _.p4y
playerPosition Player4 AxisZ = _.p4z

newtype Textures a = Textures
  { hockeyAO :: a
  , hockeyCOL :: a
  , hockeyDISP :: a
  , hockeyGLOSS :: a
  , hockeyNRM :: a
  , hockeyREFL :: a
  , marble19COL :: a
  , marble19GLOSS :: a
  , marble19NRM :: a
  , marble19REFL :: a
  , marble21COL :: a
  , marble21GLOSS :: a
  , marble21NRM :: a
  , marble21REFL :: a
  , tilesZelligeHexAO :: a
  , tilesZelligeHexBUMP :: a
  , tilesZelligeHexCOL :: a
  , tilesZelligeHexDISP :: a
  , tilesZelligeHexGLOSS :: a
  , tilesZelligeHexREFL :: a
  }

derive instance Newtype (Textures a) _

newtype HitBasicOverTheWire = HitBasicOverTheWire
  { uniqueId :: Int
  , logicalBeat :: Beats
  , deltaBeats :: Beats
  , hitAt :: Beats
  , player :: Player
  }

derive instance Newtype HitBasicOverTheWire _
derive newtype instance JSON.ReadForeign HitBasicOverTheWire
derive newtype instance JSON.WriteForeign HitBasicOverTheWire

newtype HitBasicMe = HitBasicMe
  { uniqueId :: Int
  , logicalBeat :: Beats
  , deltaBeats :: Beats
  , hitAt :: Beats
  , issuedAt :: Milliseconds
  }

derive instance Newtype HitBasicMe _

newtype HitBasicOtherPlayer = HitBasicOtherPlayer
  { uniqueId :: Int
  , logicalBeat :: Beats
  , deltaBeats :: Beats
  , hitAt :: Beats
  , player :: Player
  , issuedAt :: Milliseconds
  }

derive instance Newtype HitBasicOtherPlayer _

newtype HitBasicVisual = HitBasicVisual
  { uniqueId :: Int
  , logicalBeat :: Beats
  , deltaBeats :: Beats
  , hitAt :: Beats
  , issuedAt :: Milliseconds
  }

derive instance Newtype HitBasicVisual _

newtype HitBasicVisualForLabel = HitBasicVisualForLabel
  { uniqueId :: Int
  , logicalBeat :: Beats
  , deltaBeats :: Beats
  , hitAt :: Beats
  , issuedAt :: Milliseconds
  , translation :: Event Vector3'
  , player :: Player
  }

derive instance Newtype HitBasicVisualForLabel _

data Negotiation
  = PageLoad
  | GetRulesOfGame
  | StartingNegotiation
  | RoomIsFull
  | GameHasStarted
  | RequestingPlayer
  | ReceivedPossibilities
  | ClaimFail
  | Success Success'

type Success' =
  { player :: Player
  , threeStuff :: ThreeStuff
  , pubNubEvent :: Event PlayerAction
  , textures :: Textures Texture
  , optMeIn :: Milliseconds -> Effect Unit
  , optIn :: Event (Map.Map Player (Maybe Milliseconds))
  }

newtype IAm = IAm String
newtype Channel = Channel String

newtype Claim = Claim String

derive newtype instance JSON.WriteForeign Claim
derive newtype instance JSON.ReadForeign Claim
data PlayerAction
  = --movement
    XPositionKeyboard { player :: Player, ktp :: KTP }
  | XPositionMobile { player :: Player, gtp :: GTP }
  -- tap basic
  | HitBasic HitBasicOverTheWire
  -- ask to join
  | RequestPlayer
  -- say whose available
  | EchoKnownPlayers { players :: SemigroupMap Player (Maybe Milliseconds) }
  -- claim a player
  | ClaimPlayer { claim :: Claim, player :: Player }
  -- accept claim
  | AcceptClaim { claim :: Claim, player :: Player }
  -- refute claim
  | RefuteClaim { claim :: Claim, player :: Player }

instance toJSONPubNubPlayerAction :: JSON.ReadForeign PlayerAction where
  readImpl i = do
    { _type } :: { _type :: String } <- JSON.readImpl i
    case _type of
      "XPositionKeyboard" -> XPositionKeyboard <<< (overKtp convertToMs) <$> JSON.readImpl i
      "XPositionMobile" -> XPositionMobile <<< (overGtp convertToMs) <$> JSON.readImpl i
      "HitBasic" -> HitBasic <$> JSON.readImpl i
      "RequestPlayer" -> pure RequestPlayer
      "EchoKnownPlayers" -> do
        knownPlayers' :: { players :: Array { player :: Player, time :: Maybe Number } } <- JSON.readImpl i
        let knownPlayers = map (\{ player, time } -> Tuple player (map Milliseconds time)) knownPlayers'.players
        pure $ EchoKnownPlayers { players: SemigroupMap $ Map.fromFoldable knownPlayers }
      "ClaimPlayer" -> ClaimPlayer <$> JSON.readImpl i
      "AcceptClaim" -> AcceptClaim <$> JSON.readImpl i
      "RefuteClaim" -> RefuteClaim <$> JSON.readImpl i
      _ -> fail (ForeignError $ "Could not parse: " <> JSON.writeJSON i)

convertToMs
  :: forall r
   . { time :: Maybe Number | r }
  -> { time :: Maybe Milliseconds | r }
convertToMs = over ((prop (Proxy :: Proxy "time")) <<< _Just) Milliseconds

convertFromMs
  :: forall r
   . { time :: Maybe Milliseconds | r }
  -> { time :: Maybe Number | r }
convertFromMs = over ((prop (Proxy :: Proxy "time")) <<< _Just) unwrap

overKtp :: forall r a b. (a -> b) -> { ktp :: a | r } -> { ktp :: b | r }
overKtp = over (prop (Proxy :: Proxy "ktp"))

overGtp :: forall r a b. (a -> b) -> { gtp :: a | r } -> { gtp :: b | r }
overGtp = over (prop (Proxy :: Proxy "gtp"))

instance fromJSONPubNubPlayerAction :: JSON.WriteForeign PlayerAction where
  writeImpl (XPositionKeyboard i) = JSON.writeImpl $ union { _type: "XPositionKeyboard" } (overKtp convertFromMs i)
  writeImpl (XPositionMobile i) = JSON.writeImpl $ union { _type: "XPositionMobile" } (overGtp convertFromMs i)
  writeImpl (HitBasic (HitBasicOverTheWire j)) = JSON.writeImpl $ union { _type: "HitBasic" } j
  writeImpl RequestPlayer = JSON.writeImpl { _type: "RequestPlayer" }
  writeImpl (EchoKnownPlayers j) = JSON.writeImpl $ union { _type: "EchoKnownPlayers" }
    ( { players: JSON.writeImpl $ foldlWithIndex
          ( \player arr time' -> arr <>
              [ case time' of
                  Just (Milliseconds time) -> JSON.writeImpl { player, time }
                  Nothing -> JSON.writeImpl { player }
              ]
          )
          []
          (unwrap j.players)
      }
    )
  writeImpl (ClaimPlayer j) = JSON.writeImpl $ union { _type: "ClaimPlayer" } j
  writeImpl (AcceptClaim j) = JSON.writeImpl $ union { _type: "AcceptClaim" } j
  writeImpl (RefuteClaim j) = JSON.writeImpl $ union { _type: "RefuteClaim" } j

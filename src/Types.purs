module Types
  ( Player(..)
  , entryZ
  , Shaders
  , Shader
  , GalaxyAttributes
  , ToplevelInfo
  , RenderingInfo
  , AppOrientationState(..)
  , PotentiallyMissingArray(..)
  , OrientationPermissionState(..)
  , ChannelChooser(..)
  , Profile(..)
  , Ride(..)
  , RideV0'
  , Models(..)
  , SettingsNeeds
  , allColumns
  , defaultRide
  , InFlightGameInfo'
  , RenderingInfo'
  , Axis(..)
  , ThreeDI
  , CubeTextures(..)
  , CubeTexture(..)
  , playerPosition'
  , Channel(..)
  , StartStatus(..)
  , KnownPlayers(..)
  , IAm(..)
  , touchPointZ
  , Success'
  , WantsTutorial'
  , OpenEditor'
  , normalizedColumn
  , Orientation
  , Claim(..)
  , PlayerAction(..)
  , WindowDims
  , XDirection(..)
  , KTPD
  , GTPD
  , Points(..)
  , Penalty(..)
  , BufferName(..)
  , Beats(..)
  , JMilliseconds(..)
  , Seconds(..)
  , RateInfo
  , beatToTime
  , allPlayers
  , allPositions
  , allAxes
  , MakeBasicWord
  , MakeLeapWord
  , MakeBasic
  , MakeBasics
  , MakeLong
  , MakeLongs
  , MakeLeap
  , MakeLeaps
  , PlayerPositions
  , PlayerPositionsF
  , PointOutcome(..)
  , initialPositions
  , playerPosition
  , Textures(..)
  , HitBasicOverTheWire(..)
  , HitBasicMe(..)
  , HitBasicOtherPlayer(..)
  , HitBasicVisual(..)
  , HitBasicVisualForLabel(..)
  , HitLongOverTheWire(..)
  , HitLongMe(..)
  , HitLongOtherPlayer(..)
  , HitLongVisual(..)
  , HitLongVisualForLabel(..)
  , ReleaseLongOverTheWire(..)
  , ReleaseLongMe(..)
  , ReleaseLongOtherPlayer(..)
  , ReleaseLongVisual(..)
  , ReleaseLongVisualForLabel(..)
  , HitLeapOverTheWire(..)
  , HitLeapMe(..)
  , HitLeapOtherPlayer(..)
  , HitLeapVisual(..)
  , HitLeapVisualForLabel(..)
  , Negotiation(..)
  , InFlightGameInfo(..)
  , module Joyride.Types
  ) where

import Prelude

import Control.Alt ((<|>))
import Data.Array.NonEmpty (NonEmptyArray, fromNonEmpty)
import Data.Either (Either(..))
import Data.FastVect.FastVect (Vect)
import Data.Generic.Rep (class Generic)
import Data.Map as Map
import Data.Maybe (Maybe(..), fromMaybe)
import Data.Newtype (class Newtype)
import Data.NonEmpty ((:|))
import Data.Show.Generic (genericShow)
import Data.Time.Duration (Milliseconds)
import Data.Tuple (Tuple(..))
import Data.Tuple.Nested (type (/\))
import Effect (Effect)
import Effect.Ref as Ref
import FRP.Behavior (Behavior)
import FRP.Event (EventIO, Event)
import Foreign (ForeignError(..), fail)
import Foreign.Object as Object
import Joyride.Firebase.Opaque (FirebaseAuth, Firestore)
import Joyride.Ocarina (AudibleChildEnd, AudibleEnd)
import Joyride.Scores.AugmentedTypes (AugmentedEvent_)
import Joyride.Types (BasicEventV0', Column(..), EventV0(..), Event_(..), LeapEventV0', LongEventV0', Position(..), Track(..), TrackV0', Version(..), Whitelist(..), columnToInt, intToColumn)
import Ocarina.Math (calcSlope)
import Ocarina.WebAPI (BrowserAudioBuffer)
import Record (union)
import Rito.Color (Color, RGB)
import Rito.CubeTexture as CTL
import Rito.GLTF as GLTFLoader
import Rito.InstancedBufferAttribute (InstancedBufferAttribute)
import Rito.Matrix4 (Matrix4, Matrix4')
import Rito.THREE as THREE
import Rito.Texture (Texture)
import Rito.Vector3 (Vector3')
import Simple.JSON (undefined, writeJSON)
import Simple.JSON as JSON
import Web.HTML.Window (RequestIdleCallbackId, Window)

type CanvasInfo = { x :: Number, y :: Number } /\ Number

type WindowDims = { iw :: Number, ih :: Number }

type Orientation = { absolute :: Number, alpha :: Number, beta :: Number, gamma :: Number }
type GTPD = { gamma :: Number, time :: Maybe JMilliseconds, pos :: Number, dampening :: Number }
type KTPD = { curXDir :: XDirection, time :: Maybe JMilliseconds, pos :: Number, dampening :: Number }

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
derive instance Generic Player _
instance Show Player where
  show = genericShow

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

allPlayers :: NonEmptyArray Player
allPlayers = fromNonEmpty $ Player1 :| [ Player2, Player3, Player4 ]

allPositions :: NonEmptyArray Position
allPositions = fromNonEmpty $ Position1 :| [ Position2, Position3, Position4 ]

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

derive newtype instance Show Points
derive newtype instance Eq Points
derive newtype instance Ord Points
derive newtype instance JSON.ReadForeign Points
derive newtype instance JSON.WriteForeign Points

derive instance Newtype Points _
derive newtype instance Semiring Points

newtype Penalty = Penalty Number

derive instance Newtype Penalty _
derive newtype instance Show Penalty
derive newtype instance Eq Penalty
derive newtype instance Ord Penalty
derive newtype instance JSON.ReadForeign Penalty
derive newtype instance JSON.WriteForeign Penalty
derive newtype instance Semiring Penalty

newtype BufferName = BufferName String

derive instance Newtype BufferName _

allColumns = [ C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17 ] :: Array Column

normalizedColumn :: Column -> Number
normalizedColumn C1 = 0.0 / 16.0
normalizedColumn C2 = 1.0 / 16.0
normalizedColumn C3 = 2.0 / 16.0
normalizedColumn C4 = 3.0 / 16.0
normalizedColumn C5 = 4.0 / 16.0
normalizedColumn C6 = 5.0 / 16.0
normalizedColumn C7 = 6.0 / 16.0
normalizedColumn C8 = 7.0 / 16.0
normalizedColumn C9 = 8.0 / 16.0
normalizedColumn C10 = 9.0 / 16.0
normalizedColumn C11 = 10.0 / 16.0
normalizedColumn C12 = 11.0 / 16.0
normalizedColumn C13 = 12.0 / 16.0
normalizedColumn C14 = 13.0 / 16.0
normalizedColumn C15 = 14.0 / 16.0
normalizedColumn C16 = 15.0 / 16.0
normalizedColumn C17 = 16.0 / 16.0

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

newtype JMilliseconds = JMilliseconds Number

derive instance Newtype JMilliseconds _
derive newtype instance Eq JMilliseconds
derive newtype instance Ord JMilliseconds
derive newtype instance Semiring JMilliseconds
derive newtype instance Ring JMilliseconds
derive newtype instance CommutativeRing JMilliseconds
derive newtype instance EuclideanRing JMilliseconds
derive newtype instance JSON.ReadForeign JMilliseconds
derive newtype instance JSON.WriteForeign JMilliseconds
instance showJMilliseconds :: Show JMilliseconds where
  show (JMilliseconds n) = "(JMilliseconds " <> show n <> ")"

type RateInfo =
  { prevTime :: Maybe Seconds
  , time :: Seconds
  , prevBeats :: Maybe Beats
  , beats :: Beats
  , epochTime :: JMilliseconds
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
  , lightOffsetY :: slider
  , cameraOffsetY :: slider
  , cameraRotationAroundX :: slider
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
entryZ { barZSpacing } = -5.0 * barZSpacing

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
  , p1y :: Number
  , p1z :: Number
  , p1p :: Position
  , p2x :: RateInfo -> Number
  , p2y :: Number
  , p2z :: Number
  , p2p :: Position
  , p3x :: RateInfo -> Number
  , p3y :: Number
  , p3z :: Number
  , p3p :: Position
  , p4x :: RateInfo -> Number
  , p4y :: Number
  , p4z :: Number
  , p4p :: Position
  }

initialPositions :: RenderingInfo -> PlayerPositionsF
initialPositions ri =
  { p1x: const 0.0
  , p1y: 0.0
  , p1z: touchPointZ ri Position1
  , p1p: Position1
  , p2x: const 0.0
  , p2y: 0.0
  , p2z: touchPointZ ri Position2
  , p2p: Position2
  , p3x: const 0.0
  , p3y: 0.0
  , p3z: touchPointZ ri Position3
  , p3p: Position3
  , p4x: const 0.0
  , p4y: 0.0
  , p4z: touchPointZ ri Position4
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

playerPosition' :: Player -> PlayerPositions -> Position
playerPosition' Player1 = _.p1p
playerPosition' Player2 = _.p2p
playerPosition' Player3 = _.p3p
playerPosition' Player4 = _.p4p

newtype Textures :: forall k. k -> Type
newtype Textures a = Textures
  { -- hockeyAO :: a
  -- , hockeyCOL :: a
  -- , hockeyDISP :: a
  -- , hockeyGLOSS :: a
  -- , hockeyNRM :: a
  -- , hockeyREFL :: a
  -- , marble19COL :: a
  -- , marble19GLOSS :: a
  -- , marble19NRM :: a
  -- , marble19REFL :: a
  -- , marble21COL :: a
  -- , marble21GLOSS :: a
  -- , marble21NRM :: a
  -- , marble21REFL :: a
  -- , tilesZelligeHexAO :: a
  -- , tilesZelligeHexBUMP :: a
  -- , tilesZelligeHexCOL :: a
  -- , tilesZelligeHexDISP :: a
  -- , tilesZelligeHexGLOSS :: a
  -- , tilesZelligeHexREFL :: a
  -- , butterfly0 :: a
  }

newtype CubeTexture a = CubeTexture
  { back :: a
  , front :: a
  , left :: a
  , right :: a
  , top :: a
  , bottom :: a
  }

derive instance Newtype (CubeTexture a) _

newtype CubeTextures a = CubeTextures
  { skybox :: a
  -- , skybox2 :: a
  }

derive instance Newtype (CubeTextures a) _
derive instance Newtype (Textures a) _

newtype PointOutcome = PointOutcome (Either Penalty Points)

derive instance Newtype PointOutcome _
derive newtype instance Eq PointOutcome
derive newtype instance Show PointOutcome
instance JSON.ReadForeign PointOutcome where
  readImpl i = do
    { _type, val } :: { _type :: String, val :: Number } <- JSON.readImpl i
    case _type of
      "Points" -> pure $ PointOutcome (Right (Points val))
      "Penalty" -> pure $ PointOutcome (Left (Penalty val))
      _ -> fail (ForeignError $ "Could not parse: " <> JSON.writeJSON i)

instance JSON.WriteForeign PointOutcome where
  writeImpl (PointOutcome (Left val)) = JSON.writeImpl { _type: "Penalty", val }
  writeImpl (PointOutcome (Right val)) = JSON.writeImpl { _type: "Points", val }

-- hits
type MakeBasicWord r =
  ( someonePlayedMe :: Event HitBasicMe
  , text :: Vect 4 String
  | MakeBasic r
  )

type MakeBasic r =
  ( myInfo ::
      { column :: Column
      , appearsAt :: Beats
      , uniqueId :: Int
      , raycastingCanStartAt :: Position -> Number
      , beats :: Vect 4 { startsAt :: Beats, audio :: Event RateInfo -> AudibleEnd }
      }
  | MakeBasics r
  )

type MakeBasics r =
  ( initialDims :: WindowDims
  , columnEventConstructor :: Column -> Event Unit
  , renderingInfo :: Behavior RenderingInfo
  , resizeEvent :: Event WindowDims
  , isMobile :: Boolean
  , threeDI :: ThreeDI
  , cnow :: Effect Milliseconds
  , myPlayer :: Player
  , notifications :: { hitBasic :: Event HitBasicOtherPlayer }
  , lpsCallback :: JMilliseconds -> Effect Unit -> Effect Unit
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

newtype HitBasicOverTheWire = HitBasicOverTheWire
  { uniqueId :: Int
  , logicalBeat :: Beats
  , deltaBeats :: Beats
  , hitAt :: Beats
  , player :: Player
  , outcome :: PointOutcome
  }

derive instance Eq HitBasicOverTheWire
derive newtype instance Show HitBasicOverTheWire
derive instance Newtype HitBasicOverTheWire _
derive newtype instance JSON.ReadForeign HitBasicOverTheWire
derive newtype instance JSON.WriteForeign HitBasicOverTheWire

newtype HitBasicMe = HitBasicMe
  { uniqueId :: Int
  , logicalBeat :: Beats
  , deltaBeats :: Beats
  , hitAt :: Beats
  , issuedAt :: JMilliseconds
  }

derive instance Newtype HitBasicMe _

newtype HitBasicOtherPlayer = HitBasicOtherPlayer
  { uniqueId :: Int
  , logicalBeat :: Beats
  , deltaBeats :: Beats
  , hitAt :: Beats
  , player :: Player
  , issuedAt :: JMilliseconds
  }

derive instance Newtype HitBasicOtherPlayer _

newtype HitBasicVisual = HitBasicVisual
  { uniqueId :: Int
  , logicalBeat :: Beats
  , deltaBeats :: Beats
  , hitAt :: Beats
  , issuedAt :: JMilliseconds
  }

derive instance Newtype HitBasicVisual _

newtype HitBasicVisualForLabel = HitBasicVisualForLabel
  { uniqueId :: Int
  , logicalBeat :: Beats
  , deltaBeats :: Beats
  , hitAt :: Beats
  , issuedAt :: JMilliseconds
  , translation :: Event Vector3'
  , player :: Player
  }

derive instance Newtype HitBasicVisualForLabel _
--------- long
type MakeLong r =
  ( column :: Column
  , hitsFirstPositionAt :: Beats
  , hitsLastPositionAt :: Beats
  , raycastingCanStartAt :: Position -> Number
  , uniqueId :: Int
  , length :: Number
  , sound :: { on :: Event RateInfo, off :: Event RateInfo } -> AudibleEnd
  | MakeLongs r
  )

type MakeLongs r =
  ( initialDims :: WindowDims
  , columnEventConstructor :: Column -> Event Unit
  , renderingInfo :: Behavior RenderingInfo
  , resizeEvent :: Event WindowDims
  , cnow :: Effect Milliseconds
  , isMobile :: Boolean
  , myPlayer :: Player
  , threeDI :: ThreeDI
  , notifications :: { hitLong :: Event HitLongOtherPlayer, releaseLong :: Event ReleaseLongOtherPlayer }
  , lpsCallback :: JMilliseconds -> Effect Unit -> Effect Unit
  , pushAudio :: Event AudibleChildEnd -> Effect Unit
  , mkColor :: RGB -> Color
  , animatedStuff :: Event { rateInfo :: RateInfo, playerPositions :: PlayerPositions }
  , buffers :: Behavior (Object.Object BrowserAudioBuffer)
  , silence :: BrowserAudioBuffer
  , debug :: Boolean
  , pushHitLong :: EventIO HitLongMe
  , pushHitLongVisualForLabel :: HitLongVisualForLabel -> Effect Unit
  , pushReleaseLong :: EventIO ReleaseLongMe
  , pushReleaseLongVisualForLabel :: ReleaseLongVisualForLabel -> Effect Unit
  , mkMatrix4 :: Matrix4' -> Matrix4
  , textures :: Textures Texture
  | r
  )

newtype HitLongOverTheWire = HitLongOverTheWire
  { uniqueId :: Int
  , hitAt :: Beats
  , distance :: Number
  , player :: Player
  }

derive instance Eq HitLongOverTheWire
derive newtype instance Show HitLongOverTheWire
derive instance Newtype HitLongOverTheWire _
derive newtype instance JSON.ReadForeign HitLongOverTheWire
derive newtype instance JSON.WriteForeign HitLongOverTheWire

newtype HitLongMe = HitLongMe
  { uniqueId :: Int
  , hitAt :: Beats
  , distance :: Number
  , issuedAt :: JMilliseconds
  }

derive instance Newtype HitLongMe _

newtype HitLongOtherPlayer = HitLongOtherPlayer
  { uniqueId :: Int
  , hitAt :: Beats
  , distance :: Number
  , player :: Player
  , issuedAt :: JMilliseconds
  }

derive instance Newtype HitLongOtherPlayer _

newtype HitLongVisual = HitLongVisual
  { uniqueId :: Int
  , hitAt :: Beats
  , distance :: Number
  , issuedAt :: JMilliseconds
  }

derive instance Newtype HitLongVisual _

newtype HitLongVisualForLabel = HitLongVisualForLabel
  { uniqueId :: Int
  , hitAt :: Beats
  , issuedAt :: JMilliseconds
  , distance :: Number
  , translation :: Event Vector3'
  , player :: Player
  }

derive instance Newtype HitLongVisualForLabel _
----------------- release long
newtype ReleaseLongOverTheWire = ReleaseLongOverTheWire
  { uniqueId :: Int
  , hitAt :: Beats
  , releasedAt :: Beats
  , pctConsumed :: Number
  , distance :: Number
  , player :: Player
  , outcome :: PointOutcome
  }

derive instance Eq ReleaseLongOverTheWire
derive newtype instance Show ReleaseLongOverTheWire
derive instance Newtype ReleaseLongOverTheWire _
derive newtype instance JSON.ReadForeign ReleaseLongOverTheWire
derive newtype instance JSON.WriteForeign ReleaseLongOverTheWire

newtype ReleaseLongMe = ReleaseLongMe
  { uniqueId :: Int
  , hitAt :: Beats
  , releasedAt :: Beats
  , pctConsumed :: Number
  , distance :: Number
  , issuedAt :: JMilliseconds
  }

derive instance Newtype ReleaseLongMe _

newtype ReleaseLongOtherPlayer = ReleaseLongOtherPlayer
  { uniqueId :: Int
  , hitAt :: Beats
  , releasedAt :: Beats
  , pctConsumed :: Number
  , distance :: Number
  , player :: Player
  , issuedAt :: JMilliseconds
  }

derive instance Newtype ReleaseLongOtherPlayer _

newtype ReleaseLongVisual = ReleaseLongVisual
  { uniqueId :: Int
  , hitAt :: Beats
  , releasedAt :: Beats
  , pctConsumed :: Number
  , distance :: Number
  , issuedAt :: JMilliseconds
  }

derive instance Newtype ReleaseLongVisual _

newtype ReleaseLongVisualForLabel = ReleaseLongVisualForLabel
  { uniqueId :: Int
  , hitAt :: Beats
  , releasedAt :: Beats
  , distance :: Number
  , pctConsumed :: Number
  , issuedAt :: JMilliseconds
  , translation :: Event Vector3'
  , player :: Player
  }

derive instance Newtype ReleaseLongVisualForLabel _
--------- leap
type MakeLeap r =
  ( column :: Column
  , hitsFirstPositionAt :: Beats
  , raycastingCanStartAt :: Position -> Number
  , hitsLastPositionAt :: Beats
  , uniqueId :: Int
  , sound :: Event RateInfo -> AudibleEnd
  , newPosition :: Position
  | MakeLeaps r
  )

type MakeLeapWord r =
  ( someonePlayedMe :: Event HitLeapMe
  , text :: String
  , column :: Column
  , hitsFirstPositionAt :: Beats
  , hitsLastPositionAt :: Beats
  , uniqueId :: Int
  , newPosition :: Position
  | MakeLeaps r
  )

type MakeLeaps r =
  ( initialDims :: WindowDims
  , columnEventConstructor :: Column -> Event Unit
  , renderingInfo :: Behavior RenderingInfo
  , resizeEvent :: Event WindowDims
  , threeDI :: ThreeDI
  , isMobile :: Boolean
  , myPlayer :: Player
  , cnow :: Effect Milliseconds
  , notifications :: { hitLeap :: Event HitLeapOtherPlayer }
  , lpsCallback :: JMilliseconds -> Effect Unit -> Effect Unit
  , pushAudio :: Event AudibleChildEnd -> Effect Unit
  , mkColor :: RGB -> Color
  , animatedStuff :: Event { rateInfo :: RateInfo, playerPositions :: PlayerPositions }
  , buffers :: Behavior (Object.Object BrowserAudioBuffer)
  , silence :: BrowserAudioBuffer
  , debug :: Boolean
  , pushLeap :: EventIO HitLeapMe
  , pushLeapVisualForLabel :: HitLeapVisualForLabel -> Effect Unit
  , mkMatrix4 :: Matrix4' -> Matrix4
  , textures :: Textures Texture
  | r
  )

newtype HitLeapOverTheWire = HitLeapOverTheWire
  { uniqueId :: Int
  , hitAt :: Beats
  , player :: Player
  , oldPosition :: Position
  , newPosition :: Position
  }

derive instance Eq HitLeapOverTheWire
derive newtype instance Show HitLeapOverTheWire
derive instance Newtype HitLeapOverTheWire _
derive newtype instance JSON.ReadForeign HitLeapOverTheWire
derive newtype instance JSON.WriteForeign HitLeapOverTheWire

newtype HitLeapMe = HitLeapMe
  { uniqueId :: Int
  , oldPosition :: Position
  , newPosition :: Position
  , hitAt :: Beats
  , issuedAt :: JMilliseconds
  }

derive instance Newtype HitLeapMe _

newtype HitLeapOtherPlayer = HitLeapOtherPlayer
  { uniqueId :: Int
  , oldPosition :: Position
  , newPosition :: Position
  , hitAt :: Beats
  , player :: Player
  , issuedAt :: JMilliseconds
  }

derive instance Newtype HitLeapOtherPlayer _

newtype HitLeapVisual = HitLeapVisual
  { uniqueId :: Int
  , oldPosition :: Position
  , newPosition :: Position
  , hitAt :: Beats
  , issuedAt :: JMilliseconds
  }

derive instance Newtype HitLeapVisual _

newtype HitLeapVisualForLabel = HitLeapVisualForLabel
  { uniqueId :: Int
  , oldPosition :: Position
  , newPosition :: Position
  , hitAt :: Beats
  , issuedAt :: JMilliseconds
  , translation :: Event Vector3'
  , player :: Player
  }

derive instance Newtype HitLeapVisualForLabel _

type SettingsNeeds =
  { dampeningRef :: Ref.Ref Number
  , myProfile :: Event Profile
  , fbAuth :: FirebaseAuth
  , firestoreDb :: Firestore
  , signedInNonAnonymously :: Event Boolean
  }

--
data Negotiation
  = PageLoad
  | NeedsOrientation (Maybe { ride :: String, track :: String })
  | WillNotWorkWithoutOrientation
  | ChooseRide (Array { data :: Track, id :: String })
  | SetSomeStuff SettingsNeeds
  | GetRulesOfGame
      { cubeTextures :: CubeTextures CTL.CubeTexture
      , models :: Models GLTFLoader.GLTF
      , initialDims :: WindowDims
      , signOut :: Effect Unit
      , firestoreDb :: Firestore
      , fbAuth :: FirebaseAuth
      , threeDI :: ThreeDI
      , cNow :: Effect Milliseconds
      , signedInNonAnonymously :: Event Boolean
      }
  | WantsTutorial WantsTutorial'
  | OpenEditor { oe :: OpenEditor', wt :: WantsTutorial' }
  | StartingNegotiation
  | RoomIsFull
  | GameHasStarted
  | RequestingPlayer
  | ReceivedPossibilities
  | ClaimFail
  | Success Success'

data StartStatus = HasNotStartedYet | HasStarted InFlightGameInfo

derive instance Eq StartStatus
derive instance Generic StartStatus _
instance Show StartStatus where
  show = genericShow

instance JSON.ReadForeign StartStatus where
  readImpl i = (HasStarted <$> JSON.readImpl i) <|> pure HasNotStartedYet

instance JSON.WriteForeign StartStatus where
  writeImpl HasNotStartedYet = undefined
  writeImpl (HasStarted x) = JSON.writeImpl x

type Success' =
  { player :: Player
  , shaders :: Shaders
  , trackId :: String
  , track :: Track
  , profileEvent :: Event Profile
  , events :: Array AugmentedEvent_
  , galaxyAttributes :: GalaxyAttributes
  , locallyStoredPlayerNameInCaseThisIsAnAnonymousSession :: Maybe String
  , channelName :: String
  , initialDims :: WindowDims
  , cNow :: Effect Milliseconds
  , threeDI :: ThreeDI
  , playerPositions :: Behavior PlayerPositionsF
  , models :: Models GLTFLoader.GLTF
  , textures :: Textures Texture
  , cubeTextures :: CubeTextures CTL.CubeTexture
  , optMeIn :: JMilliseconds -> Maybe String -> Effect Unit
  , pubNubEvent :: Event PlayerAction
  , playerStatus :: Event KnownPlayers
  }

type OpenEditor' =
  { fbAuth :: FirebaseAuth
  , goBack :: Effect Unit
  , signedInNonAnonymously :: Event Boolean
  , firestoreDb :: Firestore
  }

type WantsTutorial' =
  { player :: Player
  , shaders :: Shaders
  , longVerb :: BrowserAudioBuffer
  , initialDims :: WindowDims
  , galaxyAttributes :: GalaxyAttributes
  , playerPositions :: Behavior PlayerPositionsF
  , cNow :: Effect Milliseconds
  , threeDI :: ThreeDI
  , textures :: Textures Texture
  , models :: Models GLTFLoader.GLTF
  , cubeTextures :: CubeTextures CTL.CubeTexture
  , optMeIn :: JMilliseconds -> Effect Unit
  , playerStatus :: Event KnownPlayers
  }

type InFlightGameInfo' =
  { startedAt :: JMilliseconds
  , points :: Points
  , name :: Maybe String
  , penalties :: Penalty
  }

newtype InFlightGameInfo = InFlightGameInfo InFlightGameInfo'

derive instance Eq InFlightGameInfo
derive newtype instance Show InFlightGameInfo
derive newtype instance JSON.ReadForeign InFlightGameInfo
derive newtype instance JSON.WriteForeign InFlightGameInfo

newtype IAm = IAm String
newtype Channel = Channel String

newtype Claim = Claim String

derive instance Eq Claim
derive newtype instance Show Claim

jsonFriendlyTupleToTuple :: forall a b. { l :: a, r :: b } -> Tuple a b
jsonFriendlyTupleToTuple { l, r } = Tuple l r

tupleToJsonFriendlyTuple :: forall a b. Tuple a b -> { l :: a, r :: b }
tupleToJsonFriendlyTuple (Tuple l r) = { l, r }

newtype KnownPlayers = KnownPlayers (Map.Map Player StartStatus)

derive instance Newtype KnownPlayers _
derive instance Eq KnownPlayers
derive newtype instance Show KnownPlayers

instance JSON.ReadForeign KnownPlayers where
  readImpl i = do
    m <- JSON.readImpl i
    pure $ KnownPlayers $ (Map.fromFoldable :: Array _ -> _) $ map jsonFriendlyTupleToTuple m

instance JSON.WriteForeign KnownPlayers where
  writeImpl (KnownPlayers m) = JSON.writeImpl $ map tupleToJsonFriendlyTuple ((Map.toUnfoldable :: _ -> Array _) m)

instance Monoid KnownPlayers where
  mempty = KnownPlayers Map.empty

instance Semigroup KnownPlayers where
  append (KnownPlayers a) (KnownPlayers b) = KnownPlayers $ Map.unionWith f a b
    where
    f :: StartStatus -> StartStatus -> StartStatus
    f HasNotStartedYet HasNotStartedYet = HasNotStartedYet
    f HasNotStartedYet x = x
    f x HasNotStartedYet = x
    f (HasStarted (InFlightGameInfo x)) (HasStarted (InFlightGameInfo y)) = HasStarted $ InFlightGameInfo
      { startedAt: min x.startedAt y.startedAt
      , points: max x.points y.points
      , name: x.name <|> y.name
      , penalties: max x.penalties y.penalties
      }

derive newtype instance JSON.WriteForeign Claim
derive newtype instance JSON.ReadForeign Claim
derive instance Generic PlayerAction _
instance Show PlayerAction where
  show = genericShow

data PlayerAction
  = --movement
    XPositionKeyboard { player :: Player, ktpd :: KTPD }
  | XPositionMobile { player :: Player, gtpd :: GTPD }
  -- tap basic
  | HitBasic HitBasicOverTheWire
  -- tap leap
  | HitLeap HitLeapOverTheWire
  -- tap long
  | HitLong HitLongOverTheWire
  -- release long
  | ReleaseLong ReleaseLongOverTheWire
  --
  | PressedStart { startedAt :: JMilliseconds, name :: Maybe String, player :: Player }

derive instance Eq PlayerAction

instance toJSONPubNubPlayerAction :: JSON.ReadForeign PlayerAction where
  readImpl i = do
    { _type } :: { _type :: String } <- JSON.readImpl i
    case _type of
      "XPositionKeyboard" -> XPositionKeyboard <$> JSON.readImpl i
      "XPositionMobile" -> XPositionMobile <$> JSON.readImpl i
      "HitBasic" -> HitBasic <$> JSON.readImpl i
      "HitLeap" -> HitLeap <$> JSON.readImpl i
      "HitLong" -> HitLong <$> JSON.readImpl i
      "ReleaseLong" -> ReleaseLong <$> JSON.readImpl i
      "PressedStart" -> PressedStart <$> JSON.readImpl i
      _ -> fail (ForeignError $ "Could not parse: " <> JSON.writeJSON i)

instance fromJSONPubNubPlayerAction :: JSON.WriteForeign PlayerAction where
  writeImpl (XPositionKeyboard j) = JSON.writeImpl $ union { _type: "XPositionKeyboard" } j
  writeImpl (XPositionMobile j) = JSON.writeImpl $ union { _type: "XPositionMobile" } j
  writeImpl (HitBasic (HitBasicOverTheWire j)) = JSON.writeImpl $ union { _type: "HitBasic" } j
  writeImpl (HitLeap (HitLeapOverTheWire j)) = JSON.writeImpl $ union { _type: "HitLeap" } j
  writeImpl (HitLong (HitLongOverTheWire j)) = JSON.writeImpl $ union { _type: "HitLong" } j
  writeImpl (ReleaseLong (ReleaseLongOverTheWire j)) = JSON.writeImpl $ union { _type: "ReleaseLong" } j
  writeImpl (PressedStart ps) = JSON.writeImpl $ union { _type: "PressedStart" } ps

type ThreeDI =
  { scene :: THREE.TScene
  , group :: THREE.TGroup
  , euler :: THREE.TEuler
  , points :: THREE.TPoints
  , vector2 :: THREE.TVector2
  , vector3 :: THREE.TVector3
  , plane :: THREE.TPlaneGeometry
  , shaderMaterial :: THREE.TShaderMaterial
  , bufferGeometry :: THREE.TBufferGeometry
  , textureLoader :: THREE.TTextureLoader
  , cubeTextureLoader :: THREE.TCubeTextureLoader
  , gltfLoader :: THREE.TGLTFLoader
  , meshPhongMaterial :: THREE.TMeshPhongMaterial
  , meshStandardMaterial :: THREE.TMeshStandardMaterial
  , bufferAttribute :: THREE.TBufferAttribute
  , instancedBufferAttribute :: THREE.TInstancedBufferAttribute
  , ambientLight :: THREE.TAmbientLight
  , pointLight :: THREE.TPointLight
  , css2DObject :: THREE.TCSS2DObject
  , css3DObject :: THREE.TCSS3DObject
  , webGLRenderer :: THREE.TWebGLRenderer
  , effectComposer :: THREE.TEffectComposer
  , effectComposerPass :: THREE.TEffectComposerPass
  , unrealBloomPass :: THREE.TUnrealBloomPass
  , glitchPass :: THREE.TGlitchPass
  , renderPass :: THREE.TRenderPass
  , color :: THREE.TColor
  , instancedMesh :: THREE.TInstancedMesh
  , raycaster :: THREE.TRaycaster
  , mesh :: THREE.TMesh
  , perspectiveCamera :: THREE.TPerspectiveCamera
  , matrix4 :: THREE.TMatrix4
  , boxGeometry :: THREE.TBoxGeometry
  , cylinderGeometry :: THREE.TCylinderGeometry
  , sphereGeometry :: THREE.TSphereGeometry
  , css2DRenderer :: THREE.TCSS2DRenderer
  , css3DRenderer :: THREE.TCSS3DRenderer
  }

data OrientationPermissionState = NotNeeded | NeededButUnknown | KnownAccepted | KnownRejected

data AppOrientationState
  = UnknownOrientationPermission
  | SuccessfulOrientationPermission
  | CannotUseAppDueToLackOfOrientationPermission

derive instance Eq AppOrientationState
derive instance Generic AppOrientationState _
instance Show AppOrientationState where
  show = genericShow

type Shader = { vertex :: String, fragment :: String }
type Shaders = { galaxy :: Shader }

type GalaxyAttributes =
  { aPosition :: InstancedBufferAttribute
  , aPosition2 :: InstancedBufferAttribute
  , aColor :: InstancedBufferAttribute
  , aColor2 :: InstancedBufferAttribute
  }

type RideV0' =
  { player1 :: Maybe String
  , player2 :: Maybe String
  , player3 :: Maybe String
  , player4 :: Maybe String
  , player1StartTimeInMilliseconds :: Maybe Number
  , player2StartTimeInMilliseconds :: Maybe Number
  , player3StartTimeInMilliseconds :: Maybe Number
  , player4StartTimeInMilliseconds :: Maybe Number
  , player1Points :: Maybe Number
  , player2Points :: Maybe Number
  , player3Points :: Maybe Number
  , player4Points :: Maybe Number
  , player1Penalties :: Maybe Number
  , player2Penalties :: Maybe Number
  , player3Penalties :: Maybe Number
  , player4Penalties :: Maybe Number
  , player1Name :: Maybe String
  , player2Name :: Maybe String
  , player3Name :: Maybe String
  , player4Name :: Maybe String
  , open :: Boolean
  , version :: Version 0
  }

defaultRide :: Ride
defaultRide = RideV0
  { player1: Nothing
  , player2: Nothing
  , player3: Nothing
  , player4: Nothing
  , player1StartTimeInMilliseconds: Nothing
  , player2StartTimeInMilliseconds: Nothing
  , player3StartTimeInMilliseconds: Nothing
  , player4StartTimeInMilliseconds: Nothing
  , player1Points: Nothing
  , player2Points: Nothing
  , player3Points: Nothing
  , player4Points: Nothing
  , player1Penalties: Nothing
  , player2Penalties: Nothing
  , player3Penalties: Nothing
  , player4Penalties: Nothing
  , player1Name: Nothing
  , player2Name: Nothing
  , player3Name: Nothing
  , player4Name: Nothing
  , open: true
  , version: Version 0
  }

data Ride =
  RideV0 RideV0'

instance JSON.ReadForeign Ride where
  readImpl i = RideV0 <$> (JSON.readImpl i)

instance JSON.WriteForeign Ride where
  writeImpl (RideV0 i) = JSON.writeImpl i

data ChannelChooser = NoChannel | RideChannel String String Track | TutorialChannel | EditorChannel

derive instance Generic ChannelChooser _
instance Show ChannelChooser where
  show = genericShow

newtype Models s = Models { spaceship :: s }

derive instance Newtype (Models s) _

type ToplevelInfo =
  { loaded :: Event Boolean
  , negotiation :: Event Negotiation
  , isMobile :: Boolean
  , tutorial :: Effect Unit
  , editor :: Effect Unit
  , ride :: (String /\ Track) -> Effect Unit
  , lpsCallback :: JMilliseconds -> Effect Unit -> Effect Unit
  , resizeE :: Event WindowDims
  , renderingInfo :: Behavior RenderingInfo
  , goHome :: Effect Unit
  , givePermission :: Boolean -> Effect Unit
  , columnPusher :: EventIO Column
  , pushBasic :: EventIO HitBasicMe
  , pushLeap :: EventIO HitLeapMe
  , pushHitLong :: EventIO HitLongMe
  , pushReleaseLong :: EventIO ReleaseLongMe
  , debug :: Boolean
  , silence :: BrowserAudioBuffer
  , icid :: Ref.Ref (Maybe RequestIdleCallbackId)
  , wdw :: Window
  , unschedule :: Ref.Ref (Map.Map JMilliseconds (Effect Unit))
  , soundObj :: Ref.Ref (Object.Object BrowserAudioBuffer)
  }

newtype PotentiallyMissingArray a = PotentiallyMissingArray (Array a)

derive instance Newtype (PotentiallyMissingArray a) _
derive instance Generic (PotentiallyMissingArray a) _
derive newtype instance Eq a => Eq (PotentiallyMissingArray a)
derive newtype instance Ord a => Ord (PotentiallyMissingArray a)
derive newtype instance Show a => Show (PotentiallyMissingArray a)

instance JSON.ReadForeign a => JSON.ReadForeign (PotentiallyMissingArray a) where
  readImpl i = PotentiallyMissingArray <$> do
    a <- JSON.readImpl i
    pure (fromMaybe [] a)

instance JSON.WriteForeign a =>JSON.WriteForeign (PotentiallyMissingArray a) where
  writeImpl (PotentiallyMissingArray a) = JSON.writeImpl a

data Profile = ProfileV0
  { username :: String
  , avatarURL :: Maybe String
  , friends :: PotentiallyMissingArray String
  , rides :: PotentiallyMissingArray String
  , version :: Version 0
  }

instance JSON.ReadForeign Profile where
  readImpl i = ProfileV0 <$> JSON.readImpl i

instance JSON.WriteForeign Profile where
  writeImpl (ProfileV0 pv0) = JSON.writeImpl pv0

derive instance Generic Profile _
derive instance Eq Profile

instance Show Profile where
  show = genericShow
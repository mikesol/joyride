module BMS.Types where

import Prelude

import Data.Array as Array
import Data.Foldable as Foldable
import Data.Generic.Rep (class Generic)
import Data.Map (Map)
import Data.Map as Map
import Data.Maybe (Maybe(..), fromJust)
import Data.Newtype (class Newtype)
import Data.Show.Generic (genericShow)
import Data.Tuple.Nested (type (/\), (/\))
import Partial.Unsafe (unsafePartial)

data BmsLine
  = Genre String
  | Title String
  | Artist String
  | BPM Number
  | Subtitle String
  | Stagefile String
  | Banner String
  -- #WAVxx yy
  --
  -- registers a file to a name
  --
  -- * xx - name (string)
  -- * yy - file (string)
  | Wav { name :: String, file :: String }
  -- #xxx02:zz
  --
  -- changes the time signature
  --
  -- * xxx - measure (int)
  -- * zz  - factor  (float)
  | ChangeFactor { measure :: Int, factor :: Number }
  -- #xxxyy:zz
  --
  -- places a stream of notes
  --
  -- * xxx - measure  (int)
  -- * yy  - channel  (int)
  -- * zz  - commands (string) [0-9a-zA-z]
  | NoteColumn { measure :: Int, channel :: Int, notes :: Array String }

derive instance Eq BmsLine
derive instance Ord BmsLine
derive instance Generic BmsLine _
instance Show BmsLine where
  show = genericShow

isBGMChannel :: Int -> Boolean
isBGMChannel = eq 1

isFactorChannel :: Int -> Boolean
isFactorChannel = eq 2

isPlayChannel :: Int -> Boolean
isPlayChannel i = Foldable.or
  [ i >= 11 && i <= 16
  , i == 18 || i == 19
  , i >= 21 && i <= 26
  , i == 28 || i == 29
  ]

newtype Measure = Measure Int

derive instance Newtype Measure _
derive newtype instance Eq Measure
derive newtype instance Ord Measure

instance Show Measure where
  show (Measure measure) = "(Measure " <> show measure <> ")"

newtype Factor = Factor Number

derive instance Newtype Factor _
derive newtype instance Eq Factor
derive newtype instance Ord Factor

instance Show Factor where
  show (Factor measure) = "(Factor " <> show measure <> ")"

data Column = BGMColumn Int | PlayColumn Int

derive instance Eq Column
derive instance Ord Column

instance Show Column where
  show (BGMColumn c) = "(BGMColumn " <> show c <> ")"
  show (PlayColumn c) = "(PlayColumn " <> show c <> ")"

unsafeFromChannel :: Int -> Column
unsafeFromChannel i =
  PlayColumn $ min (min (i `mod` 11) (i `mod` 18 + 5)) (min (i `mod` 21) (i `mod` 21 + 5))

newtype Note = Note String

derive instance Newtype Note _
derive newtype instance Eq Note
derive newtype instance Ord Note

instance Show Note where
  show (Note note) = "(Note " <> show note <> ")"

newtype Notes = Notes (Array Note)

derive instance Newtype Notes _
derive newtype instance Eq Notes
derive newtype instance Ord Notes

instance Show Notes where
  show (Notes notes) = "(Notes " <> show notes <> ")"

newtype Offset = Offset Number

derive instance Newtype Offset _
derive newtype instance Eq Offset
derive newtype instance Ord Offset

instance Show Offset where
  show (Offset offset) = "(Offset " <> show offset <> ")"

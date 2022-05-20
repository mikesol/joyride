module BMS.Parser (bms) where

import Prelude

import BMS.Types (BmsLine(..), isBGMChannel, isFactorChannel, isPlayChannel)
import Control.Alt ((<|>))
import Control.Alternative (empty)
import Data.Array as Array
import Data.Array.NonEmpty as NEA
import Data.Foldable as Foldable
import Data.Int as Int
import Data.Maybe (Maybe(..), fromMaybe)
import Data.Number as Number
import Data.String as String
import Data.String.Regex (Regex)
import Data.String.Regex as Regex
import Data.String.Regex.Flags (global, unicode)
import Data.String.Regex.Unsafe (unsafeRegex)

matchThen :: forall r. Regex -> (Array (Maybe String) -> Maybe r) -> String -> Maybe r
matchThen p f i = Regex.match p i <#> NEA.toArray >>= f

header :: String -> Maybe BmsLine
header = matchThen pattern convert
  where
  pattern = unsafeRegex ("^#(" <> words <> ") (.+)$") unicode

  words = String.joinWith "|"
    [ "GENRE"
    , "TITLE"
    , "ARTIST"
    , "BPM"
    , "SUBTITLE"
    , "STAGEFILE"
    , "BANNER"
    ]

  convert [ _, Just key, Just value ] =
    case key of
      "GENRE" ->
        pure $ Genre value
      "TITLE" ->
        pure $ Title value
      "ARTIST" ->
        pure $ Artist value
      "BPM" ->
        BPM <$> Number.fromString value
      "SUBTITLE" ->
        pure $ Subtitle value
      "STAGEFILE" ->
        pure $ Stagefile value
      "BANNER" ->
        pure $ Banner value
      _ ->
        Nothing
  convert _ = Nothing

wav :: String -> Maybe BmsLine
wav = matchThen pattern convert
  where
  pattern = unsafeRegex "^#WAV([0-9A-Z]{2}) (.+)$" unicode

  convert [ _, Just name, Just file ]
    | name /= "00" = Just $ Wav { name, file }
  convert _ = Nothing

changeFactor :: String -> Maybe BmsLine
changeFactor = matchThen pattern convert
  where
  pattern = unsafeRegex "^#(\\d{3})02:([0-9]\\.[0-9]+)$" unicode

  convert [ _, Just measure_, Just factor_ ] = ado
    measure <- Int.fromString measure_
    factor <- Number.fromString factor_
    in ChangeFactor { measure, factor }
  convert _ = Nothing

noteColumn :: String -> Maybe BmsLine
noteColumn = matchThen pattern convert
  where
  pattern = unsafeRegex "^#(\\d{3})(\\d{2}):([0-9A-Z]+)$" unicode

  convert =
    let
      -- We've already filtered valid names in the pattern above, so
      -- we're only grouping them in pairs here. Likewise, notes with
      -- only a single character are also dropped.
      commandPattern = unsafeRegex ".{2}" (unicode <> global)
    in
      case _ of
        [ _, Just measure_, Just channel_, Just commands_ ]
          | Just channel <- Int.fromString channel_
          , not $ isFactorChannel channel
          , isBGMChannel channel || isPlayChannel channel -> ado
              measure <- Int.fromString measure_
              notes <- Array.catMaybes <<< NEA.toArray <$>
                Regex.match commandPattern commands_
              in NoteColumn { measure, channel, notes }
        _ ->
          Nothing

bmsLine :: String -> Maybe BmsLine
bmsLine i = Foldable.foldl (\n f -> f i <|> n) empty
  [ header
  , wav
  , changeFactor
  , noteColumn
  ]

bms :: String -> Array BmsLine
bms = fromMaybe [] <<< map (Array.mapMaybe bmsLine) <<< splitLines

splitLines :: String -> Maybe (Array String)
splitLines = Regex.match (unsafeRegex "[^\\r\\n]+" (unicode <> global)) >>> map
  (Array.catMaybes <<< NEA.toArray)

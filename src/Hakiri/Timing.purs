module BMS.Timing where

import Prelude

import BMS.Types
  ( BmsLine(..)
  , Column(..)
  , Factor(..)
  , Measure(..)
  , Note(..)
  , Notes(..)
  , Offset(..)
  , isBGMChannel
  , isPlayChannel
  , unsafeFromChannel
  )
import Data.Array as Array
import Data.Foldable (class Foldable)
import Data.Foldable as Foldable
import Data.FoldableWithIndex (foldlWithIndex)
import Data.Int as Int
import Data.Lens (over, set)
import Data.Lens.Barlow (barlow)
import Data.Lens.Record (prop)
import Data.Map (Map)
import Data.Map as Map
import Data.Maybe (Maybe(..), fromMaybe)
import Data.Newtype (unwrap)
import Data.Tuple.Nested (type (/\), (/\))
import Safe.Coerce (coerce)
import Type.Proxy (Proxy(..))

type Headers =
  { artist :: Maybe String
  , banner :: Maybe String
  , bpm :: Maybe Number
  , genre :: Maybe String
  , stagefile :: Maybe String
  , subtitle :: Maybe String
  , title :: Maybe String
  , wavs :: Map Note String
  }

type Measures = Map (Measure /\ Column) (Factor /\ Notes)

type NoteOffsets = Map Column (Map Offset Note)

-- | Gathers `BmsLine`s into the appropriate metadatas.
-- |
-- | *WARNING*: This function assumes that the input array is
-- | well-formed—that is to say that each instructions, especially the
-- | channel-based ones must be in-order. It's recommended to use the
-- | parser to generate input for this function, instead of
-- | handwriting each instruction.
gatherAll
  :: forall f
   . Foldable f
  => f BmsLine
  -> { headers :: Headers
     , measures :: Measures
     }
gatherAll = over (barlow (Proxy :: Proxy "measures")) _.info <<< Foldable.foldl go
  { measures:
      { info: Map.empty
      , bgmColumn: 0
      , measure: 0
      , factor: 1.0
      }
  , headers:
      { genre: Nothing
      , title: Nothing
      , artist: Nothing
      , bpm: Nothing
      , subtitle: Nothing
      , stagefile: Nothing
      , banner: Nothing
      , wavs: Map.empty
      }
  }
  where
  go prev inpt = goHeaders (goNote prev inpt) inpt

  goNote prev =
    case _ of
      NoteColumn { measure: nextMeasure, channel, notes }
        | isBGMChannel channel ->
            let
              bgmColumn_ =
                if measure == prev.measures.measure then
                  prev.measures.bgmColumn
                else
                  0
              bgmColumn = bgmColumn_ + 1
              factor =
                if measure == prev.measures.measure then
                  prev.measures.factor
                else
                  1.0
              measure = max nextMeasure prev.measures.measure
              info =
                if Array.all (_ == "00") notes then
                  prev.measures.info
                else
                  let
                    factor' = coerce factor :: Factor
                    notes' = coerce notes :: Notes
                  in
                    Map.insert (Measure nextMeasure /\ BGMColumn bgmColumn_)
                      (factor' /\ notes')
                      prev.measures.info
            in
              set (prop (Proxy :: Proxy "measures")) { info, bgmColumn, measure, factor } prev
        | isPlayChannel channel ->
            let
              bgmColumn = prev.measures.bgmColumn
              factor =
                if measure == prev.measures.measure then
                  prev.measures.factor
                else
                  1.0
              measure = nextMeasure
              info =
                let
                  factor' = coerce factor :: Factor
                  notes' = coerce notes :: Notes
                in
                  Map.insert (Measure nextMeasure /\ unsafeFromChannel channel)
                    (factor' /\ notes')
                    prev.measures.info
            in
              set (prop (Proxy :: Proxy "measures")) { info, bgmColumn, measure, factor } prev
      ChangeFactor { measure, factor } ->
        over (prop (Proxy :: Proxy "measures")) (_ { measure = measure, factor = factor }) prev
      _ ->
        prev

  goHeaders prev = case _ of
    Genre genre ->
      set (barlow (Proxy :: Proxy "headers.genre")) (Just genre) prev
    Title title ->
      set (barlow (Proxy :: Proxy "headers.title")) (Just title) prev
    Artist artist ->
      set (barlow (Proxy :: Proxy "headers.artist")) (Just artist) prev
    BPM bpm ->
      set (barlow (Proxy :: Proxy "headers.bpm")) (Just bpm) prev
    Subtitle subtitle ->
      set (barlow (Proxy :: Proxy "headers.subtitle")) (Just subtitle) prev
    Stagefile stagefile ->
      set (barlow (Proxy :: Proxy "headers.stagefile")) (Just stagefile) prev
    Banner banner ->
      set (barlow (Proxy :: Proxy "headers.banner")) (Just banner) prev
    Wav { name, file } ->
      over (barlow (Proxy :: Proxy "headers.wavs")) (Map.insert (Note name) file) prev
    _ ->
      prev

-- | Computes the note offsets per `Column`, storing them in a `Map`
-- | of `Offset`s to `Note`s.
-- |
-- | This structure can be consumed as-is in the audio loop, but at
-- | the cost of `O(log(n))` lookups. However, this also means that
-- | implementing seekbar functionality is considerably easier to do.
noteOffsets
  :: forall headers
   . { headers :: { bpm :: Maybe Number | headers }, measures :: Measures }
  -> NoteOffsets
noteOffsets { headers, measures } = _.columns $ foldlWithIndex go
  { columns: Map.empty, offset: 0.0, measure: 0 }
  measures
  where
  go (measure /\ column) prev (factor /\ notes) =
    { columns: nextColumns
    , offset: nextOffset
    , measure: nextMeasure
    }
    where
    length = 60.0 / (fromMaybe 130.0 headers.bpm) * 4.0 * (unwrap factor)
    subdivisions = Int.toNumber $ Array.length $ unwrap notes
    delta = length / subdivisions

    nextMeasure = unwrap measure
    nextOffset =
      if nextMeasure == prev.measure then prev.offset
      else prev.offset + length * Int.toNumber (nextMeasure - prev.measure)
    nextColumns = Map.insertWith Map.union column (foldlWithIndex go' Map.empty (unwrap notes))
      prev.columns
      where
      go' index offsetted = case _ of
        Note "00" ->
          offsetted
        note ->
          Map.insert (Offset $ nextOffset + delta * Int.toNumber index) note offsetted

module Joyride.App.Editor where

import Prelude

import Bolson.Control (switcher)
import Bolson.Core (envy, dyn)
import Control.Alt ((<|>))
import Control.Monad.ST.Class (class MonadST)
import Control.Parallel (parTraverse)
import Control.Plus (empty)
import Control.Promise (toAffE)
import Data.Array (intercalate, length, sortBy, (!!), (..))
import Data.Array as Array
import Data.Either (Either(..), hush)
import Data.Filterable (compact, filterMap)
import Data.Foldable (for_, oneOf, traverse_)
import Data.FoldableWithIndex (traverseWithIndex_)
import Data.Function (on)
import Data.Int (floor)
import Data.Lens (set)
import Data.Lens.Index (ix)
import Data.Map (Map)
import Data.Map as Map
import Data.Maybe (Maybe(..), fromMaybe, isJust, maybe)
import Data.Monoid.Always (always)
import Data.Monoid.Endo (Endo(..))
import Data.Newtype (unwrap)
import Data.Number.Format (fixed, toStringWith)
import Data.Set as Set
import Data.Traversable (traverse)
import Data.Tuple (Tuple(..), fst, snd)
import Data.Tuple.Nested ((/\), type (/\))
import Deku.Attribute (class Attr, Attribute, cb, xdata, (:=))
import Deku.Control (text, text_)
import Deku.Core (Domable, insert_, remove, vbussedUncurried)
import Deku.DOM (Class)
import Deku.DOM as D
import Deku.Listeners (click, slider)
import Effect (Effect)
import Effect.Aff (Aff, error, forkAff, joinFiber, launchAff_, makeAff)
import Effect.Class (liftEffect)
import Effect.Console (log)
import Effect.Random (randomInt)
import Effect.Ref as Ref
import FRP.Behavior (sample)
import FRP.Event (AnEvent, fold, folded, fromEvent, keepLatest, mailboxed, mapAccum, memoize, sampleOn, toEvent)
import FRP.Event.Class (biSampleOn)
import FRP.Event.VBus (V, vbus)
import Foreign.Object as Object
import Hyrule.Zora (Zora)
import JSURI (encodeURIComponent)
import Joyride.App.Loading (loadingPage)
import Joyride.App.Tutorial (tutorial)
import Joyride.Editor.ADT (Landmark(..), LongLength(..), Marker(..))
import Joyride.FRP.Aff (eventToAff)
import Joyride.FRP.Beh (memoBeh)
import Joyride.FRP.Behavior (howShouldIBehave)
import Joyride.FRP.Rider (rider, toRide)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Filestack.Filestack (init, picker)
import Joyride.Firebase.Auth (User(..), currentUser, signInWithGoogle)
import Joyride.Firebase.Firestore (DocumentReference, addEventAff, addTrackAff, deleteEventAff, forkTrackAff, getEventAff, getEventsAff, getTrackAff, getTracksAff, updateColumnAff, updateEventNameAff, updateMarker1TimeAff, updateMarker2TimeAff, updateMarker3TimeAff, updateMarker4TimeAff, updateTrackPrivateAff, updateTrackTitleAff)
import Joyride.IO.File (fileList)
import Joyride.QualifiedDo.Apply as QDA
import Joyride.Scores.Ride.Basic (rideBasics)
import Joyride.Scores.Ride.Leap (rideLeaps)
import Joyride.Scores.Ride.Long (rideLongs)
import Joyride.Style (buttonActiveCls, buttonCls, distinctColors, headerCls)
import Joyride.Types (Column(..), intToColumn)
import Joyride.UniqueNames (randomName)
import Joyride.Wavesurfer.Wavesurfer (WaveSurfer, addMarker, associateEventDocumentIdWithMarker, associateEventDocumentIdWithSortedMarkerIdList, getCurrentTime, getDuration, hideMarker, makeWavesurfer, muteExcept, removeMarker, showMarker, zoom)
import Ocarina.Interpret (context_, decodeAudioDataFromUri)
import Simple.JSON as JSON
import Type.Proxy (Proxy(..))
import Types (BasicEventV0', Column, EventV0(..), Event_(..), LeapEventV0', LongEventV0', OpenEditor', Position(..), ToplevelInfo, Track(..), WantsTutorial')
import Web.DOM.Node (firstChild, textContent)
import Web.DOM.Node as Node
import Web.Event.Event (EventType(..), target)
import Web.Event.EventTarget (addEventListener, eventListener)
import Web.File.File (toBlob)
import Web.File.FileList as FileList
import Web.File.FileReader (fileReader, readAsText, result, toEventTarget)
import Web.HTML (window)
import Web.HTML.HTMLInputElement (fromEventTarget, value, valueAsNumber)
import Web.HTML.Window (alert)

smplCls :: forall s m elt. MonadST s m => Attr elt Class String => String -> AnEvent m (Attribute elt)
smplCls s = oneOf [ pure $ D.Class := s ]

infixr 4 sampleOn as 🙂
infixr 4 biSampleOn as 😄
infixr 4 sample as 😝

type PreviewScreenNeeds = WantsTutorial'

type Events :: forall k. (Type -> k) -> Row k
type Events t =
  ( importerScreenVisible :: t Boolean
  , chooserScreenVisible :: t Boolean
  , forkingScreenVisible :: t Boolean
  , loadingScreenVisible :: t Boolean
  , currentTime :: t (Effect Number)
  , previewScreenVisible :: t (Maybe PreviewScreenNeeds)
  , availableTracks :: t (Array { id :: String, data :: Track })
  -- achtung: this event is only for external modification
  -- the listener for edited content shouldn't loop back to the element, otherwise we'll get an unnecessary gnarly feedback loop
  , initialTitle :: t String
  , initialPrivate :: t Boolean
  , atomicTrackOperation :: t (Track -> Track)
  , atomicEventOperation :: t (Map Int Event_ -> Map Int Event_)
  , loadWave :: t String
  , waveSurfer :: t WaveSurfer
  , documentId :: t String
  , spamIdsOnSubscription :: t { address :: Int, payload :: String }
  , markerMoved ::
      t
        { ix :: Int
        , offset :: Int
        , inArray :: Int
        , time :: Number
        , id :: Maybe String
        }
  -- CEvents
  , addBasic :: t (Maybe String /\ BasicEventV0')
  , addLeap :: t (Maybe String /\ LeapEventV0')
  , addLongPress :: t (Maybe String /\ LongEventV0')
  , solo :: t (Int /\ Int)
  , mute :: t (Int /\ Int)
  , unSolo :: t (Int /\ Int)
  , unMute :: t (Int /\ Int)
  )

type SingleItem :: forall k. (Type -> k) -> Row k
type SingleItem t =
  ( changeName :: t (Maybe String)
  , changeColumn :: t Column
  , solo :: t Unit
  , mute :: t Unit
  , delete :: t Unit
  )

type PlainOl :: forall k. k -> k
type PlainOl t = t

data CAction = CBasic (Maybe String /\ BasicEventV0') | CLeap (Maybe String /\ LeapEventV0') | CLongPress (Maybe String /\ LongEventV0')
data SoMu = Solo (Int /\ Int) | Mute (Int /\ Int) | UnSolo (Int /\ Int) | UnMute (Int /\ Int)

type ChangeTrack = Track -> Track
type ChangeEvent_ = Map Int Event_ -> Map Int Event_

aChangeTitle :: Maybe String -> ChangeTrack
aChangeTitle t (TrackV0 track) = (TrackV0 (track { title = t }))

aChangePrivate :: Boolean -> ChangeTrack
aChangePrivate p (TrackV0 track) = (TrackV0 (track { private = p }))

aChangeOwner :: String -> ChangeTrack
aChangeOwner o (TrackV0 track) = (TrackV0 (track { owner = o }))

foreign import styleAudio :: Effect Unit

aAddBasic
  :: { id :: Int
     , name :: Maybe String
     , column :: Column
     , marker1Time :: Number
     , marker2Time :: Number
     , marker3Time :: Number
     , marker4Time :: Number
     }
  -> ChangeEvent_
aAddBasic t = Map.insert t.id
  ( EventV0
      ( BasicEventV0
          { marker1Time: t.marker1Time
          , marker1AudioURL: Nothing
          , marker2Time: t.marker2Time
          , marker2AudioURL: Nothing
          , marker3Time: t.marker3Time
          , marker3AudioURL: Nothing
          , marker4Time: t.marker4Time
          , marker4AudioURL: Nothing
          , column: t.column
          , name: t.name
          , version: mempty
          }
      )
  )

aAddLeap
  :: { id :: Int
     , name :: Maybe String
     , column :: Column
     , marker1Time :: Number
     , marker2Time :: Number
     , position :: Position
     }
  -> ChangeEvent_
aAddLeap t = Map.insert t.id
  ( EventV0
      ( LeapEventV0
          { marker1Time: t.marker1Time
          , audioURL: Nothing
          , marker2Time: t.marker2Time
          , position: t.position
          , column: t.column
          , name: t.name
          , version: mempty
          }
      )
  )

aAddLongPress
  :: { id :: Int
     , name :: Maybe String
     , column :: Column
     , marker1Time :: Number
     , marker2Time :: Number
     , length :: Number
     }
  -> ChangeEvent_
aAddLongPress t = Map.insert t.id
  ( EventV0
      ( LongEventV0
          { marker1Time: t.marker1Time
          , audioURL: Nothing
          , marker2Time: t.marker2Time
          , length: t.length
          , column: t.column
          , name: t.name
          , version: mempty
          }
      )
  )

aChangeName :: { id :: Int, name :: Maybe String } -> ChangeEvent_
aChangeName { id, name } = Map.update
  ( Just <<< case _ of
      EventV0 (BasicEventV0 be) -> EventV0 (BasicEventV0 (be { name = name }))
      EventV0 (LeapEventV0 be) -> EventV0 (LeapEventV0 (be { name = name }))
      EventV0 (LongEventV0 be) -> EventV0 (LongEventV0 (be { name = name }))
  )
  id

aChangeColumn :: { id :: Int, column :: Column} -> ChangeEvent_
aChangeColumn { id, column } = Map.update
  ( Just <<< case _ of
      EventV0 (BasicEventV0 be) -> EventV0 (BasicEventV0 (be { column = column }))
      EventV0 (LeapEventV0 be) -> EventV0 (LeapEventV0 (be { column = column }))
      EventV0 (LongEventV0 be) -> EventV0 (LongEventV0 (be { column = column }))
  )
  id

aChangeMarker1 :: { id :: Int, time :: Number } -> ChangeEvent_
aChangeMarker1 { id, time } = Map.update
  ( Just <<< case _ of
      EventV0 (BasicEventV0 be) -> EventV0 (BasicEventV0 (be { marker1Time = time }))
      EventV0 (LeapEventV0 be) -> EventV0 (LeapEventV0 (be { marker1Time = time }))
      EventV0 (LongEventV0 be) -> EventV0 (LongEventV0 (be { marker1Time = time }))
  )
  id

aChangeMarker2 :: { id :: Int, time :: Number } -> ChangeEvent_
aChangeMarker2 { id, time } = Map.update
  ( Just <<< case _ of
      EventV0 (BasicEventV0 be) -> EventV0 (BasicEventV0 (be { marker2Time = time }))
      EventV0 (LeapEventV0 be) -> EventV0 (LeapEventV0 (be { marker2Time = time }))
      EventV0 (LongEventV0 be) -> EventV0 (LongEventV0 (be { marker2Time = time }))
  )
  id

aChangeMarker3 :: { id :: Int, time :: Number } -> ChangeEvent_
aChangeMarker3 { id, time } = Map.update
  ( Just <<< case _ of
      EventV0 (BasicEventV0 be) -> EventV0 (BasicEventV0 (be { marker3Time = time }))
      x -> x
  )
  id

aChangeMarker4 :: { id :: Int, time :: Number } -> ChangeEvent_
aChangeMarker4 { id, time } = Map.update
  ( Just <<< case _ of
      EventV0 (BasicEventV0 be) -> EventV0 (BasicEventV0 (be { marker4Time = time }))
      x -> x
  )
  id

aChangeLength :: { id :: Int, length :: Number } -> ChangeEvent_
aChangeLength { id, length } = Map.update
  ( Just <<< case _ of
      EventV0 (LongEventV0 be) -> EventV0 (LongEventV0 (be { length = length }))
      x -> x
  )
  id

aDeleteEvent_ :: { id :: Int } -> ChangeEvent_
aDeleteEvent_ { id } = Map.delete id

defaultBasic :: Int -> Int -> Maybe String -> BasicEventV0' -> Landmark
defaultBasic id startIx fbId be = LBasic
  { l1: Marker { at: be.marker1Time }
  , l2: Marker { at: be.marker2Time }
  , l3: Marker { at: be.marker3Time }
  , l4: Marker { at: be.marker4Time }
  , name: be.name
  , fbId
  , id
  , startIx
  , col: be.column
  }

defaultLeap :: Int -> Int -> Maybe String -> LeapEventV0' -> Landmark
defaultLeap id startIx fbId be = LLeap
  { start: Marker { at: be.marker1Time }
  , end: Marker { at: be.marker2Time }
  , position: be.position
  , name: be.name
  , id
  , fbId
  , startIx
  , col: be.column
  }

defaultLongPress :: Int -> Int -> Maybe String -> LongEventV0' -> Landmark
defaultLongPress id startIx fbId be = LLong
  { start: Marker { at: be.marker1Time }
  , end: Marker { at: be.marker2Time }
  , len: LongLength { len: be.length }
  , name: be.name
  , id
  , fbId
  , startIx
  , col: be.column
  }

ldc :: Int
ldc = length distinctColors

dC :: Int -> String
dC i = fromMaybe "#8b6f1f" (distinctColors !! (i `mod` ldc))

editorPage
  :: forall lock payload
   . ToplevelInfo
  -> OpenEditor'
  -> WantsTutorial'
  -> Domable lock payload
editorPage tli { fbAuth, goBack, firestoreDb, signedInNonAnonymously } wtut = QDA.do
  pushed /\ (event :: { | Events (AnEvent Zora) }) <- vbussedUncurried (Proxy :: _ (V (Events PlainOl)))
  let
    initialData :: AnEvent Zora { initialTitle :: String, url :: String, initialPrivate :: Boolean }
    initialData = fireAndForget (event.initialPrivate 😄 event.loadWave 😄 ({ initialTitle: _, url: _, initialPrivate: _ } <$> event.initialTitle))
  let
    mostRecentData' = keepLatest
      ( initialData <#> \{ initialTitle, url, initialPrivate } ->
          let
            pureor =
              ( TrackV0
                  { title: Nothing
                  , url
                  , private: initialPrivate
                  , version: mempty
                  , owner: ""
                  } /\ Map.empty
              )
          in
            fold
              ( \a (t /\ e) -> case a of
                  Left ae -> t /\ ae e
                  Right at -> (at t) /\ e
              )
              (Left <$> (event.atomicEventOperation) <|> (Right <$> (pure (aChangeTitle (Just initialTitle)) <|> event.atomicTrackOperation)))
              pureor
      )
  let nextAttributableColumn = map snd $ fold (\_ (b /\ c) -> if b && c >= 10 then false /\ 9 else if not b && c <= 4 then true /\ 5 else (b /\ ((if b then add else sub) c 1))) (pure unit) (true /\ 7)
  mostRecentData <- envy <<< memoBeh mostRecentData'
    ( TrackV0
        { title: Nothing
        , url: ""
        , private: false
        , version: mempty
        , owner: ""
        } /\ Map.empty
    )
  docEv <-
    ( envy
        <<< rider
          ( toRide
              { event: event.markerMoved 😄 (Tuple <$> event.documentId)
              , push: \(did /\ mm) -> unwrap
                  ( (always :: (Endo Function (Effect Unit)) -> (Endo Function (Zora Unit)))
                      ( Endo \_ -> for_ mm.id \id -> do
                          let
                            fn = case mm.offset of
                              0 -> updateMarker1TimeAff
                              1 -> updateMarker2TimeAff
                              2 -> updateMarker3TimeAff
                              _ -> updateMarker4TimeAff
                          launchAff_ $ fn firestoreDb did id mm.time
                      )
                  )
                  (pure unit)
              }
          )
        <<< rider
          ( toRide
              { event: do
                  mostRecentData 🙂 event.waveSurfer 🙂 fromEvent (folded $ map pure signedInNonAnonymously) 😄 ({ did: _, sina: _, ws: _, mrd: _ } <$> (Just <$> event.documentId <|> pure Nothing))
              , push: \{ did, sina, ws, mrd } -> unwrap
                  ( (always :: (Endo Function (Effect Unit)) -> (Endo Function (Zora Unit)))
                      ( Endo \_ -> case did, sina of
                          -- we have gone from not signed in to signed in
                          -- create the document on firebase
                          Nothing, [ true, false ] -> currentUser fbAuth >>= traverse_ \(User u) -> launchAff_ do
                            added <- addTrackAff firestoreDb (aChangeOwner u.uid (fst mrd))
                            liftEffect $ pushed.documentId added.id
                            forIdAttribution <- Map.toUnfoldable (snd mrd) # parTraverse \(id /\ data') -> do
                              addedEvent <- addEventAff firestoreDb added.id data'
                              pure { ix: id, id: addedEvent.id }
                            liftEffect $ associateEventDocumentIdWithSortedMarkerIdList ws forIdAttribution
                          -- ignore other stuff
                          -- if this proves to be too general, make it more nuanced
                          _, _ -> pure unit
                      )
                  )
                  (pure unit)
              }
          )
        <<< rider
          ( toRide
              { event: event.waveSurfer 🙂
                  ( Tuple <$> mapAccum
                      ( case _ of
                          Solo x -> \s -> let o = Set.insert x s in o /\ Left o
                          UnSolo x -> \s -> let o = Set.delete x s in o /\ Left o
                          Mute x -> \s -> s /\ Right (Right x)
                          UnMute x -> \s -> s /\ Right (Left x)
                      )
                      ((event.solo <#> Solo) <|> (event.mute <#> Mute) <|> (event.unSolo <#> UnSolo) <|> (event.unMute <#> UnMute))
                      Set.empty
                  )
              , push: \(a /\ ws) -> unwrap
                  ( (always :: (Endo Function (Effect Unit)) -> (Endo Function (Zora Unit)))
                      ( Endo \_ -> case a of
                          Left s -> muteExcept ws (map (\(x /\ y) -> [ x, x + y ]) (Set.toUnfoldable s))
                          Right (Right (startIx /\ inSeq)) -> for_ (startIx .. (startIx + inSeq - 1)) \ix -> do
                            hideMarker ws ix
                          Right (Left (startIx /\ inSeq)) -> for_ (startIx .. (startIx + inSeq - 1)) \ix -> do
                            showMarker ws ix
                      )
                  )
                  (pure unit)
              }
          )
        <<< memoBeh (Just <$> event.documentId) Nothing
    )
  ctor <- envy <<< mailboxed event.spamIdsOnSubscription
  markerEvent <- envy <<< mailboxed (event.markerMoved <#> \i@{ ix } -> { address: ix, payload: i })
  cTime <- envy <<< memoBeh event.currentTime (pure 0.0)
  ctrlEvent <- envy <<< memoize
    ( oneOf
        [ event.addBasic <#> CBasic
        , event.addLeap <#> CLeap
        , event.addLongPress <#> CLongPress
        ]
    )
  let importerScreenVisible = event.importerScreenVisible <|> pure true
  let chooserScreenVisible = event.chooserScreenVisible <|> pure false
  let forkingScreenVisible = event.forkingScreenVisible <|> pure false
  let loadingScreenVisible = event.loadingScreenVisible <|> pure false
  let previewScreenVisible = event.previewScreenVisible <|> pure Nothing
  let
    loadTrack :: String -> Track -> Array { id :: String, data :: Event_ } -> Aff Unit
    loadTrack trackId tracky@(TrackV0 aTra) evz = do
      let
        evts = sortBy
          ( compare `on`
              ( _.data >>> case _ of
                  EventV0 (BasicEventV0 be) -> be.marker1Time
                  EventV0 (LeapEventV0 be) -> be.marker1Time
                  EventV0 (LongEventV0 be) -> be.marker1Time
              )
          )
          evz
      wsf <- forkAff $ eventToAff $ toEvent event.waveSurfer
      liftEffect do
        pushed.loadWave aTra.url
        for_ aTra.title pushed.initialTitle
        pushed.initialPrivate aTra.private
        -- THIS HAS TO COME AFTER INITIALIZATIONS ABOVE
        -- code smell... refactor
        pushed.atomicTrackOperation (const tracky)
      ws <- joinFiber wsf
      liftEffect do
        pushed.documentId trackId
        evts # traverseWithIndex_ \ix { id, data: evt } -> do
          liftEffect $ pushed.atomicEventOperation (Map.insert ix evt)
          case evt of
            EventV0 (BasicEventV0 be) -> do
              pushed.addBasic (Just id /\ be)
              m0 <- addMarker ws ix 0 { color: dC ix, label: "B1", time: be.marker1Time }
              m1 <- addMarker ws ix 1 { color: dC ix, label: "B2", time: be.marker2Time }
              m2 <- addMarker ws ix 2 { color: dC ix, label: "B3", time: be.marker3Time }
              m3 <- addMarker ws ix 3 { color: dC ix, label: "B4", time: be.marker4Time }
              associateEventDocumentIdWithMarker m0 id
              associateEventDocumentIdWithMarker m1 id
              associateEventDocumentIdWithMarker m2 id
              associateEventDocumentIdWithMarker m3 id
            EventV0 (LeapEventV0 be) -> do
              pushed.addLeap (Just id /\ be)
              m0 <- addMarker ws ix 0 { color: dC ix, label: "LSt", time: be.marker1Time }
              m1 <- addMarker ws ix 1 { color: dC ix, label: "LEd", time: be.marker2Time }
              associateEventDocumentIdWithMarker m0 id
              associateEventDocumentIdWithMarker m1 id
            EventV0 (LongEventV0 be) -> do
              pushed.addLongPress (Just id /\ be)
              m0 <- addMarker ws ix 0 { color: dC ix, label: "LSt", time: be.marker1Time }
              m1 <- addMarker ws ix 1 { color: dC ix, label: "LEd", time: be.marker2Time }
              associateEventDocumentIdWithMarker m0 id
              associateEventDocumentIdWithMarker m1 id
  let

    store :: AnEvent Zora Landmark
    store =
      ( mapAccum
          ( \a { id, startIx } -> case a of
              CBasic (ms /\ be) -> { id: id + 1, startIx: startIx + 4 } /\ defaultBasic id startIx ms be
              CLeap (ms /\ be) -> { id: id + 1, startIx: startIx + 2 } /\ defaultLeap id startIx ms be
              CLongPress (ms /\ be) -> { id: id + 1, startIx: startIx + 2 } /\ defaultLongPress id startIx ms be
          )
          ctrlEvent
          { id: 0, startIx: 0 }
      )
    markerIndices = pure (0 /\ 0) <|> fold
      ( \a (b /\ c) -> (b + 1) /\ case a of
          CBasic _ -> c + 4
          CLeap _ -> c + 2
          CLongPress _ -> c + 2
      )
      ctrlEvent
      (0 /\ 0)
    top =
      [ D.button
          ( oneOf
              [ (Just <$> event.documentId <|> pure Nothing) 😄 markerIndices 😄 ({ ws: _, ixs: _, did: _ } <$> event.waveSurfer) <#> \{ ws, ixs: ix /\ _, did } -> D.OnClick := do
                  ct <- getCurrentTime ws
                  dur <- getDuration ws
                  let time1 = min dur (0.0 + ct)
                  let time2 = min dur (0.5 + ct)
                  let time3 = min dur (1.0 + ct)
                  let time4 = min dur (1.5 + ct)
                  let
                    endgame x = pushed.addBasic
                      ( x /\
                          { marker1Time: time1
                          , marker1AudioURL: Nothing
                          , marker2Time: time2
                          , marker2AudioURL: Nothing
                          , marker3Time: time3
                          , marker3AudioURL: Nothing
                          , marker4Time: time4
                          , marker4AudioURL: Nothing
                          , column: C7
                          , name: Nothing
                          , version: mempty
                          }
                      )
                  m0 <- addMarker ws ix 0 { color: dC ix, label: "B1", time: time1 }
                  m1 <- addMarker ws ix 1 { color: dC ix, label: "B2", time: time2 }
                  m2 <- addMarker ws ix 2 { color: dC ix, label: "B3", time: time3 }
                  m3 <- addMarker ws ix 3 { color: dC ix, label: "B4", time: time4 }
                  pushed.atomicEventOperation $ aAddBasic
                    { id: ix
                    , name: Nothing
                    , column: C7
                    , marker1Time: time1
                    , marker2Time: time2
                    , marker3Time: time3
                    , marker4Time: time4
                    }
                  did # maybe (endgame Nothing) \did' ->
                    launchAff_ do
                      evDid <- addEventAff firestoreDb did'
                        ( EventV0 $ BasicEventV0
                            { marker1Time: time1
                            , marker1AudioURL: Nothing
                            , marker2Time: time2
                            , marker2AudioURL: Nothing
                            , marker3Time: time3
                            , marker3AudioURL: Nothing
                            , marker4Time: time4
                            , marker4AudioURL: Nothing
                            , column: C7
                            , name: Nothing
                            , version: mempty
                            }
                        )
                      liftEffect $ associateEventDocumentIdWithMarker m0 evDid.id *> associateEventDocumentIdWithMarker m1 evDid.id *> associateEventDocumentIdWithMarker m2 evDid.id *> associateEventDocumentIdWithMarker m3 evDid.id *> endgame (Just evDid.id)
              , pure $ D.Class := buttonCls
              ]
          )
          [ text_ "Add Tile" ]
      , D.button
          ( oneOf
              [ (Just <$> event.documentId <|> pure Nothing) 😄 markerIndices 😄 ({ ws: _, ixs: _, did: _ } <$> event.waveSurfer) <#> \{ ws, ixs: ix /\ _, did } -> D.OnClick := do
                  ct <- getCurrentTime ws
                  dur <- getDuration ws
                  let
                    time1 = min dur (0.0 + ct)
                    time2 = min dur (0.5 + ct)
                    endgame position x = pushed.addLeap
                      ( x /\
                          { marker1Time: time1
                          , audioURL: Nothing
                          , marker2Time: time2
                          , column: C7
                          , position
                          , name: Nothing
                          , version: mempty

                          }
                      )
                  m0 <- addMarker ws ix 0 { color: dC ix, label: "LSt", time: time1 }
                  m1 <- addMarker ws ix 1 { color: dC ix, label: "LEd", time: time2 }
                  position <- randomInt 0 3 <#> case _ of
                    0 -> Position1
                    1 -> Position2
                    2 -> Position3
                    _ -> Position4
                  pushed.atomicEventOperation $ aAddLeap
                    { id: ix
                    , name: Nothing
                    , column: C7
                    , position
                    , marker1Time: time1
                    , marker2Time: time2
                    }
                  did # maybe (endgame position Nothing) \did' ->
                    launchAff_ do
                      evDid <- addEventAff firestoreDb did'
                        ( EventV0 $ LeapEventV0
                            { marker1Time: time1
                            , audioURL: Nothing
                            , marker2Time: time2
                            , position
                            , name: Nothing
                            , column: C7
                            , version: mempty
                            }
                        )
                      liftEffect $ associateEventDocumentIdWithMarker m0 evDid.id *> associateEventDocumentIdWithMarker m1 evDid.id *> endgame position (Just evDid.id)
              , pure $ D.Class := buttonCls
              ]
          )
          [ text_ "Add Leap" ]
      , D.button
          ( oneOf
              [ (Just <$> event.documentId <|> pure Nothing) 😄 markerIndices 😄 ({ ws: _, ixs: _, did: _ } <$> event.waveSurfer) <#> \{ ws, ixs: ix /\ _, did } -> D.OnClick := do
                  ct <- getCurrentTime ws
                  dur <- getDuration ws
                  let
                    time1 = min dur (0.0 + ct)
                    time2 = min dur (0.5 + ct)
                    endgame x = pushed.addLongPress
                      ( x /\
                          { marker1Time: time1
                          , audioURL: Nothing
                          , marker2Time: time2
                          , length: 1.0
                          , column: C7
                          , name: Nothing
                          , version: mempty

                          }
                      )
                  m0 <- addMarker ws ix 0 { color: dC ix, label: "P1", time: time1 }
                  m1 <- addMarker ws ix 1 { color: dC ix, label: "P2", time: time2 }
                  pushed.atomicEventOperation $ aAddLongPress
                    { id: ix
                    , name: Nothing
                    , column: C7
                    , marker1Time: time1
                    , marker2Time: time2
                    , length: 1.0
                    }
                  did # maybe (endgame Nothing) \did' ->
                    launchAff_ do
                      evDid <- addEventAff firestoreDb did'
                        ( EventV0 $ LongEventV0
                            { marker1Time: time1
                            , audioURL: Nothing
                            , marker2Time: time2
                            , length: 1.0
                            , name: Nothing
                            , column: C7
                            , version: mempty
                            }
                        )
                      liftEffect $ associateEventDocumentIdWithMarker m0 evDid.id *> associateEventDocumentIdWithMarker m1 evDid.id *> endgame (Just evDid.id)
              , pure $ D.Class := buttonCls

              ]
          )
          [ text_ "Add Long Press" ]
      , D.button
          ( oneOf
              [ pure $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
              -- , pure $ D.OnClick := log "hello world"
              , mostRecentData <#> \(TrackV0 ato /\ aeo) -> D.OnClick := do
                  log $ "starting from most recent data: " <> (JSON.writeJSON { track: ato, evs: Array.fromFoldable $ Map.values aeo })
                  pushed.loadingScreenVisible true
                  ctx <- context_
                  launchAff_ do
                    buffy <- decodeAudioDataFromUri ctx ato.url
                    liftEffect do
                      Ref.modify_ (Object.insert ato.url buffy) tli.soundObj
                      pushed.previewScreenVisible $ Just wtut
                      pushed.loadingScreenVisible false
              ]
          )
          [ text_ "Preview" ]
      , D.button
          ( oneOf
              [ pure $ D.Id := "google_sign_in"
              , pure $ D.OnClick := do
                  signInWithGoogle do
                    window >>= alert "Sign in with google is temporarily unavailable. Please try again later."
              , fromEvent signedInNonAnonymously <#> \sina -> D.Class := buttonCls <> if sina then " hidden" else ""
              ]
          )
          [ text_ "Save (sign in)" ]
      ]
  D.div
    (pure $ D.Class := "absolute w-screen h-screen bg-zinc-900 overflow-hidden")
    [ D.div
        ( oneOf
            [ previewScreenVisible <#> \psv -> D.Class := "absolute w-screen h-screen max-h-screen bg-zinc-900 flex flex-col overflow-hidden" <> if isJust psv then " hidden" else ""
            ]
        )
        [ D.div
            ( oneOf
                [ pure $ D.Class := "flex flex-row justify-between"
                ]
            )
            [ D.button
                ( oneOf
                    [ pure $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
                    -- , pure $ D.OnClick := log "hello world"
                    , pure $ D.OnClick := do
                        goBack
                    ]
                )
                [ text_ "<" ]
            , D.h2
                ( oneOf
                    [ pure $ D.Contenteditable := "true"
                    , pure $ D.Class := headerCls <> " p-2"
                    , docEv <#> \mDid -> D.OnInput := cb \e -> for_
                        ( target e
                            >>= Node.fromEventTarget
                        )
                        ( \x -> do
                            fc <- firstChild x
                            for_ fc \fc' -> do
                              v <- textContent fc'
                              log $ "New title: " <> v
                              let t = if v == "" then Nothing else Just v
                              pushed.atomicTrackOperation (aChangeTitle t)
                              for_ mDid \trackId -> do
                                launchAff_ (updateTrackTitleAff firestoreDb trackId v)
                        )
                    ]
                )
                [ text event.initialTitle ]
            , D.span_
                [ D.a
                    ( oneOf
                        [ (pure Nothing <|> Just <$> mostRecentData) <#> \mrd -> D.Class := buttonCls <> " mx-2 pointer-events-auto" <> if isJust mrd then "" else " hidden"
                        -- , pure $ D.OnClick := log "hello world"
                        , mostRecentData <#> \(tk /\ eez) -> D.Href := ("data:text/plain;charset=utf-8," <> fromMaybe "" (encodeURIComponent (JSON.writeJSON { track: tk, events: (Array.fromFoldable $ Map.values eez) })))
                        , (pure Nothing <|> Just <$> event.initialTitle <|> (map (fst >>> (\(TrackV0 aTra) -> aTra.title)) mostRecentData)) <#> \fn -> D.Download := case fn of
                            Just f -> f <> ".json"
                            Nothing -> "export.json"

                        ]
                    )
                    [ text_ "Export" ]
                , D.span (pure $ D.Class := "text-white") [ text_ "Private?" ]
                , D.input
                    ( oneOf
                        [ pure $ D.Xtype := "checkbox"
                        , fireAndForget mostRecentData <#> \(TrackV0 tr /\ _) -> D.Checked := if tr.private then "true" else "false"
                        , pure $ D.Class := "w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        -- , pure $ D.OnClick := log "hello world"
                        , (docEv 😄 (Tuple <$> mostRecentData)) <#> \((TrackV0 tr /\ _) /\ mDid) -> D.OnClick := do
                            let changed = not tr.private
                            pushed.atomicTrackOperation (aChangePrivate changed)
                            for_ mDid \trackId -> do
                              launchAff_ (updateTrackPrivateAff firestoreDb trackId changed)
                        ]
                    )
                    [ text_ "<" ]
                ]
            ]
        , D.div
            ( oneOf
                [ pure $ D.Class := ""
                , event.loadWave <#> \url -> D.Self := \s -> do
                    ws <- makeWavesurfer Nothing Just
                      ( \i j x id t -> do
                          pushed.markerMoved { ix: i, offset: j, inArray: x, time: t, id }
                          pushed.atomicEventOperation $ case j of
                            0 -> aChangeMarker1 { id: i, time: t }
                            1 -> aChangeMarker2 { id: i, time: t }
                            2 -> aChangeMarker3 { id: i, time: t }
                            _ -> aChangeMarker4 { id: i, time: t }
                      )
                      (pushed.importerScreenVisible false)
                      s
                      url
                    pushed.waveSurfer ws
                    pushed.currentTime (getCurrentTime ws)
                    styleAudio
                    pushed.loadingScreenVisible false
                ]
            )
            []
        , D.div
            ( oneOf
                [ pure $ D.Id := "timeline"
                , pure $ D.Class := ""
                ]
            )
            []
        , D.div_
            [ D.label (oneOf [ pure $ D.Class := "text-white" ]) [ text_ "Zoom" ]
            , D.input
                ( oneOf
                    [ pure $ D.Min := "2"
                    , pure $ D.Value := "2"
                    , pure $ D.Max := "1000"
                    , slider $ event.waveSurfer <#> zoom
                    ]
                )
                []
            ]
        , D.div (oneOf [ pure $ D.Class := "flex flex-row justify-around" ]) top
        , D.div (oneOf [ pure $ D.Class := "overflow-scroll" ])
            [ D.div (oneOf [ pure $ D.Class := "accordion", pure $ D.Id := "accordionExample" ])
                [ dyn $
                    (nextAttributableColumn 🙂 event.waveSurfer 🙂 ({ itm: _, ws: _, nac: _ } <$> store)) <#>
                      ( \{ itm, ws, nac } -> keepLatest $ vbus (Proxy :: _ (V (SingleItem PlainOl))) \p' e' -> do
                          let
                            muteState = fold (const not) e'.mute false <|> pure false
                            soloState = fold (const not) e'.solo false <|> pure false
                            defaultLabel /\ prefix = case itm of
                              LBasic v -> fromMaybe ("Tile " <> show v.id) v.name /\ "♥"
                              LLeap v -> fromMaybe ("Leap " <> show v.id) v.name /\ "♠"
                              LLong v -> fromMaybe ("Long " <> show v.id) v.name /\ "♦"

                            label =
                              ( e'.changeName <#> case _ of
                                  Just x -> x
                                  Nothing -> defaultLabel
                              ) <|> pure defaultLabel
                            id /\ name /\ col /\ startIx /\ initialId /\ inSeq /\ times = case itm of
                              LBasic v -> v.id /\ v.name /\ v.col /\ v.startIx /\ v.fbId /\ 4 /\ [ (unwrap v.l1).at, (unwrap v.l2).at, (unwrap v.l3).at, (unwrap v.l4).at ]
                              LLeap v -> v.id /\ v.name /\ v.col /\ v.startIx /\ v.fbId /\ 2 /\ [ (unwrap v.start).at, (unwrap v.end).at ]
                              LLong v -> v.id /\ v.name /\ v.col /\ v.startIx /\ v.fbId /\ 2 /\ [ (unwrap v.start).at, (unwrap v.end).at ]
                            column = e'.changeColumn <|> pure col
                          ( pure $ insert_ $ D.div (oneOf [ pure $ D.Class := "accordion-item bg-zinc-900 border border-white" ])
                              [ D.h2
                                  ( oneOf
                                      [ pure $ D.Class := "accordion-header bg-zinc-900 mb-0"
                                      , pure $ D.Id := "heading" <> show id
                                      ]
                                  )
                                  [ D.button
                                      ( oneOf
                                          [ pure $ D.Class :=
                                              """accordion-button-ms accordion-button
      relative
      flex
      items-center
      w-full
      py-4
      px-5
      text-base text-white text-left
      bg-zinc-900
      border-0
      rounded-none
      transition
      focus:outline-none"""
                                          , pure $ xdata "bs-toggle" "collapse"
                                          , pure $ xdata "bs-target" ("#collapse" <> show id)
                                          ]
                                      )
                                      [ D.span (oneOf [ pure $ D.Class := "mr-2", pure $ D.Style := "color: " <> dC id <> ";" ]) [ text_ (prefix) ]
                                      , D.span_ [ text label, text_ " (Column ", text (JSON.writeJSON <$> column), text_ ") ", text $ (pure times <|> fold (\{ offset, time } tmzz -> set (ix offset) time tmzz) (markerEvent id) times) <#> \tmz -> " (" <> intercalate "," (map (toStringWith (fixed 2)) tmz) <> ")" ]
                                      , D.span
                                          ( oneOf
                                              [ soloState <#> \st -> D.Class := ("text-white font-bold pl-2 " <> if st then "" else " hidden")
                                              ]
                                          )
                                          [ text_ "S" ]
                                      , D.span
                                          ( oneOf
                                              [ muteState <#> \st -> D.Class := ("text-white font-bold pl-2 " <> if st then "" else " hidden")
                                              ]
                                          )
                                          [ text_ "M" ]
                                      ]
                                  ]
                              , D.div
                                  ( oneOf
                                      [ pure $ D.Id := "collapse" <> show id
                                      , pure $ D.Class := ("accordion-collapse collapse" <> if id == 0 then " show" else "")
                                      , pure $ xdata "bs-parent" "#accordionExample"
                                      ]
                                  )
                                  [ D.div
                                      ( oneOf
                                          [ pure $ D.Class := "accordion-body bg-zinc-900 py-4 px-5"
                                          ]
                                      )
                                      [ D.span (oneOf [ pure $ D.Class := "inline-block" ])
                                          [ D.label
                                              ( oneOf
                                                  [ pure $ D.Class := "text-white ml-2" ]
                                              )
                                              [ text_ "Name" ]
                                          , D.input
                                              ( oneOf
                                                  ( [ (Just <$> ctor id <|> pure Nothing) 😄 (Tuple <$> docEv) <#> \(mDid /\ updatedId) -> D.OnInput := cb \e -> for_
                                                        ( target e
                                                            >>= fromEventTarget
                                                        )
                                                        ( \x -> do
                                                            v <- value x
                                                            let nm = if v == "" then Nothing else Just v
                                                            ( (always :: Zora Unit -> Effect Unit) do
                                                                p'.changeName nm
                                                            )
                                                            pushed.atomicEventOperation $ aChangeName { id, name: nm }
                                                            for_ (Tuple <$> mDid <*> (initialId <|> updatedId)) \(trackId /\ evId) -> do
                                                              launchAff_ (updateEventNameAff firestoreDb trackId evId v)

                                                        )
                                                    , pure $ D.Class := "bg-inherit text-white mx-2 appearance-none border rounded py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
                                                    , pure $ D.Placeholder := defaultLabel
                                                    ] <> case name of
                                                      Nothing -> []
                                                      Just n -> [ pure $ D.Value := n ]
                                                  )
                                              )
                                              []
                                          ]
                                      , D.span (oneOf [ pure $ D.Class := "inline-block" ])
                                          [ D.label
                                              ( oneOf
                                                  [ pure $ D.Class := "text-white" ]
                                              )
                                              [ text_ "Column" ]
                                          , D.input
                                              ( oneOf
                                                  [ (Just <$> ctor id <|> pure Nothing) 😄 (Tuple <$> docEv) <#> \(mDid /\ updatedId) -> D.OnInput := cb \e -> for_
                                                      ( target e
                                                          >>= fromEventTarget
                                                      )
                                                      ( \x -> do
                                                          v' <- floor <$> valueAsNumber x
                                                          let v =  fromMaybe C7 $ hush $ intToColumn v'
                                                          (always :: Zora Unit -> Effect Unit) do
                                                            p'.changeColumn v
                                                          pushed.atomicEventOperation $ aChangeColumn { id, column: v }
                                                          for_ (Tuple <$> mDid <*> (initialId <|> updatedId)) \(trackId /\ evId) -> do
                                                            launchAff_ (updateColumnAff firestoreDb trackId evId v)
                                                      )
                                                  , pure $ D.Xtype := "number"
                                                  , pure $ D.Value := JSON.writeJSON col
                                                  , pure $ D.Min := "1"
                                                  , pure $ D.Max := "16"
                                                  , pure $ D.Class := "bg-inherit text-white mx-2 appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                                  ]
                                              )
                                              []
                                          ]
                                      , D.span (oneOf [ pure $ D.Class := "inline-block" ])
                                          [ D.button
                                              ( oneOf
                                                  [ soloState <#> \ms -> D.Class := (if ms then buttonActiveCls else buttonCls) <> " mr-2"
                                                  , click $ soloState <#> \ms -> do
                                                      (if ms then pushed.unSolo else pushed.solo) (startIx /\ inSeq)
                                                      (map (always :: Zora Unit -> Effect Unit) p'.solo) unit
                                                  ]
                                              )
                                              [ D.span (oneOf []) [ text_ "Solo" ] ]
                                          , D.button
                                              ( oneOf
                                                  [ muteState <#> \ms -> D.Class := (if ms then buttonActiveCls else buttonCls) <> " mr-2"
                                                  , click $ muteState <#> \ms -> do
                                                      (if ms then pushed.unMute else pushed.mute) (startIx /\ inSeq)
                                                      (map (always :: Zora Unit -> Effect Unit) p'.mute) unit
                                                  ]
                                              )
                                              [ D.span
                                                  (oneOf [])
                                                  [ text_ "Mute" ]
                                              ]
                                          , D.button
                                              ( oneOf
                                                  [ (Just <$> ctor id <|> pure Nothing) 😄 (Tuple <$> docEv) <#> \(mDid /\ updatedId) -> D.OnClick := cb \_ -> do
                                                      for_ (startIx .. (startIx + inSeq - 1)) \_ -> do
                                                        -- do not increment as the list gets shorter and shorter so we are always removing at startIx
                                                        removeMarker ws startIx
                                                      (map (always :: Zora Unit -> Effect Unit) p'.delete) unit
                                                      pushed.atomicEventOperation $ aDeleteEvent_ { id }
                                                      for_ (Tuple <$> mDid <*> (initialId <|> updatedId)) \(trackId /\ evId) -> do
                                                        launchAff_ (deleteEventAff firestoreDb trackId evId)
                                                  , pure $ D.Class := buttonCls <> " mr-2"
                                                  ]
                                              )
                                              -- [ D.span (oneOf [ pure $ D.Class := "md:inline-block hidden" ]) [ text_ "Delete" ], D.span (oneOf [ pure $ D.Class := "md:hidden inline-block" ]) [ text_ "D" ] ]
                                              [ D.span (oneOf []) [ text_ "Delete" ] ]
                                          ]
                                      ]
                                  ]
                              ]
                          ) <|> (e'.delete $> remove)
                      )
                ]
            ]
        ]
    , D.div
        ( importerScreenVisible <#> \isv -> D.Class := "absolute w-screen h-screen grid grid-rows-6 grid-cols-6 bg-zinc-900" <> if isv then "" else " hidden"
        )

        [ D.div
            (pure $ D.Class := "select-auto justify-self-center self-center row-start-3 row-end-5 col-start-2 col-end-6")
            ( [ D.div
                  (pure $ D.Class := "pointer-events-auto text-center p-4 " <> headerCls)
                  [ D.p_ [ text_ "Joyride editor" ]
                  ]
              ]
                <>

                  [ D.div
                      (pure $ D.Class := "pointer-events-auto text-center text-white p-4")
                      [ text (fromEvent signedInNonAnonymously <#> \sina -> "Get started by importing an audio file" <> if sina then " or project." else ".") ]
                  ]
                <>
                  [ D.div (pure $ D.Class := "flex w-full justify-center items-center")
                      [ D.button
                          ( oneOf
                              [ fromEvent signedInNonAnonymously <#> \sina -> D.Class := buttonCls <> " mx-2 pointer-events-auto" <> if sina then "" else " hidden"
                              , pure $ D.OnClick := do
                                  pushed.loadingScreenVisible true
                                  launchAff_ do
                                    tracks <- getTracksAff fbAuth firestoreDb
                                    liftEffect $ pushed.availableTracks tracks
                                    liftEffect do
                                      pushed.forkingScreenVisible true
                                      pushed.loadingScreenVisible false
                              ]
                          )
                          [ text_ "Fork project" ]
                      , D.button
                          ( oneOf
                              [ fromEvent signedInNonAnonymously <#> \sina -> D.Class := buttonCls <> " mx-2 pointer-events-auto" <> if sina then "" else " hidden"
                              , pure $ D.OnClick := do
                                  pushed.loadingScreenVisible true
                                  launchAff_ do
                                    fl <- toAffE fileList
                                    FileList.item 0 fl # maybe (liftEffect (window >>= alert "No valid files found" >>= \_ -> pushed.loadingScreenVisible false)) \fi -> do
                                      res <- makeAff \cb -> do
                                        fr <- fileReader
                                        el0 <- eventListener \_ -> result fr >>= cb <<< Right
                                        el1 <- eventListener \_ -> cb $ Left (error "Could not read the file")
                                        addEventListener (EventType "load") el0 true (toEventTarget fr)
                                        addEventListener (EventType "error") el1 true (toEventTarget fr)
                                        liftEffect $ readAsText (toBlob fi) fr
                                        pure mempty
                                      case JSON.read res >>= JSON.readJSON of
                                        Left err -> liftEffect (window >>= alert ("Parse error: " <> show err) >>= \_ -> pushed.loadingScreenVisible false)
                                        Right ({ track, events } :: { track :: Track, events :: Array Event_ }) -> do
                                          cu <- liftEffect $ currentUser fbAuth
                                          -- update owner if the export was from someone else
                                          doc <- addTrackAff firestoreDb (maybe identity (\(User { uid }) -> aChangeOwner uid) cu track)
                                          myTrack <- getTrackAff firestoreDb doc.id
                                          for_ myTrack \(tk :: Track) -> do
                                            evs :: Array { id :: String, data :: Event_ } <- compact <$>
                                              ( events # traverse \e -> do
                                                  added :: DocumentReference <- addEventAff firestoreDb doc.id e
                                                  eAff <- getEventAff firestoreDb doc.id (added.id)
                                                  pure (eAff <#> { id: added.id, data: _ })
                                              )
                                            loadTrack doc.id tk evs
                                          liftEffect do
                                            pushed.chooserScreenVisible false
                                            pushed.importerScreenVisible false
                                            pushed.loadingScreenVisible false
                              ]
                          )
                          [ text_ "Import project" ]
                      , D.button
                          ( oneOf
                              [ fromEvent signedInNonAnonymously <#> \sina -> D.Class := buttonCls <> " mx-2 pointer-events-auto" <> if sina then "" else " hidden"
                              , pure $ D.OnClick := do
                                  pushed.loadingScreenVisible true
                                  launchAff_ do
                                    tracks <- getTracksAff fbAuth firestoreDb
                                    liftEffect $ pushed.availableTracks tracks
                                    liftEffect do
                                      pushed.chooserScreenVisible true
                                      pushed.loadingScreenVisible false
                              ]
                          )
                          [ text_ "Open project" ]
                      , D.button
                          ( oneOf
                              [ pure $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
                              , pure $ D.OnClick := do
                                  client <- init
                                  picker (\_ -> pure unit) (\_ _ -> pure unit) (\_ _ -> pure unit)
                                    ( \{ url } -> do
                                        log $ "Uploaded to: " <> url
                                        pushed.loadingScreenVisible true
                                        rn <- randomName
                                        let
                                          endgame :: Effect Unit
                                          endgame = do
                                            pushed.initialTitle rn
                                            pushed.loadWave url
                                            pushed.initialPrivate false
                                        (map unwrap <$> currentUser fbAuth) >>= maybe endgame \cu ->
                                          if (cu.isAnonymous == false) then launchAff_ do
                                            docRef <- addTrackAff firestoreDb
                                              ( TrackV0
                                                  { url, title: Just rn, owner: cu.uid, private: false, version: mempty }
                                              )
                                            liftEffect $ (pushed.documentId docRef.id *> endgame)
                                          else endgame
                                    )
                                    client
                              ]
                          )
                          [ text_ "Import file" ]
                      ]

                  ]
            )
        ]
    , D.div
        ( chooserScreenVisible <#> \csv -> D.Class := "absolute w-screen h-screen grid grid-rows-6 grid-cols-6 bg-zinc-900" <> if csv then "" else " hidden"
        )

        [ D.div
            (pure $ D.Class := "select-auto row-start-1 row-end-2 col-start-1 col-end-2")
            [ D.button
                ( oneOf
                    [ pure $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
                    , pure $ D.OnClick := pushed.chooserScreenVisible false
                    ]
                )
                [ text_ "< Back" ]
            ]
        , D.div
            (pure $ D.Class := "col-start-2 col-end-6 row-start-2 row-end-6 flex flex-col justify-items-center overflow-scroll text-center")
            ( [ D.h2
                  (pure $ D.Class := "pointer-events-auto text-center p-4 " <> headerCls)
                  [ text_ "Choose a project" ]
              ]
                <>
                  [ ( event.availableTracks # switcher \l -> D.ul (pure $ D.Class := "")
                        ( l <#> \{ id: trackId, data: tracky@(TrackV0 aTra) } -> D.li_
                            [ D.button
                                ( oneOf
                                    [ pure $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
                                    , pure $
                                        D.OnClick := do
                                          pushed.loadingScreenVisible true *> launchAff_ do
                                            evz <- getEventsAff firestoreDb trackId
                                            loadTrack trackId tracky evz
                                            liftEffect do
                                              pushed.chooserScreenVisible false
                                              pushed.importerScreenVisible false
                                              pushed.loadingScreenVisible false
                                    ]
                                )
                                [ text_ (fromMaybe "Untitled Track" aTra.title) ]
                            ]
                        )
                    )
                  ]

            )
        ]
    , D.div
        ( forkingScreenVisible <#> \csv -> D.Class := "absolute w-screen h-screen grid grid-rows-6 grid-cols-6 bg-zinc-900" <> if csv then "" else " hidden"
        )

        [ D.div
            (pure $ D.Class := "select-auto row-start-1 row-end-2 col-start-1 col-end-2")
            [ D.button
                ( oneOf
                    [ pure $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
                    , pure $ D.OnClick := pushed.forkingScreenVisible false
                    ]
                )
                [ text_ "< Back" ]
            ]
        , D.div
            (pure $ D.Class := "col-start-2 col-end-6 row-start-2 row-end-6 flex flex-col justify-items-center overflow-scroll text-center")
            ( [ D.h2
                  (pure $ D.Class := "pointer-events-auto text-center p-4 " <> headerCls)
                  [ text_ "Fork a project" ]
              ]
                <>
                  [ ( event.availableTracks # switcher \l -> D.ul (pure $ D.Class := "")
                        ( l <#> \{ id: trackId, data: TrackV0 aTra } -> D.li_
                            [ D.button
                                ( oneOf
                                    [ pure $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
                                    , pure $
                                        D.OnClick := do
                                          pushed.loadingScreenVisible true *> launchAff_ do
                                            forkTrackAff fbAuth firestoreDb trackId
                                            -- as we have no listener, we get the tracks again
                                            -- a bit expensive time-wise, but easier to handle?
                                            tracks <- getTracksAff fbAuth firestoreDb
                                            liftEffect $ pushed.availableTracks tracks
                                            liftEffect do
                                              pushed.forkingScreenVisible false
                                              pushed.loadingScreenVisible false
                                    ]
                                )
                                [ text_ (fromMaybe "Untitled Track" aTra.title) ]
                            ]
                        )
                    )
                  ]

            )
        ]
    , D.div
        ( previewScreenVisible <#> \psv ->
            D.Class := "absolute w-screen h-screen" <> if isJust psv then "" else " hidden"
        )
        [ (fromEvent (howShouldIBehave (pure 0.0) (toEvent cTime) 😝 (toEvent event.waveSurfer 🙂 (toEvent mostRecentData 🙂 ({ psv: _, mrd: _, ws: _, ct: _ } <$> toEvent previewScreenVisible))))) # switcher \x ->
            do
              let vals = Array.fromFoldable $ Map.values $ snd x.mrd
              let TrackV0 tv0 = fst x.mrd
              -- let _ = spy "tv0 vals" (JSON.writeJSON { tv0, vals })
              case x.psv of
                Nothing -> envy empty
                Just success -> tutorial
                  ( tli
                      { goHome = do
                          pushed.loadingScreenVisible true
                          pushed.previewScreenVisible Nothing
                          pushed.loadingScreenVisible false
                      }
                  )
                  { basicE: rideBasics $ sortBy (compare `on` _.marker1Time)
                      ( vals # filterMap case _ of
                          EventV0 (BasicEventV0 be) ->
                            if be.marker4Time < x.ct then Nothing
                            else Just
                              ( be
                                  { marker1Time = be.marker1Time - x.ct
                                  , marker2Time = be.marker2Time - x.ct
                                  , marker3Time = be.marker3Time - x.ct
                                  , marker4Time = be.marker4Time - x.ct
                                  }
                              )
                          _ -> Nothing
                      )
                  , leapE: rideLeaps
                      ( ( vals # filterMap case _ of
                            EventV0 (LeapEventV0 be) ->
                              if be.marker2Time < x.ct then Nothing
                              else Just
                                ( be
                                    { marker1Time = be.marker1Time - x.ct
                                    , marker2Time = be.marker2Time - x.ct
                                    }
                                )
                            _ -> Nothing
                        )
                      )
                  , longE: rideLongs
                      ( vals # filterMap case _ of
                          EventV0 (LongEventV0 be) ->
                            if be.marker2Time < x.ct then Nothing
                            else Just
                              ( be
                                  { marker1Time = be.marker1Time - x.ct
                                  , marker2Time = be.marker2Time - x.ct
                                  }
                              )
                          _ -> Nothing
                      )
                  , bgtrack: tv0.url
                  , isPreviewPage: Just { startsAt: x.ct }
                  , baseFileOffsetInSeconds: x.ct
                  }
                  success
        ]
    , D.div
        ( loadingScreenVisible <#> \lsv ->
            D.Class := "absolute w-screen h-screen" <> if lsv then "" else " hidden"
        )
        [ loadingPage ]
    ]
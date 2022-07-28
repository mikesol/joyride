module Joyride.App.Editor where

import Prelude

import Control.Alt ((<|>))
import Control.Parallel (parTraverse)
import Control.Plus (empty)
import Data.Array (length, sortBy, (!!), (..))
import Data.Array as Array
import Data.Either (Either(..))
import Data.Filterable (filterMap)
import Data.Foldable (for_, oneOf, traverse_)
import Data.FoldableWithIndex (traverseWithIndex_)
import Data.Function (on)
import Data.Int (floor)
import Data.Map (Map)
import Data.Map as Map
import Data.Maybe (Maybe(..), fromMaybe, isJust, maybe)
import Data.Monoid.Always (always)
import Data.Monoid.Endo (Endo(..))
import Data.Newtype (class Newtype, unwrap)
import Data.Set as Set
import Data.Tuple (Tuple(..), fst, snd)
import Data.Tuple.Nested ((/\), type (/\))
import Debug (spy)
import Deku.Attribute (class Attr, Attribute, cb, xdata, (:=))
import Deku.Control (switcher, text, text_)
import Deku.Core (class Korok, Domable, dyn, envy, insert, remove, vbussedUncurried)
import Deku.DOM (Class)
import Deku.DOM as D
import Deku.Listeners (click, slider)
import Effect (Effect)
import Effect.Aff (forkAff, joinFiber, launchAff_)
import Effect.Class (liftEffect)
import Effect.Class.Console as Log
import Effect.Console (log)
import Effect.Random (randomInt)
import Effect.Ref as Ref
import FRP.Event (AnEvent, bang, fold, folded, fromEvent, keepLatest, mailboxed, mapAccum, memoize, sampleOn, toEvent)
import FRP.Event.Class (biSampleOn)
import FRP.Event.VBus (V, vbus)
import Foreign.Object (Object)
import Foreign.Object as Object
import Joyride.App.Loading (loadingPage)
import Joyride.App.Tutorial (tutorial)
import Joyride.Editor.ADT (Landmark(..), LongLength(..), Marker(..))
import Joyride.FRP.Aff (eventToAff)
import Joyride.FRP.Beh (memoBeh)
import Joyride.FRP.Rider (rider, toRide)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Filestack.Filestack (init, picker)
import Joyride.Firebase.Auth (User(..), currentUser, signInWithGoogle)
import Joyride.Firebase.Firestore (addEventAff, addTrackAff, deleteEventAff, getEventsAff, getTracksAff, updateColumnAff, updateEventNameAff, updateMarker1TimeAff, updateMarker2TimeAff, updateMarker3TimeAff, updateMarker4TimeAff, updateTrackPrivateAff, updateTrackTitleAff)
import Joyride.QualifiedDo.Apply as QDA
import Joyride.Scores.Ride.Basic (rideBasics)
import Joyride.Scores.Ride.Leap (rideLeaps)
import Joyride.Scores.Ride.Long (rideLongs)
import Joyride.Style (buttonActiveCls, buttonCls, distinctColors, headerCls)
import Joyride.UniqueNames (randomName)
import Joyride.Wavesurfer.Wavesurfer (WaveSurfer, addMarker, associateEventDocumentIdWithMarker, associateEventDocumentIdWithSortedMarkerIdList, getCurrentTime, getDuration, hideMarker, makeWavesurfer, muteExcept, removeMarker, showMarker, zoom)
import Ocarina.Interpret (context_, decodeAudioDataFromUri)
import Ocarina.WebAPI (BrowserAudioBuffer)
import Type.Proxy (Proxy(..))
import Types (BasicEventV0', EventV0(..), Event_(..), LeapEventV0', LongEventV0', OpenEditor', Position(..), ToplevelInfo, Track(..), WantsTutorial')
import Web.DOM.Node (firstChild, textContent)
import Web.DOM.Node as Node
import Web.Event.Event (target)
import Web.HTML (window)
import Web.HTML.HTMLInputElement (fromEventTarget, value, valueAsNumber)
import Web.HTML.Window (alert)

smplCls :: forall m elt. Applicative m => Attr elt Class String => String -> AnEvent m (Attribute elt)
smplCls s = oneOf [ bang $ D.Class := s ]

infixr 4 sampleOn as 🙂
infixr 4 biSampleOn as 😄

newtype SpammedId = SpammedId { id :: Int, did :: String }

derive instance Newtype SpammedId _

instance Eq SpammedId where
  eq = eq `on` (unwrap >>> _.id)

instance Ord SpammedId where
  compare = compare `on` (unwrap >>> _.id)

type PreviewScreenNeeds = WantsTutorial'

type Events :: forall k. (Type -> k) -> Row k
type Events t =
  ( importerScreenVisible :: t Boolean
  , chooserScreenVisible :: t Boolean
  , loadingScreenVisible :: t Boolean
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
  , spamIdsOnSubscription :: t SpammedId
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
  , changeColumn :: t Int
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

aAddBasic
  :: { id :: Int
     , name :: Maybe String
     , column :: Int
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
     , column :: Int
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
     , column :: Int
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

aChangeColumn :: { id :: Int, column :: Int } -> ChangeEvent_
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

ldc = length distinctColors

dC :: Int -> String
dC i = fromMaybe "#8b6f1f" (distinctColors !! (i `mod` ldc))

editorPage
  :: forall s m lock payload
   . Korok s m
  => ToplevelInfo
  -> OpenEditor'
  -> WantsTutorial'
  -> Domable m lock payload
editorPage tli { fbAuth, goBack, firestoreDb, signedInNonAnonymously } wtut = QDA.do
  pushed /\ (event :: { | Events (AnEvent m) }) <- vbussedUncurried (Proxy :: _ (V (Events PlainOl)))
  let
    initialData :: AnEvent m { initialTitle :: String, url :: String, initialPrivate :: Boolean }
    initialData = fireAndForget (event.initialPrivate 😄 event.loadWave 😄 ({ initialTitle: _, url: _, initialPrivate: _ } <$> event.initialTitle))
  let
    mostRecentData' = keepLatest
      ( initialData <#> \{ initialTitle, url, initialPrivate } ->
          let
            bangor =
              ( TrackV0
                  { title: Just initialTitle
                  , url
                  , private: initialPrivate
                  , version: mempty
                  , owner: ""
                  } /\ Map.empty
              )
          in
            bang bangor <|> fold
              ( \a (t /\ e) -> case a of
                  Left ae -> t /\ ae e
                  Right at -> at t /\ e
              )
              (Left <$> (event.atomicEventOperation) <|> (Right <$> event.atomicTrackOperation))
              bangor
      )
  mostRecentData <- envy <<< memoize mostRecentData'
  docEv <-
    ( envy
        <<< rider
          ( toRide
              { event: event.markerMoved 😄 (Tuple <$> event.documentId)
              , push: \(did /\ mm) -> unwrap
                  ( (always :: (Endo Function (Effect Unit)) -> (Endo Function (m Unit)))
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
                  mostRecentData 🙂 event.waveSurfer 🙂 fromEvent (folded $ map pure signedInNonAnonymously) 😄 ({ did: _, sina: _, ws: _, mrd: _ } <$> (Just <$> event.documentId <|> bang Nothing))
              , push: \{ did, sina, ws, mrd } -> unwrap
                  ( (always :: (Endo Function (Effect Unit)) -> (Endo Function (m Unit)))
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
        <<< memoBeh (Just <$> event.documentId) Nothing
    )
  ctor <- envy <<< mailboxed event.spamIdsOnSubscription
  let importerScreenVisible = event.importerScreenVisible <|> bang true
  let chooserScreenVisible = event.chooserScreenVisible <|> bang false
  let loadingScreenVisible = event.loadingScreenVisible <|> bang false
  let previewScreenVisible = event.previewScreenVisible <|> bang Nothing
  D.div
    (bang $ D.Class := "absolute w-screen h-screen bg-zinc-900")
    [ D.div
        ( oneOf
            [ previewScreenVisible <#> \psv -> D.Class := "absolute w-screen bg-zinc-900" <> if isJust psv then " hidden" else ""
            ]
        )
        [ D.div
            ( oneOf
                [ bang $ D.Class := "flex flex-row justify-between"
                ]
            )
            [ D.button
                ( oneOf
                    [ bang $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
                    -- , bang $ D.OnClick := log "hello world"
                    , bang $ D.OnClick := do
                        goBack
                    ]
                )
                [ text_ "<" ]
            , D.h2
                ( oneOf
                    [ bang $ D.Contenteditable := "true"
                    , bang $ D.Class := headerCls <> " p-2"
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
                [ D.span (bang $ D.Class := "text-white") [ text_ "Private?" ]
                , D.input
                    ( oneOf
                        [ bang $ D.Xtype := "checkbox"
                        , fireAndForget mostRecentData <#> \(TrackV0 tr /\ _) -> D.Checked := if tr.private then "true" else "false"
                        , bang $ D.Class := "w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        -- , bang $ D.OnClick := log "hello world"
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
                [ bang $ D.Class := ""
                , event.loadWave <#> \url -> D.Self := \s -> do
                    makeWavesurfer Nothing Just
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
                      url >>= pushed.waveSurfer
                    pushed.loadingScreenVisible false
                ]
            )
            []
        , D.div
            ( oneOf
                [ bang $ D.Id := "timeline"
                , bang $ D.Class := ""
                ]
            )
            []
        , D.div_
            [ D.label (oneOf [ bang $ D.Class := "text-white" ]) [ text_ "Zoom" ]
            , D.input
                ( oneOf
                    [ bang $ D.Min := "2"
                    , bang $ D.Value := "2"
                    , bang $ D.Max := "1000"
                    , slider $ event.waveSurfer <#> zoom
                    ]
                )
                []
            ]
        , D.div_
            [ envy $ memoize
                ( oneOf
                    [ event.addBasic <#> CBasic
                    , event.addLeap <#> CLeap
                    , event.addLongPress <#> CLongPress
                    ]
                )
                \ctrlEvent -> envy
                  $ rider
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
                              ( (always :: (Endo Function (Effect Unit)) -> (Endo Function (m Unit)))
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
                  $ bang do
                      let

                        store :: AnEvent m Landmark
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
                        markerIndices = bang (0 /\ 0) <|> fold
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
                                  [ (Just <$> event.documentId <|> bang Nothing) 😄 markerIndices 😄 ({ ws: _, ixs: _, did: _ } <$> event.waveSurfer) <#> \{ ws, ixs: ix /\ _, did } -> D.OnClick := do
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
                                              , column: 7
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
                                        , column: 7
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
                                                , column: 7
                                                , name: Nothing
                                                , version: mempty
                                                }
                                            )
                                          liftEffect $ associateEventDocumentIdWithMarker m0 evDid.id *> associateEventDocumentIdWithMarker m1 evDid.id *> associateEventDocumentIdWithMarker m2 evDid.id *> associateEventDocumentIdWithMarker m3 evDid.id *> endgame (Just evDid.id)
                                  , bang $ D.Class := buttonCls
                                  ]
                              )
                              [ text_ "Add Tile" ]
                          , D.button
                              ( oneOf
                                  [ (Just <$> event.documentId <|> bang Nothing) 😄 markerIndices 😄 ({ ws: _, ixs: _, did: _ } <$> event.waveSurfer) <#> \{ ws, ixs: ix /\ _, did } -> D.OnClick := do
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
                                              , column: 7
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
                                        , column: 7
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
                                                , column: 7
                                                , version: mempty
                                                }
                                            )
                                          liftEffect $ associateEventDocumentIdWithMarker m0 evDid.id *> associateEventDocumentIdWithMarker m1 evDid.id *> endgame position (Just evDid.id)
                                  , bang $ D.Class := buttonCls
                                  ]
                              )
                              [ text_ "Add Leap" ]
                          , D.button
                              ( oneOf
                                  [ (Just <$> event.documentId <|> bang Nothing) 😄 markerIndices 😄 ({ ws: _, ixs: _, did: _ } <$> event.waveSurfer) <#> \{ ws, ixs: ix /\ _, did } -> D.OnClick := do
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
                                              , column: 7
                                              , name: Nothing
                                              , version: mempty

                                              }
                                          )
                                      m0 <- addMarker ws ix 0 { color: dC ix, label: "P1", time: time1 }
                                      m1 <- addMarker ws ix 1 { color: dC ix, label: "P2", time: time2 }
                                      pushed.atomicEventOperation $ aAddLongPress
                                        { id: ix
                                        , name: Nothing
                                        , column: 7
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
                                                , column: 7
                                                , version: mempty
                                                }
                                            )
                                          liftEffect $ associateEventDocumentIdWithMarker m0 evDid.id *> associateEventDocumentIdWithMarker m1 evDid.id *> endgame (Just evDid.id)
                                  , bang $ D.Class := buttonCls

                                  ]
                              )
                              [ text_ "Add Long Press" ]
                          , D.button
                              ( oneOf
                                  [ bang $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
                                  -- , bang $ D.OnClick := log "hello world"
                                  , mostRecentData <#> \(TrackV0 ato /\ aeo) -> D.OnClick := do
                                      log "starting from most recent data"
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
                                  [ bang $ D.OnClick := do
                                      signInWithGoogle do
                                        window >>= alert "Sign in with google is temporarily unavailable. Please try again later."
                                  , fromEvent signedInNonAnonymously <#> \sina -> D.Class := buttonCls <> if sina then " hidden" else ""
                                  ]
                              )
                              [ text_ "Save (sign in)" ]
                          ]
                      D.div_
                        [ D.div (oneOf [ bang $ D.Class := "flex flex-row justify-around" ]) top
                        , D.div (oneOf [ bang $ D.Class := "accordion", bang $ D.Id := "accordionExample" ])
                            [ dyn $
                                (event.waveSurfer 🙂 ({ itm: _, ws: _ } <$> store)) <#>
                                  ( \{ itm, ws } -> keepLatest $ vbus (Proxy :: _ (V (SingleItem PlainOl))) \p' e' -> do
                                      let
                                        muteState = fold (const not) e'.mute false <|> bang false
                                        soloState = fold (const not) e'.solo false <|> bang false
                                        defaultLabel = case itm of
                                          LBasic v -> "Tile " <> show v.id
                                          LLeap v -> "Leap " <> show v.id
                                          LLong v -> "Long " <> show v.id
                                        label =
                                          ( e'.changeName <#> case _ of
                                              Just x -> x
                                              Nothing -> defaultLabel
                                          ) <|> bang defaultLabel
                                        id /\ name /\ col /\ startIx /\ initialId /\ inSeq = case itm of
                                          LBasic v -> v.id /\ v.name /\ v.col /\ v.startIx /\ v.fbId /\ 4
                                          LLeap v -> v.id /\ v.name /\ v.col /\ v.startIx /\ v.fbId /\ 2
                                          LLong v -> v.id /\ v.name /\ v.col /\ v.startIx /\ v.fbId /\ 2
                                        column = e'.changeColumn <|> bang col
                                      ( bang $ insert $ D.div (oneOf [ bang $ D.Class := "accordion-item bg-zinc-900 border border-white" ])
                                          [ D.h2
                                              ( oneOf
                                                  [ bang $ D.Class := "accordion-header bg-zinc-900 mb-0"
                                                  , bang $ D.Id := "heading" <> show id
                                                  ]
                                              )
                                              [ D.button
                                                  ( oneOf
                                                      [ bang $ D.Class :=
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
                                                      , bang $ xdata "bs-toggle" "collapse"
                                                      , bang $ xdata "bs-target" ("#collapse" <> show id)
                                                      ]
                                                  )
                                                  [ D.span_ [ text label, text_ " (Column ", text (show <$> column), text_ ")" ] ]
                                              ]
                                          , D.div
                                              ( oneOf
                                                  [ bang $ D.Id := "collapse" <> show id
                                                  , bang $ D.Class := ("accordion-collapse collapse" <> if id == 0 then " show" else "")
                                                  , bang $ xdata "bs-parent" "#accordionExample"
                                                  ]
                                              )
                                              [ D.div
                                                  ( oneOf
                                                      [ bang $ D.Class := "accordion-body bg-zinc-900 py-4 px-5"
                                                      ]
                                                  )
                                                  [ D.span (oneOf [ bang $ D.Class := "inline-block" ])
                                                      [ D.label
                                                          ( oneOf
                                                              [ bang $ D.Class := "text-white ml-2" ]
                                                          )
                                                          [ text_ "Name" ]
                                                      , D.input
                                                          ( oneOf
                                                              ( [ (Just <$> ctor (SpammedId { id, did: "nope" }) <|> bang Nothing) 😄 (Tuple <$> docEv) <#> \(mDid /\ updatedId) -> D.OnInput := cb \e -> for_
                                                                    ( target e
                                                                        >>= fromEventTarget
                                                                    )
                                                                    ( \x -> do
                                                                        v <- value x
                                                                        let nm = if v == "" then Nothing else Just v
                                                                        ( (always :: m Unit -> Effect Unit) do
                                                                            p'.changeName nm
                                                                        )
                                                                        pushed.atomicEventOperation $ aChangeName { id, name: nm }
                                                                        for_ (Tuple <$> mDid <*> (initialId <|> (unwrap >>> _.did <$> updatedId))) \(trackId /\ evId) -> do
                                                                          launchAff_ (updateEventNameAff firestoreDb trackId evId v)

                                                                    )
                                                                , bang $ D.Class := "bg-inherit text-white mx-2 appearance-none border rounded py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
                                                                , bang $ D.Placeholder := defaultLabel
                                                                ] <> case name of
                                                                  Nothing -> []
                                                                  Just n -> [ bang $ D.Value := n ]
                                                              )
                                                          )
                                                          []
                                                      ]
                                                  , D.span (oneOf [ bang $ D.Class := "inline-block" ])
                                                      [ D.label
                                                          ( oneOf
                                                              [ bang $ D.Class := "text-white" ]
                                                          )
                                                          [ text_ "Column" ]
                                                      , D.input
                                                          ( oneOf
                                                              [ (Just <$> ctor (SpammedId { id, did: "nope" }) <|> bang Nothing) 😄 (Tuple <$> docEv) <#> \(mDid /\ updatedId) -> D.OnInput := cb \e -> for_
                                                                  ( target e
                                                                      >>= fromEventTarget
                                                                  )
                                                                  ( \x -> do
                                                                      v <- floor <$> valueAsNumber x
                                                                      (always :: m Unit -> Effect Unit) do
                                                                        p'.changeColumn v
                                                                      pushed.atomicEventOperation $ aChangeColumn { id, column: v }
                                                                      for_ (Tuple <$> mDid <*> (initialId <|> (unwrap >>> _.did <$> updatedId))) \(trackId /\ evId) -> do
                                                                        launchAff_ (updateColumnAff firestoreDb trackId evId v)
                                                                  )
                                                              , bang $ D.Xtype := "number"
                                                              , bang $ D.Value := show col
                                                              , bang $ D.Min := "1"
                                                              , bang $ D.Max := "16"
                                                              , bang $ D.Class := "bg-inherit text-white mx-2 appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                                              ]
                                                          )
                                                          []
                                                      ]
                                                  , D.span (oneOf [ bang $ D.Class := "inline-block" ])
                                                      [ D.button
                                                          ( oneOf
                                                              [ soloState <#> \ms -> D.Class := (if ms then buttonActiveCls else buttonCls) <> " mr-2"
                                                              , click $ soloState <#> \ms -> do
                                                                  (if ms then pushed.unSolo else pushed.solo) (startIx /\ inSeq)
                                                                  (map (always :: m Unit -> Effect Unit) p'.solo) unit
                                                              ]
                                                          )
                                                          [ D.span (oneOf []) [ text_ "Solo" ] ]
                                                      , D.button
                                                          ( oneOf
                                                              [ muteState <#> \ms -> D.Class := (if ms then buttonActiveCls else buttonCls) <> " mr-2"
                                                              , click $ muteState <#> \ms -> do
                                                                  (if ms then pushed.unMute else pushed.mute) (startIx /\ inSeq)
                                                                  (map (always :: m Unit -> Effect Unit) p'.mute) unit
                                                              ]
                                                          )
                                                          [ D.span
                                                              (oneOf [])
                                                              [ text_ "Mute" ]
                                                          ]
                                                      , D.button
                                                          ( oneOf
                                                              [ (Just <$> ctor (SpammedId { id, did: "nope" }) <|> bang Nothing) 😄 (Tuple <$> docEv) <#> \(mDid /\ updatedId) -> D.OnClick := cb \_ -> do
                                                                  for_ (startIx .. (startIx + inSeq - 1)) \_ -> do
                                                                    -- do not increment as the list gets shorter and shorter so we are always removing at startIx
                                                                    removeMarker ws startIx
                                                                  (map (always :: m Unit -> Effect Unit) p'.delete) unit
                                                                  pushed.atomicEventOperation $ aDeleteEvent_ { id }
                                                                  for_ (Tuple <$> mDid <*> (initialId <|> (unwrap >>> _.did <$> updatedId))) \(trackId /\ evId) -> do
                                                                    launchAff_ (deleteEventAff firestoreDb trackId evId)
                                                              , bang $ D.Class := buttonCls <> " mr-2"
                                                              ]
                                                          )
                                                          -- [ D.span (oneOf [ bang $ D.Class := "md:inline-block hidden" ]) [ text_ "Delete" ], D.span (oneOf [ bang $ D.Class := "md:hidden inline-block" ]) [ text_ "D" ] ]
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
        ]
    , D.div
        ( importerScreenVisible <#> \isv -> D.Class := "absolute w-screen h-screen grid grid-rows-6 grid-cols-6 bg-zinc-900" <> if isv then "" else " hidden"
        )

        [ D.div
            (bang $ D.Class := "select-auto justify-self-center self-center row-start-3 row-end-5 col-start-2 col-end-6")
            ( [ D.div
                  (bang $ D.Class := "pointer-events-auto text-center p-4 " <> headerCls)
                  [ D.p_ [ text_ "Joyride editor" ]
                  ]
              ]
                <>

                  [ D.div
                      (bang $ D.Class := "pointer-events-auto text-center text-white p-4")
                      [ text (fromEvent signedInNonAnonymously <#> \sina -> "Get started by importing an audio file" <> if sina then " or project." else ".") ]
                  ]
                <>
                  [ D.div (bang $ D.Class := "flex w-full justify-center items-center")
                      [ D.button
                          ( oneOf
                              [ fromEvent signedInNonAnonymously <#> \sina -> D.Class := buttonCls <> " mx-2 pointer-events-auto" <> if sina then "" else " hidden"
                              , bang $ D.OnClick := do
                                  pushed.loadingScreenVisible true
                                  launchAff_ do
                                    tracks <- getTracksAff fbAuth firestoreDb
                                    liftEffect $ pushed.availableTracks tracks
                                    liftEffect do
                                      pushed.chooserScreenVisible true
                                      pushed.loadingScreenVisible false
                              ]
                          )
                          [ text_ "Import project" ]
                      , D.button
                          ( oneOf
                              [ bang $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
                              , bang $ D.OnClick := do
                                  client <- init
                                  picker (\_ -> pure unit) (\_ _ -> pure unit) (\_ _ -> pure unit)
                                    ( \{ url } -> do
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
            (bang $ D.Class := "select-auto row-start-1 row-end-2 col-start-1 col-end-2")
            [ D.button
                ( oneOf
                    [ bang $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
                    , bang $ D.OnClick := pushed.chooserScreenVisible false
                    ]
                )
                [ text_ "< Back" ]
            ]
        , D.div
            (bang $ D.Class := "select-auto justify-self-center self-center row-start-2 row-end-6 col-start-2 col-end-6")
            ( [ D.div
                  (bang $ D.Class := "pointer-events-auto text-center p-4 " <> headerCls)
                  [ D.p_ [ text_ "Choose a project" ]
                  ]
              ]
                <>
                  [ D.div (bang $ D.Class := "flex w-full justify-center items-center")
                      [ ( event.availableTracks # switcher \l -> D.ul (bang $ D.Class := "flex w-full justify-center items-center")
                            ( l <#> \{ id: trackId, data: TrackV0 aTra } -> D.li_
                                [ D.button
                                    ( oneOf
                                        [ bang $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
                                        , bang $
                                            D.OnClick := do
                                              pushed.loadingScreenVisible true *> launchAff_ do
                                                evts <- getEventsAff firestoreDb trackId
                                                liftEffect $ pushed.atomicTrackOperation (const (TrackV0 aTra))
                                                wsf <- forkAff $ eventToAff $ toEvent event.waveSurfer
                                                liftEffect do
                                                  pushed.loadWave aTra.url
                                                  for_ aTra.title pushed.initialTitle
                                                  pushed.initialPrivate aTra.private
                                                  pushed.documentId trackId
                                                ws <- joinFiber wsf
                                                liftEffect do
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
                  ]
            )
        ]
    , D.div
        ( previewScreenVisible <#> \psv ->
            D.Class := "absolute w-screen h-screen" <> if isJust psv then "" else " hidden"
        )
        [ (mostRecentData 🙂 ({ psv: _, mrd: _ } <$> previewScreenVisible)) # switcher \x ->
            do
              let __ = spy "running switcher" x
              let vals = Array.fromFoldable $ Map.values $ snd x.mrd
              let TrackV0 tv0 = fst x.mrd
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
                          EventV0 (BasicEventV0 be) -> Just be
                          _ -> Nothing
                      )
                  , leapE: rideLeaps
                      ( spy "LEAPS"
                          ( vals # filterMap case _ of
                              EventV0 (LeapEventV0 be) -> Just be
                              _ -> Nothing
                          )
                      )
                  , longE: rideLongs
                      ( vals # filterMap case _ of
                          EventV0 (LongEventV0 be) -> Just be
                          _ -> Nothing
                      )
                  , bgtrack: tv0.url
                  , isPreviewPage: true
                  }
                  success
        ]
    , D.div
        ( loadingScreenVisible <#> \lsv ->
            D.Class := "absolute w-screen h-screen" <> if lsv then "" else " hidden"
        )
        [ loadingPage ]
    ]
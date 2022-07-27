module Joyride.App.Editor where

import Prelude

import Control.Alt ((<|>))
import Control.Parallel (parTraverse, parallel, sequential)
import Control.Promise (toAffE)
import Data.Array (groupBy, (..))
import Data.Array as Array
import Data.Array.NonEmpty as NEA
import Data.Compactable (compact)
import Data.Either (Either(..))
import Data.Foldable (foldl, for_, oneOf, traverse_)
import Data.FoldableWithIndex (traverseWithIndex_)
import Data.Function (on)
import Data.Int (floor)
import Data.Map (Map)
import Data.Map as Map
import Data.Maybe (Maybe(..), maybe)
import Data.Monoid.Always (always)
import Data.Monoid.Endo (Endo(..))
import Data.Newtype (class Newtype, unwrap)
import Data.Set as Set
import Data.TraversableWithIndex (traverseWithIndex)
import Data.Tuple (Tuple(..), fst, snd)
import Data.Tuple.Nested ((/\), type (/\))
import Deku.Attribute (cb, xdata, (:=))
import Deku.Control (text, text_)
import Deku.Core (class Korok, Domable, dyn, envy, insert, remove, vbussed, vbussedUncurried)
import Deku.DOM as D
import Deku.Listeners (click)
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)
import Effect.Class.Console as Log
import FRP.Event (AnEvent, bang, fold, folded, fromEvent, keepLatest, mailboxed, mapAccum, memoize, sampleOn)
import FRP.Event.Class (biSampleOn)
import FRP.Event.VBus (V, vbus)
import Joyride.Editor.ADT (Landmark(..), LongLength(..), Marker(..))
import Joyride.FRP.Beh (memoBeh)
import Joyride.FRP.Monad (mToEvent)
import Joyride.FRP.Rider (rider, toRide)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Firebase.Auth (User(..), currentUser, signInWithGoogle)
import Joyride.Firebase.Firestore (addEvent, addEventAff, addTrack, addTrackAff, deleteEventAff, firestoreDb, updateColumnAff, updateEventNameAff, updateMarker1TimeAff, updateMarker2TimeAff, updateMarker3TimeAff, updateMarker4TimeAff, updateTrackTitleAff)
import Joyride.QualifiedDo.Apply as QDA
import Joyride.Style (buttonActiveCls, buttonCls, headerCls)
import Joyride.UniqueNames (randomName)
import Joyride.Wavesurfer.Wavesurfer (WaveSurfer, addMarker, associateEventDocumentIdWithMarker, associateEventDocumentIdWithSortedMarkerIdList, getMarkers, hideMarker, makeWavesurfer, muteExcept, removeMarker, showMarker)
import Type.Proxy (Proxy(..))
import Types (EventV0(..), Event_(..), OpenEditor', Track(..))
import Web.Event.Event (target)
import Web.HTML (window)
import Web.HTML.HTMLInputElement (fromEventTarget, value, valueAsNumber)
import Web.HTML.Window (alert)

smplCls s = oneOf [ bang $ D.Class := s ]

infixr 4 sampleOn as 🙂
infixr 4 biSampleOn as 😄

newtype SpammedId = SpammedId { id :: Int, did :: String }

derive instance Newtype SpammedId _

instance Eq SpammedId where
  eq = eq `on` (unwrap >>> _.id)

instance Ord SpammedId where
  compare = compare `on` (unwrap >>> _.id)

type Events :: forall k. (Type -> k) -> Row k
type Events t =
  ( initialScreenVisible :: t Boolean
  -- achtung: this event is only for external modification
  -- the listener for edited content shouldn't loop back to the element, otherwise we'll get an unnecessary gnarly feedback loop
  , title :: t String
  , changeTitle :: t (Maybe String)
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
  )

type CEvents :: forall k. (Type -> k) -> Row k
type CEvents t =
  ( addBasic :: t (Maybe String)
  , addLeap :: t (Maybe String)
  , addLongPress :: t (Maybe String)
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

data CAction = CBasic (Maybe String) | CLeap (Maybe String) | CLongPress (Maybe String)
data SoMu = Solo (Int /\ Int) | Mute (Int /\ Int) | UnSolo (Int /\ Int) | UnMute (Int /\ Int)

type ChangeTrack = Track -> Track
type ChangeEvent_ = Map Int Event_ -> Map Int Event_

aChangeTitle :: Maybe String -> ChangeTrack
aChangeTitle t (TrackV0 track) = (TrackV0 (track { title = t }))

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
     }
  -> ChangeEvent_
aAddLeap t = Map.insert t.id
  ( EventV0
      ( LeapEventV0
          { marker1Time: t.marker1Time
          , marker1AudioURL: Nothing
          , marker2Time: t.marker2Time
          , marker2AudioURL: Nothing
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
          , marker1AudioURL: Nothing
          , marker2Time: t.marker2Time
          , marker2AudioURL: Nothing
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

defaultBasic :: Int -> Int -> Int -> Maybe String -> Landmark
defaultBasic id startIx col fbId = LBasic
  { l1: Marker { at: 0.0 }
  , l2: Marker { at: 0.5 }
  , l3: Marker { at: 1.0 }
  , l4: Marker { at: 1.5 }
  , name: Nothing
  , fbId
  , id
  , startIx
  , col
  }

defaultLeap :: Int -> Int -> Int -> Maybe String -> Landmark
defaultLeap id startIx col fbId = LLeap
  { start: Marker { at: 0.5 }
  , end: Marker { at: 1.25 }
  , name: Nothing
  , id
  , fbId
  , startIx
  , col
  }

defaultLongPress :: Int -> Int -> Int -> Maybe String -> Landmark
defaultLongPress id startIx col fbId = LLong
  { start: Marker { at: 0.5 }
  , end: Marker { at: 1.25 }
  , len: LongLength { len: 1.0 }
  , name: Nothing
  , id
  , fbId
  , startIx
  , col
  }

editorPage
  :: forall s m lock payload
   . Korok s m
  => OpenEditor'
  -> Domable m lock payload
editorPage { fbAuth, firestoreDb, signedInNonAnonymously } = QDA.do
  pushed /\ (event :: { | Events (AnEvent m) }) <- vbussedUncurried (Proxy :: _ (V (Events PlainOl)))
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

                  let

                    initialData :: AnEvent m { title :: String, url :: String }
                    initialData = fireAndForget (event.loadWave 😄 ({ title: _, url: _ } <$> event.title))
                  let
                    mostRecentData = keepLatest
                      ( initialData <#> \{ title, url } -> fold
                          ( \a (t /\ e) -> case a of
                              Left ae -> t /\ ae e
                              Right at -> at t /\ e
                          )
                          (Left <$> (event.atomicEventOperation) <|> (Right <$> event.atomicTrackOperation))
                          (TrackV0 { title: Just title, url, private: false, version: mempty, owner: "" } /\ Map.empty)
                      )
                  mostRecentData 🙂 event.waveSurfer 🙂 fromEvent (folded $ map pure signedInNonAnonymously) 😄 ({ did: _, sina: _, ws: _, mostRecentData: _ } <$> (Just <$> event.documentId <|> bang Nothing))
              , push: \{ did, sina, ws, mostRecentData } -> unwrap
                  ( (always :: (Endo Function (Effect Unit)) -> (Endo Function (m Unit)))
                      ( Endo \_ -> case did, sina of
                          -- we have gone from not signed in to signed in
                          -- create the document on firebase
                          Nothing, [ true, false ] -> currentUser fbAuth >>= traverse_ \(User u) -> launchAff_ do
                            added <- addTrackAff firestoreDb (aChangeOwner u.uid (fst mostRecentData))
                            liftEffect $ pushed.documentId added.id
                            forIdAttribution <- Map.toUnfoldable (snd mostRecentData) # parTraverse \(id /\ data') -> do
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
  let isv = event.initialScreenVisible <|> bang true
  D.div
    (bang $ D.Class := "absolute w-screen h-screen bg-zinc-900")
    [ D.div
        ( oneOf
            [ bang $ D.Class := "absolute w-screen bg-zinc-900"
            ]
        )
        [ D.div_
            [ D.h2
                ( oneOf
                    [ bang $ D.Contenteditable := "true"
                    , bang $ D.Class := headerCls <> " p-2"
                    , docEv <#> \mDid -> D.OnInput := cb \e -> for_
                        ( target e
                            >>= fromEventTarget
                        )
                        ( \x -> do
                            v <- value x
                            let t = if v == "" then Nothing else Just v
                            pushed.changeTitle t
                            pushed.atomicTrackOperation (aChangeTitle t)
                            for_ mDid \trackId -> do
                              launchAff_ (updateTrackTitleAff firestoreDb trackId v)
                        )
                    ]
                )
                [ text event.title ]
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
                      (pushed.initialScreenVisible false)
                      s
                      url >>= pushed.waveSurfer

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
            [ vbussed (Proxy :: _ (V (CEvents PlainOl))) \cPushed (cEvent :: { | CEvents (AnEvent m) }) -> envy $ memoize
                ( oneOf
                    [ cEvent.addBasic <#> CBasic
                    , cEvent.addLeap <#> CLeap
                    , cEvent.addLongPress <#> CLongPress
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
                                  ((cEvent.solo <#> Solo) <|> (cEvent.mute <#> Mute) <|> (cEvent.unSolo <#> UnSolo) <|> (cEvent.unMute <#> UnMute))
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
                                  CBasic ms -> { id: id + 1, startIx: startIx + 4 } /\ defaultBasic id startIx 7 ms
                                  CLeap ms -> { id: id + 1, startIx: startIx + 2 } /\ defaultLeap id startIx 7 ms
                                  CLongPress ms -> { id: id + 1, startIx: startIx + 2 } /\ defaultLongPress id startIx 7 ms
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
                                      let endgame = cPushed.addBasic
                                      m0 <- addMarker ws ix 0 { color: "#0f32f6", label: "B1", time: 0.0 }
                                      m1 <- addMarker ws ix 1 { color: "#61e2f6", label: "B2", time: 0.5 }
                                      m2 <- addMarker ws ix 2 { color: "#ef82f6", label: "B3", time: 1.0 }
                                      m3 <- addMarker ws ix 3 { color: "#9e0912", label: "B4", time: 1.5 }
                                      pushed.atomicEventOperation $ aAddBasic
                                        { id: ix
                                        , name: Nothing
                                        , column: 7
                                        , marker1Time: 0.0
                                        , marker2Time: 0.5
                                        , marker3Time: 1.0
                                        , marker4Time: 1.5
                                        }
                                      did # maybe (endgame Nothing) \did' ->
                                        launchAff_ do
                                          evDid <- addEventAff firestoreDb did'
                                            ( EventV0 $ BasicEventV0
                                                { marker1Time: 0.0
                                                , marker1AudioURL: Nothing
                                                , marker2Time: 0.5
                                                , marker2AudioURL: Nothing
                                                , marker3Time: 1.0
                                                , marker3AudioURL: Nothing
                                                , marker4Time: 1.5
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
                                      let endgame = cPushed.addLeap
                                      m0 <- addMarker ws ix 0 { color: "#0f32f6", label: "LSt", time: 0.5 }
                                      m1 <- addMarker ws ix 1 { color: "#61e2f6", label: "LEd", time: 1.25 }
                                      pushed.atomicEventOperation $ aAddLeap
                                        { id: ix
                                        , name: Nothing
                                        , column: 7
                                        , marker1Time: 0.5
                                        , marker2Time: 1.25
                                        }
                                      did # maybe (endgame Nothing) \did' ->
                                        launchAff_ do
                                          evDid <- addEventAff firestoreDb did'
                                            ( EventV0 $ LeapEventV0
                                                { marker1Time: 0.5
                                                , marker1AudioURL: Nothing
                                                , marker2Time: 1.25
                                                , marker2AudioURL: Nothing
                                                , name: Nothing
                                                , column: 7
                                                , version: mempty
                                                }
                                            )
                                          liftEffect $ associateEventDocumentIdWithMarker m0 evDid.id *> associateEventDocumentIdWithMarker m1 evDid.id *> endgame (Just evDid.id)
                                  , bang $ D.Class := buttonCls
                                  ]
                              )
                              [ text_ "Add Leap" ]
                          , D.button
                              ( oneOf
                                  [ (Just <$> event.documentId <|> bang Nothing) 😄 markerIndices 😄 ({ ws: _, ixs: _, did: _ } <$> event.waveSurfer) <#> \{ ws, ixs: ix /\ _, did } -> D.OnClick := do
                                      let endgame = cPushed.addLongPress
                                      m0 <- addMarker ws ix 0 { color: "#0f32f6", label: "P1", time: 0.5 }
                                      m1 <- addMarker ws ix 1 { color: "#61e2f6", label: "P2", time: 1.25 }
                                      pushed.atomicEventOperation $ aAddLongPress
                                        { id: ix
                                        , name: Nothing
                                        , column: 7
                                        , marker1Time: 0.5
                                        , marker2Time: 1.25
                                        , length: 1.0
                                        }
                                      did # maybe (endgame Nothing) \did' ->
                                        launchAff_ do
                                          evDid <- addEventAff firestoreDb did'
                                            ( EventV0 $ LongEventV0
                                                { marker1Time: 0.5
                                                , marker1AudioURL: Nothing
                                                , marker2Time: 1.25
                                                , marker2AudioURL: Nothing
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
                                                                  (if ms then cPushed.unSolo else cPushed.solo) (startIx /\ inSeq)
                                                                  (map (always :: m Unit -> Effect Unit) p'.solo) unit
                                                              ]
                                                          )
                                                          [ D.span (oneOf []) [ text_ "Solo" ] ]
                                                      , D.button
                                                          ( oneOf
                                                              [ muteState <#> \ms -> D.Class := (if ms then buttonActiveCls else buttonCls) <> " mr-2"
                                                              , click $ muteState <#> \ms -> do
                                                                  (if ms then cPushed.unMute else cPushed.mute) (startIx /\ inSeq)
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
        ( isv <#> \isv -> D.Class := "absolute w-screen h-screen grid grid-rows-6 grid-cols-6 bg-zinc-900" <> if isv then "" else " hidden"
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
                              , bang $ D.OnClick := (pure unit :: Effect Unit)
                              ]
                          )
                          [ text_ "Import project" ]
                      , D.button
                          ( oneOf
                              [ bang $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
                              , bang $ D.OnClick := do
                                  -- client <- init
                                  -- picker (\_ -> pure unit) (\_ _ -> pure unit) (\_ _ -> pure unit) (\{ url } -> let __ = spy "url" url in pushed.loadWave url) client
                                  let url = "https://cdn.filestackcontent.com/AOK7YpjJTnGJvDKGucuU"
                                  rn <- randomName
                                  let
                                    endgame :: Effect Unit
                                    endgame = do
                                      pushed.title rn
                                      pushed.loadWave url
                                  (map unwrap <$> currentUser fbAuth) >>= maybe endgame \cu ->
                                    if (cu.isAnonymous == false) then launchAff_ do
                                      docRef <- addTrackAff firestoreDb
                                        ( TrackV0
                                            { url, title: Just rn, owner: cu.uid, private: false, version: mempty }
                                        )
                                      liftEffect $ (pushed.documentId docRef.id *> endgame)
                                    else endgame
                              ]
                          )
                          [ text_ "Import file" ]
                      ]

                  ]
            )
        ]
    ]
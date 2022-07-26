module Joyride.App.Editor where

import Prelude

import Control.Alt ((<|>))
import Control.Promise (toAffE)
import Data.Array ((..))
import Data.Either (Either(..))
import Data.Foldable (for_, oneOf)
import Data.Int (floor)
import Data.Maybe (Maybe(..), maybe)
import Data.Monoid.Always (always)
import Data.Monoid.Endo (Endo(..))
import Data.Newtype (unwrap)
import Data.Set as Set
import Data.Tuple (Tuple(..))
import Data.Tuple.Nested ((/\), type (/\))
import Deku.Attribute (cb, xdata, (:=))
import Deku.Control (text, text_)
import Deku.Core (class Korok, Domable, dyn, envy, insert, remove, vbussed)
import Deku.DOM as D
import Deku.Listeners (click)
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)
import FRP.Event (AnEvent, bang, fold, fromEvent, keepLatest, mapAccum, memoize, sampleOn)
import FRP.Event.Class (biSampleOn)
import FRP.Event.VBus (V, vbus)
import Joyride.Editor.ADT (Landmark(..), LongLength(..), Marker(..))
import Joyride.FRP.Beh (memoBeh)
import Joyride.FRP.Rider (rider, toRide)
import Joyride.Firebase.Auth (currentUser, signInWithGoogle)
import Joyride.Firebase.Firestore (addEvent, addEventAff, addTrackAff, updateMarker1Time, updateMarker1TimeAff, updateMarker2TimeAff, updateMarker3TimeAff, updateMarker4TimeAff)
import Joyride.Style (buttonActiveCls, buttonCls, headerCls)
import Joyride.UniqueNames (randomName)
import Joyride.Wavesurfer.Wavesurfer (WaveSurfer, addMarker, associateEventDocumentIdWithMarker, hideMarker, makeWavesurfer, muteExcept, removeMarker, showMarker)
import Type.Proxy (Proxy(..))
import Types (EventV0(..), Event_(..), OpenEditor', Track(..), Version)
import Web.Event.Event (target)
import Web.HTML.HTMLInputElement (fromEventTarget, value, valueAsNumber)

type Events :: forall k. (Type -> k) -> Row k
type Events t =
  ( initialScreenVisible :: t Boolean
  -- achtung: this event is only for external modification
  -- the listener for edited content shouldn't loop back to the element, otherwise we'll get an unnecessary gnarly feedback loop
  , title :: t String
  , loadWave :: t String
  , waveSurfer :: t WaveSurfer
  , documentId :: t String
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
  ( addBasic :: t Unit
  , addLeap :: t Unit
  , addLongPress :: t Unit
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

data CAction = CBasic | CLeap | CLongPress
data SoMu = Solo (Int /\ Int) | Mute (Int /\ Int) | UnSolo (Int /\ Int) | UnMute (Int /\ Int)

defaultBasic :: Int -> Int -> Int -> Landmark
defaultBasic id startIx col = LBasic
  { l1: Marker { at: 0.0 }
  , l2: Marker { at: 0.5 }
  , l3: Marker { at: 1.0 }
  , l4: Marker { at: 1.5 }
  , name: Nothing
  , id
  , startIx
  , col
  }

defaultLeap :: Int -> Int -> Int -> Landmark
defaultLeap id startIx col = LLeap
  { start: Marker { at: 0.5 }
  , end: Marker { at: 1.25 }
  , name: Nothing
  , id
  , startIx
  , col
  }

defaultLongPress :: Int -> Int -> Int -> Landmark
defaultLongPress id startIx col = LLong
  { start: Marker { at: 0.5 }
  , end: Marker { at: 1.25 }
  , len: LongLength { len: 1.0 }
  , name: Nothing
  , id
  , startIx
  , col
  }

editorPage
  :: forall s m lock payload
   . Korok s m
  => OpenEditor'
  -> Domable m lock payload
editorPage { fbAuth, firestoreDb, signedInNonAnonymously } = vbussed (Proxy :: _ (V (Events PlainOl))) \pushed (event :: { | Events (AnEvent m) }) -> envy
  $ rider
      ( toRide
          { event: biSampleOn event.markerMoved (Tuple <$> event.documentId)
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
  $ memoBeh (Just <$> event.documentId) Nothing \docEv -> do
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
                        [ cEvent.addBasic $> CBasic
                        , cEvent.addLeap $> CLeap
                        , cEvent.addLongPress $> CLongPress
                        ]
                    )
                    \ctrlEvent -> envy
                      $ rider
                          ( toRide
                              { event: sampleOn event.waveSurfer
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
                                      CBasic -> { id: id + 1, startIx: startIx + 4 } /\ defaultBasic id startIx 7
                                      CLeap -> { id: id + 1, startIx: startIx + 2 } /\ defaultLeap id startIx 7
                                      CLongPress -> { id: id + 1, startIx: startIx + 2 } /\ defaultLongPress id startIx 7

                                  )
                                  ctrlEvent
                                  { id: 0, startIx: 0 }
                              )
                            markerIndices = bang (0 /\ 0) <|> fold
                              ( \a (b /\ c) -> (b + 1) /\ case a of
                                  CBasic -> c + 4
                                  CLeap -> c + 2
                                  CLongPress -> c + 2
                              )
                              ctrlEvent
                              (0 /\ 0)
                            top =
                              [ D.button
                                  ( oneOf
                                      [ biSampleOn (Just <$> event.documentId <|> bang Nothing) (biSampleOn markerIndices ({ ws: _, ixs: _, did: _ } <$> event.waveSurfer)) <#> \{ ws, ixs: ix /\ _, did } -> D.OnClick := do
                                          let endgame = cPushed.addBasic unit
                                          m0 <- addMarker ws ix 0 { color: "#0f32f6", label: "B1", time: 0.0 }
                                          m1 <- addMarker ws ix 1 { color: "#61e2f6", label: "B2", time: 0.5 }
                                          m2 <- addMarker ws ix 2 { color: "#ef82f6", label: "B3", time: 1.0 }
                                          m3 <- addMarker ws ix 3 { color: "#9e0912", label: "B4", time: 1.5 }
                                          did # maybe endgame \did' ->
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
                                                    , name: Nothing
                                                    , version: mempty
                                                    }
                                                )
                                              liftEffect $ associateEventDocumentIdWithMarker m0 evDid.id *> associateEventDocumentIdWithMarker m1 evDid.id *> associateEventDocumentIdWithMarker m2 evDid.id *> associateEventDocumentIdWithMarker m3 evDid.id *> endgame
                                      , bang $ D.Class := buttonCls
                                      ]
                                  )
                                  [ text_ "Add Tile" ]
                              , D.button
                                  ( oneOf
                                      [ biSampleOn (Just <$> event.documentId <|> bang Nothing) (biSampleOn markerIndices ({ ws: _, ixs: _, did: _ } <$> event.waveSurfer)) <#> \{ ws, ixs: ix /\ _, did } -> D.OnClick := do
                                          let endgame = cPushed.addLeap unit
                                          m0 <- addMarker ws ix 0 { color: "#0f32f6", label: "LSt", time: 0.5 }
                                          m1 <- addMarker ws ix 1 { color: "#61e2f6", label: "LEd", time: 1.25 }
                                          did # maybe endgame \did' ->
                                            launchAff_ do
                                              evDid <- addEventAff firestoreDb did'
                                                ( EventV0 $ LeapEventV0
                                                    { marker1Time: 0.5
                                                    , marker1AudioURL: Nothing
                                                    , marker2Time: 1.25
                                                    , marker2AudioURL: Nothing
                                                    , name: Nothing
                                                    , version: mempty
                                                    }
                                                )
                                              liftEffect $ associateEventDocumentIdWithMarker m0 evDid.id *> associateEventDocumentIdWithMarker m1 evDid.id *> endgame
                                      , bang $ D.Class := buttonCls
                                      ]
                                  )
                                  [ text_ "Add Leap" ]
                              , D.button
                                  ( oneOf
                                      [ biSampleOn (Just <$> event.documentId <|> bang Nothing) (biSampleOn markerIndices ({ ws: _, ixs: _, did: _ } <$> event.waveSurfer)) <#> \{ ws, ixs: ix /\ _, did } -> D.OnClick := do
                                          let endgame = cPushed.addLongPress unit
                                          m0 <- addMarker ws ix 0 { color: "#0f32f6", label: "P1", time: 0.5 }
                                          m1 <- addMarker ws ix 1 { color: "#61e2f6", label: "P2", time: 1.25 }
                                          -- TODO: add length 1.0
                                          did # maybe endgame \did' ->
                                            launchAff_ do
                                              evDid <- addEventAff firestoreDb did'
                                                ( EventV0 $ LongEventV0
                                                    { marker1Time: 0.5
                                                    , marker1AudioURL: Nothing
                                                    , marker2Time: 1.25
                                                    , marker2AudioURL: Nothing
                                                    , length: 1.0
                                                    , name: Nothing
                                                    , version: mempty
                                                    }
                                                )
                                              liftEffect $ associateEventDocumentIdWithMarker m0 evDid.id *> associateEventDocumentIdWithMarker m1 evDid.id *> endgame
                                      , bang $ D.Class := buttonCls

                                      ]
                                  )
                                  [ text_ "Add Long Press" ]
                              , D.button
                                  ( oneOf
                                      [ bang $ D.OnClick := launchAff_ do
                                          toAffE $ signInWithGoogle fbAuth
                                      , bang $ D.Class := buttonCls

                                      ]
                                  )
                                  [ text (fromEvent signedInNonAnonymously <#> if _ then "Save" else "Save (sign in)") ]
                              ]
                          D.div_
                            [ D.div (oneOf [ bang $ D.Class := "flex flex-row justify-around" ]) top
                            , D.div (oneOf [ bang $ D.Class := "accordion", bang $ D.Id := "accordionExample" ])
                                [ dyn $
                                    (sampleOn event.waveSurfer ({ itm: _, ws: _ } <$> store)) <#>
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
                                            id /\ name /\ col /\ startIx /\ inSeq = case itm of
                                              LBasic v -> v.id /\ v.name /\ v.col /\ v.startIx /\ 4
                                              LLeap v -> v.id /\ v.name /\ v.col /\ v.startIx /\ 2
                                              LLong v -> v.id /\ v.name /\ v.col /\ v.startIx /\ 2
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
                                                                  ( [ docEv <#> \mDid -> D.OnInput := cb \e -> for_
                                                                        ( target e
                                                                            >>= fromEventTarget
                                                                        )
                                                                        ( \x -> do
                                                                            v <- value x
                                                                            ( (always :: m Unit -> Effect Unit) do
                                                                                p'.changeName (if v == "" then Nothing else Just v)
                                                                                for_ mDid \diiid -> do
                                                                                  -- TODO
                                                                                  -- we need the id for the event
                                                                                  -- this will either come
                                                                                  -- from creation _or_ a mailbox
                                                                                  -- that is spammed on the initial
                                                                                  -- save after login
                                                                                  pure unit
                                                                            )

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
                                                                  [ docEv <#> \mDid -> D.OnInput := cb \e -> for_
                                                                      ( target e
                                                                          >>= fromEventTarget
                                                                      )
                                                                      ( \x -> do
                                                                          v <- floor <$> valueAsNumber x
                                                                          (always :: m Unit -> Effect Unit) do
                                                                            p'.changeColumn v
                                                                            for_ mDid \diiid -> do
                                                                              -- TODO
                                                                              -- we need the id for the event
                                                                              -- this will either come
                                                                              -- from creation _or_ a mailbox
                                                                              -- that is spammed on the initial
                                                                              -- save after login
                                                                              pure unit
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
                                                                  [ bang $ D.OnClick := do
                                                                      for_ (startIx .. (startIx + inSeq - 1)) \_ -> do
                                                                        -- do not increment as the list gets shorter and shorter so we are always removing at startIx
                                                                        removeMarker ws startIx
                                                                      (map (always :: m Unit -> Effect Unit) p'.delete) unit
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
                (bang $ D.Class := "select-auto justify-self-center self-center row-start-3 row-end-5 col-start-2 col-end-6 md:col-start-3 md:col-end-5")
                ( [ D.div
                      (bang $ D.Class := "pointer-events-auto text-center p-4 " <> headerCls)
                      [ D.p_ [ text_ "Joyride editor" ]
                      ]
                  ]
                    <>

                      [ D.div
                          (bang $ D.Class := "pointer-events-auto text-center text-white p-4")
                          [ text_ "Get started by importing a file or project." ]
                      ]
                    <>
                      [ D.div (bang $ D.Class := "flex w-full justify-center items-center")

                          [ D.button
                              ( oneOf
                                  [ bang $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
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
                                                { url, title: Just rn, owner: cu.uid, version: mempty }
                                            )
                                          liftEffect $ pushed.documentId docRef.id *> endgame
                                        else endgame
                                  ]
                              )
                              [ text_ "Import file" ]
                          ]

                      ]
                )
            ]
        ]
module Joyride.App.Editor where

import Prelude

import Control.Alt ((<|>))
import Control.Monad.Except (runExcept, throwError)
import Control.Plus (empty)
import Data.Array ((..))
import Data.Array (span)
import Data.DateTime.Instant (unInstant)
import Data.Either (Either(..), hush)
import Data.Foldable (foldl, for_, oneOf, oneOfMap, traverse_)
import Data.Int (floor, round)
import Data.Map as Map
import Data.Maybe (Maybe(..))
import Data.Monoid (guard)
import Data.Monoid.Always (always)
import Data.Monoid.Endo (Endo(..))
import Data.Newtype (over, unwrap)
import Data.Number (pi)
import Data.Set as Set
import Data.String as String
import Data.Time.Duration (Milliseconds(..))
import Data.Traversable (traverse)
import Data.Tuple (Tuple(..), fst, snd)
import Data.Tuple.Nested ((/\), type (/\))
import Debug (spy)
import Deku.Attribute (cb, xdata, (:=))
import Deku.Control (switcher, text, text_)
import Deku.Core (class Korok, Domable, Nut, bus, bussed, dyn, envy, insert, remove, vbussed)
import Deku.DOM as D
import Deku.Listeners (click)
import Effect (Effect, foreachE)
import Effect.Aff (delay, launchAff_)
import Effect.Class (liftEffect)
import Effect.Now as LocalNow
import Effect.Ref as Ref
import Effect.Timer (clearInterval, setInterval)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (AnEvent, Event, EventIO, bang, filterMap, fold, fromEvent, hot, keepLatest, mapAccum, memoize, sampleOn, subscribe)
import FRP.Event.AnimationFrame (animationFrame)
import FRP.Event.Class (biSampleOn)
import FRP.Event.VBus (V, vbus)
import Foreign.Object as Object
import Joyride.App.RequestIdleCallbackIsDefined (requestIdleCallbackIsDefined)
import Joyride.Audio.Graph.Tutorial (graph)
import Joyride.Editor.ADT (Landmark(..), LongLength(..), Marker(..))
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.FRP.Rate (timeFromRate)
import Joyride.FRP.Rider (Rider, rider, toRide)
import Joyride.FRP.SampleOnSubscribe (initializeWithEmpty)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Filestack.Filestack (init, picker)
import Joyride.FullScreen as FullScreen
import Joyride.Ocarina (AudibleChildEnd)
import Joyride.Style (buttonActiveCls, buttonCls, headerCls)
import Joyride.Visual.Animation.Tutorial (runThree)
import Joyride.Wavesurfer.Wavesurfer (WaveSurfer, addMarker, hideMarker, makeWavesurfer, muteExcept, removeMarker, showMarker)
import Ocarina.Clock (withACTime)
import Ocarina.Interpret (close, constant0Hack, context)
import Ocarina.Run (run2)
import Ocarina.WebAPI (BrowserAudioBuffer)
import Rito.Color (color)
import Rito.Core (ASceneful)
import Rito.Matrix4 as M4
import Safe.Coerce (coerce)
import Simple.JSON as JSON
import Type.Proxy (Proxy(..))
import Types (Beats(..), HitBasicMe, HitLeapMe, HitLongMe, InFlightGameInfo(..), JMilliseconds(..), KnownPlayers(..), MakeBasics, MakeLeaps, MakeLongs, Player(..), PlayerPositionsF, RateInfo, ReleaseLongMe, RenderingInfo, Seconds(..), StartStatus(..), WantsTutorial', WindowDims)
import Types (OpenEditor')
import Web.DOM as Web.DOM
import Web.Event.Event (target)
import Web.HTML.HTMLCanvasElement as HTMLCanvasElement
import Web.HTML.HTMLInputElement (fromEventTarget, value, valueAsNumber)
import Web.HTML.Window (RequestIdleCallbackId, Window, cancelIdleCallback, requestIdleCallback)

type Events t =
  ( initialScreenVisible :: t Boolean
  , loadWave :: t String
  , waveSurfer :: t WaveSurfer
  )

data SoMu = Solo (Int /\ Int) | Mute (Int /\ Int) | UnSolo (Int /\ Int) | UnMute (Int /\ Int)

type SingleItem t =
  ( changeTitle :: t (Maybe String)
  , changeColumn :: t Int
  , solo :: t Unit
  , mute :: t Unit
  , delete :: t Unit
  )

type CEvents t =
  ( addBasic :: t Unit
  , addLeap :: t Unit
  , addLongPress :: t Unit
  , solo :: t (Int /\ Int)
  , mute :: t (Int /\ Int)
  , unSolo :: t (Int /\ Int)
  , unMute :: t (Int /\ Int)
  )

type PlainOl t = t

data CAction = CBasic | CLeap | CLongPress

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
editorPage _ = vbussed (Proxy :: _ (V (Events PlainOl))) \pushed (event :: { | Events (AnEvent m) }) -> do
  let isv = event.initialScreenVisible <|> bang true
  D.div
    (bang $ D.Class := "absolute w-screen h-screen bg-zinc-900")
    [ D.div
        ( oneOf
            [ bang $ D.Class := "absolute w-screen bg-zinc-900"
            ]
        )
        [ D.div
            ( oneOf
                [ bang $ D.Class := ""
                , event.loadWave <#> \url -> D.Self := \s -> do
                    makeWavesurfer [] (pushed.initialScreenVisible false) s url >>= pushed.waveSurfer

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
                        markerIndex = bang 0 <|> fold
                          ( \a b -> case a of
                              CBasic -> b + 4
                              CLeap -> b + 2
                              CLongPress -> b + 2
                          )
                          ctrlEvent
                          0
                        top =
                          [ D.button
                              ( oneOf
                                  [ event.waveSurfer <#> \ws -> D.OnClick := do
                                      cPushed.addBasic unit
                                      addMarker ws { color: "#0f32f6", label: "B1", time: 0.0 }
                                      addMarker ws { color: "#61e2f6", label: "B2", time: 0.5 }
                                      addMarker ws { color: "#ef82f6", label: "B3", time: 1.0 }
                                      addMarker ws { color: "#9e0912", label: "B4", time: 1.5 }
                                  , bang $ D.Class := buttonCls
                                  ]
                              )
                              [ text_ "Add Tile" ]
                          , D.button
                              ( oneOf
                                  [ event.waveSurfer <#> \ws -> D.OnClick := do
                                      cPushed.addLeap unit
                                      addMarker ws { color: "#0f32f6", label: "LSt", time: 0.5 }
                                      addMarker ws { color: "#61e2f6", label: "LEd", time: 1.25 }
                                  , bang $ D.Class := buttonCls
                                  ]
                              )
                              [ text_ "Add Leap" ]
                          , D.button
                              ( oneOf
                                  [ event.waveSurfer <#> \ws -> D.OnClick := do
                                      cPushed.addLongPress unit
                                      addMarker ws { color: "#0f32f6", label: "P1", time: 0.5 }
                                      addMarker ws { color: "#61e2f6", label: "P2", time: 1.25 }
                                  , bang $ D.Class := buttonCls

                                  ]
                              )
                              [ text_ "Add Long Press" ]
                          ]
                      D.div_
                        [ D.div (oneOf [ bang $ D.Class := "flex flex-row justify-around" ]) top
                        , D.div (oneOf [ bang $ D.Class := "accordion", bang $ D.Id := "accordionExample" ])
                            [ dyn $
                                sampleOn event.waveSurfer (Tuple <$> store) <#>
                                  ( \(itm /\ ws) -> keepLatest $ vbus (Proxy :: _ (V (SingleItem PlainOl))) \p' e' -> do
                                      let
                                        muteState = fold (const not) e'.mute false <|> bang false
                                        soloState = fold (const not) e'.solo false <|> bang false
                                        defaultLabel = case itm of
                                          LBasic v -> "Tile " <> show v.id
                                          LLeap v -> "Leap " <> show v.id
                                          LLong v -> "Long " <> show v.id
                                        label =
                                          ( e'.changeTitle <#> case _ of
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
                                                              ( [ bang $ D.OnInput := cb \e -> for_
                                                                    ( target e
                                                                        >>= fromEventTarget
                                                                    )
                                                                    ( \x -> do
                                                                        v <- value x
                                                                        (map (always :: m Unit -> Effect Unit) p'.changeTitle) (if v == "" then Nothing else Just v)
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
                                                              [ bang $ D.OnInput := cb \e -> for_
                                                                  ( target e
                                                                      >>= fromEventTarget
                                                                  )
                                                                  ( \x -> do
                                                                      v <- floor <$> valueAsNumber x
                                                                      (map (always :: m Unit -> Effect Unit) p'.changeColumn) v
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
                                  pushed.loadWave "https://cdn.filestackcontent.com/AOK7YpjJTnGJvDKGucuU"
                              ]
                          )
                          [ text_ "Import file" ]
                      ]

                  ]
            )
        ]
    ]
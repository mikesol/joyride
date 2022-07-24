module Joyride.App.Editor where

import Prelude

import Control.Alt ((<|>))
import Control.Monad.Except (runExcept, throwError)
import Control.Plus (empty)
import Data.Array (span)
import Data.DateTime.Instant (unInstant)
import Data.Either (hush)
import Data.Foldable (foldl, oneOf, oneOfMap, traverse_)
import Data.Int (round)
import Data.Map as Map
import Data.Maybe (Maybe(..))
import Data.Monoid (guard)
import Data.Newtype (over, unwrap)
import Data.Number (pi)
import Data.String as String
import Data.Time.Duration (Milliseconds(..))
import Data.Traversable (traverse)
import Data.Tuple (Tuple(..), fst, snd)
import Data.Tuple.Nested ((/\))
import Debug (spy)
import Deku.Attribute ((:=))
import Deku.Control (switcher, text_)
import Deku.Core (class Korok, Domable, Nut, bus, bussed, dyn, envy, insert, remove, vbussed)
import Deku.DOM as D
import Effect (Effect, foreachE)
import Effect.Aff (delay, launchAff_)
import Effect.Class (liftEffect)
import Effect.Now as LocalNow
import Effect.Ref as Ref
import Effect.Timer (clearInterval, setInterval)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (AnEvent, Event, EventIO, bang, filterMap, fold, fromEvent, hot, keepLatest, mapAccum, memoize, subscribe)
import FRP.Event.AnimationFrame (animationFrame)
import FRP.Event.Class (biSampleOn)
import FRP.Event.VBus (V)
import Foreign.Object as Object
import Joyride.App.RequestIdleCallbackIsDefined (requestIdleCallbackIsDefined)
import Joyride.Audio.Graph.Tutorial (graph)
import Joyride.Editor.ADT (Landmark(..), LongLength(..), Marker(..))
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.FRP.Rate (timeFromRate)
import Joyride.FRP.SampleOnSubscribe (initializeWithEmpty)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Filestack.Filestack (init, picker)
import Joyride.FullScreen as FullScreen
import Joyride.Ocarina (AudibleChildEnd)
import Joyride.Style (buttonCls, headerCls)
import Joyride.Visual.Animation.Tutorial (runThree)
import Joyride.Wavesurfer.Wavesurfer (WaveSurfer, addMarker, makeWavesurfer)
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
import Web.HTML.HTMLCanvasElement as HTMLCanvasElement
import Web.HTML.Window (RequestIdleCallbackId, Window, cancelIdleCallback, requestIdleCallback)

type Events t =
  ( initialScreenVisible :: t Boolean
  , loadWave :: t String
  , waveSurfer :: t WaveSurfer
  )

data CAction = AddBasic | AddLeap | AddLongPress

defaultBasic :: Int -> Int -> Landmark
defaultBasic id startIx = LBasic
  { l1: Marker { at: 0.0 }
  , l2: Marker { at: 0.5 }
  , l3: Marker { at: 1.0 }
  , l4: Marker { at: 1.5 }
  , name: Nothing
  , id
  , startIx
  }

defaultLeap :: Int -> Int -> Landmark
defaultLeap id startIx = LLeap
  { start: Marker { at: 0.5 }
  , end: Marker { at: 1.25 }
  , name: Nothing
  , id
  , startIx
  }

defaultLongPress :: Int -> Int -> Landmark
defaultLongPress id startIx = LLong
  { start: Marker { at: 0.5 }
  , end: Marker { at: 1.25 }
  , len: LongLength { len: 1.0 }
  , name: Nothing
  , id
  , startIx
  }

type CEvents t =
  ( addBasic :: t Unit
  , addLeap :: t Unit
  , addLongPress :: t Unit
  )

type Always t = t

editorPage
  :: forall s m lock payload
   . Korok s m
  => OpenEditor'
  -> Domable m lock payload
editorPage _ = vbussed (Proxy :: _ (V (Events Always))) \pushed (event :: { | Events (AnEvent m) }) -> do
  let isv = event.initialScreenVisible <|> bang true
  D.div
    (bang $ D.Class := "absolute w-screen h-screen")
    [ D.div
        ( oneOf
            [ bang $ D.Class := "absolute w-screen h-screen bg-zinc-900"
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
            [ vbussed (Proxy :: _ (V (CEvents Always))) \cPushed (cEvent :: { | CEvents (AnEvent m) }) -> envy $ memoize
                ( oneOf
                    [ cEvent.addBasic $> AddBasic
                    , cEvent.addLeap $> AddLeap
                    , cEvent.addLongPress $> AddLongPress
                    ]
                )
                \ctrlEvent -> do
                  let
                    startsAt = []

                    store :: AnEvent m Landmark
                    store =
                      ( mapAccum
                          ( \a { id, startIx } -> case a of
                              AddBasic -> { id: id + 1, startIx: startIx + 4 } /\ defaultBasic id startIx
                              AddLeap -> { id: id + 1, startIx: startIx + 2 } /\ defaultLeap id startIx
                              AddLongPress -> { id: id + 1, startIx: startIx + 2 } /\ defaultLongPress id startIx

                          )
                          ctrlEvent
                          { id: 0, startIx: 0 }
                      )
                    markerIndex = bang 0 <|> fold
                      ( \a b -> case a of
                          AddBasic -> b + 4
                          AddLeap -> b + 2
                          AddLongPress -> b + 2
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
                    , D.div_
                        [ dyn $
                            store <#>
                              ( \itm -> keepLatest $ bus \p' e' ->
                                  ( bang $ insert $ D.div_
                                      [ D.input
                                          ( oneOf
                                              [ bang $ D.Class := "bg-inherit text-white mx-2 appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                              , bang $ D.Placeholder := case itm of
                                                  LBasic v -> "Tile " <> show v.id
                                                  LLeap v -> "Leap " <> show v.id
                                                  LLong v -> "Long " <> show v.id
                                              ]
                                          )
                                          [  ]
                                      , D.button
                                          ( oneOf
                                              [ bang $ D.OnClick := (pure unit :: Effect Unit)
                                              , bang $ D.Class := buttonCls <> " mr-2"
                                              ]
                                          )
                                          [ D.span (oneOf [bang $ D.Class := "md:inline-block hidden"]) [text_ "Solo"], D.span (oneOf [bang $ D.Class := "md:hidden inline-block"]) [text_ "S"] ]
                                      , D.button
                                          ( oneOf
                                              [ bang $ D.OnClick := (pure unit :: Effect Unit)
                                              , bang $ D.Class := buttonCls <> " mr-2"
                                              ]
                                          )
                                          [ D.span (oneOf [bang $ D.Class := "md:inline-block hidden"]) [text_ "Mute"], D.span (oneOf [bang $ D.Class := "md:hidden inline-block"]) [text_ "M"]]
                                      , D.button
                                          ( oneOf
                                              [ bang $ D.OnClick := p' remove
                                              , bang $ D.Class := buttonCls <> " mr-2"
                                              ]
                                          )
                                          [ D.span (oneOf [bang $ D.Class := "md:inline-block hidden"]) [text_ "Delete"], D.span (oneOf [bang $ D.Class := "md:hidden inline-block"]) [text_ "D"] ]
                                      ]
                                  ) <|> e'
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
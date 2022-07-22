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
import Debug (spy)
import Deku.Attribute ((:=))
import Deku.Control (switcher, text_)
import Deku.Core (class Korok, Domable, Nut, bussed, envy, vbussed)
import Deku.DOM as D
import Effect (Effect, foreachE)
import Effect.Aff (delay, launchAff_)
import Effect.Class (liftEffect)
import Effect.Now as LocalNow
import Effect.Ref as Ref
import Effect.Timer (clearInterval, setInterval)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (Event, EventIO, bang, filterMap, fromEvent, hot, memoize, subscribe)
import FRP.Event.AnimationFrame (animationFrame)
import FRP.Event.Class (biSampleOn)
import FRP.Event.VBus (V)
import Foreign.Object as Object
import Joyride.App.RequestIdleCallbackIsDefined (requestIdleCallbackIsDefined)
import Joyride.Wavesurfer.Wavesurfer (makeWavesurfer)
import Joyride.Audio.Graph.Tutorial (graph)
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.FRP.Rate (timeFromRate)
import Joyride.FRP.SampleOnSubscribe (initializeWithEmpty)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Filestack.Filestack (init, picker)
import Joyride.FullScreen as FullScreen
import Joyride.Ocarina (AudibleChildEnd)
import Joyride.Style (buttonCls, headerCls)
import Joyride.Visual.Animation.Tutorial (runThree)
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

type Events = V (initialScreenVisible :: Boolean, loadWave :: String)

editorPage :: OpenEditor' -> Nut
editorPage _ = vbussed (Proxy :: _ Events) \pushed event -> do
  let isv = event.initialScreenVisible <|> bang true
  D.div
    (bang $ D.Class := "absolute w-screen h-screen")
    [ D.div
        ( oneOf
            [ bang $ D.Class := "absolute w-screen h-screen"
            , event.loadWave <#> \url -> D.Self := \s -> do
                makeWavesurfer (pushed.initialScreenVisible false) s url

            ]
        )
        []
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
                                    client <- init
                                    picker (\_ -> pure unit) (\_ _ -> pure unit) (\_ _ -> pure unit) (\{ url } -> let __ = spy "url" url in pushed.loadWave url) client
                                ]
                            )
                            [ text_ "Import file" ]
                        ]

                    ]
            )
        ]
    ]
module Joyride.App.Toplevel where

import Prelude

import Control.Alt ((<|>))
import Data.Array (span)
import Data.DateTime.Instant (unInstant)
import Data.Foldable (oneOf, oneOfMap, traverse_)
import Data.Map as Map
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Number (pi)
import Data.Time.Duration (Milliseconds)
import Data.Tuple (fst, snd)
import Deku.Attribute (attr, cb, (:=))
import Deku.Control (switcher, text, text_)
import Deku.Core (Nut, vbussed)
import Deku.DOM as D
import Effect (Effect, foreachE)
import Effect.Now (now)
import Effect.Ref as Ref
import Effect.Timer (clearInterval, setInterval)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (Event, bang, fromEvent, hot, subscribe)
import FRP.Event.AnimationFrame (animationFrame)
import FRP.Event.VBus (V)
import Foreign.Object as Object
import Joyride.Audio.Graph (graph)
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.FRP.Rate (timeFromRate)
import Joyride.Visual.Animation (runThree)
import Joyride.Wags (AudibleChildEnd)
import Rito.Color (color)
import Rito.Core (ASceneful)
import Rito.THREE (ThreeStuff)
import Type.Proxy (Proxy(..))
import Types (MakeBasics, Player, PlayerPositionsF, RateInfo, RenderingInfo, Seconds(..), WindowDims)
import WAGS.Clock (withACTime)
import WAGS.Interpret (close, constant0Hack, context)
import WAGS.Run (run2)
import WAGS.WebAPI (BrowserAudioBuffer)
import Web.HTML.HTMLCanvasElement as HTMLCanvasElement
import Web.HTML.Window (RequestIdleCallbackId, Window, cancelIdleCallback, requestIdleCallback)

twoPi = 2.0 * pi :: Number

type UIEvents = V
  ( start :: Unit
  , stop :: Effect Unit
  , rateInfo :: RateInfo
  , basicAudio :: Event AudibleChildEnd
  )

type ToplevelInfo =
  { loaded :: Event Boolean
  , threeStuff :: ThreeStuff
  , isMobile :: Boolean
  , lpsCallback :: Milliseconds -> Effect Unit -> Effect Unit
  , myPlayer :: Player
  , playerPositions :: Behavior PlayerPositionsF
  , resizeE :: Event WindowDims
  , basicE :: forall lock payload. { | MakeBasics () } -> ASceneful lock payload
  , renderingInfo :: Behavior RenderingInfo
  , initialDims :: WindowDims
  , debug :: Boolean
  , silence :: BrowserAudioBuffer
  , icid :: Ref.Ref (Maybe RequestIdleCallbackId)
  , wdw :: Window
  , unschedule :: Ref.Ref (Map.Map Number (Effect Unit))
  , soundObj :: Ref.Ref (Object.Object BrowserAudioBuffer)
  }

toplevel :: ToplevelInfo -> Nut
toplevel tli =
  ( (fromEvent tli.loaded <|> bang false) # switcher case _ of
      false -> D.div_
        [ D.h1_ [ text_ "Loading (should take less than 10s)" ] ]
      true ->
        ( vbussed (Proxy :: _ UIEvents) \push event ->
            do
              let
                startE = bang unit <|> event.start
                stopE = event.stop

              D.div_
                [ D.div
                    (bang (D.Style := "position:absolute;"))
                    [ D.canvas
                        ( oneOfMap bang
                            [ D.Self := HTMLCanvasElement.fromElement >>>
                                traverse_
                                  ( runThree <<<
                                      { threeStuff: tli.threeStuff
                                      , isMobile: tli.isMobile
                                      , renderingInfo: tli.renderingInfo
                                      , lowPriorityCb: tli.lpsCallback
                                      , myPlayer: tli.myPlayer
                                      , debug: tli.debug
                                      , basicE: tli.basicE
                                          { initialDims: tli.initialDims
                                          , renderingInfo: tli.renderingInfo
                                          , debug: tli.debug
                                          , resizeEvent: tli.resizeE
                                          , isMobile: tli.isMobile
                                          , lpsCallback: tli.lpsCallback
                                          , pushAudio: push.basicAudio
                                          , mkColor: color tli.threeStuff.three
                                          , rateInfo: event.rateInfo
                                          , buffers: refToBehavior tli.soundObj
                                          , silence: tli.silence
                                          }
                                      , playerPositions:
                                          sampleBy
                                            ( \ppos rinfo ->
                                                { p1x: ppos.p1x rinfo
                                                , p1y: ppos.p1y rinfo
                                                , p1z: ppos.p1z rinfo
                                                , p2x: ppos.p2x rinfo
                                                , p2y: ppos.p2y rinfo
                                                , p2z: ppos.p2z rinfo
                                                , p3x: ppos.p3x rinfo
                                                , p3y: ppos.p3y rinfo
                                                , p3z: ppos.p3z rinfo
                                                , p4x: ppos.p4x rinfo
                                                , p4y: ppos.p4y rinfo
                                                , p4z: ppos.p4z rinfo
                                                }
                                            )
                                            tli.playerPositions
                                            event.rateInfo

                                      , resizeE: tli.resizeE
                                      , rateE: event.rateInfo
                                      , initialDims: tli.initialDims
                                      , canvas: _
                                      }
                                  )
                            ]
                        )
                        []
                    ]
                , D.div
                    ( bang $ D.Style :=
                        "position: absolute; background-color: rgba(200,200,200,0.8);"
                    )
                    [ D.button
                        ( oneOf
                            [ bang $ D.Style :=
                                "padding:1.0rem;"
                            , ( oneOfMap
                                  (map (attr D.OnClick <<< cb <<< const))
                                  [ stopE <#>
                                      ( _ *> push.start unit
                                      )
                                  , startE <#> \_ -> do
                                      ctx <- context
                                      hk <- constant0Hack ctx
                                      ci <- setInterval 5000 do
                                        Ref.read tli.icid >>= traverse_
                                          (flip cancelIdleCallback tli.wdw)
                                        requestIdleCallback { timeout: 0 }
                                          ( do
                                              n <- unwrap <<< unInstant <$>
                                                now
                                              mp <- Map.toUnfoldable <$>
                                                Ref.read tli.unschedule
                                              let
                                                lr = span (fst >>> (_ < n)) mp
                                              foreachE lr.init snd
                                              Ref.write
                                                (Map.fromFoldable lr.rest)
                                                tli.unschedule
                                              pure unit
                                          )
                                          tli.wdw <#> Just >>= flip Ref.write tli.icid
                                      afE <- hot
                                        ( withACTime ctx animationFrame <#>
                                            _.acTime
                                        )
                                      withRate <-
                                        hot
                                          $ timeFromRate
                                              ( pure { rate: 1.0 }                                              )
                                              (Seconds >>> { real: _ } <$> afE.event)

                                      iu0 <- subscribe withRate.event push.rateInfo
                                      st <- run2 ctx (graph { basics: event.basicAudio })
                                      push.stop
                                        ( st *> hk *> clearInterval ci
                                            *> afE.unsubscribe
                                            *> iu0
                                            --  *> iu1
                                            *> withRate.unsubscribe
                                            *> close ctx
                                        )
                                  ]
                              )
                            ]
                        )
                        [ text $ oneOf
                            [ map (const "Turn off") stopE
                            , map (const "Turn on") startE
                            ]
                        ]
                    ]
                ]
        )
  )
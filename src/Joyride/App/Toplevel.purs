module Joyride.App.Toplevel where

import Prelude

import Control.Alt ((<|>))
import Data.Array (span)
import Data.DateTime.Instant (unInstant)
import Data.Foldable (oneOf, oneOfMap, traverse_)
import Data.Map as Map
import Data.Maybe (Maybe(..), maybe)
import Data.Newtype (unwrap)
import Data.Number (pi)
import Data.Time.Duration (Seconds(..))
import Data.Tuple (fst, snd)
import Deku.Attribute (attr, cb, (:=))
import Deku.Control (switcher, text, text_)
import Deku.Core (Nut, vbussed)
import Deku.DOM as D
import Effect (Effect, foreachE)
import Effect.Now (now)
import Effect.Ref as Ref
import Effect.Timer (clearInterval, setInterval)
import FRP.Behavior (Behavior, sampleBy, step)
import FRP.Behavior.Time (instant)
import FRP.Event (Event, bang, fromEvent, hot, subscribe)
import FRP.Event.AnimationFrame (animationFrame)
import FRP.Event.VBus (V)
import Foreign.Object as Object
import Joyride.Audio.Graph (graph)
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.FRP.Rate (timeFromRate)
import Joyride.FRP.Schedule (scheduleCf)
import Joyride.Model (Note, NoteFSM)
import Joyride.Visual.Animation (runThree)
import Joyride.Wags (AudibleEnd)
import Record (union)
import Rito.Color (color)
import Rito.THREE (ThreeStuff)
import Type.Proxy (Proxy(..))
import Types (Player, WindowDims)
import WAGS.Clock (withACTime)
import WAGS.Interpret (close, constant0Hack, context)
import WAGS.Math (calcSlope)
import WAGS.Run (run2)
import WAGS.WebAPI (BrowserAudioBuffer)
import Web.Event.Event (target)
import Web.HTML.HTMLCanvasElement as HTMLCanvasElement
import Web.HTML.HTMLInputElement (fromEventTarget, valueAsNumber)
import Web.HTML.Window (RequestIdleCallbackId, Window, cancelIdleCallback, requestIdleCallback)

twoPi = 2.0 * pi :: Number

type UIEvents = V
  ( start :: Unit
  , stop :: Effect Unit
  , slider :: Number
  , animationFrame :: Number
  , toAnimate :: Note
  , basic :: { audio :: AudibleEnd, startsAt :: Seconds }
  )

type ToplevelInfo =
  { loaded :: Event Boolean
  , threeStuff :: ThreeStuff
  , isMobile :: Boolean
  , lpsCallback :: Number -> Effect Unit -> Effect Unit
  , myPlayer :: Player
  , player2XBehavior :: Behavior (Number -> Number)
  , xPosB :: Behavior (Number -> Number)
  , resizeE :: Event WindowDims
  , initialDims :: WindowDims
  , noteScrollSpeed :: Number
  , silence :: BrowserAudioBuffer
  , icid :: Ref.Ref (Maybe RequestIdleCallbackId)
  , wdw :: Window
  , unschedule :: Ref.Ref (Map.Map Number (Effect Unit))
  , soundObj :: Ref.Ref (Object.Object BrowserAudioBuffer)
  , score :: NoteFSM
  }

toplevel :: ToplevelInfo -> Nut
toplevel
  { loaded
  , threeStuff
  , isMobile
  , lpsCallback
  , myPlayer
  , resizeE
  , player2XBehavior
  , xPosB
  , noteScrollSpeed
  , initialDims
  , icid
  , wdw
  , silence
  , unschedule
  , soundObj
  , score
  } =
  ( (fromEvent loaded <|> bang false) # switcher case _ of
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
                                      { threeStuff
                                      , isMobile
                                      , lowPriorityCb: lpsCallback
                                      , myPlayer
                                      , player2XBehavior: player2XBehavior <*> (map (unInstant >>> unwrap) instant)
                                      , resizeE: resizeE
                                      , animE: event.toAnimate
                                      , renderE: event.animationFrame
                                      , xPosB: xPosB <*> (map (unInstant >>> unwrap) instant)
                                      , initialDims
                                      , canvas: _
                                      }
                                  )
                            ]
                        )
                        []
                    ]
                , D.div
                    ( bang $ D.Style :=
                        "position: absolute; width:100%; background-color: rgba(200,200,200,0.8);"
                    )
                    [ D.input
                        ( oneOfMap bang
                            [ D.Xtype := "range"
                            , D.Min := "0"
                            , D.Max := "100"
                            , D.Step := "1"
                            , D.Value := "50"
                            , D.Style :=
                                "width: 100%; margin-top: 15px; margin-bottom: 15px;"
                            , D.OnInput := cb
                                ( traverse_
                                    (valueAsNumber >=> push.slider)
                                    <<< (=<<) fromEventTarget
                                    <<< target
                                )
                            ]
                        )
                        []
                    , D.button
                        ( oneOf
                            [ bang $ D.Style :=
                                "width:100%; padding:1.0rem;"
                            , ( oneOfMap
                                  (map (attr D.OnClick <<< cb <<< const))
                                  [ stopE <#>
                                      ( _ *> push.start unit
                                      )
                                  , startE <#> \_ -> do
                                      ctx <- context
                                      hk <- constant0Hack ctx
                                      ci <- setInterval 5000 do
                                        Ref.read icid >>= traverse_
                                          (flip cancelIdleCallback wdw)
                                        requestIdleCallback { timeout: 0 }
                                          ( do
                                              n <- unwrap <<< unInstant <$>
                                                now
                                              mp <- Map.toUnfoldable <$>
                                                Ref.read unschedule
                                              let
                                                lr = span (fst >>> (_ < n)) mp
                                              foreachE lr.init snd
                                              Ref.write
                                                (Map.fromFoldable lr.rest)
                                                unschedule
                                              pure unit
                                          )
                                          wdw <#> Just >>= flip Ref.write icid
                                      afE <- hot
                                        ( withACTime ctx animationFrame <#>
                                            _.acTime
                                        )
                                      let sounds = refToBehavior soundObj
                                      withRate <-
                                        hot
                                          $ timeFromRate
                                              ( { rate: _ } <$> step 1.0
                                                  ( map
                                                      ( calcSlope 0.0 0.75 100.0
                                                          1.25
                                                      )
                                                      event.slider
                                                  )
                                              )
                                              (Seconds >>> { real: _ } <$> afE.event)

                                      iu0 <- subscribe afE.event
                                        push.animationFrame

                                      iu1 <- subscribe
                                        ( scheduleCf score
                                            ( map
                                                ( \{ real, prevReal, adjusted, buffers } ->
                                                    { realTime: real
                                                    , adjustedTime: adjusted
                                                    , lookAheadInRealTime: maybe (Seconds 0.1) (\(Seconds pr) -> Seconds (2.0 * (unwrap real - pr))) prevReal
                                                    , buffers
                                                    , speed: noteScrollSpeed
                                                    , isMobile
                                                    , initialDims
                                                    , animationE: Seconds <$> afE.event
                                                    , resizeE: resizeE
                                                    , silence
                                                    , mkColor: color threeStuff.three
                                                    , pushBasic: push.basic
                                                    }
                                                )
                                                (sampleBy ({ buffers: _ } >>> union) sounds withRate.event)
                                            )
                                        )
                                        (flip foreachE push.toAnimate)
                                      st <- run2 ctx
                                        ( graph
                                            { lpsCallback
                                            , basics: event.basic
                                            }

                                        )
                                      push.stop
                                        ( st *> hk *> clearInterval ci
                                            *> afE.unsubscribe
                                            *> iu0
                                            *> iu1
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
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
import Data.Tuple (fst, snd)
import Deku.Attribute (attr, cb, (:=))
import Deku.Control (switcher, text, text_)
import Deku.Core (Nut, vbussed)
import Deku.DOM as D
import Effect (foreachE)
import Effect.Now (now)
import Effect.Ref as Ref
import Effect.Timer (clearInterval, setInterval)
import FRP.Behavior (step)
import FRP.Behavior.Time (instant)
import FRP.Event (bang, fromEvent, hot, keepLatest, subscribe)
import FRP.Event.AnimationFrame (animationFrame)
import Joyride.Audio.Graph (graph)
import Joyride.FRP.Animate (animate)
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.Visual.Animation (runThree)
import Type.Proxy (Proxy(..))
import Types (ToplevelInfo, UIEvents)
import WAGS.Clock (withACTime)
import WAGS.Interpret (close, constant0Hack, context)
import WAGS.Math (calcSlope)
import WAGS.Run (run2)
import Web.Event.Event (target)
import Web.HTML.HTMLCanvasElement as HTMLCanvasElement
import Web.HTML.HTMLInputElement (fromEventTarget, valueAsNumber)
import Web.HTML.Window (cancelIdleCallback, requestIdleCallback)

twoPi = 2.0 * pi :: Number

toplevel :: ToplevelInfo -> Nut
toplevel
  { loaded
  , threeStuff
  , isMobile
  , lowPriorityCb
  , maxColumns
  , myPlayer
  , resizeE
  , player2XBehavior
  , xPosB
  , initialDims
  , icid
  , wdw
  , unschedule
  , soundObj
  , offsetsToNoteColumns
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
                                      , lowPriorityCb
                                      , maxColumns
                                      , myPlayer
                                      , player2XBehavior: player2XBehavior <*> (map (unInstant >>> unwrap) instant)
                                      , resizeE: resizeE
                                      , animE: keepLatest $ map (oneOfMap bang)
                                          event.toAnimate
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
                                                Ref.read
                                                  unschedule
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
                                      animated <- hot
                                        ( animate (refToBehavior soundObj)
                                            ( step 1.0
                                                ( map
                                                    ( calcSlope 0.0 0.75 100.0
                                                        1.25
                                                    )
                                                    event.slider
                                                )
                                            )
                                            offsetsToNoteColumns
                                            afE.event
                                        )
                                      iu0 <- subscribe afE.event
                                        push.animationFrame
                                      iu1 <- subscribe animated.event
                                        push.toAnimate
                                      st <- run2 ctx
                                        ( graph
                                            lowPriorityCb
                                            animated.event
                                        )
                                      push.stop
                                        ( st *> hk *> clearInterval ci
                                            *> afE.unsubscribe
                                            *> iu0
                                            *> iu1
                                            *> animated.unsubscribe
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
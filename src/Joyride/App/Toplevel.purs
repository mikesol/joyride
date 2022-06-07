module Joyride.App.Toplevel where

import Prelude

import Control.Monad.Except (runExcept, throwError)
import Control.Plus (empty)
import Data.Array (span)
import Data.DateTime.Instant (unInstant)
import Data.Either (hush)
import Data.Foldable (foldl, oneOf, oneOfMap, traverse_)
import Data.Map as Map
import Data.Maybe (Maybe(..), isJust, maybe)
import Data.Newtype (over)
import Data.Number (pi)
import Data.Time.Duration (Milliseconds(..))
import Data.Traversable (traverse)
import Data.Tuple (Tuple(..), fst, snd)
import Deku.Attribute ((:=))
import Deku.Control (switcher, text_)
import Deku.Core (Nut, envy, vbussed)
import Deku.DOM as D
import Effect (Effect, foreachE)
import Effect.Class.Console as Log
import Effect.Now (now)
import Effect.Ref as Ref
import Effect.Timer (clearInterval, setInterval)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (Event, EventIO, bang, filterMap, fromEvent, hot, memoize, subscribe)
import FRP.Event.AnimationFrame (animationFrame)
import FRP.Event.Class (biSampleOn)
import FRP.Event.Time (withTime)
import FRP.Event.VBus (V)
import Foreign.Object as Object
import Joyride.App.Explainer (explainerPage)
import Joyride.App.GameHasStarted (gameHasStarted)
import Joyride.App.Loading (loadingPage)
import Joyride.App.RoomIsFull (roomIsFull)
import Joyride.Audio.Graph (graph)
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.FRP.Dedup (dedup)
import Joyride.FRP.Rate (timeFromRate)
import Joyride.FRP.SampleOnSubscribe (initializeWithEmpty)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.FRP.StartingWith (startingWith)
import Joyride.Visual.Animation (runThree)
import Joyride.Wags (AudibleChildEnd)
import Rito.Color (color)
import Rito.Core (ASceneful)
import Rito.Matrix4 as M4
import Type.Proxy (Proxy(..))
import Types (Beats(..), HitBasicMe, HitBasicOtherPlayer(..), HitBasicOverTheWire(..), MakeBasics, Negotiation(..), PlayerAction(..), PlayerPositionsF, RateInfo, RenderingInfo, Seconds(..), Success', WindowDims)
import WAGS.Clock (withACTime)
import WAGS.Interpret (close, constant0Hack, context)
import WAGS.Run (run2)
import WAGS.WebAPI (BrowserAudioBuffer)
import Web.DOM as Web.DOM
import Web.HTML.HTMLCanvasElement as HTMLCanvasElement
import Web.HTML.Window (RequestIdleCallbackId, Window, cancelIdleCallback, requestIdleCallback)

twoPi = 2.0 * pi :: Number

newtype Unsubscribe = Unsubscribe (Effect Unit)

type UIEvents = V
  ( ownTime :: Milliseconds
  , iAmReady :: Unsubscribe
  , rateInfo :: RateInfo
  , basicAudio :: Event AudibleChildEnd
  , renderElement :: Web.DOM.Element
  )

type ToplevelInfo =
  { loaded :: Event Boolean
  , negotiation :: Event Negotiation
  , isMobile :: Boolean
  , lpsCallback :: Milliseconds -> Effect Unit -> Effect Unit
  , playerPositions :: Behavior PlayerPositionsF
  , resizeE :: Event WindowDims
  , basicE :: forall lock payload. { | MakeBasics () } -> ASceneful lock payload
  , renderingInfo :: Behavior RenderingInfo
  , initialDims :: WindowDims
  , pushBasic :: EventIO HitBasicMe
  , debug :: Boolean
  , silence :: BrowserAudioBuffer
  , icid :: Ref.Ref (Maybe RequestIdleCallbackId)
  , wdw :: Window
  , unschedule :: Ref.Ref (Map.Map Milliseconds (Effect Unit))
  , soundObj :: Ref.Ref (Object.Object BrowserAudioBuffer)
  }

data TopLevelDisplay
  = TLExplainer
  | TLLoading
  | TLGameHasStarted
  | TLRoomIsFull
  | TLSuccess Success'

-- effect unit is unsub
data StartState
  = WaitingForMe
  | WaitingForOthers
  | Started Milliseconds

derive instance Eq StartState

instance Eq TopLevelDisplay where
  eq TLExplainer TLExplainer = true
  eq TLLoading TLLoading = true
  eq TLRoomIsFull TLRoomIsFull = true
  eq TLGameHasStarted TLGameHasStarted = true
  eq (TLSuccess _) (TLSuccess _) = true
  eq _ _ = false

toplevel :: ToplevelInfo -> Nut
toplevel tli =
  ( dedup
      ( map
          ( \{ loaded, negotiation } -> case loaded, negotiation of
              _, GetRulesOfGame -> TLExplainer
              false, _ -> TLLoading
              -- should never reach
              _, PageLoad -> TLLoading
              _, StartingNegotiation -> TLLoading
              _, RoomIsFull -> TLRoomIsFull
              _, GameHasStarted -> TLGameHasStarted
              _, RequestingPlayer -> TLLoading
              _, ReceivedPossibilities -> TLLoading
              _, ClaimFail -> TLRoomIsFull
              true, Success s -> TLSuccess s
          )
          ( biSampleOn
              (startingWith PageLoad $ fromEvent tli.negotiation)
              ( map { loaded: _, negotiation: _ }
                  (startingWith false $ fromEvent tli.loaded)
              )
          )
      )
  ) # switcher case _ of
    TLExplainer -> explainerPage
    TLLoading -> loadingPage
    TLRoomIsFull -> roomIsFull
    TLGameHasStarted -> gameHasStarted
    TLSuccess
      { player: myPlayer
      , textures
      , threeStuff
      , pubNubEvent
      , optIn: optIn'
      , optMeIn
      } ->
      ( vbussed (Proxy :: _ UIEvents) \push event ->
          do
            let
              optIn = biSampleOn (initializeWithEmpty event.ownTime) (optIn' <#> \oi ot -> maybe oi (\t -> Map.insert myPlayer (Just t) oi) ot)
              iAmReady m = isJust (join (Map.lookup myPlayer m))
              allAreReady m
                | Map.isEmpty m = Nothing
                | otherwise = map (foldl max (Milliseconds 0.0)) $ hush $ runExcept
                    ( m # traverse \v -> case v of
                        Nothing -> throwError unit
                        Just t -> pure t
                    )
              stopButton off = D.div
                (bang $ D.Class := "bg-slate-50")
                [ D.button
                    ( oneOf
                        [ bang $ D.Class := "p-4"
                        , bang $ D.OnClick := do
                            off
                        ]
                    )
                    [ text_ "Stop" ]
                ]
              startButton = D.div
                (bang $ D.Class := "bg-slate-50")
                [ D.button
                    ( oneOf
                        [ bang $ D.Class := "p-4"
                        , bang $ D.OnClick := do
                            ctx <- context
                            hk <- constant0Hack ctx
                            ci <- setInterval 5000 do
                              Ref.read tli.icid >>= traverse_
                                (flip cancelIdleCallback tli.wdw)
                              requestIdleCallback { timeout: 0 }
                                ( do
                                    n <- unInstant <$> now
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
                                    (pure { rate: 1.0 })
                                    (Seconds >>> { real: _ } <$> afE.event)

                            iu0 <- subscribe withRate.event push.rateInfo
                            st <- run2 ctx (graph { basics: event.basicAudio })
                            push.iAmReady
                              ( Unsubscribe
                                  ( st *> hk *> clearInterval ci
                                      *> afE.unsubscribe
                                      *> iu0
                                      --  *> iu1
                                      *> withRate.unsubscribe
                                      *> close ctx
                                  )
                              )
                            t <- unInstant <$> now
                            optMeIn t
                            push.ownTime t
                        ]
                    )
                    [ text_ "Play Joyride" ]
                ]
            D.div_
              [ D.div
                  (bang (D.Class := "absolute"))
                  [ D.canvas
                      ( oneOf
                          [ bang (D.Class := "absolute")
                          -- one gratuitous lookup as if all are ready then myPlayer
                          -- must be ready, but should be computationally fine
                          -- fireAndForget so that it only ever fires once
                          , fromEvent $ memoize
                              ( makeAnimatedStuff
                                  ( biSampleOn
                                      ( fireAndForget
                                          ( optIn # filterMap
                                              \m -> { startTime: _, myTime: _ } <$> allAreReady m <*> join (Map.lookup myPlayer m)
                                          )
                                      )
                                      (event.rateInfo <#> \ri { startTime, myTime } -> adjustRateInfoBasedOnActualStart myTime startTime ri)
                                  )
                              )
                              \animatedStuff ->
                                D.Self := HTMLCanvasElement.fromElement >>> traverse_
                                  ( runThree <<<
                                      { threeStuff: threeStuff
                                      , cssRendererElt: event.renderElement
                                      , isMobile: tli.isMobile
                                      , renderingInfo: tli.renderingInfo
                                      , lowPriorityCb: tli.lpsCallback
                                      , myPlayer
                                      , debug: tli.debug
                                      , textures
                                      , pushBasic: tli.pushBasic
                                      , basicE: \pushBasicVisualForLabel -> tli.basicE
                                          { initialDims: tli.initialDims
                                          , renderingInfo: tli.renderingInfo
                                          , textures
                                          , myPlayer
                                          , debug: tli.debug
                                          , notifications:
                                              { hitBasic: withTime pubNubEvent # filterMap
                                                  ( \{ value, time } -> case value of
                                                      HitBasic (HitBasicOverTheWire e) -> Just $ HitBasicOtherPlayer
                                                        { uniqueId: e.uniqueId
                                                        , logicalBeat: e.logicalBeat
                                                        , deltaBeats: e.deltaBeats
                                                        , hitAt: e.hitAt
                                                        , player: e.player
                                                        , issuedAt: unInstant time
                                                        }
                                                      _ -> Nothing
                                                  )
                                              }
                                          , resizeEvent: tli.resizeE
                                          , isMobile: tli.isMobile
                                          , lpsCallback: tli.lpsCallback
                                          , pushAudio: push.basicAudio
                                          , mkColor: color threeStuff.three
                                          , mkMatrix4: M4.set threeStuff.three
                                          , buffers: refToBehavior tli.soundObj
                                          , silence: tli.silence
                                          , animatedStuff
                                          , pushBasic: tli.pushBasic
                                          , pushBasicVisualForLabel
                                          }
                                      , animatedStuff
                                      , resizeE: tli.resizeE
                                      , initialDims: tli.initialDims
                                      , canvas: _
                                      }
                                  )
                          ]
                      )
                      []
                  , D.div (oneOfMap bang [ D.Class := "absolute pointer-events-none", D.Self := push.renderElement ]) []
                  ]
              -- on/off
              , D.div (bang $ D.Class := "w-screen h-screen flex flex-col bg-black")
                  [ D.div (bang $ D.Class := "grow")
                      -- fromEvent because optIn is effectful
                      [ fromEvent (biSampleOn (initializeWithEmpty event.iAmReady) (map Tuple optIn))
                          -- we theoretically don't need to dedup because
                          -- the button should never redraw once we've started
                          -- if there's flicker, dedup
                          # switcher \(Tuple oi usu) -> case usu of
                              Nothing -> envy empty
                              Just (Unsubscribe u)
                                | iAmReady oi -> stopButton u
                                | otherwise -> envy empty
                      ]
                  , let
                      frame mid = D.div (bang $ D.Class := "grow-0 flex flex-row")
                        [ D.div (bang $ D.Class := "grow") []
                        , D.div (bang $ D.Class := "z-0") [ mid ]
                        , D.div (bang $ D.Class := "grow") []
                        ]
                    in
                      ( fromEvent
                          ( dedup
                              ( optIn <#>
                                  \m -> case allAreReady m of
                                    Just x -> Started x
                                    Nothing
                                      | iAmReady m -> WaitingForOthers
                                      | otherwise -> WaitingForMe
                              )
                          )
                      )
                        # switcher case _ of
                            WaitingForMe -> frame startButton
                            WaitingForOthers -> frame (D.span (bang $ D.Class := "text-lg text-white") [ text_ "Waiting for others to join" ])
                            Started _ -> envy empty
                  , D.div (bang $ D.Class := "grow") []
                  ]
              ]
      )
  where
  makeAnimatedStuff rateInfo = sampleBy
    ( \ppos rinfo ->
        { rateInfo: rinfo
        , playerPositions:
            { p1x: ppos.p1x rinfo
            , p1y: ppos.p1y rinfo
            , p1z: ppos.p1z rinfo
            , p1p: ppos.p1p
            , p2x: ppos.p2x rinfo
            , p2y: ppos.p2y rinfo
            , p2z: ppos.p2z rinfo
            , p2p: ppos.p2p
            , p3x: ppos.p3x rinfo
            , p3y: ppos.p3y rinfo
            , p3z: ppos.p3z rinfo
            , p3p: ppos.p3p
            , p4x: ppos.p4x rinfo
            , p4y: ppos.p4y rinfo
            , p4z: ppos.p4z rinfo
            , p4p: ppos.p4p
            }
        }
    )
    tli.playerPositions
    rateInfo

  -- before we start, the rate will be 60 bps
  -- so we can treate time like beats
  adjustRateInfoBasedOnActualStart
    :: Milliseconds -> Milliseconds -> RateInfo -> RateInfo
  adjustRateInfoBasedOnActualStart (Milliseconds myTime) (Milliseconds startTime) rateInfo = do
    let offsetInSeconds = (startTime - myTime) / 1000.0
    rateInfo # \{ beats, epochTime, prevBeats, time, prevTime } ->
      { epochTime
      , time
      , prevTime
      , beats: over Beats (_ - offsetInSeconds) beats
      , prevBeats: case prevBeats of
          Nothing -> Nothing
          Just x -> Just $ over Beats (_ - offsetInSeconds) x
      }
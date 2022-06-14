module Joyride.App.Toplevel where

import Prelude

import Control.Monad.Except (runExcept, throwError)
import Control.Plus (empty)
import Data.Array (span)
import Data.DateTime.Instant (unInstant)
import Data.Either (hush)
import Data.Filterable (filter)
import Data.Foldable (foldl, oneOf, oneOfMap, traverse_)
import Data.Int (round)
import Data.Map as Map
import Data.Maybe (Maybe(..))
import Data.Newtype (over, unwrap)
import Data.Number (pi)
import Data.Time.Duration (Milliseconds(..))
import Data.Traversable (traverse)
import Data.Tuple (Tuple(..), fst, snd)
import Deku.Attribute ((:=))
import Deku.Control (switcher, text_)
import Deku.Core (Nut, envy, vbussed)
import Deku.DOM as D
import Deku.Listeners (click)
import Effect (Effect, foreachE)
import Effect.Aff (delay, launchAff_)
import Effect.Class (liftEffect)
import Effect.Now as LocalNow
import Effect.Ref as Ref
import Effect.Timer (clearInterval, setInterval)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (EventIO, Event, bang, filterMap, fromEvent, hot, memoize, subscribe)
import FRP.Event.AnimationFrame (animationFrame)
import FRP.Event.Class (biSampleOn)
import FRP.Event.VBus (V)
import Foreign.Object as Object
import Joyride.App.Clipboard (writeTextAff)
import Joyride.App.Explainer (explainerPage)
import Joyride.App.GameHasStarted (gameHasStarted)
import Joyride.App.Loading (loadingPage)
import Joyride.App.OrientationPermission (orientationPermissionPage)
import Joyride.App.RoomIsFull (roomIsFull)
import Joyride.App.SorryNeedPermission (sorryNeedPermissionPage)
import Joyride.Audio.Graph (graph)
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.FRP.Dedup (dedup)
import Joyride.FRP.Rate (timeFromRate)
import Joyride.FRP.SampleOnSubscribe (initializeWithEmpty)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.FRP.StartingWith (startingWith)
import Joyride.Random (randId')
import Joyride.Screenful (requestFullScreen)
import Joyride.Timing.CoordinatedNow (withCTime)
import Joyride.Visual.Animation (runThree)
import Joyride.Wags (AudibleChildEnd)
import Rito.Color (color)
import Rito.Core (ASceneful)
import Rito.CubeTexture as CTL
import Rito.Matrix4 as M4
import Rito.THREE (ThreeStuff)
import Safe.Coerce (coerce)
import Simple.JSON as JSON
import Type.Proxy (Proxy(..))
import Types (Beats(..), CubeTextures, HitBasicMe, HitBasicOtherPlayer(..), HitBasicOverTheWire(..), HitLeapMe, HitLeapOtherPlayer(..), HitLeapOverTheWire(..), HitLongMe, HitLongOtherPlayer(..), HitLongOverTheWire(..), InFlightGameInfo(..), JMilliseconds(..), KnownPlayers(..), MakeBasics, MakeLeaps, MakeLongs, Negotiation(..), Player(..), PlayerAction(..), PlayerPositionsF, RateInfo, ReleaseLongMe, ReleaseLongOtherPlayer(..), ReleaseLongOverTheWire(..), RenderingInfo, Seconds(..), StartStatus(..), Success', WindowDims)
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
  ( iAmReady :: Unsubscribe
  , rateInfo :: RateInfo
  , basicAudio :: Event AudibleChildEnd
  , leapAudio :: Event AudibleChildEnd
  , renderElement :: Web.DOM.Element
  , copiedToClipboard :: Boolean
  )

type ToplevelInfo =
  { loaded :: Event Boolean
  , negotiation :: Event Negotiation
  , isMobile :: Boolean
  , channelChooser :: String -> Effect Unit
  , lpsCallback :: JMilliseconds -> Effect Unit -> Effect Unit
  , playerPositions :: Behavior PlayerPositionsF
  , resizeE :: Event WindowDims
  , basicE :: forall lock payload. { | MakeBasics () } -> ASceneful lock payload
  , leapE :: forall lock payload. { | MakeLeaps () } -> ASceneful lock payload
  , longE :: forall lock payload. { | MakeLongs () } -> ASceneful lock payload
  , renderingInfo :: Behavior RenderingInfo
  , initialDims :: WindowDims
  , goHome :: Effect Unit
  , givePermission :: Boolean -> Effect Unit
  , pushBasic :: EventIO HitBasicMe
  , pushLeap :: EventIO HitLeapMe
  , pushHitLong :: EventIO HitLongMe
  , pushReleaseLong :: EventIO ReleaseLongMe
  , debug :: Boolean
  , silence :: BrowserAudioBuffer
  , icid :: Ref.Ref (Maybe RequestIdleCallbackId)
  , wdw :: Window
  , unschedule :: Ref.Ref (Map.Map JMilliseconds (Effect Unit))
  , soundObj :: Ref.Ref (Object.Object BrowserAudioBuffer)
  }

data TopLevelDisplay
  = TLNeedsOrientation
  | TLWillNotWorkWithoutOrientation
  | TLExplainer
      { cubeTextures :: CubeTextures CTL.CubeTexture
      , threeStuff :: ThreeStuff
      , cNow :: Effect Milliseconds
      }
  | TLLoading
  | TLGameHasStarted
  | TLRoomIsFull
  | TLSuccess Success'

-- effect unit is unsub
data StartState
  = WaitingForMe
  | WaitingForOthers
  | Started JMilliseconds

derive instance Eq StartState

instance Eq TopLevelDisplay where
  eq (TLExplainer _) (TLExplainer _) = true
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
              _, NeedsOrientation -> TLNeedsOrientation
              _, WillNotWorkWithoutOrientation -> TLWillNotWorkWithoutOrientation
              _, GetRulesOfGame s -> TLExplainer s
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
    TLNeedsOrientation -> orientationPermissionPage { givePermission: tli.givePermission }
    TLWillNotWorkWithoutOrientation -> sorryNeedPermissionPage
    TLExplainer { cubeTextures, threeStuff, cNow } -> explainerPage
      { click: do
          id <- randId' 6
          tli.channelChooser id
      , isMobile: tli.isMobile
      , cnow: cNow
      , resizeE: tli.resizeE
      , initialDims: tli.initialDims
      , threeStuff
      , cubeTextures
      }
    TLLoading -> loadingPage
    TLRoomIsFull -> roomIsFull
    TLGameHasStarted -> gameHasStarted
    TLSuccess
      { player: myPlayer
      , textures
      , cubeTextures
      , cNow
      , channelName
      , threeStuff
      , pubNubEvent
      , playerStatus
      , optMeIn
      } ->
      ( vbussed (Proxy :: _ UIEvents) \push event ->
          do
            let
              -- todo: need to initialize at higher level
              iAmReady :: KnownPlayers -> Boolean
              iAmReady (KnownPlayers m) = let lookup = Map.lookup myPlayer m in Just HasNotStartedYet /= lookup && Nothing /= lookup

              allAreReady :: KnownPlayers -> Maybe JMilliseconds
              allAreReady (KnownPlayers m)
                | Map.isEmpty m = Nothing
                | otherwise = map (foldl max (JMilliseconds 0.0)) $ hush $ runExcept
                    ( m # traverse \v -> case v of
                        HasNotStartedYet -> throwError unit
                        HasStarted (InFlightGameInfo t) -> pure t.startedAt
                    )
              -- stopButton :: Effect Unit -> Nut
              stopButton off = D.div
                (bang $ D.Class := "bg-slate-50")
                [ D.button
                    ( oneOf
                        [ bang $ D.Class := "pointer-events-auto p-1"
                        , bang $ D.OnClick := do
                            off
                        ]
                    )
                    [ text_ "Exit game" ]
                ]
              startButton = D.div (bang $ D.Class := "bg-slate-700")
                [ D.div (bang $ D.Class := "pointer-events-auto text-center text-white p-4")
                    [ let
                        url = "joyride.netlify.app/" <> channelName
                      in
                        D.p_
                          [ text_ ("Send this link to up to three people: " <> url)
                          , D.button
                              ( oneOf
                                  [ bang $ D.Class := "pointer-events-auto text-center bg-gray-800 hover:bg-gray-600 text-white mx-2 rounded"
                                  , click $ bang $ launchAff_ do
                                      liftEffect $ push.copiedToClipboard true
                                      writeTextAff ("https://" <> url)
                                      delay (Milliseconds 2000.0)
                                      liftEffect $ push.copiedToClipboard false
                                  ]
                              )
                              [ text_ "📋" ]
                          ]
                    , D.p_ [ text_ "When everyone has joined, or if you're playing alone, press Start!" ]
                    ]
                , D.div (bang $ D.Class := "w-full select-none")
                    [ D.button
                        ( oneOf
                            [ bang $ D.Class := "w-full pointer-events-auto text-center bg-gray-800 hover:bg-gray-600 text-white py-2 px-4 rounded"
                            , bang $ D.OnClick := do
                                launchAff_ requestFullScreen
                                ctx <- context
                                hk <- constant0Hack ctx
                                ci <- setInterval 5000 do
                                  Ref.read tli.icid >>= traverse_
                                    (flip cancelIdleCallback tli.wdw)
                                  requestIdleCallback { timeout: 0 }
                                    ( do
                                        n <- (unInstant >>> coerce) <$> LocalNow.now
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
                                    $ timeFromRate cNow
                                        (pure { rate: 1.0 })
                                        (Seconds >>> { real: _ } <$> afE.event)

                                iu0 <- subscribe withRate.event push.rateInfo
                                st <- run2 ctx (graph { basics: event.basicAudio, leaps: event.leapAudio })
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
                                t :: JMilliseconds <- coerce <$> cNow
                                optMeIn t
                            ]
                        )
                        [ text_ "Start" ]
                    ]
                ]
            D.div_
              [
                -- on/off
                D.div (bang $ D.Class := "z-10 pointer-events-none absolute w-screen h-screen flex flex-col")
                  [ D.div (bang $ D.Class := "grow flex flex-row")
                      -- fromEvent because playerStatus is effectful
                      [ D.div (bang $ D.Class := "grow-0")
                          [ D.div_
                              [ fromEvent (biSampleOn (initializeWithEmpty event.iAmReady) (map Tuple playerStatus))
                                  -- we theoretically don't need to dedup because
                                  -- the button should never redraw once we've started
                                  -- if there's flicker, dedup
                                  # switcher \(Tuple oi usu) -> case usu of
                                      Nothing -> makeJoined myPlayer oi
                                      Just (Unsubscribe _) -> makePoints myPlayer oi
                              ]
                          , D.div_
                              [ envy $ map stopButton
                                  ( fromEvent
                                      ( fireAndForget
                                          ( map
                                              ( \(Tuple oi usu) ->
                                                  ( case usu of
                                                      Nothing -> pure unit
                                                      Just (Unsubscribe u)
                                                        | iAmReady oi -> u
                                                        | otherwise -> pure unit
                                                  ) *> tli.goHome
                                              )
                                              (biSampleOn (initializeWithEmpty event.iAmReady) (map Tuple playerStatus))

                                          )
                                      )
                                  )
                              ]
                          ]
                      , D.div (bang $ D.Class := "grow") []
                      ]
                  , let
                      frame mid = D.div (bang $ D.Class := "flex flex-row")
                        [ D.div (bang $ D.Class := "grow") []
                        , D.div (bang $ D.Class := "grow-0") [ mid ]
                        , D.div (bang $ D.Class := "grow") []
                        ]
                    in
                      D.div_
                        [ ( fromEvent
                              ( dedup
                                  ( playerStatus <#>
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
                        ]
                  , D.div (bang $ D.Class := "grow") []
                  ]
              , D.div
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
                                          ( playerStatus # filterMap
                                              \m -> { startTime: _, myTime: _ } <$> allAreReady m <*>
                                                join
                                                  ( map
                                                      ( case _ of
                                                          HasNotStartedYet -> Nothing
                                                          HasStarted (InFlightGameInfo { startedAt }) -> Just startedAt
                                                      )
                                                      (Map.lookup myPlayer (unwrap m))
                                                  )
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
                                      , cubeTextures
                                      , pushBasic: tli.pushBasic
                                      , basicE: \pushBasicVisualForLabel -> tli.basicE
                                          { initialDims: tli.initialDims
                                          , renderingInfo: tli.renderingInfo
                                          , textures
                                          , cnow: cNow
                                          , myPlayer
                                          , debug: tli.debug
                                          , notifications:
                                              { hitBasic: withCTime cNow pubNubEvent # filterMap
                                                  ( \{ value, time } -> case value of
                                                      HitBasic (HitBasicOverTheWire e) -> Just $ HitBasicOtherPlayer
                                                        { uniqueId: e.uniqueId
                                                        , logicalBeat: e.logicalBeat
                                                        , deltaBeats: e.deltaBeats
                                                        , hitAt: e.hitAt
                                                        , player: e.player
                                                        , issuedAt: coerce time
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
                                      , leapE: \pushLeapVisualForLabel -> tli.leapE
                                          { initialDims: tli.initialDims
                                          , renderingInfo: tli.renderingInfo
                                          , textures
                                          , myPlayer
                                          , cnow: cNow
                                          , debug: tli.debug
                                          , notifications:
                                              { hitLeap: withCTime cNow pubNubEvent # filterMap
                                                  ( \{ value, time } -> case value of
                                                      HitLeap (HitLeapOverTheWire e) -> Just $ HitLeapOtherPlayer
                                                        { uniqueId: e.uniqueId
                                                        , hitAt: e.hitAt
                                                        , player: e.player
                                                        , oldPosition: e.oldPosition
                                                        , newPosition: e.newPosition
                                                        , issuedAt: coerce time
                                                        }
                                                      _ -> Nothing
                                                  )
                                              }
                                          , resizeEvent: tli.resizeE
                                          , isMobile: tli.isMobile
                                          , lpsCallback: tli.lpsCallback
                                          , pushAudio: push.leapAudio
                                          , mkColor: color threeStuff.three
                                          , mkMatrix4: M4.set threeStuff.three
                                          , buffers: refToBehavior tli.soundObj
                                          , silence: tli.silence
                                          , animatedStuff
                                          , pushLeap: tli.pushLeap
                                          , pushLeapVisualForLabel
                                          }
                                      , longE: \pushHitLongVisualForLabel pushReleaseLongVisualForLabel -> tli.longE
                                          { initialDims: tli.initialDims
                                          , renderingInfo: tli.renderingInfo
                                          , textures
                                          , myPlayer
                                          , cnow: cNow
                                          , debug: tli.debug
                                          , notifications:
                                              { hitLong: withCTime cNow pubNubEvent # filterMap
                                                  ( \{ value, time } -> case value of
                                                      HitLong (HitLongOverTheWire e) -> Just $ HitLongOtherPlayer
                                                        { uniqueId: e.uniqueId
                                                        , hitAt: e.hitAt
                                                        , player: e.player
                                                        , distance: e.distance
                                                        , issuedAt: coerce time
                                                        }
                                                      _ -> Nothing
                                                  )
                                              , releaseLong: withCTime cNow pubNubEvent # filterMap
                                                  ( \{ value, time } -> case value of
                                                      ReleaseLong (ReleaseLongOverTheWire e) -> Just $ ReleaseLongOtherPlayer
                                                        { uniqueId: e.uniqueId
                                                        , releasedAt: e.releasedAt
                                                        , pctConsumed: e.pctConsumed
                                                        , player: e.player
                                                        , hitAt: e.hitAt
                                                        , distance: e.distance
                                                        , issuedAt: coerce time
                                                        }
                                                      _ -> Nothing
                                                  )
                                              }
                                          , resizeEvent: tli.resizeE
                                          , isMobile: tli.isMobile
                                          , lpsCallback: tli.lpsCallback
                                          , pushAudio: push.leapAudio
                                          , mkColor: color threeStuff.three
                                          , mkMatrix4: M4.set threeStuff.three
                                          , buffers: refToBehavior tli.soundObj
                                          , silence: tli.silence
                                          , animatedStuff
                                          , pushHitLong: tli.pushHitLong
                                          , pushReleaseLong: tli.pushReleaseLong
                                          , pushHitLongVisualForLabel
                                          , pushReleaseLongVisualForLabel
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
              , D.div
                  ( oneOf
                      [ bang $ D.Class := "z-10 snakbar"
                      , filter not event.copiedToClipboard $> D.Class := "z-10 snakbar"
                      , filter identity event.copiedToClipboard $> D.Class := "z-10 snackbar show"
                      ]
                  )
                  [ text_ "Copied to clipboard" ]
              ]
      )
  where
  makeAnimatedStuff rateInfo = sampleBy
    ( \ppos rinfo ->
        { rateInfo: rinfo
        , playerPositions:
            { p1x: ppos.p1x rinfo
            , p1y: ppos.p1y
            , p1z: ppos.p1z
            , p1p: ppos.p1p
            , p2x: ppos.p2x rinfo
            , p2y: ppos.p2y
            , p2z: ppos.p2z
            , p2p: ppos.p2p
            , p3x: ppos.p3x rinfo
            , p3y: ppos.p3y
            , p3z: ppos.p3z
            , p3p: ppos.p3p
            , p4x: ppos.p4x rinfo
            , p4y: ppos.p4y
            , p4z: ppos.p4z
            , p4p: ppos.p4p
            }
        }
    )
    tli.playerPositions
    rateInfo

  -- before we start, the rate will be 60 bps
  -- so we can treate time like beats
  adjustRateInfoBasedOnActualStart
    :: JMilliseconds -> JMilliseconds -> RateInfo -> RateInfo
  adjustRateInfoBasedOnActualStart (JMilliseconds myTime) (JMilliseconds startTime) rateInfo = do
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

  makeJoined :: Player -> KnownPlayers -> Nut
  makeJoined mp (KnownPlayers m) = D.ul_
    ( map (\(Tuple p _) -> D.li_ [ D.span (bang $ D.Class := "text-white") [ text_ $ if p == mp then "You have joined!" else p2s p <> " has joined!" ] ]) $ Map.toUnfoldable m
    )


  makePoints :: Player -> KnownPlayers -> Nut
  makePoints mp (KnownPlayers m) = D.ul_
    ( map (\(Tuple p (InFlightGameInfo x)) -> D.li_ [ D.span (bang $ D.Class := "text-white") [ text_ $ (if p == mp then "You" else p2s p) <> ": " <> JSON.writeJSON (round (unwrap x.points + (-1.0) * unwrap x.penalties)) <> " Points" ] ])
        $ filterMap
            ( \(Tuple p k) -> case k of
                HasNotStartedYet -> Nothing
                HasStarted i -> Just (Tuple p i)
            )
        $ Map.toUnfoldable m
    )

p2s :: Player -> String
p2s Player1 = "Player 1"
p2s Player2 = "Player 2"
p2s Player3 = "Player 3"
p2s Player4 = "Player 4"
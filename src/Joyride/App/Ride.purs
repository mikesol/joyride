module Joyride.App.Ride where

import Prelude

import Bolson.Control (switcher)
import Bolson.Core (envy)
import Control.Alt ((<|>))
import Control.Monad.Except (runExcept, throwError)
import Control.Plus (empty)
import Data.Array (span)
import Data.DateTime.Instant (unInstant)
import Data.Either (hush)
import Data.Filterable (filter)
import Data.Foldable (foldl, for_, oneOf, oneOfMap, traverse_)
import Data.Int (round)
import Data.Map as Map
import Data.Maybe (Maybe(..))
import Data.Newtype (over, unwrap)
import Data.Number (pi)
import Data.Time.Duration (Milliseconds(..))
import Data.Traversable (traverse)
import Data.Tuple (Tuple(..), fst, snd)
import Deku.Attribute (cb, (:=))
import Deku.Attributes (klass_)
import Deku.Control (text_)
import Deku.Core (Domable, Nut, vbussed)
import Deku.DOM as D
import Deku.Listeners (click)
import Effect (Effect, foreachE)
import Effect.Aff (delay, launchAff_)
import Effect.Aff.AVar as AVar
import Effect.Class (liftEffect)
import Effect.Now as LocalNow
import Effect.Ref as Ref
import Effect.Timer (clearInterval, setInterval)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (Event, EventIO, filterMap, hot, memoize, subscribe)
import FRP.Event.AnimationFrame (animationFrame)
import FRP.Event.Class (biSampleOn)
import FRP.Event.VBus (V)
import Foreign.Object as Object
import Joyride.App.Clipboard (writeTextAff)
import Joyride.App.RequestIdleCallbackIsDefined (requestIdleCallbackIsDefined)
import Joyride.Audio.Graph.Ride (graph)
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.FRP.Dedup (dedup)
import Joyride.FRP.LowPrioritySchedule (schedulingIntervalInMS)
import Joyride.FRP.Rate (timeFromRate)
import Joyride.FRP.SampleJIT (sampleJIT)
import Joyride.FRP.SampleOnSubscribe (initializeWithEmpty)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.FullScreen as FullScreen
import Joyride.Ocarina (AudibleChildEnd)
import Joyride.Style (buttonCls)
import Joyride.Timing.CoordinatedNow (withCTime)
import Joyride.Visual.Animation.Ride (runThree)
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
import Types (Beats(..), Column, HitBasicMe, HitBasicOtherPlayer(..), HitBasicOverTheWire(..), HitLeapMe, HitLeapOtherPlayer(..), HitLeapOverTheWire(..), HitLongMe, HitLongOtherPlayer(..), HitLongOverTheWire(..), InFlightGameInfo(..), JMilliseconds(..), KnownPlayers(..), MakeBasics, MakeLeaps, MakeLongs, Player(..), PlayerAction(..), RateInfo, ReleaseLongMe, ReleaseLongOtherPlayer(..), ReleaseLongOverTheWire(..), RenderingInfo, Seconds(..), StartStatus(..), Success', WindowDims)
import Web.DOM as Web.DOM
import Web.Event.Event (target)
import Web.HTML.HTMLCanvasElement as HTMLCanvasElement
import Web.HTML.HTMLElement as HTMLElement
import Web.HTML.HTMLInputElement (fromEventTarget, value)
import Web.HTML.Window (RequestIdleCallbackId, Window, cancelIdleCallback, requestIdleCallback)

foreign import addressHead :: String

twoPi = 2.0 * pi :: Number

newtype Unsubscribe = Unsubscribe (Effect Unit)

type RideInfo r =
  { loaded :: Event Boolean
  , isMobile :: Boolean
  , lpsCallback :: JMilliseconds -> Effect Unit -> Effect Unit
  , resizeE :: Event WindowDims
  , columnPusher :: EventIO Column
  , renderingInfo :: Behavior RenderingInfo
  , goHome :: Effect Unit
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
  | r
  }

type RideScore =
  { basicE :: forall lock payload. { | MakeBasics () } -> ASceneful lock payload
  , leapE :: forall lock payload. { | MakeLeaps () } -> ASceneful lock payload
  , longE :: forall lock payload. { | MakeLongs () } -> ASceneful lock payload
  , baseFileOffsetInSeconds :: Number
  , bgtrack :: String
  }

-- effect unit is unsub
data StartState
  = WaitingForMe
  | WaitingForOthers
  | Started JMilliseconds

derive instance Eq StartState

type TextArea :: forall k. (Type -> k) -> Row k
type TextArea f = (requestName :: f Unit, changeText :: f String)

type Unlifted :: forall k. k -> k
type Unlifted a = a

type RideEvents = V
  ( iAmReady :: Unsubscribe
  , rateInfo :: RateInfo
  , pressedStart :: Boolean

  , basicAudio :: Event AudibleChildEnd
  , leapAudio :: Event AudibleChildEnd
  , render2DElement :: Web.DOM.Element
  , render3DElement :: Web.DOM.Element
  , copiedToClipboard :: Boolean
  )

ride
  :: forall r lock payload
   . RideInfo r
  -> RideScore
  -> Success'
  -> Domable lock payload
ride
  tli
  tscore
  success@
    { player: myPlayer
    , textures
    , cubeTextures
    , trackId
    , models
    , cNow
    , galaxyAttributes
    , shaders
    , playerName
    , channelName
    , initialDims
    , threeDI
    , pubNubEvent
    , playerStatus
    , optMeIn
    } =
  ( vbussed (Proxy :: _ RideEvents) \push event ->
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
          stopButton (off :: Effect Unit) = D.div (oneOf [ klass_ "mx-2" ])
            [ D.button
                ( oneOf
                    [ klass_ $ "pointer-events-auto p-1 " <> buttonCls
                    , pure $ D.OnClick := do
                        off
                    ]
                )
                [ text_ "Exit to main menu" ]
            ]
          startButton aStuff = do
            let
              callback toSample = oneOf
                [ klass_ $ buttonCls <> " pointer-events-auto"

                ----- IMPORTANT -----
                ----- IMPORTANT -----
                ----- IMPORTANT -----
                ----- IMPORTANT -----
                ----- IMPORTANT -----
                ----- IMPORTANT -----
                ----- IMPORTANT -----
                ----- IMPORTANT -----
                ----- IMPORTANT -----
                ----- IMPORTANT -----
                ----- IMPORTANT -----
                ----- IMPORTANT -----
                -- all of the audio context stuff MUST execute in effect as a DIRECT RESULT of the calling of this handler
                -- it CANNOT be in Aff, even an Aff that is theoretically in the same tick
                -- this will put it in some sort of defered structure like a setTimeout, which means that it won't start on iOS
                -- please move this comment if you move the bloc of code below and, if needed, copy it to other places where an audio context starts!!!!!
                , sampleJIT toSample
                    $ pure
                        \av -> D.OnClick := FullScreen.fullScreenFlow do
                          ricid <- requestIdleCallbackIsDefined
                          ctx <- context
                          hk <- constant0Hack ctx
                          ci <- setInterval schedulingIntervalInMS do
                            Ref.read tli.icid >>= traverse_
                              (flip cancelIdleCallback tli.wdw)
                            let
                              icb = do
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
                            if ricid then (requestIdleCallback { timeout: 0 } icb tli.wdw <#> Just >>= flip Ref.write tli.icid) else icb
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
                          st <- run2 ctx
                            ( graph
                                { basics: event.basicAudio
                                , baseFileOffsetInSeconds: tscore.baseFileOffsetInSeconds
                                , leaps: event.leapAudio
                                , rateInfo: _.rateInfo <$> aStuff
                                , buffers: refToBehavior tli.soundObj
                                , silence: tli.silence
                                , bgtrack: tscore.bgtrack
                                }
                            )
                          push.pressedStart true
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
                          launchAff_ do
                            -- requestFullScreen
                            nm <- AVar.read av
                            liftEffect do
                              t :: JMilliseconds <- coerce <$> cNow
                              optMeIn t nm
                ]
            vbussed (Proxy :: _ (V (TextArea Unlifted)))
              \nPush (nEvent :: { | TextArea (Event) }) ->
                let
                  requestName = pure false <|> (nEvent.requestName $> true)
                  changeText = pure Nothing <|> (Just <$> nEvent.changeText)
                  ___ = 0
                in
                  requestName # switcher case _ of
                    true -> D.div (klass_ "mb-4 select-auto")
                      [ D.input
                          ( oneOfMap pure
                              [ D.Xtype := "text"
                              , D.Placeholder := "My name"
                              , D.Class := "pointer-events-auto shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              , D.OnInput := cb \e -> for_
                                  ( target e
                                      >>= fromEventTarget
                                  )
                                  (value >=> nPush.changeText)
                              , D.Self := \e' -> do
                                  for_ (HTMLElement.fromElement e') \e -> do
                                    HTMLElement.focus e
                                    HTMLElement.click e
                              ]
                          )
                          []
                      , D.button
                          (callback (changeText))
                          [ text_ "Start" ]
                      ]
                    false -> D.div (klass_ "select-auto")
                      [ D.div (klass_ "pointer-events-auto text-center text-white p-4")
                          let
                            url = addressHead <> "/#/r/" <> channelName <> "/" <> trackId
                          in
                            [ D.p_
                                [ text_ ("Press the clipboard and get a link to this ride:")
                                ]
                            , D.button
                                ( oneOf
                                    [ klass_ "pointer-events-auto text-center text-xl bg-gray-800 hover:bg-gray-600 text-white mx-2 rounded"
                                    , click $ pure $ launchAff_ do
                                        liftEffect $ push.copiedToClipboard true
                                        writeTextAff url
                                        delay (Milliseconds 2000.0)
                                        liftEffect $ push.copiedToClipboard false
                                    ]
                                )
                                [ text_ "👉🏽 📋 👈🏽" ]
                            , D.p_ [ text_ "You can send the link to up to 3 people. When everyone has joined, or if you're playing alone, press Start!" ]
                            ]
                      , D.div (klass_ "flex w-full justify-center items-center")
                          $ case playerName of
                              Just _ ->
                                [ D.button
                                    (callback (changeText))
                                    [ text_ "Start" ]

                                ]
                              Nothing ->
                                [ D.button
                                    ( oneOf
                                        [ klass_ buttonCls
                                        , callback (changeText)
                                        ]
                                    )
                                    [ text_ "Start" ]

                                , D.button
                                    ( oneOf
                                        [ klass_ buttonCls
                                        , click $ pure $ nPush.requestName unit
                                        ]
                                    )
                                    [ text_ "Start with name" ]

                                ]
                      ]
        envy $ memoize
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
          \animatedStuff -> D.div_
            [
              -- on/off
              D.div (klass_ "z-20 pointer-events-none absolute w-screen h-screen grid grid-rows-3 grid-cols-3")
                [ D.div (klass_ "row-start-1 row-end-2 col-start-1 col-end-4")
                    -- fromEvent because playerStatus is effectful
                    [ D.div (klass_ "mx-2 mt-2")
                        [ (biSampleOn ((initializeWithEmpty event.iAmReady)) (map Tuple playerStatus))
                            -- we theoretically don't need to dedup because
                            -- the button should never redraw once we've started
                            -- if there's flicker, dedup
                            # switcher \(Tuple oi usu) -> case usu of
                                Nothing -> makeJoined myPlayer oi
                                Just (Unsubscribe _) -> makePoints myPlayer oi
                        ]
                    , D.div_
                        [ envy $ map stopButton
                            ( ( map
                                  ( \(Unsubscribe u) -> u *> tli.goHome
                                  )
                                  (event.iAmReady)
                              )
                            )
                        ]

                    ]
                ]
            , D.div_
                [ ( ( dedup
                        ( playerStatus <#>
                            \m -> case allAreReady m of
                              Just x -> Started x
                              Nothing
                                | iAmReady m -> WaitingForOthers
                                | otherwise -> WaitingForMe
                        )
                    )
                  ) #
                    let
                      frame x = D.div (klass_ "z-10 pointer-events-auto absolute w-screen h-screen grid grid-rows-6 grid-cols-8 bg-zinc-900") [ D.div (klass_ "col-start-2 col-end-8 row-start-3 row-end-5 bg-zinc-900") [ x ] ]
                    in
                      switcher case _ of
                        WaitingForMe -> frame (startButton animatedStuff)
                        WaitingForOthers -> frame (D.div (klass_ "text-center w-100") [D.span (klass_ "text-lg text-white") [ text_ "Waiting for others to join" ]])
                        Started _ -> envy empty
                ]

            , D.div
                (pure (D.Class := "absolute"))
                [ D.canvas
                    ( oneOf
                        [ pure (D.Class := "absolute")
                        -- one gratuitous lookup as if all are ready then myPlayer
                        -- must be ready, but should be computationally fine
                        -- fireAndForget so that it only ever fires once
                        , pure $ D.Self := HTMLCanvasElement.fromElement >>> traverse_
                            ( runThree <<<
                                { threeDI: threeDI
                                , css2DRendererElt: event.render2DElement
                                , css3DRendererElt: event.render3DElement
                                , isMobile: tli.isMobile
                                , pressedStart: event.pressedStart
                                , galaxyAttributes
                                , shaders
                                , renderingInfo: tli.renderingInfo
                                , lowPriorityCb: tli.lpsCallback
                                , myPlayer
                                , columnPusher: tli.columnPusher
                                , debug: tli.debug
                                , textures
                                , cubeTextures
                                , models
                                , pushBasic: tli.pushBasic
                                , basicE: \pushBasicVisualForLabel columnEventConstructor -> tscore.basicE
                                    { initialDims
                                    , columnEventConstructor
                                    , renderingInfo: tli.renderingInfo
                                    , textures
                                    , cnow: cNow
                                    , threeDI
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
                                    , mkColor: color threeDI.color
                                    , mkMatrix4: M4.set threeDI.matrix4
                                    , buffers: refToBehavior tli.soundObj
                                    , silence: tli.silence
                                    , animatedStuff
                                    , pushBasic: tli.pushBasic
                                    , pushBasicVisualForLabel
                                    }
                                , leapE: \pushLeapVisualForLabel columnEventConstructor -> tscore.leapE
                                    { initialDims
                                    , renderingInfo: tli.renderingInfo
                                    , textures
                                    , myPlayer
                                    , columnEventConstructor
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
                                    , mkColor: color threeDI.color
                                    , mkMatrix4: M4.set threeDI.matrix4
                                    , threeDI
                                    , buffers: refToBehavior tli.soundObj
                                    , silence: tli.silence
                                    , animatedStuff
                                    , pushLeap: tli.pushLeap
                                    , pushLeapVisualForLabel
                                    }
                                , longE: \pushHitLongVisualForLabel pushReleaseLongVisualForLabel columnEventConstructor -> tscore.longE
                                    { initialDims
                                    , renderingInfo: tli.renderingInfo
                                    , textures
                                    , columnEventConstructor
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
                                    , mkColor: color threeDI.color
                                    , mkMatrix4: M4.set threeDI.matrix4
                                    , threeDI
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
                                , initialDims
                                , canvas: _
                                }
                            )
                        ]
                    )
                    []
                , D.div (oneOfMap pure [ D.Class := "absolute pointer-events-none", D.Self := push.render2DElement ]) []
                , D.div (oneOfMap pure [ D.Class := "absolute pointer-events-none", D.Self := push.render3DElement ]) []
                ]
            , D.div
                ( oneOf
                    [ klass_ "z-1 snackbar text-white"
                    , filter not event.copiedToClipboard $> D.Class := "z-30 snackbar text-white"
                    , filter identity event.copiedToClipboard $> D.Class := "z-30 snackbar show text-white"
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
    success.playerPositions
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
    ( map
        ( \(Tuple p x) -> D.li_
            [ D.span (klass_ "text-white")
                [ text_ $
                    if p == mp then "You have joined!"
                    else
                      ( case x of
                          HasStarted (InFlightGameInfo x') -> case x'.name of
                            Just nm -> nm
                            Nothing -> p2s p
                          HasNotStartedYet -> p2s p
                      ) <> " has joined!"
                ]
            ]
        ) $ Map.toUnfoldable m
    )

  makePoints :: Player -> KnownPlayers -> Nut
  makePoints mp (KnownPlayers m) = D.ul_
    ( map
        ( \(Tuple p (InFlightGameInfo x)) -> D.li_
            [ D.span (klass_ "text-white")
                [ text_ $
                    ( if p == mp then
                        ( "You" <> case x.name of
                            Just nm -> " (" <> nm <> ")"
                            Nothing -> ""
                        )
                      else case x.name of
                        Just nm -> nm
                        Nothing -> p2s p
                    ) <> ": " <> JSON.writeJSON (round (unwrap x.points + (-1.0) * unwrap x.penalties)) <> " Points"
                ]
            ]
        )
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
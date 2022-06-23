module Joyride.App.Tutorial where

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
import Data.Newtype (over, unwrap)
import Data.Number (pi)
import Data.String as String
import Data.Time.Duration (Milliseconds(..))
import Data.Traversable (traverse)
import Data.Tuple (Tuple(..), fst, snd)
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
import Joyride.Audio.Graph.Tutorial (graph)
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.FRP.Rate (timeFromRate)
import Joyride.FRP.SampleOnSubscribe (initializeWithEmpty)
import Joyride.FRP.Schedule (fireAndForget)
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
import Web.DOM as Web.DOM
import Web.HTML.HTMLCanvasElement as HTMLCanvasElement
import Web.HTML.Window (RequestIdleCallbackId, Window, cancelIdleCallback, requestIdleCallback)

twoPi = 2.0 * pi :: Number

data FadeInstruction = FadeIn | FadeOut | FadeInOut | NoFade

data CenterState = Intro | Tiles | Leap | Long | End | Empty

newtype Unsubscribe = Unsubscribe (Effect Unit)

type TutorialInfo r =
  { loaded :: Event Boolean
  , isMobile :: Boolean
  , lpsCallback :: JMilliseconds -> Effect Unit -> Effect Unit
  , playerPositions :: Behavior PlayerPositionsF
  , resizeE :: Event WindowDims
  , basicE :: forall lock payload. { | MakeBasics () } -> ASceneful lock payload
  , leapE :: forall lock payload. { | MakeLeaps () } -> ASceneful lock payload
  , longE :: forall lock payload. { | MakeLongs () } -> ASceneful lock payload
  , renderingInfo :: Behavior RenderingInfo
  , initialDims :: WindowDims
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

type TutorialEvents = V
  ( iAmReady :: Unsubscribe
  , rateInfo :: RateInfo
  , basicAudio :: Event AudibleChildEnd
  , leapAudio :: Event AudibleChildEnd
  , render2DElement :: Web.DOM.Element
  , render3DElement :: Web.DOM.Element
  , tutorialCenterState :: CenterState
  )

tutorial
  :: forall r s m lock payload
   . Korok s m
  => TutorialInfo r
  -> WantsTutorial'
  -> Domable m lock payload
tutorial
  tli
  { player: myPlayer
  , textures
  , cubeTextures
  , cNow
  , galaxyAttributes
  , shaders
  , threeDI
  , playerStatus
  , optMeIn
  } =
  ( vbussed (Proxy :: _ TutorialEvents) \push event ->
      do
        let

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
          startButton aStuff = do
            let
              startCallback =
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
                do
                  ricid <- requestIdleCallbackIsDefined
                  ctx <- context
                  hk <- constant0Hack ctx
                  ci <- setInterval 5000 do
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
                        , leaps: event.leapAudio
                        , rateInfo: _.rateInfo <$> aStuff
                        , buffers: refToBehavior tli.soundObj
                        , silence: tli.silence
                        }
                    )
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
            tutorialCenterMatter (bang Intro <|> event.tutorialCenterState) push.tutorialCenterState { startCallback }
        envy $ fromEvent $ memoize
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
              D.div (bang $ D.Class := "z-10 pointer-events-none absolute w-screen h-screen grid grid-rows-6 grid-cols-6")
                [ D.div (bang $ D.Class := "row-start-1 row-end-3 col-start-1 col-end-3")
                    -- fromEvent because playerStatus is effectful

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
                                ( map
                                    ( \(Unsubscribe u) -> u *> tli.goHome
                                    )
                                    (event.iAmReady)
                                )
                            )
                        ]
                    ]
                , startButton animatedStuff
                ]
            , D.div
                (bang (D.Class := "absolute"))
                [ D.canvas
                    ( oneOf
                        [ bang (D.Class := "absolute")
                        -- one gratuitous lookup as if all are ready then myPlayer
                        -- must be ready, but should be computationally fine
                        -- fireAndForget so that it only ever fires once
                        , bang $ D.Self := HTMLCanvasElement.fromElement >>> traverse_
                            ( runThree <<<
                                { threeDI: threeDI
                                , css2DRendererElt: event.render2DElement
                                , css3DRendererElt: event.render3DElement
                                , isMobile: tli.isMobile
                                , galaxyAttributes
                                , shaders
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
                                    , threeDI
                                    , myPlayer
                                    , debug: tli.debug
                                    , notifications: { hitBasic: empty }
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
                                , leapE: \pushLeapVisualForLabel -> tli.leapE
                                    { initialDims: tli.initialDims
                                    , renderingInfo: tli.renderingInfo
                                    , textures
                                    , myPlayer
                                    , cnow: cNow
                                    , debug: tli.debug
                                    , notifications: { hitLeap: empty }
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
                                , longE: \pushHitLongVisualForLabel pushReleaseLongVisualForLabel -> tli.longE
                                    { initialDims: tli.initialDims
                                    , renderingInfo: tli.renderingInfo
                                    , textures
                                    , myPlayer
                                    , cnow: cNow
                                    , debug: tli.debug
                                    , notifications:
                                        { hitLong: empty
                                        , releaseLong: empty
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
                                , initialDims: tli.initialDims
                                , canvas: _
                                }
                            )
                        ]
                    )
                    []
                , D.div (oneOfMap bang [ D.Class := "absolute pointer-events-none", D.Self := push.render2DElement ]) []
                , D.div (oneOfMap bang [ D.Class := "absolute pointer-events-none", D.Self := push.render3DElement ]) []
                ]
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

  tutorialCenterMatter currentState pushCurrentState { startCallback } = currentState # switcher \cs -> case cs of
    Intro -> tutorialCenterMatterFrame "Welcome to Joyride!" Nothing "Start Tutorial" FadeOut
      ( startCallback *> launchAff_
          ( delay (Milliseconds 4000.0)
              *> liftEffect (pushCurrentState Tiles)
          )
      )
      pushCurrentState
    Tiles -> tutorialCenterMatterFrame "Tiles!" (Just "Something about tiles") "Next >" FadeInOut
      ( launchAff_
          ( delay (Milliseconds 10000.0)
              *> liftEffect (pushCurrentState Leap)
          )
      )
      pushCurrentState
    Leap -> tutorialCenterMatterFrame "Leap" (Just "Something about leap") "Next >" FadeInOut
      ( launchAff_
          ( delay (Milliseconds 10000.0)
              *> liftEffect (pushCurrentState Long)
          )
      )
      pushCurrentState
    Long -> tutorialCenterMatterFrame "Looonngg" (Just "Something about long") "Next >" FadeInOut
      ( launchAff_
          ( delay (Milliseconds 10000.0)
              *> liftEffect (pushCurrentState End)
          )
      )
      pushCurrentState
    End -> tutorialCenterMatterFrame "That's it!" (Just "You rock.") "Home >" FadeInOut
      (mempty)
      pushCurrentState
    Empty -> envy empty

  tutorialFadeInAnimation = "tutorial-fade-in-animation"
  tutorialFadeOutAnimation = "tutorial-fade-out-animation"
  replaceFadeInWithFadeOut = ((if _ then _ else _) <$> String.contains (String.Pattern tutorialFadeInAnimation) <*> String.replace (String.Pattern tutorialFadeInAnimation) (String.Replacement (tutorialFadeOutAnimation <> space <> "opacity-0 ")) <*> append (tutorialFadeOutAnimation <> space <> "opacity-0 "))
  space = " "

  tutorialCenterMatterFrame hd txt action fade cb pcenter = bussed \setFadeOut fadeOut' -> do
    let
      fadeOut = bang identity <|> fadeOut'
    D.div
      ( fadeOut <#> \f ->
          D.Class :=
            ( f
                ( case fade of
                    FadeIn -> tutorialFadeInAnimation <> space
                    FadeInOut -> tutorialFadeInAnimation <> space
                    _ -> ""
                ) <> "select-auto justify-self-center self-center row-start-2 row-end-4 col-start-3 col-end-5"
            )
      )
      ( [ D.div
            (bang $ D.Class := "pointer-events-auto text-center p-4 " <> headerCls)
            [ D.p_ [ text_ hd ]
            ]
        ]
          <>
            ( case txt of
                Just x ->
                  [ D.div
                      (bang $ D.Class := "pointer-events-auto text-center text-white p-4")
                      [ D.p_ [ text_ x ]
                      ]
                  ]
                Nothing -> []
            )
          <>
            [ D.div (bang $ D.Class := "flex w-full justify-center items-center") [D.button
                ( oneOf
                    [ bang $ D.Class := buttonCls <> " pointer-events-auto"
                    , bang $
                        D.OnClick :=
                          let
                            goodbye = pcenter Empty
                            fout = setFadeOut replaceFadeInWithFadeOut *> launchAff_ (delay (Milliseconds 1500.0) *> liftEffect goodbye)
                          in
                            ( ( case fade of
                                  FadeOut -> fout
                                  FadeInOut -> fout
                                  _ -> goodbye
                              ) *> cb
                            )
                    ]
                )
                [ text_ action ]]
            ]
      )

  makeJoined :: Player -> KnownPlayers -> Nut
  makeJoined mp (KnownPlayers m) = D.ul_
    ( map
        ( \(Tuple p x) -> D.li_
            [ D.span (bang $ D.Class := "text-white")
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
            [ D.span (bang $ D.Class := "text-white")
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
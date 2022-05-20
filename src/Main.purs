module Main where

import Prelude

import BMS.Parser (bms)
import BMS.Timing (gatherAll, noteOffsets)
import BMS.Types (Column(..), Note(..), Offset(..))
import Bolson.Core (Child(..), envy)
import Control.Alt ((<|>))
import Control.Parallel (parTraverse)
import Control.Plus (empty)
import Data.Array (span)
import Data.Array as Array
import Data.Array.NonEmpty as NEA
import Data.Compactable (compact)
import Data.DateTime.Instant (unInstant)
import Data.Foldable (fold, foldl, oneOf, oneOfMap, traverse_)
import Data.FunctorWithIndex (mapWithIndex)
import Data.Int as Int
import Data.Lens (_1, over)
import Data.List (List(..), drop, nub, null, take)
import Data.List as DL
import Data.Map (SemigroupMap(..))
import Data.Map as Map
import Data.Maybe (Maybe(..), fromMaybe, maybe)
import Data.Newtype (unwrap)
import Data.Number (pi, pow)
import Data.String as String
import Data.Traversable (sequence)
import Data.Tuple (fst, snd)
import Data.Tuple.Nested (type (/\), (/\))
import Data.Typelevel.Num (D2)
import Deku.Attribute (attr, cb, (:=))
import Deku.Control (switcher, text, text_)
import Deku.DOM as D
import Deku.Toplevel (runInBody)
import Effect (Effect, foreachE)
import Effect.Aff (Aff, error, forkAff, launchAff_, throwError)
import Effect.Class (liftEffect)
import Effect.Class.Console as Log
import Effect.Now (now)
import Effect.Random as Random
import Effect.Ref (new)
import Effect.Ref as Ref
import Effect.Timer (clearInterval, setInterval)
import FRP.Behavior (Behavior, behavior, sampleBy, step)
import FRP.Behavior.Time (instant)
import FRP.Event (Event, bang, bus, create, filterMap, hot, keepLatest, makeEvent, mapAccum, subscribe)
import FRP.Event as Event
import FRP.Event.AnimationFrame (animationFrame)
import FRP.Event.VBus (V, vbus)
import Foreign (Foreign)
import Foreign.Object as Object
import Rito.Cameras.PerspectiveCamera (defaultOrbitControls, perspectiveCamera)
import Rito.Color (RGB(..))
import Rito.Core (OrbitControls(..), toScene)
import Rito.Geometries.Box (box)
import Rito.Lights.PointLight (pointLight)
import Rito.Materials.MeshBasicMaterial (meshBasicMaterial)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.Mesh (mesh)
import Rito.Properties (aspect, color, onMouseDown, onTouchStart, target) as P
import Rito.Properties (positionX, positionY, positionZ, render, scaleX, scaleY, scaleZ, size)
import Rito.Renderers.WebGL (webGLRenderer)
import Rito.Run as Rito.Run
import Rito.Scene (scene)
import Rito.Vector3 (vector3)
import Simple.JSON as JSON
import Type.Proxy (Proxy(..))
import WAGS.Clock (withACTime)
import WAGS.Control (gain_, playBuf)
import WAGS.Core (Audible, dyn, silence, sound)
import WAGS.Interpret (close, constant0Hack, context, decodeAudioDataFromUri)
import WAGS.Math (calcSlope)
import WAGS.Properties (onOff) as P
import WAGS.Run (run2)
import WAGS.WebAPI (AudioContext, BrowserAudioBuffer)
import Web.Event.Event (EventType(..), target)
import Web.Event.EventTarget (addEventListener, eventListener)
import Web.HTML (window)
import Web.HTML.HTMLCanvasElement (HTMLCanvasElement)
import Web.HTML.HTMLCanvasElement as HTMLCanvasElement
import Web.HTML.HTMLInputElement (fromEventTarget, valueAsNumber)
import Web.HTML.Window (cancelIdleCallback, innerHeight, innerWidth, requestIdleCallback, toEventTarget)

twoPi = 2.0 * pi :: Number
type Span = { s :: Int, n :: Int, d :: Int }
type Hap = { part :: { begin :: Span, end :: Span }, value :: Foreign }

data Cycle

queryArc :: Cycle -> Number -> Number -> Array Hap
queryArc _ _ _ = []

type StartStop = V (start :: Unit, stop :: Effect Unit)
type CanvasInfo = { x :: Number, y :: Number } /\ Number
type UIEvents = V
  ( startStop :: StartStop
  , slider :: Number
  , animationFrame :: Number
  , toAnimate :: Animated
  )

speed = 4.0 :: Number

runThree
  :: Boolean
  -> (Number -> Effect Unit -> Effect Unit)
  -> Int
  -> Event { iw :: Number, ih :: Number }
  -> Event AnimatedS
  -> Event Number
  -> { iw :: Number, ih :: Number }
  -> HTMLCanvasElement
  -> Effect Unit
runThree ete lps pcMax resizeE e afE iwih canvas = do
  _ <- Rito.Run.run
    ( webGLRenderer
        ( scene empty
            [
              -- bar
              toScene $ mesh (box {} empty)
                ( meshStandardMaterial
                    { color: RGB 1.0 1.0 1.0
                    }
                    empty
                )
                ( oneOf
                    [ bang (positionX 0.0)
                    , bang (positionY (-1.0))
                    , positionZ <$>
                        (map (negate >>> mul speed >>> add 0.1) afE)
                    , bang (scaleX 10.0)
                    , bang (scaleY 0.02)
                    , bang (scaleZ 0.03)
                    ]
                )
            -- light
            , toScene $ pointLight {}
                ( oneOf
                    [ bang (positionX 0.0)
                    , bang (positionY 0.0)
                    , positionZ <$>
                        (map (negate >>> mul speed >>> add 0.1) afE)
                    ]
                )
            -- notes
            , toScene $ dyn $
                map
                  ( \itm -> case itm.column of
                      BGMColumn _ -> empty

                      PlayColumn x ->
                        let
                          xr = Int.toNumber x /
                            Int.toNumber pcMax
                        in
                          ( ( bang
                                ( Insert
                                    $ envy
                                    $ bus \setCol col -> mesh
                                        (box {} empty)
                                        ( meshBasicMaterial
                                            { color: RGB 1.0 1.0 1.0 }
                                            (col <#> P.color)
                                        )
                                        ( keepLatest $ (bang iwih <|> resizeE) <#> \i ->
                                            let
                                              ratio = i.iw / i.ih
                                            in
                                              oneOfMap bang
                                                [ positionX
                                                    ( (xr - 0.5) * 2.0 * ratio
                                                    )
                                                , positionY (-1.0)
                                                , positionZ
                                                    (-1.0 * speed * itm.time - 0.25)
                                                , scaleX (0.5 * ratio)
                                                , scaleY 0.04
                                                , scaleZ 0.4
                                                , if ete then P.onTouchStart \_ -> setCol
                                                    (RGB 0.1 0.8 0.6)
                                                  else P.onMouseDown \_ -> setCol
                                                    (RGB 0.1 0.8 0.6)
                                                ]
                                        )
                                )
                            )
                              <|>
                                ( lowPrioritySchedule lps
                                    (itm.startsAt + 1000.0)
                                    (bang Remove)
                                )
                          )
                  )
                  e
            ]
        )
        ( perspectiveCamera
            { fov: 75.0
            , aspect: iwih.iw / iwih.ih
            , near: 0.1
            , far: 100.0
            , orbitControls: OrbitControls (defaultOrbitControls canvas)
            }
            ( oneOf
                [ bang (positionX 0.0)
                , bang (positionY 0.0)
                , positionZ <$> (map (negate >>> mul speed >>> add 2.0) afE)
                , afE <#> \t -> P.target $ vector3
                    { x: 0.0, y: 0.0, z: t * -1.0 * speed - 2.0 }
                , resizeE <#> \i -> P.aspect (i.iw / i.ih)
                ]
            )
        )
        { canvas }
        ( oneOf
            [ bang (size { width: iwih.iw, height: iwih.ih })
            , bang render
            , afE $> render
            , resizeE <#> \i -> size { width: i.iw, height: i.ih }
            ]
        )
    )
  pure unit

lowPrioritySchedule
  :: (Number -> Effect Unit -> Effect Unit) -> Number -> Event ~> Event
lowPrioritySchedule f n e = makeEvent \k -> do
  void $ subscribe e \i ->
    f n (k i)
  pure (pure unit)

type Animated = NEA.NonEmptyArray
  { startsAt :: Number
  , time :: Number
  , column :: Column
  , buffer :: BrowserAudioBuffer
  }

type AnimatedS =
  { startsAt :: Number
  , time :: Number
  , buffer :: BrowserAudioBuffer
  , column :: Column
  }

animate
  :: Behavior (Object.Object BrowserAudioBuffer)
  -> Behavior Number
  -> Map.Map Offset (List (Column /\ Note))
  -> Event Number
  -> Event Animated
animate babB clengthB offsetMap afE = compact
  $ map (NEA.fromArray <<< Array.fromFoldable)
  $
    ( (map <<< filterMap)
        ( \{ time, buffer, startsAt, column } -> case buffer of
            Just bf -> Just $ { time, buffer: bf, startsAt, column }
            Nothing -> Nothing
        )
    )
  $ mapAccum
      ( \{ behaviors: { clength, bab, tnow }, acTime } { writeAdj, prevACTime, prevAdjTime } -> do
          let prevAC = fromMaybe 0.0 prevACTime
          let prevAJ = fromMaybe 0.0 prevAdjTime
          let gap = acTime - prevAC
          let adjGap = gap / clength
          let adjTime = adjGap + prevAJ
          let lookAhead = 0.3 -- 1 beat
          let
            f wa =
              if wa < adjTime + lookAhead then
                ( let
                    wa1 = wa + 1.0
                    q /\ r = f wa1
                  in
                    q
                      /\
                        ( Cons
                            ( let
                                haps = Map.submap (Just $ Offset wa)
                                  (Just $ Offset wa1)
                                  offsetMap
                              in
                                join $ Map.values $ mapWithIndex
                                  ( \(Offset offset) -> map
                                      \(c /\ Note n) ->
                                        { startsAt: unwrap $ unInstant tnow
                                        , buffer: Object.lookup n bab
                                        , column: c
                                        , time:
                                            if prevAJ == 0.0 then offset
                                            else calcSlope prevAJ prevAC adjTime
                                              acTime
                                              offset
                                        }
                                  )
                                  haps
                            )
                            r
                        )
                )
              else wa /\ Nil
          let w /\ a = f writeAdj
          { writeAdj: w, prevACTime: Just acTime, prevAdjTime: Just adjTime } /\
            join a
      )
      ( sampleBy { behaviors: _, acTime: _ }
          ({ clength: _, bab: _, tnow: _ } <$> clengthB <*> babB <*> instant)
          (afE)
      )
      { writeAdj: 0.0, prevACTime: Nothing, prevAdjTime: Nothing }

midi2cps :: Int -> Number
midi2cps i = 440.0 * (2.0 `pow` (((Int.toNumber i) - 69.0) / 12.0))

graph
  :: forall lock payload
   . (Number -> Effect Unit -> Effect Unit)
  -> Event Animated
  -> Array (Audible D2 lock payload)
graph lps e =
  [ gain_ 1.0
      [ dyn $
          map
            ( \nea ->
                ( ( bang
                      ( sound
                          ( gain_ 1.0
                              ( NEA.toArray $ map
                                  ( \{ time, buffer } -> gain_ 1.0
                                      [ playBuf
                                          buffer
                                          (bang (P.onOff time))
                                      ]
                                  )
                                  nea
                              )
                          )
                      )
                  )
                    <|>
                      ( lowPrioritySchedule lps
                          ((NEA.last nea).startsAt + 10000.0)
                          (bang silence)
                      )
                )
            )
            e
      ]
  ]

foreign import emitsTouchEvents :: Effect Boolean

dlInChunks
  :: Object.Object String
  -> Int
  -> List (Note /\ String)
  -> AudioContext
  -> Ref.Ref (Object.Object BrowserAudioBuffer)
  -> Aff Unit
dlInChunks silentRoom i l ac rf = go i ixd
  where
  ixd = mapWithIndex (/\) l
  go a b = do
    let { init, rest } = DL.span (fst >>> (_ < a)) b
    o <- parTraverse
      ( sequence <<< map
          ( maybe (throwError $ error "Could not download file") (decodeAudioDataFromUri ac) <<< (flip Object.lookup silentRoom) <<<
              String.replace (String.Pattern ".wav") (String.Replacement "")
          )
      )
      (map (over _1 unwrap <<< snd) init)
    let asObj = Object.fromFoldable o
    liftEffect $ Ref.modify_ (Object.union asObj) rf
    when (not $ null rest) do
      go (a + i) rest

r2b :: Ref.Ref ~> Behavior
r2b r = behavior \e -> makeEvent \k -> subscribe e \f -> Ref.read r >>=
  (k <<< f)

main :: { bme01 :: String } -> Object.Object String -> Effect Unit
main { bme01 } silentRoom = launchAff_ do
  w <- liftEffect $ window
  resizeE <- liftEffect create
  resizeListener <- liftEffect $ eventListener \_ -> do
    iw <- liftEffect $ Int.toNumber <$> innerWidth w
    ih <- liftEffect $ Int.toNumber <$> innerHeight w
    resizeE.push { iw, ih }
  liftEffect $ addEventListener (EventType "resize") resizeListener true (toEventTarget w)
  ete <- liftEffect $ emitsTouchEvents
  iw <- liftEffect $ Int.toNumber <$> innerWidth w
  ih <- liftEffect $ Int.toNumber <$> innerHeight w
  soundObj <- liftEffect $ Ref.new Object.empty
  icid <- liftEffect $ new Nothing
  loaded <- liftEffect $ Event.create
  unschedule <- liftEffect $ new Map.empty
  ctx' <- liftEffect $ context
  let
    bmsRes = bms bme01
    info = gatherAll bmsRes
    noffsets = noteOffsets info

    -- list of notes in the order we need them
    folded :: Map.Map Offset (List (Column /\ Note))
    folded = unwrap
      $ fold
      $ map SemigroupMap
      $ (map <<< map) pure
      $ map (\(a /\ b) -> map (\c -> a /\ c) b)
      $ (Map.toUnfoldable :: _ -> List _) noffsets

    pcMax :: Int
    pcMax = foldl
      ( foldl
          ( \b (c /\ _) -> case c of
              PlayColumn i -> max b i
              _ -> b
          )
      )
      0
      folded

    n2o :: List (Note /\ String)
    n2o = compact
      $ map (sequence <<< ((/\) <*> flip Map.lookup info.headers.wavs))
      $ nub
      $ map snd
      $ join
      $ Map.values
      $ folded
  let
    unsched k v = do
      n <- Random.random
      Ref.modify_ (Map.insert (k + (n * 0.25)) v) unschedule

  Log.info $ JSON.writeJSON
    ( ( map
          ( \((Offset a) /\ b) ->
              { o: a
              , n: Array.fromFoldable $ map
                  (\(x /\ y) -> { col: show x, nt: unwrap y })
                  b
              }
          )
          :: _ -> Array _
      ) $ Map.toUnfoldable folded
    )
  -- _ <- never
  -- we just let this run & never kill it
  let n2oh = take 300 n2o
  let n2ot = drop 300 n2o
  _ <- forkAff do
    dlInChunks silentRoom 100 n2oh ctx' soundObj
    liftEffect $ loaded.push true
    dlInChunks silentRoom 100 n2ot ctx' soundObj
  liftEffect $ runInBody
    ( (loaded.event <|> bang false) # switcher case _ of
        false -> D.div_
          [ D.h1_ [ text_ "Loading (should take less than 10s)" ] ]
        true ->
          ( envy $ vbus (Proxy :: _ UIEvents) \push event ->
              do
                let
                  startE = bang unit <|> event.startStop.start
                  stopE = event.startStop.stop

                D.div_
                  [ D.div
                      (bang (D.Style := "position:absolute;"))
                      [ D.canvas
                          ( oneOfMap bang
                              [ D.Self := HTMLCanvasElement.fromElement >>>
                                  traverse_
                                    ( runThree
                                        ete
                                        unsched
                                        pcMax
                                        resizeE.event
                                        ( keepLatest $ map (oneOfMap bang)
                                            event.toAnimate
                                        )
                                        event.animationFrame
                                        { iw, ih }
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
                                        ( _ *> push.startStop.start unit
                                        )
                                    , startE <#> \_ -> do
                                        ctx <- context
                                        hk <- constant0Hack ctx
                                        ci <- setInterval 5000 do
                                          Ref.read icid >>= traverse_
                                            (flip cancelIdleCallback w)
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
                                            w <#> Just >>= flip Ref.write icid
                                        afE <- hot
                                          ( withACTime ctx animationFrame <#>
                                              _.acTime
                                          )
                                        animated <- hot
                                          ( animate (r2b soundObj)
                                              ( step 1.0
                                                  ( map
                                                      ( calcSlope 0.0 0.75 100.0
                                                          1.25
                                                      )
                                                      event.slider
                                                  )
                                              )
                                              folded
                                              afE.event
                                          )
                                        iu0 <- subscribe afE.event
                                          push.animationFrame
                                        iu1 <- subscribe animated.event
                                          push.toAnimate
                                        st <- run2 ctx
                                          ( graph
                                              unsched
                                              animated.event
                                          )
                                        push.startStop.stop
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
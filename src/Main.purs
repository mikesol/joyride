module Main where

import Prelude

import Data.Int as Int
import Data.List (List(..), drop, take, (:))
import Data.Map as Map
import Data.Maybe (Maybe(..))
import Data.Number (pi)
import Data.Profunctor (lcmap)
import Data.Tuple.Nested (type (/\), (/\))
import Data.Unfoldable (replicate)
import Deku.Toplevel (runInBody)
import Effect (Effect)
import Effect.Aff (Milliseconds(..), forkAff, launchAff_)
import Effect.Class (liftEffect)
import Effect.Class.Console (logShow)
import Effect.Random as Random
import Effect.Ref (new)
import Effect.Ref as Ref
import FRP.Event (create, filterMap, subscribe)
import FRP.Event as Event
import FRP.Event.VBus (V)
import Foreign.Object as Object
import Joyride.App.Toplevel (toplevel)
import Joyride.Effect.Ref (writeToRecord)
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.FRP.Keypress (posFromKeypress, xForKeyboard)
import Joyride.FRP.Orientation (posFromOrientation, xForTouch)
import Joyride.LilGui (Slider(..), gui)
import Joyride.Mocks.TestData (mockBasics)
import Joyride.Network.Download (dlInChunks)
import Joyride.Transport.PubNub (PlayerAction(..), PubNubEvent(..), pubnubEvent)
import Rito.Interpret (orbitControlsAff, threeAff)
import Type.Proxy (Proxy(..))
import Types (BufferName(..), Player(..), RenderingInfo', initialPositions)
import WAGS.Interpret (AudioBuffer(..), context, makeAudioBuffer)
import Web.Event.Event (EventType(..))
import Web.Event.EventTarget (addEventListener, eventListener)
import Web.HTML (window)
import Web.HTML.Location (pathname)
import Web.HTML.Window (innerHeight, innerWidth, location, toEventTarget)

twoPi = 2.0 * pi :: Number

type StartStop = V (start :: Unit, stop :: Effect Unit)
type CanvasInfo = { x :: Number, y :: Number } /\ Number

foreign import emitsTouchEvents :: Effect Boolean

renderingInfo' :: RenderingInfo' Slider
renderingInfo' =
  { halfAmbitus: Slider { default: 2.0, min: 0.1, max: 4.0, step: 0.1 }
  , barZSpacing: Slider { default: 1.0, min: 0.1, max: 3.0, step: 0.1 }
  , cameraOffsetY: Slider { default: 0.6, min: 0.1, max: 3.0, step: 0.05 }
  , cameraLookAtOffsetY: Slider { default: 0.0, min: -2.0, max: 2.0, step: 0.05 }
  , cameraOffsetZ: Slider { default: 0.5, min: 0.1, max: 3.0, step: 0.05 }
  , cameraLookAtOffsetZ: Slider { default: -1.5, min: -2.0, max: 2.0, step: 0.05 }
  , sphereOffsetY: Slider { default: 0.2, min: 0.05, max: 0.5, step: 0.05 }
  }

main :: Object.Object String -> Effect Unit
main silentRoom = launchAff_ do
  three <- threeAff
  orbitControls <- orbitControlsAff
  let threeStuff = { three, orbitControls }
  w <- liftEffect $ window
  loc <- liftEffect $ location w
  pn <- liftEffect $ pathname loc
  isMobile <- liftEffect $ emitsTouchEvents
  resizeE <- liftEffect create
  ----- gui
  { debug, renderingInfo } <- gui renderingInfo'
  liftEffect (Ref.read renderingInfo >>= logShow)
  -----
  playerPositions <- liftEffect $ (Ref.read renderingInfo >>= \ri -> Ref.new (initialPositions ri))
  let
    myPlayer
      | pn == "/4" = Player4
      | pn == "/3" = Player3
      | pn == "/2" = Player2
      | pn == "/1" = Player1
      | otherwise = Player1
  pubNub /\ pnEvent <-
    ( (map <<< map)
        ( filterMap
            ( \(PubNubEvent pne) -> if pne.message.player /= myPlayer then Just pne.message else Nothing
            )
        )
        pubnubEvent
    )
  resizeListener <- liftEffect $ eventListener \_ -> do
    ({ iw: _, ih: _ } <$> (Int.toNumber <$> innerWidth w) <*> (Int.toNumber <$> innerHeight w)) >>= resizeE.push
  liftEffect $ addEventListener (EventType "resize") resizeListener true (toEventTarget w)
  xPosE <- liftEffect $ (if isMobile then xForTouch else xForKeyboard) w myPlayer pubNub
  -- ignore subscription
  _ <- liftEffect $ subscribe xPosE \xp -> case myPlayer of
    Player1 -> writeToRecord (Proxy :: _ "p1x") xp playerPositions
    Player2 -> writeToRecord (Proxy :: _ "p2x") xp playerPositions
    Player3 -> writeToRecord (Proxy :: _ "p3x") xp playerPositions
    Player4 -> writeToRecord (Proxy :: _ "p4x") xp playerPositions
  _ <- liftEffect $ subscribe pnEvent \pevt -> do
    -- Log.info "outside called"
    let
      pfun = case pevt.player of
        Player1 -> writeToRecord (Proxy :: _ "p1x")
        Player2 -> writeToRecord (Proxy :: _ "p2x")
        Player3 -> writeToRecord (Proxy :: _ "p3x")
        Player4 -> writeToRecord (Proxy :: _ "p4x")
    case pevt.action of
      XPositionKeyboard i -> pfun (lcmap _.epochTime $ posFromKeypress i) playerPositions
      XPositionMobile i -> pfun (lcmap _.epochTime $ posFromOrientation i) playerPositions
      -- not implemented yet
      Hit _ -> pure unit
  initialDims <- liftEffect $ ({ iw: _, ih: _ } <$> (Int.toNumber <$> innerWidth w) <*> (Int.toNumber <$> innerHeight w))
  soundObj <- liftEffect $ Ref.new Object.empty
  icid <- liftEffect $ new Nothing
  loaded <- liftEffect $ Event.create
  unschedule <- liftEffect $ new Map.empty
  ctx' <- liftEffect $ context
  silence <- liftEffect $ makeAudioBuffer ctx' (AudioBuffer 44100 [ replicate 1000 0.0 ])
  let

    bufferNames :: List (BufferName /\ String)
    bufferNames = (BufferName "kick" /\ "drum1_001")
      : (BufferName "hihat" /\ "drum2_001")
      : (BufferName "note" /\ "chord_111")
      : (BufferName "tambourine" /\ "submelo_012")
      : Nil
  let
    lowPriorityCb (Milliseconds k) v = do
      n <- Random.random
      Ref.modify_ (Map.insert (k + (n * 0.25)) v) unschedule
  let n2oh = take 300 bufferNames
  let n2ot = drop 300 bufferNames
  _ <- forkAff do
    dlInChunks silentRoom 100 n2oh ctx' soundObj
    liftEffect $ loaded.push true
    dlInChunks silentRoom 100 n2ot ctx' soundObj
  liftEffect $ runInBody
    ( toplevel
        { loaded: loaded.event
        , threeStuff
        , isMobile
        , lpsCallback: lowPriorityCb
        , myPlayer
        , resizeE: resizeE.event
        , playerPositions: refToBehavior playerPositions
        , renderingInfo: refToBehavior renderingInfo
        , debug
        , basicE: mockBasics
        , silence
        , initialDims
        , icid
        , wdw: w
        , unschedule
        , soundObj
        }
    )

-- { loaded :: Event Boolean
-- , threeStuff :: ThreeStuff
-- , isMobile :: Boolean
-- , lpsCallback :: Milliseconds -> Effect Unit -> Effect Unit
-- , myPlayer :: Player
-- , player2XBehavior :: Behavior (Number -> Number)
-- , xPosB :: Behavior (Number -> Number)
-- , resizeE :: Event WindowDims
-- , basicE :: { | MakeBasics () } -> AScenefulEnd
-- , renderingInfo :: RenderingInfo
-- , initialDims :: WindowDims
-- , noteScrollSpeed :: Number
-- , silence :: BrowserAudioBuffer
-- , icid :: Ref.Ref (Maybe RequestIdleCallbackId)
-- , wdw :: Window
-- , unschedule :: Ref.Ref (Map.Map Number (Effect Unit))
-- , soundObj :: Ref.Ref (Object.Object BrowserAudioBuffer)
-- }
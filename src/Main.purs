module Main where

import Prelude

import Control.Parallel (parTraverse)
import Data.DateTime.Instant (unInstant)
import Data.Homogeneous.Record (fromHomogeneous, homogeneous)
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
import FRP.Event.Time (withTime)
import FRP.Event.VBus (V)
import Foreign.Object as Object
import Joyride.App.Toplevel (toplevel)
import Joyride.Effect.Ref (writeToRecord)
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.FRP.Keypress (posFromKeypress, xForKeyboard)
import Joyride.FRP.Orientation (posFromOrientation, xForTouch)
import Joyride.LilGui (Slider(..), gui, noGui)
import Joyride.Mocks.TestData (mockBasics)
import Joyride.Network.Download (dlInChunks)
import Joyride.Transport.PubNub (PlayerAction(..), PubNubEvent(..), publish, pubnubEvent)
import Record (union)
import Rito.Interpret (css2DRendererAff, orbitControlsAff, threeAff)
import Rito.Texture (loadAff, loader)
import Type.Proxy (Proxy(..))
import Types (BufferName(..), HitBasicMe(..), HitBasicOtherPlayer(..), HitBasicOverTheWire(..), Player(..), RenderingInfo', Textures(..), initialPositions)
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
foreign import useLilGui :: Effect Boolean

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

main :: Textures String -> Object.Object String -> Effect Unit
main (Textures textures) silentRoom = launchAff_ do
  three <- threeAff
  ldr <- liftEffect $ loader three
  downloadedTextures <- fromHomogeneous <$> parTraverse (loadAff ldr) (homogeneous textures)
  orbitControls <- orbitControlsAff
  cssThings <- css2DRendererAff
  let threeStuff = union { three, orbitControls } cssThings
  w <- liftEffect $ window
  loc <- liftEffect $ location w
  pn <- liftEffect $ pathname loc
  isMobile <- liftEffect $ emitsTouchEvents
  resizeE <- liftEffect create
  ----- gui
  { debug, renderingInfo } <- liftEffect useLilGui >>= (if _ then gui else noGui) >>> (_ $ renderingInfo')
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
      HitBasic _ -> pure unit
  initialDims <- liftEffect $ ({ iw: _, ih: _ } <$> (Int.toNumber <$> innerWidth w) <*> (Int.toNumber <$> innerHeight w))
  soundObj <- liftEffect $ Ref.new Object.empty
  icid <- liftEffect $ new Nothing
  loaded <- liftEffect $ Event.create
  pushBasic :: Event.EventIO HitBasicMe <- liftEffect $ Event.create
  _ <- liftEffect $ subscribe pushBasic.event \(HitBasicMe bt) -> do
    publish pubNub
      { action: HitBasic
          ( HitBasicOverTheWire
              { uniqueId: bt.uniqueId
              , logicalBeat: bt.logicalBeat
              , deltaBeats: bt.deltaBeats
              , hitAt: bt.hitAt
              }
          )
      , player: myPlayer
      }
  unschedule <- liftEffect $ new Map.empty
  ctx' <- liftEffect $ context
  silence <- liftEffect $ makeAudioBuffer ctx' (AudioBuffer 44100 [ replicate 1000 0.0 ])
  let

    bufferNames :: List (BufferName /\ String)
    bufferNames = (BufferName "kick" /\ "drum1_001")
      : (BufferName "hihat" /\ "drum2_001")
      : (BufferName "note" /\ "drum3_001")
      : (BufferName "tambourine" /\ "drum4_001")
      : Nil
  let
    lowPriorityCb k v = do
      n <- Random.random
      Ref.modify_ (Map.insert (k <> Milliseconds (n * 0.25)) v) unschedule
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
        , pushBasic: pushBasic
        , notifications:
            { hitBasic: withTime pnEvent # filterMap
                ( \{ value: { player, action }, time } -> case action of
                    HitBasic (HitBasicOverTheWire e) -> Just $ HitBasicOtherPlayer
                      { uniqueId: e.uniqueId
                      , logicalBeat: e.logicalBeat
                      , deltaBeats: e.deltaBeats
                      , hitAt: e.hitAt
                      , player
                      , issuedAt: unInstant time
                      }
                    _ -> Nothing
                )
            }
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
        , textures: Textures downloadedTextures
        }
    )

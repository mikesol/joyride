module Main where

import Prelude

import Control.Plus (empty)
import Data.Int as Int
import Data.List (List(..), drop, take, (:))
import Data.Map as Map
import Data.Maybe (Maybe(..))
import Data.Number (pi)
import Data.Tuple.Nested (type (/\), (/\))
import Data.Unfoldable (replicate)
import Deku.Toplevel (runInBody)
import Effect (Effect)
import Effect.Aff (forkAff, launchAff_)
import Effect.Class (liftEffect)
import Effect.Random as Random
import Effect.Ref (new)
import Effect.Ref as Ref
import FRP.Behavior (step)
import FRP.Event (create, filterMap)
import FRP.Event as Event
import FRP.Event.VBus (V)
import Foreign.Object as Object
import Joyride.App.Toplevel (toplevel)
import Joyride.FRP.Keypress (posFromKeypress, xForKeyboard)
import Joyride.FRP.Orientation (posFromOrientation, xForTouch)
import Joyride.Mocks.TestData (testData)
import Joyride.Network.Download (dlInChunks)
import Joyride.Transport.PubNub (PlayerAction(..), PubNubEvent(..), pubnubEvent)
import Rito.Interpret (orbitControlsAff, threeAff)
import Types (BufferName(..), Player(..))
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

main :: { bme01 :: String } -> Object.Object String -> Effect Unit
main { bme01 } silentRoom = launchAff_ do
  three <- threeAff
  orbitControls <- orbitControlsAff
  let threeStuff = { three, orbitControls }
  w <- liftEffect $ window
  loc <- liftEffect $ location w
  pn <- liftEffect $ pathname loc
  isMobile <- liftEffect $ emitsTouchEvents
  resizeE <- liftEffect create
  let
    myPlayer
      | pn == "/2" = Player2
      | otherwise = Player1
  pubNub /\ pnEvent <-
    ( (map <<< map)
        ( filterMap
            ( \(PubNubEvent pne) -> if pne.message.player /= myPlayer then Just pne.message.action else Nothing
            )
        )
        pubnubEvent
    )
  let
    player2XBehavior = step (const 0.0) $ case myPlayer of
      -- player1 can see player2
      Player1 -> pnEvent # filterMap case _ of
        XPositionKeyboard i -> Just $ posFromKeypress i
        XPositionMobile i -> Just $ posFromOrientation i
        _ -> Nothing
      _ -> empty
  resizeListener <- liftEffect $ eventListener \_ -> do
    ({ iw: _, ih: _ } <$> (Int.toNumber <$> innerWidth w) <*> (Int.toNumber <$> innerHeight w)) >>= resizeE.push
  liftEffect $ addEventListener (EventType "resize") resizeListener true (toEventTarget w)
  xPosB <- liftEffect $ (if isMobile then xForTouch else xForKeyboard) w myPlayer pubNub
  initialDims <- liftEffect $ ({ iw: _, ih: _ } <$> (Int.toNumber <$> innerWidth w) <*> (Int.toNumber <$> innerHeight w))
  soundObj <- liftEffect $ Ref.new Object.empty
  icid <- liftEffect $ new Nothing
  loaded <- liftEffect $ Event.create
  unschedule <- liftEffect $ new Map.empty
  ctx' <- liftEffect $ context
  silence <- liftEffect $ makeAudioBuffer ctx' (AudioBuffer 44100 [replicate 1000 0.0])
  let

    bufferNames :: List (BufferName /\ String)
    bufferNames = (BufferName "kick" /\ "drum1_001")
      : (BufferName "hihat" /\ "drum2_001")
      : (BufferName "note" /\ "chord_111")
      : (BufferName "tambourine" /\ "submelo_012")
      : Nil
  let
    lowPriorityCb k v = do
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
        , player2XBehavior
        , xPosB
        , silence
        , initialDims
        , icid
        , wdw: w
        , unschedule
        , soundObj
        , score: testData
        , noteScrollSpeed: 5.0
        }
    )
module Main where

import Prelude

import BMS.Parser (bms)
import BMS.Timing (gatherAll)
import BMS.Types (Column(..), Note, Offset)
import Control.Plus (empty)
import Data.Compactable (compact)
import Data.Foldable (fold, foldl)
import Data.Int as Int
import Data.List (List, drop, nub, take)
import Data.Map (SemigroupMap(..))
import Data.Map as Map
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Number (pi)
import Data.Traversable (sequence)
import Data.Tuple (snd)
import Data.Tuple.Nested (type (/\), (/\))
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
import Joyride.Network.Download (dlInChunks)
import Joyride.Transport.PubNub (PlayerAction(..), PubNubEvent(..), pubnubEvent)
import Rito.Interpret (orbitControlsAff, threeAff)
import Joyride.Mocks.TestData (testData)
import Types (Animated, Player(..))
import WAGS.Interpret (context)
import Web.Event.Event (EventType(..))
import Web.Event.EventTarget (addEventListener, eventListener)
import Web.HTML (window)
import Web.HTML.Location (pathname)
import Web.HTML.Window (innerHeight, innerWidth, location, toEventTarget)

twoPi = 2.0 * pi :: Number

type StartStop = V (start :: Unit, stop :: Effect Unit)
type CanvasInfo = { x :: Number, y :: Number } /\ Number
type UIEvents = V
  ( start :: Unit
  , stop :: Effect Unit
  , slider :: Number
  , animationFrame :: Number
  , toAnimate :: Animated
  )

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
      Player2 -> empty
      -- player1 can see player2
      Player1 -> pnEvent # filterMap case _ of
        XPositionKeyboard i -> Just $ posFromKeypress i
        XPositionMobile i -> Just $ posFromOrientation i
        _ -> Nothing
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
  let
    bmsRes = bms bme01
    info = gatherAll bmsRes
    -- noffsets = noteOffsets info
    noffsets = testData

    -- list of notes in the order we need them
    offsetsToNoteColumns :: Map.Map Offset (List (Column /\ Note))
    offsetsToNoteColumns = unwrap
      $ fold
      $ map SemigroupMap
      $ (map <<< map) pure
      $ map (\(a /\ b) -> map (\c -> a /\ c) b)
      $ (Map.toUnfoldable :: _ -> List _) noffsets

    maxColumns :: Int
    maxColumns = foldl
      ( foldl
          ( \b (c /\ _) -> case c of
              PlayColumn i -> max b i
              _ -> b
          )
      )
      0
      offsetsToNoteColumns

    n2o :: List (Note /\ String)
    n2o = compact
      $ map (sequence <<< ((/\) <*> flip Map.lookup info.headers.wavs))
      $ nub
      $ map snd
      $ join
      $ Map.values
      $ offsetsToNoteColumns
  let
    lowPriorityCb k v = do
      n <- Random.random
      Ref.modify_ (Map.insert (k + (n * 0.25)) v) unschedule
  let n2oh = take 300 n2o
  let n2ot = drop 300 n2o
  _ <- forkAff do
    dlInChunks silentRoom 100 n2oh ctx' soundObj
    liftEffect $ loaded.push true
    dlInChunks silentRoom 100 n2ot ctx' soundObj
  liftEffect $ runInBody
    ( toplevel
        { loaded: loaded.event
        , threeStuff
        , isMobile
        , lowPriorityCb
        , maxColumns
        , myPlayer
        , resizeE: resizeE.event
        , player2XBehavior
        , xPosB
        , initialDims
        , icid
        , wdw: w
        , unschedule
        , soundObj
        , offsetsToNoteColumns
        }
    )
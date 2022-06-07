module Main where

import Prelude

import Control.Alt (alt, (<|>))
import Control.Parallel (parTraverse)
import Data.Array (difference, fold)
import Data.Array as Array
import Data.Either (Either(..), hush)
import Data.Homogeneous.Record (fromHomogeneous, homogeneous)
import Data.Int as Int
import Data.List (List(..), drop, foldl, take, (:))
import Data.Map (SemigroupMap(..))
import Data.Map as Map
import Data.Maybe (Maybe(..), isJust, isNothing)
import Data.Newtype (unwrap)
import Data.Number (pi)
import Data.Profunctor (lcmap)
import Data.Traversable (sequence)
import Data.Tuple (fst, snd)
import Data.Tuple.Nested (type (/\), (/\))
import Data.Unfoldable (replicate)
import Deku.Toplevel (runInBody)
import Effect (Effect)
import Effect.Aff (Milliseconds(..), forkAff, joinFiber, launchAff_, never)
import Effect.Class (liftEffect)
import Effect.Random (randomInt)
import Effect.Random as Random
import Effect.Ref (new)
import Effect.Ref as Ref
import FRP.Event (create, filterMap, subscribe)
import FRP.Event as Event
import FRP.Event.VBus (V)
import Foreign.Object as Object
import Joyride.App.Toplevel (toplevel)
import Joyride.Effect.Random (randElt)
import Joyride.Effect.Ref (writeToRecord)
import Joyride.FRP.Aff (collectEventToAff)
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.FRP.Keypress (posFromKeypress, xForKeyboard)
import Joyride.FRP.Orientation (posFromOrientation, xForTouch)
import Joyride.FRP.SampleOnSubscribe (sampleOnSubscribe)
import Joyride.LilGui (Slider(..), gui, noGui)
import Joyride.Mocks.TestData (mockBasics)
import Joyride.Network.Download (dlInChunks)
import Joyride.Transport.PubNub as PN
import Record (union)
import Rito.Interpret (css2DRendererAff, orbitControlsAff, threeAff)
import Rito.Texture (loadAff, loader)
import Route (Route(..), route)
import Routing.Duplex (parse)
import Safe.Coerce (coerce)
import Type.Proxy (Proxy(..))
import Types (BufferName(..), Channel(..), Claim(..), HitBasicMe(..), HitBasicOverTheWire(..), IAm(..), Negotiation(..), Player(..), PlayerAction(..), RenderingInfo', Textures(..), allPlayers, initialPositions)
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

channelFromRoute :: Route -> Maybe String
channelFromRoute Home = Nothing
channelFromRoute (Session session) = Just session
channelFromRoute (SessionAndPlayer session _) = Just session

playerFromRoute :: Route -> Maybe Player
playerFromRoute Home = Nothing
playerFromRoute (Session _) = Nothing
playerFromRoute (SessionAndPlayer _ player) = Just player

randId :: Effect String
randId = map fold $ sequence (replicate 32 (map show $ randomInt 0 9))

main :: Textures String -> Object.Object String -> Effect Unit
main (Textures textures) silentRoom = launchAff_ do
  ----- gui
  { debug, renderingInfo } <- liftEffect useLilGui >>= (if _ then gui else noGui) >>> (_ $ renderingInfo')
  liftEffect do
    -- events
    resizeE <- create
    loaded <- Event.create
    negotiation <- Event.create
    pushBasic :: Event.EventIO HitBasicMe <- Event.create
    -- is this mobile
    isMobile <- emitsTouchEvents
    -- low priority event
    unschedule <- new Map.empty
    let
      lowPriorityCb k v = do
        n <- Random.random
        Ref.modify_ (Map.insert (k <> Milliseconds (n * 0.25)) v) unschedule
    idleCallbackId <- liftEffect $ new Nothing
    ----- player positions
    playerPositions <- Ref.read renderingInfo >>= \ri -> Ref.new (initialPositions ri)
    ctx' <- context
    silence <- makeAudioBuffer ctx' (AudioBuffer 44100 [ replicate 1000 0.0 ])
    -- windoze
    w <- window
    loc <- location w
    pn <- pathname loc
    let parsed = parse route pn
    -- resize
    initialDims <- { iw: _, ih: _ }
      <$> (Int.toNumber <$> innerWidth w)
      <*> (Int.toNumber <$> innerHeight w)
    resizeListener <- eventListener \_ -> do
      ({ iw: _, ih: _ } <$> (Int.toNumber <$> innerWidth w) <*> (Int.toNumber <$> innerHeight w)) >>= resizeE.push
    addEventListener (EventType "resize") resizeListener true (toEventTarget w)
    -- sound stash
    soundObj <- liftEffect $ Ref.new Object.empty
    -- get the html. could be even sooner if we passed more stuff in on success instead of creating it at the top level
    runInBody
      ( toplevel
          { loaded: loaded.event
          , negotiation: negotiation.event
          , isMobile
          , lpsCallback: lowPriorityCb
          , pushBasic: pushBasic
          , resizeE: resizeE.event
          , playerPositions: refToBehavior playerPositions
          , renderingInfo: refToBehavior renderingInfo
          , debug
          , basicE: mockBasics
          , silence
          , initialDims
          , icid: idleCallbackId
          , wdw: w
          , unschedule
          , soundObj
          }
      )

    -- i am me
    iAm <- randId
    -- threeeeeee
    launchAff_ do
      three <- threeAff
      ldr <- liftEffect $ loader three
      --       , textures: Textures downloadedTextures
      downloadedTextures <- forkAff (fromHomogeneous <$> parTraverse (loadAff ldr) (homogeneous textures))
      orbitControls <- orbitControlsAff
      cssThings <- css2DRendererAff
      let threeStuff = union { three, orbitControls } cssThings
      -- "server" via pubnub
      let myChannel' = hush parsed >>= channelFromRoute
      case myChannel' of
        Nothing -> liftEffect $ negotiation.push GetRulesOfGame
        Just myChannel -> do
          knownPlayers <- liftEffect $ Ref.new $ SemigroupMap Map.empty
          pubNub <- do
            { event, publish } <- PN.pubnub (IAm iAm) (Channel myChannel)
            pure
              { publish
              , event: filterMap
                  ( \(PN.PubNubEvent pne) -> if pne.message.iAm /= iAm then Just pne.message.action else Nothing
                  )
                  event
              }
          -- we immediately issue a subscription for all the stuff we can always listen to
          _ <- liftEffect $ subscribe pubNub.event \pevt -> do
            -- todo: make lazy?
            let
              pfun = case _ of
                Player1 -> writeToRecord (Proxy :: _ "p1x")
                Player2 -> writeToRecord (Proxy :: _ "p2x")
                Player3 -> writeToRecord (Proxy :: _ "p3x")
                Player4 -> writeToRecord (Proxy :: _ "p4x")
              notRelevant = pure unit
            case pevt of
              HitBasic _ -> notRelevant
              RefuteClaim _ -> notRelevant
              AcceptClaim _ -> notRelevant
              XPositionKeyboard i -> pfun i.player (lcmap _.epochTime $ posFromKeypress i.ktp) playerPositions
              XPositionMobile i -> pfun i.player (lcmap _.epochTime $ posFromOrientation i.gtp) playerPositions
              EchoKnownPlayers { players } -> do
                Ref.modify_ (_ <> players) knownPlayers
              RequestPlayer -> do
                known <- Ref.read knownPlayers
                pubNub.publish $ EchoKnownPlayers { players: known }
              ClaimPlayer { claim, player } -> do
                SemigroupMap known <- Ref.read knownPlayers
                case Map.lookup player known of
                  Just _ -> pubNub.publish $ RefuteClaim { claim, player }
                  Nothing ->
                    pubNub.publish $ AcceptClaim { claim, player }
          liftEffect $ negotiation.push StartingNegotiation
          let
            actOnProposedPlayer perhapsPlayer = do
              claim <- liftEffect (Claim <$> randId)
              request <- forkAff
                -- accepts own claim in case no one else responds
                $ map (foldl alt (Right { claim, player: perhapsPlayer }))
                $ collectEventToAff (Milliseconds 750.0)
                    ( filterMap
                        ( case _ of
                            AcceptClaim c -> Just (Right c)
                            RefuteClaim c -> Just (Left c)
                            _ -> Nothing
                        )
                        pubNub.event
                    )
              liftEffect $ pubNub.publish $ ClaimPlayer { claim, player: perhapsPlayer }
              joinFiber request >>= case _ of
                Right { player } -> pure player
                Left _ -> do
                  liftEffect $ negotiation.push ClaimFail
                  never
          let
            knownPlayersE = filterMap
              ( case _ of
                  EchoKnownPlayers { players } -> Just players
                  _ -> Nothing
              )
              pubNub.event
          myPlayer <- case hush parsed >>= playerFromRoute of
            Just playerAsk -> actOnProposedPlayer playerAsk
            Nothing -> do
              collecting <- forkAff
                $ collectEventToAff (Milliseconds 750.0) knownPlayersE
              liftEffect $ negotiation.push RequestingPlayer
              liftEffect $ pubNub.publish RequestPlayer
              collected <- joinFiber collecting
              liftEffect $ negotiation.push ReceivedPossibilities
              let mergedMap = Map.toUnfoldable (unwrap (fold collected))
              let awaitingStart = Array.null mergedMap || isJust (Array.find isNothing (map snd mergedMap))
              case awaitingStart of
                false -> do
                  liftEffect $ negotiation.push GameHasStarted
                  never
                true -> do
                  candidate <- liftEffect $ randElt $ difference allPlayers (map fst mergedMap)
                  case candidate of
                    Nothing -> do
                      liftEffect $ negotiation.push RoomIsFull
                      never
                    Just perhapsPlayer -> actOnProposedPlayer perhapsPlayer
          liftEffect $ Ref.modify_ (SemigroupMap (Map.singleton myPlayer Nothing) <> _) knownPlayers
          -- we echo known players to acknowledge that we claim this
          -- there is a race condition here if all players grant the same claim to
          -- two devices for the same player
          -- blockchain would help here...
          liftEffect $ (Ref.read knownPlayers >>= \players -> pubNub.publish $ EchoKnownPlayers { players })
          xPosE <- liftEffect $ (if isMobile then xForTouch else xForKeyboard) w myPlayer pubNub.publish
          -- ignore subscription
          _ <- liftEffect $ subscribe xPosE \xp -> case myPlayer of
            Player1 -> writeToRecord (Proxy :: _ "p1x") xp playerPositions
            Player2 -> writeToRecord (Proxy :: _ "p2x") xp playerPositions
            Player3 -> writeToRecord (Proxy :: _ "p3x") xp playerPositions
            Player4 -> writeToRecord (Proxy :: _ "p4x") xp playerPositions
          _ <- liftEffect $ subscribe pushBasic.event \(HitBasicMe bt) -> do
            pubNub.publish
              $ HitBasic
                  ( HitBasicOverTheWire
                      { uniqueId: bt.uniqueId
                      , logicalBeat: bt.logicalBeat
                      , deltaBeats: bt.deltaBeats
                      , hitAt: bt.hitAt
                      , player: myPlayer
                      }
                  )
          let
            bufferNames :: List (BufferName /\ String)
            bufferNames = (BufferName "kick" /\ "drum1_001")
              : (BufferName "hihat" /\ "drum2_001")
              : (BufferName "note" /\ "drum3_001")
              : (BufferName "tambourine" /\ "drum4_001")
              : Nil
          let n2oh = take 300 bufferNames
          let n2ot = drop 300 bufferNames
          dlInChunks silentRoom 100 n2oh ctx' soundObj
          liftEffect $ loaded.push true
          dlInChunks silentRoom 100 n2ot ctx' soundObj
          myTextures <- joinFiber downloadedTextures
          liftEffect $ negotiation.push $ Success
            { player: myPlayer
            , threeStuff
            , pubNubEvent: pubNub.event
            , textures: Textures myTextures
            , optIn: coerce (sampleOnSubscribe (refToBehavior knownPlayers) <|> knownPlayersE)
            , optMeIn: \ms -> do
                players <- Ref.modify (SemigroupMap (Map.singleton myPlayer (Just ms)) <> _) knownPlayers
                pubNub.publish $ EchoKnownPlayers { players }

            }

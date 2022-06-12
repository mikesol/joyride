module Main where

import Prelude

import Control.Alt (alt, (<|>))
import Control.Parallel (parTraverse)
import Data.Array (difference, fold)
import Data.Array as Array
import Data.Array.NonEmpty (toArray)
import Data.DateTime.Instant (unInstant)
import Data.Either (Either(..), hush)
import Data.Homogeneous.Record (fromHomogeneous, homogeneous)
import Data.Int as Int
import Data.List (List(..), drop, foldl, take, (:))
import Data.Map as Map
import Data.Maybe (Maybe(..), isJust)
import Data.Newtype (unwrap)
import Data.Number (pi, pow, sqrt)
import Data.Profunctor (lcmap)
import Data.Traversable (for_, sequence)
import Data.Tuple (Tuple, fst, snd)
import Data.Tuple.Nested (type (/\), (/\))
import Data.Unfoldable (replicate)
import Deku.Toplevel (runInBody)
import Effect (Effect)
import Effect.Aff (Milliseconds(..), forkAff, joinFiber, launchAff_, never)
import Effect.Class (liftEffect)
import Effect.Now (now)
import Effect.Random (randomInt)
import Effect.Random as Random
import Effect.Ref (new)
import Effect.Ref as Ref
import FRP.Behavior (sample_)
import FRP.Event (Event, filterMap, folded, subscribe)
import FRP.Event as Event
import FRP.Event.AnimationFrame (animationFrame)
import FRP.Event.VBus (V)
import Foreign.Object as Object
import Joyride.App.Toplevel (toplevel)
import Joyride.Effect.Random (randElt)
import Joyride.Effect.Ref (readFromRecord, writeToRecord)
import Joyride.FRP.Aff (collectEventToAff)
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.FRP.Keypress (posFromKeypress, xForKeyboard)
import Joyride.FRP.Orientation (posFromOrientation, xForTouch)
import Joyride.FRP.SampleOnSubscribe (sampleOnSubscribe)
import Joyride.Ledger.Basic (basicOutcomeToPointOutcome, beatsToBasicOutcome)
import Joyride.LilGui (Slider(..), gui, noGui)
import Joyride.Mocks.Basic (mockBasics)
import Joyride.Mocks.Leap (mockLeaps)
import Joyride.Mocks.Long (mockLongs)
import Joyride.Network.Download (dlInChunks)
import Joyride.Transport.PubNub as PN
import Record (union)
import Rito.CubeTexture as CubeTextureLoader
import Rito.Interpret (css2DRendererAff, orbitControlsAff, threeAff)
import Rito.Texture (loadAff, loader)
import Route (Route(..), route)
import Routing.Duplex (parse)
import Type.Proxy (Proxy(..))
import Types (BufferName(..), Channel(..), Claim(..), CubeTexture, CubeTextures(..), HitBasicMe(..), HitBasicOverTheWire(..), HitLeapMe(..), HitLeapOverTheWire(..), HitLongMe, IAm(..), InFlightGameInfo(..), InFlightGameInfo', JMilliseconds(..), KnownPlayers(..), Negotiation(..), Penalty(..), Player(..), PlayerAction(..), PointOutcome, Points(..), Position, ReleaseLongMe, ReleaseLongOverTheWire(..), RenderingInfo', StartStatus(..), Textures(..), allPlayers, initialPositions, touchPointZ)
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
  { halfAmbitus: Slider { default: 2.3, min: 0.1, max: 4.2, step: 0.1 }
  , barZSpacing: Slider { default: 1.0, min: 0.1, max: 3.0, step: 0.1 }
  , cameraOffsetY: Slider { default: 0.6, min: 0.1, max: 3.0, step: 0.05 }
  , cameraLookAtOffsetY: Slider { default: 0.0, min: -2.0, max: 2.0, step: 0.05 }
  , cameraOffsetZ: Slider { default: 1.0, min: 0.1, max: 3.0, step: 0.05 }
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

type LeapUnsubscribes =
  { p1 :: Effect Unit
  , p2 :: Effect Unit
  , p3 :: Effect Unit
  , p4 :: Effect Unit
  }

main :: CubeTextures (CubeTexture String) -> Textures String -> Object.Object String -> Effect Unit
main (CubeTextures cubeTextures) (Textures textures) silentRoom = launchAff_ do
  ----- gui
  { debug, renderingInfo } <- liftEffect useLilGui >>= (if _ then gui else noGui) >>> (_ $ renderingInfo')
  liftEffect do
    -- events
    resizeE <- Event.create
    loaded <- Event.create
    negotiation <- Event.create
    pushBasic :: Event.EventIO HitBasicMe <- Event.create
    pushLeap :: Event.EventIO HitLeapMe <- Event.create
    pushHitLong :: Event.EventIO HitLongMe <- Event.create
    pushReleaseLong :: Event.EventIO ReleaseLongMe <- Event.create
    let renderingInfoBehavior = refToBehavior renderingInfo
    -- is this mobile
    isMobile <- emitsTouchEvents
    -- low priority event
    unschedule <- new Map.empty
    let
      lowPriorityCb k v = do
        n <- Random.random
        Ref.modify_ (Map.insert (k + JMilliseconds (n * 0.25)) v) unschedule
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
          , pushLeap: pushLeap
          , pushHitLong: pushHitLong
          , pushReleaseLong: pushReleaseLong
          , resizeE: resizeE.event
          , playerPositions: refToBehavior playerPositions
          , renderingInfo: renderingInfoBehavior
          , debug
          , basicE: mockBasics
          , leapE: mockLeaps
          , longE: mockLongs
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
      cldr <- liftEffect $ CubeTextureLoader.loader three
      --       , textures: Textures downloadedTextures
      downloadedTextures <- forkAff (fromHomogeneous <$> parTraverse (loadAff ldr) (homogeneous textures))
      downloadedCubeTextures <- forkAff (fromHomogeneous <$> parTraverse ( (CubeTextureLoader.loadAffRecord cldr)) (map unwrap $ homogeneous cubeTextures))
      orbitControls <- orbitControlsAff
      cssThings <- css2DRendererAff
      let threeStuff = union { three, orbitControls } cssThings
      -- "server" via pubnub
      let myChannel' = hush parsed >>= channelFromRoute
      case myChannel' of
        Nothing -> liftEffect $ negotiation.push GetRulesOfGame
        Just myChannel -> do
          -- maybe is not ideal here
          -- what it means semantically is "player exists but has not started"
          -- a new type for this?
          knownPlayers :: Ref.Ref KnownPlayers <- liftEffect $ Ref.new $ KnownPlayers Map.empty
          pubNub <- do
            { event, publish } <- PN.pubnub (IAm iAm) (Channel myChannel)
            pure
              { publish
              , event: filterMap
                  ( \(PN.PubNubEvent pne) -> if pne.message.iAm /= iAm then Just pne.message.action else Nothing
                  )
                  event
              }
          -- for when we need to ping _both_ pubnub and ourselves internally with the same data
          -- this is the case, for example, with points
          -- we want to update our own _and_ others' points
          knownPlayersBus <- liftEffect $ Event.create
          leapUnsubscribesRef <- liftEffect $ Ref.new (mempty :: LeapUnsubscribes)
          let
            magicLeaps :: forall r. { player :: Player, newPosition :: Position | r } -> Effect Unit
            magicLeaps pnp = do
              wholeRec <- Ref.read playerPositions
              oldPosition <- case pnp.player of
                Player1 -> readFromRecord (Proxy :: _ "p1p") playerPositions
                Player2 -> readFromRecord (Proxy :: _ "p2p") playerPositions
                Player3 -> readFromRecord (Proxy :: _ "p3p") playerPositions
                Player4 -> readFromRecord (Proxy :: _ "p4p") playerPositions
              -- should never be nothing. make safer?
              let movedPlayer = if wholeRec.p1p == pnp.newPosition then Just Player1 else if wholeRec.p2p == pnp.newPosition then Just Player2 else if wholeRec.p3p == pnp.newPosition then Just Player3 else if wholeRec.p4p == pnp.newPosition then Just Player4 else Nothing
              magicLeap pnp
              for_ movedPlayer \player -> magicLeap { player, newPosition: oldPosition }
            magicLeap :: forall r. { player :: Player, newPosition :: Position | r } -> Effect Unit
            magicLeap hl = do
              leapUnsubscribes <- Ref.read leapUnsubscribesRef
              case hl.player of
                Player1 -> leapUnsubscribes.p1
                Player2 -> leapUnsubscribes.p2
                Player3 -> leapUnsubscribes.p3
                Player4 -> leapUnsubscribes.p4
              startsAt <- unInstant >>> unwrap <$> now
              case hl.player of
                Player1 -> writeToRecord (Proxy :: _ "p1p") hl.newPosition playerPositions
                Player2 -> writeToRecord (Proxy :: _ "p2p") hl.newPosition playerPositions
                Player3 -> writeToRecord (Proxy :: _ "p3p") hl.newPosition playerPositions
                Player4 -> writeToRecord (Proxy :: _ "p4p") hl.newPosition playerPositions
              startY <- case hl.player of
                Player1 -> readFromRecord (Proxy :: _ "p1y") playerPositions
                Player2 -> readFromRecord (Proxy :: _ "p2y") playerPositions
                Player3 -> readFromRecord (Proxy :: _ "p3y") playerPositions
                Player4 -> readFromRecord (Proxy :: _ "p4y") playerPositions
              startZ <- case hl.player of
                Player1 -> readFromRecord (Proxy :: _ "p1z") playerPositions
                Player2 -> readFromRecord (Proxy :: _ "p2z") playerPositions
                Player3 -> readFromRecord (Proxy :: _ "p3z") playerPositions
                Player4 -> readFromRecord (Proxy :: _ "p4z") playerPositions
              let endY = 0.0
              newSub <- subscribe (sample_ renderingInfoBehavior animationFrame) \ri -> do
                let endZ = touchPointZ ri hl.newPosition
                n <- unInstant >>> unwrap <$> now
                let distance = sqrt (((endZ - startZ) `pow` 2.0) + ((endY - startY) `pow` 2.0))
                let midZ = (endZ + startZ) / 2.0
                let midY = ((endY + startY) / 2.0) + 0.5
                let curve t p0 p1 p2 = (((1.0 - t) `pow` 2.0) * p0) + (2.0 * (1.0 - t) * t * p1) + (t `pow` 2.0) * p2
                -- arbitrary, experiment with the 0.2 constant
                let trajectoryTime = 0.4 * distance
                let t = min 1.0 $ max 0.0 (((n - startsAt) / 1000.0) / trajectoryTime)
                let cy = curve t startY midY endY
                let cz = curve t startZ midZ endZ
                case hl.player of
                  Player1 -> writeToRecord (Proxy :: _ "p1z") cz playerPositions
                  Player2 -> writeToRecord (Proxy :: _ "p2z") cz playerPositions
                  Player3 -> writeToRecord (Proxy :: _ "p3z") cz playerPositions
                  Player4 -> writeToRecord (Proxy :: _ "p4z") cz playerPositions
                case hl.player of
                  Player1 -> writeToRecord (Proxy :: _ "p1y") cy playerPositions
                  Player2 -> writeToRecord (Proxy :: _ "p2y") cy playerPositions
                  Player3 -> writeToRecord (Proxy :: _ "p3y") cy playerPositions
                  Player4 -> writeToRecord (Proxy :: _ "p4y") cy playerPositions
                when (t >= 1.0) do
                  join $ Ref.read leapUnsubscribesRef <#>
                    ( case hl.player of
                        Player1 -> _.p1
                        Player2 -> _.p2
                        Player3 -> _.p3
                        Player4 -> _.p4
                    )
                  Ref.modify_
                    ( let
                        eu = mempty :: Effect Unit
                      in
                        case hl.player of
                          Player1 -> _ { p1 = eu }
                          Player2 -> _ { p2 = eu }
                          Player3 -> _ { p3 = eu }
                          Player4 -> _ { p4 = eu }
                    )
                    leapUnsubscribesRef
              Ref.modify_
                ( case hl.player of
                    Player1 -> _ { p1 = newSub }
                    Player2 -> _ { p2 = newSub }
                    Player3 -> _ { p3 = newSub }
                    Player4 -> _ { p4 = newSub }
                )
                leapUnsubscribesRef
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
              RefuteClaim _ -> notRelevant
              AcceptClaim _ -> notRelevant
              -- if we get a hit leap, we need to generate an event that will change the position
              HitLeap (HitLeapOverTheWire hl) -> magicLeaps hl
              -- if we hear a hit basic, we update the known players
              HitBasic (HitBasicOverTheWire { player, outcome }) -> do
                kp <- updateKnownPlayers player outcome knownPlayers
                knownPlayersBus.push kp
              -- if we hear a hit basic, we do nothing, as points are only attributed on release
              HitLong _ -> notRelevant
              -- if we hear a hit basic, we can update the points
              ReleaseLong (ReleaseLongOverTheWire { player, outcome }) -> do
                kp <- updateKnownPlayers player outcome knownPlayers
                knownPlayersBus.push kp
              -- we update the xposition for when the behavior needs it
              XPositionKeyboard i -> pfun i.player (lcmap _.epochTime $ posFromKeypress i.ktp) playerPositions
              -- we update the xposition for when the behavior needs it
              XPositionMobile i -> pfun i.player (lcmap _.epochTime $ posFromOrientation i.gtp) playerPositions
              -- we stash known players and forward this to our internal bus
              -- the double mechanism is because, upon subscription, we bang
              -- from the stash and then switch to the internal bus
              EchoKnownPlayers { players } -> do
                kp <- Ref.modify (_ <> players) knownPlayers
                knownPlayersBus.push kp
              -- if someone asks for known players, we send what we know
              RequestPlayer -> do
                known <- Ref.read knownPlayers
                pubNub.publish $ EchoKnownPlayers { players: known }
              -- if someone claims a player, we accept the claim iff the player
              -- is not already claimed
              ClaimPlayer { claim, player } -> do
                KnownPlayers known <- Ref.read knownPlayers
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
          myPlayer <- case hush parsed >>= playerFromRoute of
            Just playerAsk -> actOnProposedPlayer playerAsk
            Nothing -> do
              collecting <- forkAff
                $ collectEventToAff (Milliseconds 750.0) knownPlayersBus.event
              liftEffect $ negotiation.push RequestingPlayer
              liftEffect $ pubNub.publish RequestPlayer
              collected <- joinFiber collecting
              liftEffect $ negotiation.push ReceivedPossibilities
              -- we don't need `First` after the semigroup has done its thing
              let (mergedMap :: Array (Tuple Player StartStatus)) = Map.toUnfoldable (unwrap (fold collected))
              let awaitingStart = Array.null mergedMap || isJust (Array.find (_ == HasNotStartedYet) (map snd mergedMap))
              case awaitingStart of
                false -> do
                  liftEffect $ negotiation.push GameHasStarted
                  never
                true -> do
                  candidate <- liftEffect $ randElt $ difference (toArray allPlayers) (map fst mergedMap)
                  case candidate of
                    Nothing -> do
                      liftEffect $ negotiation.push RoomIsFull
                      never
                    Just perhapsPlayer -> actOnProposedPlayer perhapsPlayer
          liftEffect $ Ref.modify_ (KnownPlayers (Map.singleton myPlayer HasNotStartedYet) <> _) knownPlayers
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
          -- deal with incoming basics
          _ <- liftEffect $ subscribe pushBasic.event \(HitBasicMe bt) -> do
            kp <- updateKnownPlayers myPlayer (basicOutcomeToPointOutcome $ beatsToBasicOutcome bt.deltaBeats) knownPlayers
            knownPlayersBus.push kp
            pubNub.publish
              $ HitBasic
                  ( HitBasicOverTheWire
                      { uniqueId: bt.uniqueId
                      , logicalBeat: bt.logicalBeat
                      , deltaBeats: bt.deltaBeats
                      , hitAt: bt.hitAt
                      , player: myPlayer
                      , outcome: basicOutcomeToPointOutcome $ beatsToBasicOutcome bt.deltaBeats
                      }
                  )
          -- deal with incoming leaps
          _ <- liftEffect $ subscribe pushLeap.event \(HitLeapMe bt) -> do
            magicLeaps {player: myPlayer, newPosition: bt.newPosition}
            pubNub.publish
              $ HitLeap
                  ( HitLeapOverTheWire
                      { uniqueId: bt.uniqueId
                      , hitAt: bt.hitAt
                      , player: myPlayer
                      , oldPosition: bt.oldPosition
                      , newPosition: bt.newPosition
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
          myCubeTextures <- joinFiber downloadedCubeTextures
          liftEffect $ negotiation.push $ Success
            { player: myPlayer
            , threeStuff
            , pubNubEvent: pubNub.event
            , textures: Textures myTextures
            , cubeTextures: CubeTextures myCubeTextures
            , playerStatus:
                let
                  e :: Event KnownPlayers
                  e = sampleOnSubscribe (refToBehavior knownPlayers) <|> knownPlayersBus.event
                in
                  -- folded because, by design, we always know which value "wins"
                  -- in player status
                  -- so we can always fold with the previous one in case there's a
                  -- regression in the incoming value (ie packets out of order)
                  folded e
            , optMeIn: \ms -> do
                players <- Ref.modify (KnownPlayers (Map.singleton myPlayer (HasStarted $ InFlightGameInfo { startedAt: ms, points: Points 0.0, penalties: Penalty 0.0 })) <> _) knownPlayers
                -- let others know I've opted in
                pubNub.publish $ EchoKnownPlayers { players }
                -- let me know I've opted in
                knownPlayersBus.push players
            }

defaultInFlightGameInfo :: InFlightGameInfo'
defaultInFlightGameInfo =
  { points: Points bottom
  , penalties: Penalty bottom
  , startedAt: JMilliseconds top
  }

updateKnownPlayers
  :: Player
  -> PointOutcome
  -> Ref.Ref KnownPlayers
  -> Effect KnownPlayers
updateKnownPlayers player outcome knownPlayers = do
  Ref.modify
    ( \(KnownPlayers kp) ->
        ( KnownPlayers $ Map.update
            ( case _ of
                HasNotStartedYet -> Just $ HasStarted
                  ( InFlightGameInfo $ case unwrap outcome of
                      Left penalty -> defaultInFlightGameInfo { penalties = penalty }
                      Right points -> defaultInFlightGameInfo { points = points }
                  )
                HasStarted (InFlightGameInfo i) -> Just $ HasStarted
                  ( InFlightGameInfo
                      ( case (unwrap outcome) of
                          Left penalty -> i { penalties = i.penalties + penalty }
                          Right points -> i { points = i.points + points }
                      )
                  )
            )
            player
            kp
        )
    )
    knownPlayers
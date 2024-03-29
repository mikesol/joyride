module Main where

import Prelude

import Control.Alt ((<|>))
import Control.Parallel (parSequence, parTraverse, sequential)
import Control.Promise (Promise, toAffE)
import Data.Array (nubBy)
import Data.Either (Either(..), hush)
import Data.Filterable (filter)
import Data.Function (on)
import Data.Homogeneous.Record (fromHomogeneous, homogeneous)
import Data.Int as Int
import Data.List (List(..), drop, take, (:))
import Data.Map as Map
import Data.Maybe (Maybe(..), fromMaybe, maybe)
import Data.Monoid (guard)
import Data.Newtype (unwrap, wrap)
import Data.Number (pi, pow, sqrt)
import Data.Profunctor (lcmap)
import Data.String as String
import Data.Traversable (for_, traverse_)
import Data.Tuple (Tuple, curry)
import Data.Tuple.Nested (type (/\), (/\))
import Data.Unfoldable (replicate)
import Deku.Toplevel (runInBody)
import Effect (Effect)
import Effect.Aff (Aff, Milliseconds, ParAff, forkAff, joinFiber, launchAff_, never)
import Effect.Class (liftEffect)
import Effect.Class.Console as Log
import Effect.Console (log, logShow)
import Effect.Random as Random
import Effect.Ref (new)
import Effect.Ref as Ref
import FRP.Behavior (Behavior, sample_)
import FRP.Event (Event, create, filterMap, folded, mapAccum, subscribe)
import FRP.Event as Event
import FRP.Event.AnimationFrame (animationFrame)
import FRP.Event.VBus (V)
import Foreign.Object as Object
import Heterogeneous.Folding (hfoldlWithIndex)
import Joyride.App.Sandbox (sandbox)
import Joyride.App.Toplevel (toplevel)
import Joyride.Constants.Visual (initialOrientationDampening)
import Joyride.Effect.Ref (readFromRecord, writeToRecord)
import Joyride.EmitsTouchEvents (emitsTouchEvents)
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.FRP.BurningWhenHot (burningWhenHot)
import Joyride.FRP.Dedup (dedup)
import Joyride.FRP.Keypress (posFromKeypress, xForKeyboard)
import Joyride.FRP.Orientation (requestPermissionIsAFunction, posFromOrientation, xForTouch)
import Joyride.FRP.SampleOnSubscribe (sampleOnSubscribe)
import Joyride.Firebase.Analytics (firebaseAnalyticsAff)
import Joyride.Firebase.Auth (AuthProvider(..), authStateChangedEventWithAnonymousAccountCreation, firebaseAuthAff, initializeGoogleClient, signOut)
import Joyride.Firebase.Config (firebaseAppAff)
import Joyride.Firebase.Firestore (createRideIfNotExistsYet, eventChannelChanges, firestoreDbAff, getEventsAff, getPlayerForChannel, getProfileAff, getPublicTracksAff, getTrackAff, getTracksAff, getWhitelistedTracksAff, profileEvent, sendMyPointsAndPenaltiesToFirebase, turnOnRealtimePresenceAff)
import Joyride.Firebase.Opaque (FirebaseAuth, Firestore)
import Joyride.IO.ParFold (ParFold(..))
import Joyride.Ledger.Basic (basicOutcomeToPointOutcome, beatsToBasicOutcome)
import Joyride.Ledger.Long (longToPointOutcome)
import Joyride.LilGui (Slider(..), gui, noGui)
import Joyride.LocalStorage as LocalStorage
import Joyride.Navigation (navigateToHash)
import Joyride.Network.Download (dlInChunks)
import Joyride.Random (randId', randId)
import Joyride.Scores.AugmentedTypes (toAugmentedEvents)
import Joyride.Shaders.Galaxy (makeGalaxyAttributes)
import Joyride.Stats (makeStats)
import Joyride.Timing.CoordinatedNow (cnow)
import Joyride.Transport.PubNub as PN
import Ocarina.Interpret (AudioBuffer(..), context, makeAudioBuffer)
import Rito.CubeTexture as CubeTextureLoader
import Rito.GLTF as GLTFLoader
import Rito.THREE as THREE
import Rito.Texture (loadAff, loader)
import Route (Route(..), editorPath, orientationPermissionPath, route, tutorialPath)
import Routing.Duplex (parse)
import Routing.Duplex as R
import Routing.Hash.Link (matchesWith)
import Simple.JSON as JSON
import Type.Proxy (Proxy(..))
import Types (AppOrientationState(..), BufferName(..), Channel(..), ChannelChooser(..), CubeTexture, CubeTextures(..), HitBasicMe(..), HitBasicOverTheWire(..), HitLeapMe(..), HitLeapOverTheWire(..), HitLongMe(..), HitLongOverTheWire(..), IAm(..), InFlightGameInfo(..), InFlightGameInfo', JMilliseconds(..), KnownPlayers(..), Models(..), Negotiation(..), Penalty(..), Player(..), PlayerAction(..), PlayerPositionsF, PointOutcome, Points(..), Position, ReleaseLongMe(..), ReleaseLongOverTheWire(..), RenderingInfo, RenderingInfo', Ride(..), Shaders, StartStatus(..), Textures(..), ThreeDI, Track(..), WantsTutorial', initialPositions, touchPointZ)
import Web.Event.Event (EventType(..))
import Web.Event.EventTarget (addEventListener, eventListener)
import Web.HTML (window)
import Web.HTML.Location (hash, pathname, search, setHash)
import Web.HTML.Window (innerHeight, innerWidth, localStorage, location, toEventTarget)
import Web.Storage.Storage as LS

twoPi = 2.0 * pi :: Number

type StartStop = V (start :: Unit, stop :: Effect Unit)
type CanvasInfo = { x :: Number, y :: Number } /\ Number

foreign import useLilGui :: Effect Boolean
foreign import addStats :: Effect Boolean
foreign import force4 :: Effect Boolean

renderingInfoDesktop :: RenderingInfo' Slider
renderingInfoDesktop =
  { halfAmbitus: Slider { default: 3.1, min: 0.5, max: 4.4, step: 0.1 }
  , barZSpacing: Slider { default: 1.0, min: 0.1, max: 3.0, step: 0.1 }
  , cameraOffsetY: Slider { default: 0.55, min: 0.1, max: 3.0, step: 0.05 }
  , cameraRotationAroundX: Slider { default: -0.45, min: -1.0 * pi, max: pi, step: 0.05 }
  , cameraOffsetZ: Slider { default: 0.35, min: -0.5, max: 3.0, step: 0.05 }
  , lightOffsetY: Slider { default: 0.9, min: 0.00, max: 2.0, step: 0.05 }
  , sphereOffsetY: Slider { default: 0.2, min: 0.05, max: 0.5, step: 0.05 }
  }

renderingInfoMobile :: RenderingInfo' Slider
renderingInfoMobile =
  { halfAmbitus: Slider { default: 3.5, min: 0.5, max: 4.4, step: 0.1 }
  , barZSpacing: Slider { default: 1.0, min: 0.1, max: 3.0, step: 0.1 }
  , cameraOffsetY: Slider { default: 1.05, min: 0.1, max: 3.0, step: 0.05 }
  , cameraRotationAroundX: Slider { default: -0.15, min: -1.0 * pi, max: pi, step: 0.05 }
  , cameraOffsetZ: Slider { default: 1.45, min: -0.5, max: 3.0, step: 0.05 }
  , lightOffsetY: Slider { default: 0.9, min: 0.00, max: 2.0, step: 0.05 }
  , sphereOffsetY: Slider { default: 0.2, min: 0.05, max: 0.5, step: 0.05 }
  }

channelFromRoute :: Route -> Maybe String
channelFromRoute (Session ride _) = Just ride
channelFromRoute _ = Nothing

trackFromRoute :: Route -> Maybe String
trackFromRoute (Session _ track) = Just track
trackFromRoute _ = Nothing

type LeapUnsubscribes =
  { p1 :: Effect Unit
  , p2 :: Effect Unit
  , p3 :: Effect Unit
  , p4 :: Effect Unit
  }

foreign import useFirebaseEmulatorInDevMode :: Firestore -> FirebaseAuth -> Effect (Promise Unit)

constructAppendableKnownPlayersFromRide :: Ride -> KnownPlayers
constructAppendableKnownPlayersFromRide
  ( RideV0
      { player1
      , player2
      , player3
      , player4
      , player1StartTimeInMilliseconds
      , player2StartTimeInMilliseconds
      , player3StartTimeInMilliseconds
      , player4StartTimeInMilliseconds
      , player1Points
      , player2Points
      , player3Points
      , player4Points
      , player1Penalties
      , player2Penalties
      , player3Penalties
      , player4Penalties
      , player1Name
      , player2Name
      , player3Name
      , player4Name
      }
  ) = KnownPlayers (Map.fromFoldable (go Player1 player1 player1StartTimeInMilliseconds player1Points player1Penalties player1Name <> go Player2 player2 player2StartTimeInMilliseconds player2Points player2Penalties player2Name <> go Player3 player3 player3StartTimeInMilliseconds player3Points player3Penalties player3Name <> go Player4 player4 player4StartTimeInMilliseconds player4Points player4Penalties player4Name))
  where
  go :: Player -> Maybe String -> Maybe Number -> Maybe Number -> Maybe Number -> Maybe String -> Array (Tuple Player StartStatus)
  go pyr mplay mst mpoi mpen mname = case mplay of
    Just _ ->
      [ pyr /\ case mst of
          Nothing -> HasNotStartedYet
          Just st -> HasStarted $ InFlightGameInfo
            { startedAt: JMilliseconds st
            , points: maybe (Points 0.0) Points mpoi
            , name: mname
            , penalties: maybe (Penalty 0.0) Penalty mpen
            }
      ]
    Nothing -> []

getInFlightGameInfo :: StartStatus -> Maybe InFlightGameInfo
getInFlightGameInfo HasNotStartedYet = Nothing
getInFlightGameInfo (HasStarted inflight) = Just inflight

updateKnownPlayerPointsUsingRide :: Ride -> KnownPlayers -> KnownPlayers
updateKnownPlayerPointsUsingRide a b = (constructAppendableKnownPlayersFromRide a) <> b

sandboxed = false :: Boolean
type Query = { stats :: Maybe Boolean }

parseQuery :: String -> Maybe Query
parseQuery s = hush $ R.parse parser s
  where
  parser =
    R.params
      { stats: R.optional <<< R.boolean
      }

main
  :: Models String
  -> Shaders
  -> CubeTextures (CubeTexture String)
  -> Textures String
  -> Object.Object String
  -> Effect Unit
main (Models models) shaders (CubeTextures cubeTextures) (Textures textures) audio = {-monkeyPatchCreateImpl backdoor altCreate *>-}
  if sandboxed then runInBody sandbox
  else launchAff_ do
    -- hash adding
    askedForFPS <- liftEffect do
      sch <- window >>= location >>= search
      let res = fromMaybe false (join (_.stats <$> parseQuery sch))
      log ("Asked for stats: " <> show res)
      pure res
    liftEffect do
      l <- window >>= location
      hash l >>= case _ of
        "" -> do
          setHash "/" l
        _ -> pure unit
    -- orientation dampening
    -- todo: save in local storage
    dampeningRef <- liftEffect $ Ref.new initialOrientationDampening
    -- firebase
    fbApp <- firebaseAppAff
    -- for now don't use analytics
    _ <- firebaseAnalyticsAff fbApp
    firestoreDb <- firestoreDbAff fbApp
    fbAuth <- firebaseAuthAff fbApp
    -- cloudMessaging <- firebaseCloudMessagingAff fbApp
    toAffE $ useFirebaseEmulatorInDevMode firestoreDb fbAuth
    -- has orientation permission
    -- see if this helps get rid of the screen on iOS for successive plays
    -- if not, get rid of it and just use hasOrientationPermission
    canRequestPermission <- liftEffect requestPermissionIsAFunction
    liftEffect do
      -- auth
      signedInNonAnonymously' <- create
      initializeGoogleClient fbAuth do
        signedInNonAnonymously'.push true
      -- ONLY CALL THIS LISTENER ONCE, AT THE TOP LEVEL
      -- it is not idempotent across subsequent calls
      -- although for a single subscription it _is_ idempotent
      -- for each thunk
      -- TODO: do we want to do something interesting with unsubscrube?
      unsubscribeFromRealtimePresence <- Ref.new (wrap (pure unit))
      -- auth
      globalProfileEvent <- burningWhenHot
      globalProfileUnsubscribe <- Ref.new (pure unit)
      _ <- subscribe (authStateChangedEventWithAnonymousAccountCreation fbAuth) \{ user, provider } -> do
        Log.info ("I'm a user: " <> JSON.writeJSON user)
        case provider of
          AuthGoogle -> do
            join $ Ref.read globalProfileUnsubscribe
            launchAff_ (getProfileAff fbAuth firestoreDb >>= liftEffect <<< traverse_ globalProfileEvent.push)
            subscribe (profileEvent fbAuth firestoreDb) globalProfileEvent.push >>= flip Ref.write globalProfileUnsubscribe
            launchAff_ do
              turnOnRealtimePresenceAff fbApp firestoreDb fbAuth >>= liftEffect <<< flip Ref.write unsubscribeFromRealtimePresence
          AuthAnonymous -> do
            join $ Ref.read globalProfileUnsubscribe
            Ref.read unsubscribeFromRealtimePresence >>= unwrap
            Ref.write (wrap (pure unit)) unsubscribeFromRealtimePresence
        signedInNonAnonymously'.push case provider of
          AuthGoogle -> true
          AuthAnonymous -> false
      -- in the current architecture,
      -- we never unsubscribe from this, as it is at the top level
      -- if moved down to internal scopes, we need to run the unsubscribe when it moves out of scope!
      signedInNonAnonymously <- Event.burning false signedInNonAnonymously'.event
      -- timing
      myCNow <- cnow
      let mappedCNow = _.time <$> myCNow.cnow
      -- window
      w <- window
      -- storage
      stor <- localStorage w
      -- events
      resizeE <- Event.create
      loaded <- Event.create
      negotiation <- Event.create
      pushBasic :: Event.EventIO HitBasicMe <- Event.create
      pushLeap :: Event.EventIO HitLeapMe <- Event.create
      pushHitLong :: Event.EventIO HitLongMe <- Event.create
      pushReleaseLong :: Event.EventIO ReleaseLongMe <- Event.create
      -- is this mobile
      isMobile <- emitsTouchEvents
      ----- gui
      launchAff_ do
        { debug, renderingInfo } <- liftEffect useLilGui >>= (if _ then gui else noGui) >>> (_ $ (if isMobile then renderingInfoMobile else renderingInfoDesktop))
        stats <- liftEffect (addStats >>= ((_ || askedForFPS) >>> if _ then Just <$> makeStats else pure Nothing))
        liftEffect do
          let renderingInfoBehavior = refToBehavior renderingInfo
          -- low priority event
          unschedule <- Ref.new Map.empty
          -- unsubscribe from previous channel
          channelUnsub <- Ref.new (pure unit)
          let
            lowPriorityCb k v = do
              n <- Random.random
              Ref.modify_ (Map.insert (k + JMilliseconds (n * 0.25)) v) unschedule
          idleCallbackId <- liftEffect $ new Nothing
          ctx' <- context
          silence <- makeAudioBuffer ctx' (AudioBuffer 44100 [ replicate 1000 0.0 ])
          -- path parsing
          resizeListener <- eventListener \_ -> do
            ({ iw: _, ih: _ } <$> (Int.toNumber <$> innerWidth w) <*> (Int.toNumber <$> innerHeight w)) >>= resizeE.push
          addEventListener (EventType "resize") resizeListener true (toEventTarget w)
          -- sound stash
          soundObj <- liftEffect $ Ref.new Object.empty
          channelEvent <- liftEffect $ Event.create
          columnPusher <- liftEffect $ Event.create
          orientationPerm <- liftEffect $ Event.create

          ----- BEGIN ROUTING
          routeE <- liftEffect $ create
          { navigateTo } <- liftEffect $ matchesWith route (curry routeE.push)
          let
            routyMcRouteRoute (fsm /\ old /\ new) = do
              logShow { fsm, old, new }
              let
                channelProp x y = launchAff_ $ do
                  proposedChannel' <- do
                    track <- getTrackAff firestoreDb y
                    pure $ maybe NoChannel (RideChannel x y) track
                  liftEffect $ channelEvent.push proposedChannel'
              let
                saneStart = case new of
                  Home -> channelEvent.push NoChannel
                  Session x y -> channelProp x y
                  Tutorial -> channelEvent.push TutorialChannel
                  Settings -> negotiation.push
                    ( SetSomeStuff
                        { dampeningRef
                        , myProfile: globalProfileEvent.event
                        , firestoreDb
                        , fbAuth
                        , signedInNonAnonymously: signedInNonAnonymously.event
                        }
                    )
                  Editor -> channelEvent.push EditorChannel
                  TakeThisRide track' id -> do
                    cid <- randId' 6
                    launchAff_ do
                      track <- maybe (getTrackAff firestoreDb id) (pure <<< Just) track'
                      liftEffect $ case track of
                        Just track'' -> channelEvent.push (RideChannel cid id track'')
                        -- todo: better result
                        Nothing -> navigateToHash ""
                  TakeRide -> launchAff_ do
                    liftEffect $ log "Got take ride as instuction"
                    rides <- map (nubBy (compare `on` _.id) <<< join) $ parSequence
                      [ getPublicTracksAff firestoreDb
                      , guard fsm.signedInNonAnon (getTracksAff fbAuth firestoreDb)
                      , guard fsm.signedInNonAnon (getWhitelistedTracksAff fbAuth firestoreDb)
                      ]
                    liftEffect do
                      logShow { msg: "Got rides", rides }
                      negotiation.push (ChooseRide rides navigateTo)
                  OrientationPermissionWithoutRideRequest -> negotiation.push (NeedsOrientation Nothing)
                  OrientationPermissionWithRideRequest x y -> negotiation.push (NeedsOrientation (Just { ride: x, track: y }))
              case fsm.orientationPermission of
                -- if we have successfully gotten the orientation permission, then we just start
                SuccessfulOrientationPermission -> saneStart
                -- if we have rejected the orientation permission, then show a screen stating that
                CannotUseAppDueToLackOfOrientationPermission -> negotiation.push WillNotWorkWithoutOrientation
                -- if we don't know the orientation permission, then...
                UnknownOrientationPermission -> do
                  case new of
                    -- if we are navigating to an orientation permission page, show it
                    OrientationPermissionWithoutRideRequest -> negotiation.push (NeedsOrientation Nothing)
                    -- if we are navigating to an orientation permission page, show it
                    OrientationPermissionWithRideRequest x y -> negotiation.push (NeedsOrientation (Just { ride: x, track: y }))
                    -- if it is any other page...
                    _ ->
                      ( -- if we do not have the orientation permission, then navigate to the orientation permission path
                        if canRequestPermission then case new of
                          Session x y -> navigateToHash (orientationPermissionPath <> "/" <> x <> "/" <> y)
                          _ -> navigateToHash orientationPermissionPath
                        -- otherwise just start
                        else saneStart
                      )
          _ <- liftEffect $ subscribe
            -- sometimes the fsm will change but the route won't
            -- to prevent this, we filter out all duplicate routes
            ( filter (\(_ /\ old /\ new) -> old /= Just new)
                ( mapAccum
                    ( \fsm { rev: old /\ new, orev, sinon } -> do
                        let
                          newFsmState = case orev of
                            Just true -> SuccessfulOrientationPermission
                            Just false -> CannotUseAppDueToLackOfOrientationPermission
                            Nothing -> fsm.orientationPermission
                        let nfsm = fsm { orientationPermission = newFsmState, signedInNonAnon = sinon }
                        nfsm /\ (nfsm /\ old /\ new)
                    )
                    { orientationPermission: UnknownOrientationPermission, signedInNonAnon: false }
                    ({ rev: _, orev: _, sinon: _ } <$> routeE.event <*> (pure Nothing <|> map Just orientationPerm.event) <*> signedInNonAnonymously.event)
                )
            )
            (routyMcRouteRoute)
          liftEffect do
            initialHash <- map (String.replace (String.Pattern "#") (String.Replacement "")) (window >>= location >>= hash)
            case (parse route initialHash) of
              Left e -> do
                logShow { msg: "malformed initial path", e, initialHash }
                routeE.push (Nothing /\ Home)
              Right h -> do
                log $ "initial route " <> show h
                routeE.push (Nothing /\ h)
            pure unit
          ----- END ROUTING
          ----- END ROUTING
          ----- END ROUTING
          ----- END ROUTING
          -- get the html. could be even sooner if we passed more stuff in on success instead of creating it at the top level
          runInBody
            ( toplevel
                { loaded: loaded.event
                , ride: \(id /\ track) -> do
                    cid <- randId' 6
                    channelEvent.push (RideChannel cid id track)
                , negotiation: negotiation.event
                , tutorial: navigateToHash tutorialPath -- channelEvent.push TutorialChannel
                , editor: navigateToHash editorPath -- channelEvent.push EditorChannel
                , isMobile
                , lpsCallback: lowPriorityCb
                , givePermission: orientationPerm.push
                , pushBasic
                , pushLeap
                , columnPusher
                , pushHitLong: pushHitLong
                , pushReleaseLong: pushReleaseLong
                , resizeE: resizeE.event
                , goHome: do
                    -- clear the channel
                    navigateToHash ""
                , renderingInfo: renderingInfoBehavior
                , debug
                , silence
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
            threeDI :: ThreeDI <- sequential $ hfoldlWithIndex ParFold (pure {} :: ParAff {})
              { scene: THREE.sceneAff
              , vector2: THREE.vector2Aff
              , vector3: THREE.vector3Aff
              , meshStandardMaterial: THREE.meshStandardMaterialAff
              , bufferGeometry: THREE.bufferGeometryAff
              , points: THREE.pointsAff
              , meshPhongMaterial: THREE.meshPhongMaterialAff
              , boxGeometry: THREE.boxGeometryAff
              , cylinderGeometry: THREE.cylinderGeometryAff
              , pointLight: THREE.pointLightAff
              , ambientLight: THREE.ambientLightAff
              , css2DObject: THREE.css2DObjectAff
              , webGLRenderer: THREE.webGLRendererAff
              , effectComposer: THREE.effectComposerAff
              , effectComposerPass: THREE.effectComposerPassAff
              , unrealBloomPass: THREE.unrealBloomPassAff
              , glitchPass: THREE.glitchPassAff
              , renderPass: THREE.renderPassAff
              , color: THREE.colorAff
              , instancedMesh: THREE.instancedMeshAff
              , euler: THREE.eulerAff
              , raycaster: THREE.raycasterAff
              , mesh: THREE.meshAff
              , perspectiveCamera: THREE.perspectiveCameraAff
              , matrix4: THREE.matrix4Aff
              , plane: THREE.planeGeometryAff
              , bufferAttribute: THREE.bufferAttributeAff
              , instancedBufferAttribute: THREE.instancedBufferAttributeAff
              , shaderMaterial: THREE.shaderMaterialAff
              , gltfLoader: THREE.gltfLoaderAff
              , cubeTextureLoader: THREE.cubeTextureLoaderAff
              , sphereGeometry: THREE.sphereGeometryAff
              , css2DRenderer: THREE.css2DRendererAff
              , css3DObject: THREE.css3DObjectAff
              , css3DRenderer: THREE.css3DRendererAff
              , group: THREE.groupAff
              , textureLoader: THREE.textureLoaderAff
              }
            ldr <- liftEffect $ loader threeDI.textureLoader
            cldr <- liftEffect $ CubeTextureLoader.loader threeDI.cubeTextureLoader
            gldr <- liftEffect $ GLTFLoader.loader threeDI.gltfLoader
            --       , textures: Textures downloadedTextures
            downloadedTextures <- forkAff (fromHomogeneous <$> parTraverse (loadAff ldr) (homogeneous textures))
            downloadedGLTFs <- forkAff (fromHomogeneous <$> parTraverse (GLTFLoader.loadAff gldr) (homogeneous models))
            downloadedCubeTextures <- forkAff (fromHomogeneous <$> parTraverse ((CubeTextureLoader.loadAffRecord cldr)) (map unwrap $ homogeneous cubeTextures))
            -- "server" via pubnub
            let galaxyAttributes = makeGalaxyAttributes threeDI.instancedBufferAttribute
            let
              buildWantsTutorial :: Aff WantsTutorial'
              buildWantsTutorial = do
                knownPlayers :: Ref.Ref KnownPlayers <- liftEffect $ Ref.new $ KnownPlayers Map.empty
                knownPlayersBus <- liftEffect Event.create
                ---- TODO: this is a copy/paste from below with the pubnub taken out
                ---- refactor to combine!!!
                xPosE <- liftEffect $ if isMobile then xForTouch dampeningRef mappedCNow w Player4 mempty else xForKeyboard mappedCNow w Player4 mempty
                -- ignore subscription
                ----- player positions
                playerPositions <- liftEffect $ Ref.read renderingInfo >>= \ri -> Ref.new (initialPositions ri)
                _ <- liftEffect $ subscribe xPosE \xp -> writeToRecord (Proxy :: _ "p4x") xp playerPositions
                -- deal with incoming basics
                _ <- liftEffect $ subscribe pushBasic.event \(HitBasicMe bt) -> do
                  let outcome = basicOutcomeToPointOutcome $ beatsToBasicOutcome bt.deltaBeats
                  kp <- updateKnownPlayerPoints Player4 outcome knownPlayers
                  knownPlayersBus.push kp
                _ <- liftEffect $ subscribe pushReleaseLong.event \(ReleaseLongMe rl) -> do
                  let outcome = longToPointOutcome rl.distance rl.pctConsumed
                  kp <- updateKnownPlayerPoints Player4 outcome knownPlayers
                  knownPlayersBus.push kp
                -- deal with incoming leaps
                leapUnsubscribesRef <- liftEffect $ Ref.new (mempty :: LeapUnsubscribes)
                _ <- liftEffect $ subscribe pushLeap.event \(HitLeapMe bt) -> do
                  magicLeaps leapUnsubscribesRef mappedCNow playerPositions renderingInfoBehavior { player: Player4, newPosition: bt.newPosition }
                ---- end TODO
                let
                  -- TODO: this is only necessary for the tutorial, not the preview mode
                  -- we can make a flag to get rid of this stuff when it's not needed
                  bufferNames :: List (BufferName /\ String)
                  bufferNames = (BufferName "tutorial" /\ "tutorial")
                    : (BufferName "shakuhachi0" /\ "shakuhachi0")
                    : (BufferName "shakuhachi1" /\ "shakuhachi1")
                    : (BufferName "shakuhachi2" /\ "shakuhachi2")
                    : (BufferName "shakuhachi3" /\ "shakuhachi3")
                    : (BufferName "floorTom" /\ "floorTom")
                    : (BufferName "floorTom" /\ "floorTom")
                    : (BufferName "elvedenHallLordsCloakroom" /\ "elvedenHallLordsCloakroom")
                    : Nil
                let n2oh = take 300 bufferNames
                let n2ot = drop 300 bufferNames
                dlInChunks audio 100 n2oh ctx' soundObj
                liftEffect $ loaded.push true
                dlInChunks audio 100 n2ot ctx' soundObj
                myTextures <- joinFiber downloadedTextures
                myGLTFs <- joinFiber downloadedGLTFs
                myCubeTextures <- joinFiber downloadedCubeTextures
                liftEffect do
                  longVerb <- fromMaybe silence <<< Object.lookup "elvedenHallLordsCloakroom" <$> Ref.read soundObj
                  -- resize
                  initialDims <- { iw: _, ih: _ }
                    <$> (Int.toNumber <$> innerWidth w)
                    <*> (Int.toNumber <$> innerHeight w)
                  pure
                    { player: Player4
                    , threeDI
                    , initialDims
                    , stats
                    , shaders
                    , galaxyAttributes
                    , cNow: mappedCNow
                    , playerPositions: refToBehavior playerPositions
                    , models: Models myGLTFs
                    , textures: Textures myTextures
                    , cubeTextures: CubeTextures myCubeTextures
                    , longVerb
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
                        players <- Ref.modify (KnownPlayers (Map.singleton Player4 (HasStarted $ InFlightGameInfo { startedAt: ms, points: Points 0.0, penalties: Penalty 0.0, name: Nothing })) <> _) knownPlayers
                        knownPlayersBus.push players
                    }
            void $ liftEffect $ subscribe channelEvent.event \chan -> launchAff_ $ do
              Log.info ("received channel " <> show chan)
              liftEffect $ join $ Ref.read channelUnsub
              case chan of
                EditorChannel -> do
                  liftEffect $ negotiation.push StartingNegotiation
                  wt <- buildWantsTutorial
                  liftEffect $ negotiation.push $ OpenEditor
                    { oe:
                        { fbAuth
                        , firestoreDb
                        , stats
                        , goBack: do
                            -- clear the channel
                            navigateToHash ""
                        -- we throw in a dedup just cuz we only ever want to track actual changes
                        -- if random stuff fires a lot, the event should stillb e idempotent
                        , signedInNonAnonymously: dedup signedInNonAnonymously.event
                        }
                    , wt
                    }
                TutorialChannel -> do
                  liftEffect $ negotiation.push StartingNegotiation
                  wt <- buildWantsTutorial
                  liftEffect $ negotiation.push $ WantsTutorial wt
                NoChannel -> do
                  myGLTFs <- joinFiber downloadedGLTFs
                  myCubeTextures <- joinFiber downloadedCubeTextures
                  initialDims <- liftEffect $ { iw: _, ih: _ }
                    <$> (Int.toNumber <$> innerWidth w)
                    <*> (Int.toNumber <$> innerHeight w)
                  liftEffect $ negotiation.push
                    ( GetRulesOfGame
                        { threeDI
                        , initialDims
                        , stats
                        , firestoreDb
                        , fbAuth
                        , models: Models myGLTFs
                        , signOut: launchAff_ do
                            toAffE $ signOut fbAuth (pure unit)
                        , cubeTextures: CubeTextures myCubeTextures
                        , cNow: mappedCNow
                        , signedInNonAnonymously: signedInNonAnonymously.event
                        }
                    )
                RideChannel proposedChannel trackId track -> do
                  -- maybe is not ideal here
                  -- what it means semantically is "player exists but has not started"
                  -- a new type for this?
                  knownPlayers :: Ref.Ref KnownPlayers <- liftEffect $ Ref.new $ KnownPlayers Map.empty
                  -- for when we need to ping _both_ pubnub and ourselves internally with the same data
                  -- this is the case, for example, with points
                  -- we want to update our own _and_ others' points
                  knownPlayersBus <- liftEffect $ Event.create
                  liftEffect $ negotiation.push StartingNegotiation
                  f4 <- liftEffect force4
                  myChannel <- createRideIfNotExistsYet firestoreDb proposedChannel
                  liftEffect do
                    usu <- subscribe (eventChannelChanges firestoreDb myChannel) \ride -> do
                      kp <- Ref.modify (updateKnownPlayerPointsUsingRide ride) knownPlayers
                      knownPlayersBus.push kp
                    Ref.write usu channelUnsub
                  pubNub <- do
                    { event, publish } <- PN.pubnub (IAm iAm) (Channel myChannel)
                    pure
                      { publish
                      , event: filterMap
                          ( \(PN.PubNubEvent pne) -> if pne.message.iAm /= iAm then Just pne.message.action else Nothing
                          )
                          event
                      }
                  leapUnsubscribesRef <- liftEffect $ Ref.new (mempty :: LeapUnsubscribes)
                  -- we immediately issue a subscription for all the stuff we can always listen to
                  ----- player positions
                  playerPositions <- liftEffect $ Ref.read renderingInfo >>= \ri -> Ref.new (initialPositions ri)
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
                      -- if we get a hit leap, we need to generate an event that will change the position
                      HitLeap (HitLeapOverTheWire hl) -> magicLeaps leapUnsubscribesRef mappedCNow playerPositions renderingInfoBehavior hl
                      -- if we hear a hit basic, we update the known players
                      HitBasic (HitBasicOverTheWire { player, outcome }) -> do
                        kp <- updateKnownPlayerPoints player outcome knownPlayers
                        logShow { player, outcome, kp }
                        knownPlayersBus.push kp
                      -- if we hear a hit basic, we do nothing, as points are only attributed on release
                      -- Pressed start
                      PressedStart { startedAt, name, player } -> do
                        kp <- Ref.modify
                          ( append
                              ( KnownPlayers $ Map.singleton player
                                  ( HasStarted
                                      ( InFlightGameInfo
                                          { name
                                          , startedAt
                                          , points: Points 0.0
                                          , penalties: Penalty 0.0
                                          }
                                      )
                                  )
                              )
                          )
                          knownPlayers
                        knownPlayersBus.push kp
                      HitLong _ -> notRelevant
                      -- if we hear a hit basic, we can update the points
                      ReleaseLong (ReleaseLongOverTheWire { player, outcome }) -> do
                        kp <- updateKnownPlayerPoints player outcome knownPlayers
                        knownPlayersBus.push kp
                      -- we update the xposition for when the behavior needs it
                      XPositionKeyboard i -> do
                        -- Log.info $ show i.ktp
                        -- mcn <- myCNow.cnow
                        -- Log.info $ show mcn
                        -- Log.info $ show ((lcmap _.epochTime $ posFromKeypress i.ktp) {epochTime: coerce mcn.time})
                        pfun i.player (lcmap _.epochTime $ posFromKeypress i.ktpd) playerPositions
                      -- we update the xposition for when the behavior needs it
                      XPositionMobile i -> pfun i.player (lcmap _.epochTime $ posFromOrientation i.gtpd) playerPositions
                  let
                    myPlayerHint = if f4 then Just Player4 else Nothing
                  -- collecting <- forkAff  $ collectEventToAff (Milliseconds 750.0) knownPlayersBus.event
                  (playerOrBust :: Maybe Player) <- getPlayerForChannel fbAuth firestoreDb myChannel myPlayerHint
                  case playerOrBust of
                    Nothing -> do
                      liftEffect $ negotiation.push GameHasStarted
                      never
                    Just myPlayer -> do
                      liftEffect $ Ref.modify_ (KnownPlayers (Map.singleton myPlayer HasNotStartedYet) <> _) knownPlayers
                      xPosE <- liftEffect $ if isMobile then xForTouch dampeningRef mappedCNow w myPlayer pubNub.publish else xForKeyboard mappedCNow w myPlayer pubNub.publish
                      -- ignore subscription
                      _ <- liftEffect $ subscribe xPosE \xp -> case myPlayer of
                        Player1 -> writeToRecord (Proxy :: _ "p1x") xp playerPositions
                        Player2 -> writeToRecord (Proxy :: _ "p2x") xp playerPositions
                        Player3 -> writeToRecord (Proxy :: _ "p3x") xp playerPositions
                        Player4 -> writeToRecord (Proxy :: _ "p4x") xp playerPositions
                      -- deal with incoming basics
                      _ <- liftEffect $ subscribe pushBasic.event \(HitBasicMe bt) -> do
                        let outcome = basicOutcomeToPointOutcome $ beatsToBasicOutcome bt.deltaBeats
                        kp <- updateKnownPlayerPoints myPlayer outcome knownPlayers
                        knownPlayersBus.push kp
                        for_ (Map.lookup myPlayer (unwrap kp) >>= getInFlightGameInfo) \(InFlightGameInfo { penalties, points }) -> do
                          launchAff_ $ sendMyPointsAndPenaltiesToFirebase firestoreDb fbAuth myChannel myPlayer points penalties
                        pubNub.publish
                          $ HitBasic
                              ( HitBasicOverTheWire
                                  { uniqueId: bt.uniqueId
                                  , logicalBeat: bt.logicalBeat
                                  , deltaBeats: bt.deltaBeats
                                  , hitAt: bt.hitAt
                                  , player: myPlayer
                                  , outcome
                                  }
                              )
                      _ <- liftEffect $ subscribe pushHitLong.event \(HitLongMe bt) -> do
                        pubNub.publish
                          $ HitLong
                              ( HitLongOverTheWire
                                  { uniqueId: bt.uniqueId
                                  , hitAt: bt.hitAt
                                  , distance: bt.distance
                                  , player: myPlayer
                                  }
                              )
                      _ <- liftEffect $ subscribe pushReleaseLong.event \(ReleaseLongMe rl) -> do
                        let outcome = longToPointOutcome rl.distance rl.pctConsumed
                        kp <- updateKnownPlayerPoints myPlayer outcome knownPlayers
                        knownPlayersBus.push kp
                        for_ (Map.lookup myPlayer (unwrap kp) >>= getInFlightGameInfo) \(InFlightGameInfo { penalties, points }) -> do
                          launchAff_ $ sendMyPointsAndPenaltiesToFirebase firestoreDb fbAuth myChannel myPlayer points penalties
                        pubNub.publish
                          $ ReleaseLong
                              ( ReleaseLongOverTheWire
                                  { uniqueId: rl.uniqueId
                                  , hitAt: rl.hitAt
                                  , player: myPlayer
                                  , distance: rl.distance
                                  , pctConsumed: rl.pctConsumed
                                  , releasedAt: rl.releasedAt
                                  , outcome
                                  }
                              )
                      -- deal with incoming leaps
                      _ <- liftEffect $ subscribe pushLeap.event \(HitLeapMe bt) -> do
                        magicLeaps leapUnsubscribesRef mappedCNow playerPositions renderingInfoBehavior { player: myPlayer, newPosition: bt.newPosition }
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
                        TrackV0 tv0 = track

                        bufferNames :: List (BufferName /\ String)
                        bufferNames = (BufferName tv0.url /\ tv0.url) : Nil
                      let n2oh = take 300 bufferNames
                      let n2ot = drop 300 bufferNames
                      let dumb = Object.fromFoldable (map (\(BufferName n /\ s) -> n /\ s) bufferNames)
                      dlInChunks dumb 100 n2oh ctx' soundObj
                      liftEffect $ loaded.push true
                      dlInChunks dumb 100 n2ot ctx' soundObj
                      locallyStoredPlayerNameInCaseThisIsAnAnonymousSession <- liftEffect $ LS.getItem LocalStorage.playerName stor
                      myTextures <- joinFiber downloadedTextures
                      myGLTFs <- joinFiber downloadedGLTFs
                      myCubeTextures <- joinFiber downloadedCubeTextures
                      initialDims <- liftEffect $ { iw: _, ih: _ }
                        <$> (Int.toNumber <$> innerWidth w)
                        <*> (Int.toNumber <$> innerHeight w)
                      ets <- getEventsAff firestoreDb trackId
                      liftEffect $ negotiation.push $ Success
                        { player: myPlayer
                        , trackId
                        , stats
                        , track
                        , events: toAugmentedEvents (map _.data ets)
                        , initialDims
                        , threeDI
                        , locallyStoredPlayerNameInCaseThisIsAnAnonymousSession
                        , shaders
                        , galaxyAttributes
                        , cNow: mappedCNow
                        , playerPositions: refToBehavior playerPositions
                        , models: Models myGLTFs
                        , channelName: myChannel
                        , pubNubEvent: pubNub.event
                        , textures: Textures myTextures
                        , profileEvent: globalProfileEvent.event
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
                        , optMeIn: \ms name -> do
                            let thisIsMyRealName = name <|> locallyStoredPlayerNameInCaseThisIsAnAnonymousSession
                            for_ name \name' -> LS.setItem LocalStorage.playerName name' stor
                            players <- Ref.modify (KnownPlayers (Map.singleton myPlayer (HasStarted $ InFlightGameInfo { startedAt: ms, points: Points 0.0, penalties: Penalty 0.0, name: thisIsMyRealName })) <> _) knownPlayers
                            -- let others know I've opted in
                            pubNub.publish $ PressedStart
                              { startedAt: ms
                              , name: thisIsMyRealName
                              , player: myPlayer
                              }
                            knownPlayersBus.push players
                        }

defaultInFlightGameInfo :: InFlightGameInfo'
defaultInFlightGameInfo =
  { points: Points 0.0
  , penalties: Penalty 0.0
  , startedAt: JMilliseconds top
  , name: Nothing
  }

updateKnownPlayerPoints
  :: Player
  -> PointOutcome
  -> Ref.Ref KnownPlayers
  -> Effect KnownPlayers
updateKnownPlayerPoints player outcome knownPlayers = do
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

magicLeaps :: Ref.Ref LeapUnsubscribes -> Effect Milliseconds -> Ref.Ref PlayerPositionsF -> Behavior RenderingInfo -> forall r. { player :: Player, newPosition :: Position | r } -> Effect Unit
magicLeaps leapUnsubscribesRef mappedCNow pPos renderingInfoBehavior pnp = do
  wholeRec <- Ref.read pPos
  oldPosition <- case pnp.player of
    Player1 -> readFromRecord (Proxy :: _ "p1p") pPos
    Player2 -> readFromRecord (Proxy :: _ "p2p") pPos
    Player3 -> readFromRecord (Proxy :: _ "p3p") pPos
    Player4 -> readFromRecord (Proxy :: _ "p4p") pPos
  -- should never be nothing. make safer?
  let movedPlayer = if wholeRec.p1p == pnp.newPosition then Just Player1 else if wholeRec.p2p == pnp.newPosition then Just Player2 else if wholeRec.p3p == pnp.newPosition then Just Player3 else if wholeRec.p4p == pnp.newPosition then Just Player4 else Nothing
  magicLeap leapUnsubscribesRef mappedCNow pPos renderingInfoBehavior pnp
  for_ movedPlayer \player -> magicLeap leapUnsubscribesRef mappedCNow pPos renderingInfoBehavior { player, newPosition: oldPosition }

magicLeap :: Ref.Ref LeapUnsubscribes -> Effect Milliseconds -> Ref.Ref PlayerPositionsF -> Behavior RenderingInfo -> forall r. { player :: Player, newPosition :: Position | r } -> Effect Unit
magicLeap leapUnsubscribesRef mappedCNow pPos renderingInfoBehavior hl = do
  leapUnsubscribes <- Ref.read leapUnsubscribesRef
  case hl.player of
    Player1 -> leapUnsubscribes.p1
    Player2 -> leapUnsubscribes.p2
    Player3 -> leapUnsubscribes.p3
    Player4 -> leapUnsubscribes.p4
  startsAt <- unwrap <$> mappedCNow
  case hl.player of
    Player1 -> writeToRecord (Proxy :: _ "p1p") hl.newPosition pPos
    Player2 -> writeToRecord (Proxy :: _ "p2p") hl.newPosition pPos
    Player3 -> writeToRecord (Proxy :: _ "p3p") hl.newPosition pPos
    Player4 -> writeToRecord (Proxy :: _ "p4p") hl.newPosition pPos
  startY <- case hl.player of
    Player1 -> readFromRecord (Proxy :: _ "p1y") pPos
    Player2 -> readFromRecord (Proxy :: _ "p2y") pPos
    Player3 -> readFromRecord (Proxy :: _ "p3y") pPos
    Player4 -> readFromRecord (Proxy :: _ "p4y") pPos
  startZ <- case hl.player of
    Player1 -> readFromRecord (Proxy :: _ "p1z") pPos
    Player2 -> readFromRecord (Proxy :: _ "p2z") pPos
    Player3 -> readFromRecord (Proxy :: _ "p3z") pPos
    Player4 -> readFromRecord (Proxy :: _ "p4z") pPos
  let endY = 0.0
  newSub <- subscribe (sample_ renderingInfoBehavior animationFrame) \ri -> do
    let endZ = touchPointZ ri hl.newPosition
    n <- unwrap <$> mappedCNow
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
      Player1 -> writeToRecord (Proxy :: _ "p1z") cz pPos
      Player2 -> writeToRecord (Proxy :: _ "p2z") cz pPos
      Player3 -> writeToRecord (Proxy :: _ "p3z") cz pPos
      Player4 -> writeToRecord (Proxy :: _ "p4z") cz pPos
    case hl.player of
      Player1 -> writeToRecord (Proxy :: _ "p1y") cy pPos
      Player2 -> writeToRecord (Proxy :: _ "p2y") cy pPos
      Player3 -> writeToRecord (Proxy :: _ "p3y") cy pPos
      Player4 -> writeToRecord (Proxy :: _ "p4y") cy pPos
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
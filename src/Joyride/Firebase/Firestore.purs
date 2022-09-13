module Joyride.Firebase.Firestore where

import Prelude

import Control.Alt ((<|>))
import Control.Promise (Promise, toAffE)
import Data.Either (Either(..))
import Data.Maybe (Maybe(..))
import Data.Newtype (class Newtype)
import Data.Traversable (traverse)
import Effect (Effect)
import Effect.Aff (Aff, error, launchAff_, throwError, try)
import Effect.Class (liftEffect)
import Effect.Console (errorShow)
import Effect.Ref as Ref
import FRP.Event (Event, makeEvent)
import Foreign (Foreign)
import Joyride.Firebase.Opaque (FirebaseApp, FirebaseAuth, Firestore)
import Simple.JSON as JSON
import Types (Column, Event_, Penalty(..), Player(..), Points(..), Profile, Ride(..), RideV0', Track, columnToInt, defaultRide)

foreign import firestoreDb :: FirebaseApp -> Effect (Promise Firestore)

firestoreDbAff :: FirebaseApp -> Aff Firestore
firestoreDbAff = toAffE <<< firestoreDb

type DocumentReference =
  { id :: String
  , path :: String
  }

data DocumentSnapshot

--
foreign import addTrack :: Firestore -> Foreign -> Effect (Promise DocumentReference)

addTrackAff :: Firestore -> Track -> Aff DocumentReference
addTrackAff fs r = toAffE $ addTrack fs (removeUndefineds (JSON.writeImpl r))

foreign import forkTrack :: FirebaseAuth -> Firestore -> String -> Effect (Promise Unit)

forkTrackAff :: FirebaseAuth -> Firestore -> String -> Aff Unit
forkTrackAff au fs r = toAffE $ forkTrack au fs r

foreign import getTrack :: Firestore -> String -> Effect (Promise Foreign)

foreign import getProfile :: Maybe Profile -> (Profile -> Maybe Profile) -> FirebaseAuth -> Firestore -> Effect (Promise (Maybe Foreign))

foreign import updateProfileUsername :: FirebaseAuth -> Firestore -> String -> Effect (Promise Unit)
foreign import updateProfileAvatarURL :: FirebaseAuth -> Firestore -> String -> Effect (Promise Unit)

updateProfileUsernameAff :: FirebaseAuth -> Firestore -> String -> Aff Unit
updateProfileUsernameAff auth db username = toAffE $ updateProfileUsername auth db username
updateProfileAvatarURLAff :: FirebaseAuth -> Firestore -> String -> Aff Unit
updateProfileAvatarURLAff auth db avatarURL = toAffE $ updateProfileAvatarURL auth db avatarURL

getProfileAff :: FirebaseAuth -> Firestore -> Aff (Maybe Profile)
getProfileAff auth db = do
  toAffE (getProfile Nothing Just auth db) >>= traverse
    ( JSON.read >>> case _ of
        Left e -> throwError (error (show e))
        Right r -> pure r
    )

foreign import listenToProfile :: (Foreign -> Effect Unit) -> FirebaseAuth -> Firestore -> Effect (Promise (Effect Unit))

profileEvent :: FirebaseAuth -> Firestore -> Event Profile
profileEvent auth firestore = makeEvent \k -> do
  usu <- Ref.new (pure unit)
  let
    listener = JSON.read >>> case _ of
      Left e -> errorShow e
      Right r -> k r
  launchAff_ do
    u <- toAffE $ listenToProfile listener auth firestore
    liftEffect $ Ref.write u usu
  pure (join $ Ref.read usu)

newtype UnsubscribeFromRealtimePresence = UnsubscribeFromRealtimePresence (Effect Unit)

derive instance Newtype UnsubscribeFromRealtimePresence _

foreign import turnOnRealtimePresence :: FirebaseApp -> Firestore -> FirebaseAuth -> Effect (Promise UnsubscribeFromRealtimePresence)

turnOnRealtimePresenceAff :: FirebaseApp -> Firestore -> FirebaseAuth -> Aff UnsubscribeFromRealtimePresence
turnOnRealtimePresenceAff fbApp fst auth = toAffE (turnOnRealtimePresence fbApp fst auth)

getTrackAff :: Firestore -> String -> Aff (Maybe Track)
getTrackAff fs id = do
  ds <- toAffE $ getTrack fs id
  case JSON.read ds of
    Right r -> pure r
    Left e -> throwError (error (show e))

foreign import updateTrackTitle :: Firestore -> String -> String -> Effect (Promise Unit)

updateTrackTitleAff :: Firestore -> String -> String -> Aff Unit
updateTrackTitleAff a b c = toAffE $ updateTrackTitle a b c

foreign import updateTrackPrivate :: Firestore -> String -> Boolean -> Effect (Promise Unit)

updateTrackPrivateAff :: Firestore -> String -> Boolean -> Aff Unit
updateTrackPrivateAff a b c = toAffE $ updateTrackPrivate a b c

foreign import addTagToTrack :: Firestore -> String -> String -> Effect (Promise Unit)

addTagToTrackAff :: Firestore -> String -> String -> Aff Unit
addTagToTrackAff a b c = toAffE $ addTagToTrack a b c

foreign import removeTagFromTrack :: Firestore -> String -> String -> Effect (Promise Unit)

removeTagFromTrackAff :: Firestore -> String -> String -> Aff Unit
removeTagFromTrackAff a b c = toAffE $ addTagToTrack a b c

foreign import addEvent :: Firestore -> String -> Foreign -> Effect (Promise DocumentReference)

addEventAff :: Firestore -> String -> Event_ -> Aff DocumentReference
addEventAff fs id r = toAffE $ addEvent fs id (removeUndefineds (JSON.writeImpl r))

foreign import getEvent :: Firestore -> String -> String -> Effect (Promise Foreign)

getEventAff :: Firestore -> String -> String -> Aff (Maybe Event_)
getEventAff fs id0 id1 = do
  ds <- toAffE $ getEvent fs id0 id1
  case JSON.read ds of
    Right r -> pure r
    Left e -> throwError (error (show e))

foreign import getEvents :: Firestore -> String -> Effect (Promise Foreign)

getEventsAff :: Firestore -> String -> Aff (Array { id :: String, data :: Event_ })
getEventsAff fs id = do
  ds <- toAffE $ getEvents fs id
  case JSON.read ds of
    Right r -> pure r
    Left e -> throwError (error (show e))

foreign import getPublicTracks :: Firestore -> Effect (Promise Foreign)

getPublicTracksAff :: Firestore -> Aff (Array { id :: String, data :: Track })
getPublicTracksAff fs = do
  ds <- toAffE $ getPublicTracks fs
  case JSON.read ds of
    Right r -> pure r
    Left e -> throwError (error (show e))

foreign import getTracks :: FirebaseAuth -> Firestore -> Effect (Promise Foreign)

getTracksAff :: FirebaseAuth -> Firestore -> Aff (Array { id :: String, data :: Track })
getTracksAff fa fs = do
  ds <- toAffE $ getTracks fa fs
  case JSON.read ds of
    Right r -> pure r
    Left e -> throwError (error (show e))

foreign import getWhitelistedTracks :: FirebaseAuth -> Firestore -> Effect (Promise Foreign)

getWhitelistedTracksAff :: FirebaseAuth -> Firestore -> Aff (Array { id :: String, data :: Track })
getWhitelistedTracksAff fa fs = do
  ds <- toAffE $ getWhitelistedTracks fa fs
  case JSON.read ds of
    Right r -> pure r
    Left e -> throwError (error (show e))

foreign import updateEventName :: Firestore -> String -> String -> String -> Effect (Promise Unit)

updateEventNameAff :: Firestore -> String -> String -> String -> Aff Unit
updateEventNameAff a b c d = toAffE $ updateEventName a b c d

foreign import deleteName :: Firestore -> String -> String -> Effect (Promise Unit)

deleteNameAff :: Firestore -> String -> String -> Aff Unit
deleteNameAff a b c = toAffE $ deleteName a b c

foreign import updateColumn :: Firestore -> String -> String -> Int -> Effect (Promise Unit)

updateColumnAff :: Firestore -> String -> String -> Column -> Aff Unit
updateColumnAff a b c d = toAffE $ updateColumn a b c (columnToInt d)

foreign import deleteEvent :: Firestore -> String -> String -> Effect (Promise Unit)

deleteEventAff :: Firestore -> String -> String -> Aff Unit
deleteEventAff a b c = toAffE $ deleteEvent a b c

foreign import updateMarker1Time :: Firestore -> String -> String -> Number -> Effect (Promise Unit)

updateMarker1TimeAff :: Firestore -> String -> String -> Number -> Aff Unit
updateMarker1TimeAff a b c d = toAffE $ updateMarker1Time a b c d

foreign import updateMarker1AudioUrl :: Firestore -> String -> String -> String -> Effect (Promise Unit)

updateMarker1AudioUrlAff :: Firestore -> String -> String -> String -> Aff Unit
updateMarker1AudioUrlAff a b c d = toAffE $ updateMarker1AudioUrl a b c d

foreign import updateMarker2Time :: Firestore -> String -> String -> Number -> Effect (Promise Unit)

updateMarker2TimeAff :: Firestore -> String -> String -> Number -> Aff Unit
updateMarker2TimeAff a b c d = toAffE $ updateMarker2Time a b c d

foreign import updateMarker2AudioUrl :: Firestore -> String -> String -> String -> Effect (Promise Unit)

updateMarker2AudioUrlAff :: Firestore -> String -> String -> String -> Aff Unit
updateMarker2AudioUrlAff a b c d = toAffE $ updateMarker2AudioUrl a b c d

foreign import updateMarker3Time :: Firestore -> String -> String -> Number -> Effect (Promise Unit)

updateMarker3TimeAff :: Firestore -> String -> String -> Number -> Aff Unit
updateMarker3TimeAff a b c d = toAffE $ updateMarker3Time a b c d

foreign import updateMarker3AudioUrl :: Firestore -> String -> String -> String -> Effect (Promise Unit)

updateMarker3AudioUrlAff :: Firestore -> String -> String -> String -> Aff Unit
updateMarker3AudioUrlAff a b c d = toAffE $ updateMarker3AudioUrl a b c d

foreign import updateMarker4Time :: Firestore -> String -> String -> Number -> Effect (Promise Unit)

updateMarker4TimeAff :: Firestore -> String -> String -> Number -> Aff Unit
updateMarker4TimeAff a b c d = toAffE $ updateMarker4Time a b c d

foreign import updateMarker4AudioUrl :: Firestore -> String -> String -> String -> Effect (Promise Unit)

updateMarker4AudioUrlAff :: Firestore -> String -> String -> String -> Aff Unit
updateMarker4AudioUrlAff a b c d = toAffE $ updateMarker4AudioUrl a b c d

foreign import updateLength :: Firestore -> String -> String -> Number -> Effect (Promise Unit)

updateLengthAff :: Firestore -> String -> String -> Number -> Aff Unit
updateLengthAff a b c d = toAffE $ updateLength a b c d

--

foreign import addRide :: Firestore -> Foreign -> Effect (Promise DocumentReference)
foreign import removeUndefineds :: Foreign -> Foreign

addRideAff :: Firestore -> Ride -> Aff DocumentReference
addRideAff fs r = toAffE $ addRide fs (removeUndefineds (JSON.writeImpl r))

foreign import getRide :: Firestore -> String -> Effect (Promise Foreign)

getRideAff :: Firestore -> String -> Aff (Maybe Ride)
getRideAff fs id = do
  ds <- toAffE $ getRide fs id
  case JSON.read ds of
    Right r -> pure r
    Left e -> throwError (error (show e))

createRideIfNotExistsYet :: Firestore -> String -> Aff String
createRideIfNotExistsYet fs id = getRideAff fs id >>= case _ of
  Nothing -> _.id <$> addRideAff fs defaultRide
  Just _ -> pure id

getLowestAvailablePlayer :: RideV0' -> Maybe Player
getLowestAvailablePlayer { player1, player2, player3, player4 } = (player4 `go` Player4)
  <|> (player3 `go` Player3)
  <|> (player2 `go` Player2)
  <|> (player1 `go` Player1)
  where
  go Nothing = Just
  go (Just _) = const Nothing

foreign import claimPlayer :: FirebaseAuth -> Firestore -> String -> String -> Effect (Promise Unit)

claimPlayerAff :: FirebaseAuth -> Firestore -> String -> Player -> Aff Unit
claimPlayerAff auth firestore myChannel p = toAffE
  $ claimPlayer auth firestore myChannel
  $ case p of
      Player1 -> "player1"
      Player2 -> "player2"
      Player3 -> "player3"
      Player4 -> "player4"

foreign import listenToRemoteChannelChanges :: Firestore -> String -> (Foreign -> Effect Unit) -> Effect (Promise (Effect Unit))

eventChannelChanges :: Firestore -> String -> Event Ride
eventChannelChanges fs s = makeEvent \k -> do
  u <- Ref.new (pure unit)
  launchAff_ do
    unsub <- toAffE $ listenToRemoteChannelChanges fs s
      ( \f -> case JSON.read f of
          Left e -> throwError (error (show e))
          Right r -> k r
      )
    liftEffect $ Ref.write unsub u
  pure $ join $ Ref.read u

getPlayerForChannel :: FirebaseAuth -> Firestore -> String -> Maybe Player -> Aff (Maybe Player)
getPlayerForChannel = go 0
  where
  go n auth fs myChannel myPlayerHint = do
    when (n >= 4) $ throwError (error "No player found")
    ride <- getRideAff fs myChannel
    case ride of
      Nothing -> throwError (error "PROGRAMMING ERROR: Ride has not been created yet, verify control flow!")
      Just (RideV0 dt) -> do
        let lowestPlayerForChannel = (myPlayerHint <|> getLowestAvailablePlayer dt)
        case lowestPlayerForChannel of
          -- we failed to find a player, which means that the game is full
          Nothing -> pure Nothing
          Just p -> do
            -- we try to claim a player
            -- usually this will succeed, but it will fail if two
            -- are reaching for the same player concurrently
            maybeClaim <- try (claimPlayerAff auth fs myChannel p)
            case maybeClaim of
              Right _ -> pure (Just p)
              -- was claimed, try again
              Left _ -> go (n + 1) auth fs myChannel myPlayerHint

foreign import sendMyPointsAndPenaltiesToFirebaseImpl :: Firestore -> FirebaseAuth -> String -> String -> String -> Number -> Number -> Effect (Promise Unit)

sendMyPointsAndPenaltiesToFirebase :: Firestore -> FirebaseAuth -> String -> Player -> Points -> Penalty -> Aff Unit
sendMyPointsAndPenaltiesToFirebase fdb auth myChannel myPlayer (Points points) (Penalty penalties) = do
  toAffE $ sendMyPointsAndPenaltiesToFirebaseImpl fdb auth myChannel
    ( case myPlayer of
        Player1 -> "player1Points"
        Player2 -> "player2Points"
        Player3 -> "player3Points"
        Player4 -> "player4Points"
    )
    ( case myPlayer of
        Player1 -> "player1Penalties"
        Player2 -> "player2Penalties"
        Player3 -> "player3Penalties"
        Player4 -> "player4Penalties"
    )
    points
    penalties
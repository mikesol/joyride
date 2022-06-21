module Joyride.Firebase.Firestore where

import Prelude

import Control.Alt ((<|>))
import Control.Promise (Promise, toAffE)
import Data.Either (Either(..))
import Data.Maybe (Maybe(..))
import Data.Profunctor (lcmap)
import Effect (Effect)
import Effect.Aff (Aff, error, launchAff_, throwError, try)
import Effect.Class (liftEffect)
import Effect.Ref as Ref
import FRP.Event (Event, makeEvent)
import Foreign (Foreign)
import Joyride.Firebase.Auth (FirebaseAuth)
import Joyride.Firebase.Config (FirebaseApp)
import Simple.JSON as JSON
import Types (Penalty(..), Player(..), Points(..), Ride(..), RideV0', defaultRide)

data Firestore

foreign import firestoreDb :: FirebaseApp -> Effect (Promise Firestore)

firestoreDbAff :: FirebaseApp -> Aff Firestore
firestoreDbAff = toAffE <<< firestoreDb

type DocumentReference =
  { id :: String
  , path :: String
  }

data DocumentSnapshot

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
    unsub <- toAffE $ listenToRemoteChannelChanges fs s (\f -> case JSON.read f of
      Left e -> throwError (error (show e))
      Right r -> k r)
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
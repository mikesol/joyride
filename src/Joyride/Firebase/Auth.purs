module Joyride.Firebase.Auth
  ( authStateChangedEventWithAnonymousAccountCreation
  , firebaseAuthAff
  , currentUser
  , User(..)
  , UserMetadata
  , MultiFactorUser
  , MultiFactorInfo
  , UserInfo
  , upgradeAuth
  , signInWithGoogle
  , initializeGoogleClient
  , GCResponse
  , AuthProvider(..)
  ) where

import Prelude

import Control.Promise (Promise, toAffE)
import Data.Either (Either(..))
import Data.Maybe (Maybe(..))
import Data.Newtype (class Newtype)
import Effect (Effect)
import Effect.Aff (Aff, Error, error, launchAff_, throwError)
import Effect.Class (liftEffect)
import Effect.Class.Console as Log
import Effect.Ref as Ref
import FRP.Event (Event, makeEvent)
import Foreign (Foreign)
import Joyride.Firebase.Opaque (FirebaseAuth, FirebaseApp)
import Simple.JSON as JSON

type MultiFactorInfo =
  { displayName :: Maybe String
  , enrollmentTime :: String
  , factorId :: String
  , uid :: String
  }

type MultiFactorUser =
  { enrolledFactors :: Array MultiFactorInfo
  }

type UserMetadata =
  { creationTime :: Maybe String
  , lastSignInTime :: Maybe String
  }

type UserInfo =
  { displayName :: Maybe String
  , email :: Maybe String
  , phoneNumber :: Maybe String
  , photoURL :: Maybe String
  , providerId :: String
  , uid :: String
  }

foreign import currentUserImpl :: Maybe User -> (User -> Maybe User) -> FirebaseAuth -> Effect (Maybe User)

currentUser = currentUserImpl Nothing Just :: FirebaseAuth -> Effect (Maybe User)

newtype User = User
  { displayName :: Maybe String
  , email :: Maybe String
  , emailVerified :: Boolean
  , isAnonymous :: Boolean
  , metadata :: Maybe UserMetadata
  , multiFactor :: Maybe MultiFactorUser
  , phoneNumber :: Maybe String
  , photoURL :: Maybe String
  , providerData :: Array UserInfo
  , providerId :: String
  , refreshToken :: String
  , tenantId :: Maybe String
  , uid :: String
  }

derive instance Newtype User _
derive newtype instance JSON.ReadForeign User
derive newtype instance JSON.WriteForeign User

foreign import firebaseAuth :: FirebaseApp -> Effect (Promise FirebaseAuth)

firebaseAuthAff :: FirebaseApp -> Aff FirebaseAuth
firebaseAuthAff = toAffE <<< firebaseAuth

type GCResponse =
  { clientId :: String
  , credential :: String
  , select_by :: String
  }

foreign import initializeGoogleClient :: (GCResponse -> Effect Unit) -> Effect Unit
foreign import signInWithGoogle :: FirebaseAuth -> Effect (Promise Unit)

foreign import onAuthStateChanged :: (Error -> Effect Unit) -> (Foreign -> Effect Unit) -> (Foreign -> Effect Unit) -> FirebaseAuth -> Effect (Promise (Effect Unit))
foreign import upgradeAuth :: FirebaseAuth -> String -> Effect (Promise Unit)

data AuthProvider = AuthAnonymous | AuthGoogle

authStateChangedEventWithAnonymousAccountCreation :: FirebaseAuth -> Event { user :: User, provider :: AuthProvider }
authStateChangedEventWithAnonymousAccountCreation auth = makeEvent \k -> do
  unsub <- Ref.new (pure unit)
  let
    authFlow provider u = do
      let user' = JSON.read u
      case user' of
        Left e -> do
          throwError (error $ (show (JSON.writeJSON u) <> " " <> show e))
        Right user -> k { user, provider }
  launchAff_ do
    us <- toAffE $ onAuthStateChanged (show >>> Log.error)
      (authFlow AuthAnonymous)
      (authFlow AuthGoogle)
      auth
    liftEffect $ Ref.write us unsub
  pure $ join $ Ref.read unsub

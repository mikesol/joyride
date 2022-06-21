module Joyride.Firebase.Auth
  ( authStateChangedEventWithAnonymousAccountCreation
  , authStateChangedEvent
  , firebaseAuthAff
  , User(..)
  , FirebaseAuth
  , UserMetadata
  , MultiFactorUser
  , MultiFactorInfo
  , UserInfo
  ) where

import Prelude

import Control.Promise (Promise, toAffE)
import Data.Either (Either(..))
import Data.Maybe (Maybe(..))
import Data.Newtype (class Newtype)
import Effect (Effect)
import Effect.Aff (Aff, error, launchAff_, throwError)
import Effect.Class (liftEffect)
import Effect.Ref as Ref
import FRP.Event (Event, makeEvent)
import Foreign (Foreign)
import Joyride.Firebase.Config (FirebaseApp)
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

data FirebaseAuth

foreign import firebaseAuth :: FirebaseApp -> Effect (Promise FirebaseAuth)

firebaseAuthAff :: FirebaseApp -> Aff FirebaseAuth
firebaseAuthAff = toAffE <<< firebaseAuth

foreign import onAuthStateChanged :: Boolean -> Effect Unit -> (Foreign -> Effect Unit) -> FirebaseAuth -> Effect (Promise (Effect Unit))

authStateChangedEvent' :: Boolean -> FirebaseAuth -> Event (Maybe User)
authStateChangedEvent' autoAnon auth = makeEvent \k -> do
  unsub <- Ref.new (pure unit)
  launchAff_ do
    us <- toAffE $ onAuthStateChanged autoAnon (k Nothing)
      ( \u -> do
          let user' = JSON.read u
          case user' of
            Left e -> do
              throwError (error $ (show (JSON.writeJSON u) <> " " <> show e))
            Right user -> k (Just user)
      )
      auth
    liftEffect $ Ref.write us unsub
  pure $ join $ Ref.read unsub

authStateChangedEvent :: FirebaseAuth -> Event (Maybe User)
authStateChangedEvent = authStateChangedEvent' false

authStateChangedEventWithAnonymousAccountCreation :: FirebaseAuth -> Event (Maybe User)
authStateChangedEventWithAnonymousAccountCreation = authStateChangedEvent' true
module Joyride.Firebase.CloudMessaging where

import Prelude

import Control.Promise (Promise, toAffE)
import Effect (Effect)
import Effect.Aff (Aff)
import Joyride.Firebase.Opaque (FirebaseCloudMessaging, FirebaseApp)

foreign import firebaseCloudMessaging :: FirebaseApp -> Effect (Promise FirebaseCloudMessaging)

firebaseCloudMessagingAff :: FirebaseApp -> Aff FirebaseCloudMessaging
firebaseCloudMessagingAff = toAffE <<< firebaseCloudMessaging
module Joyride.Firebase.Config where

import Control.Promise (Promise, toAffE)
import Effect (Effect)
import Effect.Aff (Aff)
import Joyride.Firebase.Opaque (FirebaseApp)

foreign import firebaseApp :: Effect (Promise FirebaseApp)

firebaseAppAff :: Aff FirebaseApp
firebaseAppAff = toAffE firebaseApp
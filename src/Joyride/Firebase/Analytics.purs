module Joyride.Firebase.Analytics where


import Prelude

import Control.Promise (Promise, toAffE)
import Effect (Effect)
import Effect.Aff (Aff)
import Joyride.Firebase.Opaque (FirebaseAnalytics, FirebaseApp)

foreign import firebaseAnalytics :: FirebaseApp -> Effect (Promise FirebaseAnalytics)

firebaseAnalyticsAff :: FirebaseApp -> Aff FirebaseAnalytics
firebaseAnalyticsAff = toAffE <<< firebaseAnalytics
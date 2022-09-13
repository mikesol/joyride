-- This file is intended to be used as a sandbox for web component UIs.
-- _Nothing_ in it is permanent and you should assume it will be modified at
-- _any_ time. Therefore, do not store work-in-progresses in here unless
-- you're comfortable fishing them out of previous git commits.
module Joyride.App.Settings where

import Prelude

import Data.Foldable (oneOf)
import Data.Maybe (Maybe(..), maybe)
import Data.Tuple (Tuple(..))
import Data.Tuple.Nested ((/\))
import Deku.Attribute ((:=))
import Deku.Attributes (klass_)
import Deku.Control (switcher, switcher_, text_)
import Deku.Core (Nut)
import Deku.DOM as D
import Deku.Do (useState')
import Deku.Do as Deku
import Deku.Listeners (click, slider)
import Effect.Aff (Milliseconds(..), delay, launchAff_)
import Effect.Class (liftEffect)
import Effect.Console (log)
import Effect.Ref as Ref
import FRP.Behavior (sample_)
import Joyride.Constants.Visual (orientationDampening0To100, reverseOrientationDampening)
import Joyride.FRP.Behavior (refToBehavior)
import Joyride.FRP.Dedup (dedup)
import Joyride.Filestack.Filestack (init, pickerAccepting)
import Joyride.Firebase.Firestore (updateProfileAvatarURLAff, updateProfileUsernameAff)
import Joyride.Style (buttonCls, header2Cls, headerCls)
import Joyride.Validation (disallowedUsername)
import Types (Profile(..), SettingsNeeds)
import Web.HTML (window)
import Web.HTML.HTMLInputElement (value)
import Web.HTML.Window (alert)

-- ugh, several levels of dedup here
-- first prevents spamming of profiles
-- second prevents spamming of individual elements

data UISwitch = NotSignedIn | SignedInButHasNotSetProfile | SignedInAndHasSetProfile

settings :: SettingsNeeds -> Nut
settings
  { dampeningRef
  , myProfile
  , fbAuth
  , firestoreDb
  , signedInNonAnonymously
  } = Deku.do
  let profileEvent = myProfile
  setNameInput /\ nameInput <- useState'
  let
    speedSlider = D.li (klass_ "p-3")
      [ D.h1 (klass_ header2Cls) [ text_ "Lateral speed" ]
      , D.div (klass_ "flex flex-row p-3")
          [ D.span (klass_ "text-white") [ text_ "🐢" ]
          , D.input
              ( oneOf
                  [ sample_ (refToBehavior dampeningRef) (pure unit) <#> \i -> D.Value := show (reverseOrientationDampening i)
                  , slider $ pure (orientationDampening0To100 >>> flip Ref.write dampeningRef)
                  , klass_ "appearance-none raaaange grow h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                  ]
              )
              []
          , D.span (klass_ "text-white") [ text_ "🐇" ]
          ]
      ]
    nameSetter = D.li (klass_ "p-3")
      [ D.h1 (klass_ header2Cls) [ text_ "Display name" ]
      , D.div (klass_ "flex flex-row p-3")
          [ D.div (klass_ "grow") []
          , D.input
              ( oneOf
                  [ pure (D.Placeholder := "Namey McName")
                  , pure (D.SelfT := \i -> launchAff_ $ delay (Milliseconds 0.0) *> liftEffect (setNameInput i))
                  , klass_ "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  , dedup (map (\(ProfileV0 p) -> p.username) profileEvent) <#> (D.Value := _)
                  ]
              )
              []
          , D.div (klass_ "grow") []
          ]
      , D.div (klass_ "flex flex-row p-3")
          [ D.div (klass_ "grow") []
          , D.button
              ( oneOf
                  [ klass_ buttonCls
                  , click $ nameInput <#> \i -> do
                      v <- value i
                      if (disallowedUsername v) then window >>= alert "Sorry, that username is not allowed. Please try another one!"
                      else launchAff_ $ updateProfileUsernameAff fbAuth firestoreDb v
                  ]
              )
              [ text_ "Update name" ]
          , D.div (klass_ "grow") []
          ]
      ]
  D.div (oneOf [ pure $ D.Class := "h-screen w-screen bg-zinc-900 absolute" ])
    [ D.div (oneOf [ pure $ D.Class := "text-center" ])
        [ D.h2 (klass_ (headerCls <> " p-6")) [ text_ "Settings" ]
        , ((Tuple <$> signedInNonAnonymously <*> (pure Nothing <|> map Just profileEvent)) <#> \(l /\ r) -> if l then maybe SignedInButHasNotSetProfile (const SignedInAndHasSetProfile) r else NotSignedIn) # switcher D.div (oneOf []) case _ of
            NotSignedIn -> D.ul (pure $ D.Class := "")
              [ speedSlider ]
            SignedInButHasNotSetProfile -> D.ul (pure $ D.Class := "")
              [ speedSlider, nameSetter ]
            SignedInAndHasSetProfile -> do
              let
                imageUploader = D.button
                  ( oneOf
                      [ klass_ buttonCls
                      , click $ pure do
                          client <- init
                          pickerAccepting [ "image/*" ] (\_ -> pure unit)
                            ( \_ _ ->
                                window >>= alert "Not a valid image format. Please try again!"
                            )
                            (\_ _ -> pure unit)
                            ( \{ url } -> do
                                log $ "Uploaded avatar to: " <> url
                                launchAff_ $ updateProfileAvatarURLAff fbAuth firestoreDb url
                            )
                            client
                      ]
                  )
                  [ text_ "Upload image" ]
              D.ul (pure $ D.Class := "")
                [ speedSlider
                , nameSetter
                , D.li (klass_ "p-3")
                    [ D.h1 (klass_ header2Cls) [ text_ "Avatar" ]
                    , D.div (klass_ "flex flex-row p-3")
                        [ D.div (klass_ "grow") []
                        , dedup
                            ( oneOf
                                [ pure Nothing
                                , map (\(ProfileV0 p) -> Just p.avatarURL) profileEvent
                                ]
                            ) # switcher_ D.div case _ of
                            Nothing -> imageUploader
                            Just img' -> case img' of
                              Nothing -> imageUploader
                              Just img -> D.img (oneOf [ pure $ D.Src := img ]) []
                        , D.div (klass_ "grow") []
                        ]
                    ]
                ]

        ]
    ]
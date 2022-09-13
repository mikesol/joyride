-- This file is intended to be used as a sandbox for web component UIs.
-- _Nothing_ in it is permanent and you should assume it will be modified at
-- _any_ time. Therefore, do not store work-in-progresses in here unless
-- you're comfortable fishing them out of previous git commits.
module Joyride.App.Settings where

import Prelude

import Bolson.Core (envy)
import Data.Foldable (oneOf)
import Data.Maybe (Maybe(..))
import Data.Tuple.Nested ((/\))
import Deku.Attribute ((:=))
import Deku.Attributes (klass_)
import Deku.Control (switcher_, text_)
import Deku.Core (Nut)
import Deku.DOM as D
import Deku.Do (useState')
import Deku.Do as Deku
import Deku.Listeners (click, slider)
import Effect.Aff (launchAff_)
import Effect.Console (log)
import Effect.Ref as Ref
import FRP.Behavior (sample_)
import FRP.Event (memoize)
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

settings :: SettingsNeeds -> Nut
settings { dampeningRef, myProfile, fbAuth, firestoreDb } = Deku.do
  profileEvent <- envy <<< memoize (dedup myProfile)
  setNameInput /\ nameInput <- useState'
  D.div (oneOf [ pure $ D.Class := "h-screen w-screen bg-zinc-900 absolute" ])
    [ D.div (oneOf [ pure $ D.Class := "text-center" ])
        [ D.h2 (klass_ (headerCls <> " p-6")) [ text_ "Settings" ]
        , D.div (oneOf [])
            [ D.ul (pure $ D.Class := "")
                [ D.li (klass_ "p-3")
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
                , D.li (klass_ "p-3")
                    [ D.h1 (klass_ header2Cls) [ text_ "Display name" ]
                    , D.div (klass_ "flex flex-row p-3")
                        [ D.div (klass_ "grow") []
                        , D.input
                            ( oneOf
                                [ pure (D.Placeholder := "Namey McName")
                                , pure (D.SelfT := setNameInput)
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
                            [ text_ "Upload image" ]
                        , D.div (klass_ "grow") []
                        ]
                    ]
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
                            Nothing -> D.button
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
                            Just img -> D.img (oneOf [ pure $ D.Src := img ]) []
                        , D.div (klass_ "grow") []
                        ]
                    ]
                ]

            ]
        ]
    ]
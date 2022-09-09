module Joyride.App.Explainer where

import Prelude

import Bolson.Core (Element(..), envy, fixed)
import Control.Alt ((<|>))
import Control.Parallel (parSequence)
import Control.Plus (empty)
import Data.Array (nubBy)
import Data.Foldable (for_, oneOf, oneOfMap, traverse_)
import Data.Function (on)
import Data.Maybe (Maybe(..), fromMaybe, isJust, maybe)
import Data.Monoid (guard)
import Data.Newtype (unwrap)
import Data.Number (cos, pi)
import Data.Time.Duration (Milliseconds)
import Data.Tuple.Nested (type (/\), (/\))
import Deku.Attribute ((:=))
import Deku.Attributes (klass)
import Deku.Control (switcher_, text_)
import Deku.Core (Nut, vbussed)
import Deku.DOM as D
import Deku.Listeners (click)
import Deku.Listeners as DL
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)
import FRP.Event (Event, keepLatest, mapAccum, memoize)
import FRP.Event.Animate (animationFrameEvent)
import FRP.Event.VBus (V)
import Joyride.Firebase.Auth (User(..), currentUser, signInWithGoogle)
import Joyride.Firebase.Firestore (getPublicTracksAff, getTracksAff, getWhitelistedTracksAff)
import Joyride.Firebase.Opaque (FirebaseAuth, Firestore)
import Joyride.FullScreen as FullScreen
import Joyride.Style (buttonCls, headerCls)
import Joyride.Timing.CoordinatedNow (withCTime)
import Rito.Cameras.PerspectiveCamera (perspectiveCamera)
import Rito.Core (Renderer(..), cameraToGroup, plain, toScene, webGLRendererToRenderer)
import Rito.CubeTexture (CubeTexture)
import Rito.Group (group)
import Rito.Portal (globalCameraPortal1, globalScenePortal1)
import Rito.Properties (aspect, background, rotateX, rotateY, rotateZ) as P
import Rito.Properties (positionX, positionY, positionZ, render, size)
import Rito.Renderers.WebGL (webGLRenderer)
import Rito.Run as Rito.Run
import Rito.Scene (Background(..), scene)
import Type.Proxy (Proxy(..))
import Types (CubeTextures, JMilliseconds(..), ThreeDI, Track(..), WindowDims)
import Web.HTML (window)
import Web.HTML.HTMLCanvasElement (HTMLCanvasElement)
import Web.HTML.HTMLCanvasElement as HTMLCanvasElement
import Web.HTML.Window (alert)

threeLoader
  :: { threeDI :: ThreeDI
     , isMobile :: Boolean
     , unsubscriber :: Effect Unit -> Effect Unit
     , cubeTextures :: CubeTextures CubeTexture
     , resizeE :: Event WindowDims
     , initialDims :: WindowDims
     , cnow :: Effect Milliseconds
     , canvas :: HTMLCanvasElement
     }
  -> Effect Unit
threeLoader opts = do
  u <- Rito.Run.run
    ( envy $ memoize
        ( _.time
            >>> unwrap
            >>> JMilliseconds <$> withCTime opts.cnow animationFrameEvent
        )
        \animationTime -> globalCameraPortal1
          ( perspectiveCamera
              { perspectiveCamera: opts.threeDI.perspectiveCamera
              , fov: 75.0
              , aspect: opts.initialDims.iw / opts.initialDims.ih
              , near: 0.1
              , far: 100.0
              }
              ( oneOf
                  [ pure $ positionX 0.0
                  , pure $ positionY 0.0
                  , pure $ positionZ 0.0
                  , opts.resizeE <#> \i -> P.aspect (i.iw / i.ih)
                  ]
              )

          )
          \myCamera -> globalScenePortal1
            ( scene { scene: opts.threeDI.scene } (pure $ P.background (CubeTexture (unwrap opts.cubeTextures).skybox))
                [ toScene $ group { group: opts.threeDI.group }
                    ( keepLatest $
                        ( mapAccum
                            ( \a b -> case b of
                                Nothing -> Just a /\ 0.0
                                Just x -> Just a /\ (a - x)
                            )
                            (map (unwrap >>> (_ / 1000.0)) animationTime)
                            Nothing
                        ) <#> \t ->
                          let
                            fac = t / 1000.0
                          in
                            oneOfMap pure
                              [ P.rotateX $ 0.001 * cos (fac * pi * 0.01)
                              , P.rotateY $ 0.001 * cos (fac * pi * 0.01)
                              , P.rotateZ $ 0.001 * cos (fac * pi * 0.01)
                              ]
                    )
                    -- camera
                    -- needs to be part of the group to rotate correctly
                    [ cameraToGroup myCamera
                    ]

                ]
            )
            \myScene ->
              fixed
                [ plain $ webGLRendererToRenderer $ webGLRenderer
                    myScene
                    myCamera
                    { canvas: opts.canvas
                    , webGLRenderer: opts.threeDI.webGLRenderer
                    }
                    ( oneOf
                        [ pure (size { width: opts.initialDims.iw, height: opts.initialDims.ih })
                        , pure render
                        , animationTime $> render
                        , opts.resizeE <#> \i -> size { width: i.iw, height: i.ih }
                        ]
                    )
                ]
    )
  opts.unsubscriber u

filler :: Nut
filler = D.div (pure $ D.Class := "grow") []

explainerPage
  :: { ride :: (String /\ Track) -> Effect Unit
     , tutorial :: Effect Unit
     , editor :: Effect Unit
     , isMobile :: Boolean
     , signOut :: Effect Unit
     , resizeE :: Event WindowDims
     , cnow :: Effect Milliseconds
     , cubeTextures :: CubeTextures CubeTexture
     , initialDims :: WindowDims
     , threeDI :: ThreeDI
     , firestoreDb :: Firestore
     , fbAuth :: FirebaseAuth
     , signedInNonAnonymously :: Event Boolean
     }
  -> Nut
explainerPage opts = vbussed
  ( Proxy
      :: _
           ( V
               ( unsubscriber :: Effect Unit
               , availableRides :: Maybe (Array { id :: String, data :: Track })
               )
           )
  )
  \push event -> envy $ memoize (pure Nothing <|> event.availableRides) \availableRides -> D.div (oneOf [ pure (D.Class := "absolute") ])
    [ D.div (oneOf [ pure (D.Class := "z-10 absolute grid grid-cols-3 grid-rows-3 h-screen w-screen") ])
        [ D.div (pure $ D.Class := "col-start-3 col-end-3 row-start-1 row-end-1 place-self-end")
            [ D.button
                ( oneOf
                    [ pure $ D.Class := buttonCls
                    , DL.click
                        ( (oneOf [ pure (pure unit), event.unsubscriber ]) <#>
                            FullScreen.fullScreenFlow <<< (opts.tutorial *> _)
                        )
                    ]
                )
                [ text_ "⚙" ]
            ]
        , D.div (pure $ D.Class := "place-self-center col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col")
            [ D.h1
                ( oneOf
                    [ pure $ D.Class := "text-center " <> headerCls
                    , click $ opts.signedInNonAnonymously <#> \signedInNonAnon -> when signedInNonAnon do
                        cu <- currentUser opts.fbAuth
                        for_ cu \(User { uid }) ->
                          window >>= alert uid
                    ]
                )
                [ text_ "Joyride" ]
            , D.button
                ( oneOf
                    [ pure $ D.Class := buttonCls
                    , DL.click
                        ( (oneOf [ pure (pure unit), event.unsubscriber ]) <#>
                            FullScreen.fullScreenFlow <<< (opts.tutorial *> _)
                        )
                    ]
                )
                [ text_ "Tutorial" ]
            , D.button
                ( oneOf
                    [ klass $ pure buttonCls
                    , DL.click $ (opts.signedInNonAnonymously) <#> \signedInNonAnon -> launchAff_ do
                        rides <- map (nubBy (compare `on` _.id) <<< join) $ parSequence
                          [ getPublicTracksAff opts.firestoreDb
                          , guard signedInNonAnon (getTracksAff opts.fbAuth opts.firestoreDb)
                          , guard signedInNonAnon (getWhitelistedTracksAff opts.fbAuth opts.firestoreDb)
                          ]
                        liftEffect $ push.availableRides (Just rides)
                    ]
                )
                [ text_ "Take a ride" ]
            , D.button
                ( oneOf
                    [ pure $ D.Class := buttonCls
                    , DL.click
                        ( (oneOf [ pure (pure unit), event.unsubscriber ]) <#>
                            FullScreen.fullScreenFlow <<< (opts.editor *> _)
                        )
                    ]
                )
                [ text_ "Editor" ]
            , D.button
                ( oneOf
                    [ pure $ D.Id := "google_sign_in"
                    , pure $ D.OnClick := do
                        signInWithGoogle do
                          window >>= alert "Sign in with google is temporarily unavailable. Please try again later."
                    , opts.signedInNonAnonymously <#> \sina -> D.Class := buttonCls <> if sina then " hidden" else ""
                    ]
                )
                [ text_ "Sign In" ]
            , D.button
                ( oneOf
                    [ opts.signedInNonAnonymously <#> \na -> D.Class := buttonCls <> (if na then "" else " hidden")
                    , click $ pure opts.signOut
                    ]
                )
                [ text_ "Sign Out" ]

            ]
        ]
    , D.div (oneOf [ availableRides <#> \ar -> D.Class := "z-10 bg-zinc-900 absolute grid grid-cols-6 grid-rows-6 place-items-center h-screen w-screen " <> if isJust ar then "" else " hidden" ])
        [ D.div (pure $ D.Class := "col-start-1 col-end-2 row-start-1 row-end-2")
            [ D.button
                ( oneOf
                    [ pure $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
                    , DL.click $ pure (push.availableRides Nothing)
                    ]
                )
                [ text_ "< Back" ]
            ]
        , D.div (pure $ D.Class := "col-start-2 col-end-6 row-start-2 row-end-6 flex flex-col justify-items-center overflow-scroll text-center")
            [ D.h2 (pure $ D.Class := headerCls) [ text_ "Choose a ride" ]
            , ( availableRides # switcher_ D.div \l' -> l' # maybe (envy empty) \l -> D.ul (pure $ D.Class := "")
                  ( l <#> \{ id, data: data' } ->
                      let
                        TrackV0 aTra = data'
                      in
                        D.li_
                          [ D.button
                              ( oneOf
                                  [ pure $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
                                  , DL.click
                                      ( (oneOf [ pure (pure unit), event.unsubscriber ]) <#>
                                          FullScreen.fullScreenFlow <<< (opts.ride (id /\ data') *> _)
                                      )
                                  ]
                              )
                              [ text_ (fromMaybe "Untitled Track" aTra.title) ]
                          ]
                  )
              )

            ]
        ]
    , filler
    , D.canvas
        ( oneOf
            [ pure (D.Class := "absolute")
            , pure $ D.Self := HTMLCanvasElement.fromElement >>> traverse_
                ( threeLoader <<<
                    { threeDI: opts.threeDI
                    , isMobile: opts.isMobile
                    , cubeTextures: opts.cubeTextures
                    , unsubscriber: push.unsubscriber
                    , resizeE: opts.resizeE
                    , cnow: opts.cnow
                    , initialDims: opts.initialDims
                    , canvas: _
                    }
                )
            ]
        )
        []
    ]
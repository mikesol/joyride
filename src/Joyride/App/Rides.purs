module Joyride.App.Rides where

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
import Deku.Attributes (klass, klass_)
import Deku.Control (switcher_, text_)
import Deku.Core (Nut, vbussed)
import Deku.DOM as D
import Deku.Listeners (click, click_)
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
import Joyride.Navigation (navigateToHash)
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
import Route (ridesPath)
import Type.Proxy (Proxy(..))
import Types (CubeTextures, JMilliseconds(..), ThreeDI, Track(..), WindowDims)
import Web.HTML (window)
import Web.HTML.HTMLCanvasElement (HTMLCanvasElement)
import Web.HTML.HTMLCanvasElement as HTMLCanvasElement
import Web.HTML.Window (alert)

explainerPage
  :: { availableRides :: Array { data :: Track, id :: String }
     }
  -> Nut
explainerPage opts = vbussed
  ( Proxy
      :: _
           ( V
               ( unsubscriber :: Effect Unit
               )
           )
  )
  \push event -> D.div (oneOf [ pure (D.Class := "absolute") ])
    [ D.div (oneOf [ klass_ "z-10 bg-zinc-900 absolute grid grid-cols-6 grid-rows-6 place-items-center h-screen w-screen" ])
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
            , D.div_
                [ opts.availableRides <#> \l' -> l' # maybe (envy empty) \l ->
                    D.ul (pure $ D.Class := "")
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
                ]

            ]
        ]
    ]
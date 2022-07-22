module Joyride.App.Explainer where

import Prelude

import Bolson.Core (Element(..), envy, fixed)
import Data.Foldable (oneOf, oneOfMap, traverse_)
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Number (cos, pi)
import Data.Time.Duration (Milliseconds)
import Data.Tuple.Nested ((/\))
import Deku.Attribute ((:=))
import Deku.Control (text_)
import Deku.Core (Nut, vbussed)
import Deku.DOM as D
import Deku.Listeners as DL
import Effect (Effect)
import FRP.Event (Event, bang, keepLatest, mapAccum, memoize)
import FRP.Event.Animate (animationFrameEvent)
import FRP.Event.VBus (V)
import Joyride.FullScreen as FullScreen
import Joyride.Style (headerCls)
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
import Types (CubeTextures, JMilliseconds(..), WindowDims, ThreeDI)
import Web.HTML.HTMLCanvasElement (HTMLCanvasElement)
import Web.HTML.HTMLCanvasElement as HTMLCanvasElement

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
                  [ bang $ positionX 0.0
                  , bang $ positionY 0.0
                  , bang $ positionZ 0.0
                  , opts.resizeE <#> \i -> P.aspect (i.iw / i.ih)
                  ]
              )

          )
          \myCamera -> globalScenePortal1
            ( scene { scene: opts.threeDI.scene } (bang $ P.background (CubeTexture (unwrap opts.cubeTextures).skybox))
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
                            oneOfMap bang
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
                        [ bang (size { width: opts.initialDims.iw, height: opts.initialDims.ih })
                        , bang render
                        , animationTime $> render
                        , opts.resizeE <#> \i -> size { width: i.iw, height: i.ih }
                        ]
                    )
                ]
    )
  opts.unsubscriber u

filler :: Nut
filler = D.div (bang $ D.Class := "grow") []

explainerPage
  :: { ride :: Effect Unit
     , tutorial :: Effect Unit
     , editor :: Effect Unit
     , isMobile :: Boolean
     , resizeE :: Event WindowDims
     , cnow :: Effect Milliseconds
     , cubeTextures :: CubeTextures CubeTexture
     , initialDims :: WindowDims
     , threeDI :: ThreeDI
     }
  -> Nut
explainerPage opts = vbussed (Proxy :: _ (V (unsubscriber :: Effect Unit))) \push event -> D.div (oneOf [ bang (D.Class := "absolute") ])
  [ D.div (oneOf [ bang (D.Class := "z-10 absolute grid grid-cols-3 grid-rows-3  place-items-center h-screen w-screen") ])
      [ D.div (bang $ D.Class := "col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col")
          $
            let
              buttonCls = "my-4 bg-transparent hover:bg-slate-300 text-white font-semibold hover:text-zinc-700 py-2 px-4 border border-slate-300 hover:border-transparent rounded"
            in
              [ D.h1 (bang $ D.Class := "text-center " <> headerCls) [ text_ "Joyride" ]
              , D.button
                  ( oneOf
                      [ bang $ D.Class := buttonCls
                      , DL.click
                          ( (oneOf [ bang (pure unit), event.unsubscriber ]) <#>
                              FullScreen.fullScreenFlow <<< (opts.tutorial *> _)
                          )
                      ]
                  )
                  [ text_ "Tutorial" ]
              , D.button
                  ( oneOf
                      [ bang $ D.Class := buttonCls
                      , DL.click
                          ( (oneOf [ bang (pure unit), event.unsubscriber ]) <#>
                              FullScreen.fullScreenFlow <<< (opts.ride *> _)
                          )
                      ]
                  )
                  [ text_ "Take a ride" ]
              , D.button
                  ( oneOf
                      [ bang $ D.Class := buttonCls
                      , DL.click
                          ( (oneOf [ bang (pure unit), event.unsubscriber ]) <#>
                              FullScreen.fullScreenFlow <<< (opts.editor *> _)
                          )
                      ]
                  )
                  [ text_ "Editor" ]
              ]
      ]
  , filler
  , D.canvas
      ( oneOf
          [ bang (D.Class := "absolute")
          , bang $ D.Self := HTMLCanvasElement.fromElement >>> traverse_
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
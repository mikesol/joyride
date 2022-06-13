module Joyride.App.Explainer where

import Prelude

import Bolson.Core (Element(..), envy, fixed)
import Data.DateTime.Instant (unInstant)
import Data.Foldable (oneOf, oneOfMap, traverse_)
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Number (cos, pi)
import Data.Tuple.Nested ((/\))
import Deku.Attribute ((:=))
import Deku.Control (text_)
import Deku.Core (Nut, vbussed)
import Deku.DOM as D
import Deku.Listeners as DL
import Effect (Effect)
import FRP.Event (Event, bang, keepLatest, mapAccum, memoize)
import FRP.Event.Animate (animationFrameEvent)
import FRP.Event.Time (withTime)
import FRP.Event.VBus (V)
import Rito.Cameras.PerspectiveCamera (perspectiveCamera)
import Rito.Core (Renderer(..), cameraToGroup, toScene)
import Rito.CubeTexture (CubeTexture)
import Rito.Group (group)
import Rito.Portal (globalCameraPortal1, globalScenePortal1)
import Rito.Properties (aspect, background, rotateX, rotateY, rotateZ) as P
import Rito.Properties (positionX, positionY, positionZ, render, size)
import Rito.Renderers.WebGL (webGLRenderer)
import Rito.Run as Rito.Run
import Rito.Scene (Background(..), scene)
import Rito.THREE (ThreeStuff)
import Type.Proxy (Proxy(..))
import Types (CubeTextures, JMilliseconds(..), WindowDims)
import Web.HTML.HTMLCanvasElement (HTMLCanvasElement)
import Web.HTML.HTMLCanvasElement as HTMLCanvasElement

threeLoader
  :: { threeStuff :: ThreeStuff
     , isMobile :: Boolean
     , unsubscriber :: Effect Unit -> Effect Unit
     , cubeTextures :: CubeTextures CubeTexture
     , resizeE :: Event WindowDims
     , initialDims :: WindowDims
     , canvas :: HTMLCanvasElement
     }
  -> Effect Unit
threeLoader opts = do
  u <- Rito.Run.run opts.threeStuff
    ( envy $ memoize
        ( _.time >>> unInstant
            >>> unwrap
            >>> JMilliseconds <$> withTime animationFrameEvent
        )
        \animationTime -> globalCameraPortal1
          ( perspectiveCamera
              { fov: 75.0
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
            ( scene (bang $ P.background (CubeTexture (unwrap opts.cubeTextures).skybox))
                [ toScene $ group
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
                [ webGLRenderer
                    myScene
                    myCamera
                    { canvas: opts.canvas }
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
  :: { click :: Effect Unit
     , isMobile :: Boolean
     , resizeE :: Event WindowDims
     , cubeTextures :: CubeTextures CubeTexture
     , initialDims :: WindowDims
     , threeStuff :: ThreeStuff
     }
  -> Nut
explainerPage opts = vbussed (Proxy :: _ (V (unsubscriber :: Effect Unit))) \push event -> D.div (oneOf [ bang (D.Class := "absolute") ])
  [ D.div (oneOf [ bang (D.Class := "z-10 absolute flex flex-col h-screen w-screen") ])
      [ filler
      , D.div (bang $ D.Class := "grow-0 flew-row flex")
          [ filler
          , D.div (bang $ D.Class := "grow-0")
              [ D.h1 (bang $ D.Class := "text-2xl text-slate-200") [ text_ "Joyride" ]
              , D.button
                  ( oneOf
                      [ bang $ D.Class := "bg-gray-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                      , DL.click
                          ( (oneOf [ bang (pure unit), event.unsubscriber ]) <#> \u -> do
                              opts.click
                              u
                          )
                      ]
                  )
                  [ text_ "Take a ride" ]
              ]
          , filler
          ]
      , filler
      ]
  , filler
  , D.canvas
      ( oneOf
          [ bang (D.Class := "absolute")
          , bang $ D.Self := HTMLCanvasElement.fromElement >>> traverse_
              ( threeLoader <<<
                  { threeStuff: opts.threeStuff
                  , isMobile: opts.isMobile
                  , cubeTextures: opts.cubeTextures
                  , unsubscriber: push.unsubscriber
                  , resizeE: opts.resizeE
                  , initialDims: opts.initialDims
                  , canvas: _
                  }
              )
          ]
      )
      []
  ]
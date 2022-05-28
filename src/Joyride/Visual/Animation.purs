module Joyride.Visual.Animation where

import Prelude

import Control.Plus (empty)
import Data.Foldable (oneOf)
import Data.Number (pi)
import Data.Time.Duration (Milliseconds)
import Effect (Effect)
import FRP.Behavior (Behavior, sample_)
import FRP.Event (Event, bang)
import Joyride.Visual.Bar (makeBar)
import Rito.Cameras.PerspectiveCamera (defaultOrbitControls, perspectiveCamera)
import Rito.Color (RGB(..), color)
import Rito.Core (OrbitControls(..), ASceneful, toScene)
import Rito.Geometries.Sphere (sphere)
import Rito.Lights.PointLight (pointLight)
import Rito.Materials.MeshBasicMaterial (meshBasicMaterial)
import Rito.Mesh (mesh)
import Rito.Properties (aspect, target) as P
import Rito.Properties (positionX, positionY, positionZ, render, scaleX, scaleY, scaleZ, size)
import Rito.Renderers.WebGL (webGLRenderer)
import Rito.Run as Rito.Run
import Rito.Scene (scene)
import Rito.THREE (ThreeStuff)
import Rito.Vector3 (vector3)
import Types (Player(..), RateInfo, RenderingInfo, WindowDims, allPlayers, playerZ)
import Web.HTML.HTMLCanvasElement (HTMLCanvasElement)

twoPi = 2.0 * pi :: Number

speed = 4.0 :: Number

runThree
  :: { threeStuff :: ThreeStuff
     , isMobile :: Boolean
     , lowPriorityCb :: Milliseconds -> Effect Unit -> Effect Unit
     , myPlayer :: Player
     , renderingInfo :: RenderingInfo
     , player2XBehavior :: Behavior Number
     , rateE :: Event RateInfo
     , resizeE :: Event WindowDims
     , basicE :: forall lock payload. ASceneful lock payload
     , xPosB :: Behavior Number
     , initialDims :: WindowDims
     , canvas :: HTMLCanvasElement
     }
  -> Effect Unit
runThree opts@{ threeStuff: { three } } = do
  let c3 = color three
  let v33 = vector3 three
  _ <- Rito.Run.run opts.threeStuff
    ( webGLRenderer
        ( scene empty $
            ( case opts.myPlayer of
                -- in poc, we can see player2 if we are 1
                Player1 ->
                  [ toScene $ mesh (sphere {} empty)
                      ( meshBasicMaterial
                          { color: c3 $ RGB 1.0 1.0 1.0
                          }
                          empty
                      )
                      ( oneOf
                          [ positionX <$> sample_ opts.player2XBehavior opts.rateE
                          , bang (positionY (0.0))
                          , bang (positionZ (playerZ opts.renderingInfo Player1))
                          , bang (scaleX 0.1)
                          , bang (scaleY 0.1)
                          , bang (scaleZ 0.1)
                          ]
                      )
                  ]
                _ -> []
            )
              <>
                ( ( makeBar <<<
                      { c3
                      , renderingInfo: opts.renderingInfo
                      , player: _
                      }
                  ) <$> allPlayers
                )
              <>
                -- light
                [ toScene $ pointLight
                    { distance: 4.0
                    , decay: 2.0
                    , color: c3 $ RGB 1.0 1.0 1.0
                    }
                    ( oneOf
                        [ bang (positionX 0.0)
                        , bang (positionY 0.0)
                        , bang (positionZ (playerZ opts.renderingInfo Player1))
                        ]
                    )
                -- notes
                , opts.basicE
                ]
        )
        ( perspectiveCamera
            { fov: 75.0
            , aspect: opts.initialDims.iw / opts.initialDims.ih
            , near: 0.1
            , far: 100.0
            , orbitControls: OrbitControls (defaultOrbitControls opts.canvas)
            }
            ( oneOf
                [ positionX <$> sample_ opts.xPosB opts.rateE
                , bang (positionY 0.0)
                , bang (positionZ (playerZ opts.renderingInfo Player1 + opts.renderingInfo.cameraOffset))
                , sample_ opts.xPosB  opts.rateE <#> \xp -> P.target $ v33
                    { x: xp, y: 0.0, z: (playerZ opts.renderingInfo Player1) }
                , opts.resizeE <#> \i -> P.aspect (i.iw / i.ih)
                ]
            )
        )
        { canvas: opts.canvas }
        ( oneOf
            [ bang (size { width: opts.initialDims.iw, height: opts.initialDims.ih })
            , bang render
            , opts.rateE $> render
            , opts.resizeE <#> \i -> size { width: i.iw, height: i.ih }
            ]
        )
    )
  pure unit

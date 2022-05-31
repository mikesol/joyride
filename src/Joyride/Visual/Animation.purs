module Joyride.Visual.Animation where

import Prelude

import Control.Alt ((<|>))
import Control.Plus (empty)
import Data.Foldable (oneOf, oneOfMap)
import Data.Number (pi)
import Data.Time.Duration (Milliseconds)
import Debug (spy)
import Effect (Effect)
import FRP.Behavior (Behavior, sample_)
import FRP.Event (Event, bang, keepLatest)
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
import Types (Axis(..), Player(..), PlayerPositions, RateInfo, RenderingInfo, WindowDims, allPlayers, allPositions, playerPosition)
import Web.HTML.HTMLCanvasElement (HTMLCanvasElement)

twoPi = 2.0 * pi :: Number

speed = 4.0 :: Number

runThree
  :: { threeStuff :: ThreeStuff
     , isMobile :: Boolean
     , lowPriorityCb :: Milliseconds -> Effect Unit -> Effect Unit
     , myPlayer :: Player
     , renderingInfo :: RenderingInfo
     , playerPositions :: Event PlayerPositions
     , rateE :: Event RateInfo
     , resizeE :: Event WindowDims
     , basicE :: forall lock payload. ASceneful lock payload
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
            ( allPlayers <#> \player -> do
                let ppos = playerPosition player
                let posAx axis = map (ppos axis) opts.playerPositions
                toScene $ mesh (sphere {} empty)
                  ( meshBasicMaterial
                      { color: c3 $ RGB 1.0 1.0 1.0
                      }
                      empty
                  )
                  ( oneOf
                      [ (\v -> let spied = if Player4 == player then spy "foo" v else 0.0 in positionX v) <$> posAx AxisX
                      , positionY <$> (map (add opts.renderingInfo.sphereOffsetY) (posAx AxisY))
                      , positionZ <$> posAx AxisZ
                      , bang (scaleX 0.1)
                      , bang (scaleY 0.1)
                      , bang (scaleZ 0.1)
                      ]
                  )

            )
              <>
                ( ( makeBar <<<
                      { c3
                      , renderingInfo: opts.renderingInfo
                      , position: _
                      }
                  ) <$> allPositions
                )
              <>
                ( allPlayers <#> \player -> do
                    let ppos = playerPosition player
                    let posAx axis = map (ppos axis) opts.playerPositions
                    toScene $ pointLight
                      { distance: 4.0
                      , decay: 2.0
                      , color: c3 $ RGB 1.0 1.0 1.0
                      }
                      ( oneOf
                          [ positionX <$> posAx AxisX
                          , positionY <$> (map (add (opts.renderingInfo.sphereOffsetY / 2.0)) $ posAx AxisY)
                          , positionZ <$> posAx AxisZ
                          ]
                      )

                )
              <>
                -- notes
                [ opts.basicE
                ]
        )
        ( perspectiveCamera
            { fov: 75.0
            , aspect: opts.initialDims.iw / opts.initialDims.ih
            , near: 0.1
            , far: 100.0
            , orbitControls: OrbitControls (defaultOrbitControls opts.canvas)
            }
            ( keepLatest
                (  opts.playerPositions <#> \positions ->
                    let
                      ppos = playerPosition opts.myPlayer
                      posAx axis = ppos axis positions
                      px = posAx AxisX
                      py = posAx AxisY
                      pz = posAx AxisZ
                    in
                      oneOfMap bang
                        [ positionX $ px
                        , positionY $ (opts.renderingInfo.cameraOffsetY + py)
                        , positionZ $ (opts.renderingInfo.cameraOffsetZ + pz)
                        , P.target $ v33 { x: px, y: py, z: pz }
                        ]
                ) <|> (opts.resizeE <#> \i -> P.aspect (i.iw / i.ih))
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

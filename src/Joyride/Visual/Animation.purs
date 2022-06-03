module Joyride.Visual.Animation where

import Prelude

import Control.Alt ((<|>))
import Control.Plus (empty)
import Data.Filterable (filter)
import Data.Foldable (oneOf, oneOfMap)
import Data.Newtype (unwrap)
import Data.Number (pi)
import Data.Time.Duration (Milliseconds)
import Data.Tuple (Tuple(..))
import Effect (Effect)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (Event, bang, keepLatest)
import Joyride.Visual.Bar (makeBar)
import Rito.Cameras.PerspectiveCamera (defaultOrbitControls, perspectiveCamera)
import Rito.Color (RGB(..), color)
import Rito.Core (OrbitControls(..), ASceneful, toScene)
import Rito.Geometries.Sphere (sphere)
import Rito.Lights.PointLight (pointLight)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.Mesh (mesh)
import Rito.Properties (aspect, target) as P
import Rito.Properties (positionX, positionY, positionZ, render, scaleX, scaleY, scaleZ, size)
import Rito.Renderers.WebGL (webGLRenderer)
import Rito.Run as Rito.Run
import Rito.Scene (scene)
import Rito.THREE (ThreeStuff)
import Rito.Texture (Texture)
import Rito.Vector3 (vector3)
import Types (Axis(..), Player(..), PlayerPositions, RateInfo, RenderingInfo, Textures, WindowDims, allPlayers, allPositions, playerPosition)
import Web.HTML.HTMLCanvasElement (HTMLCanvasElement)

twoPi = 2.0 * pi :: Number

speed = 4.0 :: Number

runThree
  :: { threeStuff :: ThreeStuff
     , debug :: Boolean
     , isMobile :: Boolean
     , lowPriorityCb :: Milliseconds -> Effect Unit -> Effect Unit
     , myPlayer :: Player
     , textures :: Textures Texture
     , renderingInfo :: Behavior RenderingInfo
     , animatedStuff :: Event { rateInfo :: RateInfo, playerPositions :: PlayerPositions }
     , resizeE :: Event WindowDims
     , basicE :: forall lock payload. ASceneful lock payload
     , initialDims :: WindowDims
     , canvas :: HTMLCanvasElement
     }
  -> Effect Unit
runThree opts@{ threeStuff: { three } } = do
  let c3 = color three
  let v33 = vector3 three
  let textures = unwrap opts.textures
  let mopts = { playerPositions: _.playerPositions <$> opts.animatedStuff, rateInfo: _.rateInfo <$> opts.animatedStuff }
  _ <- Rito.Run.run opts.threeStuff
    ( webGLRenderer
        ( scene empty $
            ( filter (_ /= opts.myPlayer) allPlayers <#> \player -> do
                let ppos = playerPosition player
                let posAx axis = map (ppos axis) mopts.playerPositions
                toScene $ mesh (sphere {} empty)
                  ( case player of
                      Player1 ->
                        meshStandardMaterial
                          { map: textures.hockeyCOL
                          , aoMap: textures.hockeyAO
                          , displacementMap: textures.hockeyDISP
                          , displacementScale: 0.1
                          , normalMap: textures.hockeyNRM
                          , roughnessMap: textures.hockeyGLOSS
                          }
                      Player2 ->
                        meshStandardMaterial
                          { map: textures.marble19COL
                          , normalMap: textures.marble19NRM
                          , roughnessMap: textures.marble19GLOSS
                          }
                      Player3 ->
                        meshStandardMaterial
                          { map: textures.marble21COL
                          , normalMap: textures.marble21NRM
                          , roughnessMap: textures.marble21GLOSS
                          }
                      -- todo: change to something unique
                      Player4 ->
                        meshStandardMaterial
                          { map: textures.marble19COL
                          , normalMap: textures.marble19NRM
                          , roughnessMap: textures.marble19GLOSS
                          }
                    empty
                  )
                  ( oneOf
                      [ positionX <$> posAx AxisX
                      , positionY <$> (sampleBy (\{ sphereOffsetY } py -> sphereOffsetY + py) opts.renderingInfo (posAx AxisY))
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
                      , debug: opts.debug
                      , rateE: mopts.rateInfo
                      , position: _
                      }
                  ) <$> allPositions
                )
              <>
                ( allPlayers <#> \player -> do
                    let ppos = playerPosition player
                    let posAx axis = map (ppos axis) mopts.playerPositions
                    toScene $ pointLight
                      { distance: 4.0
                      , decay: 2.0
                      , color: c3 $ RGB 1.0 1.0 1.0
                      }
                      ( oneOf
                          [ positionX <$> posAx AxisX
                          , positionY <$> (sampleBy (\{ sphereOffsetY } py -> (sphereOffsetY / 2.0) + py) opts.renderingInfo (posAx AxisY))
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
                ( sampleBy Tuple opts.renderingInfo mopts.playerPositions <#> \(Tuple ri positions) ->
                    let
                      ppos = playerPosition opts.myPlayer
                      posAx axis = ppos axis positions
                      px = posAx AxisX
                      py = posAx AxisY
                      pz = posAx AxisZ
                    in
                      oneOfMap bang
                        [ positionX px
                        , positionY (ri.cameraOffsetY + py)
                        , positionZ (ri.cameraOffsetZ + pz)
                        , P.target $ v33 { x: px, y: ri.cameraLookAtOffsetY + py, z: ri.cameraLookAtOffsetZ + pz }
                        ]
                ) <|> (opts.resizeE <#> \i -> P.aspect (i.iw / i.ih))
            )
        )
        { canvas: opts.canvas }
        ( oneOf
            [ bang (size { width: opts.initialDims.iw, height: opts.initialDims.ih })
            , bang render
            , mopts.rateInfo $> render
            , opts.resizeE <#> \i -> size { width: i.iw, height: i.ih }
            ]
        )
    )
  pure unit

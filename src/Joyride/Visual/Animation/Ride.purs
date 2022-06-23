module Joyride.Visual.Animation.Ride where

import Prelude

import Bolson.Core (Element(..), envy, fixed)
import Control.Alt ((<|>))
import Control.Plus (empty)
import Data.Array.NonEmpty (toArray)
import Data.Filterable (filter)
import Data.Foldable (oneOf, oneOfMap)
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Number (cos, pi)
import Data.Tuple (Tuple(..))
import Data.Tuple.Nested ((/\))
import Data.Variant (inj)
import Effect (Effect)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (Event, EventIO, bang, keepLatest, mapAccum)
import FRP.Event.VBus (V, vbus)
import Foreign.Object (fromHomogeneous)
import Joyride.Effect.Lowpass (lpf)
import Joyride.FRP.Dedup (dedup)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Shaders.Galaxy (galaxyParams)
import Joyride.Visual.Bar (makeBar)
import Joyride.Visual.BasicLabels (basicLabels)
import Joyride.Visual.LeapLabels (leapLabels)
import Joyride.Visual.LongLabels (longLabels)
import Rito.Blending (Blending(..))
import Rito.Cameras.PerspectiveCamera (perspectiveCamera)
import Rito.Color (RGB(..), color)
import Rito.Core (ASceneful, Renderer(..), cameraToGroup, toGroup, toScene)
import Rito.CubeTexture (CubeTexture)
import Rito.Geometries.BufferGeometry (bufferGeometry)
import Rito.Geometries.Plane (plane)
import Rito.Geometries.Sphere (sphere)
import Rito.Group (group)
import Rito.InstancedMesh (instancedMesh')
import Rito.Lights.AmbientLight (ambientLight)
import Rito.Lights.PointLight (pointLight)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.Materials.ShaderMaterial (shaderMaterial)
import Rito.Mesh (mesh)
import Rito.Points (points)
import Rito.Portal (globalCameraPortal1, globalScenePortal1)
import Rito.Properties (aspect, background, decay, distance, intensity, positionZ, rotateX, rotateY, rotateZ, uniform) as P
import Rito.Properties (positionX, positionY, positionZ, render, scaleX, scaleY, scaleZ, size, widthSegments)
import Rito.Renderers.CSS2D (css2DRenderer)
import Rito.Renderers.CSS3D (css3DRenderer)
import Rito.Renderers.WebGL (webGLRenderer)
import Rito.Run as Rito.Run
import Rito.Scene (Background(..), scene)
import Rito.Texture (Texture)
import Type.Proxy (Proxy(..))
import Types (Axis(..), CubeTextures, GalaxyAttributes, HitBasicMe, HitBasicVisualForLabel, HitLeapVisualForLabel, HitLongVisualForLabel, JMilliseconds, Player(..), PlayerPositions, Position(..), RateInfo, ReleaseLongVisualForLabel, RenderingInfo, Seconds(..), Shaders, Textures, ThreeDI, WindowDims, allPlayers, allPositions, playerPosition, playerPosition')
import Web.DOM as Web.DOM
import Web.HTML.HTMLCanvasElement (HTMLCanvasElement)

twoPi = 2.0 * pi :: Number

speed = 4.0 :: Number

runThree
  :: { threeDI :: ThreeDI
     , debug :: Boolean
     , galaxyAttributes :: GalaxyAttributes
     , shaders :: Shaders
     , css2DRendererElt :: Event Web.DOM.Element
     , css3DRendererElt :: Event Web.DOM.Element
     , isMobile :: Boolean
     , lowPriorityCb :: JMilliseconds -> Effect Unit -> Effect Unit
     , myPlayer :: Player
     , textures :: Textures Texture
     , cubeTextures :: CubeTextures CubeTexture
     , renderingInfo :: Behavior RenderingInfo
     , animatedStuff ::
         Event
           { rateInfo :: RateInfo
           , playerPositions :: PlayerPositions
           }
     , resizeE :: Event WindowDims
     , basicE ::
         (HitBasicVisualForLabel -> Effect Unit)
         -> forall lock payload
          . ASceneful lock payload
     , leapE ::
         (HitLeapVisualForLabel -> Effect Unit)
         -> forall lock payload
          . ASceneful lock payload
     , longE ::
         (HitLongVisualForLabel -> Effect Unit)
         -> (ReleaseLongVisualForLabel -> Effect Unit)
         -> forall lock payload
          . ASceneful lock payload
     , pushBasic :: EventIO HitBasicMe
     , initialDims :: WindowDims
     , canvas :: HTMLCanvasElement
     }
  -> Effect Unit
runThree opts = do
  let c3 = color opts.threeDI.color
  let textures = unwrap opts.textures
  let mopts = { playerPositions: _.playerPositions <$> opts.animatedStuff, rateInfo: _.rateInfo <$> opts.animatedStuff }
  _ <- Rito.Run.run
    ( envy $ vbus
        ( Proxy
            :: _
                 ( V
                     ( hitBasicVisualForLabel :: HitBasicVisualForLabel
                     , hitLeapVisualForLabel :: HitLeapVisualForLabel
                     , hitLongVisualForLabel :: HitLongVisualForLabel
                     , releaseLongVisualForLabel :: ReleaseLongVisualForLabel
                     )
                 )
        )
        \scenePush sceneEvent -> globalCameraPortal1
          ( perspectiveCamera
              { perspectiveCamera: opts.threeDI.perspectiveCamera
              , fov: 75.0
              , aspect: opts.initialDims.iw / opts.initialDims.ih
              , near: 0.1
              , far: 100.0
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
                          ]
                  ) <|> (opts.resizeE <#> \i -> P.aspect (i.iw / i.ih))
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
                            ( map (_.rateInfo.epochTime >>> unwrap >>> (_ / 1000.0))
                                opts.animatedStuff
                            )
                            Nothing
                        ) <#> \t ->
                          let
                            fac = t / 1000.0
                          in
                            if false then empty
                            else oneOfMap bang
                              [ P.rotateX $ 0.001 * cos (fac * pi * 0.01)
                              , P.rotateY $ 0.001 * cos (fac * pi * 0.01)
                              , P.rotateZ $ 0.001 * cos (fac * pi * 0.01)
                              ]
                    )
                    ( ( filter (_ /= opts.myPlayer) (toArray allPlayers) <#> \player -> do
                          let ppos = playerPosition player
                          let posAx axis = map (ppos axis) mopts.playerPositions
                          toGroup $ mesh { mesh: opts.threeDI.mesh }
                            (sphere { sphere: opts.threeDI.sphereGeometry })
                            ( case player of
                                Player1 ->
                                  meshStandardMaterial
                                    { meshStandardMaterial: opts.threeDI.meshStandardMaterial
                                    , map: textures.hockeyCOL
                                    , aoMap: textures.hockeyAO
                                    , displacementMap: textures.hockeyDISP
                                    , displacementScale: 0.1
                                    , normalMap: textures.hockeyNRM
                                    , roughnessMap: textures.hockeyGLOSS
                                    }
                                Player2 ->
                                  meshStandardMaterial
                                    { meshStandardMaterial: opts.threeDI.meshStandardMaterial
                                    , map: textures.marble19COL
                                    , normalMap: textures.marble19NRM
                                    , roughnessMap: textures.marble19GLOSS
                                    }
                                Player3 ->
                                  meshStandardMaterial
                                    { meshStandardMaterial: opts.threeDI.meshStandardMaterial
                                    , map: textures.marble21COL
                                    , normalMap: textures.marble21NRM
                                    , roughnessMap: textures.marble21GLOSS
                                    }
                                -- todo: change to something unique
                                Player4 ->
                                  meshStandardMaterial
                                    { meshStandardMaterial: opts.threeDI.meshStandardMaterial
                                    , map: textures.marble19COL
                                    , normalMap: textures.marble19NRM
                                    , roughnessMap: textures.marble19GLOSS
                                    }
                              empty
                            )
                            ( oneOf
                                [ positionX <$> applyLPF (player == opts.myPlayer) (posAx AxisX)
                                , positionY <$> (sampleBy (\{ sphereOffsetY } py -> sphereOffsetY + py) opts.renderingInfo (posAx AxisY))
                                , positionZ <$> posAx AxisZ
                               , bang $ positionZ (case player of
                                  Player1 -> -4.0
                                  Player2 -> -3.0
                                  Player3 -> -2.0
                                  Player4 -> -1.0
                                  )

                                , bang (scaleX 0.1)
                                , bang (scaleY 0.1)
                                , bang (scaleZ 0.1)
                                ]
                            )

                      )
                        <>
                          map toGroup
                            ( ( \position -> makeBar $
                                  { c3
                                  , threeDI: opts.threeDI
                                  , renderingInfo: opts.renderingInfo
                                  , debug: opts.debug
                                  , initialIsMe: opts.myPlayer == case position of
                                      Position1 -> Player1
                                      Position2 -> Player2
                                      Position3 -> Player3
                                      Position4 -> Player4
                                  , isMe: dedup
                                      ( opts.animatedStuff <#> \{ playerPositions } -> position == case opts.myPlayer of
                                          Player1 -> playerPositions.p1p
                                          Player2 -> playerPositions.p2p
                                          Player3 -> playerPositions.p3p
                                          Player4 -> playerPositions.p4p
                                      )
                                  , rateE: mopts.rateInfo
                                  , position
                                  }
                              ) <$> (toArray allPositions)
                            )
                        <>
                          [ toGroup $ ambientLight
                              { ambientLight: opts.threeDI.ambientLight
                              , intensity: 0.1
                              , color: c3 $ RGB 1.0 1.0 1.0
                              }
                              empty
                          ]
                        <>
                          ( (toArray allPlayers) <#> \player -> do
                              let ppos = playerPosition player
                              let posAx axis = map (ppos axis) mopts.playerPositions
                              let normalDistance = 4.0
                              let normalDecay = 2.0
                              let normalIntensity = 1.0
                              toGroup $ pointLight
                                { pointLight: opts.threeDI.pointLight
                                , distance: normalDistance
                                , decay: normalDecay
                                , intensity: normalIntensity
                                , color: c3 $ RGB 1.0 1.0 1.0
                                }
                                ( oneOf
                                    [ positionX <$> applyLPF (player == opts.myPlayer) (posAx AxisX)
                                    , positionY <$> (sampleBy (\{ sphereOffsetY } py -> (sphereOffsetY / 2.0) + py) opts.renderingInfo (posAx AxisY))
                                    , positionZ <$> posAx AxisZ
                                    , keepLatest $ (dedup (playerPosition' player <$> mopts.playerPositions)) <#> case _ of
                                        -- only illuminate this much for the person in the front position
                                        Position1 | opts.myPlayer == player -> oneOfMap bang
                                          [ P.decay 0.2
                                          , P.intensity 5.0
                                          , P.distance 10.0
                                          ]
                                        _ -> oneOfMap bang
                                          [ P.decay normalDecay
                                          , P.intensity normalIntensity
                                          , P.distance normalDistance
                                          ]
                                    ]
                                )

                          )
                        <>
                          -- basic notes
                          [ toGroup $ opts.basicE scenePush.hitBasicVisualForLabel
                          ]
                        <>
                          -- leap notes
                          [ toGroup $ opts.leapE scenePush.hitLeapVisualForLabel
                          ]
                        <>
                          -- long notes
                          [ toGroup $ opts.longE scenePush.hitLongVisualForLabel scenePush.releaseLongVisualForLabel
                          ]
                        <>
                          -- basic labels
                          [ toGroup $ basicLabels
                              { threeDI: opts.threeDI
                              , basicTap: sceneEvent.hitBasicVisualForLabel
                              , lpsCallback: opts.lowPriorityCb
                              }
                          ]
                        <>
                          -- leap labels
                          [ toGroup $ leapLabels
                              { threeDI: opts.threeDI
                              , leapTap: sceneEvent.hitLeapVisualForLabel
                              , lpsCallback: opts.lowPriorityCb
                              }
                          ]
                        <>
                          -- leap labels
                          [ toGroup $ longLabels
                              { threeDI: opts.threeDI
                              , longTap: sceneEvent.hitLongVisualForLabel
                              , longRelease: sceneEvent.releaseLongVisualForLabel
                              , lpsCallback: opts.lowPriorityCb
                              }
                          ]
                        <>
                          [ toGroup $ instancedMesh' galaxyParams.count
                              { matrix4: opts.threeDI.matrix4
                              , mesh: opts.threeDI.mesh
                              , instancedMesh: opts.threeDI.instancedMesh
                              }
                              ( plane
                                  { plane: opts.threeDI.plane
                                  , instancedBufferAttributes: fromHomogeneous opts.galaxyAttributes
                                  , widthSegments: 4
                                  , heightSegments: 4
                                  }
                              )
                              ( shaderMaterial
                                  { uSize: 30.0
                                  , uTime: 0.0
                                  , uButterfly: (unwrap opts.textures).butterfly0
                                  }
                                  { shaderMaterial: opts.threeDI.shaderMaterial
                                  , vertexShader: opts.shaders.galaxy.vertex
                                  , depthWrite: false
                                  , blending: AdditiveBlending
                                  , vertexColors: true
                                  , fragmentShader: opts.shaders.galaxy.fragment
                                  }
                                  ( opts.animatedStuff <#>
                                      \{ rateInfo: { time: Seconds time } } -> P.uniform (inj (Proxy :: _ "uTime") time)
                                  )
                              )
                              empty -- oneOf [ bang $ P.positionZ (-1.0), bang $ positionY 0.0, bang $ scaleX 3.0, bang $ scaleY 3.0, bang $ scaleZ 3.0 ]
                          ]
                        <>
                          -- camera
                          -- needs to be part of the group to rotate correctly
                          [ cameraToGroup myCamera
                          ]
                    )
                ]
            )
            \myScene ->
              fixed
                [ webGLRenderer
                    myScene
                    myCamera
                    { canvas: opts.canvas
                    , webGLRenderer: opts.threeDI.webGLRenderer
                    , raycaster: opts.threeDI.raycaster
                    }
                    ( oneOf
                        [ bang (size { width: opts.initialDims.iw, height: opts.initialDims.ih })
                        , bang render
                        , mopts.rateInfo $> render
                        , opts.resizeE <#> \i -> size { width: i.iw, height: i.ih }
                        ]
                    )
                , envy $ map
                    ( \element -> css2DRenderer
                        myScene
                        myCamera
                        { canvas: opts.canvas, element, css2DRenderer: opts.threeDI.css2DRenderer }
                        ( oneOf
                            [ opts.resizeE <#> \i -> size { width: i.iw, height: i.ih }
                            , bang render
                            , (mopts.rateInfo $> render)
                            ]
                        )
                    )
                    opts.css2DRendererElt
                , envy $ map
                    ( \element -> css3DRenderer
                        myScene
                        myCamera
                        { canvas: opts.canvas, element, css3DRenderer: opts.threeDI.css3DRenderer }
                        ( oneOf
                            [ opts.resizeE <#> \i -> size { width: i.iw, height: i.ih }
                            , bang render
                            , (mopts.rateInfo $> render)
                            ]
                        )
                    )
                    opts.css3DRendererElt
                ]
    )
  pure unit
  where
  applyLPF :: Boolean -> Event Number -> Event Number
  applyLPF false = identity
  applyLPF true = lpf lowpassFactor
  lowpassFactor = 0.65
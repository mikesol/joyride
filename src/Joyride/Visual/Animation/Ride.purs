module Joyride.Visual.Animation.Ride where

import Prelude

import Bolson.Core (Element(..), envy, fixed)
import Control.Alt ((<|>))
import Control.Plus (empty)
import Data.Array.NonEmpty (toArray)
import Data.Filterable (filter)
import Data.Foldable (oneOf, oneOfMap)
import Data.Maybe (Maybe(..))
import Data.Monoid (guard)
import Data.Newtype (unwrap)
import Data.Number (cos, pi, sin)
import Data.Tuple (Tuple(..))
import Data.Tuple.Nested ((/\))
import Data.Variant (inj)
import Effect (Effect)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (Event, EventIO, bang, keepLatest, mapAccum)
import FRP.Event.VBus (V)
import Foreign.Object (fromHomogeneous)
import Joyride.Effect.Lowpass (lpf)
import Joyride.FRP.BusT (vbust)
import Joyride.FRP.Dedup (dedup)
import Joyride.QualifiedDo.Apply as QDA
import Joyride.Shaders.Galaxy (galaxyParams)
import Joyride.Visual.Bar (makeBar)
import Joyride.Visual.BasicLabels (basicLabels)
import Joyride.Visual.LeapLabels (leapLabels)
import Joyride.Visual.LongLabels (longLabels)
import Rito.Blending (Blending(..))
import Rito.Cameras.PerspectiveCamera (perspectiveCamera)
import Rito.Color (RGB(..), color)
import Rito.Core (ASceneful, Renderer(..), cameraToGroup, effectComposerToRenderer, plain, toGroup, toScene)
import Rito.CubeTexture (CubeTexture)
import Rito.Euler (euler)
import Rito.GLTF (GLTF)
import Rito.GLTF as GLTF
import Rito.Geometries.Plane (plane)
import Rito.Group (group)
import Rito.InstancedMesh (instancedMesh')
import Rito.Lights.AmbientLight (ambientLight)
import Rito.Lights.PointLight (pointLight)
import Rito.Materials.ShaderMaterial (shaderMaterial)
import Rito.Portal (globalCameraPortal1, globalEffectComposerPortal1, globalScenePortal1, globalWebGLRendererPortal1)
import Rito.Properties (aspect, background, decay, distance, intensity, rotateX, rotateY, rotateZ, rotationFromEuler, uniform) as P
import Rito.Properties (positionX, positionY, positionZ, render, scaleX, scaleY, scaleZ, size)
import Rito.Renderers.CSS2D (css2DRenderer)
import Rito.Renderers.CSS3D (css3DRenderer)
import Rito.Renderers.Raycaster (raycaster)
import Rito.Renderers.WebGL (webGLRenderer)
import Rito.Renderers.WebGL.EffectComposer (effectComposer)
import Rito.Renderers.WebGL.EffectComposerPass (effectComposerPass)
import Rito.Renderers.WebGL.RenderPass (renderPass)
import Rito.Renderers.WebGL.UnrealBloomPass (unrealBloomPass)
import Rito.Run as Rito.Run
import Rito.Scene (Background(..), scene)
import Rito.Texture (Texture)
import Rito.Vector2 (vector2)
import Type.Proxy (Proxy(..))
import Types (Axis(..), CubeTextures, GalaxyAttributes, HitBasicMe, HitBasicVisualForLabel, HitLeapVisualForLabel, HitLongVisualForLabel, JMilliseconds, Models, Player(..), PlayerPositions, Position(..), RateInfo, ReleaseLongVisualForLabel, RenderingInfo, Seconds(..), Shaders, Textures, ThreeDI, WindowDims, allPlayers, allPositions, playerPosition)
import Web.DOM as Web.DOM
import Web.HTML.HTMLCanvasElement (HTMLCanvasElement)

twoPi = 2.0 * pi :: Number

speed = 4.0 :: Number

runThree
  :: { threeDI :: ThreeDI
     , debug :: Boolean
     , galaxyAttributes :: GalaxyAttributes
     , shaders :: Shaders
     , models :: Models GLTF
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
  let mopts = { playerPositions: _.playerPositions <$> opts.animatedStuff, rateInfo: _.rateInfo <$> opts.animatedStuff }
  _ <- Rito.Run.run
    ( envy QDA.do
        scenePush /\ sceneEvent <- vbust
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
        myCamera <- globalCameraPortal1
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
                          , P.rotationFromEuler (euler opts.threeDI.euler { x: ri.cameraRotationAroundX, y: 0.0, z: 0.0 })
                          ]
                  ) <|> (opts.resizeE <#> \i -> P.aspect (i.iw / i.ih))
              )
          )
        let
          shipsssss n =
            ( filter (_ /= opts.myPlayer) (toArray allPlayers) <#> \player -> do
                let ppos = playerPosition player
                let posAx axis = map (ppos axis) mopts.playerPositions
                toGroup $ GLTF.scene (unwrap opts.models).spaceship
                  ( oneOf
                      [ (positionX <<< add n) <$> applyLPF (player == opts.myPlayer) (posAx AxisX)
                      , positionY <$> (sampleBy (\{ sphereOffsetY } py -> sphereOffsetY + py) opts.renderingInfo (posAx AxisY))
                      , bang $ positionZ
                          ( case player of
                              Player1 -> -4.0
                              Player2 -> -3.0
                              Player3 -> -2.0
                              Player4 -> -1.0
                          )
                      , positionZ <$> posAx AxisZ
                      , bang $ scaleX 0.02
                      , bang $ scaleY 0.02
                      , bang $ scaleZ 0.02
                      , case player of
                          Player1 -> mopts.rateInfo <#> \rate -> P.rotationFromEuler (euler opts.threeDI.euler { x: sin (unwrap rate.time * pi * 0.1) * pi * 0.02, y: sin (unwrap rate.time * pi * 0.09) * pi * -0.03, z: cos (unwrap rate.time * pi * 0.07) * pi * 0.04 })
                          Player3 -> mopts.rateInfo <#> \rate -> P.rotationFromEuler (euler opts.threeDI.euler { x: cos (unwrap rate.time * pi * 0.06) * pi * 0.02, y: sin (unwrap rate.time * pi * 0.11) * pi * 0.01, z: cos (unwrap rate.time * pi * 0.03) * pi * -0.03 })
                          Player2 -> mopts.rateInfo <#> \rate -> P.rotationFromEuler (euler opts.threeDI.euler { x: sin (unwrap rate.time * pi * 0.02) * pi * -0.05, y: cos (unwrap rate.time * pi * 0.12) * pi * -0.02, z: sin (unwrap rate.time * pi * -0.08) * pi * 0.08 })
                          Player4 -> mopts.rateInfo <#> \rate -> P.rotationFromEuler (euler opts.threeDI.euler { x: cos (unwrap rate.time * pi * 0.01) * pi * 0.04, y: cos (unwrap rate.time * pi * 0.03) * pi * -0.06, z: sin (unwrap rate.time * pi * 0.02) * pi * -0.09 })
                      ]
                  )
                  []
            )
        myScene <- globalScenePortal1
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
                  (shipsssss 0.00 <> map toGroup
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
                        ( filter (_ /= opts.myPlayer) (toArray allPlayers) <#> \player -> do
                            let ppos = playerPosition player
                            let posAx axis = map (ppos axis) mopts.playerPositions
                            toGroup $ GLTF.scene (unwrap opts.models).spaceship
                              ( oneOf
                                  [ positionX <$> applyLPF (player == opts.myPlayer) (posAx AxisX)
                                  , positionY <$> (sampleBy (\{ sphereOffsetY } py -> sphereOffsetY + py) opts.renderingInfo (posAx AxisY))
                                  , bang $ positionZ
                                      ( case player of
                                          Player1 -> -4.0
                                          Player2 -> -3.0
                                          Player3 -> -2.0
                                          Player4 -> -1.0
                                      )
                                  , positionZ <$> posAx AxisZ
                                  , bang $ scaleX 0.02
                                  , bang $ scaleY 0.02
                                  , bang $ scaleZ 0.02
                                  , case player of
                                      Player1 -> mopts.rateInfo <#> \rate -> P.rotationFromEuler (euler opts.threeDI.euler { x: sin (unwrap rate.time * pi * 0.1) * pi * 0.02, y: sin (unwrap rate.time * pi * 0.09) * pi * -0.03, z: cos (unwrap rate.time * pi * 0.07) * pi * 0.04 })
                                      Player3 -> mopts.rateInfo <#> \rate -> P.rotationFromEuler (euler opts.threeDI.euler { x: cos (unwrap rate.time * pi * 0.06) * pi * 0.02, y: sin (unwrap rate.time * pi * 0.11) * pi * 0.01, z: cos (unwrap rate.time * pi * 0.03) * pi * -0.03 })
                                      Player2 -> mopts.rateInfo <#> \rate -> P.rotationFromEuler (euler opts.threeDI.euler { x: sin (unwrap rate.time * pi * 0.02) * pi * -0.05, y: cos (unwrap rate.time * pi * 0.12) * pi * -0.02, z: sin (unwrap rate.time * pi * -0.08) * pi * 0.08 })
                                      Player4 -> mopts.rateInfo <#> \rate -> P.rotationFromEuler (euler opts.threeDI.euler { x: cos (unwrap rate.time * pi * 0.01) * pi * 0.04, y: cos (unwrap rate.time * pi * 0.03) * pi * -0.06, z: sin (unwrap rate.time * pi * 0.02) * pi * -0.09 })
                                  ]
                              )
                              []
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
                                  , bang $ P.decay normalDecay
                                  , bang $ P.intensity normalIntensity
                                  , bang $ P.distance normalDistance
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
                        -- camera
                        -- needs to be part of the group to rotate correctly
                        [ cameraToGroup myCamera
                        ]
                  )
              ]
          )
        myWebGLRenderer <- globalWebGLRendererPortal1
          ( webGLRenderer
              myScene
              myCamera
              { canvas: opts.canvas
              , webGLRenderer: opts.threeDI.webGLRenderer
              }
              ( oneOf
                  [ bang (size { width: opts.initialDims.iw, height: opts.initialDims.ih })
                  , opts.resizeE <#> \i -> size { width: i.iw, height: i.ih }
                  ]
              )
          )
        myShips <- globalScenePortal1
          ( scene { scene: opts.threeDI.scene } empty
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
                  ( shipsssss 0.0
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
                                  , positionY <$> (sampleBy (\{ lightOffsetY } py -> (lightOffsetY + py)) opts.renderingInfo (posAx AxisY))
                                  , positionZ <$> posAx AxisZ
                                  , bang $ P.decay normalDecay
                                  , bang $ P.intensity normalIntensity
                                  , bang $ P.distance normalDistance
                                  ]
                              )

                        )
                  )
              ]
          )
        myShipComposer <- globalEffectComposerPortal1
          ( effectComposer
              { effectComposer: opts.threeDI.effectComposer
              }
              myWebGLRenderer
              empty
              [ renderPass
                  { renderPass: opts.threeDI.renderPass
                  }
                  myShips
                  myCamera
              , unrealBloomPass
                  { unrealBloomPass: opts.threeDI.unrealBloomPass
                  , radius: 1.0
                  , resolution: vector2 opts.threeDI.vector2 { x: 1000.0, y: 1000.0 }
                  , strength: 3.0
                  , threshold: 0.1
                  }
                  empty
              ]
          )
        fixed
          [ raycaster
              { raycaster: opts.threeDI.raycaster
              , canvas: opts.canvas
              }
              myCamera
          , plain $ effectComposerToRenderer $ effectComposer
              { effectComposer: opts.threeDI.effectComposer
              }
              myWebGLRenderer
              ( oneOf
                  [ bang render
                  , mopts.rateInfo $> render
                  ]
              )
              [ renderPass
                  { renderPass: opts.threeDI.renderPass
                  }
                  myScene
                  myCamera
              , effectComposerPass { effectComposerPass: opts.threeDI.effectComposerPass } myShipComposer
              ]
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
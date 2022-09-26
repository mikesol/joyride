module Joyride.Visual.Animation.Tutorial where

import Prelude

import Bolson.Core (Element(..), envy, fixed)
import Control.Alt ((<|>))
import Control.Plus (empty)
import Data.Array.NonEmpty (toArray)
import Data.Filterable (filter)
import Data.Foldable (oneOf, oneOfMap)
import Data.Int (toNumber)
import Data.Newtype (unwrap)
import Data.Number (cos, pi, sin)
import Data.Tuple (Tuple(..))
import Data.Tuple.Nested ((/\))
import Effect (Effect)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (Event, EventIO, keepLatest, mailboxed, mapAccum)
import FRP.Event.VBus (V)
import Joyride.Constants.Visual (rotationConstantForBackground)
import Joyride.Effect.Lowpass (lpf)
import Joyride.FRP.BusT (vbust)
import Joyride.FRP.Dedup (dedup)
import Joyride.QualifiedDo.Apply as QDA
import Joyride.Visual.Bar (makeBar)
-- import Joyride.Visual.BasicLabels (basicLabels)
-- import Joyride.Visual.LeapLabels (leapLabels)
-- import Joyride.Visual.LongLabels (longLabels)
import Joyride.Visual.RaycastableLane (makeRaycastableLane)
import Rito.Cameras.PerspectiveCamera (perspectiveCamera)
import Rito.Color (RGB(..), color)
import Rito.Core (ASceneful, Renderer(..), cameraToGroup, effectComposerToRenderer, plain, toGroup, toScene)
import Rito.CubeTexture (CubeTexture)
import Rito.Euler (euler)
import Rito.GLTF (GLTF)
import Rito.GLTF as GLTF
import Rito.Group (group)
import Rito.Lights.AmbientLight (ambientLight)
import Rito.Lights.PointLight (pointLight)
import Rito.Portal (globalCameraPortal1, globalEffectComposerPortal1, globalScenePortal1, globalWebGLRendererPortal1)
import Rito.Properties (aspect, background, decay, distance, intensity, rotateX, rotateY, rotateZ, rotationFromEuler) as P
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
import Types (Axis(..), Column, CubeTextures, GalaxyAttributes, HitBasicMe, HitBasicVisualForLabel, HitLeapVisualForLabel, HitLongVisualForLabel, JMilliseconds, Models, Player(..), PlayerPositions, Position(..), RateInfo, ReleaseLongVisualForLabel, RenderingInfo, Shaders, Textures, ThreeDI, WindowDims, allColumns, allPlayers, allPositions, playerPosition)
import Web.DOM as Web.DOM
import Web.HTML.HTMLCanvasElement (HTMLCanvasElement)

twoPi = 2.0 * pi :: Number

speed = 4.0 :: Number

runThree
  :: { threeDI :: ThreeDI
     , debug :: Boolean
     , pressedStart :: Event Boolean
     , galaxyAttributes :: GalaxyAttributes
     , shaders :: Shaders
     , columnPusher :: EventIO Column
     , css2DRendererElt :: Event Web.DOM.Element
     , css3DRendererElt :: Event Web.DOM.Element
     , isMobile :: Boolean
     , lowPriorityCb :: JMilliseconds -> Effect Unit -> Effect Unit
     , myPlayer :: Player
     , textures :: Textures Texture
     , models :: Models GLTF
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
         -> (Column -> Event Unit)
         -> forall lock payload
          . ASceneful lock payload
     , leapE ::
         (HitLeapVisualForLabel -> Effect Unit)
         -> (Column -> Event Unit)
         -> forall lock payload
          . ASceneful lock payload
     , longE ::
         (HitLongVisualForLabel -> Effect Unit)
         -> (ReleaseLongVisualForLabel -> Effect Unit)
         -> (Column -> Event Unit)
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
        columnCtor <- keepLatest <<< mailboxed (map { payload: unit, address: _ } opts.columnPusher.event)
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
              ( let
                  ppos = playerPosition opts.myPlayer
                  posAx axis = map (ppos axis) mopts.playerPositions
                  px = posAx AxisX
                  py = posAx AxisY
                  pz = posAx AxisZ
                in
                  oneOf
                    [ positionX <$> tameXAxis false px
                    , sampleBy Tuple opts.renderingInfo py <#> \(Tuple ri py') -> positionY (ri.cameraOffsetY + py')
                    , sampleBy Tuple opts.renderingInfo pz <#> \(Tuple ri pz') -> positionZ (ri.cameraOffsetZ + pz')
                    , sampleBy Tuple opts.renderingInfo pz <#> \(Tuple ri _) -> P.rotationFromEuler (euler opts.threeDI.euler { x: ri.cameraRotationAroundX, y: 0.0, z: 0.0 })
                    , opts.resizeE <#> \i -> P.aspect (i.iw / i.ih)
                    ]
              )
          )

        let
          shipsssss n =
            ( filter (_ /= opts.myPlayer) (toArray allPlayers) <#> \player -> do
                let ppos = playerPosition player
                let posAx axis = map (ppos axis) mopts.playerPositions
                toGroup $ GLTF.scene (unwrap opts.models).spaceship
                  ( oneOf
                      [ (positionX <<< add n) <$> tameXAxis (isNotMe player opts.myPlayer) (posAx AxisX)
                      , positionY <$> (sampleBy (\{ sphereOffsetY } py -> sphereOffsetY + py) opts.renderingInfo (posAx AxisY))
                      , pure $ positionZ
                          ( case player of
                              Player1 -> -4.0
                              Player2 -> -3.0
                              Player3 -> -2.0
                              Player4 -> -1.0
                          )
                      , positionZ <$> posAx AxisZ
                      , pure $ scaleX 0.02
                      , pure $ scaleY 0.02
                      , pure $ scaleZ 0.02
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
          ( scene { scene: opts.threeDI.scene } (pure $ P.background (CubeTexture (unwrap opts.cubeTextures).skybox))
              [ toScene $ group { group: opts.threeDI.group }
                  ( oneOfMap pure
                      [ P.rotateX rotationConstantForBackground
                      , P.rotateY rotationConstantForBackground
                      , P.rotateZ rotationConstantForBackground
                      ]
                  )
                  ( shipsssss 0.00
                      <> map toGroup
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
                      <> map toGroup
                        ( ( \column -> makeRaycastableLane $
                              { initialDims: opts.initialDims
                              , resizeEvent: opts.resizeE
                              , c3
                              , renderingInfo: opts.renderingInfo
                              , threeDI: opts.threeDI
                              , rateInfo: _.rateInfo <$> opts.animatedStuff
                              , debug: opts.debug
                              , isMobile: opts.isMobile
                              , rateE: mopts.rateInfo
                              , column
                              , columnPusher: opts.columnPusher.push column
                              }
                          ) <$> allColumns
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
                                  [ positionX <$> tameXAxis (isNotMe player opts.myPlayer) (posAx AxisX)
                                  , positionY <$> (sampleBy (\{ lightOffsetY } py -> (lightOffsetY + py)) opts.renderingInfo (posAx AxisY))
                                  , positionZ <$> posAx AxisZ
                                  , pure $ P.decay normalDecay
                                  , pure $ P.intensity normalIntensity
                                  , pure $ P.distance normalDistance
                                  ]
                              )

                        )
                      <>
                        -- lights in the distance
                        ( [ -3.0, -1.0, 1.0, 3.0 ] <#> \d -> do
                            let normalDistance = 4.0
                            let normalDecay = 1.0
                            let normalIntensity = 1.0
                            toGroup $ pointLight
                              { pointLight: opts.threeDI.pointLight
                              , distance: normalDistance
                              , decay: normalDecay
                              , intensity: normalIntensity
                              , color: c3 $ RGB 1.0 1.0 1.0
                              }
                              ( oneOf
                                  [ pure $ positionX d
                                  , pure $ positionY 1.5
                                  , pure $ positionZ (-5.25)
                                  , pure $ P.decay normalDecay
                                  , pure $ P.intensity normalIntensity
                                  , pure $ P.distance normalDistance
                                  ]
                              )

                        )
                      <>
                        -- basic notes
                        [ toGroup $ opts.basicE scenePush.hitBasicVisualForLabel columnCtor
                        ]
                      -- <>
                      --   -- basic labels
                      --   [ toGroup $ basicLabels
                      --       { threeDI: opts.threeDI
                      --       , basicTap: sceneEvent.hitBasicVisualForLabel
                      --       , lpsCallback: opts.lowPriorityCb
                      --       }
                      --   ]
                      <>
                        -- leap notes
                        [ toGroup $ opts.leapE scenePush.hitLeapVisualForLabel columnCtor
                        ]
                      <>
                        -- long notes
                        [ toGroup $ opts.longE scenePush.hitLongVisualForLabel scenePush.releaseLongVisualForLabel columnCtor
                        ]
                      -- <>
                      --   -- leap labels
                      --   [ toGroup $ leapLabels
                      --       { threeDI: opts.threeDI
                      --       , leapTap: sceneEvent.hitLeapVisualForLabel
                      --       , lpsCallback: opts.lowPriorityCb
                      --       }
                      --   ]
                      -- <>
                      --   -- long labels
                      --   [ toGroup $ longLabels
                      --       { threeDI: opts.threeDI
                      --       , longTap: sceneEvent.hitLongVisualForLabel
                      --       , longRelease: sceneEvent.releaseLongVisualForLabel
                      --       , lpsCallback: opts.lowPriorityCb
                      --       }
                      --   ]
                      <>
                        -- camera
                        -- needs to be part of the group to rotate correctly
                        [ cameraToGroup myCamera
                        ]
                  )
              ]
          )
        myShips <- globalScenePortal1
          ( scene { scene: opts.threeDI.scene } empty
              [ toScene $ group { group: opts.threeDI.group }
                  ( oneOfMap pure
                      [ P.rotateX rotationConstantForBackground
                      , P.rotateY rotationConstantForBackground
                      , P.rotateZ rotationConstantForBackground
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
                                  [ positionX <$> tameXAxis (isNotMe player opts.myPlayer) (posAx AxisX)
                                  , positionY <$> (sampleBy (\{ lightOffsetY } py -> (lightOffsetY + py)) opts.renderingInfo (posAx AxisY))
                                  , positionZ <$> posAx AxisZ
                                  , pure $ P.decay normalDecay
                                  , pure $ P.intensity normalIntensity
                                  , pure $ P.distance normalDistance
                                  ]
                              )

                        )
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
                  [ pure (size { width: opts.initialDims.iw, height: opts.initialDims.ih })
                  , opts.resizeE <#> \i -> size { width: i.iw, height: i.ih }
                  ]
              )
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
                  [ pure render
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
          -- , envy $ map
          --     ( \element -> css2DRenderer
          --         myScene
          --         myCamera
          --         { canvas: opts.canvas, element, css2DRenderer: opts.threeDI.css2DRenderer }
          --         ( oneOf
          --             [ opts.resizeE <#> \i -> size { width: i.iw, height: i.ih }
          --             , pure render
          --             , (mopts.rateInfo $> render)
          --             ]
          --         )
          --     )
          --     opts.css2DRendererElt
          -- , envy $ map
          --     ( \element -> css3DRenderer
          --         myScene
          --         myCamera
          --         { canvas: opts.canvas, element, css3DRenderer: opts.threeDI.css3DRenderer }
          --         ( oneOf
          --             [ opts.resizeE <#> \i -> size { width: i.iw, height: i.ih }
          --             , pure render
          --             , (mopts.rateInfo $> render)
          --             ]
          --         )
          --     )
          --     opts.css3DRendererElt
          ]
    )
  pure unit
  where
  isNotMe a b = a /= b
  tipping = 120

  tameXAxis :: Boolean -> Event Number -> Event Number
  tameXAxis false = \i -> mapAccum (\c (v /\ ps) -> if ps then ((c + 1) /\ if c > tipping then v else (v * (toNumber c) / (toNumber tipping))) else 0 /\ 0.0) 0 (Tuple <$> i <*> (pure false <|> opts.pressedStart))
  tameXAxis true = lpf lowpassFactor
  lowpassFactor = 0.65

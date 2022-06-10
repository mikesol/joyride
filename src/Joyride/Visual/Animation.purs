module Joyride.Visual.Animation where

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
import Effect (Effect)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (Event, EventIO, bang, keepLatest, mapAccum)
import FRP.Event.VBus (V, vbus)
import Joyride.FRP.Dedup (dedup)
import Joyride.Visual.Bar (makeBar)
import Joyride.Visual.BasicLabels (basicLabels)
import Joyride.Visual.LeapLabels (leapLabels)
import Rito.Cameras.PerspectiveCamera (perspectiveCamera)
import Rito.Color (RGB(..), color)
import Rito.Core (ASceneful, Renderer(..), cameraToGroup, toGroup, toScene)
import Rito.CubeTexture (CubeTexture)
import Rito.Geometries.Sphere (sphere)
import Rito.Group (group)
import Rito.Lights.PointLight (pointLight)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.Mesh (mesh)
import Rito.Portal (globalCameraPortal1, globalScenePortal1)
import Rito.Properties (aspect, background, decay, distance, intensity, rotateX, rotateY, rotateZ) as P
import Rito.Properties (positionX, positionY, positionZ, render, scaleX, scaleY, scaleZ, size)
import Rito.Renderers.CSS2D (css2DRenderer)
import Rito.Renderers.WebGL (webGLRenderer)
import Rito.Run as Rito.Run
import Rito.Scene (Background(..), scene)
import Rito.THREE (ThreeStuff)
import Rito.Texture (Texture)
import Rito.Vector3 (vector3)
import Type.Proxy (Proxy(..))
import Types (Axis(..), CubeTextures, HitBasicMe, HitBasicVisualForLabel, HitLeapVisualForLabel, JMilliseconds, Player(..), PlayerPositions, Position(..), RateInfo, RenderingInfo, Textures, WindowDims, allPlayers, allPositions, playerPosition, playerPosition')
import Web.DOM as Web.DOM
import Web.HTML.HTMLCanvasElement (HTMLCanvasElement)

twoPi = 2.0 * pi :: Number

speed = 4.0 :: Number

runThree
  :: { threeStuff :: ThreeStuff
     , debug :: Boolean
     , cssRendererElt :: Event Web.DOM.Element
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
     , pushBasic :: EventIO HitBasicMe
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
    ( envy $ vbus
        ( Proxy
            :: _
                 ( V
                     ( hitBasicVisualForLabel :: HitBasicVisualForLabel
                     , hitLeapVisualForLabel :: HitLeapVisualForLabel
                     )
                 )
        )
        \scenePush sceneEvent -> globalCameraPortal1
          ( perspectiveCamera
              { fov: 75.0
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
            ( scene (bang $ P.background (CubeTexture (unwrap opts.cubeTextures).skybox))
                [ toScene $ group
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
                            oneOfMap bang
                              [ P.rotateX $ 0.001 * cos (fac * pi * 0.01)
                              , P.rotateY $ 0.001 * cos (fac * pi * 0.01)
                              , P.rotateZ $ 0.001 * cos (fac * pi * 0.01)
                              ]
                    )
                    ( ( filter (_ /= opts.myPlayer) (toArray allPlayers) <#> \player -> do
                          let ppos = playerPosition player
                          let posAx axis = map (ppos axis) mopts.playerPositions
                          toGroup $ mesh (sphere {} empty)
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
                          ( map toGroup
                              ( ( makeBar <<<
                                    { c3
                                    , renderingInfo: opts.renderingInfo
                                    , debug: opts.debug
                                    , rateE: mopts.rateInfo
                                    , position: _
                                    }
                                ) <$> (toArray allPositions)
                              )
                          )
                        <>
                          ( (toArray allPlayers) <#> \player -> do
                              let ppos = playerPosition player
                              let posAx axis = map (ppos axis) mopts.playerPositions
                              let normalDistance = 4.0
                              let normalDecay = 2.0
                              let normalIntensity = 1.0
                              toGroup $ pointLight
                                { distance: normalDistance
                                , decay: normalDecay
                                , intensity: normalIntensity
                                , color: c3 $ RGB 1.0 1.0 1.0
                                }
                                ( oneOf
                                    [ positionX <$> posAx AxisX
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
                          -- basic labels
                          [ toGroup $ basicLabels
                              { basicTap: sceneEvent.hitBasicVisualForLabel
                              , lpsCallback: opts.lowPriorityCb
                              }
                          ]
                        <>
                          -- leap labels
                          [ toGroup $ leapLabels
                              { leapTap: sceneEvent.hitLeapVisualForLabel
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
            \myScene ->
              fixed
                [ webGLRenderer
                    myScene
                    myCamera
                    { canvas: opts.canvas }
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
                        { canvas: opts.canvas, element }
                        ( oneOf
                            [ opts.resizeE <#> \i -> size { width: i.iw, height: i.ih }
                            , bang render
                            , (mopts.rateInfo $> render)
                            ]
                        )
                    )
                    opts.cssRendererElt
                ]
    )
  pure unit

module Joyride.Visual.Animation where

import Prelude

import BMS.Types (Column(..))
import Bolson.Core (Child(..), envy)
import Control.Alt ((<|>))
import Control.Plus (empty)
import Data.Foldable (oneOf, oneOfMap)
import Data.Int as Int
import Data.Number (pi)
import Effect (Effect)
import FRP.Behavior (Behavior, sample, sample_)
import FRP.Event (Event, bang, bus, keepLatest)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Rito.Cameras.PerspectiveCamera (defaultOrbitControls, perspectiveCamera)
import Rito.Color (RGB(..), color)
import Rito.Core (OrbitControls(..), toScene)
import Rito.Geometries.Box (box)
import Rito.Geometries.Sphere (sphere)
import Rito.Lights.PointLight (pointLight)
import Rito.Materials.MeshBasicMaterial (meshBasicMaterial)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.Mesh (mesh)
import Rito.Properties (aspect, color, onMouseDown, onTouchStart, target) as P
import Rito.Properties (positionX, positionY, positionZ, render, scaleX, scaleY, scaleZ, size)
import Rito.Renderers.WebGL (webGLRenderer)
import Rito.Run as Rito.Run
import Rito.Scene (scene)
import Rito.THREE (ThreeStuff)
import Rito.Vector3 (vector3)
import Types (AnimatedS, Player(..))
import WAGS.Core (dyn)
import Web.HTML.HTMLCanvasElement (HTMLCanvasElement)

twoPi = 2.0 * pi :: Number

speed = 4.0 :: Number

runThree
  :: { threeStuff :: ThreeStuff
     , isMobile :: Boolean
     , lowPriorityCb :: Number -> Effect Unit -> Effect Unit
     , myPlayer :: Player
     , maxColumns :: Int
     , player2XBehavior :: Behavior Number
     , resizeE :: Event { iw :: Number, ih :: Number }
     , animE :: Event AnimatedS
     , renderE :: Event Number
     , xPosB :: Behavior Number
     , initialDims :: { iw :: Number, ih :: Number }
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
                          [ positionX <$> sample_ opts.player2XBehavior opts.renderE
                          , bang (positionY (0.0))
                          , positionZ <$>
                              (map (negate >>> mul speed >>> add (-2.0)) opts.renderE)
                          , bang (scaleX 0.1)
                          , bang (scaleY 0.1)
                          , bang (scaleZ 0.1)
                          ]
                      )
                  ]
                Player2 -> []
            ) <>
              [
                -- bar 1
                toScene $ mesh (box {} empty)
                  ( meshStandardMaterial
                      { color: c3 $ RGB 1.0 1.0 1.0
                      }
                      empty
                  )
                  ( oneOf
                      [ bang (positionX 0.0)
                      , bang (positionY (-1.0))
                      , positionZ <$>
                          (map (negate >>> mul speed) opts.renderE)
                      , bang (scaleX 10.0)
                      , bang (scaleY 0.02)
                      , bang (scaleZ 0.03)
                      ]
                  )
              -- bar 2
              , toScene $ mesh (box {} empty)
                  ( meshStandardMaterial
                      { color: c3 $ RGB 1.0 1.0 1.0
                      }
                      empty
                  )
                  ( oneOf
                      [ bang (positionX 0.0)
                      , bang (positionY (-1.0))
                      , positionZ <$>
                          (map (negate >>> mul speed >>> add (-2.0)) opts.renderE)
                      , bang (scaleX 10.0)
                      , bang (scaleY 0.02)
                      , bang (scaleZ 0.03)
                      ]
                  )
              -- light
              , toScene $ pointLight { distance: 4.0, decay: 2.0, color: c3 $ RGB 1.0 1.0 1.0 }
                  ( oneOf
                      [ bang (positionX 0.0)
                      , bang (positionY 0.0)
                      , positionZ <$>
                          (map (negate >>> mul speed >>> add 0.1) opts.renderE)
                      ]
                  )
              -- notes
              , toScene $ dyn $
                  map
                    ( \itm -> case itm.column of
                        BGMColumn _ -> empty

                        PlayColumn x ->
                          let
                            xr = Int.toNumber x /
                              Int.toNumber opts.maxColumns
                          in
                            ( ( bang
                                  ( Insert
                                      $ envy
                                      $ bus \setCol col -> mesh
                                          (box {} empty)
                                          ( meshStandardMaterial
                                              { color: c3 $ RGB 1.0 1.0 1.0 }
                                              (col <#> P.color)
                                          )
                                          ( keepLatest $ (bang opts.initialDims <|> opts.resizeE) <#> \i ->
                                              let
                                                ratio = i.iw / i.ih
                                              in
                                                oneOfMap bang
                                                  [ positionX
                                                      ( (xr - 0.5) * 2.0 * ratio
                                                      )
                                                  , positionY (-1.0)
                                                  , positionZ
                                                      (-1.0 * speed * itm.time - 0.25)
                                                  , scaleX (0.5 * ratio)
                                                  , scaleY 0.04
                                                  , scaleZ 0.4
                                                  , if opts.isMobile then P.onTouchStart \_ -> setCol
                                                      $ c3 (RGB 0.1 0.8 0.6)
                                                    else P.onMouseDown \_ -> setCol
                                                      $ c3 (RGB 0.1 0.8 0.6)
                                                  ]
                                          )
                                  )
                              )
                                <|>
                                  ( lowPrioritySchedule opts.lowPriorityCb
                                      (itm.startsAt + 1000.0)
                                      (bang Remove)
                                  )
                            )
                    )
                    opts.animE
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
                [ positionX <$> sample_ opts.xPosB opts.renderE
                , bang (positionY 0.0)
                , positionZ <$>
                    ( map
                        ( negate >>> mul speed >>> add
                            ( case opts.myPlayer of
                                Player1 -> 2.0
                                Player2 -> 0.0
                            )
                        )
                        opts.renderE
                    )
                , sample opts.xPosB ({ t: _, xp: _ } <$> opts.renderE) <#> \{ t, xp } -> P.target $ v33
                    { x: xp, y: 0.0, z: t * -1.0 * speed - 2.0 }
                , opts.resizeE <#> \i -> P.aspect (i.iw / i.ih)
                ]
            )
        )
        { canvas: opts.canvas }
        ( oneOf
            [ bang (size { width: opts.initialDims.iw, height: opts.initialDims.ih })
            , bang render
            , opts.renderE $> render
            , opts.resizeE <#> \i -> size { width: i.iw, height: i.ih }
            ]
        )
    )
  pure unit

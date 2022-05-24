module Joyride.Visual.Animation where

import Prelude

import Bolson.Core (Child(..))
import Control.Alt ((<|>))
import Control.Plus (empty)
import Data.Foldable (oneOf)
import Data.Newtype (unwrap)
import Data.Number (pi)
import Effect (Effect)
import FRP.Behavior (Behavior, sample, sample_)
import FRP.Event (Event, bang)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.Model (Note(..))
import Joyride.Visual.Bar (makeBar)
import Rito.Cameras.PerspectiveCamera (defaultOrbitControls, perspectiveCamera)
import Rito.Color (RGB(..), color)
import Rito.Core (OrbitControls(..), toScene)
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
import Types (Player(..), allPlayers)
import WAGS.Core (dyn)
import Web.HTML.HTMLCanvasElement (HTMLCanvasElement)

twoPi = 2.0 * pi :: Number

speed = 4.0 :: Number

runThree
  :: { threeStuff :: ThreeStuff
     , isMobile :: Boolean
     , lowPriorityCb :: Number -> Effect Unit -> Effect Unit
     , myPlayer :: Player
     , player2XBehavior :: Behavior Number
     , resizeE :: Event { iw :: Number, ih :: Number }
     , animE :: Event Note
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
                _ -> []
            )
              <>
                ( ( makeBar <<<
                      { c3
                      , renderE: opts.renderE
                      , speed
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
                        , positionZ <$>
                            (map (negate >>> mul speed >>> add 0.1) opts.renderE)
                        ]
                    )
                -- notes
                , toScene $ dyn $
                    map
                      ( \itm -> case itm of
                          Basic x ->
                            ( (bang (Insert $ x.event unit))
                                <|>
                                  ( lowPrioritySchedule opts.lowPriorityCb
                                      -- todo: is this too much? not enough?
                                      (unwrap x.scheduledAt + 6000.0)
                                      (bang Remove)
                                  )
                            )
                          _ -> empty
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
                                _ -> 0.0
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

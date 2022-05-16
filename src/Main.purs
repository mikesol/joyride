module Main where

import Prelude

import Control.Alt ((<|>))
import Control.Plus (empty)
import Data.Foldable (oneOf, oneOfMap, traverse_)
import Data.Int as Int
import Deku.Attribute ((:=))
import Deku.DOM as D
import Deku.Toplevel (runInBodyA)
import Effect (Effect)
import Effect.Class (liftEffect)
import FRP.Event (bang)
import Rito.Cameras.PerspectiveCamera (defaultOrbitControls, perspectiveCamera)
import Rito.Color (RGB(..))
import Rito.Core (OrbitControls(..), toScene)
import Rito.Geometries.Sphere (sphere)
import Rito.Materials.MeshBasicMaterial (meshBasicMaterial)
import Rito.Mesh (mesh)
import Rito.Properties (positionX, positionY, positionZ, render, size)
import Rito.Renderers.WebGL (webGLRenderer)
import Rito.Run as Rito.Run
import Rito.Scene (scene)
import Web.HTML (window)
import Web.HTML.HTMLCanvasElement as HTMLCanvasElement
import Web.HTML.Window (innerHeight, innerWidth)

runThree
  :: { w :: Number, h :: Number }
  -> HTMLCanvasElement.HTMLCanvasElement
  -> Effect Unit
runThree wh canvas = do
  _ <- Rito.Run.run
    ( webGLRenderer
        ( scene empty
            [ toScene $ mesh
                ( sphere
                    { widthSegments: 32
                    , heightSegments: 32
                    }
                    empty
                )
                ( meshBasicMaterial
                    { color: RGB 1.0 1.0 1.0
                    }
                    empty
                )
                empty
            ]
        )

        ( perspectiveCamera
            { fov: 75.0
            , aspect: wh.w / wh.h
            , near: 0.1
            , far: 100.0
            , orbitControls: OrbitControls (defaultOrbitControls canvas)
            }
            ( oneOf
                [ bang (positionX 0.0)
                , bang (positionY 0.0)
                , bang (positionZ 2.0)
                ]
            )
        )
        { canvas }
        ( bang (size { width: wh.w, height: wh.h }) <|> bang render
        )
    )
  pure unit

main :: Effect Unit
main = do
  w <- liftEffect $ window
  iw <- liftEffect $ Int.toNumber <$> innerWidth w
  ih <- liftEffect $ Int.toNumber <$> innerHeight w
  runInBodyA
    [ D.canvas
        ( oneOfMap bang
            [ D.Class := "h-screen w-screen"
            , D.Self := HTMLCanvasElement.fromElement >>>
                traverse_
                  ( runThree { w: iw, h: ih })
            ]
        )
        []
    ]

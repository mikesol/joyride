module Joyride.Visual.Bar where

import Prelude

import Control.Plus (empty)
import Data.Foldable (oneOf)
import FRP.Event (bang)
import Rito.Color (Color, RGB(..))
import Rito.Core (ASceneful, toScene)
import Rito.Geometries.Box (box)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.Mesh (mesh)
import Rito.Properties (positionX, positionY, positionZ, scaleX, scaleY, scaleZ)
import Types (Player, RenderingInfo, playerZ)

makeBar
  :: forall lock payload
   . { c3 :: RGB -> Color
     , renderingInfo :: RenderingInfo
     , player :: Player
     }
  -> ASceneful lock payload
makeBar { c3, renderingInfo, player } = toScene $ mesh (box {} empty)
  ( meshStandardMaterial
      { color: c3 $ RGB 1.0 1.0 1.0
      }
      empty
  )
  ( oneOf
      [ bang (positionX 0.0)
      , bang (positionY (-1.0))
      , bang (positionZ (playerZ renderingInfo player))
      , bang (scaleX 10.0)
      , bang (scaleY 0.02)
      , bang (scaleZ 0.03)
      ]
  )
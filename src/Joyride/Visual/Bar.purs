module Joyride.Visual.Bar where

import Prelude

import Control.Plus (empty)
import Data.Foldable (oneOf)
import FRP.Event (Event, bang)
import Rito.Color (Color, RGB(..))
import Rito.Core (ASceneful, toScene)
import Rito.Geometries.Box (box)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.Mesh (mesh)
import Rito.Properties (positionX, positionY, positionZ, scaleX, scaleY, scaleZ)
import Types (Player(..))

playerToBarOffset :: Player -> Number
playerToBarOffset Player1 = -6.0
playerToBarOffset Player2 = -4.0
playerToBarOffset Player3 = -2.0
playerToBarOffset Player4 = 0.0

makeBar
  :: forall lock payload
   . { c3 :: RGB -> Color
     , renderE :: Event Number
     , speed :: Number
     , player :: Player
     }
  -> ASceneful lock payload
makeBar { c3, renderE, speed, player } = toScene $ mesh (box {} empty)
  ( meshStandardMaterial
      { color: c3 $ RGB 1.0 1.0 1.0
      }
      empty
  )
  ( oneOf
      [ bang (positionX 0.0)
      , bang (positionY (-1.0))
      , positionZ <$>
          (map (negate >>> mul speed >>> add (playerToBarOffset player)) renderE)
      , bang (scaleX 10.0)
      , bang (scaleY 0.02)
      , bang (scaleZ 0.03)
      ]
  )
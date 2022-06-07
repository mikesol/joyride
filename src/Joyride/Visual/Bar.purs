module Joyride.Visual.Bar where

import Prelude

import Control.Alt ((<|>))
import Control.Plus (empty)
import Data.Foldable (oneOf)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (Event, bang)
import Joyride.Debug (debugX)
import Joyride.FRP.Schedule (fireAndForget)
import Rito.Color (Color, RGB(..))
import Rito.Core (ASceneful, toScene)
import Rito.Geometries.Box (box)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.Mesh (mesh)
import Rito.Properties (positionX, positionY, positionZ, scaleX, scaleY, scaleZ)
import Types (Position, RenderingInfo, RateInfo, touchPointZ)

makeBar
  :: forall lock payload
   . { c3 :: RGB -> Color
     , renderingInfo :: Behavior RenderingInfo
     , position :: Position
     , debug :: Boolean
     , rateE :: Event RateInfo
     }
  -> ASceneful lock payload
makeBar { c3, renderingInfo, position, debug, rateE } = toScene $ mesh (box {} empty)
  ( meshStandardMaterial
      { color: c3 $ RGB 1.0 1.0 1.0
      }
      empty
  )
  ( oneOf
      [ bang (positionX 0.0)
      , bang (positionY 0.0)
      , sampleBy (\ri _ -> positionZ (touchPointZ ri position)) renderingInfo (debugX debug rateE)
      , initializeWith scaleX 10.0
      , initializeWith scaleY 0.02
      , initializeWith scaleZ 0.03
      ]
  )
  where
  initializeWith f x = bang (f 0.0) <|> fireAndForget (rateE $> f x)
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
import Rito.Properties as P
import Types (Position, RateInfo, RenderingInfo, ThreeDI, touchPointZ)

makeBar
  :: forall lock payload
   . { c3 :: RGB -> Color
     , renderingInfo :: Behavior RenderingInfo
     , position :: Position
     , threeDI :: ThreeDI
     , initialIsMe :: Boolean
     , isMe :: Event Boolean
     , debug :: Boolean
     , rateE :: Event RateInfo
     }
  -> ASceneful lock payload
makeBar { c3, threeDI, renderingInfo, initialIsMe, isMe, position, debug, rateE } = toScene $ mesh { mesh: threeDI.mesh } (box { box: threeDI.boxGeometry })
  ( meshStandardMaterial
      { meshStandardMaterial: threeDI.meshStandardMaterial
      , color: makeColor initialIsMe
      }
      (isMe <#> \i -> (P.color $ makeColor i))
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
  makeColor tf = c3 $ if tf then RGB 0.3 0.9 0.2 else RGB 1.0 1.0 1.0
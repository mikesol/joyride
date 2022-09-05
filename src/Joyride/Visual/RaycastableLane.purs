module Joyride.Visual.RaycastableLane
  ( makeRaycastableLane
  ) where

import Prelude

import Control.Alt ((<|>))
import Control.Plus (empty)
import Data.Foldable (oneOf)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (Event, sampleOn)
import Joyride.Debug (debugX)
import Joyride.FRP.Schedule (fireAndForget)
import Rito.Color (Color, RGB(..))
import Rito.Core (ASceneful, toScene)
import Rito.Geometries.Box (box)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.Mesh (mesh)
import Rito.Properties (positionX, positionY, positionZ, scaleX, scaleY, scaleZ)
import Rito.Properties as P
import Types (Column, Position, RateInfo, RenderingInfo, ThreeDI, WindowDims, PlayerPositions, normalizedColumn, touchPointZ)

makeRaycastableLane
  :: forall lock payload
   . { initialDims :: WindowDims
     , resizeEvent :: Event WindowDims
     , c3 :: RGB -> Color
     , renderingInfo :: Behavior RenderingInfo
     , position :: Position
     , threeDI :: ThreeDI
     , rateInfo :: Event RateInfo
     , debug :: Boolean
     , rateE :: Event RateInfo
     , column :: Column
     }
  -> ASceneful lock payload
makeRaycastableLane input = toScene $ mesh { mesh: input.threeDI.mesh } (box { box: input.threeDI.boxGeometry })
  ( meshStandardMaterial
      { meshStandardMaterial: input.threeDI.meshStandardMaterial
      , color: makeColor
      }
      empty
  )
  ( oneOf
      [ n14 <#> positionX
      , pure (positionY 0.0)
      , pure (positionZ 0.0)
      , initializeWith scaleX 1.0
      , initializeWith scaleY 1.0
      , initializeWith scaleZ 1.0
      ]
  )
  where
  initializeWith f x = pure (f 0.0) <|> fireAndForget (input.rateE $> f x)
  makeColor = input.c3 (RGB 0.3 0.9 0.2)
  ratioEvent = map (\{ iw, ih } -> { iw, ih, r: iw / ih }) (pure input.initialDims <|> input.resizeEvent)
  rateInfo = input.rateInfo
  forRendering =  sampleBy (#) input.renderingInfo (sampleOn ratioEvent
    ( map
        { rateInfo: _
        , ratio: _
        , renderingInfo: _
        }
        rateInfo
    ))
  n14 = forRendering <#>
    \{ ratio
     , renderingInfo
     } -> (renderingInfo.halfAmbitus * (2.0 * (normalizedColumn input.column) - 1.0)) * ratio.r
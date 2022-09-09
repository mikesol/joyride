module Joyride.Visual.Bar where

import Prelude

import Control.Alt ((<|>))
import Data.Foldable (oneOf)
import Data.Newtype (unwrap, wrap)
import Data.Number (pi, sin)
import Data.Tuple (Tuple(..))
import Data.Variant (inj)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (Event)
import Joyride.Constants.Visual (bar1Color, bar2Color, bar3Color, bar4Color)
import Joyride.Debug (debugX)
import Joyride.FRP.Dedup (dedup')
import Joyride.FRP.Schedule (fireAndForget)
import Rito.Color (Color, RGB(..))
import Rito.Core (ASceneful, toScene)
import Rito.Geometries.Box (box)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.Mesh (mesh)
import Rito.Properties (positionX, positionY, positionZ, scaleX, scaleY, scaleZ)
import Type.Proxy (Proxy(..))
import Types (Position(..), RateInfo, RenderingInfo, ThreeDI, touchPointZ)

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
makeBar { c3, threeDI, renderingInfo, isMe, position, debug, rateE } = toScene $ mesh { mesh: threeDI.mesh } (box { box: threeDI.boxGeometry })
  ( meshStandardMaterial
      { meshStandardMaterial: threeDI.meshStandardMaterial
      , color: makeColor position
      }
      ( oneOf
          [ (Tuple <$> rateE <*> (dedup' (\a b -> a == false && b == a) isMe)) <#> \(Tuple re i) -> (wrap $ inj (Proxy :: _ "emissive") $ c3 if i then let s = sin (unwrap (re.beats) * pi * 0.7) * 0.07 + 0.07 in RGB s s s else RGB 0.0 0.0 0.0)
         -- , isMe <#> \i -> (wrap $ inj (Proxy :: _ "emissiveIntensity") if i then 0.2 else 0.2)
          ]
      )
  )
  ( oneOf
      [ pure (positionX 0.0)
      , pure (positionY 0.0)
      , sampleBy (\ri _ -> positionZ (touchPointZ ri position)) renderingInfo (debugX debug rateE)
      , initializeWith scaleX 10.0
      , initializeWith scaleY 0.02
      , initializeWith scaleZ 0.03
      ]
  )
  where
  initializeWith f x = pure (f 0.0) <|> fireAndForget (rateE $> f x)
  makeColor = c3 <<< case _ of
    Position1 -> bar1Color
    Position2 -> bar2Color
    Position3 -> bar3Color
    Position4 -> bar4Color
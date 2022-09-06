module Joyride.Visual.RaycastableLane
  ( makeRaycastableLane
  ) where

import Prelude

import Control.Alt ((<|>))
import Control.Plus (empty)
import Data.Foldable (oneOf)
import Data.Profunctor (dimap)
import Effect (Effect)
import Effect.Console (log)
import FRP.Behavior (Behavior, sampleBy)
import FRP.Event (Event, sampleOn)
import Joyride.FRP.Schedule (fireAndForget)
import Rito.Color (Color, RGB(..))
import Rito.Core (ASceneful, toScene)
import Rito.Geometries.Box (box)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.Mesh (mesh)
import Rito.Properties (positionX, positionY, positionZ, scaleX, scaleY, scaleZ)
import Rito.Properties as P
import Types (Column, RateInfo, RenderingInfo, ThreeDI, WindowDims, normalizedColumn)
import Web.TouchEvent.Touch as Touch
import Web.UIEvent.MouseEvent as MouseEvent

makeRaycastableLane
  :: forall lock payload
   . { initialDims :: WindowDims
     , resizeEvent :: Event WindowDims
     , c3 :: RGB -> Color
     , columnPusher :: Effect Unit
     , renderingInfo :: Behavior RenderingInfo
     , threeDI :: ThreeDI
     , isMobile :: Boolean
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
      , visible: false -- comment out to see the raycastable lanes
      }
      empty
  )
  ( oneOf
      [ n14 <#> positionX
      , pure (positionY 0.0)
      , pure (positionZ (-1.5))
      , pure (scaleX 0.0) <|> (n11 <#> scaleX)
      , initializeWith scaleY 0.1 -- biiiig
      , initializeWith scaleZ 5.0 -- biiiig
      , let
          f = pure \i -> do
            log ("position: " <> show i <> " column: " <> show input.column)
            input.columnPusher
            pure (pure unit)
        in
          if input.isMobile then P.onTouchStart <$> map
            ( dimap
                ( \e ->
                    { cx: Touch.clientX e
                    , cy: Touch.clientY e
                    }
                )
                (map \i -> { end: \_ -> i, cancel: \_ -> i })
            )
            f
          else P.onMouseDown <$> map
            ( dimap
                ( \e ->
                    { cx: MouseEvent.clientX e
                    , cy: MouseEvent.clientY e
                    }
                )
                (map const)
            )
            f
      ]
  )
  where
  initializeWith f x = pure (f 0.0) <|> fireAndForget (input.rateE $> f x)
  makeColor = input.c3 (RGB 0.5 0.5 0.5)
  ratioEvent = map (\{ iw, ih } -> { iw, ih, r: iw / ih }) (pure input.initialDims <|> input.resizeEvent)
  rateInfo = input.rateInfo
  forRendering = sampleBy (#) input.renderingInfo
    ( sampleOn ratioEvent
        ( map
            { rateInfo: _
            , ratio: _
            , renderingInfo: _
            }
            rateInfo
        )
    )
  n14 = forRendering <#>
    \{ ratio
     , renderingInfo
     } -> (renderingInfo.halfAmbitus * (2.0 * (normalizedColumn input.column) - 1.0)) * ratio.r
  n11 = forRendering <#>
    \{ ratio
     , renderingInfo
     } -> renderingInfo.halfAmbitus * ratio.r / 9.0 -- for now, this seems wide enough
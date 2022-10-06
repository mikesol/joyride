module Joyride.Visual.Animation.TutorialJS where

import Prelude

import Effect (Effect)
import FRP.Behavior (Behavior)
import FRP.Event (Event, EventIO)
import Rito.Color (Color, RGB)
import Rito.Core (ASceneful)
import Rito.CubeTexture (CubeTexture)
import Rito.GLTF (GLTF)
import Rito.Matrix4 (Matrix4', Matrix4)
import Rito.Texture (Texture)
import Types (Column, CubeTextures, GalaxyAttributes, HitBasicMe, HitBasicVisualForLabel, HitLeapVisualForLabel, HitLongVisualForLabel, JMilliseconds, Models, Player, PlayerPositions, Position, RateInfo, ReleaseLongVisualForLabel, RenderingInfo, Shaders, Textures, ThreeDI, WindowDims)
import Web.DOM as Web.DOM
import Web.HTML.HTMLCanvasElement (HTMLCanvasElement)

foreign import runThree
  :: { threeDI :: ThreeDI
     , debug :: Boolean
     , pressedStart :: Event Boolean
     , galaxyAttributes :: GalaxyAttributes
     , shaders :: Shaders
     , mkColor :: RGB -> Color
     , mkMatrix4 :: Matrix4' -> Matrix4
     , columnPusher :: EventIO Column
     , css2DRendererElt :: Event Web.DOM.Element
     , css3DRendererElt :: Event Web.DOM.Element
     , isMobile :: Boolean
     , lowPriorityCb :: JMilliseconds -> Effect Unit -> Effect Unit
     , myPlayer :: Player
     , textures :: Textures Texture
     , models :: Models GLTF
     , cubeTextures :: CubeTextures CubeTexture
     , renderingInfo :: Behavior RenderingInfo
     , animatedStuff ::
         Event
           { rateInfo :: RateInfo
           , playerPositions :: PlayerPositions
           }
     , resizeE :: Event WindowDims
     , basicE ::
         (HitBasicVisualForLabel -> Effect Unit)
         -> (Column -> Event Unit)
         -> forall lock payload
          . ASceneful lock payload
     , leapE ::
         (HitLeapVisualForLabel -> Effect Unit)
         -> (Column -> Event Unit)
         -> forall lock payload
          . ASceneful lock payload
     , longE ::
         (HitLongVisualForLabel -> Effect Unit)
         -> (ReleaseLongVisualForLabel -> Effect Unit)
         -> (Column -> Event Unit)
         -> forall lock payload
          . ASceneful lock payload
     , pushBasic :: EventIO HitBasicMe
     , initialDims :: WindowDims
     , canvas :: HTMLCanvasElement
     -- for JS
     , allColumns :: Array Column
     , allPlayers :: Array Player
     , allPositions :: Array Position
     , columnPatternMatch ::
         forall a
          . { c1 :: a
            , c2 :: a
            , c3 :: a
            , c4 :: a
            , c5 :: a
            , c6 :: a
            , c7 :: a
            , c8 :: a
            , c9 :: a
            , c10 :: a
            , c11 :: a
            , c12 :: a
            , c13 :: a
            , c14 :: a
            , c15 :: a
            , c16 :: a
            , c17 :: a
            }
         -> Column
         -> a
     , playerPatternMatch ::
         forall a
          . { player1 :: a
            , player2 :: a
            , player3 :: a
            , player4 :: a
            }
         -> Player
         -> a
     , positionPatternMatch ::
         forall a
          . { position1 :: a
            , position2 :: a
            , position3 :: a
            , position4 :: a
            }
         -> Position
         -> a
     }
  -> Effect Unit
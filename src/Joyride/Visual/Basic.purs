module Joyride.Visual.Basic where

import Prelude

import Control.Alt ((<|>))
import Control.Plus (empty)
import Data.FastVect.FastVect (Vect)
import Data.Foldable (oneOfMap, traverse_)
import Data.List as List
import Data.Time.Duration (Seconds(..))
import Effect (Effect)
import FRP.Event (Event, bus, keepLatest)
import FRP.Event.Class (bang)
import Joyride.FRP.Rider (rider, toRide)
import Joyride.FRP.Schedule (schedule)
import Joyride.Wags (AudibleEnd)
import Rito.Color (Color, RGB(..))
import Rito.Core (AMesh)
import Rito.Geometries.Box (box)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.Mesh (mesh)
import Rito.Properties as P
import Types (WindowDims)
import WAGS.Core (envy)

basic
  :: forall r lock payload
   . Vect 4 { startsAt :: Seconds, audio :: AudibleEnd }
  -> { initialDims :: WindowDims
     , isMobile :: Boolean
     , mkColor :: RGB -> Color
     , resizeE :: Event WindowDims
     , speed :: Number
     , startsAt :: Number
     , xr :: Number
     , pushAudio :: { startsAt :: Seconds, audio :: AudibleEnd} -> Effect Unit
     , animationE :: Event Seconds
     | r
     }
  -> AMesh lock payload
basic v4 { mkColor, initialDims, resizeE, xr, speed, startsAt, isMobile, animationE, pushAudio } = envy
  $ keepLatest
  $ bus \setCol col -> rider
      ( toRide
          { event: schedule
              _.startsAt
              (List.fromFoldable v4)
              (animationE <#> \time -> { time, lookAhead: Seconds 0.1  })
          , push: traverse_ pushAudio
          }
      )
      ( bang
          ( ( mesh
                (box {} empty)
                ( meshStandardMaterial
                    { color: mkColor $ RGB 1.0 1.0 1.0 }
                    (P.color <$> col)
                )
                ( keepLatest $ (bang initialDims <|> resizeE) <#> \i ->
                    let
                      ratio = i.iw / i.ih
                    in
                      oneOfMap bang
                        [ P.positionX
                            ( (xr - 0.5) * 2.0 * ratio
                            )
                        , P.positionY (-1.0)
                        , P.positionZ
                            (-1.0 * speed * startsAt - 0.25)
                        , P.scaleX (0.5 * ratio)
                        , P.scaleY 0.04
                        , P.scaleZ 0.4
                        , if isMobile then P.onTouchStart \_ -> setCol
                            $ mkColor (RGB 0.1 0.8 0.6)
                          else P.onMouseDown \_ -> setCol
                            $ mkColor (RGB 0.1 0.8 0.6)
                        ]
                )
            )
          )
      )

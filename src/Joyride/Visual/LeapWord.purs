module Joyride.Visual.LeapWord where

import Prelude

import Control.Alt ((<|>))
import Data.Foldable (oneOf)
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Number (pi)
import Data.Time.Duration (Milliseconds(..))
import Deku.Attribute ((:=))
import Deku.Control (text_)
import Deku.Core (ANut(..), envy)
import Deku.DOM as D
import FRP.Behavior (sampleBy, sample_)
import FRP.Event (memoize, sampleOn)
import FRP.Event.Class (bang)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Timing.CoordinatedNow (cInstant)
import Ocarina.Math (calcSlope)
import Rito.CSS.CSS3DObject (css3DObject)
import Rito.Core (ACSS3DObject)
import Rito.Properties as P
import Safe.Coerce (coerce)
import Types (JMilliseconds(..), MakeLeapWord, Position(..), entryZ, normalizedColumn, touchPointZ)

leapWord
  :: forall r lock payload
   . { | MakeLeapWord r }
  -> ACSS3DObject lock payload
leapWord makeLeap = do
  let
    played = makeLeap.someonePlayedMe
    forRendering = sampleBy (#) makeLeap.renderingInfo
      ( sampleOn (bang Nothing <|> fireAndForget (sample_ ((coerce :: Milliseconds -> JMilliseconds) >>> Just <$> cInstant makeLeap.cnow) played))
          ( sampleOn ratioEvent
              ( map
                  { rateInfo: _
                  , ratio: _
                  , endTime: _
                  , renderingInfo: _
                  }
                  animatedStuff.rateInfo
              )
          )
      )
    drawingMatrix' = forRendering <#>
      \{ rateInfo
       , ratio
       , renderingInfo
       } ->
        { n14: ((renderingInfo.halfAmbitus * (2.0 * (normalizedColumn makeLeap.column) - 1.0)) * ratio.r)
        , n24: 0.0
        , n34:
            let
              -- for now, hardcode 1 beat after the appearance point
              -- if too fast, slow down?
              o = calcSlope (unwrap makeLeap.appearsAt) (appearancePoint renderingInfo) (unwrap makeLeap.appearsAt + 1.0) (p1bar renderingInfo) (unwrap rateInfo.beats)
            in
              o - (leapZThickness / 2.0)
        , n11: 0.01
        , n22: 0.01
        , n33: 0.01
        , n12: 0.0
        , n13: 0.0
        , n21: 0.0
        , n23: 0.0
        , n31: 0.0
        , n32: 0.0
        , n41: 0.0
        , n42: 0.0
        , n43: 0.0
        , n44: 1.0
        }
  envy $ memoize drawingMatrix' \drawingMatrix ->
    ( ( css3DObject
          { css3DObject: makeLeap.threeDI.css3DObject
          , nut: ANut (D.span (bang $ D.Class := "text-white pointer-events-none") [ text_ makeLeap.text ])
          }
          ( oneOf
              [ --bang $ P.matrix4 $ makeBasic.mkMatrix4 emptyMatrix
                --, P.matrix4 <<< makeBasic.mkMatrix4 <$> drawingMatrix
                P.positionX <<< _.n14 <$> drawingMatrix
              , bang $ P.positionY 0.05
              , P.positionZ <<< _.n34 <$> drawingMatrix
              , (bang $ P.scaleX 0.00) <|> fireAndForget (drawingMatrix $> P.scaleX 0.006)
              , (bang $ P.scaleY 0.00) <|> fireAndForget (drawingMatrix $> P.scaleY 0.006)
              , (bang $ P.scaleZ 0.00) <|> fireAndForget (drawingMatrix $> P.scaleZ 0.006)
              , bang $ P.rotateX (pi * -0.5)
              ]
          )
      )
    )
  where
  animatedStuff =
    { rateInfo: _.rateInfo <$> makeLeap.animatedStuff
    , playerPositions: _.playerPositions <$> makeLeap.animatedStuff
    }
  p1bar ri = touchPointZ ri Position1
  appearancePoint ri = entryZ ri
  ratioEvent = map (\{ iw, ih } -> { iw, ih, r: iw / ih }) (bang makeLeap.initialDims <|> makeLeap.resizeEvent)
  leapZThickness = 0.2

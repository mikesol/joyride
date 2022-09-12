module Joyride.Visual.BasicWord where

-- copy pasta from basic
-- merge lots of this stuff eventually

import Prelude

import Bolson.Core (envy)
import Control.Alt ((<|>))
import Data.FastVect.FastVect (index)
import Data.Foldable (oneOf)
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Number (pi)
import Data.Time.Duration (Milliseconds(..))
import Data.Tuple (fst, snd)
import Data.Tuple.Nested (type (/\), (/\))
import Deku.Attribute ((:=))
import Deku.Attributes (klass_)
import Deku.Control (text)
import Deku.Core (ANut(..))
import Deku.DOM as D
import FRP.Behavior (sampleBy, sample_)
import FRP.Event (Event, memoize, sampleOn)
import Joyride.FRP.Dedup (dedup)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Timing.CoordinatedNow (cInstant)
import Ocarina.Math (calcSlope)
import Rito.CSS.CSS3DObject (css3DObject)
import Rito.Core (ACSS3DObject)
import Rito.Matrix4 (Matrix4')
import Rito.Properties as P
import Safe.Coerce (coerce)
import Type.Proxy (Proxy(..))
import Types (Beats, JMilliseconds(..), MakeBasicWord, Position(..), RateInfo, RenderingInfo, entryZ, normalizedColumn, touchPointZ)

basicWord
  :: forall r lock payload
   . { | MakeBasicWord r }
  -> ACSS3DObject lock payload
basicWord makeBasic = do
  let
    played :: Event Beats
    played = oneOf
      [ map (unwrap >>> _.logicalBeat) makeBasic.someonePlayedMe
      ]

    -- all the info we need for rendering
    forRendering
      :: Event
           { rateInfo :: RateInfo
           , ratio :: { ih :: Number, iw :: Number, r :: Number }
           , endTime :: Maybe JMilliseconds
           , renderingInfo :: RenderingInfo
           }
    forRendering = sampleBy (#) makeBasic.renderingInfo
      ( sampleOn (pure Nothing <|> fireAndForget (sample_ (coerce >>> Just <$> cInstant makeBasic.cnow) played))
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

    -- the matrix we'll need to draw a tile
    drawingMatrix' :: Event (String /\ Matrix4')
    drawingMatrix' = forRendering <#>
      \{ rateInfo
       , ratio
       , renderingInfo
       } -> do
        let
          o
            | rateInfo.beats < p1.startsAt = index (Proxy :: _ 0) makeBasic.text /\ calcSlope (unwrap makeBasic.myInfo.appearsAt) (appearancePoint renderingInfo) (unwrap p1.startsAt) (p1bar renderingInfo) (unwrap rateInfo.beats)
            | rateInfo.beats < p2.startsAt = index (Proxy :: _ 1) makeBasic.text /\ calcSlope (unwrap p1.startsAt) (p1bar renderingInfo) (unwrap p2.startsAt) (p2bar renderingInfo) (unwrap rateInfo.beats)
            | rateInfo.beats < p3.startsAt = index (Proxy :: _ 2) makeBasic.text /\ calcSlope (unwrap p2.startsAt) (p2bar renderingInfo) (unwrap p3.startsAt) (p3bar renderingInfo) (unwrap rateInfo.beats)
            | rateInfo.beats < p4.startsAt = index (Proxy :: _ 3) makeBasic.text /\ calcSlope (unwrap p3.startsAt) (p3bar renderingInfo) (unwrap p4.startsAt) (p4bar renderingInfo) (unwrap rateInfo.beats)
            | otherwise = index (Proxy :: _ 3) makeBasic.text /\ calcSlope (unwrap p4.startsAt) (p4bar renderingInfo) (unwrap p4.startsAt + 0.2) (p4bar renderingInfo + 0.5) (unwrap rateInfo.beats)
        fst o /\
          { n14: ((renderingInfo.halfAmbitus * (2.0 * (normalizedColumn makeBasic.myInfo.column) - 1.0)) * ratio.r)
          , n24: 0.0
          , n34: snd o - (basicZThickness / 2.0)
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
  envy $ memoize drawingMatrix' \drawingMatrixAndText ->
    let
      drawingMatrix = snd <$> drawingMatrixAndText
      txt = fst <$> drawingMatrixAndText
    in
      ( ( css3DObject
            { css3DObject: makeBasic.threeDI.css3DObject
            , nut: ANut (D.span (klass_ "text-white pointer-events-none") [ text (dedup (txt)) ])
            }
            ( oneOf
                [ --pure $ P.matrix4 $ makeBasic.mkMatrix4 emptyMatrix
                  --, P.matrix4 <<< makeBasic.mkMatrix4 <$> drawingMatrix
                  P.positionX <<< _.n14 <$> drawingMatrix
                , pure $ P.positionY 0.05
                , P.positionZ <<< _.n34 <$> drawingMatrix
                , (pure $ P.scaleX 0.00) <|> fireAndForget (drawingMatrix $> P.scaleX 0.006)
                , (pure $ P.scaleY 0.00) <|> fireAndForget (drawingMatrix $> P.scaleY 0.006)
                , (pure $ P.scaleZ 0.00) <|> fireAndForget (drawingMatrix $> P.scaleZ 0.006)
                , pure $ P.rotateX (pi * -0.5)
                ]
            )
        )
      )
  where
  animatedStuff =
    { rateInfo: _.rateInfo <$> makeBasic.animatedStuff
    , playerPositions: _.playerPositions <$> makeBasic.animatedStuff
    }
  p1 = index (Proxy :: _ 0) makeBasic.myInfo.beats
  p2 = index (Proxy :: _ 1) makeBasic.myInfo.beats
  p3 = index (Proxy :: _ 2) makeBasic.myInfo.beats
  p4 = index (Proxy :: _ 3) makeBasic.myInfo.beats
  p1bar ri = touchPointZ ri Position1
  p2bar ri = touchPointZ ri Position2
  p3bar ri = touchPointZ ri Position3
  p4bar ri = touchPointZ ri Position4
  appearancePoint ri = entryZ ri
  ratioEvent = map (\{ iw, ih } -> { iw, ih, r: iw / ih }) (pure makeBasic.initialDims <|> makeBasic.resizeEvent)
  basicZThickness = 0.2

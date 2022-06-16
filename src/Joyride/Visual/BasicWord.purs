module Joyride.Visual.BasicWord where

-- copy pasta from basic
-- merge lots of this stuff eventually

import Prelude

import Control.Alt ((<|>))
import Data.FastVect.FastVect (index)
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
import FRP.Event (Event, memoize, sampleOn)
import FRP.Event.Class (bang)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Timing.CoordinatedNow (cInstant)
import Joyride.Visual.EmptyMatrix (emptyMatrix)
import Rito.CSS.CSS3DObject (css3DObject)
import Rito.Core (ACSS3DObject)
import Rito.Matrix4 (Matrix4')
import Rito.Properties as P
import Safe.Coerce (coerce)
import Type.Proxy (Proxy(..))
import Types (Beats, JMilliseconds(..), MakeBasicWord, Position(..), RateInfo, RenderingInfo, entryZ, normalizedColumn, touchPointZ)
import WAGS.Math (calcSlope)

basicWord
  :: forall r lock payload
   . { | MakeBasicWord r }
  -> ACSS3DObject lock payload
basicWord makeBasic = do
  let
    -- this is the event that we listen to to know when to stop playing audio
    -- we stop _eitehr_ when we get an internal played _or_ when one is reported
    -- over the wire
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
      ( sampleOn (bang Nothing <|> fireAndForget (sample_ (coerce >>> Just <$> cInstant makeBasic.cnow) played))
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
    drawingMatrix' :: Event Matrix4'
    drawingMatrix' = forRendering <#>
      \{ rateInfo
       , ratio
       , endTime
       , renderingInfo
       } ->
        { n14: ((renderingInfo.halfAmbitus * (2.0 * (normalizedColumn makeBasic.column) - 1.0)) * ratio.r)
        , n24: 0.0
        , n34:
            let
              o
                | rateInfo.beats < p1.startsAt = calcSlope (unwrap makeBasic.appearsAt) (appearancePoint renderingInfo) (unwrap p1.startsAt) (p1bar renderingInfo) (unwrap rateInfo.beats)
                | rateInfo.beats < p2.startsAt = calcSlope (unwrap p1.startsAt) (p1bar renderingInfo) (unwrap p2.startsAt) (p2bar renderingInfo) (unwrap rateInfo.beats)
                | rateInfo.beats < p3.startsAt = calcSlope (unwrap p2.startsAt) (p2bar renderingInfo) (unwrap p3.startsAt) (p3bar renderingInfo) (unwrap rateInfo.beats)
                | otherwise = calcSlope (unwrap p3.startsAt) (p3bar renderingInfo) (unwrap p4.startsAt) (p4bar renderingInfo) (unwrap rateInfo.beats)
            -- __________ = spy "myri" (rateInfo.beats)
            in
              o - (basicZThickness / 2.0)
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
    ( ( css3DObject { nut: ANut (D.span (bang $ D.Class := "text-white pointer-events-none") [ text_ "foo" ]) }
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
              -- , let
              --     f = oneOf
              --       [ -- if I touched this, turn off the listener
              --         iWasPlayed $> (\_ -> pure (pure unit))
              --       ,
              --         -- if someone else has touched this, turn off the listener
              --         fireAndForget $ keepLatest $ hitBasicOtherPlayer <#> \(HitBasicOtherPlayer _) ->
              --             (bang (\_ -> pure (pure unit)))
              --       -- otherwise keep alive
              --       -- no need for an unsub, so just pure (pure unit)
              --       , sampleJIT makeBasic.animatedStuff $ bang \av _ -> pure (pure unit) <* launchAff_ do
              --           n <- liftEffect $ makeBasic.cnow
              --           { rateInfo, playerPositions } <- AVar.read av
              --           let
              --             pos = playerPosition' makeBasic.myPlayer playerPositions
              --             rightBeat = case pos of
              --               Position1 -> p1
              --               Position2 -> p2
              --               Position3 -> p3
              --               Position4 -> p4
              --           let
              --             broadcastInfo =
              --               { uniqueId: makeBasic.uniqueId
              --               , position: pos
              --               , hitAt: rateInfo.beats
              --               , issuedAt: coerce n
              --               , logicalBeat: rightBeat.startsAt
              --               , deltaBeats: rateInfo.beats - rightBeat.startsAt
              --               }
              --           let
              --             hitBasicMe = HitBasicMe
              --               { uniqueId: broadcastInfo.uniqueId
              --               , logicalBeat: broadcastInfo.logicalBeat
              --               , deltaBeats: broadcastInfo.deltaBeats
              --               , hitAt: broadcastInfo.hitAt
              --               , issuedAt: broadcastInfo.issuedAt
              --               }
              --           liftEffect $ setPlayed hitBasicMe
              --       ]
              --   in
              --     if makeBasic.isMobile then P.onTouchStart <$> map
              --       ( dimap
              --           ( \e ->
              --               { cx: Touch.clientX e
              --               , cy: Touch.clientY e
              --               }
              --           )
              --           (map \i -> { end: \_ -> i, cancel: \_ -> i })
              --       )
              --       f
              --     else P.onMouseDown <$> map
              --       ( dimap
              --           ( \e ->
              --               { cx: MouseEvent.clientX e
              --               , cy: MouseEvent.clientY e
              --               }
              --           )
              --           (map const)
              --       )
              --       f
              ]
          )
      )
    )
  where
  animatedStuff =
    { rateInfo: _.rateInfo <$> makeBasic.animatedStuff
    , playerPositions: _.playerPositions <$> makeBasic.animatedStuff
    }
  p1 = index (Proxy :: _ 0) makeBasic.beats
  p2 = index (Proxy :: _ 1) makeBasic.beats
  p3 = index (Proxy :: _ 2) makeBasic.beats
  p4 = index (Proxy :: _ 3) makeBasic.beats
  p1bar ri = touchPointZ ri Position1
  p2bar ri = touchPointZ ri Position2
  p3bar ri = touchPointZ ri Position3
  p4bar ri = touchPointZ ri Position4
  appearancePoint ri = entryZ ri
  oneEighth = 1.0 / 8.0
  ratioEvent = map (\{ iw, ih } -> { iw, ih, r: iw / ih }) (bang makeBasic.initialDims <|> makeBasic.resizeEvent)
  shrinkRate = 3.0
  basicYThickness = 0.04
  basicZThickness = 0.2
  shrinkMe endTime basicThickness ri = case endTime of
    Nothing -> basicThickness
    Just (JMilliseconds startTime) -> let (JMilliseconds currentTime) = ri.epochTime in max 0.0 (basicThickness - (basicThickness * shrinkRate * (currentTime - startTime) / 1000.0))

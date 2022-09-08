module Joyride.Visual.Leap where

import Prelude

import Control.Alt ((<|>))
import Data.DateTime.Instant (unInstant)
import Data.Either (Either(..))
import Data.Filterable (compact, filter)
import Data.Foldable (for_, oneOf)
import Data.Maybe (Maybe(..), isJust)
import Data.Newtype (unwrap)
import Data.Time.Duration (Milliseconds(..))
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)
import Effect.Console (log)
import FRP.Behavior (sampleBy, sample_)
import FRP.Event (Event, bus, keepLatest, memoize, sampleOn)
import FRP.Event.Time as LocalTime
import Joyride.Constants.Visual as Visual.Constants
import Joyride.FRP.Aff (eventToAff)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Rider (rider, toRide)
import Joyride.FRP.Schedule (fireAndForget)
import Joyride.Ocarina (AudibleChildEnd(..), AudibleEnd(..))
import Joyride.Timing.CoordinatedNow (cInstant)
import Joyride.Visual.EmptyMatrix (emptyMatrix)
import Ocarina.Core (silence, sound)
import Ocarina.Math (calcSlope)
import Rito.Core (Instance)
import Rito.Properties as P
import Rito.RoundRobin (InstanceId, singleInstance)
import Safe.Coerce (coerce)
import Types (Beats(..), HitLeapMe(..), HitLeapOtherPlayer(..), HitLeapVisualForLabel(..), JMilliseconds(..), MakeLeap, Position(..), normalizedColumn, playerPosition', touchPointZ)

leap
  :: forall r lock payload
   . { | MakeLeap r }
  -> Event (InstanceId -> Instance lock payload)
leap makeLeap = keepLatest $ bus \setPlayed iWasPlayed -> do
  let
    -- this is the event that we listen to to know when to stop playing audio
    -- we stop _eitehr_ when we get an internal played _or_ when one is reported
    -- over the wire
    played = (iWasPlayed $> unit)
      <|> ((filter (\(HitLeapOtherPlayer { uniqueId }) -> makeLeap.uniqueId == uniqueId) otherPlayedMe) $> unit)
    rateInfoOnAtTouch = keepLatest (fireAndForget played $> animatedStuff.rateInfo)
    forRendering = sampleBy (#) makeLeap.renderingInfo
      ( sampleOn (pure Nothing <|> fireAndForget (sample_ (coerce >>> Just <$> cInstant makeLeap.cnow) played))
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
       , endTime
       , renderingInfo
       } ->
        { n14: ((renderingInfo.halfAmbitus * (2.0 * (normalizedColumn makeLeap.column) - 1.0)) * ratio.r)
        , n24: 0.0
        , n34:
            let
              o = calcSlope (unwrap makeLeap.hitsFirstPositionAt) (p1bar renderingInfo) (unwrap makeLeap.hitsLastPositionAt) (p4bar renderingInfo) (unwrap rateInfo.beats)
            in
              o - (leapZThickness / 2.0)
        , n11:
            let
              baseWidth = renderingInfo.halfAmbitus * ratio.r / 20.0
            in
              case endTime of
                Nothing -> baseWidth
                Just (JMilliseconds startTime) -> let (JMilliseconds currentTime) = rateInfo.epochTime in max 0.0 (baseWidth - (baseWidth * shrinkRate * (currentTime - startTime) / 1000.0))
        -- we use `fireAndForget` because we don't need the full rate info, only the first one to grab the initial value
        , n22: shrinkMe endTime leapYThickness rateInfo
        , n33: shrinkMe endTime leapZThickness rateInfo
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

  keepLatest
    $ memoize drawingMatrix' \drawingMatrix ->
        rider
          ( toRide
              -- we pure this as soon as the rider initializes, which is
              -- when the element is first painted on screen
              -- this is because the leap could be triggered at any moment after paint
              { event: pure
                  ( oneOf
                      [ pure $ AudibleChildEnd
                          ( sound
                              ((\(AudibleEnd e) -> e) (makeLeap.sound rateInfoOnAtTouch))
                          )
                      , keepLatest $ (LocalTime.withTime (pure unit)) <#> \{ time } -> lowPrioritySchedule makeLeap.lpsCallback
                          (JMilliseconds 10000.0 + (coerce $ unInstant time))
                          (pure $ AudibleChildEnd silence)

                      ]
                  )
              , push: makeLeap.pushAudio
              }
          )
          $ rider
              ( toRide
                  -- todo: this may be an expensive subscription
                  -- as we are resubscribing to the animation loop for the sampling (this already happens in for rendering)
                  -- keep an eye on this, refactor if needed
                  { event: compact
                      ( sampleOn
                          ( { iWasPlayed: _
                            , hbop: _
                            } <$> (pure Nothing <|> map Just iWasPlayed)
                              <*> (pure Nothing <|> map Just (filter (\(HitLeapOtherPlayer { player }) -> player /= makeLeap.myPlayer) otherPlayedMe))
                          )
                          ( (makeLeap.columnEventConstructor makeLeap.column) <#>
                              \_
                               { iWasPlayed: iwp
                               , hbop
                               } -> do

                                if isJust iwp then Nothing
                                else Just
                                  \{ playerPositions
                                   , rateInfo
                                   } -> do
                                    let ppos = playerPosition' makeLeap.myPlayer playerPositions
                                    let Beats cbeat = rateInfo.beats
                                    let canStartAt = makeLeap.raycastingCanStartAt ppos
                                    let
                                        rightBeat = case ppos of
                                          Position1 -> makeLeap.hitsFirstPositionAt
                                          Position2 -> (makeLeap.hitsLastPositionAt - makeLeap.hitsFirstPositionAt) * Beats 0.33 + makeLeap.hitsFirstPositionAt
                                          Position3 -> (makeLeap.hitsLastPositionAt - makeLeap.hitsFirstPositionAt) * Beats 0.66 + makeLeap.hitsFirstPositionAt
                                          Position4 -> makeLeap.hitsLastPositionAt         
                                    case hbop of
                                      Just (HitLeapOtherPlayer x) -> do
                                        let
                                          hitLeapVisualForLabel issuedAt = HitLeapVisualForLabel
                                            { uniqueId: x.uniqueId
                                            , oldPosition: x.oldPosition
                                            , newPosition: x.newPosition
                                            , hitAt: x.hitAt
                                            , issuedAt: JMilliseconds issuedAt
                                            , translation: drawingMatrix <#> \{ n14, n24, n34 } -> { x: n14, y: n24, z: n34 }
                                            , player: x.player
                                            }
                                        Just (Left hitLeapVisualForLabel)
                                      Nothing ->
                                        if ((cbeat > canStartAt) && ((unwrap rightBeat - cbeat) > (-0.5))) then Just $ Right { cbeat, canStartAt, rb: unwrap rightBeat }
                                        else Nothing
                          )

                      )
                  , push: \ipt -> launchAff_ do
                      { rateInfo, playerPositions } <- eventToAff makeLeap.animatedStuff
                      for_ (ipt { rateInfo, playerPositions }) case _ of
                        Left notMe' -> do
                          cnow <- liftEffect $ makeLeap.cnow
                          let notMe = notMe' (unwrap cnow)
                          liftEffect $ log $ "drats, it wudn't me: " <> show (unwrap notMe).uniqueId
                          liftEffect $ makeLeap.pushLeapVisualForLabel notMe
                        Right meeeee ->  do
                          liftEffect $ log $ "Raycaster strikes again! " <> show meeeee
                          n <- liftEffect $ makeLeap.cnow
                          let
                            pos = playerPosition' makeLeap.myPlayer playerPositions
                          let
                            broadcastInfo =
                              { uniqueId: makeLeap.uniqueId
                              , position: pos
                              , hitAt: rateInfo.beats
                              , issuedAt: coerce n
                              }
                          let
                            hitLeapMe = HitLeapMe
                              { uniqueId: broadcastInfo.uniqueId
                              , hitAt: broadcastInfo.hitAt
                              , issuedAt: broadcastInfo.issuedAt
                              , oldPosition: broadcastInfo.position
                              , newPosition: makeLeap.newPosition
                              }
                            hitLeapVisualForLabel = HitLeapVisualForLabel
                              { uniqueId: broadcastInfo.uniqueId
                              , oldPosition: broadcastInfo.position
                              , newPosition: makeLeap.newPosition
                              , hitAt: broadcastInfo.hitAt
                              , issuedAt: broadcastInfo.issuedAt
                              , translation: drawingMatrix <#> \{ n14, n24, n34 } -> { x: n14, y: n24, z: n34 }
                              , player: makeLeap.myPlayer
                              }
                          liftEffect $ makeLeap.pushLeapVisualForLabel hitLeapVisualForLabel
                          liftEffect $ makeLeap.pushLeap.push hitLeapMe
                          liftEffect $ setPlayed hitLeapMe
                  }
              )
              ( pure
                  ( ( singleInstance
                        ( oneOf
                            [ pure $ P.matrix4 $ makeLeap.mkMatrix4 emptyMatrix
                            , P.matrix4 <<< makeLeap.mkMatrix4 <$> drawingMatrix
                            ]
                        )
                    )
                  )
              )
  where
  animatedStuff =
    { rateInfo: _.rateInfo <$> makeLeap.animatedStuff
    , playerPositions: _.playerPositions <$> makeLeap.animatedStuff
    }
  p1bar ri = touchPointZ ri Position1
  p4bar ri = touchPointZ ri Position4
  ratioEvent = map (\{ iw, ih } -> { iw, ih, r: iw / ih }) (pure makeLeap.initialDims <|> makeLeap.resizeEvent)
  shrinkRate = 3.0
  leapYThickness = Visual.Constants.basicYThickness
  leapZThickness = 0.2
  shrinkMe endTime leapThickness ri = case endTime of
    Nothing -> leapThickness
    Just (JMilliseconds startTime) -> let (JMilliseconds currentTime) = ri.epochTime in max 0.0 (leapThickness - (leapThickness * shrinkRate * (currentTime - startTime) / 1000.0))
  otherPlayedMe = filter (\(HitLeapOtherPlayer { uniqueId }) -> makeLeap.uniqueId == uniqueId) makeLeap.notifications.hitLeap

module Joyride.Scores.Ride.Leap where

import Prelude

import Bolson.Core (envy, fixed)
import Control.Alt ((<|>))
import Control.Comonad.Cofree (Cofree, (:<))
import Control.Plus (empty)
import Data.DateTime.Instant (unInstant)
import Data.Foldable (oneOfMap)
import Data.FunctorWithIndex (mapWithIndex)
import Data.List (List(..), span)
import Data.List as List
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Time.Duration (Milliseconds(..), Seconds(..))
import FRP.Behavior (Behavior, sample_)
import FRP.Event (Event, keepLatest, memoize)
import FRP.Event.Time as LocalTime
import Foreign.Object as Object
import Joyride.Audio.Leap as LeapA
import Joyride.Constants.Audio (startOffset)
import Joyride.FRP.Behavior (misbehavior)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Schedule (oneOff, scheduleCf)
import Joyride.Ocarina (AudibleEnd(..))
import Joyride.Scores.AugmentedTypes (AugmentedLeapEventV0')
import Joyride.Visual.Leap as LeapV
import Ocarina.WebAPI (BrowserAudioBuffer)
import Record (union)
import Rito.Color (RGB(..))
import Rito.Core (ASceneful, Instance, toScene)
import Rito.Geometries.Box (box)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.RoundRobin (InstanceId, Semaphore(..), roundRobinInstancedMesh)
import Safe.Coerce (coerce)
import Types (Beats(..), Column, JMilliseconds(..), MakeLeaps, Position, RateInfo)

lookAhead :: Beats
lookAhead = Beats 2.0

singleBeat
  :: { buffer :: Behavior BrowserAudioBuffer
     , silence :: BrowserAudioBuffer
     }
  -> Event RateInfo
  -> AudibleEnd
singleBeat { buffer, silence } riE = AudibleEnd
  ( envy
      ( memoize
          ( oneOff identity
              ( riE <#> (const $ Just $ Seconds 0.0)
              )
          )
          \oa -> LeapA.leap
            { buffer: sample_ (buffer) oa
            , offAt: empty
            , silence
            , onAt: coerce oa
            }
      )

  )

rideLeaps :: forall lock payload. Array AugmentedLeapEventV0' -> { | MakeLeaps () } -> ASceneful lock payload
rideLeaps levs makeLeaps = fixed
  [ toScene
      ( roundRobinInstancedMesh
          { instancedMesh: makeLeaps.threeDI.instancedMesh
          , matrix4: makeLeaps.threeDI.matrix4
          , mesh: makeLeaps.threeDI.mesh
          }
          100
          (box { box: makeLeaps.threeDI.boxGeometry })
          ( meshStandardMaterial
              { meshStandardMaterial: makeLeaps.threeDI.meshStandardMaterial
              , color: makeLeaps.mkColor (RGB 0.91 0.387 0.432)
              , roughness: 0.4
              }
              empty
          )
          (children transform)
      )
  -- , toScene $ dyn (children transformLeapWord)

  ]

  where
  children :: forall a. (ScoreMorcelId -> Event a) -> Event (Event a)
  children f = keepLatest $ map (oneOfMap pure) (eventList f)

  eventList :: forall a. (ScoreMorcelId -> Event a) -> Event (List (Event a))
  eventList f = scheduleCf (go f score) (_.rateInfo <$> makeLeaps.animatedStuff)

  transform :: ScoreMorcelId -> Event (Semaphore (InstanceId -> Instance lock payload))
  transform input =
    ( map Acquire
        ( LeapV.leap
            ( makeLeaps `union` input `union`
                { sound: singleBeat
                    { silence: makeLeaps.silence
                    , buffer: misbehavior (Object.lookup "floorTom") makeLeaps.buffers
                    }
                , uniqueId: input.uniqueId
                , newPosition: input.position
                }
            )
        )
    ) <|>
      ( keepLatest $ (LocalTime.withTime (pure unit)) <#> \{ time } -> lowPrioritySchedule makeLeaps.lpsCallback
          (JMilliseconds 10000.0 + (coerce $ unInstant time))
          (pure $ Release)
      )

  go :: forall a. (ScoreMorcelId -> Event a) -> List ScoreMorcelId -> RateInfo -> Cofree ((->) RateInfo) (List (Event a))
  go f Nil _ = Nil :< go f Nil
  go f l { beats } = do
    let
      { init, rest } = span (\{ hitsFirstPositionAt } -> hitsFirstPositionAt <= beats + lookAhead) l
    (f <$> init) :< go f rest
  score =
    List.fromFoldable $ mapWithIndex
      ( \uniqueId x ->
          let
            logicalFirst = min x.marker1Time x.marker2Time
            logicalLast = max x.marker1Time x.marker2Time
          in
            { uniqueId
            -- abs in case accidentally out of order
            -- divide by 2.0 to get roughly two extra bars back
            , hitsFirstPositionAt: (Beats $ logicalFirst) + startOffset
            , hitsLastPositionAt: (Beats logicalLast) + startOffset
            , column: x.column
            , raycastingCanStartAt:  map (add (unwrap startOffset)) x.raycastingCanStartAt
            , position: x.position
            }
      ) $ levs

type ScoreMorcel' r =
  { hitsFirstPositionAt :: Beats
  , hitsLastPositionAt :: Beats
  , column :: Column
  , position :: Position
  , raycastingCanStartAt :: Position -> Number
  | r
  }

type ScoreMorcel = ScoreMorcel' ()
type ScoreMorcelId = ScoreMorcel' (uniqueId :: Int)

tmpScore0 :: List ScoreMorcel
tmpScore0 = Nil

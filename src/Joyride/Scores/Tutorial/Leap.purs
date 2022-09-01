module Joyride.Scores.Tutorial.Leap where

import Prelude

import Bolson.Core (Child(..), dyn, envy, fixed)
import Control.Alt ((<|>))
import Control.Comonad.Cofree (Cofree, (:<))
import Control.Plus (empty)
import Data.DateTime.Instant (unInstant)
import Data.Foldable (oneOfMap)
import Data.FunctorWithIndex (mapWithIndex)
import Data.List (List(..), span, (:))
import Data.Maybe (Maybe(..))
import Data.Time.Duration (Milliseconds(..), Seconds(..))
import Effect (Effect)
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
import Joyride.Scores.Tutorial.Base (MeasureNumberBeatNumber(..), mb2info)
import Joyride.Visual.Leap as LeapV
import Joyride.Visual.LeapWord as LeapW
import Ocarina.WebAPI (BrowserAudioBuffer)
import Record (union)
import Rito.Color (RGB(..))
import Rito.Core (ASceneful, CSS3DObject, Instance, toScene)
import Rito.Geometries.Box (box)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.RoundRobin (InstanceId, Semaphore(..), roundRobinInstancedMesh)
import Safe.Coerce (coerce)
import Types (Beats(..), Column(..), HitLeapMe, JMilliseconds(..), MakeLeaps, Position(..), RateInfo)

lookAhead :: Beats
lookAhead = Beats 0.1

singleBeat
  :: { buffer :: Behavior BrowserAudioBuffer
     , silence :: BrowserAudioBuffer
     , myBeat :: Beats
     }
  -> Event RateInfo
  -> AudibleEnd
singleBeat { buffer, silence, myBeat: _ } riE = AudibleEnd
  ( envy
      ( memoize
          ( oneOff identity
              ( riE <#> (const $ Just $ Seconds 0.0) -- \ri ->    if ri.beats + lookAhead >= myBeat then Just (beatToTime ri myBeat)  else Nothing
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

tutorialLeaps :: forall lock payload. { | MakeLeaps () } -> ASceneful lock payload
tutorialLeaps makeLeaps = fixed
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
   , toScene $ dyn (children transformLeapWord)

  ]

  where
  children :: forall a. (ScoreMorcelId -> Event a) -> Event (Event a)
  children f = keepLatest $ map (oneOfMap pure) (eventList f)
  eventList :: forall a. (ScoreMorcelId -> Event a) -> Event (List (Event a))
  eventList f = scheduleCf (go f score) (_.rateInfo <$> makeLeaps.animatedStuff)

  transformLeapWord :: ScoreMorcelId -> Event (Child Void (CSS3DObject lock payload) lock)
  transformLeapWord input =
    ( pure $ Insert
        ( LeapW.leapWord
            ( makeLeaps `union` input `union`
                { sound: singleBeat
                    { myBeat: input.appearsAt + Beats 1.0
                    , silence: makeLeaps.silence
                    , buffer: misbehavior (Object.lookup "floorTom") makeLeaps.buffers
                    }
                , uniqueId: input.uniqueId
                , newPosition: input.position
                , hitsLastPositionAt: input.appearsAt + Beats 5.0
                , text: case input.position of
                  Position1 -> "1"
                  Position2 -> "2"
                  Position3 -> "3"
                  Position4 -> "4"
                -- empty for now, fill this in later
                , someonePlayedMe: (empty :: Event HitLeapMe)
                }
            )
        )
    ) <|>
      ( keepLatest $ (LocalTime.withTime (pure unit)) <#> \{ time } -> lowPrioritySchedule makeLeaps.lpsCallback
          (JMilliseconds 10000.0 + (coerce $ unInstant time))
          (pure $ Remove)
      )

  transform :: ScoreMorcelId -> Event (Semaphore (InstanceId -> Instance lock payload))
  transform input =
    ( map Acquire
        ( LeapV.leap
            ( makeLeaps `union` input `union`
                { sound: singleBeat
                    { myBeat: input.appearsAt + Beats 1.0
                    , silence: makeLeaps.silence
                    , buffer: misbehavior (Object.lookup "floorTom") makeLeaps.buffers
                    }
                , uniqueId: input.uniqueId
                , newPosition: input.position
                , hitsLastPositionAt: input.appearsAt + Beats 5.0
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
      { init, rest } = span (\{ appearsAt } -> appearsAt <= beats + lookAhead) l
    (f <$> init) :< go f rest
  score = mapWithIndex (\uniqueId x -> union { uniqueId } x) $ tmpScore

type ScoreMorcel' r =
  { appearsAt :: Beats
  , column :: Column
  , position :: Position
  | r
  }

type ScoreMorcel = ScoreMorcel' ()
type ScoreMorcelId = ScoreMorcel' (uniqueId :: Int)

tmpScore0 :: List ScoreMorcel
tmpScore0 = Nil

-- 3 7 8 12
tmpScore :: List ScoreMorcel
tmpScore = { column: C7, appearsAt: (Beats (mb2info M16B1).t) + startOffset, position: Position2 }
  : { column: C8, appearsAt: (Beats (mb2info M18B1).t) + startOffset, position: Position3 }
  : { column: C7, appearsAt: (Beats (mb2info M20B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M21B1).t) + startOffset, position: Position4 }
  : { column: C7, appearsAt: (Beats (mb2info M22B1).t) + startOffset, position: Position2 }
  : { column: C8, appearsAt: (Beats (mb2info M23B1).t) + startOffset, position: Position3 }
  : { column: C7, appearsAt: (Beats (mb2info M24B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M25B1).t) + startOffset, position: Position4 }
  : { column: C3, appearsAt: (Beats (mb2info M26B1).t) + startOffset, position: Position2 }
  : { column: C7, appearsAt: (Beats (mb2info M26B3).t) + startOffset, position: Position3 }
  : { column: C12, appearsAt: (Beats (mb2info M27B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M27B3).t) + startOffset, position: Position4 }
  : { column: C3, appearsAt: (Beats (mb2info M29B1).t) + startOffset, position: Position2 }
  : { column: C7, appearsAt: (Beats (mb2info M29B3).t) + startOffset, position: Position3 }
  : { column: C12, appearsAt: (Beats (mb2info M30B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M30B3).t) + startOffset, position: Position4 }
  : { column: C3, appearsAt: (Beats (mb2info M31B1).t) + startOffset, position: Position2 }
  : { column: C7, appearsAt: (Beats (mb2info M32B3).t) + startOffset, position: Position3 }
  : { column: C12, appearsAt: (Beats (mb2info M33B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M34B3).t) + startOffset, position: Position4 }
  : { column: C3, appearsAt: (Beats (mb2info M35B1).t) + startOffset, position: Position2 }
  : { column: C7, appearsAt: (Beats (mb2info M36B3).t) + startOffset, position: Position3 }
  : { column: C12, appearsAt: (Beats (mb2info M37B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M38B3).t) + startOffset, position: Position4 }
  : { column: C3, appearsAt: (Beats (mb2info M39B1).t) + startOffset, position: Position2 }
  : { column: C7, appearsAt: (Beats (mb2info M40B3).t) + startOffset, position: Position3 }
  : { column: C12, appearsAt: (Beats (mb2info M41B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M42B3).t) + startOffset, position: Position4 }
  : { column: C3, appearsAt: (Beats (mb2info M43B1).t) + startOffset, position: Position2 }
  : { column: C7, appearsAt: (Beats (mb2info M44B3).t) + startOffset, position: Position3 }
  : { column: C12, appearsAt: (Beats (mb2info M45B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M46B3).t) + startOffset, position: Position4 }
  : { column: C3, appearsAt: (Beats (mb2info M47B1).t) + startOffset, position: Position2 }
  : { column: C7, appearsAt: (Beats (mb2info M48B3).t) + startOffset, position: Position3 }
  : { column: C12, appearsAt: (Beats (mb2info M49B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M50B3).t) + startOffset, position: Position4 }
  --
  --
  : { column: C3, appearsAt: (Beats (mb2info M51B1).t) + startOffset, position: Position2 }
  : { column: C7, appearsAt: (Beats (mb2info M51B1).t) + startOffset, position: Position3 }
  : { column: C12, appearsAt: (Beats (mb2info M51B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M51B1).t) + startOffset, position: Position4 }

  --
  : { column: C3, appearsAt: (Beats (mb2info M55B1).t) + startOffset, position: Position2 }
  : { column: C7, appearsAt: (Beats (mb2info M55B1).t) + startOffset, position: Position3 }
  : { column: C12, appearsAt: (Beats (mb2info M55B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M55B1).t) + startOffset, position: Position4 }

  --
  : { column: C3, appearsAt: (Beats (mb2info M59B1).t) + startOffset, position: Position2 }
  : { column: C7, appearsAt: (Beats (mb2info M59B1).t) + startOffset, position: Position3 }
  : { column: C12, appearsAt: (Beats (mb2info M59B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M59B1).t) + startOffset, position: Position4 }

  --
  : { column: C3, appearsAt: (Beats (mb2info M63B1).t) + startOffset, position: Position2 }
  : { column: C7, appearsAt: (Beats (mb2info M63B1).t) + startOffset, position: Position3 }
  : { column: C12, appearsAt: (Beats (mb2info M63B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M63B1).t) + startOffset, position: Position4 }

  --
  : { column: C3, appearsAt: (Beats (mb2info M67B1).t) + startOffset, position: Position2 }
  : { column: C7, appearsAt: (Beats (mb2info M67B1).t) + startOffset, position: Position3 }
  : { column: C12, appearsAt: (Beats (mb2info M67B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M67B1).t) + startOffset, position: Position4 }

  --
  : { column: C3, appearsAt: (Beats (mb2info M71B1).t) + startOffset, position: Position2 }
  : { column: C7, appearsAt: (Beats (mb2info M71B1).t) + startOffset, position: Position3 }
  : { column: C12, appearsAt: (Beats (mb2info M71B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M71B1).t) + startOffset, position: Position4 }

  --
  : { column: C3, appearsAt: (Beats (mb2info M75B1).t) + startOffset, position: Position2 }
  : { column: C7, appearsAt: (Beats (mb2info M75B1).t) + startOffset, position: Position3 }
  : { column: C12, appearsAt: (Beats (mb2info M75B1).t) + startOffset, position: Position1 }
  : { column: C8, appearsAt: (Beats (mb2info M75B1).t) + startOffset, position: Position4 }

  --
  : { column: C3, appearsAt: (Beats (mb2info M79B1).t) + startOffset, position: Position2 }
  : { column: C12, appearsAt: (Beats (mb2info M79B1).t) + startOffset, position: Position1 }

  --
  : { column: C3, appearsAt: (Beats (mb2info M83B1).t) + startOffset, position: Position2 }
  : { column: C12, appearsAt: (Beats (mb2info M83B1).t) + startOffset, position: Position1 }

  : Nil

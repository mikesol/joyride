module Joyride.Scores.Ride.Leap where

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
import Data.Tuple.Nested ((/\))
import Effect (Effect)
import FRP.Behavior (Behavior, sample_)
import FRP.Event (Event, keepLatest, memoize)
import FRP.Event.Class (bang)
import FRP.Event.Time as LocalTime
import Foreign.Object as Object
import Joyride.Audio.Leap as LeapA
import Joyride.Constants.Ride (rideStartOffset)
import Joyride.FRP.Behavior (misbehavior)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Schedule (oneOff, scheduleCf)
import Joyride.Ocarina (AudibleEnd(..))
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

rideLeaps :: forall lock payload. { | MakeLeaps () } -> ASceneful lock payload
rideLeaps makeLeaps = fixed
  [ toScene
      ( roundRobinInstancedMesh
          { instancedMesh: makeLeaps.threeDI.instancedMesh
          , matrix4: makeLeaps.threeDI.matrix4
          , mesh: makeLeaps.threeDI.mesh
          }
          100
          (box { box: makeLeaps.threeDI.boxGeometry })
          ( meshStandardMaterial
              -- { map: textures.tilesZelligeHexCOL
              -- , aoMap: textures.tilesZelligeHexAO
              -- , displacementMap: textures.tilesZelligeHexDISP
              -- , displacementScale: 0.1
              -- , roughnessMap: textures.tilesZelligeHexGLOSS
              -- }
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
  children f = keepLatest $ map (oneOfMap bang) (eventList f)

  eventList :: forall a. (ScoreMorcelId -> Event a) -> Event (List (Event a))
  eventList f = scheduleCf (go f score) (_.rateInfo <$> makeLeaps.animatedStuff)

  transformLeapWord :: ScoreMorcelId -> Event (Child Void (CSS3DObject lock payload) Effect lock)
  transformLeapWord input =
    ( bang $ Insert
        ( LeapW.leapWord
            ( makeLeaps `union` input `union`
                { sound: singleBeat
                    { myBeat: input.appearsAt + Beats 1.0
                    , silence: makeLeaps.silence
                    , buffer: misbehavior (Object.lookup "floorTom") makeLeaps.buffers
                    }
                , uniqueId: input.uniqueId
                , newPosition: input.position
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
      ( keepLatest $ (LocalTime.withTime (bang unit)) <#> \{ time } -> lowPrioritySchedule makeLeaps.lpsCallback
          (JMilliseconds 10000.0 + (coerce $ unInstant time))
          (bang $ Remove)
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
                }
            )
        )
    ) <|>
      ( keepLatest $ (LocalTime.withTime (bang unit)) <#> \{ time } -> lowPrioritySchedule makeLeaps.lpsCallback
          (JMilliseconds 10000.0 + (coerce $ unInstant time))
          (bang $ Release)
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
tmpScore =
  ( (C5 /\ 9.0 /\ Position2)
      : (C10 /\ 17.0 /\ Position3)
      : (C5 /\ 24.0 /\ Position4)
      : (C10 /\ 30.0 /\ Position1)
      : (C5 /\ 35.0 /\ Position3)
      : (C10 /\ 39.0 /\ Position2)
      : (C5 /\ 42.0 /\ Position1)
      : (C10 /\ 44.0 /\ Position4)
      : (C5 /\ 45.0 /\ Position1)
      : (C10 /\ 45.5 /\ Position3)
      : (C5 /\ 46.0 /\ Position2)
      : (C10 /\ 46.5 /\ Position4)
      : (C5 /\ 47.0 /\ Position2)
      : (C10 /\ 47.25 /\ Position4)
      : (C5 /\ 47.5 /\ Position3)
      : (C10 /\ 47.75 /\ Position1)
      : (C5 /\ 48.0 /\ Position4)
      : (C10 /\ 48.25 /\ Position3)
      : (C5 /\ 48.5 /\ Position2)
      : (C10 /\ 48.75 /\ Position1)
      : (C5 /\ 49.0 /\ Position3)
      : (C10 /\ 49.25 /\ Position1)
      : (C5 /\ 49.5 /\ Position4)
      : (C10 /\ 49.75 /\ Position2)
      : (C5 /\ 50.0 /\ Position4)
      : (C10 /\ 50.25 /\ Position1)
      : (C5 /\ 50.5 /\ Position3)
      : (C10 /\ 50.75 /\ Position2)
      : (C5 /\ 51.0 /\ Position4)
      : (C10 /\ 51.5 /\ Position2)
      : (C5 /\ 52.0 /\ Position3)
      : (C10 /\ 52.5 /\ Position1)
      :
        --
        (C5 /\ 53.0 /\ Position4)
      : (C10 /\ 54.0 /\ Position2)
      : (C5 /\ 56.0 /\ Position3)
      : (C10 /\ 59.0 /\ Position1)
      : (C5 /\ 63.0 /\ Position3)
      : (C10 /\ 68.0 /\ Position4)
      : (C5 /\ 74.0 /\ Position1)
      : (C10 /\ 80.0 /\ Position2)
      : (C5 /\ 89.0 /\ Position3)
      : (C10 /\ 98.0 /\ Position1)
      : (C5 /\ 108.0 /\ Position4)
      : (C10 /\ 119.0 /\ Position2)
      :
        Nil
  ) <#> \(c /\ n /\ p) -> { column: c, appearsAt: Beats n + rideStartOffset, position: p }

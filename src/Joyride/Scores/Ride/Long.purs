module Joyride.Scores.Ride.Long where

import Prelude

import Control.Alt ((<|>))
import Control.Comonad.Cofree ((:<))
import Control.Plus (empty)
import Data.DateTime.Instant (unInstant)
import Data.Foldable (oneOfMap)
import Data.FunctorWithIndex (mapWithIndex)
import Data.List (List(..), span)
import Data.List as List
import Data.Maybe (Maybe(..))
import Data.Number (abs)
import Data.Time.Duration (Milliseconds(..))
import FRP.Behavior (Behavior, sample_)
import FRP.Event (Event, keepLatest)
import FRP.Event.Time as LocalTime
import Foreign.Object as Object
import Joyride.Audio.Long as LongA
import Joyride.Constants.Audio (startOffset)
import Joyride.FRP.Behavior (misbehavior)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Schedule (oneOff, scheduleCf)
import Joyride.Ocarina (AudibleEnd(..))
import Joyride.Visual.Long as LongV
import Ocarina.WebAPI (BrowserAudioBuffer)
import Record (union)
import Rito.Color (RGB(..))
import Rito.Core (ASceneful, Instance, toScene)
import Rito.Geometries.Box (box)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.RoundRobin (InstanceId, Semaphore(..), roundRobinInstancedMesh)
import Safe.Coerce (coerce)
import Types (Beats(..), Column, JMilliseconds(..), LongEventV0', MakeLongs, RateInfo, Seconds(..))

lookAhead :: Beats
lookAhead = Beats 0.1

singleBeat
  :: { buffer :: Behavior BrowserAudioBuffer
     , silence :: BrowserAudioBuffer
     }
  -> { on :: Event RateInfo, off :: Event RateInfo }
  -> AudibleEnd
singleBeat { buffer, silence } riE = AudibleEnd
  ( LongA.long
      { buffer: sample_ (buffer) oaOn
      , silence
      , onAt: coerce oaOn
      , offAt: coerce oaOff
      }

  )
  where
  doRi x io = oneOff identity
    ( x <#> \ri -> case io of
        -- start immediately if it is an onset
        I -> Just $ Seconds 0.0
        -- otherwise we need more finesse
        O -> Just ri.time
    )
  oaOn = doRi riE.on I
  oaOff = doRi riE.off O

data IO = I | O

rideLongs :: forall lock payload. Array LongEventV0' -> { | MakeLongs () } -> ASceneful lock payload
rideLongs levs makeLongs = toScene
  ( roundRobinInstancedMesh { instancedMesh: makeLongs.threeDI.instancedMesh, mesh: makeLongs.threeDI.mesh, matrix4: makeLongs.threeDI.matrix4 } 100 (box { box: makeLongs.threeDI.boxGeometry })
      ( meshStandardMaterial
          { meshStandardMaterial: makeLongs.threeDI.meshStandardMaterial
          , color: makeLongs.mkColor (RGB 0.49 0.83 0.45)
          , roughness: 0.1
          }
          empty
      )
      children
  )

  where
  children = keepLatest $ map (oneOfMap pure) eventList
  eventList = scheduleCf (go score) (_.rateInfo <$> makeLongs.animatedStuff)

  transform :: _ -> Event (Semaphore (InstanceId -> Instance lock payload))
  transform input =
    ( map Acquire
        ( LongV.long
            ( makeLongs `union` input `union`
                { sound: singleBeat
                    { silence: makeLongs.silence
                    , buffer: misbehavior (bind input.tag <<< flip Object.lookup) makeLongs.buffers
                    }
                , uniqueId: input.uniqueId
                }
            )
        )
    ) <|>
      ( keepLatest $ (LocalTime.withTime (pure unit)) <#> \{ time } -> lowPrioritySchedule makeLongs.lpsCallback
          (JMilliseconds 10000.0 + (coerce $ unInstant time))
          (pure $ Release)
      )
  go Nil _ = Nil :< go Nil
  go l { beats } = do
    let
      { init, rest } = span (\{ appearsAt } -> appearsAt <= beats + lookAhead) l
    (transform <$> init) :< go rest
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
            , appearsAt: (Beats $ logicalFirst - (abs (x.marker2Time - x.marker1Time) / 2.0)) + startOffset
            , hitsLastPositionAt: (Beats logicalLast) + startOffset
            -- ugh, nicer way to do this in case there is no buffer for long press?
            , tag: x.audioURL
            , length: x.length
            , column: x.column
            }
      ) levs

type ScoreMorcel =
  { appearsAt :: Beats
  , hitsLastPositionAt :: Beats
  , column :: Column
  , length :: Number
  , tag :: Maybe String
  }

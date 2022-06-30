module Joyride.Scores.Ride.Long where

import Prelude

import Control.Alt ((<|>))
import Control.Comonad.Cofree ((:<))
import Control.Plus (empty)
import Data.DateTime.Instant (unInstant)
import Data.Foldable (oneOfMap)
import Data.FunctorWithIndex (mapWithIndex)
import Data.List (List(..), span, (:))
import Data.Maybe (Maybe(..))
import Data.Time.Duration (Milliseconds(..))
import FRP.Behavior (Behavior, sample_)
import FRP.Event (Event, keepLatest)
import FRP.Event.Class (bang)
import FRP.Event.Time as LocalTime
import Foreign.Object as Object
import Joyride.Audio.Long as LongA
import Joyride.Constants.Ride (rideStartOffset)
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
import Types (Beats(..), Column(..), JMilliseconds(..), MakeLongs, RateInfo, Seconds(..))

lookAhead :: Beats
lookAhead = Beats 0.1

singleBeat
  :: { buffer :: Behavior BrowserAudioBuffer
     , silence :: BrowserAudioBuffer
     , myBeat :: Beats
     }
  -> { on :: Event RateInfo, off :: Event RateInfo }
  -> AudibleEnd
-- myBeat is used for timed events but not for reactive ones like long
singleBeat { buffer, silence, myBeat: _ } riE = AudibleEnd
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
        O -> Just ri.time --if ri.beats + lookAhead >= myBeat then let ___ = spy ("ugh " <> ooo) {ri, myBeat} in Just (beatToTime ri myBeat) else Nothing
    )
  oaOn = doRi riE.on I
  oaOff = doRi riE.off O

data IO = I | O

rideLongs :: forall lock payload. { | MakeLongs () } -> ASceneful lock payload
rideLongs makeLongs = toScene
  ( roundRobinInstancedMesh { instancedMesh: makeLongs.threeDI.instancedMesh, mesh: makeLongs.threeDI.mesh, matrix4: makeLongs.threeDI.matrix4 } 100 (box { box: makeLongs.threeDI.boxGeometry })
      ( meshStandardMaterial
          -- { map: textures.tilesZelligeHexCOL
          -- , aoMap: textures.tilesZelligeHexAO
          -- , displacementMap: textures.tilesZelligeHexDISP
          -- , displacementScale: 0.1
          -- , roughnessMap: textures.tilesZelligeHexGLOSS
          -- }
          { meshStandardMaterial: makeLongs.threeDI.meshStandardMaterial
          , color: makeLongs.mkColor (RGB 0.49 0.83 0.45)
          , roughness: 0.1
          }
          empty
      )
      children
  )

  where
  children = keepLatest $ map (oneOfMap bang) eventList
  eventList = scheduleCf (go score) (_.rateInfo <$> makeLongs.animatedStuff)

  transform :: _ -> Event (Semaphore (InstanceId -> Instance lock payload))
  transform input =
    ( map Acquire
        ( LongV.long
            ( makeLongs `union` input `union`
                { sound: singleBeat
                    { myBeat: input.appearsAt + Beats 1.0
                    , silence: makeLongs.silence
                    , buffer: misbehavior (Object.lookup input.tag) makeLongs.buffers
                    }
                , uniqueId: input.uniqueId
                }
            )
        )
    ) <|>
      ( keepLatest $ (LocalTime.withTime (bang unit)) <#> \{ time } -> lowPrioritySchedule makeLongs.lpsCallback
          (JMilliseconds 10000.0 + (coerce $ unInstant time))
          (bang $ Release)
      )
  go Nil _ = Nil :< go Nil
  go l { beats } = do
    let
      { init, rest } = span (\{ appearsAt } -> appearsAt <= beats + lookAhead) l
    (transform <$> init) :< go rest
  score = mapWithIndex (\uniqueId x -> union { uniqueId } x) $ tmpScore

type ScoreMorcel =
  { appearsAt :: Beats
  , column :: Column
  , length :: Number
  , tag :: String
  }

tmpScore0 :: List ScoreMorcel
tmpScore0 = Nil

tmpScore :: List ScoreMorcel
tmpScore =
  -- { column: C11, appearsAt: (Beats (mb2info M1B1).t) + rideStartOffset, length: 1.25, tag: "shakuhachi0" }  :
  { column: C11, appearsAt: Beats 35.0 + rideStartOffset, length: 1.25, tag: "shakuhachi0" }
    : { column: C4, appearsAt: Beats 60.0 + rideStartOffset, length: 1.0, tag: "shakuhachi1" }
    : { column: C11, appearsAt: Beats 80.0 + rideStartOffset, length: 1.25, tag: "shakuhachi2" }
    : { column: C4, appearsAt: Beats 95.0 + rideStartOffset, length: 1.5, tag: "shakuhachi3" }
    : { column: C11, appearsAt: Beats 105.0 + rideStartOffset, length: 1.75, tag: "shakuhachi0" }
    : { column: C4, appearsAt: Beats 110.0 + rideStartOffset, length: 1.5, tag: "shakuhachi1" }
    : { column: C11, appearsAt: Beats 115.0 + rideStartOffset, length: 1.25, tag: "shakuhachi2" }
    : { column: C4, appearsAt: Beats 117.0 + rideStartOffset, length: 1.0, tag: "shakuhachi1" }
    : Nil

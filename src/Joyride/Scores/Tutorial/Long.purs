module Joyride.Scores.Tutorial.Long where

import Prelude

import Control.Alt ((<|>))
import Control.Comonad.Cofree ((:<))
import Control.Plus (empty)
import Data.DateTime.Instant (unInstant)
import Data.Foldable (oneOfMap)
import Data.FunctorWithIndex (mapWithIndex)
import Data.List (List(..), span, (:))
import Data.Maybe (Maybe(..))
import Data.Time.Duration (Milliseconds(..), Seconds(..))
import FRP.Behavior (Behavior, sample_)
import FRP.Event (Event, keepLatest)
import FRP.Event.Class (bang)
import FRP.Event.Time as LocalTime
import Foreign.Object as Object
import Joyride.Audio.Long as LongA
import Joyride.FRP.Behavior (misbehavior)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Schedule (oneOff, scheduleCf)
import Joyride.Visual.Long as LongV
import Joyride.Ocarina (AudibleEnd(..))
import Record (union)
import Rito.Color (RGB(..))
import Rito.Core (ASceneful, Instance, toScene)
import Rito.Geometries.Box (box)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.RoundRobin (InstanceId, Semaphore(..), roundRobinInstancedMesh)
import Safe.Coerce (coerce)
import Types (Beats(..), Column(..), JMilliseconds(..), MakeLongs, RateInfo, beatToTime)
import Ocarina.WebAPI (BrowserAudioBuffer)

lookAhead :: Beats
lookAhead = Beats 0.1

singleBeat
  :: { buffer :: Behavior BrowserAudioBuffer
     , silence :: BrowserAudioBuffer
     , myBeat :: Beats
     }
  -> { on :: Event RateInfo, off :: Event RateInfo }
  -> AudibleEnd
singleBeat { buffer, silence, myBeat } riE = AudibleEnd
  ( LongA.long
      { buffer: sample_ (buffer) oaOn
      , silence
      , onAt: coerce oaOn
      , offAt: coerce oaOff
      }

  )
  where
  doRi x = oneOff identity
    ( x <#> \ri ->
        if ri.beats + lookAhead >= myBeat then Just (beatToTime ri myBeat)
        else Nothing
    )
  oaOn = doRi riE.on
  oaOff = doRi riE.off

tutorialLongs :: forall lock payload. { | MakeLongs () } -> ASceneful lock payload
tutorialLongs makeLongs = toScene
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
                    , buffer: misbehavior (Object.lookup "kick") makeLongs.buffers
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
  score = mapWithIndex (\uniqueId x -> union { uniqueId } x) $ tmpScore0

type ScoreMorcel =
  { appearsAt :: Beats
  , column :: Column
  , length :: Number
  }

tmpScore0 :: List ScoreMorcel
tmpScore0 = Nil

tmpScore :: List ScoreMorcel
tmpScore = { column: C10, appearsAt: Beats 0.0, length: 1.25 }
  : { column: C10, appearsAt: Beats 3.0, length: 1.0 }
  : { column: C10, appearsAt: Beats 8.0, length: 1.25 }
  : { column: C10, appearsAt: Beats 12.0, length: 1.0 }
  : { column: C2, appearsAt: Beats 14.0, length: 1.0 }
  : { column: C2, appearsAt: Beats 21.0, length: 1.5 }
  : { column: C2, appearsAt: Beats 26.0, length: 1.25 }
  : Nil
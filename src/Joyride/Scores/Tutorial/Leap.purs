module Joyride.Scores.Tutorial.Leap where

import Prelude

import Bolson.Core (envy)
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
import FRP.Event (Event, keepLatest, memoize)
import FRP.Event.Class (bang)
import FRP.Event.Time as LocalTime
import Foreign.Object as Object
import Joyride.Audio.Leap as LeapA
import Joyride.FRP.Behavior (misbehavior)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Schedule (oneOff, scheduleCf)
import Joyride.Visual.Leap as LeapV
import Joyride.Ocarina (AudibleEnd(..))
import Record (union)
import Rito.Color (RGB(..))
import Rito.Core (ASceneful, Instance, toScene)
import Rito.Geometries.Box (box)
import Rito.Materials.MeshStandardMaterial (meshStandardMaterial)
import Rito.RoundRobin (InstanceId, Semaphore(..), roundRobinInstancedMesh)
import Safe.Coerce (coerce)
import Types (Beats(..), Column(..), JMilliseconds(..), MakeLeaps, Position(..), RateInfo, beatToTime)
import Ocarina.WebAPI (BrowserAudioBuffer)

lookAhead :: Beats
lookAhead = Beats 0.1

singleBeat
  :: { buffer :: Behavior BrowserAudioBuffer
     , silence :: BrowserAudioBuffer
     , myBeat :: Beats
     }
  -> Event RateInfo
  -> AudibleEnd
singleBeat { buffer, silence, myBeat } riE = AudibleEnd
  ( envy
      ( memoize
          ( oneOff identity
              ( riE <#> \ri ->
                  if ri.beats + lookAhead >= myBeat then Just (beatToTime ri myBeat)
                  else Nothing
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
tutorialLeaps makeLeaps = toScene
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
      children
  )

  where
  children = keepLatest $ map (oneOfMap bang) eventList
  eventList = scheduleCf (go score) (_.rateInfo <$> makeLeaps.animatedStuff)

  transform :: _ -> Event (Semaphore (InstanceId -> Instance lock payload))
  transform input =
    ( map Acquire
        ( LeapV.leap
            ( makeLeaps `union` input `union`
                { sound: singleBeat
                    { myBeat: input.appearsAt + Beats 1.0
                    , silence: makeLeaps.silence
                    , buffer: misbehavior (Object.lookup "bell") makeLeaps.buffers
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
  go Nil _ = Nil :< go Nil
  go l { beats } = do
    let
      { init, rest } = span (\{ appearsAt } -> appearsAt <= beats + lookAhead) l
    (transform <$> init) :< go rest
  score = mapWithIndex (\uniqueId x -> union { uniqueId } x) $ tmpScore

type ScoreMorcel = { appearsAt :: Beats
  , column :: Column
  , position :: Position
  }

tmpScore0 :: List ScoreMorcel
tmpScore0 = Nil

tmpScore :: List ScoreMorcel
tmpScore = { column: C4, appearsAt: Beats 0.0, position: Position2 }
    : { column: C8, appearsAt: Beats 2.0, position: Position3 }
    : { column: C8, appearsAt: Beats 3.0, position: Position1 }
    : { column: C8, appearsAt: Beats 5.0, position: Position3 }
    : { column: C8, appearsAt: Beats 6.0, position: Position2 }
    : { column: C8, appearsAt: Beats 8.0, position: Position1 }
    : { column: C8, appearsAt: Beats 9.0, position: Position4 }
    : { column: C8, appearsAt: Beats 11.0, position: Position3 }
    : { column: C8, appearsAt: Beats 12.0, position: Position1 }
    : { column: C3, appearsAt: Beats 14.0, position: Position1 }
    : { column: C3, appearsAt: Beats 15.0, position: Position4 }
    : { column: C3, appearsAt: Beats 17.0, position: Position2 }
    : { column: C3, appearsAt: Beats 18.0, position: Position4 }
    : { column: C3, appearsAt: Beats 20.0, position: Position3 }
    : { column: C3, appearsAt: Beats 21.0, position: Position1 }
    : { column: C3, appearsAt: Beats 23.0, position: Position2 }
    : { column: C3, appearsAt: Beats 24.0, position: Position1 }
    : { column: C3, appearsAt: Beats 26.0, position: Position2 }
    : { column: C3, appearsAt: Beats 27.0, position: Position3 }
    : { column: C3, appearsAt: Beats 29.0, position: Position4 }
    : Nil
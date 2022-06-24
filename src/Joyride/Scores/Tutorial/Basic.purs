module Joyride.Scores.Tutorial.Basic where

import Prelude

import Bolson.Core (Child(..), dyn, envy, fixed)
import Control.Alt ((<|>))
import Control.Comonad.Cofree (Cofree, (:<))
import Control.Plus (empty)
import Data.DateTime.Instant (unInstant)
import Data.FastVect.FastVect (Vect, cons)
import Data.FastVect.FastVect as V
import Data.Foldable (oneOfMap)
import Data.FunctorWithIndex (mapWithIndex)
import Data.Lens (over, traversed)
import Data.Lens.Record (prop)
import Data.List (List(..), span, (:))
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Time.Duration (Milliseconds(..), Seconds(..))
import Effect (Effect)
import FRP.Behavior (Behavior, sample_)
import FRP.Event (Event, keepLatest, memoize)
import FRP.Event.Class (bang)
import FRP.Event.Time as LocalTime
import Joyride.Audio.Basic as BasicA
import Joyride.Constants.Tutorial (tutorialStartOffset)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Schedule (oneOff, scheduleCf)
import Joyride.Ocarina (AudibleEnd(..))
import Joyride.Scores.Tutorial.Base as Base
import Joyride.Visual.Basic as BasicV
import Joyride.Visual.BasicWord as BasicW
import Ocarina.WebAPI (BrowserAudioBuffer)
import Record (union)
import Rito.Color (RGB(..))
import Rito.Core (ASceneful, CSS3DObject, Instance, toScene)
import Rito.Geometries.Box (box)
import Rito.Materials.MeshPhongMaterial (meshPhongMaterial)
import Rito.RoundRobin (InstanceId, Semaphore(..), roundRobinInstancedMesh)
import Safe.Coerce (coerce)
import Type.Proxy (Proxy(..))
import Types (Beats(..), Column(..), HitBasicMe, JMilliseconds(..), MakeBasics, RateInfo, beatToTime)

type ACU =
  { appearsAt :: Beats
  , b0 :: Beats
  , b1 :: Beats
  , b2 :: Beats
  , b3 :: Beats
  , column :: Column
  , uniqueId :: Int
  }

-- words
-- 🥁
-- 👏
-- ⚡
-- 🤖
-- 🪘

infixr 4 cons as :/

lookAhead :: Beats
lookAhead = Beats 0.1

singleBeat
  :: { buffer :: Behavior BrowserAudioBuffer
     , silence :: BrowserAudioBuffer
     , myBeat :: Beats
     }
  -> { startsAt :: Beats, audio :: Event RateInfo -> AudibleEnd }
singleBeat { buffer, silence, myBeat } =
  { startsAt: myBeat
  , audio: \riE -> AudibleEnd
      ( envy
          ( memoize
              ( oneOff identity
                  ( riE <#> \ri ->
                      if ri.beats + lookAhead >= myBeat then Just (beatToTime ri myBeat)
                      else Nothing
                  )
              )
              \oa -> BasicA.basic
                { buffer: sample_ (buffer) oa
                , offAt: empty
                , silence
                , onAt: coerce oa
                }
          )

      )
  }

severalBeats
  :: { b0 :: Beats
     , b1 :: Beats
     , b2 :: Beats
     , b3 :: Beats
     , silence :: BrowserAudioBuffer
     }
  -> Vect 4 { startsAt :: Beats, audio :: Event RateInfo -> AudibleEnd }
severalBeats { b0, b1, b2, b3, silence } = singleBeat (f $ b0)
  :/ singleBeat (f $ b1)
  :/ singleBeat (f $ b2)
  :/ singleBeat (f $ b3)
  :/ V.empty
  where
  f
    :: Beats
    -> { buffer :: Behavior BrowserAudioBuffer
       , silence :: BrowserAudioBuffer
       , myBeat :: Beats
       }
  f myBeat =
    { myBeat
    , buffer: pure silence
    , silence
    }

tutorialBasics :: forall lock payload. { | MakeBasics () } -> ASceneful lock payload
tutorialBasics makeBasics =
  ( fixed
      [ toScene $ roundRobinInstancedMesh
          { instancedMesh: makeBasics.threeDI.instancedMesh
          , matrix4: makeBasics.threeDI.matrix4
          , mesh: makeBasics.threeDI.mesh
          }
          100
          (box { box: makeBasics.threeDI.boxGeometry })
          -- ( meshStandardMaterial
          --     -- { map: textures.hockeyCOL
          --     -- , aoMap: textures.hockeyAO
          --     -- , displacementMap: textures.hockeyDISP
          --     -- , displacementScale: 0.1
          --     -- , normalMap: textures.hockeyNRM
          --     -- , roughnessMap: textures.hockeyGLOSS
          --     -- }
          --     { meshStandardMaterial: makeBasics.threeDI.meshStandardMaterial
          --     , color: makeBasics.mkColor (RGB 0.798 0.927 0.778)
          --     , roughness: 0.0
          --     }
          --     empty
          -- )
          ( meshPhongMaterial
              { meshPhongMaterial: makeBasics.threeDI.meshPhongMaterial
              , color: makeBasics.mkColor (RGB 0.798 0.927 0.778)
              }
              empty
          )
          (children transformBasic)
      , toScene $ dyn (children transformBasicWord)
      ]
  )

  where
  children :: forall a. (ACU -> Event a) -> Event (Event a)
  children f = keepLatest (map (oneOfMap bang) (eventList f))

  eventList :: forall a. (ACU -> Event a) -> Event (List (Event a))
  eventList f = scheduleCf (go f score) (_.rateInfo <$> makeBasics.animatedStuff)

  transformBasic :: ACU -> Event (Semaphore (InstanceId -> Instance lock payload))
  transformBasic input =
    ( map Acquire
        ( BasicV.basic
            ( makeBasics `union` input `union`
                { beats: severalBeats
                    { b0: input.b0
                    , b1: input.b1
                    , b2: input.b2
                    , b3: input.b3
                    , silence: makeBasics.silence
                    }
                , uniqueId: input.uniqueId
                }
            )
        )
    ) <|>
      ( keepLatest $ (LocalTime.withTime (bang unit)) <#> \{ time } -> lowPrioritySchedule makeBasics.lpsCallback
          (JMilliseconds 10000.0 + (coerce $ unInstant time))
          (bang $ Release)
      )

  transformBasicWord :: ACU -> Event (Child Void (CSS3DObject lock payload) Effect lock)
  transformBasicWord input =
    ( bang $ Insert
        ( BasicW.basicWord
            ( makeBasics `union` input `union`
                { beats: severalBeats
                    { b0: input.b0
                    , b1: input.b1
                    , b2: input.b2
                    , b3: input.b3
                    , silence: makeBasics.silence
                    }
                , uniqueId: input.uniqueId
                -- empty for now, fill this in later
                , someonePlayedMe: (empty :: Event HitBasicMe)
                }
            )
        )
    ) <|>
      ( keepLatest $ (LocalTime.withTime (bang unit)) <#> \{ time } -> lowPrioritySchedule makeBasics.lpsCallback
          (JMilliseconds 10000.0 + (coerce $ unInstant time))
          (bang $ Remove)
      )

  go :: forall a. (ACU -> Event a) -> List ACU -> RateInfo -> Cofree ((->) RateInfo) (List (Event a))
  go f Nil _ = Nil :< go f Nil
  go f l { beats } = do
    let
      { init, rest } = span (\{ appearsAt } -> appearsAt <= beats + lookAhead) l
    (f <$> init) :< go f rest
  score = mapWithIndex (\uniqueId x -> union { uniqueId } x) $ fromBase Base.beats

type ScoreMorcel =
  { appearsAt :: Beats
  , b0 :: Beats
  , b1 :: Beats
  , b2 :: Beats
  , b3 :: Beats
  , column :: Column
  }

tmpScore :: List ScoreMorcel
tmpScore = { column: C4, appearsAt: Beats 0.0, b0: Beats 1.0, b1: Beats 2.0, b2: Beats 3.0, b3: Beats 4.0 } : Nil

predC :: Column -> Column
predC C15 = C14
predC C14 = C13
predC C13 = C12
predC C12 = C11
predC C11 = C10
predC C10 = C9
predC C9 = C8
predC C8 = C7
predC C7 = C6
predC C6 = C5
predC C5 = C4
predC C4 = C3
predC C3 = C2
predC C2 = C1
predC C1 = C0
predC C0 = C15

succC :: Column -> Column
succC C0 = C1
succC C1 = C2
succC C2 = C3
succC C3 = C4
succC C4 = C5
succC C5 = C6
succC C6 = C7
succC C7 = C8
succC C8 = C9
succC C9 = C10
succC C10 = C11
succC C11 = C12
succC C12 = C13
succC C13 = C14
succC C14 = C15
succC C15 = C0

fromBase :: List Base.BeatInstruction -> List ScoreMorcel
fromBase = addStartOffset >>> go true C8
  where
  go tf col (a : b : c : d : e) =
    { appearsAt: Beats (a.t - 1.0)
    , b0: Beats a.t
    , b1: Beats b.t
    , b2: Beats c.t
    , b3: Beats d.t
    , column: col
    } : go
      ( case col of
          C15 -> false
          C0 -> true
          _ -> tf
      )
      ( case col of
          C15 -> C14
          C0 -> C1
          x -> (if tf then succC else predC) x
      )
      (b : c : d : e)
  go _ _ _ = Nil
  addStartOffset = over (traversed <<< prop (Proxy :: _ "t")) (add (unwrap tutorialStartOffset))
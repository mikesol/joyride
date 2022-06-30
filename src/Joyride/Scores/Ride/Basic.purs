module Joyride.Scores.Ride.Basic where

import Prelude

import Bolson.Core (Child(..), dyn, envy, fixed)
import Control.Alt ((<|>))
import Control.Comonad.Cofree (Cofree, (:<))
import Control.Plus (empty)
import Data.DateTime.Instant (unInstant)
import Data.FastVect.FastVect (Vect, cons)
import Data.FastVect.FastVect as V
import Data.Filterable (filter, filterMap)
import Data.Foldable (oneOfMap)
import Data.Function (on)
import Data.FunctorWithIndex (mapWithIndex)
import Data.List (List(..), sortBy, span, (:))
import Data.List as List
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Time.Duration (Milliseconds(..), Seconds(..))
import Data.Tuple (Tuple(..), fst, snd)
import Effect (Effect)
import FRP.Behavior (Behavior, sample_)
import FRP.Event (Event, keepLatest, memoize)
import FRP.Event.Class (bang)
import FRP.Event.Time as LocalTime
import Joyride.Audio.Basic as BasicA
import Joyride.Constants.Ride (rideStartOffset)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Schedule (oneOff, scheduleCf)
import Joyride.Ocarina (AudibleEnd(..))
import Joyride.Scores.Ride.Base (ButterflyDrum(..), ButterflyLyric, Butterflyable(..), TCID, b2tcid, l2s, score)
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
import Types (Beats(..), Column(..), HitBasicMe, JMilliseconds(..), MakeBasics, RateInfo, beatToTime)

type ACU =
  { appearsAt :: Beats
  , b0 :: Beats
  , b1 :: Beats
  , b2 :: Beats
  , b3 :: Beats
  , text :: Vect 4 String
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

rideBasics :: forall lock payload. { | MakeBasics () } -> ASceneful lock payload
rideBasics makeBasics =
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
      -- longer semaphore cuz screen time is longer for certain ictuses
      ( keepLatest $ (LocalTime.withTime (bang unit)) <#> \{ time } -> lowPrioritySchedule makeBasics.lpsCallback
          (JMilliseconds 15000.0 + (coerce $ unInstant time))
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
                , text: input.text
                -- empty for now, fill this in later
                , someonePlayedMe: (empty :: Event HitBasicMe)
                }
            )
        )
    ) <|>
      ( keepLatest $ (LocalTime.withTime (bang unit)) <#> \{ time } -> lowPrioritySchedule makeBasics.lpsCallback
          (JMilliseconds 15000.0 + (coerce $ unInstant time))
          (bang $ Remove)
      )

  go :: forall a. (ACU -> Event a) -> List ACU -> RateInfo -> Cofree ((->) RateInfo) (List (Event a))
  go f Nil _ = Nil :< go f Nil
  go f l { beats } = do
    let
      { init, rest } = span (\{ appearsAt } -> appearsAt <= beats + lookAhead) l
    (f <$> init) :< go f rest
  score = mapWithIndex (\uniqueId x -> union { uniqueId } x) $ sortBy (compare `on` _.b0) (bassDrums1 <> bassDrums2 <> bassDrums3 <> lyrics1 <> lyrics2 <> {- more stuff? -}  Nil)

type ScoreMorcel =
  { appearsAt :: Beats
  , b0 :: Beats
  , b1 :: Beats
  , b2 :: Beats
  , b3 :: Beats
  , text :: Vect 4 String
  , column :: Column
  }

v4 :: forall a. a -> a -> a -> a -> Vect 4 a
v4 a b c d = V.cons a $ V.cons b $ V.cons c $ V.cons d $ V.empty

tmpScore :: List ScoreMorcel
tmpScore = { column: C4, text: pure "✩", appearsAt: Beats 0.0, b0: Beats 1.0, b1: Beats 2.0, b2: Beats 3.0, b3: Beats 4.0 } : Nil

lyrics' :: Column -> List { t :: Number, c :: ButterflyLyric } -> List ScoreMorcel
lyrics' column = go
  where
  rso = unwrap rideStartOffset
  go (a : b : c : d : e) = { column, text: v4 (l2s a.c) (l2s b.c) (l2s c.c) (l2s d.c), appearsAt: Beats ((a.t - (b.t - a.t)) + rso), b0: Beats (a.t + rso), b1: Beats (b.t + rso), b2: Beats (c.t + rso), b3: Beats (d.t + rso) } : go (b : c : d : e)
  go _ = Nil

lyricsMod :: Column -> Int -> Int -> List ScoreMorcel
lyricsMod c n md = lyrics' c
  ( map snd $ filter (fst >>> (_ `mod` md) >>> eq n) $ mapWithIndex Tuple $ List.fromFoldable
      ( filterMap
          ( \i -> case i.c of
              L x -> Just { t: i.t, c: x }
              _ -> Nothing
          )
          score
      )
  )

lyrics1 :: List ScoreMorcel
lyrics1 = lyricsMod C7 0 2

lyrics2 :: List ScoreMorcel
lyrics2 = lyricsMod C8 1 2

bassDrums' :: Column -> List TCID -> List ScoreMorcel
bassDrums' column = go
  where
  rso = unwrap rideStartOffset
  go (a : b : c : d : e) = { column, text: pure "✩", appearsAt: Beats ((a.t - (b.t - a.t)) + rso), b0: Beats (a.t + rso), b1: Beats (b.t + rso), b2: Beats (c.t + rso), b3: Beats (d.t + rso) } : go (b : c : d : e)
  go _ = Nil

bassDrums = bassDrums' C7 (List.fromFoldable (b2tcid (D Dbd))) :: List ScoreMorcel

bassDrumsMod :: Column -> Int -> Int -> List ScoreMorcel
bassDrumsMod c n md = bassDrums' c (map snd $ filter (fst >>> (_ `mod` md) >>> eq n) $ mapWithIndex Tuple $ List.fromFoldable (b2tcid (D Dbd)))

bassDrums1 :: List ScoreMorcel
bassDrums1 = bassDrumsMod C6 0 2

bassDrums2 :: List ScoreMorcel
bassDrums2 = bassDrumsMod C9 1 2

bassDrums3 :: List ScoreMorcel
bassDrums3 = Nil -- bassDrumsMod C9 2 3 :: List ScoreMorcel
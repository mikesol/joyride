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
import Data.List (List(..), span, (:))
import Data.List as List
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.Time.Duration (Milliseconds(..), Seconds(..))
import Data.Tuple.Nested ((/\))
import FRP.Behavior (Behavior, sample_)
import FRP.Event (Event, keepLatest, memoize)
import FRP.Event.Time as LocalTime
import Joyride.Audio.Basic as BasicA
import Joyride.Constants.Audio (startOffset)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Schedule (oneOff, scheduleCf)
import Joyride.Ocarina (AudibleEnd(..))
import Joyride.Scores.Tutorial.Base (mb2info)
import Joyride.Scores.Tutorial.Base as Base
import Joyride.Visual.Basic as BasicV
import Ocarina.WebAPI (BrowserAudioBuffer)
import Record (union)
import Rito.Core (ASceneful, Mesh, toScene)
import Safe.Coerce (coerce)
import Types (Beats(..), Column(..), JMilliseconds(..), MakeBasics, RateInfo, beatToTime)

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
      [ toScene $ dyn (children transformBasic)
      ]
  )

  where
  children :: forall a. (ACU -> Event a) -> Event (Event a)
  children f = keepLatest (map (oneOfMap pure) (eventList f))

  eventList :: forall a. (ACU -> Event a) -> Event (List (Event a))
  eventList f = scheduleCf (go f score) (_.rateInfo <$> makeBasics.animatedStuff)

  transformBasic :: ACU -> Event (Child Void (Mesh lock payload) lock)
  transformBasic input =
    ( map Insert
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
      ( keepLatest $ (LocalTime.withTime (pure unit)) <#> \{ time } -> lowPrioritySchedule makeBasics.lpsCallback
          (JMilliseconds 10000.0 + (coerce $ unInstant time))
          (pure $ Remove)
      )

  go :: forall a. (ACU -> Event a) -> List ACU -> RateInfo -> Cofree ((->) RateInfo) (List (Event a))
  go f Nil _ = Nil :< go f Nil
  go f l { beats } = do
    let
      { init, rest } = span (\{ appearsAt } -> appearsAt <= beats + lookAhead) l
    (f <$> init) :< go f rest
  score = mapWithIndex (\uniqueId x -> union { uniqueId } x) $ fromBase2 Base.beats2

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

fromBase2 :: Array Base.BeatInstruction2 -> List ScoreMorcel
fromBase2 = List.fromFoldable <<< map
  ( \(c /\ x /\ y /\ z /\ w) ->
      { appearsAt: Beats ((mb2info x).t + tso - 2.0 * ((mb2info y).t - (mb2info x).t))
      , b0: Beats ((mb2info x).t + tso)
      , b1: Beats ((mb2info y).t + tso)
      , b2: Beats ((mb2info z).t + tso)
      , b3: Beats ((mb2info w).t + tso)
      , column: c
      }
  )
  where
  tso = unwrap startOffset

module Joyride.Scores.Ride.Basic where

import Prelude

import Bolson.EffectFn.Core (Child(..), dyn, envy, fixed)
import Control.Alt ((<|>))
import Control.Comonad.Cofree (Cofree, (:<))
import Control.Plus (empty)
import Data.DateTime.Instant (unInstant)
import Data.FastVect.FastVect (Vect, cons)
import Data.FastVect.FastVect as V
import Data.Foldable (oneOfMap)
import Data.Function (on)
import Data.FunctorWithIndex (mapWithIndex)
import Data.List (List(..), sortBy, span, (:))
import Data.List as List
import Data.Maybe (Maybe(..))
import Data.Time.Duration (Milliseconds(..), Seconds(..))
import Effect (Effect)
import FRP.Behavior (ABehavior, sample_)
import FRP.Event.EffectFn (Event, keepLatest, memoize)
import FRP.Event.EffectFn.Time as LocalTime
import Joyride.Audio.Basic as BasicA
import Joyride.Constants.Audio (startOffset)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.FRP.Schedule (oneOff, scheduleCf)
import Joyride.Ocarina (AudibleEnd(..))
import Joyride.Visual.Basic as BasicV
import Joyride.Visual.BasicWord as BasicW
import Ocarina.WebAPI (BrowserAudioBuffer)
import Record (union)
import Rito.Core (ASceneful, CSS3DObject, Mesh, toScene)
import Safe.Coerce (coerce)
import Types (BasicEventV0', Beats(..), Column(..), HitBasicMe, JMilliseconds(..), MakeBasics, RateInfo, beatToTime)

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

infixr 4 cons as :/

lookAhead :: Beats
lookAhead = Beats 0.1

singleBeat
  :: { buffer :: ABehavior Event BrowserAudioBuffer
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
    -> { buffer :: ABehavior Event BrowserAudioBuffer
       , silence :: BrowserAudioBuffer
       , myBeat :: Beats
       }
  f myBeat =
    { myBeat
    , buffer: pure silence
    , silence
    }

rideBasics :: forall lock payload. Array BasicEventV0' -> { | MakeBasics () } -> ASceneful lock payload
rideBasics bevs makeBasics =
  ( fixed
      [ toScene $ dyn (children transformBasic)
      -- , toScene $ dyn (children transformBasicWord)
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
      -- longer semaphore cuz screen time is longer for certain ictuses
      ( keepLatest $ (LocalTime.withTime (pure unit)) <#> \{ time } -> lowPrioritySchedule makeBasics.lpsCallback
          (JMilliseconds 15000.0 + (coerce $ unInstant time))
          (pure $ Remove)
      )

  transformBasicWord :: ACU -> Event (Child Void (CSS3DObject lock payload) lock)
  transformBasicWord input =
    ( pure $ Insert
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
      ( keepLatest $ (LocalTime.withTime (pure unit)) <#> \{ time } -> lowPrioritySchedule makeBasics.lpsCallback
          (JMilliseconds 15000.0 + (coerce $ unInstant time))
          (pure $ Remove)
      )

  go :: forall a. (ACU -> Event a) -> List ACU -> RateInfo -> Cofree ((->) RateInfo) (List (Event a))
  go f Nil _ = Nil :< go f Nil
  go f l { beats } = do
    let
      { init, rest } = span (\{ appearsAt } -> appearsAt <= beats + lookAhead) l
    (f <$> init) :< go f rest
  -- we don't use text for now so just put in a dummy value
  score =
    mapWithIndex
      ( \uniqueId x ->
          { uniqueId
          , appearsAt: (Beats $ ((3.0 * x.marker1Time) - (2.0 * x.marker2Time))) + startOffset
          , b0: (Beats $ x.marker1Time) + startOffset
          , b1: (Beats $ x.marker2Time) + startOffset
          , b2: (Beats $ x.marker3Time) + startOffset
          , b3: (Beats $ x.marker4Time) + startOffset
          , text: pure ""
          , column: x.column
          }
      ) $ sortBy (compare `on` _.marker1Time) (List.fromFoldable bevs)

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

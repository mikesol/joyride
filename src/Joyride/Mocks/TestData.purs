module Joyride.Mocks.TestData where

import Prelude

import Bolson.Core (Child(..), dyn, envy)
import Control.Comonad.Cofree ((:<))
import Control.Plus (empty)
import Data.FastVect.FastVect (Vect, cons)
import Data.FastVect.FastVect as V
import Data.Foldable (oneOfMap)
import Data.List (List(..), span, (:))
import Data.Maybe (Maybe(..))
import Data.Time.Duration (Seconds(..))
import Effect (Effect)
import FRP.Behavior (Behavior, sample_)
import FRP.Event (Event, keepLatest, memoize)
import FRP.Event.Class (bang)
import Foreign.Object as Object
import Joyride.Audio.Basic as BasicA
import Joyride.FRP.Behavior (misbehavior)
import Joyride.FRP.Schedule (oneOff, scheduleCf)
import Joyride.Visual.Basic as BasicV
import Joyride.Wags (AudibleEnd(..))
import Record (union)
import Rito.Core (ASceneful, Mesh, toScene)
import Safe.Coerce (coerce)
import Types (Beats(..), Column(..), MakeBasics, RateInfo, beatToTime)
import WAGS.WebAPI (BrowserAudioBuffer)

infixr 4 cons as :/
infixr 4 union as |+|

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
  :: { startsAt :: Beats
     , silence :: BrowserAudioBuffer
     , buffers :: Behavior (Object.Object BrowserAudioBuffer)
     }
  -> Vect 4 { startsAt :: Beats, audio :: Event RateInfo -> AudibleEnd }
severalBeats { startsAt, buffers, silence } = singleBeat (f "kick" $ Beats 0.0)
  :/ singleBeat (f "hihat" $ Beats 1.0)
  :/ singleBeat (f "note" $ Beats 2.0)
  :/ singleBeat (f "tambourine" $ Beats 3.0)
  :/ V.empty
  where
  f
    :: String
    -> Beats
    -> { buffer :: Behavior BrowserAudioBuffer
       , silence :: BrowserAudioBuffer
       , myBeat :: Beats
       }
  f name offset =
    { myBeat: startsAt + offset
    , buffer: misbehavior (Object.lookup name) buffers
    , silence
    }

mockBasics :: forall lock payload. { | MakeBasics () } -> ASceneful lock payload
mockBasics makeBasics = toScene (dyn children)

  where
  children = keepLatest $ map (oneOfMap bang) eventList
  eventList = scheduleCf (go score) makeBasics.rateInfo

  transform :: _ -> Event (Child Void (Mesh lock payload) Effect lock)
  transform input = bang $ Insert
    ( BasicV.basic
        ( makeBasics |+| input |+|
            { beats: severalBeats
                { startsAt: input.appearsAt + Beats 1.0
                , silence: makeBasics.silence
                , buffers: makeBasics.buffers
                }
            }
        )
    )
  go Nil _ = Nil :< go Nil
  go l { beats } = do
    let
      { init, rest } = span (\{ appearsAt } -> appearsAt <= beats + lookAhead) l
    (transform <$> init) :< go rest
  score = { column: C4, appearsAt: Beats 0.0 }
    : { column: C3, appearsAt: Beats 2.0 }
    : { column: C2, appearsAt: Beats 3.0 }
    : { column: C1, appearsAt: Beats 5.0 }
    : { column: C0, appearsAt: Beats 6.0 }
    : { column: C1, appearsAt: Beats 8.0 }
    : { column: C2, appearsAt: Beats 9.0 }
    : { column: C3, appearsAt: Beats 11.0 }
    : { column: C4, appearsAt: Beats 12.0 }
    : { column: C5, appearsAt: Beats 14.0 }
    : { column: C6, appearsAt: Beats 15.0 }
    : { column: C7, appearsAt: Beats 17.0 }
    : { column: C8, appearsAt: Beats 18.0 }
    : { column: C9, appearsAt: Beats 20.0 }
    : { column: C10, appearsAt: Beats 21.0 }
    : { column: C11, appearsAt: Beats 23.0 }
    : { column: C12, appearsAt: Beats 24.0 }
    : { column: C13, appearsAt: Beats 26.0 }
    : { column: C14, appearsAt: Beats 27.0 }
    : { column: C15, appearsAt: Beats 29.0 }
    : Nil

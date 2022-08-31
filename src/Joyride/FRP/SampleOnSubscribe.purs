module Joyride.FRP.SampleOnSubscribe where

import Prelude

import FRP.Behavior (ABehavior, sample_)
import FRP.Event.EffectFn (Event)

sampleOnSubscribe :: ABehavior Event ~> Event
sampleOnSubscribe b = sample_ b (pure unit)

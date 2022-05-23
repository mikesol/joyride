module Joyride.FRP.Behavior where

import Prelude

import Effect.Ref as Ref
import FRP.Behavior (Behavior, behavior)
import FRP.Event (makeEvent, subscribe)

refToBehavior :: Ref.Ref ~> Behavior
refToBehavior r = behavior \e -> makeEvent \k -> subscribe e \f -> Ref.read r >>=
  (k <<< f)
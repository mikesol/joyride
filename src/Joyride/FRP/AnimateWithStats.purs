module Joyride.FRP.AnimateWithStats where

import Prelude

import Effect.Ref as Ref
import Effect.Uncurried (runEffectFn1)
import FRP.Event (Event, makeEvent)
import Joyride.Stats (Stats, beginStats, endStats)
import Web.HTML (window)
import Web.HTML.Window (requestAnimationFrame)

animationFrameEventWithStats :: Stats -> Event Unit
animationFrameEventWithStats stats = makeEvent \k -> do
  w <- window
  running <- Ref.new true
  let
    fx = void $ flip requestAnimationFrame w do
      runEffectFn1 beginStats stats
      r' <- Ref.read running
      when r' do
        k unit
        fx
      runEffectFn1 endStats stats
  fx
  pure $ Ref.write false running

module Joyride.Debug where

import Prelude

import FRP.Event (Event, sampleOn_)

debugX :: forall a. Boolean -> Event a -> Event Unit
debugX tf e = if tf then void e else pure unit

debugX' :: forall a r. Boolean -> Event a -> Event r -> Event a
debugX' tf e r = if tf then sampleOn_ e r else e
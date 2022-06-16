module Joyride.Rito where

import Rito.Core (Scene, ASceneful, AMesh)

newtype AScenefulEnd = AScenefulEnd (forall lock payload. ASceneful lock payload)
newtype SceneEnd = SceneEnd (forall lock payload. Scene lock payload)
newtype AMeshEnd = AMeshEnd (forall lock payload. AMesh lock payload)

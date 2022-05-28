module Joyride.Rito where

import Rito.Core (AScene, ASceneful, AMesh)

newtype AScenefulEnd = AScenefulEnd (forall lock payload. ASceneful lock payload)
newtype ASceneEnd = ASceneEnd (forall lock payload. AScene lock payload)
newtype AMeshEnd = AMeshEnd (forall lock payload. AMesh lock payload)

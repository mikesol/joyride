module Joyride.Ocarina where

import Prelude

import Data.Newtype (class Newtype)
import Data.Typelevel.Num (D2)
import Data.Variant (Variant)
import FRP.Event.EffectFn (Event)
import Ocarina.Core (AudioOnOff(..), Audible, AudibleChild, _off, _on)
import Ocarina.Properties as P

onAt
  :: forall nt v
   . Newtype nt (Variant (onOff :: AudioOnOff | v))
  => Event Number
  -> Event nt
onAt = map (\o -> P.onOff $ AudioOnOff $ { o, x: _on })

offAt
  :: forall nt v
   . Newtype nt (Variant (onOff :: AudioOnOff | v))
  => Event Number
  -> Event nt
offAt = map (\o -> P.onOff $ AudioOnOff $ { o, x: _off })

newtype AudibleEnd = AudibleEnd (forall lock payload. Audible D2 lock payload)
newtype AudibleChildEnd = AudibleChildEnd (forall lock payload. AudibleChild D2 lock payload)
module Joyride.Model where

import Prelude

import Data.Maybe (Maybe)
import Data.Typelevel.Num (D2)
import Rito.Core (AMesh)
import Types (Player)
import WAGS.Core (Audible)

type Claimed = { player :: Player }
type PlayerInfo = (player :: Maybe Claimed)
type AudioGraph i = i -> forall lock payload. Audible D2 lock payload
type VisualGraph i = i -> forall lock payload. AMesh lock payload

type BasicAudio = AudioGraph Unit
type BombAudio = AudioGraph Unit
type ComboStartAudio = AudioGraph Unit
type ComboEltAudio = AudioGraph Unit
type BeautifyAudio = AudioGraph Unit
type LeapfrogAudio = AudioGraph Unit
type MandateAudio = AudioGraph Unit
type LaneAudio = AudioGraph Unit
type ArealAudio = AudioGraph Unit

type BasicVisual = VisualGraph Unit
type BombVisual = VisualGraph Unit
type ComboStartVisual = VisualGraph Unit
type ComboEltVisual = VisualGraph Unit
type BeautifyVisual = VisualGraph Unit
type LeapfrogVisual = VisualGraph Unit
type MandateVisual = VisualGraph Unit
type LaneVisual = VisualGraph Unit
type ArealVisual = VisualGraph Unit

data Note
  -- | A collection of four notes
  -- | The player that touches this note discharges it, meaning the rest won't be played.
  -- | Notes don't move through the lines at equal intensity. Each one speeds up or slows down depending on what mark it needs to hit.
  -- | There's a small victory sound for each player when the note is played. We hear it loud and clear for us and in the distance for other players.
  = Basic
      { audio :: BasicAudio
      , visual :: BasicVisual
      , startsAt :: Number
      | PlayerInfo
      }
  -- | Bombs flow through at a steady rate and look subtly different than basic (perhaps when rotating one corner shows that it is a bomb).
  -- | When hit, they trigger a glitch sound and make everything pass through a lowpass filter or some other form of distortion.
  | Bomb
      { audio :: BombAudio
      , visual :: BombVisual
      , startsAt :: Number
      | PlayerInfo
      }
  -- | Combos can only be started by the first player
  -- | When hit, it causes a joyous eruption followed by the combo notes.
  -- | After passing the first player, there's a small evaporation sound as it
  -- | disappears.
  | ComboStart
      { audio :: ComboStartAudio
      , visual :: ComboStartVisual
      , startsAt :: Number
      | PlayerInfo
      }
  -- | Combo elements are only dischargeable by the first player after triggering a combo. As soon as one is missed, the whole thing falls apart. Should be a coherent muscial phrase.
  | ComboElt
      { audio :: ComboEltAudio
      , visual :: ComboEltVisual
      , startsAt :: Number
      | PlayerInfo
      }
  -- | Beautify elements are elective. They are thrown into the game by anyone and move at a steady rate. They clearly differentiate themselves from basic units and bombs to incentivize people to throw them _and_ play them. They have a certain time when they are most valuable and they accrue/lose value moving towards/away from this time.
  | Beautifuy
      { audio :: BeautifyAudio
      , visual :: BeautifyVisual
      , startsAt :: Number
      | PlayerInfo
      }
  -- | Leapfrog causes two players to change places and is accompanied by a small sound.
  | Leapfrog
      { audio :: LeapfrogAudio
      , visual :: LeapfrogVisual
      , startsAt :: Number
      | PlayerInfo
      }
  -- | Mandate is a sound that, when pressed, makes a small sound and sends a required sound to a player. Failure to press it loses points.
  | MandateAsk
      { audio :: MandateAudio
      , visual :: MandateVisual
      , startsAt :: Number
      | PlayerInfo
      }
  | MandateAnswer
      { audio :: MandateAudio
      , visual :: MandateVisual
      , startsAt :: Number
      | PlayerInfo
      }
  | Lane
      { audio :: LaneAudio
      , visual :: LaneVisual
      , startsAt :: Number
      | PlayerInfo
      }
  | Areal
      { audio :: ArealAudio
      , visual :: ArealVisual
      , startsAt :: Number
      | PlayerInfo
      }
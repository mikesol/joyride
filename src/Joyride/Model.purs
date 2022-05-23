module Joyride.Model where

import Prelude

import Data.List (List)
import Data.Maybe (Maybe)
import Data.Time.Duration (Milliseconds)
import Data.Typelevel.Num (D2)
import Rito.Core (AMesh)
import Types (Penalty, Player, Points, Positionable)
import WAGS.Core (Audible)

type Claimed = { player :: Player }
type PlayerInfo = (player :: Maybe Claimed)
type AudioGraph i = i -> forall lock payload. Audible D2 lock payload
type AudioFilter i = i -> forall lock payload. Audible D2 lock payload -> Audible D2 lock payload
type VisualGraph i = i -> forall lock payload. AMesh lock payload

type BasicAudio = AudioGraph Unit
type BasicBeats = { startsAt :: Milliseconds, audio :: BasicAudio }
type BombAudio = AudioGraph Unit
type BombFilter = AudioFilter Unit
type ComboStartAudio = AudioGraph Unit
type ComboEltAudio = AudioGraph Unit
type BeautifyAudio = AudioGraph Unit
type BeautifulAudio = AudioGraph Unit
type LeapfrogAudio = AudioGraph Unit
type MandateAudio = AudioGraph Unit
type LaneAudio = AudioGraph Unit
type ArealAudio = AudioGraph Unit
type ArealFilter = AudioFilter Unit

type BasicVisual = VisualGraph Unit
type BombVisual = VisualGraph Unit
type ComboStartVisual = VisualGraph Unit
type ComboEltVisual = VisualGraph Unit
type BeautifyVisual = VisualGraph Unit
type BeautifulVisual = VisualGraph Unit
type LeapfrogVisual = VisualGraph Unit
type MandateVisual = VisualGraph Unit
type LaneVisual = VisualGraph Unit
type ArealVisual = VisualGraph Unit

newtype SingleComboElt = SingleComboElt
  { audio :: ComboEltAudio
  , visual :: ComboEltVisual
  , startsAt :: Milliseconds
  , points :: Points
  | PlayerInfo
  }

newtype SingleMandateAnswer = SingleMandateAnswer
  { audio :: MandateAudio
  , visual :: MandateVisual
  , startsAt :: Milliseconds
  | PlayerInfo
  }

newtype SingleBeautiful = SingleBeautiful { audio :: BeautifulAudio
      , visual :: BeautifulVisual
      , thrownBy :: Player
      , startsAt :: Milliseconds
      , pointsWhenUnanswered :: Points
      , pointsWhenAnsweredForThrower :: Points
      , pointsWhenAnsweredForReceiver :: Points
      | PlayerInfo
      }

data Note
  -- | A collection of four notes
  -- | The player that touches this note discharges it, meaning the rest won't be played.
  -- | Notes don't move through the lines at equal intensity. Each one speeds up or slows down depending on what mark it needs to hit.
  -- | There's a small victory sound for each player when the note is played. We hear it loud and clear for us and in the distance for other players.
  = Basic
      { beats :: Positionable BasicBeats
      , visual :: BasicVisual
      , points :: Points
      | PlayerInfo
      }
  -- | Bombs flow through at a steady rate and look subtly different than basic (perhaps when rotating one corner shows that it is a bomb).
  -- | When hit, they trigger a glitch sound and make everything pass through a lowpass filter or some other form of distortion.
  | Bomb
      { audio :: BombAudio
      , filter :: BombFilter
      , visual :: BombVisual
      , penalty :: Penalty
      , hitsLineOneAt :: Milliseconds
      | PlayerInfo
      }
  -- | Combos can only be started by the first player
  -- | When hit, it causes a joyous eruption followed by the combo notes.
  -- | After passing the first player, there's a small evaporation sound as it
  -- | disappears.
  | ComboStart
      { audio :: ComboStartAudio
      , visual :: ComboStartVisual
      , hitsLineOneAt :: Milliseconds
      , comboElts :: Milliseconds -> List SingleComboElt
      | PlayerInfo
      }
  -- | Combo elements are only dischargeable by the first player after triggering a combo. As soon as one is missed, the whole thing falls apart. Should be a coherent muscial phrase.
  | ComboElt SingleComboElt
  -- | Beautify elements are elective & separate from the lanes. It is an element we pull in from the side and inject into the game. They are thrown into the game by anyone and move at a steady rate. They clearly differentiate themselves from basic units and bombs to incentivize people to throw them _and_ play them. They have a certain time when they are most valuable and they accrue/lose value moving towards/away from this time.
  | Beautifuy
      { audio :: BeautifyAudio
      , visual :: BeautifyVisual
      , startsAt :: Milliseconds
      , points :: Points
      , injectable :: Milliseconds -> SingleBeautiful
      | PlayerInfo
      }
  -- | The response to beautify
  | Beautiful SingleBeautiful
  -- | Leapfrog causes two players to change places and is accompanied by a small sound.
  | Leapfrog
      { audio :: LeapfrogAudio
      , goTo :: Player
      , visual :: LeapfrogVisual
      , startsAt :: Milliseconds
      | PlayerInfo
      }
  -- | Mandate ask is separate from the lanes. It is an element we pull in from the side and inject into the game. We "mandate" that another player plays this note.  If it is not answered, we get lots of points, and if it is, we still get a few.
  | MandateAsk
      { audio :: MandateAudio
      , visual :: MandateVisual
      , hitsLineOneAt :: Milliseconds
      , playerMandated :: Player
      , answerable :: Milliseconds -> SingleMandateAnswer
      | PlayerInfo
      }
  -- | This is the answer to the mandate.
  | MandateAnswer SingleMandateAnswer
  -- | This is some sort of effect that lasts for a period of time
  -- | Can be a drone, an echo, granular synthesis, etc
  -- | Adds texture/color
  | Lane
      { audio :: LaneAudio
      , visual :: LaneVisual
      , headHitsLineOneAt :: Milliseconds
      , tailHitsLineOneAt :: Milliseconds
      | PlayerInfo
      }
  -- | This is always some sort of base with a filter. It represents a "following"
  -- | motion, meaning something appears that we follow on the screen.
  | Areal
      { audio :: ArealAudio
      , filter :: ArealFilter
      , visual :: ArealVisual
      , startsAt :: Milliseconds
      | PlayerInfo
      }
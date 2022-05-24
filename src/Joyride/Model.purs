module Joyride.Model where

import Prelude

import Control.Comonad.Cofree (Cofree)
import Data.FastVect.FastVect (Vect)
import Data.List (List)
import Data.Maybe (Maybe)
import Data.Time.Duration (Seconds)
import Data.Typelevel.Num (D2)
import Effect (Effect)
import FRP.Event (Event)
import Foreign.Object (Object)
import Joyride.Wags (AudibleEnd)
import Rito.Color (Color, RGB)
import Rito.Core (AMesh)
import Types (Column, Penalty, Player, Points, WindowDims)
import WAGS.Core (Audible)
import WAGS.WebAPI (BrowserAudioBuffer)

type Claimed = { who :: Player }
type PlayerInfo = (player :: Maybe Claimed)
type AudioGraph = forall lock payload. Audible D2 lock payload
type AudioFilter i = i -> forall lock payload. Audible D2 lock payload -> Audible D2 lock payload
type VisualGraph = forall lock payload. AMesh lock payload

type BasicBeats = forall lock payload. Unit -> Vect 4 { startsAt :: Seconds, audio :: Audible D2 lock payload }
type BombAudio = AudioGraph
type BombFilter = AudioFilter Unit
type ComboStartAudio = AudioGraph
type ComboEltAudio = AudioGraph
type BeautifyAudio = AudioGraph
type BeautifulAudio = AudioGraph
type LeapfrogAudio = AudioGraph
type MandateAudio = AudioGraph
type LaneAudio = AudioGraph
type ArealAudio = AudioGraph
type ArealFilter = AudioFilter Unit

type BasicVisual = VisualGraph
type BombVisual = VisualGraph
type ComboStartVisual = VisualGraph
type ComboEltVisual = VisualGraph
type BeautifyVisual = VisualGraph
type BeautifulVisual = VisualGraph
type LeapfrogVisual = VisualGraph
type MandateVisual = VisualGraph
type LaneVisual = VisualGraph
type ArealVisual = VisualGraph

newtype SingleComboElt = SingleComboElt
  { audio :: ComboEltAudio
  , visual :: ComboEltVisual
  , startsAt :: Seconds
  , points :: Points
  | PlayerInfo
  }

newtype SingleMandateAnswer = SingleMandateAnswer
  { audio :: MandateAudio
  , visual :: MandateVisual
  , startsAt :: Seconds
  -- | If a mandate is unfulfilled, we penalize
  , penaltyWhenUnanswered :: Penalty
  | PlayerInfo
  }

newtype SingleBeautiful = SingleBeautiful
  { audio :: BeautifulAudio
  , visual :: BeautifulVisual
  , thrownBy :: Player
  , startsAt :: Seconds
  -- | if not answered, the thrower gets points
  , pointsWhenUnanswered :: Points
  -- | if answered, the asker thrower some points
  , pointsWhenAnsweredForThrower :: Points
  -- | if answered, the receiver gets more points
  , pointsWhenAnsweredForReceiver :: Points
  | PlayerInfo
  }

data Note
  -- | A collection of four notes
  -- | The player that touches this note discharges it, meaning the rest won't be played.
  -- | Notes don't move through the lines at equal intensity. Each one speeds up or slows down depending on what mark it needs to hit.
  -- | There's a small victory sound for each player when the note is played. We hear it loud and clear for us and in the distance for other players.
  = Basic
      { event :: Unit -> BasicVisual
      , column :: Column
      , points :: Points
      , scheduledAt :: Seconds
      | PlayerInfo
      }
  -- | Bombs flow through at a steady rate and look subtly different than basic (perhaps when rotating one corner shows that it is a bomb).
  -- | When hit, they trigger a glitch sound and make everything pass through a lowpass filter or some other form of distortion.
  | Bomb
      { audio :: BombAudio
      , filter :: BombFilter
      , visual :: BombVisual
      , penalty :: Penalty
      , hitsLineOneAt :: Seconds
      | PlayerInfo
      }
  -- | Combos can only be started by the first player
  -- | When hit, it causes a joyous eruption followed by the combo notes.
  -- | After passing the first player, there's a small evaporation sound as it
  -- | disappears.
  | ComboStart
      { audio :: ComboStartAudio
      , visual :: ComboStartVisual
      , hitsLineOneAt :: Seconds
      , comboElts :: Seconds -> List SingleComboElt
      | PlayerInfo
      }
  -- | Combo elements are only dischargeable by the first player after triggering a combo. As soon as one is missed, the whole thing falls apart. Should be a coherent muscial phrase.
  | ComboElt SingleComboElt
  -- | Beautify elements are elective & separate from the lanes. It is an element we pull in from the side and inject into the game. They are thrown into the game by anyone and move at a steady rate. They clearly differentiate themselves from basic units and bombs to incentivize people to throw them _and_ play them. They have a certain time when they are most valuable and they accrue/lose value moving towards/away from this time.
  | Beautifuy
      { audio :: BeautifyAudio
      , visual :: BeautifyVisual
      , startsAt :: Seconds
      , points :: Points
      , injectable :: Seconds -> SingleBeautiful
      | PlayerInfo
      }
  -- | The response to beautify
  | Beautiful SingleBeautiful
  -- | Leapfrog causes two players to change places and is accompanied by a small sound.
  | Leapfrog
      { audio :: LeapfrogAudio
      , goTo :: Player
      , visual :: LeapfrogVisual
      , startsAt :: Seconds
      | PlayerInfo
      }
  -- | Mandate ask is separate from the lanes. It is an element we pull in from the side and inject into the game. We "mandate" that another player plays this note.  If it is not answered, we get lots of points, and if it is, we still get a few.
  | MandateAsk
      { audio :: MandateAudio
      , visual :: MandateVisual
      , hitsLineOneAt :: Seconds
      , playerMandated :: Player
      , answerable :: Seconds -> SingleMandateAnswer
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
      , headHitsLineOneAt :: Seconds
      , tailHitsLineOneAt :: Seconds
      , points :: Points
      | PlayerInfo
      }
  -- | This is always some sort of base with a filter. It represents a "following"
  -- | motion, meaning something appears that we follow on the screen.
  | Areal
      { audio :: ArealAudio
      , filter :: ArealFilter
      , visual :: ArealVisual
      , startsAt :: Seconds
      , points :: Points
      | PlayerInfo
      }

type AudioFiles = Object BrowserAudioBuffer

type NoteFSMI =
  { realTime :: Seconds
  , adjustedTime :: Seconds
  , lookAheadInRealTime :: Seconds
  , buffers :: AudioFiles
  , speed :: Number
  , isMobile :: Boolean
  , initialDims :: WindowDims
  , animationE :: Event Seconds
  , resizeE :: Event WindowDims
  , silence :: BrowserAudioBuffer
  , mkColor :: RGB -> Color
  , pushBasic :: { audio :: AudibleEnd, startsAt :: Seconds } -> Effect Unit
  }

type NoteFSM = NoteFSMI -> Cofree ((->) NoteFSMI) (Array Note)
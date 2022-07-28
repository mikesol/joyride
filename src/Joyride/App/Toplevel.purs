module Joyride.App.Toplevel where

import Prelude

import Control.Plus (empty)
import Data.Map as Map
import Data.Maybe (Maybe)
import Data.Number (pi)
import Data.Time.Duration (Milliseconds)
import Debug (spy)
import Deku.Control (switcher)
import Deku.Core (class Korok, Domable, envy)
import Effect (Effect)
import Effect.Ref as Ref
import FRP.Behavior (Behavior)
import FRP.Event (Event, EventIO, fromEvent)
import FRP.Event.Class (biSampleOn)
import FRP.Event.VBus (V)
import Foreign.Object as Object
import Joyride.App.Editor (editorPage)
import Joyride.App.Explainer (explainerPage)
import Joyride.App.GameHasStarted (gameHasStarted)
import Joyride.App.Loading (loadingPage)
import Joyride.App.OrientationPermission (orientationPermissionPage)
import Joyride.App.Ride (ride)
import Joyride.App.RoomIsFull (roomIsFull)
import Joyride.App.SorryNeedPermission (sorryNeedPermissionPage)
import Joyride.App.Tutorial (tutorial)
import Joyride.FRP.Dedup (dedup)
import Joyride.FRP.StartingWith (startingWith)
import Joyride.Ocarina (AudibleChildEnd)
import Joyride.Scores.Ride.Basic (rideBasics)
import Joyride.Scores.Ride.Leap (rideLeaps)
import Joyride.Scores.Ride.Long (rideLongs)
import Joyride.Scores.Tutorial.Basic (tutorialBasics)
import Joyride.Scores.Tutorial.Leap (tutorialLeaps)
import Joyride.Scores.Tutorial.Long (tutorialLongs)
import Ocarina.WebAPI (BrowserAudioBuffer)
import Rito.CubeTexture as CTL
import Rito.GLTF as GLTFLoader
import Types (CubeTextures, HitBasicMe, HitLeapMe, HitLongMe, JMilliseconds, Models, Negotiation(..), PlayerPositionsF, RateInfo, ReleaseLongMe, ToplevelInfo, RenderingInfo, Success', ThreeDI, WantsTutorial', WindowDims, OpenEditor')
import Web.DOM as Web.DOM
import Web.HTML.Window (RequestIdleCallbackId, Window)

twoPi = 2.0 * pi :: Number

newtype Unsubscribe = Unsubscribe (Effect Unit)

type UIEvents = V
  ( iAmReady :: Unsubscribe
  , rateInfo :: RateInfo
  , basicAudio :: Event AudibleChildEnd
  , leapAudio :: Event AudibleChildEnd
  , render2DElement :: Web.DOM.Element
  , render3DElement :: Web.DOM.Element
  , copiedToClipboard :: Boolean
  )

-- , basicE :: forall lock payload. { | MakeBasics () } -> ASceneful lock payload
-- , leapE :: forall lock payload. { | MakeLeaps () } -> ASceneful lock payload
-- , longE :: forall lock payload. { | MakeLongs () } -> ASceneful lock payload

data TopLevelDisplay
  = TLNeedsOrientation
  | TLWillNotWorkWithoutOrientation
  | TLExplainer
      { cubeTextures :: CubeTextures CTL.CubeTexture
      , models :: Models GLTFLoader.GLTF
      , threeDI :: ThreeDI
      , signOut :: Effect Unit
      , initialDims :: WindowDims
      , cNow :: Effect Milliseconds
      , signedInNonAnonymously :: Event Boolean
      }
  | TLLoading
  | TLGameHasStarted
  | TLRoomIsFull
  | TLWantsTutorial WantsTutorial'
  | TLOpenEditor {oe :: OpenEditor', wt :: WantsTutorial' }
  | TLSuccess Success'

-- effect unit is unsub
data StartState
  = WaitingForMe
  | WaitingForOthers
  | Started JMilliseconds

derive instance Eq StartState

instance Eq TopLevelDisplay where
  eq (TLExplainer _) (TLExplainer _) = true
  eq TLLoading TLLoading = true
  eq TLRoomIsFull TLRoomIsFull = true
  eq TLGameHasStarted TLGameHasStarted = true
  eq (TLSuccess _) (TLSuccess _) = true
  eq _ _ = false

type TextArea :: forall k. (Type -> k) -> Row k
type TextArea f = (requestName :: f Unit, changeText :: f String)

type Unlifted :: forall k. k -> k
type Unlifted a = a

toplevel
  :: forall s m lock payload
   . Korok s m
  => ToplevelInfo
  -> Domable m lock payload
toplevel tli =
  ( dedup
      ( map
          ( \{ loaded, negotiation } -> let __ = spy "inc" {loaded,negotiation} in
              case loaded, negotiation of
                _, NeedsOrientation -> TLNeedsOrientation
                _, WillNotWorkWithoutOrientation -> TLWillNotWorkWithoutOrientation
                _, GetRulesOfGame s -> TLExplainer s
                -- editor does not need to be loaded for now
                -- change if that's the case
                false, _ -> TLLoading
                -- should never reach
                _, PageLoad -> TLLoading
                _, StartingNegotiation -> TLLoading
                _, RoomIsFull -> TLRoomIsFull
                _, GameHasStarted -> TLGameHasStarted
                _, RequestingPlayer -> TLLoading
                _, ReceivedPossibilities -> TLLoading
                _, ClaimFail -> TLRoomIsFull
                true, Success s -> TLSuccess s
                true, WantsTutorial s -> TLWantsTutorial s
                true, OpenEditor s -> TLOpenEditor s
          )
          ( biSampleOn
              (startingWith PageLoad $ fromEvent tli.negotiation)
              ( map { loaded: _, negotiation: _ }
                  (startingWith false $ fromEvent tli.loaded)
              )
          )
      )
  ) # switcher case _ of
    TLNeedsOrientation -> orientationPermissionPage { givePermission: tli.givePermission }
    TLWillNotWorkWithoutOrientation -> sorryNeedPermissionPage
    TLExplainer { cubeTextures, threeDI, cNow, initialDims, signedInNonAnonymously, signOut } -> explainerPage
      { ride: tli.ride
      , editor: tli.editor
      , tutorial: tli.tutorial
      , isMobile: tli.isMobile
      , cnow: cNow
      , signOut
      , resizeE: tli.resizeE
      , initialDims
      , threeDI
      , cubeTextures
      , signedInNonAnonymously
      }
    TLOpenEditor s -> editorPage tli s.oe s.wt
    TLLoading -> loadingPage
    TLRoomIsFull -> roomIsFull
    TLGameHasStarted -> gameHasStarted
    TLWantsTutorial wantsTutorial -> tutorial
      tli
      { basicE: tutorialBasics
      , leapE: tutorialLeaps
      , longE: tutorialLongs
      , bgtrack: "tutorial"
      , isPreviewPage: false
      }
      wantsTutorial
    TLSuccess successful -> ride
      tli
      { basicE: rideBasics [] -- change
      , leapE: rideLeaps []  -- change
      , longE: rideLongs [] -- change
      , bgtrack: "butterflies"
      }
      successful

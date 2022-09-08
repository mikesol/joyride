module Joyride.App.Toplevel where

import Prelude

import Bolson.Control (switcher)
import Data.Array (sortBy)
import Data.Function (on)
import Data.Maybe (Maybe(..))
import Data.Number (pi)
import Data.Time.Duration (Milliseconds)
import Deku.Core (Domable)
import Effect (Effect)
import FRP.Event (Event, filterMap)
import FRP.Event.Class (biSampleOn)
import FRP.Event.VBus (V)
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
import Joyride.Firebase.Opaque (FirebaseAuth, Firestore)
import Joyride.Ocarina (AudibleChildEnd)
import Joyride.Scores.AugmentedTypes (AugmentedEventV0(..), AugmentedEvent_(..))
import Joyride.Scores.Basic (rideBasics)
import Joyride.Scores.Leap (rideLeaps)
import Joyride.Scores.Long (rideLongs)
import Joyride.Scores.Tutorial.Base (tutorialScore)
import Rito.Core (ASceneful)
import Rito.CubeTexture as CTL
import Rito.GLTF as GLTFLoader
import Types (CubeTextures, JMilliseconds, MakeBasics, MakeLeaps, MakeLongs, Models, Negotiation(..), OpenEditor', RateInfo, Success', ThreeDI, ToplevelInfo, Track(..), WantsTutorial', WindowDims)
import Web.DOM as Web.DOM

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
      , fbAuth :: FirebaseAuth
      , firestoreDb :: Firestore
      , initialDims :: WindowDims
      , cNow :: Effect Milliseconds
      , signedInNonAnonymously :: Event Boolean
      }
  | TLLoading
  | TLGameHasStarted
  | TLRoomIsFull
  | TLWantsTutorial WantsTutorial'
  | TLOpenEditor { oe :: OpenEditor', wt :: WantsTutorial' }
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
  :: forall lock payload
   . ToplevelInfo
  -> Domable lock payload
toplevel tli =
  ( dedup
      ( map
          ( \{ loaded, negotiation } ->
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
              (startingWith PageLoad $ tli.negotiation)
              ( map { loaded: _, negotiation: _ }
                  (startingWith false $ tli.loaded)
              )
          )
      )
  ) # switcher case _ of
    TLNeedsOrientation -> orientationPermissionPage { givePermission: tli.givePermission }
    TLWillNotWorkWithoutOrientation -> sorryNeedPermissionPage
    TLExplainer { cubeTextures, threeDI, cNow, initialDims, firestoreDb, fbAuth, signedInNonAnonymously, signOut } -> explainerPage
      { ride: tli.ride
      , editor: tli.editor
      , tutorial: tli.tutorial
      , isMobile: tli.isMobile
      , cnow: cNow
      , signOut
      , resizeE: tli.resizeE
      , initialDims
      , fbAuth
      , firestoreDb
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
      { basicE: makeBasics tutorialScore
      , leapE: makeLeaps tutorialScore
      , longE: makeLongs tutorialScore
      , baseFileOffsetInSeconds: 0.0
      , bgtrack: "tutorial"
      , isPreviewPage: Nothing
      }
      wantsTutorial
    TLSuccess successful ->
      let
        vals = successful.events
        TrackV0 tv0 = successful.track
        basicE = makeBasics vals
        leapE = makeLeaps vals
        longE = makeLongs vals
      in
        ride
          tli
          -- todo: this is a code dup with the editor
          -- merge
          { basicE
          , leapE
          , longE
          , bgtrack: tv0.url
          , baseFileOffsetInSeconds: 0.0
          }
          successful
  where
  makeBasics :: forall l p. Array AugmentedEvent_ -> { | MakeBasics () } -> ASceneful l p
  makeBasics vals = rideBasics
    ( sortBy (compare `on` _.marker1Time)
        ( vals # filterMap case _ of
            AugmentedEventV0 (AugmentedBasicEventV0 be) -> Just be
            _ -> Nothing
        )
    )

  makeLeaps :: forall l p. Array AugmentedEvent_ -> { | MakeLeaps () } -> ASceneful l p
  makeLeaps vals = rideLeaps
    ( sortBy (compare `on` _.marker1Time)
        ( vals # filterMap case _ of
            AugmentedEventV0 (AugmentedLeapEventV0 be) -> Just be
            _ -> Nothing
        )
    )

  makeLongs :: forall l p. Array AugmentedEvent_ -> { | MakeLongs () } -> ASceneful l p
  makeLongs vals = rideLongs
    ( sortBy (compare `on` _.marker1Time)
        ( vals # filterMap case _ of
            AugmentedEventV0 (AugmentedLongEventV0 be) -> Just be
            _ -> Nothing
        )
    )
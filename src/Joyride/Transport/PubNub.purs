module Joyride.Transport.PubNub where

import Prelude

import Control.Monad.Except (runExcept, throwError)
import Control.Promise (Promise, toAffE)
import Data.Either (either)
import Data.Lens (_Just, over)
import Data.Lens.Record (prop)
import Data.Maybe (Maybe)
import Data.Newtype (class Newtype, unwrap)
import Data.Tuple.Nested (type (/\), (/\))
import Effect (Effect)
import Effect.Aff (Aff, Milliseconds(..))
import Effect.Class (liftEffect)
import Effect.Exception (error)
import FRP.Event (Event, create)
import Foreign (Foreign, ForeignError(..), fail)
import Record (union)
import Simple.JSON (readImpl, writeImpl)
import Simple.JSON as JSON
import Type.Proxy (Proxy(..))
import Types (GTP, HitBasicOverTheWire(..), KTP, Player)

data PubNub
data PubNubJS

foreign import _PubNub :: Effect (Promise PubNubJS)

data PlayerAction
  = XPositionKeyboard KTP
  | XPositionMobile GTP
  | HitBasic HitBasicOverTheWire

convertToMs
  :: forall r
   . { time :: Maybe Number | r }
  -> { time :: Maybe Milliseconds | r }
convertToMs = over ((prop (Proxy :: Proxy "time")) <<< _Just) Milliseconds

convertFromMs
  :: forall r
   . { time :: Maybe Milliseconds | r }
  -> { time :: Maybe Number | r }
convertFromMs = over ((prop (Proxy :: Proxy "time")) <<< _Just) unwrap

instance toJSONPubNubPlayerAction :: JSON.ReadForeign PlayerAction where
  readImpl i = do
    { _type } :: { _type :: String } <- readImpl i
    case _type of
      "XPositionKeyboard" -> XPositionKeyboard <<< convertToMs <$> readImpl i
      "XPositionMobile" -> XPositionMobile <<< convertToMs <$> readImpl i
      "HitBasic" -> HitBasic <$> readImpl i
      _ -> fail (ForeignError $ "Could not parse: " <> JSON.writeJSON i)

instance fromJSONPubNubPlayerAction :: JSON.WriteForeign PlayerAction where
  writeImpl (XPositionKeyboard i) = JSON.writeImpl $ union { _type: "XPositionKeyboard" } (convertFromMs i)
  writeImpl (XPositionMobile i) = JSON.writeImpl $ union { _type: "XPositionMobile" } (convertFromMs i)
  writeImpl (HitBasic (HitBasicOverTheWire j)) = JSON.writeImpl $ union { _type: "HitBasic" } j

type PubNubMessage = { player :: Player, action :: PlayerAction }

newtype PubNubEvent = PubNubEvent
  { publisher :: String
  , message :: PubNubMessage
  , timetoken :: Number
  }

derive instance newtypePubNubEvent :: Newtype PubNubEvent _
derive newtype instance toJSONPubNubEvent :: JSON.ReadForeign PubNubEvent
derive newtype instance fromJSONPubNubEvent :: JSON.WriteForeign PubNubEvent

foreign import pubnub_ :: PubNubJS -> (Foreign -> Effect Unit) -> Effect PubNub

pubnub :: PubNubJS -> (PubNubEvent -> Effect Unit) -> Effect PubNub
pubnub pjs f = pubnub_ pjs ((=<<) f <<< either (throwError <<< error <<< show) pure <<< runExcept <<< readImpl)

pubnubEvent :: Aff (PubNub /\ Event PubNubEvent)
pubnubEvent = do
  pjs <- toAffE _PubNub
  liftEffect (create >>= map <$> ((flip (/\)) <<< _.event) <*> (pubnub pjs <<< _.push))

foreign import publish_ :: PubNub -> Foreign -> Effect Unit

publish :: PubNub -> PubNubMessage -> Effect Unit
publish p = publish_ p <<< writeImpl
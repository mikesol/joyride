module Joyride.Transport.PubNub where

import Prelude

import Control.Monad.Except (runExcept, throwError)
import Control.Promise (Promise, toAffE)
import Data.Either (either)
import Data.Newtype (class Newtype)
import Data.Tuple.Nested (type (/\), (/\))
import Effect (Effect)
import Effect.Aff (Aff)
import Effect.Class (liftEffect)
import Effect.Exception (error)
import FRP.Event (Event, create)
import Foreign (Foreign, ForeignError(..), fail)
import Record (union)
import Simple.JSON (readImpl, writeImpl)
import Simple.JSON as JSON
import Types (KTP, Player, GTP)

data PubNub
data PubNubJS

foreign import _PubNub :: Effect (Promise PubNubJS)

data PlayerAction
  = XPositionKeyboard KTP
  | XPositionMobile GTP
  | Hit { column :: Int, offset :: Number }

instance toJSONPubNubPlayerAction :: JSON.ReadForeign PlayerAction where
  readImpl i = do
    { _type } :: { _type :: String } <- readImpl i
    case _type of
      "XPositionKeyboard" -> XPositionKeyboard <$> readImpl i
      "XPositionMobile" -> XPositionMobile <$> readImpl i
      "Hit" -> Hit <$> readImpl i
      _ -> fail (ForeignError $ "Could not parse: " <> JSON.writeJSON i)

instance fromJSONPubNubPlayerAction :: JSON.WriteForeign PlayerAction where
  writeImpl (XPositionKeyboard i) = JSON.writeImpl $ union { _type: "XPositionKeyboard" } i
  writeImpl (XPositionMobile i) = JSON.writeImpl $ union { _type: "XPositionMobile" } i
  writeImpl (Hit i) = JSON.writeImpl $ union { _type: "Hit" } i

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
module Joyride.PubNub where

import Prelude

import Control.Monad.Except (runExcept, throwError)
import Data.Either (either)
import Data.Newtype (class Newtype)
import Data.Tuple.Nested (type (/\), (/\))
import Effect (Effect)
import Effect.Exception (error)
import FRP.Event (Event, create)
import Foreign (Foreign, ForeignError(..), fail)
import Record (union)
import Simple.JSON (readImpl, writeImpl)
import Simple.JSON as JSON
import Types (KTP, Player, GTP)

data PubNub

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

foreign import pubnub_ :: (Foreign -> Effect Unit) -> Effect PubNub

pubnub :: (PubNubEvent -> Effect Unit) -> Effect PubNub
pubnub f = pubnub_ ((=<<) f <<< either (throwError <<< error <<< show) pure <<< runExcept <<< readImpl)

pubnubEvent :: Effect (PubNub /\ Event PubNubEvent)
pubnubEvent = create >>= map <$> ((flip (/\)) <<< _.event) <*> (pubnub <<< _.push)

foreign import publish_ :: PubNub -> Foreign -> Effect Unit

publish :: PubNub -> PubNubMessage -> Effect Unit
publish p = publish_ p <<< writeImpl
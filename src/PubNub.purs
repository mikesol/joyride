module Joyride.PubNub where

import Prelude

import Control.Monad.Except (runExcept, throwError)
import Data.Either (either)
import Data.Newtype (class Newtype)
import Data.Tuple.Nested (type (/\), (/\))
import Data.Variant (Variant)
import Effect (Effect)
import Effect.Exception (error)
import FRP.Event (Event, create)
import Foreign (Foreign, ForeignError(..), fail)
import Simple.JSON (readImpl, writeImpl)
import Simple.JSON as JSON

data PubNub

data Click = Click

instance toJsonClick :: JSON.WriteForeign Click where
  writeImpl = const $ writeImpl "CLICK"

instance fromJsonClick :: JSON.ReadForeign Click where
  readImpl = readImpl >=>
    (if _ then _ else _)
      <$> (eq "CLICK")
      <*> (const $ pure Click)
      <*> (fail <<< ForeignError <<< (<>) "Not CLICK: ")

newtype UIEvent = UIEvent
  ( Variant
      ( mouse ::
          { x :: Number
          , y :: Number
          }
      , click :: Click
      )
  )

derive instance newtypeuiEvent :: Newtype UIEvent _
derive newtype instance toJSONUIEvent :: JSON.ReadForeign UIEvent
derive newtype instance fromJSONUIEvent :: JSON.WriteForeign UIEvent

data PubNubMessage
  = XPosition { pos :: Number }
  | Hit { column :: Int, offset :: Number }

instance toJSONPubNubPubNubMessage :: JSON.ReadForeign PubNubMessage where
  readImpl i = do
    { _type } :: { _type :: String } <- readImpl i
    case _type of
      "xposition" -> XPosition <$> readImpl i
      "hit" -> Hit <$> readImpl i
      _ -> fail (ForeignError $ "Could not parse: " <> JSON.writeJSON i)

instance fromJSONPubNubPubNubMessage :: JSON.WriteForeign PubNubMessage where
  writeImpl (XPosition { pos }) = JSON.writeImpl { _type: "xposition", pos }
  writeImpl (Hit { column, offset }) = JSON.writeImpl  { _type: "hit", column, offset }

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

pubnubEvent :: Effect (Event PubNubEvent /\ PubNub)
pubnubEvent = create >>= map <$> ((/\) <<< _.event) <*> (pubnub <<< _.push)

foreign import publish_ :: PubNub -> Foreign -> Effect Unit

publish :: PubNub -> PubNubMessage -> Effect Unit
publish p = publish_ p <<< writeImpl
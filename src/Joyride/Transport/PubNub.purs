module Joyride.Transport.PubNub where

import Prelude

import Control.Monad.Except (runExcept, throwError)
import Control.Promise (Promise, toAffE)
import Data.Either (either)
import Data.Newtype (class Newtype)
import Effect (Effect)
import Effect.Aff (Aff)
import Effect.Class (liftEffect)
import Effect.Exception (error)
import FRP.Event (Event, create)
import Foreign (Foreign)
import Simple.JSON (readImpl, writeImpl)
import Simple.JSON as JSON
import Types (Channel(..), IAm(..), PlayerAction)

data PubNub
data PubNubJS

foreign import _PubNub :: Effect (Promise PubNubJS)

type PubNubMessage = { iAm :: String, action :: PlayerAction }

newtype PubNubEvent = PubNubEvent
  { publisher :: String
  , message :: PubNubMessage
  , timetoken :: Number
  }

derive instance newtypePubNubEvent :: Newtype PubNubEvent _
derive newtype instance toJSONPubNubEvent :: JSON.ReadForeign PubNubEvent
derive newtype instance fromJSONPubNubEvent :: JSON.WriteForeign PubNubEvent

foreign import pubnub_ :: PubNubJS -> (Foreign -> Effect Unit) -> Effect PubNub

pubnubE :: PubNubJS -> (PubNubEvent -> Effect Unit) -> Effect PubNub
pubnubE pjs f = pubnub_ pjs ((=<<) f <<< either (throwError <<< error <<< show) pure <<< runExcept <<< readImpl)

pubnub
  :: IAm
  -> Channel
  -> Aff
       { event :: Event PubNubEvent
       , publish :: PlayerAction -> Effect Unit
       }
pubnub (IAm iAm) (Channel channel) = do
  pjs <- toAffE _PubNub
  eventIO <- liftEffect create
  pn <- liftEffect $ pubnubE pjs eventIO.push
  pure
    { event: eventIO.event
    , publish: \action -> publish_ pn channel (writeImpl { iAm, action })
    }

foreign import publish_ :: PubNub -> String -> Foreign -> Effect Unit

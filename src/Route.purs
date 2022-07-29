module Route where

import Prelude

import Data.Either (Either(..))
import Data.Generic.Rep (class Generic)
import Data.Maybe (Maybe)
import Data.Show.Generic (genericShow)
import Routing.Duplex (RouteDuplex', as, optional, params, root, string)
import Routing.Duplex.Generic as G
import Routing.Duplex.Parser as P
import Types (Player(..))

data Route = Session { ride :: Maybe String, track :: Maybe String }

derive instance genericRoute :: Generic Route _

instance showRoute :: Show Route where
  show = genericShow

_1234 :: RouteDuplex' String -> RouteDuplex' Player
_1234 = as show \s -> do
  r <- P.int s
  case r of
    1 -> pure Player1
    2 -> pure Player2
    3 -> pure Player3
    4 -> pure Player4
    i -> Left $ "Invalid player: " <> show i

route :: RouteDuplex' Route
route = root $ G.sum
  { "Session": params { ride: optional <<< string, track: optional <<< string }
  }
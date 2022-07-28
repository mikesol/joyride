module Route where

import Prelude

import Data.Either (Either(..))
import Data.Generic.Rep (class Generic)
import Routing.Duplex (RouteDuplex', as, root, segment, string)
import Routing.Duplex.Generic as G
import Routing.Duplex.Generic.Syntax ((/))
import Routing.Duplex.Parser as P
import Types (Player(..))

data Route = Home | Session String String | SessionAndPlayer String String Player

derive instance genericRoute :: Generic Route _

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
  { "Home": G.noArgs
  , "Session": string segment / string segment
  , "SessionAndPlayer": string segment / string segment / _1234 segment
  }
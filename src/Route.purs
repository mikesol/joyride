module Route where

import Prelude hiding ((/))

import Data.Generic.Rep (class Generic)
import Data.Maybe (Maybe(..))
import Data.Show.Generic (genericShow)
import Joyride.Types (Track)
import Routing.Duplex (RouteDuplex', path, root, segment)
import Routing.Duplex (RouteDuplex(..), RouteDuplex', path, root)
import Routing.Duplex.Generic as G
import Routing.Duplex.Generic.Syntax ((/))
import Routing.Duplex.Parser (RouteParser(..), RouteResult(..))

data Route
  = Home
  | OrientationPermissionWithRideRequest String String
  | OrientationPermissionWithoutRideRequest
  | Tutorial
  | TakeRide
  | Settings
  | TakeThisRide (Maybe Track) String
  | Editor
  | Session String String

derive instance genericRoute :: Generic Route _
derive instance eqRoute :: Eq Route

instance showRoute :: Show Route where
  show = genericShow

cached :: forall a. RouteDuplex' (Maybe a)
cached = RouteDuplex (const mempty) $ Chomp (flip Success Nothing)

orientationPermissionPath = "orientation-permission" :: String
tutorialPath = "tutorial" :: String
editorPath = "editor" :: String
ridesPath = "rides" :: String
settingsPath = "settings" :: String

route :: RouteDuplex' Route
route = root $ G.sum
  { "Home": G.noArgs
  , "TakeThisRide": cached / ridesPath / segment
  , "Settings": path settingsPath G.noArgs
  , "TakeRide": path ridesPath G.noArgs
  , "Editor": path editorPath G.noArgs
  , "Tutorial": path tutorialPath G.noArgs
  , "OrientationPermissionWithoutRideRequest": path orientationPermissionPath G.noArgs
  , "OrientationPermissionWithRideRequest": orientationPermissionPath / segment / segment
  , "Session": "r" / segment / segment
  }
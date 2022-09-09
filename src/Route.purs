module Route where

import Prelude hiding ((/))

import Data.Generic.Rep (class Generic)
import Data.Show.Generic (genericShow)
import Routing.Duplex (RouteDuplex', path, root, segment)
import Routing.Duplex.Generic as G
import Routing.Duplex.Generic.Syntax ((/))

data Route
  = Home
  | OrientationPermissionWithRideRequest String String
  | OrientationPermissionWithoutRideRequest
  | Tutorial
  | Editor
  | Session String String

derive instance genericRoute :: Generic Route _
derive instance eqRoute :: Eq Route

instance showRoute :: Show Route where
  show = genericShow

orientationPermissionPath = "orientation-permission" :: String
tutorialPath = "tutorial" :: String
editorPath = "editor" :: String
route :: RouteDuplex' Route
route = root $ G.sum
  { "Home": G.noArgs
  , "Editor": path editorPath G.noArgs
  , "Tutorial": path tutorialPath G.noArgs
  , "OrientationPermissionWithoutRideRequest": path orientationPermissionPath G.noArgs
  , "OrientationPermissionWithRideRequest": orientationPermissionPath / segment / segment
  , "Session": "r" / segment / segment
  }
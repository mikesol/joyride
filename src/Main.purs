module Main where

import Prelude

import Deku.Attribute ((:=))
import Deku.Control (text_)
import Deku.DOM as D
import Deku.Toplevel (runInBodyA)
import Effect (Effect)
import FRP.Event (bang)

main :: Effect Unit
main = runInBodyA [ D.h1 (bang $ D.Class := "text-2xl") (text_ "Hello world") ]

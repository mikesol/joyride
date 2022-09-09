-- This file is intended to be used as a sandbox for web component UIs.
-- _Nothing_ in it is permanent and you should assume it will be modified at
-- _any_ time. Therefore, do not store work-in-progresses in here unless
-- you're comfortable fishing them out of previous git commits.
module Joyride.App.Sandbox where

import Prelude

import Data.Foldable (oneOf)
import Deku.Attribute ((:=))
import Deku.Attributes (klass_)
import Deku.Control (text_)
import Deku.Core (Nut)
import Deku.DOM as D
import Deku.Listeners (slider)
import Joyride.Style (header2Cls, headerCls)

sandbox :: Nut
sandbox = D.div (oneOf [ pure $ D.Class := "h-screen w-screen bg-zinc-900 absolute" ])
  [ D.div (oneOf [ pure $ D.Class := "text-center" ])
      [ D.h2 (klass_ (headerCls <> " p-6")) [ text_ "Settings" ]
      , D.div (oneOf [])
          [ D.ul (pure $ D.Class := "")
              [ D.li (klass_ "p-3")
                  [ D.h1 (klass_ header2Cls) [ text_ "Lateral speed" ]
                  , D.div (klass_ "flex flex-row p-3")
                      [ D.span (klass_ "text-white") [ text_ "🐢" ]
                      , D.input
                          ( oneOf
                              [ slider $ pure (\_ -> pure unit)
                              , klass_ "appearance-none grow h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                              ]
                          )
                          []
                      , D.span (klass_ "text-white") [ text_ "🐇" ]
                      ]
                  ]
              ]

          ]
      ]
  ]
-- This file is intended to be used as a sandbox for web component UIs.
-- _Nothing_ in it is permanent and you should assume it will be modified at
-- _any_ time. Therefore, do not store work-in-progresses in here unless
-- you're comfortable fishing them out of previous git commits.
module Joyride.App.Settings where

import Prelude

import Data.Foldable (oneOf)
import Deku.Attribute ((:=))
import Deku.Attributes (klass_)
import Deku.Control (text_)
import Deku.Core (Nut)
import Deku.DOM as D
import Deku.Listeners (slider)
import Effect.Ref as Ref
import Joyride.Constants.Visual (orientationDampening0To100)
import Joyride.Style (header2Cls, headerCls)
import Types (SettingsNeeds)

settings :: SettingsNeeds -> Nut
settings { dampeningRef } = D.div (oneOf [ pure $ D.Class := "h-screen w-screen bg-zinc-900 absolute" ])
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
                              [ slider $ pure (orientationDampening0To100 >>> flip Ref.write dampeningRef)
                              , klass_ "appearance-none raaaange grow h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
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
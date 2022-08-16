-- This file is intended to be used as a sandbox for web component UIs.
-- _Nothing_ in it is permanent and you should assume it will be modified at
-- _any_ time. Therefore, do not store work-in-progresses in here unless
-- you're comfortable fishing them out of previous git commits.
module Joyride.App.Sandbox where

import Prelude

import Data.Foldable (oneOf)
import Data.Monoid (power)
import Deku.Attribute ((:=))
import Deku.Control (text_)
import Deku.Core (Nut)
import Deku.DOM as D
import Deku.Listeners as DL
import Effect (Effect)
import Joyride.Style (buttonCls, headerCls)

sandbox :: Nut
sandbox = D.div (oneOf [ pure $ D.Class := "h-screen w-screen bg-zinc-900 absolute grid grid-cols-6 grid-rows-6" ])
  [ D.div (oneOf [ pure $ D.Class := "col-start-2 col-end-6 row-start-2 row-end-6 flex flex-col justify-items-center overflow-scroll text-center" ])
      [ D.h2 (pure $ D.Class := headerCls) [ text_ "Choose a ride" ]
      , D.div (oneOf [])
          [ D.ul (pure $ D.Class := "")
              ( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] <#> \id ->
                  D.li_
                    [ D.button
                        ( oneOf
                            [ pure $ D.Class := buttonCls <> " mx-2 pointer-events-auto"
                            , DL.click (pure (pure unit :: Effect Unit))
                            ]
                        )
                        [ text_ (power (show id) 10) ]
                    ]
              )

          ]
      ]
  ]
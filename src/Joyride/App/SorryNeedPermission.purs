module Joyride.App.SorryNeedPermission where

import Prelude

import Data.Foldable (oneOf)
import Deku.Attribute ((:=))
import Deku.Control (text_)
import Deku.Core (Nut)
import Deku.DOM as D

sorryNeedPermissionPage :: Nut
sorryNeedPermissionPage = D.div (oneOf [ pure (D.Class := "absolute") ])
  [ D.div (oneOf [ pure (D.Class := "z-10 absolute grid grid-cols-3 grid-rows-3  place-items-center h-screen w-screen") ])
      [ D.div (pure $ D.Class := "col-start-2 col-end-3 row-start-2 row-end-3")
          [ D.p (pure $ D.Class := "text-center text-2xl text-slate-200") [ text_ "This application needs access to your device's orientation in order to function properly. If you change your mind about the orientation permission, please reload the page. Thanks for visiting!" ]
          ]
      ]
  ]
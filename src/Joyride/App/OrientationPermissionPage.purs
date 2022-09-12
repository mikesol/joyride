module Joyride.App.OrientationPermission where

import Prelude

import Control.Promise (toAffE)
import Data.Foldable (oneOf)
import Data.Maybe (Maybe(..))
import Deku.Attribute ((:=))
import Deku.Control (text_)
import Deku.Core (Nut)
import Deku.DOM as D
import Deku.Listeners as DL
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)
import Joyride.FRP.Orientation (orientationPermission)
import Joyride.Navigation (navigateToHash)

orientationPermissionPage
  :: { givePermission :: Boolean -> Effect Unit
     , rideTrack :: Maybe { ride :: String, track :: String }
     }
  -> Nut
orientationPermissionPage opts = D.div (oneOf [ pure (D.Class := "absolute") ])
  [ D.div (oneOf [ pure (D.Class := "z-10 absolute grid grid-cols-3 grid-rows-3  place-items-center h-screen w-screen") ])
      [ D.div (pure $ D.Class := "col-start-1 col-end-4 row-start-1 row-end-2")
          [ D.p (pure $ D.Class := "text-center text-2xl text-slate-800 p-3") [ text_ "To play Joyride, you need to ask for orientation permissions." ]

          ]
      , D.button
          ( oneOf
              [ pure $ D.Class := "text-center bg-gray-600 hover:bg-gray-400 text-white py-2 px-4 rounded col-start-2 col-end-2 row-start-2 row-end-3"
              , DL.click $ pure $ launchAff_ do
                  op <- toAffE orientationPermission
                  liftEffect do
                    opts.givePermission op
                    -- go home
                    case opts.rideTrack of
                      Just { ride, track } -> navigateToHash ("/r/" <> ride <> "/" <> track)
                      Nothing -> navigateToHash "/"
              ]
          )
          [ text_ "Ask for permission" ]
      ]
  ]
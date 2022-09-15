module Joyride.App.Rides where

import Prelude

import Data.Foldable (oneOf)
import Data.Maybe (Maybe(..), fromMaybe)
import Deku.Attribute ((:=))
import Deku.Attributes (klass_)
import Deku.Control (text_)
import Deku.Core (Nut)
import Deku.DOM as D
import Deku.Listeners (click)
import Effect (Effect)
import Joyride.Style (buttonCls, headerCls)
import Route (Route(..))
import Types (Track(..))

availableRides
  :: { availableRides :: Array { data :: Track, id :: String }, navigateTo :: Route -> Effect Unit
     }
  -> Nut
availableRides opts = D.div (oneOf [ pure (D.Class := "absolute") ])
  [ D.div (oneOf [ klass_ "z-10 bg-zinc-900 absolute grid grid-cols-6 grid-rows-6 place-items-center h-screen w-screen" ])
      [ D.div (klass_ "col-start-2 col-end-6 row-start-2 row-end-6 flex flex-col justify-items-center overflow-scroll text-center")
          [ D.h2 (klass_ headerCls) [ text_ "Choose a ride" ]
          , D.div_
              [ D.ul (klass_ "")
                  ( opts.availableRides <#> \{ id, data: data' } ->
                      let
                        TrackV0 aTra = data'
                      in
                        D.li_
                          [ D.button
                              ( oneOf
                                  [ klass_ $ buttonCls <> " mx-2 pointer-events-auto"
                                  , click $ pure (opts.navigateTo (TakeThisRide (Just data') id))
                                  ]
                              )
                              [ text_ (fromMaybe "Untitled Track" aTra.title) ]
                          ]
                  )
              ]

          ]
      ]
  ]
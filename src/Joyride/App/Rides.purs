module Joyride.App.Rides where

import Prelude

import Data.Foldable (oneOf)
import Data.Maybe (fromMaybe)
import Deku.Attribute ((:=))
import Deku.Attributes (klass_)
import Deku.Control (text_)
import Deku.Core (Nut)
import Deku.DOM as D
import Deku.Listeners (click)
import Joyride.Navigation (navigateToHash)
import Joyride.Style (buttonCls, headerCls)
import Route (ridesPath)
import Types (Track(..))

availableRides
  :: { availableRides :: Array { data :: Track, id :: String }
     }
  -> Nut
availableRides opts = D.div (oneOf [ pure (D.Class := "absolute") ])
  [ D.div (oneOf [ klass_ "z-10 bg-zinc-900 absolute grid grid-cols-6 grid-rows-6 place-items-center h-screen w-screen" ])
      [ D.div (pure $ D.Class := "col-start-2 col-end-6 row-start-2 row-end-6 flex flex-col justify-items-center overflow-scroll text-center")
          [ D.h2 (pure $ D.Class := headerCls) [ text_ "Choose a ride" ]
          , D.div_
              [ D.ul (pure $ D.Class := "")
                  ( opts.availableRides <#> \{ id, data: data' } ->
                      let
                        TrackV0 aTra = data'
                      in
                        D.li_
                          [ D.button
                              ( oneOf
                                  [ klass_ $ buttonCls <> " mx-2 pointer-events-auto"
                                  , click $ pure (navigateToHash (ridesPath <> "/" <> id))
                                  ]
                              )
                              [ text_ (fromMaybe "Untitled Track" aTra.title) ]
                          ]
                  )
              ]

          ]
      ]
  ]
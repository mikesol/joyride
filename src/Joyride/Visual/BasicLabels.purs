module Joyride.Visual.BasicLabels where

import Prelude

import Bolson.Core (Child(..), dyn)
import Control.Alt ((<|>))
import Data.Foldable (oneOfMap)
import Data.Maybe (Maybe(..))
import Data.Ord (abs)
import Data.Time.Duration (Milliseconds(..))
import Data.Tuple (Tuple(..))
import Deku.Attribute ((:=))
import Deku.Control (text_)
import Deku.Core (ANut(..))
import Deku.DOM as D
import Effect (Effect)
import FRP.Event (Event, bang, fromEvent, keepLatest, mapAccum)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Rito.CSS.CSS2DObject (css2DObject)
import Rito.Core (ACSS2DObject)
import Rito.Properties as P
import Types (Beats(..), HitBasicVisualForLabel(..), Player(..))

type MakeBasicLabels =
  { basicTap :: Event HitBasicVisualForLabel
  , lpsCallback :: Milliseconds -> Effect Unit -> Effect Unit
  }

p2s :: Player -> String
p2s Player1 = "Player 1"
p2s Player2 = "Player 2"
p2s Player3 = "Player 3"
p2s Player4 = "Player 4"

basicLabels :: forall lock payload. MakeBasicLabels -> ACSS2DObject lock payload
basicLabels mbl = dyn
  ( mbl.basicTap <#> \(HitBasicVisualForLabel e) ->
      ( bang $ Insert $ css2DObject
          { nut: ANut
              ( D.span
                  ( oneOfMap bang
                      [ D.Class := "text-zinc-100 fade-out"
                      ]
                  )
                  [ text_
                      (p2s e.player <> " " <> case e.deltaBeats of
                          (a)
                            | abs a < Beats 0.05 -> "Perfect!"
                            | abs a < Beats 0.1 -> "Nice!"
                            | a > Beats 0.0 -> "Late"
                            | otherwise -> "Early"
                      )
                  ]
              )
          }
          ( keepLatest $ map
              ( \{ x, y, z } -> oneOfMap bang
                  [ P.positionX x
                  , P.positionY y
                  , P.positionZ z
                  ]
              )
              ( mapAccum
                  ( \a b -> case b of
                      Nothing -> Tuple (Just a) a
                      Just i -> Tuple (Just i) (a { z = i.z })
                  )
                  e.translation
                  Nothing
              )
          )
      ) <|>
        fromEvent
          ( lowPrioritySchedule mbl.lpsCallback
              (Milliseconds 3000.0 <> e.issuedAt)
              (bang $ Remove)
          )
  )
module Joyride.Visual.LeapLabels where

import Prelude

import Bolson.Core (Child(..), dyn)
import Control.Alt ((<|>))
import Data.Foldable (oneOfMap)
import Data.Maybe (Maybe(..))
import Data.Tuple (Tuple(..))
import Deku.Attribute ((:=))
import Deku.Control (text_)
import Deku.Core (ANut(..))
import Deku.DOM as D
import Effect (Effect)
import FRP.Event (Event, fromEvent, keepLatest, mapAccum)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Rito.CSS.CSS2DObject (css2DObject)
import Rito.Core (ACSS2DObject)
import Rito.Properties as P
import Types (HitLeapVisualForLabel(..), JMilliseconds(..), Player(..), ThreeDI)

type MakeLeapLabels =
  { threeDI :: ThreeDI
  , leapTap :: Event HitLeapVisualForLabel
  , lpsCallback :: JMilliseconds -> Effect Unit -> Effect Unit
  }

p2s :: Player -> String
p2s Player1 = "Player 1"
p2s Player2 = "Player 2"
p2s Player3 = "Player 3"
p2s Player4 = "Player 4"

leapLabels :: forall lock payload. MakeLeapLabels -> ACSS2DObject lock payload
leapLabels mbl = dyn
  ( mbl.leapTap <#> \(HitLeapVisualForLabel e) ->
      ( pure $ Insert $ css2DObject
          { css2DObject: mbl.threeDI.css2DObject
          , nut: ANut
              ( D.span
                  ( oneOfMap pure
                      [ D.Class := "text-zinc-100 fade-out"
                      ]
                  )
                  [ text_
                      (p2s e.player <> " Leap!")
                  ]
              )
          }
          ( pure (P.positionZ 100.0) <|> keepLatest
              ( map
                  ( \{ x, y, z } -> oneOfMap pure
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
          )
      ) <|>
        fromEvent
          ( lowPrioritySchedule mbl.lpsCallback
              (JMilliseconds 3000.0 + e.issuedAt)
              (pure $ Remove)
          )
  )
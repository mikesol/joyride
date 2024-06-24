module Joyride.Visual.BasicLabels where

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
import FRP.Event (Event, keepLatest, mapAccum)
import Joyride.FRP.LowPrioritySchedule (lowPrioritySchedule)
import Joyride.Ledger.Basic (basicOutcomeToString, beatsToBasicOutcome)
import Rito.CSS.CSS2DObject (css2DObject)
import Rito.Core (ACSS2DObject)
import Rito.Properties as P
import Types (HitBasicVisualForLabel(..), JMilliseconds(..), Player(..), ThreeDI)

-- type MakeBasicLabels =
--   { threeDI :: ThreeDI
--   , basicTap :: Event HitBasicVisualForLabel
--   , lpsCallback :: JMilliseconds -> Effect Unit -> Effect Unit
--   }

-- p2s :: Player -> String
-- p2s Player1 = "Player 1"
-- p2s Player2 = "Player 2"
-- p2s Player3 = "Player 3"
-- p2s Player4 = "Player 4"

-- basicLabels :: forall lock payload. MakeBasicLabels -> ACSS2DObject lock payload
-- basicLabels mbl = dyn
--   ( mbl.basicTap <#> \(HitBasicVisualForLabel e) ->
--       ( pure $ Insert $ css2DObject
--           { css2DObject: mbl.threeDI.css2DObject
--           , nut: ANut
--               ( D.span
--                   ( oneOfMap pure
--                       [ D.Class := "text-zinc-100 fade-out"
--                       ]
--                   )
--                   [ text_
--                       ( p2s e.player <> " " <> (basicOutcomeToString $ beatsToBasicOutcome e.deltaBeats)
--                       )
--                   ]
--               )
--           }
--           ( pure (P.positionZ 100.0) <|> keepLatest
--               ( map
--                   ( \{ x, y, z } -> oneOfMap pure
--                       [ P.positionX x
--                       , P.positionY y
--                       , P.positionZ z
--                       ]
--                   )
--                   ( mapAccum
--                       ( \b a -> case b of
--                           Nothing -> Tuple (Just a) a
--                           Just i -> Tuple (Just i) (a { z = i.z })
--                       )
--                       Nothing
--                       e.translation
--                   )
--               )
--           )
--       ) <|>
--           ( lowPrioritySchedule mbl.lpsCallback
--               (JMilliseconds 3000.0 + e.issuedAt)
--               (pure $ Remove)
--           )
--   )
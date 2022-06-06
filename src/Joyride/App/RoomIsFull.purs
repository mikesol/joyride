module Joyride.App.RoomIsFull where

import Deku.Core (Nut)
import Deku.Pursx ((~~))
import Type.Proxy (Proxy(..))

roomIsFull :: Nut
roomIsFull =
  ( Proxy :: _ """
<div>
  <h1>Sorry :(</h1>
  <p>It looks like four players have already joined this joyride. Pick another slug to get started.</p>
</div>
"""
  ) ~~ {}
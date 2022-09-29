module Joyride.App.GameHasStarted where

import Deku.Core (Nut)
import Deku.Pursx ((~~))
import Type.Proxy (Proxy(..))

gameHasStarted :: Nut
gameHasStarted =
  ( Proxy
      :: _
           """
<div>
  <h1>Sorry :(</h1>
  <p>The game has already started. You can make a new game, though!</p>
</div>
"""
  ) ~~ {}
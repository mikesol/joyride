module Joyride.App.Loading where

import Deku.Core (Nut)
import Type.Proxy (Proxy(..))
import Deku.Pursx ((~~))

--import Prelude

type Loading = """
    <div class="wave-center">
      <div class="wave-loader"></div>
      <div class="wave-loader"></div>
      <div class="wave-loader"></div>
      <div class="wave-loader"></div>
      <div class="wave-loader"></div>
      <div class="wave-loader"></div>
      <div class="wave-loader"></div>
      <div class="wave-loader"></div>
      <div class="wave-loader"></div>
      <div class="wave-loader"></div>
</div>"""

loadingPage :: Nut
loadingPage = (Proxy :: _ Loading) ~~ {}
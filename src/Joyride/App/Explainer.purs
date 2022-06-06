module Joyride.App.Explainer where

import Deku.Core (Nut)
import Deku.Pursx ((~~))
import Type.Proxy (Proxy(..))

explainerPage :: Nut
explainerPage =
  ( Proxy :: _ """
<div>
  <h1>Welcome to Joyride!</h1>
  <p>To play, choose a unique slug and send the slug to up to three friends.</p>
  <p>Then, navigate to https://joyride.netlify.app/my-slug (where <code>my-slug</code> is whatever slug you choose) and get started!</p>
</div>
"""
  ) ~~ {}
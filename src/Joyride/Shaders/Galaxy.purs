module Joyride.Shaders.Galaxy where

import Prelude

import Data.FastVect.FastVect (empty, (:))
import Data.Int (toNumber)
import Data.Number (cos, pi, pow, sin, sqrt, (%))
import Data.Tuple.Nested ((/\))
import Joyride.Color (lerp)
import Joyride.Random (ABCD, cyrb128, sfc32)
import Record (delete)
import Rito.BufferAttribute (bufferAttributes)
import Rito.Color (RGB(..))
import Rito.THREE as THREE
import Type.Proxy (Proxy(..))
import Types (GalaxyAttributes)

type GalaxyParams =
  { branches :: Number
  , count :: Proxy 200000
  , insideColor :: RGB
  , outsideColor :: RGB
  , radius :: Number
  , randomness :: Number
  , randomnessPower :: Number
  , size :: Number
  , spin :: Int
  }

galaxyParams :: GalaxyParams
galaxyParams =
  { count: Proxy :: Proxy 200000
  , size: 0.005
  , radius: 5.0
  , branches: 3.0
  , spin: 1
  , randomness: 0.5
  , randomnessPower: 3.0
  , insideColor: RGB 0.39215686274509803 0.14901960784313725 0.07450980392156863 -- "#ff6030"
  , outsideColor: RGB 0.043137254901960784 0.08627450980392157 0.20392156862745098 -- "#1b3984"
  }

makeGalaxyAttributes :: THREE.TBufferAttribute -> GalaxyAttributes
makeGalaxyAttributes tba = bufferAttributes
  galaxyParams.count
  tba
  seeded
  \i a -> do
    let
      scaleR = sfc32 a
      radiusR = sfc32 scaleR
      x0R = sfc32 radiusR
      x1R = sfc32 x0R
      y0R = sfc32 x1R
      y1R = sfc32 y0R
      z0R = sfc32 y1R
      z1R = sfc32 z0R
      r0R = sfc32 z1R
      r1R = sfc32 r0R
      g0R = sfc32 r1R
      g1R = sfc32 g0R
      b0R = sfc32 g1R
      b1R = sfc32 b0R
      final = b1R
      -- radius = radiusR.r * galaxyParams.radius
      -- branchAngle =
      --   ( (toNumber i % galaxyParams.branches)
      --       / galaxyParams.branches
      --   ) * pi * 2.0
      -- randomVal r0 r1 = pow r0 galaxyParams.randomnessPower
      --   * (if r1 < 0.5 then 1.0 else -1.0)
      --   * galaxyParams.randomness
      --   * radius
      -- randomX = randomVal x0R.r x1R.r
      -- randomY = randomVal y0R.r y1R.r
      -- randomZ = randomVal z0R.r z1R.r
      -- position = ((cos branchAngle) * radius + randomX)
      --   : randomY
      --   : ((sin branchAngle) * radius + randomZ)
      --   : empty
      normalizeRand x = x * 2.0 - 1.0
      xpos =normalizeRand x0R.r
      ypos =normalizeRand y0R.r
      zpos =normalizeRand z0R.r
      position = xpos : ypos : zpos : empty
      xpos2 =normalizeRand x1R.r
      ypos2 =normalizeRand y1R.r
      zpos2 =normalizeRand z1R.r
      position2 = xpos2 : ypos2 : zpos2 : empty
      -- radius = sqrt((xpos `pow` 2.0) + (ypos `pow` 2.0) + (zpos `pow` 2.0))
      color = r0R.r : g0R.r : b0R.r : empty-- let RGB r g b = lerp (radius / galaxyParams.radius) galaxyParams.insideColor galaxyParams.outsideColor in r : g : b : empty
      color2 = r1R.r : g1R.r : b1R.r : empty
      aScale = scaleR.r : empty
    { position, position2, color, color2, aScale} /\ (delete (Proxy :: _ "r") final)
  where
  seeded :: { | ABCD Number () }
  seeded = cyrb128 "galaxy"

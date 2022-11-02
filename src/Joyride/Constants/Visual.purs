module Joyride.Constants.Visual where

import Prelude

import Data.Number (cos, pi, pow, sin)
import Debug (spy)
import Rito.Color (RGB(..))

basicYThickness = 0.02 :: Number
barZThickness = 0.01 :: Number
barYThickness = 0.01 :: Number
barXWidth = 10.0 :: Number

spaceshipScale = 0.02 :: Number
tarantulaScale = 4.0 :: Number

bar1Color :: RGB
bar1Color = RGB 0.2196078431372549 0.8431372549019608 0.9058823529411765

bar2Color :: RGB
bar2Color = RGB 0.9764705882352941 0.8784313725490196 0.4627450980392157

bar3Color :: RGB
bar3Color = RGB 0.9333333333333333 0.19215686274509805 0.4196078431372549

bar4Color :: RGB
bar4Color = RGB 0.5176470588235295 0.17647058823529413 0.4470588235294118

initialOrientationDampening = 0.055 :: Number

orientationDampening0To100 :: Number -> Number
orientationDampening0To100 x = ((x / 100.0) `pow` 2.0) * 0.3 + 0.01

reverseOrientationDampening :: Number -> Number
reverseOrientationDampening x = clamp 0.0 100.0 $ (((x - 0.01) / 0.3) `pow` 0.5) * 100.0

-- todo: make this variable
-- even though it is sent over the wire, it is currently not responsive to settings
-- but as desktop mode isn't really supported outside of development for now
-- we can safely lock this
keyboardInitialDampeningFactor = 0.77 :: Number

globalInternalFac = 0.25

backgroundXRotation ∷ Number → Number
backgroundXRotation fac = 0.001 * sin (fac * pi * 0.1 * globalInternalFac)

backgroundYRotation ∷ Number → Number
backgroundYRotation fac = 0.0001 * sin (fac * pi * 0.5 * globalInternalFac)

backgroundZRotation ∷ Number → Number
backgroundZRotation fac = 0.0 -- 0.001 * cos ((fac / 1000.0) * pi * 0.01)

module Joyride.Color where


import Rito.Color (RGB(..))
import WAGS.Math (calcSlope)

lerp :: Number -> RGB -> RGB -> RGB
lerp n (RGB a b c) (RGB x y z) = RGB (calcSlope 0.0 a 1.0 x n) (calcSlope 0.0 b 1.0 y n) (calcSlope 0.0 c 1.0 z n)
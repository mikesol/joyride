module Joyride.Visual.EmptyMatrix where


import Rito.Matrix4 (Matrix4')


emptyMatrix :: Matrix4'
emptyMatrix =
  { n11: 0.0
  , n12: 0.0
  , n13: 0.0
  , n14: 0.0
  , n21: 0.0
  , n22: 0.0
  , n23: 0.0
  , n24: 0.0
  , n31: 0.0
  , n32: 0.0
  , n33: 0.0
  , n34: 0.0
  , n41: 0.0
  , n42: 0.0
  , n43: 0.0
  , n44: 1.0
  }
module Joyride.Math.Matrix4 where

import Prelude

import Data.Number (cos, sin)
import Rito.Matrix4 (Matrix4')
import Rito.Vector3 (Vector3')

infixr 6 multiply as *$*

multiply :: Matrix4' -> Matrix4' -> Matrix4'
multiply a b =
  { n11: (a.n11 * b.n11) + (a.n12 * b.n21) + (a.n13 * b.n31) + (a.n14 * b.n41)
  , n12: (a.n11 * b.n12) + (a.n12 * b.n22) + (a.n13 * b.n32) + (a.n14 * b.n42)
  , n13: (a.n11 * b.n13) + (a.n12 * b.n23) + (a.n13 * b.n33) + (a.n14 * b.n43)
  , n14: (a.n11 * b.n14) + (a.n12 * b.n24) + (a.n13 * b.n34) + (a.n14 * b.n44)
  , n21: (a.n21 * b.n11) + (a.n22 * b.n21) + (a.n23 * b.n31) + (a.n24 * b.n41)
  , n22: (a.n21 * b.n12) + (a.n22 * b.n22) + (a.n23 * b.n32) + (a.n24 * b.n42)
  , n23: (a.n21 * b.n13) + (a.n22 * b.n23) + (a.n23 * b.n33) + (a.n24 * b.n43)
  , n24: (a.n21 * b.n14) + (a.n22 * b.n24) + (a.n23 * b.n34) + (a.n24 * b.n44)
  , n31: (a.n31 * b.n11) + (a.n32 * b.n21) + (a.n33 * b.n31) + (a.n34 * b.n41)
  , n32: (a.n31 * b.n12) + (a.n32 * b.n22) + (a.n33 * b.n32) + (a.n34 * b.n42)
  , n33: (a.n31 * b.n13) + (a.n32 * b.n23) + (a.n33 * b.n33) + (a.n34 * b.n43)
  , n34: (a.n31 * b.n14) + (a.n32 * b.n24) + (a.n33 * b.n34) + (a.n34 * b.n44)
  , n41: (a.n41 * b.n11) + (a.n42 * b.n21) + (a.n43 * b.n31) + (a.n44 * b.n41)
  , n42: (a.n41 * b.n12) + (a.n42 * b.n22) + (a.n43 * b.n32) + (a.n44 * b.n42)
  , n43: (a.n41 * b.n13) + (a.n42 * b.n23) + (a.n43 * b.n33) + (a.n44 * b.n43)
  , n44: (a.n41 * b.n14) + (a.n42 * b.n24) + (a.n43 * b.n34) + (a.n44 * b.n44)
  }

identity :: Matrix4'
identity =
  { n11: 1.0
  , n12: 0.0
  , n13: 0.0
  , n14: 0.0
  , n21: 0.0
  , n22: 1.0
  , n23: 0.0
  , n24: 0.0
  , n31: 0.0
  , n32: 0.0
  , n33: 1.0
  , n34: 0.0
  , n41: 0.0
  , n42: 0.0
  , n43: 0.0
  , n44: 1.0
  }

translate :: Vector3' -> Matrix4' -> Matrix4'
translate v m =
  multiply m
    { n11: 1.0
    , n12: 0.0
    , n13: 0.0
    , n14: v.x
    , n21: 0.0
    , n22: 1.0
    , n23: 0.0
    , n24: v.y
    , n31: 0.0
    , n32: 0.0
    , n33: 1.0
    , n34: v.z
    , n41: 0.0
    , n42: 0.0
    , n43: 0.0
    , n44: 1.0
    }

scale :: Vector3' -> Matrix4' -> Matrix4'
scale v m =
  multiply m
    { n11: v.x
    , n12: 0.0
    , n13: 0.0
    , n14: 0.0
    , n21: 0.0
    , n22: v.y
    , n23: 0.0
    , n24: 0.0
    , n31: 0.0
    , n32: 0.0
    , n33: v.z
    , n34: 0.0
    , n41: 0.0
    , n42: 0.0
    , n43: 0.0
    , n44: 1.0
    }

rotateX :: Number -> Matrix4' -> Matrix4'
rotateX theta m =
  multiply m
    { n11: 1.0
    , n12: 0.0
    , n13: 0.0
    , n14: 0.0
    , n21: 0.0
    , n22: cos theta
    , n23: -1.0 * sin theta
    , n24: 0.0
    , n31: 0.0
    , n32: sin theta
    , n33: cos theta
    , n34: 0.0
    , n41: 0.0
    , n42: 0.0
    , n43: 0.0
    , n44: 1.0
    }
    
rotateY :: Number -> Matrix4' -> Matrix4'
rotateY theta m =
  multiply m
    { n11: cos theta
    , n12: 0.0
    , n13: sin theta
    , n14: 0.0
    , n21: 0.0
    , n22: 1.0
    , n23: 0.0
    , n24: 0.0
    , n31: -1.0 * sin theta
    , n32: 0.0
    , n33: cos theta
    , n34: 0.0
    , n41: 0.0
    , n42: 0.0
    , n43: 0.0
    , n44: 1.0
    }

rotateZ :: Number -> Matrix4' -> Matrix4'
rotateZ theta m =
  multiply m
    { n11: cos theta
    , n12: -1.0 * sin theta
    , n13: 0.0
    , n14: 0.0
    , n21: sin theta
    , n22: cos theta
    , n23: 0.0
    , n24: 0.0
    , n31: 0.0
    , n32: 0.0
    , n33: 1.0
    , n34: 0.0
    , n41: 0.0
    , n42: 0.0
    , n43: 0.0
    , n44: 1.0
    }
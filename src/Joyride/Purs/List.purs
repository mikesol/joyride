module Joyride.Purs.List where


import Data.List (List(..), (:))
import Data.Maybe (Maybe(..))

spanMap :: forall a b. (a -> Maybe b) -> List a -> { init :: List b, rest :: List a }
spanMap p (x : xs') | Just x' <- p x = case spanMap p xs' of
  { init: ys, rest: zs } -> { init: x' : ys, rest: zs }
spanMap _ xs = { init: Nil, rest: xs }
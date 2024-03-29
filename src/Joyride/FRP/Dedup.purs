module Joyride.FRP.Dedup where

import Prelude

import Data.Compactable (compact)
import Data.Maybe (Maybe(..))
import Data.Tuple (Tuple(..))
import FRP.Event (Event, mapAccum)

dedup :: forall a. Eq a => Event a -> Event a
dedup = dedup' eq

dedup' :: forall a. (a -> a -> Boolean) -> Event a -> Event a
dedup' eqq e = compact $
  mapAccum
    ( \b a ->
        let
          ja = Just a
        in
          Tuple ja
            ( case b of
                Nothing -> Just a
                Just b'
                  | b' `eqq` a -> Nothing
                  | otherwise -> Just a
            )
    )
    Nothing
    e

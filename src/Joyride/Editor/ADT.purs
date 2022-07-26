module Joyride.Editor.ADT where

import Prelude

import Data.Maybe (Maybe)

newtype Marker = Marker { at :: Number }
newtype LongLength = LongLength { len :: Number }

data Landmark
  = LBasic
      { id :: Int
      , startIx :: Int
      , name :: Maybe String
      , fbId :: Maybe String
      , col :: Int
      , l1 :: Marker
      , l2 :: Marker
      , l3 :: Marker
      , l4 :: Marker
      }
  | LLeap
      { id :: Int
      , startIx :: Int
      , col :: Int
      , name :: Maybe String
      , fbId :: Maybe String
      , start :: Marker
      , end :: Marker
      }
  | LLong
      { id :: Int
      , startIx :: Int
      , col :: Int
      , name :: Maybe String
      , fbId :: Maybe String
      , start :: Marker
      , end :: Marker
      , len :: LongLength
      }

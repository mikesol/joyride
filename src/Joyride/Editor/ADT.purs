module Joyride.Editor.ADT where

import Data.Maybe (Maybe)
import Data.Newtype (class Newtype)
import Types (Column, Position)

newtype Marker = Marker { at :: Number }

derive instance Newtype Marker _
newtype LongLength = LongLength { len :: Number }

data Landmark
  = LBasic
      { id :: Int
      , startIx :: Int
      , name :: Maybe String
      , fbId :: Maybe String
      , col :: Column
      , l1 :: Marker
      , l2 :: Marker
      , l3 :: Marker
      , l4 :: Marker
      }
  | LLeap
      { id :: Int
      , startIx :: Int
      , col :: Column
      , name :: Maybe String
      , fbId :: Maybe String
      , start :: Marker
      , end :: Marker
      , position :: Position
      }
  | LLong
      { id :: Int
      , startIx :: Int
      , col :: Column
      , name :: Maybe String
      , fbId :: Maybe String
      , start :: Marker
      , end :: Marker
      , len :: LongLength
      }

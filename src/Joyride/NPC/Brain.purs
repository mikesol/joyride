module Joyride.NPC.Brain where

import Control.Plus (empty)
import Data.FastVect.FastVect (Vect)
import FRP.Event (Event)
import Joyride.Types (Column, Position)
import Types (Beats, HitBasicOverTheWire(..), HitLeapOverTheWire(..), HitLongOverTheWire(..))

data NPCReachable
  = NPCBasic
      { column :: Column
      , appearsAt :: Beats
      , uniqueId :: Int
      , beats :: Vect 4 { startsAt :: Beats }
      }
  | NPCLeap
      { column :: Column
      , hitsFirstPositionAt :: Beats
      , hitsLastPositionAt :: Beats
      , uniqueId :: Int
      , newPosition :: Position
      }
  | NPCLong
      { column :: Column
      , hitsFirstPositionAt :: Beats
      , hitsLastPositionAt :: Beats
      , length :: Number
      , uniqueId :: Int
      , newPosition :: Position
      }

data NPCAction
  = NPCHitBasic HitBasicOverTheWire
  | NPCHitLeap HitLeapOverTheWire
  | NPCHitLong HitLongOverTheWire


type NPCNeeds = Event (Array NPCReachable)

data NPCDoes = NPCHits NPCAction

npc :: Position -> NPCNeeds -> Event NPCDoes
npc initialPosition npcNeeds = empty
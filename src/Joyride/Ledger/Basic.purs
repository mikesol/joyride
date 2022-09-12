module Joyride.Ledger.Basic where

import Prelude

import Data.Either (Either(..))
import Data.Ord (abs)
import Types (Beats(..), Penalty(..), PointOutcome(..), Points(..))

data BasicOutcome = Perfect | Nice | Early | Late

beatsToBasicOutcome :: Beats -> BasicOutcome
beatsToBasicOutcome a
  | abs a < Beats 0.085 = Perfect
  | abs a < Beats 0.13 = Nice
  | a > Beats 0.0 = Late
  | otherwise = Early

basicOutcomeToString :: BasicOutcome -> String
basicOutcomeToString Perfect = "Perfect!"
basicOutcomeToString Nice = "Nice!"
basicOutcomeToString Late = "Late"
basicOutcomeToString Early = "Early"

basicOutcomeToPointOutcome :: BasicOutcome -> PointOutcome
basicOutcomeToPointOutcome Perfect = PointOutcome $ Right $ Points 50.0
basicOutcomeToPointOutcome Nice = PointOutcome $ Right $ Points 20.0
basicOutcomeToPointOutcome Late = PointOutcome $ Left $ Penalty 30.0
basicOutcomeToPointOutcome Early = PointOutcome $ Left $ Penalty 30.0
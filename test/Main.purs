module Test.Main where

import Prelude

import Control.Monad.Except (runExcept)
import Data.Array (sort, nub, zip, drop, dropEnd)
import Data.Foldable (for_)
import Data.Map as Map
import Data.Maybe (Maybe(..))
import Data.Tuple (Tuple(..))
import Data.Tuple.Nested ((/\))
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)
import Effect.Random (randomInt)
import Joyride.Scores.Tutorial.Base (beats2)
import Simple.JSON as JSON
import Test.PlayerAction (TestPlayerAction)
import Test.QuickCheck (mkSeed, (===))
import Test.Spec (describe, it)
import Test.Spec.Assertions (shouldEqual)
import Test.Spec.QuickCheck (quickCheckPure)
import Test.Spec.Reporter (consoleReporter)
import Test.Spec.Runner (runSpec)
import Types (InFlightGameInfo(..), JMilliseconds(..), KnownPlayers(..), Penalty(..), Player(..), Points(..), StartStatus(..))

main :: Effect Unit
main = do
  launchAff_
    $ runSpec [ consoleReporter ] do
        describe "Tutorial" do
          it "Presents the beats in the right order" do
            for_ beats2 \(c /\ x /\ y /\ z /\ w) ->
              sort [x,y,z,w] `shouldEqual` [x,y,z,w]
          it "Does not duplicate beats" do
            for_ beats2 \(c /\ x /\ y /\ z /\ w) ->
              nub [x,y,z,w] `shouldEqual` [x,y,z,w]
          it "Presents increasing beats" do
            for_ (zip (dropEnd 1 beats2) (drop 1 beats2)) \((c /\ x /\ y /\ z /\ w) /\ (c' /\ x' /\ y' /\ z' /\ w')) ->
              (x /\ x' /\ (x <= x')) `shouldEqual` (x /\ x' /\ true)
        describe "Simple.JSON" do
          it "encodes and decodes PlayerAction correctly" do
            i <- liftEffect $ randomInt 0 10000
            quickCheckPure (mkSeed i) 10000 \(n :: TestPlayerAction) ->
              runExcept (JSON.readImpl (JSON.writeImpl n)) === pure n
        describe "KnownPlayers" do
          it "adds new players correctly" do
            ( (KnownPlayers $ Map.singleton Player1 HasNotStartedYet)
                <> (KnownPlayers $ Map.singleton Player2 HasNotStartedYet)
            ) `shouldEqual`
              ( KnownPlayers $
                  Map.fromFoldable [ Tuple Player1 HasNotStartedYet, Tuple Player2 HasNotStartedYet ]
              )
          it "never overwrites existing player that has started" do
            let
              kp = KnownPlayers $ Map.fromFoldable
                [ Tuple Player1 $ HasStarted
                    ( InFlightGameInfo
                        { penalties: Penalty 0.0
                        , points: Points 0.0
                        , startedAt: JMilliseconds 1000.0
                        , name: Just "Mike"
                        }
                    )
                , Tuple Player2 HasNotStartedYet
                ]
            ((KnownPlayers $ Map.singleton Player1 HasNotStartedYet) <> kp) `shouldEqual` kp
            (kp <> (KnownPlayers $ Map.singleton Player1 HasNotStartedYet)) `shouldEqual` kp
          it "updates inFlightGameInfo correctly when appending" do
            let
              kp = KnownPlayers $ Map.fromFoldable
                [ Tuple Player1 $ HasStarted
                    ( InFlightGameInfo
                        { penalties: Penalty 1.0
                        , points: Points 4.0
                        , startedAt: JMilliseconds 1000.0
                        , name: Just "Sue"
                        }
                    )
                , Tuple Player2 HasNotStartedYet
                ]
              newHasStarted = HasStarted
                ( InFlightGameInfo
                    { penalties: Penalty 5.0
                    , points: Points 2.0
                    , startedAt: JMilliseconds 998.0
                    , name: Nothing
                    }
                )
              mergedHasStarted = HasStarted
                ( InFlightGameInfo
                    { -- picks higher
                      penalties: Penalty 5.0
                    -- picks higher
                    , points: Points 4.0
                    -- picks lower
                    , startedAt: JMilliseconds 998.0
                    , name: Just "Sue"

                    }
                )
            ((KnownPlayers $ Map.singleton Player1 newHasStarted) <> kp) `shouldEqual` ((KnownPlayers $ Map.singleton Player1 mergedHasStarted) <> kp)
            (kp <> (KnownPlayers $ Map.singleton Player1 newHasStarted)) `shouldEqual` ((KnownPlayers $ Map.singleton Player1 mergedHasStarted) <> kp)
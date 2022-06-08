module Test.Main where

import Prelude

import Control.Monad.Except (runExcept)
import Data.Map as Map
import Data.Tuple (Tuple(..))
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)
import Effect.Random (randomInt)
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
        describe "Simple.JSON" do
          it "encodes and decodes PlayerAction correctly" do
            i <- liftEffect $ randomInt 0 10000
            quickCheckPure (mkSeed i) 1000 \(n :: TestPlayerAction) ->
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
                        }
                    )
                , Tuple Player2 HasNotStartedYet
                ]
              newHasStarted = HasStarted
                ( InFlightGameInfo
                    { penalties: Penalty 5.0
                    , points: Points 2.0
                    , startedAt: JMilliseconds 998.0
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
                    }
                )
            ((KnownPlayers $ Map.singleton Player1 newHasStarted) <> kp) `shouldEqual` ((KnownPlayers $ Map.singleton Player1 mergedHasStarted) <> kp)
            (kp <> (KnownPlayers $ Map.singleton Player1 newHasStarted)) `shouldEqual` ((KnownPlayers $ Map.singleton Player1 mergedHasStarted) <> kp)
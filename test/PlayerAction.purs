module Test.PlayerAction where

import Prelude

import Control.Monad.Gen.Common as MGC
import Data.Array.NonEmpty (fromNonEmpty)
import Data.Map as Map
import Data.NonEmpty ((:|))
import Data.Tuple (Tuple(..))
import Simple.JSON as JSON
import Test.QuickCheck (class Arbitrary, arbitrary)
import Test.QuickCheck.Gen (Gen, arrayOf, elements, oneOf)
import Types (Beats(..), Claim(..), HitBasicOverTheWire(..), HitLeapOverTheWire(..), InFlightGameInfo(..), JMilliseconds(..), KnownPlayers(..), Penalty(..), Player, PlayerAction(..), PointOutcome(..), Points(..), Position, StartStatus(..), XDirection(..), allPlayers, allPositions)

newtype TestPlayerAction = TestPlayerAction PlayerAction
derive newtype instance Eq TestPlayerAction
derive newtype instance Show TestPlayerAction
derive newtype instance JSON.ReadForeign TestPlayerAction
derive newtype instance JSON.WriteForeign TestPlayerAction

anyXDirection :: Gen XDirection
anyXDirection = elements (fromNonEmpty (Still :| [ ToLeft, ToRight ]))

anyPlayer :: Gen Player
anyPlayer = elements allPlayers

anyPosition :: Gen Position
anyPosition = elements allPositions

anyBeat :: Gen Beats
anyBeat = Beats <$> arbitrary

anyPoints :: Gen Points
anyPoints = Points <$> arbitrary

anyPointOutcome :: Gen PointOutcome
anyPointOutcome = PointOutcome <$> MGC.genEither anyPenalties anyPoints

anyJMilliseconds :: Gen JMilliseconds
anyJMilliseconds = JMilliseconds <$> arbitrary

anyPenalties :: Gen Penalty
anyPenalties = Penalty <$> arbitrary

anyClaim :: Gen Claim
anyClaim = Claim <$> arbitrary

anyInFlightGameInfo :: Gen InFlightGameInfo
anyInFlightGameInfo = InFlightGameInfo <$>
  ( { startedAt: _
    , points: _
    , penalties: _
    } <$> anyJMilliseconds <*> anyPoints <*> anyPenalties
  )

anyStartStatus :: Gen StartStatus
anyStartStatus = oneOf (fromNonEmpty (pure HasNotStartedYet :| [ HasStarted <$> anyInFlightGameInfo ]))

anyKnownPlayer :: Gen (Tuple Player StartStatus)
anyKnownPlayer = Tuple <$> anyPlayer <*> anyStartStatus

anyKnownPlayers :: Gen KnownPlayers
anyKnownPlayers = do
  players <- arrayOf anyKnownPlayer
  pure $ KnownPlayers (Map.fromFoldable players)

instance Arbitrary TestPlayerAction where
  arbitrary = TestPlayerAction <$> oneOf
    ( fromNonEmpty
        ( ( XPositionKeyboard <$>
              ( { player: _, ktp: _ } <$> anyPlayer <*>
                  ( { curXDir: _
                    , time: _
                    , pos: _
                    } <$> anyXDirection <*> MGC.genMaybe anyJMilliseconds <*> arbitrary
                  )
              )
          ) :|
            [ XPositionMobile <$>
                ( { player: _, gtp: _ } <$> anyPlayer <*>
                    ( { gamma: _
                      , time: _
                      , pos: _
                      } <$> arbitrary <*> MGC.genMaybe anyJMilliseconds <*> arbitrary
                    )
                )
            -- tap basic
            , HitBasic <$>
                ( HitBasicOverTheWire
                    <$>
                      ( { uniqueId: _
                        , logicalBeat: _
                        , deltaBeats: _
                        , hitAt: _
                        , player: _
                        , outcome: _
                        }
                          <$> arbitrary
                          <*> anyBeat
                          <*> anyBeat
                          <*> anyBeat
                          <*> anyPlayer
                          <*> anyPointOutcome
                      )
                )
            -- tap leap
            , HitLeap <$>
                ( HitLeapOverTheWire
                    <$>
                      ( { uniqueId: _
                      , oldPosition: _
                      , newPosition: _
                        , hitAt: _
                        , player: _
                        }
                          <$> arbitrary
                          <*> anyPosition
                          <*> anyPosition
                          <*> anyBeat
                          <*> anyPlayer
                      )
                )
            -- ask to join
            , pure RequestPlayer
            -- say whose available
            , EchoKnownPlayers <$> ({ players: _ } <$> anyKnownPlayers)
            -- claim a player
            , ClaimPlayer <$> ({ claim: _, player: _ } <$> anyClaim <*> anyPlayer)
            -- accept claim
            , AcceptClaim <$> ({ claim: _, player: _ } <$> anyClaim <*> anyPlayer)
            -- refute claim
            , RefuteClaim <$> ({ claim: _, player: _ } <$> anyClaim <*> anyPlayer)
            ]
        )
    )
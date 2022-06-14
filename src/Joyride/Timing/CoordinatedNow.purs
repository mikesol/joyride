module Joyride.Timing.CoordinatedNow where

import Prelude

import Affjax.ResponseFormat (string)
import Affjax.Web (defaultRequest, printError, request)
import Data.DateTime.Instant (Instant, unInstant)
import Data.Either (Either(..))
import Data.HTTP.Method (Method(..))
import Data.Int (toNumber)
import Data.Maybe (Maybe(..))
import Data.Newtype (over, unwrap)
import Effect (Effect)
import Effect.Aff (Milliseconds(..), launchAff_)
import Effect.Class (liftEffect)
import Effect.Class.Console as Log
import Effect.Now (now)
import Effect.Ref as Ref
import Effect.Timer (clearInterval, setInterval)
import FRP.Behavior (Behavior, behavior)
import FRP.Event (Event, makeEvent, subscribe)
import Simple.JSON as JSON

toN :: Instant -> Number
toN i = unwrap (unInstant i)

iTime = 2000 :: Int
halfITime = iTime / 2 :: Int

cnow :: Effect { cnow :: Effect Milliseconds, unsubscribe :: Effect Unit }
cnow = do
  ptref <- Ref.new 0.0
  tref <- Ref.new 0.0
  preading <- Ref.new Nothing
  iid <- setInterval iTime $ launchAff_ do
    rs <- liftEffect $ now
    res <- request (defaultRequest { url = "http://worldtimeapi.org/api/ip", method = Left GET, responseFormat = string })
    case res of
      Left e -> Log.error (show $ printError e)
      Right { body } -> case JSON.readJSON body of
        Left e -> Log.error (show e)
        Right (ts :: { unixtime :: Number }) -> liftEffect $ do
          re <- now
          let diff = ((toN re + toN rs) / 2.0) - (ts.unixtime * 1000.0)
          -- Log.info (show ((toN re + toN rs) / 2.0))
          -- Log.info (show ts.unixtime)
          -- Log.info (show diff)
          prev <- Ref.read tref
          Ref.write prev ptref
          Ref.write diff tref
          Ref.write (Just (unInstant re)) preading
  pure
    { unsubscribe: clearInterval iid
    , cnow: do
        pr <- Ref.read preading
        n <- now
        case pr of
          Nothing -> pure $ unInstant n
          Just p -> do
            let uin = unInstant n
            -- we apply a lowpass filter, smoothly transitioning to the new value
            let fac = clamp 0.0 1.0 $  ((unwrap uin - unwrap p) / (toNumber halfITime))
            ptr <- Ref.read ptref
            tr <- Ref.read tref
            let newTr = ptr * (1.0 - fac) + tr * fac
            pure $ over Milliseconds (_ - newTr) uin
    }

withCTime :: forall a. Effect Milliseconds -> Event a -> Event { value :: a, time :: Milliseconds }
withCTime ct e = makeEvent \k ->
  subscribe e \value -> do
    time <- ct
    k { time, value }

cInstant :: Effect Milliseconds -> Behavior Milliseconds
cInstant ms = behavior \e -> map (\{ value, time: t } -> value t) (withCTime ms e)

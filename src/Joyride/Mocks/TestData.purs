module Joyride.Mocks.TestData where

import Prelude

import Control.Comonad.Cofree ((:<))
import Control.Plus (empty)
import Data.Array as Array
import Data.FastVect.FastVect (cons)
import Data.FastVect.FastVect as V
import Data.List (List(..), (:))
import Data.Maybe (Maybe(..), fromMaybe, maybe)
import Data.Newtype (unwrap)
import Data.Time.Duration (Seconds(..))
import FRP.Event (bang)
import Foreign.Object as O
import Joyride.Purs.List (spanMap)
import Joyride.Audio.Basic as BasicA
import Joyride.Model (Note(..), NoteFSMI, NoteFSM)
import Joyride.Visual.Basic as BasicV
import Joyride.Wags (AudibleEnd(..))
import Types (BufferName(..), Column(..), Points(..), normalizedColumn)

infixr 4 cons as :/

mock :: List (NoteFSMI -> Note)
mock =
  ( \{ column, scheduledAt } { buffers, isMobile, speed, silence, mkColor, initialDims, resizeE, animationE, pushBasic } ->
      let
        buffy = fromMaybe silence <<< flip O.lookup buffers <<< unwrap
        startsAt = scheduledAt + 1.0
        xr = normalizedColumn column
      in
        Basic
          { event: \_ -> BasicV.basic
              ( ( let
                    t = startsAt + 0.0
                  in
                    { startsAt: Seconds t
                    , audio: AudibleEnd
                        ( BasicA.basic
                            { buffer: buffy $ BufferName "kick"
                            , offAt: empty
                            -- todo: this is the bit that will need to be modulated
                            -- it's not really onAt: bang t
                            -- the time changes based on what the rate is
                            , onAt: bang t
                            }
                        )
                    }

                )
                  :/
                    ( let
                        t = startsAt + 1.0
                      in
                        { startsAt: Seconds t
                        , audio: AudibleEnd
                            ( BasicA.basic
                                { buffer: buffy $ BufferName "hihat"
                                , offAt: empty
                                , onAt: bang t
                                }
                            )
                        }
                    )
                  :/
                    ( let
                        t = startsAt + 1.25
                      in
                        { startsAt: Seconds t
                        , audio: AudibleEnd
                            ( BasicA.basic
                                { buffer: buffy $ BufferName "note"
                                , offAt: empty
                                , onAt: bang t
                                }
                            )
                        }
                    )
                  :/
                    ( let
                        t = startsAt + 2.0
                      in
                        { startsAt: Seconds t
                        , audio: AudibleEnd
                            ( BasicA.basic
                                { buffer: buffy $ BufferName "tambourine"
                                , offAt: empty
                                , onAt: bang t
                                }
                            )
                        }
                    )
                  :/ V.empty
              )
              { initialDims
              , isMobile
              , mkColor
              , resizeE
              , speed
              , startsAt
              , animationE
              , pushAudio: pushBasic
              , xr
              }
          , points: Points 50.0
          , column
          , scheduledAt: Seconds scheduledAt
          , player: Nothing
          }
  ) <$>
    ( { column: C4, scheduledAt: 1.0 }
        : { column: C5, scheduledAt: 3.0 }
        : { column: C6, scheduledAt: 4.0 }
        : { column: C4, scheduledAt: 5.0 }
        : Nil
    )

getScheduleStart :: Note -> Maybe Number
getScheduleStart (Basic { scheduledAt: Seconds n }) = Just n
getScheduleStart _ = Nothing

testData :: NoteFSM
testData = go mock
  where
  -- todo: deal with adjusted time
  go l nfsmi@{ realTime: Seconds time', lookAheadInRealTime: Seconds lookAhead' } =
    let
      endpoint = time' + lookAhead'
      spanned = spanMap
        ( \n ->
            let
              actualized = n nfsmi
              st' = getScheduleStart actualized
            in
              st' # maybe Nothing \st -> if st >= time' && st < endpoint then Just actualized else Nothing
        )
        l
    in
      Array.fromFoldable spanned.init :< go spanned.rest
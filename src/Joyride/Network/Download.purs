module Joyride.Network.Download where

import Prelude

import BMS.Types (Note)
import Control.Parallel (parTraverse)
import Data.FunctorWithIndex (mapWithIndex)
import Data.Lens (_1, over)
import Data.List (List, null)
import Data.List as DL
import Data.Maybe (maybe)
import Data.Newtype (unwrap)
import Data.String as String
import Data.Traversable (sequence)
import Data.Tuple (fst, snd)
import Data.Tuple.Nested (type (/\), (/\))
import Effect.Aff (Aff, error, throwError)
import Effect.Class (liftEffect)
import Effect.Ref as Ref
import Foreign.Object as Object
import WAGS.Interpret (decodeAudioDataFromUri)
import WAGS.WebAPI (AudioContext, BrowserAudioBuffer)

dlInChunks
  :: Object.Object String
  -> Int
  -> List (Note /\ String)
  -> AudioContext
  -> Ref.Ref (Object.Object BrowserAudioBuffer)
  -> Aff Unit
dlInChunks silentRoom i l ac rf = go i ixd
  where
  ixd = mapWithIndex (/\) l
  go a b = do
    let { init, rest } = DL.span (fst >>> (_ < a)) b
    o <- parTraverse
      ( sequence <<< map
          ( maybe (throwError $ error "Could not download file") (decodeAudioDataFromUri ac) <<< (flip Object.lookup silentRoom) <<<
              String.replace (String.Pattern ".wav") (String.Replacement "")
          )
      )
      (map (over _1 unwrap <<< snd) init)
    let asObj = Object.fromFoldable o
    liftEffect $ Ref.modify_ (Object.union asObj) rf
    when (not $ null rest) do
      go (a + i) rest

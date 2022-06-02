module Joyride.LilGui (gui, noGui, class Guiable, guiable, Guiables, Tuple1, Tuple2, Slider(..), Numeric(..), Checkbox(..), Color(..)) where

import Prelude

import Control.Promise (Promise, toAffE)
import Data.Tuple (Tuple, fst, snd)
import Data.Tuple.Nested (type (/\), (/\))
import Effect (Effect)
import Effect.Aff (Aff)
import Effect.Class (liftEffect)
import Effect.Ref (Ref)
import Foreign (Foreign)
import Heterogeneous.Mapping (class HMap, class Mapping, hmap)
import Rito.Color (RGB(..))
import Simple.JSON (writeImpl)

data GUI

newtype Slider = Slider { default :: Number, min :: Number, max :: Number, step :: Number }
newtype Numeric = Numeric Number
newtype Checkbox = Checkbox Boolean
newtype Color = Color RGB

class Guiable i o | i -> o where
  guiable :: i -> Foreign /\ o

instance guiableSlider :: Guiable Slider Number where
  guiable (Slider v) = writeImpl { type: "slider", v } /\ v.default

instance guiableNumeric :: Guiable Numeric Number where
  guiable (Numeric v) = writeImpl { type: "numeric", v } /\ v

instance guiableCheckbox :: Guiable Checkbox Boolean where
  guiable (Checkbox v) = writeImpl { type: "checkbox", v } /\ v

instance guiableColor :: Guiable Color { r :: Number, g :: Number, b :: Number } where
  guiable (Color (RGB r g b)) = let v = { r, g, b } in writeImpl { type: "color", v } /\ v

data Guiables = Guiables

instance mappingGuiables ::
  Guiable i o =>
  Mapping Guiables i (Foreign /\ o) where
  mapping Guiables = guiable

data Tuple1 = Tuple1

instance mappingTuple1 ::
  Mapping Tuple1 (Tuple a b) a where
  mapping Tuple1 = fst

data Tuple2 = Tuple2

instance mappingTuple2 ::
  Mapping Tuple2 (Tuple a b) b where
  mapping Tuple2 = snd

foreign import guiImpl :: Effect (Promise GUI)
foreign import mockGui :: Effect GUI

foreign import linkUpGuiImpl :: forall x y. GUI -> { | x } -> Effect (Ref { | y })

gui'
  :: forall i o x y
   . HMap Guiables { | i } { | o }
  => HMap Tuple1 { | o } { | x }
  => HMap Tuple2 { | o } { | y }
  => Aff GUI
  -> { | i }
  -> Aff (Ref { | y })
gui' g' i = do
  g <- g'
  let o = hmap Guiables i
  liftEffect $ linkUpGuiImpl g (hmap Tuple1 o)

gui
  :: forall i o x y
   . HMap Guiables { | i } { | o }
  => HMap Tuple1 { | o } { | x }
  => HMap Tuple2 { | o } { | y }
  => { | i }
  -> Aff { debug :: Boolean, renderingInfo :: Ref { | y } }
gui i = { debug: true, renderingInfo: _ } <$> gui' (toAffE guiImpl) i

noGui
  :: forall i o x y
   . HMap Guiables { | i } { | o }
  => HMap Tuple1 { | o } { | x }
  => HMap Tuple2 { | o } { | y }
  => { | i }
  -> Aff { debug :: Boolean, renderingInfo :: Ref { | y } }
noGui i = { debug: false, renderingInfo: _ } <$> gui' (liftEffect mockGui) i
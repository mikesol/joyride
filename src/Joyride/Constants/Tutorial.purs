module Joyride.Constants.Tutorial where


import Rito.Color (RGB(..))
import Type.Proxy (Proxy(..))
import Types (Beats(..))

tutorialStartOffset :: Beats
tutorialStartOffset = Beats 1.0

basicDefaultColor :: RGB
basicDefaultColor = RGB 0.0 0.0 0.0 -- RGB 0.798 0.927 0.778

basicBeatColor :: RGB
basicBeatColor = RGB 0.991 0.997 0.991

nInstances :: Proxy 100
nInstances = Proxy
module Joyride.Scores.Tutorial.Base where

import Prelude

import Data.Function (on)
import Data.Generic.Rep (class Generic)
import Data.List (List(..), (:))
import Data.Tuple.Nested (type (/\), (/\))
import Types (Column(..))

data BeatNumber = B1
  | B2 | B3 | B4
data MeasureNumber
  = M1
  | M2
  | M3
  | M4
  | M5
  | M6
  | M7
  | M8
  | M9
  | M10
  | M11
  | M12
  | M13
  | M14
  | M15
  | M16
  | M17
  | M18
  | M19
  | M20
  | M21
  | M22
  | M23
  | M24
  | M25
  | M26
  | M27
  | M28
  | M29
  | M30
  | M31
  | M32
  | M33
  | M34
  | M35
  | M36
  | M37
  | M38
  | M39
  | M40
  | M41
  | M42
  | M43
  | M44
  | M45
  | M46
  | M47
  | M48
  | M49
  | M50
  | M51
  | M52
  | M53
  | M54
  | M55
  | M56
  | M57
  | M58
  | M59
  | M60
  | M61
  | M62
  | M63
  | M64
  | M65
  | M66
  | M67
  | M68
  | M69
  | M70
  | M71
  | M72
  | M73
  | M74
  | M75
  | M76
  | M77
  | M78
  | M79
  | M80
  | M81
  | M82
  | M83
  | M84

m2s :: MeasureNumber -> String
m2s M1 = "M1"
m2s M2 = "M2"
m2s M3 = "M3"
m2s M4 = "M4"
m2s M5 = "M5"
m2s M6 = "M6"
m2s M7 = "M7"
m2s M8 = "M8"
m2s M9 = "M9"
m2s M10 = "M10"
m2s M11 = "M11"
m2s M12 = "M12"
m2s M13 = "M13"
m2s M14 = "M14"
m2s M15 = "M15"
m2s M16 = "M16"
m2s M17 = "M17"
m2s M18 = "M18"
m2s M19 = "M19"
m2s M20 = "M20"
m2s M21 = "M21"
m2s M22 = "M22"
m2s M23 = "M23"
m2s M24 = "M24"
m2s M25 = "M25"
m2s M26 = "M26"
m2s M27 = "M27"
m2s M28 = "M28"
m2s M29 = "M29"
m2s M30 = "M30"
m2s M31 = "M31"
m2s M32 = "M32"
m2s M33 = "M33"
m2s M34 = "M34"
m2s M35 = "M35"
m2s M36 = "M36"
m2s M37 = "M37"
m2s M38 = "M38"
m2s M39 = "M39"
m2s M40 = "M40"
m2s M41 = "M41"
m2s M42 = "M42"
m2s M43 = "M43"
m2s M44 = "M44"
m2s M45 = "M45"
m2s M46 = "M46"
m2s M47 = "M47"
m2s M48 = "M48"
m2s M49 = "M49"
m2s M50 = "M50"
m2s M51 = "M51"
m2s M52 = "M52"
m2s M53 = "M53"
m2s M54 = "M54"
m2s M55 = "M55"
m2s M56 = "M56"
m2s M57 = "M57"
m2s M58 = "M58"
m2s M59 = "M59"
m2s M60 = "M60"
m2s M61 = "M61"
m2s M62 = "M62"
m2s M63 = "M63"
m2s M64 = "M64"
m2s M65 = "M65"
m2s M66 = "M66"
m2s M67 = "M67"
m2s M68 = "M68"
m2s M69 = "M69"
m2s M70 = "M70"
m2s M71 = "M71"
m2s M72 = "M72"
m2s M73 = "M73"
m2s M74 = "M74"
m2s M75 = "M75"
m2s M76 = "M76"
m2s M77 = "M77"
m2s M78 = "M78"
m2s M79 = "M79"
m2s M80 = "M80"
m2s M81 = "M81"
m2s M82 = "M82"
m2s M83 = "M83"
m2s M84 = "M84"

m2i :: MeasureNumber -> Int
m2i M1 = 1
m2i M2 = 2
m2i M3 = 3
m2i M4 = 4
m2i M5 = 5
m2i M6 = 6
m2i M7 = 7
m2i M8 = 8
m2i M9 = 9
m2i M10 = 10
m2i M11 = 11
m2i M12 = 12
m2i M13 = 13
m2i M14 = 14
m2i M15 = 15
m2i M16 = 16
m2i M17 = 17
m2i M18 = 18
m2i M19 = 19
m2i M20 = 20
m2i M21 = 21
m2i M22 = 22
m2i M23 = 23
m2i M24 = 24
m2i M25 = 25
m2i M26 = 26
m2i M27 = 27
m2i M28 = 28
m2i M29 = 29
m2i M30 = 30
m2i M31 = 31
m2i M32 = 32
m2i M33 = 33
m2i M34 = 34
m2i M35 = 35
m2i M36 = 36
m2i M37 = 37
m2i M38 = 38
m2i M39 = 39
m2i M40 = 40
m2i M41 = 41
m2i M42 = 42
m2i M43 = 43
m2i M44 = 44
m2i M45 = 45
m2i M46 = 46
m2i M47 = 47
m2i M48 = 48
m2i M49 = 49
m2i M50 = 50
m2i M51 = 51
m2i M52 = 52
m2i M53 = 53
m2i M54 = 54
m2i M55 = 55
m2i M56 = 56
m2i M57 = 57
m2i M58 = 58
m2i M59 = 59
m2i M60 = 60
m2i M61 = 61
m2i M62 = 62
m2i M63 = 63
m2i M64 = 64
m2i M65 = 65
m2i M66 = 66
m2i M67 = 67
m2i M68 = 68
m2i M69 = 69
m2i M70 = 70
m2i M71 = 71
m2i M72 = 72
m2i M73 = 73
m2i M74 = 74
m2i M75 = 75
m2i M76 = 76
m2i M77 = 77
m2i M78 = 78
m2i M79 = 79
m2i M80 = 80
m2i M81 = 81
m2i M82 = 82
m2i M83 = 83
m2i M84 = 84

mb2s :: MeasureNumberBeatNumber -> String
mb2s M1B1 = "M1B1"
mb2s M2B1 = "M2B1"
mb2s M3B1 = "M3B1"
mb2s M3B3 = "M3B3"
mb2s M4B1 = "M4B1"
mb2s M5B1 = "M5B1"
mb2s M6B1 = "M6B1"
mb2s M7B1 = "M7B1"
mb2s M7B3 = "M7B3"
mb2s M8B1 = "M8B1"
mb2s M9B1 = "M9B1"
mb2s M10B1 = "M10B1"
mb2s M11B1 = "M11B1"
mb2s M12B1 = "M12B1"
mb2s M13B1 = "M13B1"
mb2s M14B1 = "M14B1"
mb2s M15B1 = "M15B1"
mb2s M15B3 = "M15B3"
mb2s M16B1 = "M16B1"
mb2s M17B1 = "M17B1"
mb2s M18B1 = "M18B1"
mb2s M19B1 = "M19B1"
mb2s M19B3 = "M19B3"
mb2s M20B1 = "M20B1"
mb2s M21B1 = "M21B1"
mb2s M22B1 = "M22B1"
mb2s M23B1 = "M23B1"
mb2s M23B3 = "M23B3"
mb2s M24B1 = "M24B1"
mb2s M24B2 = "M24B2"
mb2s M24B3 = "M24B3"
mb2s M24B4 = "M24B4"
mb2s M25B1 = "M25B1"
mb2s M25B2 = "M25B2"
mb2s M25B3 = "M25B3"
mb2s M25B4 = "M25B4"
mb2s M26B1 = "M26B1"
mb2s M26B2 = "M26B2"
mb2s M26B3 = "M26B3"
mb2s M26B4 = "M26B4"
mb2s M27B1 = "M27B1"
mb2s M27B2 = "M27B2"
mb2s M27B3 = "M27B3"
mb2s M27B4 = "M27B4"
mb2s M28B1 = "M28B1"
mb2s M28B2 = "M28B2"
mb2s M28B3 = "M28B3"
mb2s M28B4 = "M28B4"
mb2s M29B1 = "M29B1"
mb2s M29B2 = "M29B2"
mb2s M29B3 = "M29B3"
mb2s M29B4 = "M29B4"
mb2s M30B1 = "M30B1"
mb2s M30B2 = "M30B2"
mb2s M30B3 = "M30B3"
mb2s M30B4 = "M30B4"
mb2s M31B1 = "M31B1"
mb2s M31B2 = "M31B2"
mb2s M31B3 = "M31B3"
mb2s M31B4 = "M31B4"
mb2s M32B1 = "M32B1"
mb2s M32B2 = "M32B2"
mb2s M32B3 = "M32B3"
mb2s M32B4 = "M32B4"
mb2s M33B1 = "M33B1"
mb2s M33B2 = "M33B2"
mb2s M33B3 = "M33B3"
mb2s M33B4 = "M33B4"
mb2s M34B1 = "M34B1"
mb2s M34B2 = "M34B2"
mb2s M34B3 = "M34B3"
mb2s M34B4 = "M34B4"
mb2s M35B1 = "M35B1"
mb2s M35B2 = "M35B2"
mb2s M35B3 = "M35B3"
mb2s M35B4 = "M35B4"
mb2s M36B1 = "M36B1"
mb2s M36B2 = "M36B2"
mb2s M36B3 = "M36B3"
mb2s M36B4 = "M36B4"
mb2s M37B1 = "M37B1"
mb2s M37B2 = "M37B2"
mb2s M37B3 = "M37B3"
mb2s M37B4 = "M37B4"
mb2s M38B1 = "M38B1"
mb2s M38B2 = "M38B2"
mb2s M38B3 = "M38B3"
mb2s M38B4 = "M38B4"
mb2s M39B1 = "M39B1"
mb2s M39B2 = "M39B2"
mb2s M39B3 = "M39B3"
mb2s M39B4 = "M39B4"
mb2s M40B1 = "M40B1"
mb2s M40B2 = "M40B2"
mb2s M40B3 = "M40B3"
mb2s M40B4 = "M40B4"
mb2s M41B1 = "M41B1"
mb2s M41B2 = "M41B2"
mb2s M41B3 = "M41B3"
mb2s M41B4 = "M41B4"
mb2s M42B1 = "M42B1"
mb2s M42B2 = "M42B2"
mb2s M42B3 = "M42B3"
mb2s M42B4 = "M42B4"
mb2s M43B1 = "M43B1"
mb2s M43B2 = "M43B2"
mb2s M43B3 = "M43B3"
mb2s M43B4 = "M43B4"
mb2s M44B1 = "M44B1"
mb2s M44B2 = "M44B2"
mb2s M44B3 = "M44B3"
mb2s M44B4 = "M44B4"
mb2s M45B1 = "M45B1"
mb2s M45B2 = "M45B2"
mb2s M45B3 = "M45B3"
mb2s M45B4 = "M45B4"
mb2s M46B1 = "M46B1"
mb2s M46B2 = "M46B2"
mb2s M46B3 = "M46B3"
mb2s M46B4 = "M46B4"
mb2s M47B1 = "M47B1"
mb2s M47B2 = "M47B2"
mb2s M47B3 = "M47B3"
mb2s M47B4 = "M47B4"
mb2s M48B1 = "M48B1"
mb2s M48B2 = "M48B2"
mb2s M48B3 = "M48B3"
mb2s M48B4 = "M48B4"
mb2s M49B1 = "M49B1"
mb2s M49B2 = "M49B2"
mb2s M49B3 = "M49B3"
mb2s M49B4 = "M49B4"
mb2s M50B1 = "M50B1"
mb2s M50B2 = "M50B2"
mb2s M50B3 = "M50B3"
mb2s M50B4 = "M50B4"
mb2s M51B1 = "M51B1"
mb2s M51B2 = "M51B2"
mb2s M51B3 = "M51B3"
mb2s M51B4 = "M51B4"
mb2s M52B1 = "M52B1"
mb2s M52B2 = "M52B2"
mb2s M52B3 = "M52B3"
mb2s M52B4 = "M52B4"
mb2s M53B1 = "M53B1"
mb2s M53B2 = "M53B2"
mb2s M53B3 = "M53B3"
mb2s M53B4 = "M53B4"
mb2s M54B1 = "M54B1"
mb2s M54B2 = "M54B2"
mb2s M54B3 = "M54B3"
mb2s M54B4 = "M54B4"
mb2s M55B1 = "M55B1"
mb2s M55B2 = "M55B2"
mb2s M55B3 = "M55B3"
mb2s M55B4 = "M55B4"
mb2s M56B1 = "M56B1"
mb2s M56B2 = "M56B2"
mb2s M56B3 = "M56B3"
mb2s M56B4 = "M56B4"
mb2s M57B1 = "M57B1"
mb2s M57B2 = "M57B2"
mb2s M57B3 = "M57B3"
mb2s M57B4 = "M57B4"
mb2s M58B1 = "M58B1"
mb2s M58B2 = "M58B2"
mb2s M58B3 = "M58B3"
mb2s M58B4 = "M58B4"
mb2s M59B1 = "M59B1"
mb2s M59B2 = "M59B2"
mb2s M59B3 = "M59B3"
mb2s M59B4 = "M59B4"
mb2s M60B1 = "M60B1"
mb2s M60B2 = "M60B2"
mb2s M60B3 = "M60B3"
mb2s M60B4 = "M60B4"
mb2s M61B1 = "M61B1"
mb2s M61B2 = "M61B2"
mb2s M61B3 = "M61B3"
mb2s M61B4 = "M61B4"
mb2s M62B1 = "M62B1"
mb2s M62B2 = "M62B2"
mb2s M62B3 = "M62B3"
mb2s M62B4 = "M62B4"
mb2s M63B1 = "M63B1"
mb2s M63B2 = "M63B2"
mb2s M63B3 = "M63B3"
mb2s M63B4 = "M63B4"
mb2s M64B1 = "M64B1"
mb2s M64B2 = "M64B2"
mb2s M64B3 = "M64B3"
mb2s M64B4 = "M64B4"
mb2s M65B1 = "M65B1"
mb2s M65B2 = "M65B2"
mb2s M65B3 = "M65B3"
mb2s M65B4 = "M65B4"
mb2s M66B1 = "M66B1"
mb2s M66B2 = "M66B2"
mb2s M66B3 = "M66B3"
mb2s M66B4 = "M66B4"
mb2s M67B1 = "M67B1"
mb2s M67B2 = "M67B2"
mb2s M67B3 = "M67B3"
mb2s M67B4 = "M67B4"
mb2s M68B1 = "M68B1"
mb2s M68B2 = "M68B2"
mb2s M68B3 = "M68B3"
mb2s M68B4 = "M68B4"
mb2s M69B1 = "M69B1"
mb2s M69B2 = "M69B2"
mb2s M69B3 = "M69B3"
mb2s M69B4 = "M69B4"
mb2s M70B1 = "M70B1"
mb2s M70B2 = "M70B2"
mb2s M70B3 = "M70B3"
mb2s M70B4 = "M70B4"
mb2s M71B1 = "M71B1"
mb2s M71B2 = "M71B2"
mb2s M71B3 = "M71B3"
mb2s M71B4 = "M71B4"
mb2s M72B1 = "M72B1"
mb2s M72B2 = "M72B2"
mb2s M72B3 = "M72B3"
mb2s M72B4 = "M72B4"
mb2s M73B1 = "M73B1"
mb2s M73B2 = "M73B2"
mb2s M73B3 = "M73B3"
mb2s M73B4 = "M73B4"
mb2s M74B1 = "M74B1"
mb2s M74B2 = "M74B2"
mb2s M74B3 = "M74B3"
mb2s M74B4 = "M74B4"
mb2s M75B1 = "M75B1"
mb2s M75B2 = "M75B2"
mb2s M75B3 = "M75B3"
mb2s M75B4 = "M75B4"
mb2s M76B1 = "M76B1"
mb2s M76B2 = "M76B2"
mb2s M76B3 = "M76B3"
mb2s M76B4 = "M76B4"
mb2s M77B1 = "M77B1"
mb2s M77B2 = "M77B2"
mb2s M77B3 = "M77B3"
mb2s M77B4 = "M77B4"
mb2s M78B1 = "M78B1"
mb2s M78B2 = "M78B2"
mb2s M78B3 = "M78B3"
mb2s M78B4 = "M78B4"
mb2s M79B1 = "M79B1"
mb2s M79B2 = "M79B2"
mb2s M79B3 = "M79B3"
mb2s M79B4 = "M79B4"
mb2s M80B1 = "M80B1"
mb2s M80B2 = "M80B2"
mb2s M80B3 = "M80B3"
mb2s M80B4 = "M80B4"
mb2s M81B1 = "M81B1"
mb2s M81B2 = "M81B2"
mb2s M81B3 = "M81B3"
mb2s M81B4 = "M81B4"
mb2s M82B1 = "M82B1"
mb2s M82B2 = "M82B2"
mb2s M82B3 = "M82B3"
mb2s M82B4 = "M82B4"
mb2s M83B1 = "M83B1"
mb2s M83B2 = "M83B2"
mb2s M83B3 = "M83B3"
mb2s M83B4 = "M83B4"
mb2s M84B1 = "M84B1"
mb2s M84B2 = "M84B2"
mb2s M84B3 = "M84B3"

data MeasureNumberBeatNumber
  = M1B1
  | M2B1
  | M3B1
  | M3B3
  | M4B1
  | M5B1
  | M6B1
  | M7B1
  | M7B3
  | M8B1
  | M9B1
  | M10B1
  | M11B1
  | M12B1
  | M13B1
  | M14B1
  | M15B1
  | M15B3
  | M16B1
  | M17B1
  | M18B1
  | M19B1
  | M19B3
  | M20B1
  | M21B1
  | M22B1
  | M23B1
  | M23B3
  | M24B1
  | M24B2
  | M24B3
  | M24B4
  | M25B1
  | M25B2
  | M25B3
  | M25B4
  | M26B1
  | M26B2
  | M26B3
  | M26B4
  | M27B1
  | M27B2
  | M27B3
  | M27B4
  | M28B1
  | M28B2
  | M28B3
  | M28B4
  | M29B1
  | M29B2
  | M29B3
  | M29B4
  | M30B1
  | M30B2
  | M30B3
  | M30B4
  | M31B1
  | M31B2
  | M31B3
  | M31B4
  | M32B1
  | M32B2
  | M32B3
  | M32B4
  | M33B1
  | M33B2
  | M33B3
  | M33B4
  | M34B1
  | M34B2
  | M34B3
  | M34B4
  | M35B1
  | M35B2
  | M35B3
  | M35B4
  | M36B1
  | M36B2
  | M36B3
  | M36B4
  | M37B1
  | M37B2
  | M37B3
  | M37B4
  | M38B1
  | M38B2
  | M38B3
  | M38B4
  | M39B1
  | M39B2
  | M39B3
  | M39B4
  | M40B1
  | M40B2
  | M40B3
  | M40B4
  | M41B1
  | M41B2
  | M41B3
  | M41B4
  | M42B1
  | M42B2
  | M42B3
  | M42B4
  | M43B1
  | M43B2
  | M43B3
  | M43B4
  | M44B1
  | M44B2
  | M44B3
  | M44B4
  | M45B1
  | M45B2
  | M45B3
  | M45B4
  | M46B1
  | M46B2
  | M46B3
  | M46B4
  | M47B1
  | M47B2
  | M47B3
  | M47B4
  | M48B1
  | M48B2
  | M48B3
  | M48B4
  | M49B1
  | M49B2
  | M49B3
  | M49B4
  | M50B1
  | M50B2
  | M50B3
  | M50B4
  | M51B1
  | M51B2
  | M51B3
  | M51B4
  | M52B1
  | M52B2
  | M52B3
  | M52B4
  | M53B1
  | M53B2
  | M53B3
  | M53B4
  | M54B1
  | M54B2
  | M54B3
  | M54B4
  | M55B1
  | M55B2
  | M55B3
  | M55B4
  | M56B1
  | M56B2
  | M56B3
  | M56B4
  | M57B1
  | M57B2
  | M57B3
  | M57B4
  | M58B1
  | M58B2
  | M58B3
  | M58B4
  | M59B1
  | M59B2
  | M59B3
  | M59B4
  | M60B1
  | M60B2
  | M60B3
  | M60B4
  | M61B1
  | M61B2
  | M61B3
  | M61B4
  | M62B1
  | M62B2
  | M62B3
  | M62B4
  | M63B1
  | M63B2
  | M63B3
  | M63B4
  | M64B1
  | M64B2
  | M64B3
  | M64B4
  | M65B1
  | M65B2
  | M65B3
  | M65B4
  | M66B1
  | M66B2
  | M66B3
  | M66B4
  | M67B1
  | M67B2
  | M67B3
  | M67B4
  | M68B1
  | M68B2
  | M68B3
  | M68B4
  | M69B1
  | M69B2
  | M69B3
  | M69B4
  | M70B1
  | M70B2
  | M70B3
  | M70B4
  | M71B1
  | M71B2
  | M71B3
  | M71B4
  | M72B1
  | M72B2
  | M72B3
  | M72B4
  | M73B1
  | M73B2
  | M73B3
  | M73B4
  | M74B1
  | M74B2
  | M74B3
  | M74B4
  | M75B1
  | M75B2
  | M75B3
  | M75B4
  | M76B1
  | M76B2
  | M76B3
  | M76B4
  | M77B1
  | M77B2
  | M77B3
  | M77B4
  | M78B1
  | M78B2
  | M78B3
  | M78B4
  | M79B1
  | M79B2
  | M79B3
  | M79B4
  | M80B1
  | M80B2
  | M80B3
  | M80B4
  | M81B1
  | M81B2
  | M81B3
  | M81B4
  | M82B1
  | M82B2
  | M82B3
  | M82B4
  | M83B1
  | M83B2
  | M83B3
  | M83B4
  | M84B1
  | M84B2
  | M84B3

type BeatInstruction =
  { t :: Number
  , b :: BeatNumber
  , m :: MeasureNumber
  , mb :: MeasureNumberBeatNumber
  }


instance Eq BeatNumber where
  eq = eq `on` b2s
instance Eq MeasureNumber where
  eq = eq `on` m2s
instance Eq MeasureNumberBeatNumber where
  eq = eq `on` mb2s

instance Ord BeatNumber where
  compare = compare `on` b2s
instance Ord MeasureNumber where
  compare = compare `on` m2i
instance Ord MeasureNumberBeatNumber where
  compare = compare `on` (mb2info >>> _.t)

b2s :: BeatNumber -> String
b2s B1 = "B1"
b2s B2 = "B2"
b2s B3 = "B3"
b2s B4 = "B4"

instance Show BeatNumber where
  show = b2s
instance Show MeasureNumber where
  show = m2s
instance Show MeasureNumberBeatNumber where
  show = mb2s

type BeatInstruction2 = Column
  /\ MeasureNumberBeatNumber
  /\ MeasureNumberBeatNumber
  /\ MeasureNumberBeatNumber
  /\ MeasureNumberBeatNumber

-- 1 4 6 9 11 15
beats2 :: Array BeatInstruction2
beats2 =
  [ C6 /\ M1B1 /\ M2B1 /\ M3B1 /\ M4B1
  , C9 /\ M5B1 /\ M6B1 /\ M7B1 /\ M8B1
  , C6 /\ M9B1 /\ M10B1 /\ M11B1 /\ M12B1
  , C4 /\ M10B1 /\ M11B1 /\ M12B1 /\ M13B1
  , C6 /\ M11B1 /\ M12B1 /\ M13B1 /\ M14B1
  , C9 /\ M12B1 /\ M13B1 /\ M14B1 /\ M15B1
  , C11 /\ M13B1 /\ M14B1 /\ M15B1 /\ M16B1
  , C9 /\ M14B1 /\ M15B1 /\ M16B1 /\ M17B1
  , C6 /\ M15B1 /\ M16B1 /\ M17B1 /\ M18B1
  , C4 /\ M16B1 /\ M17B1 /\ M18B1 /\ M19B1
  , C6 /\ M17B1 /\ M18B1 /\ M19B1 /\ M20B1
  , C9 /\ M18B1 /\ M19B1 /\ M20B1 /\ M21B1
  , C11 /\ M19B1 /\ M20B1 /\ M21B1 /\ M22B1
  , C9 /\ M20B1 /\ M21B1 /\ M22B1 /\ M23B1
  , C6 /\ M21B1 /\ M22B1 /\ M23B1 /\ M24B1
  , C4 /\ M22B1 /\ M23B1 /\ M24B1 /\ M25B1
  , C6 /\ M23B1 /\ M24B1 /\ M25B1 /\ M26B1
  --
  , C9 /\ M24B1 /\ M25B1 /\ M26B1 /\ M27B1
  , C4 /\ M24B3 /\ M25B3 /\ M26B3 /\ M27B3
  , C6 /\ M25B1 /\ M26B1 /\ M27B1 /\ M28B1
  , C11 /\ M25B3 /\ M26B3 /\ M27B3 /\ M28B3
  , C9 /\ M26B1 /\ M27B1 /\ M28B1 /\ M29B1
  , C4 /\ M26B3 /\ M27B3 /\ M28B3 /\ M29B3
  , C6 /\ M27B1 /\ M28B1 /\ M29B1 /\ M30B1
  , C11 /\ M27B3 /\ M28B3 /\ M29B3 /\ M30B3
  , C9 /\ M28B1 /\ M29B1 /\ M30B1 /\ M31B1
  , C4 /\ M28B3 /\ M29B3 /\ M30B3 /\ M31B3
  , C6 /\ M29B1 /\ M30B1 /\ M31B1 /\ M32B1
  , C11 /\ M29B3 /\ M30B3 /\ M31B3 /\ M32B3
  , C9 /\ M30B1 /\ M31B1 /\ M32B1 /\ M33B1
  , C4 /\ M30B3 /\ M31B3 /\ M32B3 /\ M33B3
  , C6 /\ M31B1 /\ M32B1 /\ M33B1 /\ M34B1
  , C11 /\ M31B3 /\ M32B3 /\ M33B3 /\ M34B3
  --
  , C9 /\ M32B1 /\ M33B1 /\ M34B1 /\ M35B1
  , C4 /\ M33B1 /\ M33B3 /\ M34B1 /\ M34B3
  , C6 /\ M34B1 /\ M35B1 /\ M36B1 /\ M37B1
  , C11 /\ M35B1 /\ M35B3 /\ M36B1 /\ M37B3
  , C4 /\ M36B1 /\ M37B1 /\ M38B1 /\ M39B1
  , C9 /\ M37B1 /\ M37B3 /\ M38B1 /\ M38B3
  , C11 /\ M38B1 /\ M39B1 /\ M40B1 /\ M41B1
  , C6 /\ M39B1 /\ M39B3 /\ M40B1 /\ M40B3
  --
  , C1 /\ M40B1 /\ M42B1 /\ M44B1 /\ M46B1
  , C9 /\ M40B1 /\ M41B1 /\ M42B1 /\ M43B1
  , C4 /\ M41B1 /\ M41B3 /\ M42B1 /\ M42B3
  , C6 /\ M42B1 /\ M43B1 /\ M44B1 /\ M45B1
  , C11 /\ M43B1 /\ M43B3 /\ M44B1 /\ M44B3
  , C15 /\ M44B1 /\ M46B1 /\ M48B1 /\ M50B1
  , C4 /\ M44B1 /\ M45B1 /\ M46B1 /\ M47B1
  , C9 /\ M45B1 /\ M45B3 /\ M46B1 /\ M46B3
  , C11 /\ M46B1 /\ M47B1 /\ M48B1 /\ M49B1
  , C6 /\ M47B1 /\ M47B3 /\ M48B1 /\ M49B3
  --
  , C9 /\ M48B1 /\ M48B3 /\ M49B1 /\ M49B3
  , C6 /\ M48B2 /\ M48B4 /\ M49B2 /\ M49B4
  , C9 /\ M48B3 /\ M49B1 /\ M49B3 /\ M50B1
  , C6 /\ M48B4 /\ M49B2 /\ M49B4 /\ M50B2
  , C9 /\ M49B1 /\ M49B3 /\ M50B1 /\ M50B3
  , C6 /\ M49B2 /\ M49B4 /\ M50B2 /\ M50B4
  , C9 /\ M49B3 /\ M50B1 /\ M50B3 /\ M51B1
  , C6 /\ M49B4 /\ M50B2 /\ M50B4 /\ M51B2
  , C9 /\ M50B1 /\ M50B3 /\ M51B1 /\ M51B3
  , C6 /\ M50B2 /\ M50B4 /\ M51B2 /\ M51B4
  , C9 /\ M50B3 /\ M51B1 /\ M51B3 /\ M52B1
  , C6 /\ M50B4 /\ M51B2 /\ M51B4 /\ M52B2
  , C9 /\ M51B1 /\ M51B3 /\ M52B1 /\ M52B3
  , C6 /\ M51B2 /\ M51B4 /\ M52B2 /\ M52B4
  , C9 /\ M51B3 /\ M52B1 /\ M52B3 /\ M53B1
  , C6 /\ M51B4 /\ M52B2 /\ M52B4 /\ M53B2
  --
  , C9 /\ M52B1 /\ M52B2 /\ M52B3 /\ M52B4
  , C11 /\ M52B1 /\ M52B2 /\ M52B3 /\ M52B4
  , C6 /\ M53B1 /\ M53B2 /\ M53B3 /\ M53B4
  , C4 /\ M53B1 /\ M53B2 /\ M53B3 /\ M53B4
  , C9 /\ M54B1 /\ M54B2 /\ M54B3 /\ M54B4
  , C11 /\ M54B1 /\ M54B2 /\ M54B3 /\ M54B4
  , C6 /\ M55B1 /\ M55B2 /\ M55B3 /\ M55B4
  , C4 /\ M55B1 /\ M55B2 /\ M55B3 /\ M55B4
  --
  , C1 /\ M56B1 /\ M57B1 /\ M58B1 /\ M59B1
  , C9 /\ M56B1 /\ M56B2 /\ M56B3 /\ M56B4
  , C11 /\ M56B1 /\ M56B2 /\ M57B3 /\ M57B4
  , C6 /\ M57B1 /\ M57B2 /\ M57B3 /\ M57B4
  , C4 /\ M57B1 /\ M57B2 /\ M57B3 /\ M57B4
  , C15 /\ M58B1 /\ M59B1 /\ M60B1 /\ M61B1
  , C9 /\ M58B1 /\ M58B2 /\ M58B3 /\ M58B4
  , C11 /\ M58B1 /\ M58B2 /\ M58B3 /\ M58B4
  , C6 /\ M59B1 /\ M59B2 /\ M59B3 /\ M59B4
  , C4 /\ M59B1 /\ M59B2 /\ M59B3 /\ M59B4

  ]

beats :: List BeatInstruction
beats = mb2info M1B1
  : mb2info M2B1
  : mb2info M3B1
  : mb2info M3B3
  : mb2info M4B1
  : mb2info M5B1
  : mb2info M6B1
  : mb2info M7B1
  : mb2info M7B3
  : mb2info M8B1
  : mb2info M9B1
  : mb2info M10B1
  : mb2info M11B1
  : mb2info M12B1
  : mb2info M13B1
  : mb2info M14B1
  : mb2info M15B1
  : mb2info M15B3
  : mb2info M16B1
  : mb2info M17B1
  : mb2info M18B1
  : mb2info M19B1
  : mb2info M19B3
  : mb2info M20B1
  : mb2info M21B1
  : mb2info M22B1
  : mb2info M23B1
  : mb2info M23B3
  : mb2info M24B1
  : mb2info M24B2
  : mb2info M24B3
  : mb2info M24B4
  : mb2info M25B1
  : mb2info M25B2
  : mb2info M25B3
  : mb2info M25B4
  : mb2info M26B1
  : mb2info M26B2
  : mb2info M26B3
  : mb2info M26B4
  : mb2info M27B1
  : mb2info M27B2
  : mb2info M27B3
  : mb2info M27B4
  : mb2info M28B1
  : mb2info M28B2
  : mb2info M28B3
  : mb2info M28B4
  : mb2info M29B1
  : mb2info M29B2
  : mb2info M29B3
  : mb2info M29B4
  : mb2info M30B1
  : mb2info M30B2
  : mb2info M30B3
  : mb2info M30B4
  : mb2info M31B1
  : mb2info M31B2
  : mb2info M31B3
  : mb2info M31B4
  : mb2info M32B1
  : mb2info M32B2
  : mb2info M32B3
  : mb2info M32B4
  : mb2info M33B1
  : mb2info M33B2
  : mb2info M33B3
  : mb2info M33B4
  : mb2info M34B1
  : mb2info M34B2
  : mb2info M34B3
  : mb2info M34B4
  : mb2info M35B1
  : mb2info M35B2
  : mb2info M35B3
  : mb2info M35B4
  : mb2info M36B1
  : mb2info M36B2
  : mb2info M36B3
  : mb2info M36B4
  : mb2info M37B1
  : mb2info M37B2
  : mb2info M37B3
  : mb2info M37B4
  : mb2info M38B1
  : mb2info M38B2
  : mb2info M38B3
  : mb2info M38B4
  : mb2info M39B1
  : mb2info M39B2
  : mb2info M39B3
  : mb2info M39B4
  : mb2info M40B1
  : mb2info M40B2
  : mb2info M40B3
  : mb2info M40B4
  : mb2info M41B1
  : mb2info M41B2
  : mb2info M41B3
  : mb2info M41B4
  : mb2info M42B1
  : mb2info M42B2
  : mb2info M42B3
  : mb2info M42B4
  : mb2info M43B1
  : mb2info M43B2
  : mb2info M43B3
  : mb2info M43B4
  : mb2info M44B1
  : mb2info M44B2
  : mb2info M44B3
  : mb2info M44B4
  : mb2info M45B1
  : mb2info M45B2
  : mb2info M45B3
  : mb2info M45B4
  : mb2info M46B1
  : mb2info M46B2
  : mb2info M46B3
  : mb2info M46B4
  : mb2info M47B1
  : mb2info M47B2
  : mb2info M47B3
  : mb2info M47B4
  : mb2info M48B1
  : mb2info M48B2
  : mb2info M48B3
  : mb2info M48B4
  : mb2info M49B1
  : mb2info M49B2
  : mb2info M49B3
  : mb2info M49B4
  : mb2info M50B1
  : mb2info M50B2
  : mb2info M50B3
  : mb2info M50B4
  : mb2info M51B1
  : mb2info M51B2
  : mb2info M51B3
  : mb2info M51B4
  : mb2info M52B1
  : mb2info M52B2
  : mb2info M52B3
  : mb2info M52B4
  : mb2info M53B1
  : mb2info M53B2
  : mb2info M53B3
  : mb2info M53B4
  : mb2info M54B1
  : mb2info M54B2
  : mb2info M54B3
  : mb2info M54B4
  : mb2info M55B1
  : mb2info M55B2
  : mb2info M55B3
  : mb2info M55B4
  : mb2info M56B1
  : mb2info M56B2
  : mb2info M56B3
  : mb2info M56B4
  : mb2info M57B1
  : mb2info M57B2
  : mb2info M57B3
  : mb2info M57B4
  : mb2info M58B1
  : mb2info M58B2
  : mb2info M58B3
  : mb2info M58B4
  : mb2info M59B1
  : mb2info M59B2
  : mb2info M59B3
  : mb2info M59B4
  : mb2info M60B1
  : mb2info M60B2
  : mb2info M60B3
  : mb2info M60B4
  : mb2info M61B1
  : mb2info M61B2
  : mb2info M61B3
  : mb2info M61B4
  : mb2info M62B1
  : mb2info M62B2
  : mb2info M62B3
  : mb2info M62B4
  : mb2info M63B1
  : mb2info M63B2
  : mb2info M63B3
  : mb2info M63B4
  : mb2info M64B1
  : mb2info M64B2
  : mb2info M64B3
  : mb2info M64B4
  : mb2info M65B1
  : mb2info M65B2
  : mb2info M65B3
  : mb2info M65B4
  : mb2info M66B1
  : mb2info M66B2
  : mb2info M66B3
  : mb2info M66B4
  : mb2info M67B1
  : mb2info M67B2
  : mb2info M67B3
  : mb2info M67B4
  : mb2info M68B1
  : mb2info M68B2
  : mb2info M68B3
  : mb2info M68B4
  : mb2info M69B1
  : mb2info M69B2
  : mb2info M69B3
  : mb2info M69B4
  : mb2info M70B1
  : mb2info M70B2
  : mb2info M70B3
  : mb2info M70B4
  : mb2info M71B1
  : mb2info M71B2
  : mb2info M71B3
  : mb2info M71B4
  : mb2info M72B1
  : mb2info M72B2
  : mb2info M72B3
  : mb2info M72B4
  : mb2info M73B1
  : mb2info M73B2
  : mb2info M73B3
  : mb2info M73B4
  : mb2info M74B1
  : mb2info M74B2
  : mb2info M74B3
  : mb2info M74B4
  : mb2info M75B1
  : mb2info M75B2
  : mb2info M75B3
  : mb2info M75B4
  : mb2info M76B1
  : mb2info M76B2
  : mb2info M76B3
  : mb2info M76B4
  : mb2info M77B1
  : mb2info M77B2
  : mb2info M77B3
  : mb2info M77B4
  : mb2info M78B1
  : mb2info M78B2
  : mb2info M78B3
  : mb2info M78B4
  : mb2info M79B1
  : mb2info M79B2
  : mb2info M79B3
  : mb2info M79B4
  : mb2info M80B1
  : mb2info M80B2
  : mb2info M80B3
  : mb2info M80B4
  : mb2info M81B1
  : mb2info M81B2
  : mb2info M81B3
  : mb2info M81B4
  : mb2info M82B1
  : mb2info M82B2
  : mb2info M82B3
  : mb2info M82B4
  : mb2info M83B1
  : mb2info M83B2
  : mb2info M83B3
  : mb2info M83B4
  : mb2info M84B1
  : mb2info M84B2
  : mb2info M84B3
  : Nil

mb2info :: MeasureNumberBeatNumber -> BeatInstruction
mb2info M1B1 = { t: 6.941271, b: B1, m: M1, mb: M1B1 }
mb2info M2B1 = { t: 8.451580, b: B1, m: M2, mb: M2B1 }
mb2info M3B1 = { t: 9.913475, b: B1, m: M3, mb: M3B1 }
mb2info M3B3 = { t: 10.615054, b: B3, m: M3, mb: M3B3 }
mb2info M4B1 = { t: 11.349264, b: B1, m: M4, mb: M4B1 }
mb2info M5B1 = { t: 12.726317, b: B1, m: M5, mb: M5B1 }
mb2info M6B1 = { t: 14.149054, b: B1, m: M6, mb: M6B1 }
mb2info M7B1 = { t: 15.548949, b: B1, m: M7, mb: M7B1 }
mb2info M7B3 = { t: 16.253791, b: B3, m: M7, mb: M7B3 }
mb2info M8B1 = { t: 16.965160, b: B1, m: M8, mb: M8B1 }
mb2info M9B1 = { t: 18.394423, b: B1, m: M9, mb: M9B1 }
mb2info M10B1 = { t: 19.751897, b: B1, m: M10, mb: M10B1 }
mb2info M11B1 = { t: 21.177897, b: B1, m: M11, mb: M11B1 }
mb2info M12B1 = { t: 22.577792, b: B1, m: M12, mb: M12B1 }
mb2info M13B1 = { t: 24.000529, b: B1, m: M13, mb: M13B1 }
mb2info M14B1 = { t: 25.393897, b: B1, m: M14, mb: M14B1 }
mb2info M15B1 = { t: 26.806845, b: B1, m: M15, mb: M15B1 }
mb2info M15B3 = { t: 27.482318, b: B3, m: M15, mb: M15B3 }
mb2info M16B1 = { t: 28.177371, b: B1, m: M16, mb: M16B1 }
mb2info M17B1 = { t: 29.528319, b: B1, m: M17, mb: M17B1 }
mb2info M18B1 = { t: 30.921687, b: B1, m: M18, mb: M18B1 }
mb2info M19B1 = { t: 32.253056, b: B1, m: M19, mb: M19B1 }
mb2info M19B3 = { t: 32.928530, b: B3, m: M19, mb: M19B3 }
mb2info M20B1 = { t: 33.604003, b: B1, m: M20, mb: M20B1 }
mb2info M21B1 = { t: 34.948424, b: B1, m: M21, mb: M21B1 }
mb2info M22B1 = { t: 36.270004, b: B1, m: M22, mb: M22B1 }
mb2info M23B1 = { t: 37.630741, b: B1, m: M23, mb: M23B1 }
mb2info M23B3 = { t: 38.293162, b: B3, m: M23, mb: M23B3 }
mb2info M24B1 = { t: 38.981688, b: B1, m: M24, mb: M24B1 }
mb2info M24B2 = { t: 39.324320, b: B2, m: M24, mb: M24B2 }
mb2info M24B3 = { t: 39.666951, b: B3, m: M24, mb: M24B3 }
mb2info M24B4 = { t: 40.009583, b: B4, m: M24, mb: M24B4 }
mb2info M25B1 = { t: 40.319583, b: B1, m: M25, mb: M25B1 }
mb2info M25B2 = { t: 40.685057, b: B2, m: M25, mb: M25B2 }
mb2info M25B3 = { t: 40.982004, b: B3, m: M25, mb: M25B3 }
mb2info M25B4 = { t: 41.246320, b: B4, m: M25, mb: M25B4 }
mb2info M26B1 = { t: 41.660741, b: B1, m: M26, mb: M26B1 }
mb2info M26B2 = { t: 42.016425, b: B2, m: M26, mb: M26B2 }
mb2info M26B3 = { t: 42.332952, b: B3, m: M26, mb: M26B3 }
mb2info M26B4 = { t: 42.659267, b: B4, m: M26, mb: M26B4 }
mb2info M27B1 = { t: 42.985583, b: B1, m: M27, mb: M27B1 }
mb2info M27B2 = { t: 43.318425, b: B2, m: M27, mb: M27B2 }
mb2info M27B3 = { t: 43.621899, b: B3, m: M27, mb: M27B3 }
mb2info M27B4 = { t: 43.961267, b: B4, m: M27, mb: M27B4 }
mb2info M28B1 = { t: 44.290846, b: B1, m: M28, mb: M28B1 }
mb2info M28B2 = { t: 44.633478, b: B2, m: M28, mb: M28B2 }
mb2info M28B3 = { t: 44.953268, b: B3, m: M28, mb: M28B3 }
mb2info M28B4 = { t: 45.286110, b: B4, m: M28, mb: M28B4 }
mb2info M29B1 = { t: 45.615689, b: B1, m: M29, mb: M29B1 }
mb2info M29B2 = { t: 45.964847, b: B2, m: M29, mb: M29B2 }
mb2info M29B3 = { t: 46.297689, b: B3, m: M29, mb: M29B3 }
mb2info M29B4 = { t: 46.640320, b: B4, m: M29, mb: M29B4 }
mb2info M30B1 = { t: 46.953584, b: B1, m: M30, mb: M30B1 }
mb2info M30B2 = { t: 47.279899, b: B2, m: M30, mb: M30B2 }
mb2info M30B3 = { t: 47.619268, b: B3, m: M30, mb: M30B3 }
mb2info M30B4 = { t: 47.965163, b: B4, m: M30, mb: M30B4 }
mb2info M31B1 = { t: 48.249057, b: B1, m: M31, mb: M31B1 }
mb2info M31B2 = { t: 48.585163, b: B2, m: M31, mb: M31B2 }
mb2info M31B3 = { t: 48.901689, b: B3, m: M31, mb: M31B3 }
mb2info M31B4 = { t: 49.273689, b: B4, m: M31, mb: M31B4 }
mb2info M32B1 = { t: 49.567373, b: B1, m: M32, mb: M32B1 }
mb2info M32B2 = { t: 49.910005, b: B2, m: M32, mb: M32B2 }
mb2info M32B3 = { t: 50.229794, b: B3, m: M32, mb: M32B3 }
mb2info M32B4 = { t: 50.569163, b: B4, m: M32, mb: M32B4 }
mb2info M33B1 = { t: 50.892216, b: B1, m: M33, mb: M33B1 }
mb2info M33B2 = { t: 51.234847, b: B2, m: M33, mb: M33B2 }
mb2info M33B3 = { t: 51.554637, b: B3, m: M33, mb: M33B3 }
mb2info M33B4 = { t: 51.890742, b: B4, m: M33, mb: M33B4 }
mb2info M34B1 = { t: 52.220321, b: B1, m: M34, mb: M34B1 }
mb2info M34B2 = { t: 52.536847, b: B2, m: M34, mb: M34B2 }
mb2info M34B3 = { t: 52.853374, b: B3, m: M34, mb: M34B3 }
mb2info M34B4 = { t: 53.196005, b: B4, m: M34, mb: M34B4 }
mb2info M35B1 = { t: 53.512532, b: B1, m: M35, mb: M35B1 }
mb2info M35B2 = { t: 53.851900, b: B2, m: M35, mb: M35B2 }
mb2info M35B3 = { t: 54.171690, b: B3, m: M35, mb: M35B3 }
mb2info M35B4 = { t: 54.507795, b: B4, m: M35, mb: M35B4 }
mb2info M36B1 = { t: 54.817795, b: B1, m: M36, mb: M36B1 }
mb2info M36B2 = { t: 55.144111, b: B2, m: M36, mb: M36B2 }
mb2info M36B3 = { t: 55.457374, b: B3, m: M36, mb: M36B3 }
mb2info M36B4 = { t: 55.777163, b: B4, m: M36, mb: M36B4 }
mb2info M37B1 = { t: 56.090427, b: B1, m: M37, mb: M37B1 }
mb2info M37B2 = { t: 56.413479, b: B2, m: M37, mb: M37B2 }
mb2info M37B3 = { t: 56.733269, b: B3, m: M37, mb: M37B3 }
mb2info M37B4 = { t: 57.075900, b: B4, m: M37, mb: M37B4 }
mb2info M38B1 = { t: 57.395690, b: B1, m: M38, mb: M38B1 }
mb2info M38B2 = { t: 57.722006, b: B2, m: M38, mb: M38B2 }
mb2info M38B3 = { t: 58.032006, b: B3, m: M38, mb: M38B3 }
mb2info M38B4 = { t: 58.358322, b: B4, m: M38, mb: M38B4 }
mb2info M39B1 = { t: 58.678111, b: B1, m: M39, mb: M39B1 }
mb2info M39B2 = { t: 58.988111, b: B2, m: M39, mb: M39B2 }
mb2info M39B3 = { t: 59.307901, b: B3, m: M39, mb: M39B3 }
mb2info M39B4 = { t: 59.644006, b: B4, m: M39, mb: M39B4 }
mb2info M40B1 = { t: 59.960532, b: B1, m: M40, mb: M40B1 }
mb2info M40B2 = { t: 60.296637, b: B2, m: M40, mb: M40B2 }
mb2info M40B3 = { t: 60.622953, b: B3, m: M40, mb: M40B3 }
mb2info M40B4 = { t: 60.955795, b: B4, m: M40, mb: M40B4 }
mb2info M41B1 = { t: 61.278848, b: B1, m: M41, mb: M41B1 }
mb2info M41B2 = { t: 61.595374, b: B2, m: M41, mb: M41B2 }
mb2info M41B3 = { t: 61.905374, b: B3, m: M41, mb: M41B3 }
mb2info M41B4 = { t: 62.241480, b: B4, m: M41, mb: M41B4 }
mb2info M42B1 = { t: 62.544953, b: B1, m: M42, mb: M42B1 }
mb2info M42B2 = { t: 62.874532, b: B2, m: M42, mb: M42B2 }
mb2info M42B3 = { t: 63.194322, b: B3, m: M42, mb: M42B3 }
mb2info M42B4 = { t: 63.494533, b: B4, m: M42, mb: M42B4 }
mb2info M43B1 = { t: 63.807796, b: B1, m: M43, mb: M43B1 }
mb2info M43B2 = { t: 64.140638, b: B2, m: M43, mb: M43B2 }
mb2info M43B3 = { t: 64.450638, b: B3, m: M43, mb: M43B3 }
mb2info M43B4 = { t: 64.770427, b: B4, m: M43, mb: M43B4 }
mb2info M44B1 = { t: 65.103270, b: B1, m: M44, mb: M44B1 }
mb2info M44B2 = { t: 65.445901, b: B2, m: M44, mb: M44B2 }
mb2info M44B3 = { t: 65.775480, b: B3, m: M44, mb: M44B3 }
mb2info M44B4 = { t: 66.088743, b: B4, m: M44, mb: M44B4 }
mb2info M45B1 = { t: 66.411796, b: B1, m: M45, mb: M45B1 }
mb2info M45B2 = { t: 66.728322, b: B2, m: M45, mb: M45B2 }
mb2info M45B3 = { t: 67.041586, b: B3, m: M45, mb: M45B3 }
mb2info M45B4 = { t: 67.371164, b: B4, m: M45, mb: M45B4 }
mb2info M46B1 = { t: 67.655059, b: B1, m: M46, mb: M46B1 }
mb2info M46B2 = { t: 67.987901, b: B2, m: M46, mb: M46B2 }
mb2info M46B3 = { t: 68.310954, b: B3, m: M46, mb: M46B3 }
mb2info M46B4 = { t: 68.627480, b: B4, m: M46, mb: M46B4 }
mb2info M47B1 = { t: 68.924428, b: B1, m: M47, mb: M47B1 }
mb2info M47B2 = { t: 69.244217, b: B2, m: M47, mb: M47B2 }
mb2info M47B3 = { t: 69.573796, b: B3, m: M47, mb: M47B3 }
mb2info M47B4 = { t: 69.913165, b: B4, m: M47, mb: M47B4 }
mb2info M48B1 = { t: 70.216638, b: B1, m: M48, mb: M48B1 }
mb2info M48B2 = { t: 70.533165, b: B2, m: M48, mb: M48B2 }
mb2info M48B3 = { t: 70.859481, b: B3, m: M48, mb: M48B3 }
mb2info M48B4 = { t: 71.185796, b: B4, m: M48, mb: M48B4 }
mb2info M49B1 = { t: 71.495796, b: B1, m: M49, mb: M49B1 }
mb2info M49B2 = { t: 71.828639, b: B2, m: M49, mb: M49B2 }
mb2info M49B3 = { t: 72.145165, b: B3, m: M49, mb: M49B3 }
mb2info M49B4 = { t: 72.500849, b: B4, m: M49, mb: M49B4 }
mb2info M50B1 = { t: 72.794533, b: B1, m: M50, mb: M50B1 }
mb2info M50B2 = { t: 73.117586, b: B2, m: M50, mb: M50B2 }
mb2info M50B3 = { t: 73.414534, b: B3, m: M50, mb: M50B3 }
mb2info M50B4 = { t: 73.773481, b: B4, m: M50, mb: M50B4 }
mb2info M51B1 = { t: 74.050849, b: B1, m: M51, mb: M51B1 }
mb2info M51B2 = { t: 74.377165, b: B2, m: M51, mb: M51B2 }
mb2info M51B3 = { t: 74.664323, b: B3, m: M51, mb: M51B3 }
mb2info M51B4 = { t: 74.984113, b: B4, m: M51, mb: M51B4 }
mb2info M52B1 = { t: 75.300639, b: B1, m: M52, mb: M52B1 }
mb2info M52B2 = { t: 75.623692, b: B2, m: M52, mb: M52B2 }
mb2info M52B3 = { t: 75.953271, b: B3, m: M52, mb: M52B3 }
mb2info M52B4 = { t: 76.217586, b: B4, m: M52, mb: M52B4 }
mb2info M53B1 = { t: 76.517797, b: B1, m: M53, mb: M53B1 }
mb2info M53B2 = { t: 76.866955, b: B2, m: M53, mb: M53B2 }
mb2info M53B3 = { t: 77.167165, b: B3, m: M53, mb: M53B3 }
mb2info M53B4 = { t: 77.500008, b: B4, m: M53, mb: M53B4 }
mb2info M54B1 = { t: 77.806744, b: B1, m: M54, mb: M54B1 }
mb2info M54B2 = { t: 78.159166, b: B2, m: M54, mb: M54B2 }
mb2info M54B3 = { t: 78.475692, b: B3, m: M54, mb: M54B3 }
mb2info M54B4 = { t: 78.834639, b: B4, m: M54, mb: M54B4 }
mb2info M55B1 = { t: 79.134850, b: B1, m: M55, mb: M55B1 }
mb2info M55B2 = { t: 79.464429, b: B2, m: M55, mb: M55B2 }
mb2info M55B3 = { t: 79.774429, b: B3, m: M55, mb: M55B3 }
mb2info M55B4 = { t: 80.097482, b: B4, m: M55, mb: M55B4 }
mb2info M56B1 = { t: 80.433587, b: B1, m: M56, mb: M56B1 }
mb2info M56B2 = { t: 80.750113, b: B2, m: M56, mb: M56B2 }
mb2info M56B3 = { t: 81.069903, b: B3, m: M56, mb: M56B3 }
mb2info M56B4 = { t: 81.392955, b: B4, m: M56, mb: M56B4 }
mb2info M57B1 = { t: 81.702955, b: B1, m: M57, mb: M57B1 }
mb2info M57B2 = { t: 82.045587, b: B2, m: M57, mb: M57B2 }
mb2info M57B3 = { t: 82.342534, b: B3, m: M57, mb: M57B3 }
mb2info M57B4 = { t: 82.678640, b: B4, m: M57, mb: M57B4 }
mb2info M58B1 = { t: 83.004956, b: B1, m: M58, mb: M58B1 }
mb2info M58B2 = { t: 83.292113, b: B2, m: M58, mb: M58B2 }
mb2info M58B3 = { t: 83.634745, b: B3, m: M58, mb: M58B3 }
mb2info M58B4 = { t: 83.983903, b: B4, m: M58, mb: M58B4 }
mb2info M59B1 = { t: 84.264535, b: B1, m: M59, mb: M59B1 }
mb2info M59B2 = { t: 84.597377, b: B2, m: M59, mb: M59B2 }
mb2info M59B3 = { t: 84.913903, b: B3, m: M59, mb: M59B3 }
mb2info M59B4 = { t: 85.276114, b: B4, m: M59, mb: M59B4 }
mb2info M60B1 = { t: 85.589377, b: B1, m: M60, mb: M60B1 }
mb2info M60B2 = { t: 85.892851, b: B2, m: M60, mb: M60B2 }
mb2info M60B3 = { t: 86.206114, b: B3, m: M60, mb: M60B3 }
mb2info M60B4 = { t: 86.565061, b: B4, m: M60, mb: M60B4 }
mb2info M61B1 = { t: 86.855482, b: B1, m: M61, mb: M61B1 }
mb2info M61B2 = { t: 87.185061, b: B2, m: M61, mb: M61B2 }
mb2info M61B3 = { t: 87.495061, b: B3, m: M61, mb: M61B3 }
mb2info M61B4 = { t: 87.854009, b: B4, m: M61, mb: M61B4 }
mb2info M62B1 = { t: 88.186851, b: B1, m: M62, mb: M62B1 }
mb2info M62B2 = { t: 88.490324, b: B2, m: M62, mb: M62B2 }
mb2info M62B3 = { t: 88.784009, b: B3, m: M62, mb: M62B3 }
mb2info M62B4 = { t: 89.097272, b: B4, m: M62, mb: M62B4 }
mb2info M63B1 = { t: 89.449693, b: B1, m: M63, mb: M63B1 }
mb2info M63B2 = { t: 89.805377, b: B2, m: M63, mb: M63B2 }
mb2info M63B3 = { t: 90.102325, b: B3, m: M63, mb: M63B3 }
mb2info M63B4 = { t: 90.458009, b: B4, m: M63, mb: M63B4 }
mb2info M64B1 = { t: 90.774535, b: B1, m: M64, mb: M64B1 }
mb2info M64B2 = { t: 91.100851, b: B2, m: M64, mb: M64B2 }
mb2info M64B3 = { t: 91.423904, b: B3, m: M64, mb: M64B3 }
mb2info M64B4 = { t: 91.746956, b: B4, m: M64, mb: M64B4 }
mb2info M65B1 = { t: 92.043904, b: B1, m: M65, mb: M65B1 }
mb2info M65B2 = { t: 92.389799, b: B2, m: M65, mb: M65B2 }
mb2info M65B3 = { t: 92.706325, b: B3, m: M65, mb: M65B3 }
mb2info M65B4 = { t: 93.032641, b: B4, m: M65, mb: M65B4 }
mb2info M66B1 = { t: 93.316535, b: B1, m: M66, mb: M66B1 }
mb2info M66B2 = { t: 93.672220, b: B2, m: M66, mb: M66B2 }
mb2info M66B3 = { t: 93.956114, b: B3, m: M66, mb: M66B3 }
mb2info M66B4 = { t: 94.288957, b: B4, m: M66, mb: M66B4 }
mb2info M67B1 = { t: 94.615272, b: B1, m: M67, mb: M67B1 }
mb2info M67B2 = { t: 94.948115, b: B2, m: M67, mb: M67B2 }
mb2info M67B3 = { t: 95.218957, b: B3, m: M67, mb: M67B3 }
mb2info M67B4 = { t: 95.590957, b: B4, m: M67, mb: M67B4 }
mb2info M68B1 = { t: 95.910746, b: B1, m: M68, mb: M68B1 }
mb2info M68B2 = { t: 96.230536, b: B2, m: M68, mb: M68B2 }
mb2info M68B3 = { t: 96.556852, b: B3, m: M68, mb: M68B3 }
mb2info M68B4 = { t: 96.873378, b: B4, m: M68, mb: M68B4 }
mb2info M69B1 = { t: 97.183378, b: B1, m: M69, mb: M69B1 }
mb2info M69B2 = { t: 97.532536, b: B2, m: M69, mb: M69B2 }
mb2info M69B3 = { t: 97.842536, b: B3, m: M69, mb: M69B3 }
mb2info M69B4 = { t: 98.162325, b: B4, m: M69, mb: M69B4 }
mb2info M70B1 = { t: 98.436431, b: B1, m: M70, mb: M70B1 }
mb2info M70B2 = { t: 98.782325, b: B2, m: M70, mb: M70B2 }
mb2info M70B3 = { t: 99.082536, b: B3, m: M70, mb: M70B3 }
mb2info M70B4 = { t: 99.392536, b: B4, m: M70, mb: M70B4 }
mb2info M71B1 = { t: 99.679694, b: B1, m: M71, mb: M71B1 }
mb2info M71B2 = { t: 100.019062, b: B2, m: M71, mb: M71B2 }
mb2info M71B3 = { t: 100.329062, b: B3, m: M71, mb: M71B3 }
mb2info M71B4 = { t: 100.635799, b: B4, m: M71, mb: M71B4 }
mb2info M72B1 = { t: 100.945799, b: B1, m: M72, mb: M72B1 }
mb2info M72B2 = { t: 101.301484, b: B2, m: M72, mb: M72B2 }
mb2info M72B3 = { t: 101.650642, b: B3, m: M72, mb: M72B3 }
mb2info M72B4 = { t: 101.931273, b: B4, m: M72, mb: M72B4 }
mb2info M73B1 = { t: 102.224957, b: B1, m: M73, mb: M73B1 }
mb2info M73B2 = { t: 102.515378, b: B2, m: M73, mb: M73B2 }
mb2info M73B3 = { t: 102.776431, b: B3, m: M73, mb: M73B3 }
mb2info M73B4 = { t: 103.099484, b: B4, m: M73, mb: M73B4 }
mb2info M74B1 = { t: 103.487800, b: B1, m: M74, mb: M74B1 }
mb2info M74B2 = { t: 103.830431, b: B2, m: M74, mb: M74B2 }
mb2info M74B3 = { t: 104.150221, b: B3, m: M74, mb: M74B3 }
mb2info M74B4 = { t: 104.466747, b: B4, m: M74, mb: M74B4 }
mb2info M75B1 = { t: 104.760431, b: B1, m: M75, mb: M75B1 }
mb2info M75B2 = { t: 105.031273, b: B2, m: M75, mb: M75B2 }
mb2info M75B3 = { t: 105.383695, b: B3, m: M75, mb: M75B3 }
mb2info M75B4 = { t: 105.729589, b: B4, m: M75, mb: M75B4 }
mb2info M76B1 = { t: 106.023274, b: B1, m: M76, mb: M76B1 }
mb2info M76B2 = { t: 106.343063, b: B2, m: M76, mb: M76B2 }
mb2info M76B3 = { t: 106.649800, b: B3, m: M76, mb: M76B3 }
mb2info M76B4 = { t: 106.972853, b: B4, m: M76, mb: M76B4 }
mb2info M77B1 = { t: 107.292642, b: B1, m: M77, mb: M77B1 }
mb2info M77B2 = { t: 107.638537, b: B2, m: M77, mb: M77B2 }
mb2info M77B3 = { t: 107.912642, b: B3, m: M77, mb: M77B3 }
mb2info M77B4 = { t: 108.268326, b: B4, m: M77, mb: M77B4 }
mb2info M78B1 = { t: 108.565274, b: B1, m: M78, mb: M78B1 }
mb2info M78B2 = { t: 108.901379, b: B2, m: M78, mb: M78B2 }
mb2info M78B3 = { t: 109.230958, b: B3, m: M78, mb: M78B3 }
mb2info M78B4 = { t: 109.547484, b: B4, m: M78, mb: M78B4 }
mb2info M79B1 = { t: 109.837906, b: B1, m: M79, mb: M79B1 }
mb2info M79B2 = { t: 110.203379, b: B2, m: M79, mb: M79B2 }
mb2info M79B3 = { t: 110.519906, b: B3, m: M79, mb: M79B3 }
mb2info M79B4 = { t: 110.849485, b: B4, m: M79, mb: M79B4 }
mb2info M80B1 = { t: 111.123590, b: B1, m: M80, mb: M80B1 }
mb2info M80B2 = { t: 111.453169, b: B2, m: M80, mb: M80B2 }
mb2info M80B3 = { t: 111.772958, b: B3, m: M80, mb: M80B3 }
mb2info M80B4 = { t: 112.089485, b: B4, m: M80, mb: M80B4 }
mb2info M81B1 = { t: 112.363590, b: B1, m: M81, mb: M81B1 }
mb2info M81B2 = { t: 112.712748, b: B2, m: M81, mb: M81B2 }
mb2info M81B3 = { t: 113.019485, b: B3, m: M81, mb: M81B3 }
mb2info M81B4 = { t: 113.339274, b: B4, m: M81, mb: M81B4 }
mb2info M82B1 = { t: 113.636222, b: B1, m: M82, mb: M82B1 }
mb2info M82B2 = { t: 113.965801, b: B2, m: M82, mb: M82B2 }
mb2info M82B3 = { t: 114.275801, b: B3, m: M82, mb: M82B3 }
mb2info M82B4 = { t: 114.608643, b: B4, m: M82, mb: M82B4 }
mb2info M83B1 = { t: 114.895801, b: B1, m: M83, mb: M83B1 }
mb2info M83B2 = { t: 115.225380, b: B2, m: M83, mb: M83B2 }
mb2info M83B3 = { t: 115.525590, b: B3, m: M83, mb: M83B3 }
mb2info M83B4 = { t: 115.835590, b: B4, m: M83, mb: M83B4 }
mb2info M84B1 = { t: 116.155380, b: B1, m: M84, mb: M84B1 }
mb2info M84B2 = { t: 116.481696, b: B2, m: M84, mb: M84B2 }
mb2info M84B3 = { t: 116.850433, b: B3, m: M84, mb: M84B3 }

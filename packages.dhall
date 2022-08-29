let upstream =
      https://github.com/purescript/package-sets/releases/download/psc-0.15.2-20220621/packages.dhall
        sha256:78caab14e4d8ff3886a057f0380c2d4a2500e2ee7ab5c1d32a0f9ce5c71eedd8

let overrides =
      { rito =
        { dependencies =
          [ "aff"
          , "bolson"
          , "control"
          , "convertable-options"
          , "effect"
          , "either"
          , "hyrule"
          , "exceptions"
          , "exists"
          , "fast-vect"
          , "foldable-traversable"
          , "heterogeneous"
          , "integers"
          , "maybe"
          , "newtype"
          , "numbers"
          , "prelude"
          , "profunctor"
          , "profunctor-lenses"
          , "random"
          , "record"
          , "refs"
          , "safe-coerce"
          , "unsafe-coerce"
          , "variant"
          , "web-html"
          , "web-touchevents"
          , "web-uievents"
          ]
        , repo = "https://github.com/mikesol/purescript-rito.git"
        , version = "v0.1.1"
        }
      , bolson =
        { dependencies = [ "arrays" ]
        , repo = "https://github.com/mikesol/purescript-bolson.git"
        , version = "v0.1.1"
        }
      , joyride-types =
        { dependencies = [ "either" ]
        , repo = "https://github.com/mikesol/joyride-types.git"
        , version = "v0.0.1"
        }
      , deku =
        { dependencies =
          [ "arrays"
          , "bolson"
          , "control"
          , "effect"
          , "fast-vect"
          , "filterable"
          , "foldable-traversable"
          , "foreign-object"
          , "heterogeneous"
          , "hyrule"
          , "maybe"
          , "monoid-extras"
          , "newtype"
          , "ordered-collections"
          , "prelude"
          , "profunctor"
          , "quickcheck"
          , "record"
          , "refs"
          , "safe-coerce"
          , "st"
          , "strings"
          , "transformers"
          , "unsafe-coerce"
          , "web-dom"
          , "web-events"
          , "web-html"
          ]
        , repo = "https://github.com/mikesol/purescript-deku.git"
        , version = "v0.6.1"
        }
      , hyrule =
        { dependencies = [ "arrays" ]
        , repo = "https://github.com/mikesol/purescript-hyrule.git"
        , version = "v2.1.0"
        }
      , ocarina =
        { dependencies =
          [ "aff"
          , "aff-promise"
          , "arraybuffer-types"
          , "avar"
          , "bolson"
          , "control"
          , "convertable-options"
          , "effect"
          , "either"
          , "exceptions"
          , "hyrule"
          , "fast-vect"
          , "foldable-traversable"
          , "foreign"
          , "foreign-object"
          , "homogeneous"
          , "indexed-monad"
          , "integers"
          , "js-timers"
          , "lists"
          , "maybe"
          , "newtype"
          , "numbers"
          , "ordered-collections"
          , "prelude"
          , "profunctor"
          , "profunctor-lenses"
          , "random"
          , "refs"
          , "safe-coerce"
          , "simple-json"
          , "sized-vectors"
          , "tuples"
          , "type-equality"
          , "typelevel"
          , "typelevel-prelude"
          , "unsafe-coerce"
          , "unsafe-reference"
          , "variant"
          , "web-events"
          , "web-file"
          , "web-html"
          ]
        , repo = "https://github.com/mikesol/purescript-ocarina.git"
        , version = "v1.3.1"
        }
      }

in  upstream // overrides


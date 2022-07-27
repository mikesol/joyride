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
        , version = "v0.0.2"
        }
        , bolson =
        { dependencies =
          [ "arrays"
          ]
        , repo = "https://github.com/mikesol/purescript-bolson.git"
        -- , version = "always-tmp"
        , version = "main"
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
        --, version = "always-tmp"
        , version = "main"
        }
      , hyrule =
        { dependencies =
          [ "arrays"
          ]
        , repo = "https://github.com/mikesol/purescript-hyrule.git"
        --, version = "always-tmp"
        , version = "mailboxed"
        }
      }

in  upstream // overrides

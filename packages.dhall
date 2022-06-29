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
      }

in  upstream // overrides

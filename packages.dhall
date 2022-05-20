let upstream =
      https://github.com/purescript/package-sets/releases/download/psc-0.15.0-20220516/packages.dhall
        sha256:b0bf932de16a10b7d69c6bbbb31ec9ca575237c43a999fa32e59e35eb8c024a1

let overrides =
      { js-timers =
        { dependencies = [ "refs" ]
        , repo = "https://github.com/mikesol/purescript-js-timers.git"
        , version = "rename-functions"
        }
      }

let additions =
      { event =
        { dependencies =
          [ "console"
          , "effect"
          , "filterable"
          , "nullable"
          , "unsafe-reference"
          , "js-timers"
          , "now"
          ]
        , repo = "https://github.com/mikesol/purescript-event.git"
        , version = "v1.6.6"
        }
      , fast-vect =
        { dependencies =
          [ "console"
          , "effect"
          , "filterable"
          , "nullable"
          , "unsafe-reference"
          , "js-timers"
          , "now"
          ]
        , repo = "https://github.com/sigma-andex/purescript-fast-vect.git"
        , version = "main"
        }
      , bolson =
        { dependencies = [ "heterogeneous", "fast-vect" ]
        , repo = "https://github.com/mikesol/purescript-bolson.git"
        , version = "v0.0.2"
        }
      , variant =
        { dependencies =
          [ "assert"
          , "control"
          , "effect"
          , "either"
          , "enums"
          , "foldable-traversable"
          , "lists"
          , "maybe"
          , "partial"
          , "prelude"
          , "record"
          , "tuples"
          , "type-equality"
          , "unsafe-coerce"
          ]
        , repo = "https://github.com/natefaubion/purescript-variant.git"
        , version = "v8.0.0"
        }
      , everythings-better-with-variants =
        { dependencies =
          [ "control"
          , "foldable-traversable"
          , "invariant"
          , "newtype"
          , "prelude"
          , "variant"
          ]
        , repo =
            "https://github.com/mikesol/purescript-everythings-better-with-variants.git"
        , version = "v0.0.0"
        }
      , typelevel-eval =
        { dependencies =
          [ "effect"
          , "leibniz"
          , "prelude"
          , "tuples"
          , "typelevel-prelude"
          , "unsafe-coerce"
          ]
        , repo = "https://github.com/mikesol/purescript-typelevel-eval.git"
        , version = "mikesol"
        }
      , behaviors =
        { dependencies =
          [ "effect"
          , "ordered-collections"
          , "filterable"
          , "nullable"
          , "event"
          , "web-html"
          , "web-events"
          , "web-uievents"
          ]
        , repo = "https://github.com/mikesol/purescript-behaviors.git"
        , version = "v8.2.1"
        }
      , row-options =
        { dependencies = [ "homogeneous", "heterogeneous" ]
        , repo = "https://github.com/mikesol/purescript-row-options.git"
        , version = "v0.0.2"
        }
      , convertable-options =
        { dependencies = [ "console", "effect", "maybe", "record" ]
        , repo =
            "https://github.com/natefaubion/purescript-convertable-options.git"
        , version = "v1.0.0"
        }
      , monoid-extras =
        { dependencies = [ "profunctor-lenses" ]
        , repo = "https://github.com/mikesol/purescript-monoid-extras.git"
        , version = "v0.0.1"
        }
      , deku =
        { dependencies =
          [ "arrays"
          , "monoid-extras"
          , "behaviors"
          , "control"
          , "datetime"
          , "effect"
          , "either"
          , "event"
          , "exists"
          , "foldable-traversable"
          , "foreign"
          , "foreign-object"
          , "indexed-monad"
          , "lists"
          , "maybe"
          , "newtype"
          , "nullable"
          , "ordered-collections"
          , "prelude"
          , "record"
          , "refs"
          , "simple-json"
          , "sized-vectors"
          , "transformers"
          , "tuples"
          , "typelevel"
          , "typelevel-peano"
          , "unsafe-coerce"
          , "variant"
          , "canvas"
          , "web-dom"
          , "web-events"
          ]
        , repo = "https://github.com/mikesol/purescript-deku.git"
        , version = "v0.4.3"
        }
      , wags =
        { dependencies =
          [ "aff-promise"
          , "behaviors"
          , "avar"
          , "homogeneous"
          , "convertable-options"
          , "control"
          , "datetime"
          , "everythings-better-with-variants"
          , "either"
          , "event"
          , "exists"
          , "foldable-traversable"
          , "foreign"
          , "foreign-object"
          , "indexed-monad"
          , "lists"
          , "maybe"
          , "newtype"
          , "nullable"
          , "ordered-collections"
          , "prelude"
          , "record"
          , "refs"
          , "simple-json"
          , "sized-vectors"
          , "transformers"
          , "tuples"
          , "typelevel"
          , "typelevel-peano"
          , "unsafe-coerce"
          , "variant"
          , "canvas"
          , "web-dom"
          , "web-events"
          ]
        , repo = "https://github.com/mikesol/purescript-wags.git"
        , version = "v1.1.6"
        }
      , rito =
        { dependencies =
          [ "aff"
          , "bolson"
          , "control"
          , "convertable-options"
          , "effect"
          , "either"
          , "event"
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
        , version = "main"
        }
      , homogeneous =
        { dependencies =
          [ "arrays"
          , "assert"
          , "control"
          , "effect"
          , "enums"
          , "foldable-traversable"
          , "foreign-object"
          , "lists"
          , "maybe"
          , "partial"
          , "prelude"
          , "tuples"
          , "typelevel-prelude"
          , "unsafe-coerce"
          , "variant"
          ]
        , repo = "https://github.com/mikesol/purescript-homogeneous.git"
        , version = "0.15.0"
        }
      , simple-json =
        { dependencies =
          [ "arrays"
          , "assert"
          , "control"
          , "effect"
          , "enums"
          , "foldable-traversable"
          , "foreign-object"
          , "lists"
          , "maybe"
          , "partial"
          , "prelude"
          , "tuples"
          , "typelevel-prelude"
          , "unsafe-coerce"
          , "variant"
          ]
        , repo = "https://github.com/mikesol/purescript-simple-json.git"
        , version = "0.15.0"
        }
      }

in  upstream // overrides // additions

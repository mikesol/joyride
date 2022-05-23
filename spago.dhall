{ name = "joyride"
, dependencies =
  [ "aff"
  , "aff-promise"
  , "affjax"
  , "affjax-web"
  , "arrays"
  , "barlow-lens"
  , "behaviors"
  , "bolson"
  , "console"
  , "control"
  , "datetime"
  , "debug"
  , "deku"
  , "effect"
  , "either"
  , "event"
  , "exceptions"
  , "filterable"
  , "foldable-traversable"
  , "foreign"
  , "foreign-object"
  , "integers"
  , "js-timers"
  , "lists"
  , "maybe"
  , "newtype"
  , "now"
  , "numbers"
  , "ordered-collections"
  , "parallel"
  , "partial"
  , "prelude"
  , "profunctor-lenses"
  , "random"
  , "record"
  , "refs"
  , "rito"
  , "routing"
  , "safe-coerce"
  , "simple-json"
  , "strings"
  , "transformers"
  , "tuples"
  , "typelevel"
  , "unsafe-coerce"
  , "variant"
  , "wags"
  , "web-dom"
  , "web-events"
  , "web-html"
  , "web-uievents"
  ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs" ]
}

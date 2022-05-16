{ name = "joyride"
, dependencies =
  [ "console"
  , "control"
  , "deku"
  , "effect"
  , "event"
  , "foldable-traversable"
  , "integers"
  , "prelude"
  , "rito"
  , "wags"
  , "web-dom"
  , "web-html"
  ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs" ]
}

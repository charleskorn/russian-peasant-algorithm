#!/usr/bin/env bash

set -e

function main {
  case "$1" in

  setup)
    setup
    ;;

  build)
    build
    ;;

  test)
    test
    ;;

  prod)
    prod
    ;;

  dev)
    dev
    ;;

  deploy)
    deploy
    ;;

  *)
    help
    exit 1
    ;;

  esac
}

function help {
  echo "Usage:"
  echo " setup        installs dependencies needed to build, run and test the application"
  echo " build        builds the assets created by this project, ready for production use"
  echo " test         runs the test suite"
  echo " dev          builds and runs the application in development mode, which starts a server with auto-recompile and auto-reload enabled"
  echo " prod         builds and runs the application in production mode"
  echo " deploy       push all committed changes to Heroku (requires the Heroku Git remote to have been configured already - use the Heroku toolbelt to configure this)"
}

function setup {
  npm install
  npm prune
}

function build {
  npm run-script heroku-postbuild
}

function test {
  npm run-script lint
  npm test
}

function prod {
  build

  export PORT=${PORT:-8080}
  npm run-script run
}

function dev {
  npm run-script dev
}

function deploy {
  git push heroku master
}

main "$@"

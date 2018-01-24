#!/usr/bin/env bash

npm version --no-git-tag-version $TRAVIS_TAG
if [[ $? == 0 ]];
then
  npm publish
else
  echo "Could not publish npm version: $TRAVIS_TAG"
  exit 1;
fi

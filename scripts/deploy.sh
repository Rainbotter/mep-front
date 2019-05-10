#!/usr/bin/env bash

if [ "$TRAVIS_BRANCH" == "master" ]; then
  echo "Building docker image"
docker --version
docker build -t rainbowloutre/mep-front .
docker login -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD";
docker push rainbowloutre/mep-front;
else
  echo "Nothing to build as this is not the master branch"
fi

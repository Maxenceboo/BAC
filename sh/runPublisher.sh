#!/bin/bash
if [ ! "$(command -v docker)" ]; then
    echo "docker could not be found"
    exit 0
fi

dir=$(pwd)

RABBIT_HOST=rabbit
NETWORK_NAME=mqtt-network

if [ ! "$(docker network ls | grep "$NETWORK_NAME")" ]; then
  echo "Creating network ..."
  docker network create $NETWORK_NAME
fi

docker run --rm -it -v $dir:/opt/ -w /opt/ --net $NETWORK_NAME -e BROKER_HOST=$RABBIT_HOST node:18.19.0-buster node src/main/js/publisher/bac.js
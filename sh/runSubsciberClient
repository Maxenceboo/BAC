#!/bin/bash
if [ ! "$(command -v docker)" ]; then
    echo "docker could not be found"
    exit 0
fi
dir=$(pwd)

RABBIT_HOST=rabbit
NETWORK_NAME=mqtt-network


docker run -v $dir:/opt/ -w /opt/ --net $NETWORK_NAME -e BROKER_HOST=$RABBIT_HOST node:18.19.0-buster node src/main/js/subscribe/client.js 
#!/bin/bash

# Vérifier si Docker est installé
if [ ! "$(command -v docker)" ]; then
    echo "Docker n'a pas pu être trouvé."
    exit 1
fi

PG_CONTAINER_NAME=my_postgres
NETWORK_NAME=mqtt-network

# Définir les variables d'environnement pour le script
dir=$(pwd)


docker run --rm -d --name $PG_CONTAINER_NAME \
    --env-file .env_pg \
    --net $NETWORK_NAME \
    postgres

docker exec -it $PG_CONTAINER_NAME psql -U postgres -c "CREATE DATABASE mydb;"
    
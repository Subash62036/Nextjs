#!/bin/bash

cd /home/ubuntu/rapido-bid-admin
if [ "$DEPLOYMENT_GROUP_NAME" = "stag-admin-code-deploy" ]; then
  export APPLICATION_ENVIRONMENT=staging
  export DOCKER_FILE=docker-compose-stag.yml
  export ENVIRONMENT_FILE=staging.env
else
  export APPLICATION_ENVIRONMENT=production
  export DOCKER_FILE=docker-compose-prod.yml
  export ENVIRONMENT_FILE=production.env
fi
docker-compose -f $DOCKER_FILE down

#!/bin/bash

cd /home/ubuntu/rapido-bid-admin

if [ "$DEPLOYMENT_GROUP_NAME" = "stag-admin-code-deploy" ]; then
  export APPLICATION_ENVIRONMENT=staging
  export DOCKER_FILE=docker-compose-stag.yml
  export DOCKER_ENVIRONMENT=staging.env
else
  export APPLICATION_ENVIRONMENT=production
  export DOCKER_FILE=docker-compose-prod.yml
  export DOCKER_ENVIRONMENT=production.env
fi

export 921073560172.dkr.ecr.ap-south-1.amazonaws.com/admin-rapido-bid
echo "Application env: "$APPLICATION_ENVIRONMENT
export TAG=$(aws ssm get-parameters --names "admin-production-tag" --with-decryption --query "Parameters[0].Value" --region "ap-south-1" | tr -d '"')
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 921073560172.dkr.ecr.ap-south-1.amazonaws.com
docker pull 921073560172.dkr.ecr.ap-south-1.amazonaws.com/admin-rapido-bid:$TAG
docker-compose -f $DOCKER_FILE up -d

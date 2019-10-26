#! /bin/bash

cd api && npm i && cd ..
cd front && npm i && cd ..
cd e2e && npm i && cd ..

docker-compose build
docker-compose up -d
docker-compose exec e2e npm run tslint
docker-compose exec api npm run tslint
docker-compose exec front ng lint

docker-compose exec e2e npm run e2e
docker-compose exec api npm run test
docker-compose exec front ng test
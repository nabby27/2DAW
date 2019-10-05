# API

> By default when api service is up run the project on `http://localhost:8080/api`

## Node comands

#### Run project without build
```shell
docker-compose exec api npm run dev
```

#### Build project to js and run
```shell
docker-compose exec api npm run start
```

#### Build project to js

The build artifacts will be stored in the `build/` directory.
```shell
docker-compose exec api npm run build
```

#### Run tslint
```shell
docker-compose exec api npm run tslint
```

#### Run unit test
```shell
docker-compose exec api npm run test
```

## Migrations

#### Create
```shell
docker-compose exec api db-migrate create name-migration
```

#### Run migrations
```shell
docker-compose exec api db-migrate up
```

#### Rollback migrations
```shell
docker-compose exec api db-migrate down
```



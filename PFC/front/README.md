# Front

> By default when front service is up run the project on `http://localhost:4200`

## Node comands

#### Run project without build
```shell
docker-compose exec front npm run start
```

#### Build project to js

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
```shell
docker-compose exec front ng build
```

#### Run linter
```shell
docker-compose exec front ng lint
```

#### Run unit test
```shell
docker-compose exec front ng test
```

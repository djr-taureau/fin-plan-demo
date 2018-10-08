# Database Migrations

## Build data migrations docker image

Build a docker image which will be used to run database migrations.

``` sh
yarn build:migrations
```

1. Compile Entities
    1. Typescript Models
    1. `dist/migrations`
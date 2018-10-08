compileTypescript() {
    echo "Clean dist migrations ..."
    rm -rf dist/migrations

    echo "Building data entities ..."
    tsc -p microservices/tsconfig.migrations.json
}

generateMigrations() {
    echo "generating migrations $1"
    yarn typeorm migration:generate -n $1 --dir microservices/libs/migrations
}

echo "Building Migrations"
echo "Stage 1 - Complie typescript"
compileTypescript

echo "Stage 2 - Generate migrations"
generateMigrations $1

echo "Completed Building Migrations"
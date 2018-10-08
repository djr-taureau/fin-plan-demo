
compileTypescript() {
    echo "Clean dist migrations ..."
    rm -rf dist/migrations

    echo "Building data entities ..."
    tsc -p microservices/tsconfig.migrations.json
}

runMigrations() {
    echo "Run migrations"
    yarn typeorm migration:run
}

echo "Run Migrations"
echo "Stage 1 - Complie typescript"
compileTypescript

echo "Stage 2 - Run migrations"
runMigrations

echo "Completed Running migrations"
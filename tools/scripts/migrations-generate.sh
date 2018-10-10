./node_modules/.bin/ts-node \
    ./node_modules/.bin/typeorm \
    migration:generate \
    -n ${1:-migration} \
    -d infrastructure/migrations
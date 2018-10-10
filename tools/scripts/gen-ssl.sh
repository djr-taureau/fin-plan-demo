SVR_KEY=ssl/server.key
SVR_CRT=ssl/server.crt
SVR_CNF=ssl/server.cnf
SVR_PFX=ssl/server.pfx
CERT_PASS=v8P!66^@%4U

# Generate local certs for Angular development
openssl req \
    -newkey rsa:2048 \
    -x509 \
    -nodes \
    -keyout $SVR_KEY \
    -new \
    -out $SVR_CRT \
    -config $SVR_CNF \
    -sha256 \
    -passin pass:$CERT_PASS \
    -days 365

# Generate local certs for Azure Function development
openssl pkcs12 \
    -export \
    -out $SVR_PFX \
    -passout pass: \
    -inkey $SVR_KEY \
    -in $SVR_CRT



echo "Please install the certs into your local store".
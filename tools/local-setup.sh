#!/bin/sh|

certPass=v8P!66^@%4U
openssl genrsa -des3 -passout pass:$certPass -out local/rootCA.key 2048
openssl req -x509 -new -nodes -key local/rootCA.key -passin pass:$certPass -sha256 -days 1024 -out local/rootCA.pem -config local/rootCA.csr.cnf
openssl req -x509 -new -nodes -key local/rootCA.key -passin pass:$certPass -sha256 -days 1024 -out local/rootCA.crt -config local/rootCA.csr.cnf

openssl req -new -sha256 -nodes -out local/server.csr -newkey rsa:2048 -keyout local/server.key -config local/server.csr.cnf
openssl x509 -req -in local/server.csr -CA local/rootCA.crt -passin pass:$certPass -CAkey local/rootCA.key -CAcreateserial -out local/server.crt -days 500 -sha256 -extfile local/v3.ext

echo "Please install the certs into your local store".
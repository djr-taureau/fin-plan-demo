FROM mcr.microsoft.com/mssql/server:2017-latest


ENV ACCEPT_EULA=Y MSSQL_SA_PASSWORD=Password123!

RUN mkdir -p /bootstrap
WORKDIR /bootstrap
COPY . /bootstrap

RUN chmod +x /bootstrap/seed-data.sh

EXPOSE 1433

VOLUME /var/opt/mssql

CMD /bin/bash ./bootstrap.sh
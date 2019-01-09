# Lifeworks POC for Development and Management

Monorepo for Lifeworks

## Local Setup

Local development environment setup.

## Tooling Setup

Install development tools

- yarn - `npm i yarn -g`
- nrwl/nx - `yarn global add @angular/cli`
- Docker - https://docs.docker.com/install/
- npx -  `yarn global add npx`
- mssql-scripter - `pip install mssql-scripter` - https://github.com/Microsoft/mssql-scripter
- Azure Command Line - https://docs.microsoft.com/en-us/cli/azure/install-azure-cli
- Azure Functions Tools - https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#v2
- Dotnet Core SDK 2.2 - https://dotnet.microsoft.com/download
- Azure Data Studio - https://docs.microsoft.com/en-us/sql/azure-data-studio/download?view=sql-server-2017
- Azure Storage Explorer -  https://azure.microsoft.com/en-us/features/storage-explorer/

## SSL Setup

### Generate Certs for development

Ensure you `/tools/ssl-certs.sh` has execute permissions on your development machine if using OSX or \*UNIX

``` sh
cd tools
chmod +x ./ssl-certs.sh
```

Run `yarn setup:ssl` or `npm run setup:ssl` that will create local certs to use on your machine for
SSL.

### Trust the cert on your machine

#### OSX

- Double click on the certificate (server.crt)
- Select your desired keychain (login should suffice)
- Add the certificate
- Open Keychain Access if it isn’t already open
- Select the keychain you chose earlier
- You should see the certificate localhost
- Double click on the certificate
- Expand Trust
- Select the option Always Trust in When using this certificate
- Close the certificate window

#### Windows

Follow the directions here to enable the cert snap-in for mmc
https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/how-to-view-certificates-with-the-mmc-snap-in

Follow the directions here to install the CARoot
https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/how-to-create-temporary-certificates-for-use-during-development

## Docker SQL Server

If you do not already have a Docker SQL Server run `yarn: setup:sql`. If you have made changes to the Seed Data or Entities run `yarn sql:update`. If you just need to start the sql server again run
`yarn sql:start`.

## Angular Structure

### Applications

Angular Applications are application that can be run and deployed on their own using
the various libraries

Angular Applications live in the `/apps`

#### Lifeworks Applications

1. Lifeworks Portal - `yarn start` or `yarn start lifeworks`
2. Lifeworks Admin - `yarn start lifeworks-admin`
3. Development Sandbox - `yarn sand` or `yarn start sandbox-site`

\*if using `npm` instead of `yarn` replace `yarn [command]` with `npm run [command]`

## Libraries

### UI Components Library

UI Components are components that do not rely on
any business logic or services of any application or library outside of its self.

#### UI-Components are allowed to import the following

- Angular Modules
- 3rd Party Modules
- @lifeworks/ui-components

use the following command to create a new UI-Component

`ng g lib [name] --directory=ui-components`

UI-Components live in `/libs/ui-components/[component-name]`

### Core Library

The core library houses specific services, interfaces, classes and pipes which are vital to an 'Application` an example of this would be an Authentication service or HTTP Interceptors. Most pieces of the Core Library are single use.

The Core library lives in `/libs/core`

### Common Library

The common library houses commonly used
functions, interfaces, classes, pipes and services which can be used within feature modules outside of the generic ui-components.

For example a `Pipe` which selects the first item from an array.

### Feature Library

Flow

```sh
FPage -> FService -> FStore
FEffect -> FApiService -> FReducer
```

#### testing module for service

- Mock Data
- Mock Services
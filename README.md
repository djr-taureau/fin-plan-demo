# Lifeworks POC for Development and Management
This is a POC Concept site to show developers how things should be structured
and for mangagers to show how the project shoudld be structured using VSO.


# Local Setup

## SSL Setup

### Generate Certs for development
Run `yarn setup` or `npm run setup` that will create local certs to use on your machine for
SSL.

### Trust the cert on your machine

#### OSX
Open Keychain Access on your Mac and go to the Certificates category in your System keychain. Once there, import the rootCA.pem using File > Import Items. Double click the imported certificate and change the “When using this certificate:” dropdown to Always Trust in the Trust section.

#### Windows
Follow the directions here to enable the cert snap-in for mmc
https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/how-to-view-certificates-with-the-mmc-snap-in

Follow the directions here to install the CARoot
https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/how-to-create-temporary-certificates-for-use-during-development

# Angular Structure

## Applications
Angular Applications are application that can be run and deployed on their own using
the various libraries

Angular Applications live in the `/apps`

## Libraries

### UI Components Library
UI Components are components that do not rely on
any buisness logic or services of any application or library outside of its self.


UI-Components are allowed to import the following
- Angular Modules
- 3rd Party Modules
- @lifeworks/ui-components

use the following command to create a new UI-Component

`ng g lib [name] --directory=ui-components`

UI-Components live in `/libs/ui-components/[component-name]`

### Core Library
The core library houses specific services, interfaces, classes and pipes which are vitial to an 'Application` an example of this would be an Authentication service or HTTP Inteceptors. Most pieces of the Core Library are single use.

The Core library lives in `/libs/core`

### Common Library
The common libary houses commonly used
functions, interfaces, classes, pipes and services which can be used within feature modules outside of the generic ui-components.

For example a `Pipe` which selects the first item from an array.


### Feature Library

Flow
```
FPage -> FService -> FStore
FEffect -> FApiService -> FReducer
```

testing module for service
- Mock Data
- Mock Services
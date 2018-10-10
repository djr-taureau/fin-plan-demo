# Lifeworks' Authentication Experience

Dotnet Core project for UI customization to the authentication experience.
The authentication experience managed through [Azure Active Directory B2C](AAD_B2C). The UI is hosted in an Azure Web Application.

## Setup

Make sure to do a `npm install` or run `yarn` to install dependencies.

## Styling using SASS

Use the `/Styles` folder off the root of the project.

## Assets

All links in the ui need to be absolute urls. `https://location.com/asset.jpg` vs `/asset.jpg`. This is a limitation of [Azure Active Directory B2C](AAD_B2C).

## Policies

Polices are managed in the [Azure Active Directory B2C](AAD_B2C) tenant in Azure. Changes to Policies must be manually deployed.

## Data Access

We use Azure Functions to manage the retrieval of data durning the authentication experience.

## Hosted UI

The UI is hosted in a Azure Web Application on the primary azure tenant.

### Scripted Build and Deploy to develop

To deploy the web app you must have the [Azure CLI](azure_cli) installed and be authenticated.

```sh
az login
```

Deploy to **Development** environment.

```sh
# -g is the Azure Resource Group the WebApp is deployed in.
# -n is the name of the WebApp in Azure.

# using Yarn
yarn package:deploy -- -- -g lifeworks-infrastructure-dev -n lifeworks-b2c-ui-dev-wa

# Using NPM
npm run package:deploy -- -- -g lifeworks-infrastructure-dev -n lifeworks-b2c-ui-dev-wa
```

[AAD_B2C]: https://docs.microsoft.com/en-us/azure/active-directory-b2c/
[azure_cli]: https://docs.microsoft.com/en-us/cli/azure/get-started-with-azure-cli?view=azure-cli-latest
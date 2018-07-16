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


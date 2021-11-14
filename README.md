# POC of a multi-language app served with both in SSR and SPA

This is a POC of a setup of an application that serves content in 2 languages (English and German) in a server side rendering model as well as client side rendering using React.

It also proposes an approach to authenticate users using credentials to access private content, the credentials to access private content in both SSR and client rendering are the same:

email: `admin`

password: `password`

## Setup

### Installing dependencies

First we have to intall dependencies for both the BE and the FE, hence we will have 2 scripts to use here.

**back-end dependencies**: installation script: `cd server && yarn`

**front-end dependencies**: installtion script: `cd client && yarn`

**Important**: please make sure you are in the root location of this repo before you run the scripts above.

## Running the app locally

Once the dependencies installed in both projects, we can now proceed with building the app before running it, and running it is achievable by executing the script below:

Running script: `yarn start`

**Important**: please make sure you are in the root location of this repository before your run script above.

This script will build the react app, copy the build artifacts and put them in a location where the NodeJs server can use them to serve the application.

It will also kick in the NodeJs web server once the react app is built.

To access the app, use this link: `http://localhost:4000/`

## Testing

There are a couple tests written to assert our NodeJs server behaves how expected, to run them, please head to the `server` folder and run: `yarn test`.

## Out of scope

Since this is a POC, a few things are kept in the side such as code formatting, security, bundling the code that NodeJs runs, styling, ... etc.
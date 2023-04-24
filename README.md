# Boilerplate Express-Kanban server

## Install
`npm i or yarn`

## Start on production mode
`npm start`

## Start on local mode
`npm run local` start the server locally with connection to local MongoDB

## Composition
* Routing `./src/modules/core/routes.js`
* DB (Mongo) `./src/modules/core/db.js`
* Parse response (body-parser) `./src/modules/core/parseResponse.js`

## Modules
All modules should be placed in ./src/modules

### Home
Greeting

### User
CRUD operations for user entity

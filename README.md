# Social CRM

Developed by Clint Baker

## Overview

This is an app developed to keep track of all of your relationships. Relationship management for personal use!

### What the app does and where this happens

#### Auth

- Auth occurs through the authRouter.ts
  - Sign up for an account and sign in

#### Database

- We're using a local SQLite database

SCHEMA

1. User
2. Connections

## How to use

### Development

```
npm install
npm run dev
```

Make sure your .env file contains the following:

```
NODE_ENV="dev"
DATABASE_URL="file:./dev.db"
JWT_SECRET="jwt secret"
```

### Production

Deploy to Render. Make sure to build first.

#### Prod ENV Variables

```
DATABASE_URL=[production db url]
JWT_SECRET=[production secret]
```

### Typescript server routes

#### CONNECTION

```
GET /api/connection
GET /api/connection/:connectionId
POST /api/connection
PUT /api/connection/:connectionId
DELETE /api/connection/:connectionId
```

##### GET ALL CONNECTIONS

`GET /api/connection`

- bearer token for auth

##### GET ONE CONNECTION

`GET /api/connection/:connectionId`

- bearer token for auth

##### CREATE CONNECTION

`POST /api/connection`

- bearer token for auth
- req.body contains fields
- fields include:
  - name (required), company, position, notes, phone, email, location, relationship, tags, lastContact, priority, birthday

##### EDIT CONNECTION

`PUT /api/connection/:connectionId`

- bearer token for auth
- req.body contains fields to be updated

##### DELETE CONNECTION

`DELETE /api/connection/:connectionId`

- bearer token for auth

### Dependencies

#### Dev

- ts-node: in order to run typescript files
- typescript: for development in ts
- prisma: interact with database (ORM)

#### Prod

- express: to handle server routing
- morgan: for logging
- chalk: command line styling
- dotenv: import env variables
- brcypt: hashing passwords
- express-jwt: middleware for web tokens
- jsonwebtoken: generate tokens

## Todo

1.  Build out front end interface

        - Install TailwindCSS
        - Install routing
        - Install context
        - Build out landing page
        - Build login / signup page
        - Build user dashboard
              - Show user's connections
              - Create interface to add / edit / delete connections
              - Create individual connection page or modal

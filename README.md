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

1. Define connection schema based on spreadsheet
2. Build out routes and handlers for connections
3. Test buildling out connections (make sure it's locked down by user)

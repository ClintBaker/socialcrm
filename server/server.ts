import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import { expressjwt } from 'express-jwt'
// import environment variables from .env file
import 'dotenv/config'

import { connectionRouter } from './routers/connectionRouter'
import { authRouter } from './routers/authRouter'

// instantiate app
const app = express()

// middleware
app.use(express.json())
app.use(morgan('dev'))

// authentication
app.use('/auth', authRouter)

// welcome message
app.get('/', (req, res, next) => {
  res.send('Welcome to Social CRM!')
})

// protected routes
app.use(
  '/api',
  expressjwt({
    secret: process.env.JWT_SECRET as string,
    algorithms: ['HS256'],
  })
)

// routes
app.use('/api/connection', connectionRouter)

// error handler
app.use((err: any, req: any, res: any, next: any) => {
  res.send({ error: err.message, message: 'error' })
})

// start server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(chalk.magenta(`Welcome to Social CRM!`))
  console.log(chalk.cyan(`App is listening on port ${PORT}.`))
  // add url if in development
  if (process.env.NODE_ENV === 'dev') {
    console.log(
      chalk.cyan('App available at ') + chalk.blue(`http://localhost:${PORT}`)
    )
  }
})

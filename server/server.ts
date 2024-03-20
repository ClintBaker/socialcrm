import express from 'express'
import morgan from 'morgan'
import { authRouter } from './routers/authRouter'
import chalk from 'chalk'
// import environment variables from .env file
import 'dotenv/config'

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

// routing

// error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.log(err)
})

// start server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(chalk.magenta(`Welcome to Social CRM!`))
  console.log(chalk.cyan(`App is listening on port ${PORT}.`))
  // add url if in development
  if (process.env.ENV === 'dev') {
    console.log(
      chalk.cyan('App available at ') + chalk.blue(`http://localhost:${PORT}`)
    )
  }
})

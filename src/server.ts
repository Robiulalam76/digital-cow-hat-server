/* eslint-disable no-console */
/* eslint-disable consistent-type-definitions */
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorlogger, logger } from './shared/logger'
import { Server } from 'http'

process.on('uncaughtException', err => {
  errorlogger.error(err)
  process.exit(1)
})

let server: Server

async function connectDB() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`🔋 database is connected successfull`)
    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    errorlogger.error(`Faild to connect database: ${error}`)
  }

  process.on('unhandledRejection', error => {
    console.log('unhandled Rejection is Detected! SS')

    if (server) {
      server.close(() => {
        errorlogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

connectDB()

process.on('SIGABRT', err => {
  errorlogger.error(err)
  if (server) {
    server.close()
  }
})

export default connectDB

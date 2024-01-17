const app = require('./app')
const PORT = process.env.PORT || 3500
const { logEvents } = require('./middleware/logger')
const mongoose = require('mongoose')
const connectDB = require('./db/dbConn')

// Handling uncaught Exception
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`)
  console.log('Shutting down the server for handling uncaught exception')
})

if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'config/.env'
  })
}

// kickstart server
console.log(process.env.NODE_ENV)
connectDB()

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
  // unhandled promise rejection
  process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`)
    console.log('Shutting down the server for unhandled promise rejection')
    server.close(() => {
      process.exit(1)
    })
  })
})
mongoose.connection.on('error', (err) => {
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
  console.log(err)
})

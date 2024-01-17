const { logEvents } = require('./logger')
const ErrorHandler = require('../utils/ErrorHandler')
const errorHandling = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.message = err.message || 'Internal server Error'
  // wrong mongodb id
  if (err.name === 'CastError') {
    const message = `Resources not found with this id. Invalid ${err.path}`
    err = new ErrorHandler(message, 400)
  }
  // Duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`
    err = new ErrorHandler(message, 400)
  }
  // jwt errors
  if (err.name === 'JsonWebTokenError') {
    const message = 'Your Url is invalid. try again with a valid one'
    err = new ErrorHandler(message, 400)
  }
  if (err.name === 'TokenExpiredError') {
    const message = 'Your Url is expired. try again with a valid one'
    err = new ErrorHandler(message, 400)
  }
  if (err.name) logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errorLog.log')
  console.log(err)
  res.status(err.statusCode).json({ message: err.message })
}
module.exports = errorHandling

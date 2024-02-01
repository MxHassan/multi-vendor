const { logEvents } = require('./logger');
const errorHandling = (err, req, res, next) => {
  logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errorLog.log');
  err.message = err.message || 'Internal server Error';
  console.log(err.stack);
  const status = res.statusCode ? res.statusCode : 500;
  res.status(status).json({ message: err.message });
};
module.exports = errorHandling;

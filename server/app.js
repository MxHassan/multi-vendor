const express = require('express');
const app = express();
const path = require('path');
const { logger } = require('./middleware/logger');
const errorHandling = require('./middleware/errorHandling');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const morgan = require('morgan');
require('dotenv').config();
// const ErrorHandler = require('./utils/ErrorHandler')

// middleware
app.use(logger);
app.use(cors(corsOptions));
// app.use(morgan('combined'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use('/', express.static(path.join(__dirname, '/public')));

// uploads file
app.use('/resources', express.static(path.join(__dirname, 'uploads')));

// routes
app.use('/', require('./routes/root'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

app.use(errorHandling);

module.exports = app;

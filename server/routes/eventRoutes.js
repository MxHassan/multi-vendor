const express = require('express');
const { getAllEvents } = require('../controller/eventController');
const router = express.Router();

router.get('/all-events', getAllEvents);

module.exports = router;

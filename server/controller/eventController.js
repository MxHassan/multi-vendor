const asyncHandler = require('express-async-handler');
const Event = require('../model/Event');

// @desc create-event
// @route Post /event/create-event
// @access Private
const createEvent = asyncHandler(async (req, res) => {});

// @desc get-events
// @route GET /event/all-events
// @access Public
const getAllEvents = asyncHandler(async (req, res) => {
  try {
    const events = await Event.find();
    res.status(201).json({
      success: true,
      events
    });
  } catch (err) {
    return res.status(400).json(err.message);
  }
});
module.exports = { getAllEvents };

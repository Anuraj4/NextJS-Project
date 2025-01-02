const express = require('express');
const router = express.Router();
const { createBooking, getBookings, deleteBooking } = require('../controllers/bookingController');

router.post('/', createBooking); // Create booking
router.get('/', getBookings); // Get all bookings
router.delete('/:id', deleteBooking); // Delete a booking

module.exports = router;

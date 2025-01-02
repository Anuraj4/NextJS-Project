const Booking = require('../models/Booking');

// Create Booking with Availability Check
const createBooking = async (req, res) => {
  try {
    const { date, time } = req.body;

    // Check for existing bookings with the same date and time
    const existingBooking = await Booking.findOne({ date, time });
    if (existingBooking) {
      return res.status(400).json({ error: 'Time slot already booked' });
    }

    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

// Get All Bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};

// Delete Booking
const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Booking deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete booking' });
  }
};

module.exports = { createBooking, getBookings, deleteBooking };

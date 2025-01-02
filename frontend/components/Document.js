import { useEffect, useState } from 'react';
import axios from 'axios';

const Document = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch bookings from backend
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookings');
        setBookings(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load bookings. Please try again later.');
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p>{error}</p>;

  // Get the most recent booking
  const recentBooking = bookings[bookings.length - 1];

  return (
    <div className="document-container">
      <h1>Recent Booking Summary</h1>
      {recentBooking ? (
        <div className="booking-summary">
          <p><strong>Name:</strong> {recentBooking.name}</p>
          <p><strong>Contact:</strong> {recentBooking.contact}</p>
          <p><strong>Guests:</strong> {recentBooking.guests}</p>
          <p><strong>Date:</strong> {recentBooking.date}</p>
          <p><strong>Time:</strong> {recentBooking.time}</p>
        </div>
      ) : (
        <p>No bookings available.</p>
      )}
    </div>
  );
};

export default Document;

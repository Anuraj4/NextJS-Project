import { useEffect, useState } from 'react';
import axios from 'axios';
import Document from '../components/Document';

const Bookings = () => {
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

  return (
    <div>
      <h1>All Bookings</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Guests</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.name}</td>
              <td>{booking.contact}</td>
              <td>{booking.guests}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Document />
    </div>
  );
};

export default Bookings;

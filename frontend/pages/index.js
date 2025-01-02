import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    guests: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      const res = await axios.post('https://nextjs-project-backend.onrender.com', formData);
      alert('Booking successful!');
    } catch (error) {
      alert('Error booking table');
    }
  };

  return (
    <div className="container">
      <h1>Book a Table</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          name="contact"
          placeholder="Contact"
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          name="guests"
          type="number"
          placeholder="Guests"
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          name="date"
          type="date"
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          name="time"
          type="time"
          onChange={handleChange}
          required
          className="form-input"
        />
        <button type="submit" className="form-button">
          Book Table
        </button>
      </form>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import './BookDemoForm.css';

const BookDemoForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    course: '',
    date: '',
    time: ''
  });
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending....');
    const formDataObj = new FormData();
    formDataObj.append('access_key', '95747720-021d-45a2-8671-8f4da2dade28');
    formDataObj.append('First Name', formData.firstName);
    formDataObj.append('Last Name', formData.lastName);
    formDataObj.append('Email', formData.email);
    formDataObj.append('Mobile Number', formData.mobile);
    formDataObj.append('Course', formData.course);
    formDataObj.append('Date', formData.date);
    formDataObj.append('Time', formData.time);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataObj
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        course: '',
        date: '',
        time: ''
      });
    } else {
      setResult(data.message || 'An error occurred.');
    }
  };

  return (
    <div className="book-demo-container">
      <h2>Book a Free Demo</h2>
      <form className="demo-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            <option value="Tally With GST">Tally With GST</option>
            <option value="Python With AI">Python With AI</option>
            <option value="C Language">C Language</option>
            <option value="C++ Language">C++ Language</option>
            <option value="AutoCad">AutoCad</option>
            <option value="HardWare & Networking">HardWare & Networking</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Book My Demo</button>
      </form>
      {result && <p className="form-message">{result}</p>}
    </div>
  );
};

export default BookDemoForm;

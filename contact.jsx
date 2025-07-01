import React, { useState } from 'react';
import './contact.css';
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

function Contact() {
  const [formData, setFormData] = useState({
    Firstname: '',
    Lastname: '',
    email: '',
    mobile: '',
    courses: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert('Error submitting form');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          {/* Decorative SVGs */}
          <svg className="contact-hero-svg contact-hero-svg1" width="400" height="400" viewBox="0 0 400 400" fill="none"><circle cx="200" cy="200" r="200" stroke="#fff" strokeWidth="2" fill="none"/></svg>
          <svg className="contact-hero-svg contact-hero-svg2" width="120" height="120" viewBox="0 0 120 120" fill="none"><g><circle cx="10" cy="10" r="2" fill="#3fe0b0"/><circle cx="30" cy="10" r="2" fill="#3fe0b0"/><circle cx="50" cy="10" r="2" fill="#3fe0b0"/><circle cx="70" cy="10" r="2" fill="#3fe0b0"/><circle cx="90" cy="10" r="2" fill="#3fe0b0"/><circle cx="110" cy="10" r="2" fill="#3fe0b0"/>
<circle cx="10" cy="30" r="2" fill="#3fe0b0"/><circle cx="30" cy="30" r="2" fill="#3fe0b0"/><circle cx="50" cy="30" r="2" fill="#3fe0b0"/><circle cx="70" cy="30" r="2" fill="#3fe0b0"/><circle cx="90" cy="30" r="2" fill="#3fe0b0"/><circle cx="110" cy="30" r="2" fill="#3fe0b0"/>
<circle cx="10" cy="50" r="2" fill="#3fe0b0"/><circle cx="30" cy="50" r="2" fill="#3fe0b0"/><circle cx="50" cy="50" r="2" fill="#3fe0b0"/><circle cx="70" cy="50" r="2" fill="#3fe0b0"/><circle cx="90" cy="50" r="2" fill="#3fe0b0"/><circle cx="110" cy="50" r="2" fill="#3fe0b0"/></g></svg>
          <svg className="contact-hero-svg contact-hero-svg3" width="80" height="30" viewBox="0 0 80 30" fill="none"><polyline points="0,15 20,15 40,5 60,25 80,15" stroke="#3fe0b0" strokeWidth="3" fill="none"/></svg>
          <svg className="contact-hero-svg contact-hero-svg4" width="8" height="80" viewBox="0 0 8 80" fill="none"><g><circle cx="4" cy="4" r="2" fill="#ff6f91"/><circle cx="4" cy="24" r="2" fill="#ff6f91"/><circle cx="4" cy="44" r="2" fill="#ff6f91"/><circle cx="4" cy="64" r="2" fill="#ff6f91"/></g></svg>
        </div>
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <div className="contact-hero-breadcrumbs">
            <a href="/" className="contact-hero-breadcrumb">Home</a>
            <span className="contact-hero-breadcrumb-sep">&gt;</span>
            <span className="contact-hero-breadcrumb active">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <div className="contact-wrapper">
        {/* Contact Information Section */}
        <div className="info-section">
          {/* Address */}
          <div className="info-box">
            <img src="https://img.icons8.com/color/96/000000/home--v1.png" alt="Address" />
            <h3>Address</h3>
            <p>204, 205 & 206 Saraswati Complex,</p>
            <p>Opposite To Manjalpur Atithi Gruh,Manjalpur</p>
            <p>Vadodara, Gujarat, India.</p>
          </div>

          {/* Working Hours */}
          <div className="info-box">
            <img src="https://img.icons8.com/color/96/000000/new-post.png" alt="Hours" />
            <h3>Working Hours</h3>
            <p><strong>Monday - Saturday:</strong> 09:00 am – 8:00pm</p>
          </div>

          {/* Contact */}
          <div className="info-box">
            <img src="https://img.icons8.com/color/96/000000/phone-disconnected.png" alt="Phone" />
            <h3>Contact</h3>
            <p><strong>Phone:</strong> +91 9376218196 | +91 9998964233</p>
            <p><strong>Email:</strong> idealcomputerclass@gmail.com</p>
            <p><strong>Website:</strong> www.idealclass.com</p>
          </div>
        </div>

        {/* Map and Contact Form Section */}
        <div className="contact-container">
          {/* Map Section */}
          <div className="contact-left">
            <div className="map-section">
              <h2 style={{ 
                textAlign: 'center', 
                marginBottom: '20px', 
                color: '#333', 
                fontSize: '1.8rem',
                fontWeight: '600'
              }}>
                📍 Our Location
              </h2>
              <p style={{ 
                textAlign: 'center', 
                marginBottom: '20px', 
                color: '#666', 
                fontSize: '1rem',
                lineHeight: '1.5'
              }}>
                Visit us at Saraswati Complex, Majalpur, Vadodara
              </p>
              {/* Google Maps iframe embed for Saraswati Complex, Majalpur, Vadodara */}
              <div style={{ width: '100%', height: '400px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <iframe
                  title="Saraswati Complex, Majalpur, Vadodara Map"
                  src="https://www.google.com/maps?q=Saraswati+Complex,+Majalpur,+Vadodara&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-right">
            <div className="form-section">
              <h2 style={{ 
                textAlign: 'center', 
                marginBottom: '30px', 
                color: '#333', 
                fontSize: '1.8rem',
                fontWeight: '600'
              }}>
                📝 Get In Touch
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="name-fields">
                  <input type="text" name="Firstname" placeholder="First Name" value={formData.Firstname} onChange={handleChange} />
                  <input type="text" name="Lastname" placeholder="Last Name" value={formData.Lastname} onChange={handleChange}/>
                </div>
                <div className="name-fields">
                  <input type="email" name="email" placeholder="Email"  value={formData.email} onChange={handleChange}/>
                </div>
                <div className="name-fields">
                  <input type="tel" name="mobile" placeholder="Mobile Number"  value={formData.mobile} onChange={handleChange} />
                </div>
                <div className="name-fields">
                  <input type="text"  name="courses" placeholder="Courses" value={formData.courses} onChange={handleChange} />
                </div>
                <div className="name-fields">
                  <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange} />
                  <input type="time" name="time" placeholder="Time" value={formData.time} onChange={handleChange}/>
                </div>
                <div>
                  <button type="submit" style={{
                    width: '100%',
                    padding: '15px',
                    fontSize: '16px',
                    fontWeight: '600',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;   
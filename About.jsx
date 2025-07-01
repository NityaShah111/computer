// src/About.jsx
import React from 'react';
import aboutImg from './assets/about.png';

function About() {
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
          <h1>About US</h1>
          <div className="contact-hero-breadcrumbs">
            <a href="/" className="contact-hero-breadcrumb">Home</a>
            <span className="contact-hero-breadcrumb-sep">&gt;</span>
            <span className="contact-hero-breadcrumb active">About US</span>
          </div>
        </div>
      </section>

      {/* About Content - replaced with new info */}
      <div className="section">
        <section id="about" className="section">
          <h2><b>Welcome to Ideal Computer Class - Your Gateway to Excellence!</b></h2>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <p>Ideal Computer Class has been a trusted name in computer education for the last 25 years, dedicated to equipping students with the technical skills needed for today's fast-evolving digital world. Located in the heart of Manjalpur, in the well-known Saraswati Complex, we've proudly trained thousands of students who have gone on to build successful careers in IT, business, engineering, and accounting.</p>
            <br />
            <p>We offer a wide range of both foundational and advanced courses to meet the needs of school students, college-goers, job seekers, and working professionals. Our course list includes industry-relevant programs such as Tally, Tally with GST, C Language, C++, Python, Python With AI, AutoCAD, MS Office, Visual Studio Code (VS Code), basic computer training, MS Powerpoint, Advanced Excel, SQL, PHP, Graphics Designing and other modern-day coding and design tools. All our courses are taught by highly qualified and experienced faculty who focus on both theoretical knowledge and practical application.</p>
            <br />
            <p>What sets Ideal Computer Class apart is our hands-on teaching approach, personal attention to each student, and fully equipped computer labs. We provide flexible batch timings, printed course material, project-based assignments, and regular assessments to ensure complete understanding. Whether you're a beginner wanting to learn the basics or a professional looking to upgrade your skills, we have the right course for you.</p>
            <br />
            <p>At Ideal Computer Class, we don't just teach computers—we build futures. Join us and be part of a legacy of excellence and success. Let your journey toward a rewarding career begin with us. Admissions are open now! Visit us at Saraswati Complex, Manjalpur, and experience quality education that truly makes a difference.</p>
            
          </div>
        </section>
      </div>

      {/* About image above the footer */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '0 0 1.5rem 0' }}>
        <img src={aboutImg} alt="About Ideal Computer Class" style={{ maxWidth: '600px', width: '100%', borderRadius: '20px', boxShadow: '0 6px 24px rgba(0,0,0,0.12)' }} />
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import './CoreValues.css';

const valuesData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0d47a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 3 2 5 2 5s2-2 2-5a3 3 0 0 1 6 0c0 3 2 5 2 5s2-2 2-5a7 7 0 0 0-7-7z"/>
        <path d="m14.28 9.9-1.03-2.18a.5.5 0 0 0-.9-.05L11.5 9.9"/>
        <path d="M12.01 11.01 12 11"/>
        <path d="m9.72 9.9 1.03-2.18a.5.5 0 0 1 .9-.05L12.5 9.9"/>
      </svg>
    ),
    title: 'Vision',
    text: 'To be a leading center of excellence in computer education, empowering individuals with practical skills, innovative thinking, and confidence to thrive in the digital world. We envision a future where every student has access to quality IT training, meaningful career opportunities, and the tools to shape tomorrow\'s technology.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0d47a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
        <path d="M12 22v-8.5"/>
      </svg>
    ),
    title: 'Mission',
    text: 'At Ideal Computer Education, our mission is to provide high-quality, accessible, and engaging computer education for learners of all levels. We believe that everyone should have the opportunity to acquire essential computer skills in today\'s digital age.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0d47a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: 'Our Ethics',
    text: 'In today\'s interconnected world, understanding and practicing ethical behavior in the realm of technology is paramount. At Ideal Computer Education, we believe that a strong foundation in ethical principles is just as crucial as technical proficiency. Our commitment to ethics ensures that our learners not only excel in their chosen fields but also contribute positively to the global digital community.'
  }
];

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="core-values-grid">
        {valuesData.map((value, index) => (
          <div key={index} className="value-card">
            <div className="value-icon">{value.icon}</div>
            <h3 className="value-title">{value.title}</h3>
            <p className="value-text">{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues; 
import React from 'react';

const phoneNumber = "+919376218196"; // Change to your desired number

const PhoneLogo = () => (
  <a
    href={`tel:${phoneNumber}`}
    style={{
      position: 'fixed',
      left: '30px',
      bottom: '30px',
      zIndex: 1000,
      background: '#fff',
      borderRadius: '50%',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    title="Call us"
  >
    <img
      src="https://img.icons8.com/color/96/000000/phone-disconnected.png"
      alt="Phone"
      style={{ width: 40, height: 40 }}
    />
  </a>
);

export default PhoneLogo; 
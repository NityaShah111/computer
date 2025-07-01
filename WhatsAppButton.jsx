import React from 'react';

const whatsappNumber = '9376218195'; // Replace with your WhatsApp number, e.g., 919999999999
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const ChatButton = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 1000,
      background: '#25D366',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
      textDecoration: 'none',
      border: '3px solid #fff',
    }}
    aria-label="Chat on WhatsApp"
  >
    {/* Chat bubble SVG icon */}
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 11.5C21 16.1944 16.9706 20 12 20C10.6627 20 9.39341 19.7642 8.25 19.3421L3 21L4.65789 15.75C4.23577 14.6066 4 13.3373 4 12C4 7.02944 7.80558 3 12.5 3C17.1944 3 21 7.02944 21 11.5Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      <circle cx="9" cy="12" r="1" fill="#fff"/>
      <circle cx="12" cy="12" r="1" fill="#fff"/>
      <circle cx="15" cy="12" r="1" fill="#fff"/>
    </svg>
  </a>
);

export default ChatButton; 
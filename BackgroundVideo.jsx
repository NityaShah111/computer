import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="/backgroundone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="background-video-overlay"></div>
    </div>
  );
};

export default BackgroundVideo; 
import React from "react";
import "./Footer.css";
import logo from "./assets/ideal.png";

const Footer = () => {
  return (
    <footer className="footer footer-darkblue">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about-section">
          <img src={logo} alt="Ahmedabad Computer Education" className="footer-logo-large" />
          <p className="footer-desc">
            As the #1 IT Training Institute, We're passionate about empowering youth with the skills to thrive in the dynamic digital landscape.
          </p>
          <div className="footer-follow-label">FOLLOW US ON:</div>
          <div className="footer-social-circles">
            <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><circle cx="14" cy="14" r="14" fill="#232e3c"/><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692V11.01h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" fill="#fff"/></svg>
            </a>
            <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><circle cx="14" cy="14" r="14" fill="#232e3c"/><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.316c-.98.98-1.188 2.092-1.246 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.611.058 1.281.266 2.393 1.246 3.373.98.98 2.092 1.188 3.373 1.246C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.266 3.373-1.246.98-.98 1.188-2.092 1.246-3.373.058-1.279.07-1.688.07-7.611 0-5.923-.012-6.332-.07-7.611-.058-1.281-.266-2.393-1.246-3.373-.98-.98-2.092-1.188-3.373-1.246C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill="#fff"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><circle cx="14" cy="14" r="14" fill="#232e3c"/><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z" fill="#fff"/></svg>
            </a>
            <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><circle cx="14" cy="14" r="14" fill="#232e3c"/><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#fff"/></svg>
            </a>
            <a href="#" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><circle cx="14" cy="14" r="14" fill="#232e3c"/><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 .155 11.605C.427 5.278 5.843.013 12.07 0c2.652.012 5.14 1.037 7.027 2.929 1.882 1.888 2.916 4.377 2.903 7.031-.013 6.326-5.429 11.592-12.056 11.592m10.413-21.273C15.986.584 14.057 0 12.07 0 5.495.013.081 5.278.002 11.654c-.08 3.017 1.029 5.926 3.205 8.1a11.815 11.815 0 0 0 3.941 2.605l-1.561 5.699 5.826-1.529a11.876 11.876 0 0 0 4.574.885h.005c6.574 0 11.988-5.265 12.067-11.641.028-2.484-.947-4.818-2.773-6.646" fill="#fff"/></svg>
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul className="footer-links-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/freedemo">Book A Free Demo</a></li>
          </ul>
        </div>
        {/* Our Courses */}
        <div className="footer-section courses-section">
          <h3>Our Courses</h3>
          <ul className="footer-links-list">
            <li>Tally With GST</li>
            <li>Python With AI</li>
            <li>C Language</li>
            <li>C++ Language</li>
            <li>AutoCad </li>
            <li>HardWare & Networking</li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="footer-section contact-section">
          <h3>Contact Info</h3>
          <div className="footer-contact-block">
            <div className="footer-contact-title">Vadodara</div>
            <div className="footer-contact-item">
              <span className="footer-icon">
                <svg width="20" height="20" fill="#3fa9f5" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </span>
              <span>204, 205/206, Saraswati Complex, Opposite Manjalpur Athitigruh, Manjalpur-390011</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-icon">
                <svg width="20" height="20" fill="#3fa9f5" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
              </span>
              <span>9372218195/9998964233</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

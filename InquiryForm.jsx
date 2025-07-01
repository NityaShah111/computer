import React from 'react';
import './InquiryForm.css';
import inquiryImg from './assets/inquiry.jpg';

const InquiryForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "95747720-021d-45a2-8671-8f4da2dade28");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult("A Inquiry has been sent to the team. We will call you back soon.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="inquiry-flex-container">
      <div className="inquiry-form-box">
        <h2 className="inquiry-title">Send Us Your Inquiry<br />We will Call you Back</h2>
        <form className="inquiry-form" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Name" className="inquiry-input" required />
          <input type="email" name="email" placeholder="Email Address" className="inquiry-input" required />
          <div className="inquiry-phone-group">
            <select className="inquiry-country-code" name="country_code">
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
            </select>
            <input type="tel" name="contact_number" placeholder="Contact Number" className="inquiry-input phone-input" required />
          </div>
          <button type="submit" className="inquiry-submit-btn">Send Inquiry</button>
          <span className="inquiry-result">{result}</span>
        </form>
      </div>
      <div className="inquiry-image-box">
        <img src={inquiryImg} alt="Inquiry" className="inquiry-img-full" />
      </div>
    </div>
  );
};

export default InquiryForm; 
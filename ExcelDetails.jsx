import React from 'react';
import './ExcelDetails.css'; // Make sure to create this file for styling

const ExcelDetails = () => {
  return (
    <div className="excel-details">
      <h1>Advanced Excel - Course Content</h1>
      <div className="excel-content">
        <ul>
          <li>Basic Excel</li>
          <li>Tables & Charts</li>
          <li>Data Sorting</li>
          <li>Data Analysing</li>
          <li>Scenarios, Filter, Advanced Filter, etc.</li>
          <li>Formulas</li>
          <li>Functions</li>
          <li>Mathematical Functions, Date & Time</li>
        </ul>
        <ul>
          <li>Functions, Statistical Functions, etc.</li>
          <li>Special Functions like VLOOKUP,</li>
          <li>HLOOKUP, XLOOKUP, SUBTOTAL, etc.</li>
          <li>Sharing Spreadsheet</li>
          <li>Auditing Tools</li>
          <li>Data Validation</li>
          <li>Pivot Table & Pivot Chart</li>
          <li>VBA Macro</li>
        </ul>
      </div>
      <h3>Join the Advanced Excel course at Ideal Education Center and take your data skills to the next level. Whether you're a student, professional, or business owner, mastering Excel opens doors to smarter decision-making and improved productivity. Our expert-led training covers everything from basic functions to powerful tools like Pivot Tables, XLOOKUP, and VBA Macros. Gain practical, hands-on experience and become confident in handling complex data analysis tasks. Enroll today and become an Excel pro with Ideal!</h3>

      <div className="demo-button-wrapper">
      <button className="free-demo-button">Book a Free Demo</button>
    </div>
    </div>


  );
};

export default ExcelDetails;

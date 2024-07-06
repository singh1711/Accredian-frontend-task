import React from 'react';
// import './FAQSection.css';

function FAQSection() {
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq">
        <h3>Do I need to have prior Product Management and Project Management experience to enroll in the program?</h3>
        <p>No, the program is designed to be inclusive of all levels of experience.</p>
      </div>
      <div className="faq">
        <h3>What is the minimum system configuration required?</h3>
        <p>The minimum system requirements are...</p>
      </div>
      {/* Add more FAQs as needed */}
    </div>
  );
}

export default FAQSection;

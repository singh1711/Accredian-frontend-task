import React from 'react';
// import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Programs</h3>
          <ul>
            <li>Data Science & AI</li>
            <li>Product Management</li>
            {/* Add more programs as needed */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +91 1234567890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Social media links</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Accredian. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

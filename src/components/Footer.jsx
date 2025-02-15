import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
           <h3>Blog</h3>
            <p className="footer-description">
              Bringing you the best content every day.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">sign up</a></li>
              <li><a href="/contact">login</a></li>
            </ul>
          </div>
           <div className="footer-links">
            <h4>social media</h4>
            <ul>
              <li><a href="https://www.Facebook.com/"> Facebook</a></li>
              <li><a href="https://www.Instagram.com/">Instagram</a></li>
              <li><a href="https://www.Github.com/">Github</a></li>
              <li><a href="https://www.linkedin.com/">linkedin</a></li>
            </ul>
          </div>
        </div>
        <p className="footer-copy">© 2025 Your Company.</p>
      </div>
    </footer>
  );
};

export default Footer;

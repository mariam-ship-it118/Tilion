import React from 'react';
import './Footer.css';
import Logo from "../Assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Logo Section */}
        <div className="footer-col logo-col">
          <img 
            src={Logo} 
            alt="Tillion Logo" 
            className="footer-logo" 
          />
        </div>

        {/* Links Sections */}
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#mission">Our Mission</a></li>
            <li><a href="#safety-privacy">Safety & Privacy</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#help-center">Help Center</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Parents</h4>
          <ul>
            <li><a href="#dashboard">Parent Dashboard</a></li>
            <li><a href="#controls">Safety Controls</a></li>
            <li><a href="#protect-kids">How We Protect Kids</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-col social-col">
          <h4>Follow us</h4>
          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
                alt="Facebook" 
                className="social-icon"
              />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
                alt="Instagram" 
                className="social-icon"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="footer-bottom">
        <div className="bottom-links-row">
          <a href="#about">About</a> &bull;{' '}
          <a href="#safety">Safety</a> &bull;{' '}
          <a href="#faqs">FAQs</a> &bull;{' '}
          <a href="#contact">Contact</a>
        </div>
        <div className="bottom-links-row">
          <a href="#privacy">Privacy Policy</a> &bull;{' '}
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
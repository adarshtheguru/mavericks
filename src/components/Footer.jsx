import React from 'react';
import { Link } from 'react-router-dom';
import {
  HiLocationMarker,
  HiPhone,
  HiMail,
} from 'react-icons/hi';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span>Mavericks</span>
            </div>
            <p className="footer__tagline">
              Where Vision Meets Execution
            </p>
            <p className="footer__tagline">
              From the screen to the street, we build ecosystems that amplify your brand.
            </p>

            <div className="footer__social">
              <a
                href="https://facebook.com/mavericksme"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/mavericksme"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/mavericksme"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/company/mavericksme"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Quick Links</h3>
            <nav className="footer__links">
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <a href="#services">Services</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Services</h3>
            <nav className="footer__links">
              <a href="#digital">Digital Marketing</a>
              <a href="#traditional">Traditional Marketing</a>
              <a href="#experiential">Event Management</a>
              <a href="#mice">MICE</a>
              <a href="#weddings">Weddings</a>
            </nav>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Contact Us</h3>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <HiLocationMarker className="icon" />
                <span>
                  UBI Building, Sigra-Mehmoorganj Road, Varanasi
                </span>
              </div>
              <div className="footer__contact-item">
                <HiPhone className="icon" />
                <div>
                  <a href="tel:+918765620009">+91-8765620009</a>
                </div>
              </div>
              <div className="footer__contact-item">
                <HiMail className="icon" />
                <a href="mailto:business@maverickme.in">
                  business@maverickme.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Mavericks Marketing & Events. All rights reserved.
          </p>
          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
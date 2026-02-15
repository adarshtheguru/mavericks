import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiMail } from 'react-icons/hi';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__logo" onClick={closeMobileMenu}>
            {/* <span>Mavericks</span> */}
            <img src="/logo.png" alt="" />
          </Link>

          <nav className="header__nav">
            <Link
              to="/"
              className={`header__nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className={`header__nav-link ${isActive('/blog') ? 'active' : ''}`}
            >
              Blog
            </Link>
            <a href="#services" className="header__nav-link">
              Services
            </a>
            <a href="#about" className="header__nav-link">
              About
            </a>
            <a href="#contact" className="header__nav-link">
              Contact
            </a>
          </nav>

          <a href="mailto:business@maverickme.in" className="header__cta">
            <HiMail />
            <span>Get In Touch</span>
          </a>

          <button
            className="header__mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div className={`header__mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <button
            className="header__mobile-close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <HiX />
          </button>

          <nav className="header__mobile-nav">
            <Link
              to="/"
              className={`header__mobile-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className={`header__mobile-link ${isActive('/blog') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <a
              href="#services"
              className="header__mobile-link"
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <a
              href="#about"
              className="header__mobile-link"
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a
              href="#contact"
              className="header__mobile-link"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div
        className={`header-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>
    </>
  );
};

export default Header;
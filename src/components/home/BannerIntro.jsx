import React from 'react';
import { HiArrowRight, HiMail, HiChevronDown } from 'react-icons/hi';
import { FaLaptop, FaBullhorn, FaStar } from 'react-icons/fa';

const BannerIntro = () => {
  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__content">
          <h1 className="banner__title">
            Where <span className="highlight">Vision</span> Meets <span className="highlight">Execution</span>
          </h1>

          <p className="banner__subtitle">
            360° Marketing Solutions - From the Screen to the Street
          </p>

          <div className="banner__features">
            <div className="banner__feature">
              <FaLaptop className="icon" />
              <span>Online</span>
            </div>
            <div className="banner__feature">
              <FaBullhorn className="icon" />
              <span>Offline</span>
            </div>
            <div className="banner__feature">
              <FaStar className="icon" />
              <span>Experiential</span>
            </div>
          </div>

          <div className="banner__cta">
            <a href="#contact" className="banner__btn">
              <span>Get Started</span>
              <HiArrowRight className="icon" />
            </a>
            <a href="mailto:business@maverickme.in" className="banner__btn-outline">
              <HiMail className="icon" />
              <span>Contact Us</span>
            </a>
          </div>
        </div>

        <div className="banner__scroll" onClick={scrollToContent}>
          <span>Scroll Down</span>
          <HiChevronDown className="icon" />
        </div>
      </div>
    </section>
  );
};

export default BannerIntro;

import React from 'react';
import BannerIntro from '../components/home/BannerIntro';
import AboutUs from '../components/home/AboutUs';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialSection from '../components/home/TestimonialSection';

const Home = () => {
  return (
    <div className="home-page">
      <BannerIntro />
      <AboutUs />
      <ServicesSection />
      <TestimonialSection />
    </div>
  );
};

export default Home;
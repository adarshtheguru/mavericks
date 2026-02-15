import React, { useState } from 'react';
import { FaLaptop, FaBullhorn, FaStar } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';
import Loader from '../common/Loader';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const { data: servicesData, loading } = useFetch('/data/services.json');
  const [selectedCategory, setSelectedCategory] = useState('digital');

  if (loading) {
    return <Loader fullScreen={false} />;
  }

  const categories = servicesData?.categories || [];
  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'digital':
        return <FaLaptop />;
      case 'traditional':
        return <FaBullhorn />;
      case 'experiential':
        return <FaStar />;
      default:
        return <FaStar />;
    }
  };

  return (
    <section id="services" className="services">
      <div className="services__container">
        <div className="services__header">
          <h2 className="services__title">
            360° Marketing <span className="highlight">Solutions</span>
          </h2>
          <p className="services__subtitle">
            From the Screen to the Street - We deliver cohesive strategies where your offline presence fuels your online growth, and vice versa.
          </p>
        </div>

        <div className="services__categories">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`services__category ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="services__category-icon">
                {getCategoryIcon(category.id)}
              </div>
              <h3 className="services__category-title">{category.shortName}</h3>
              <p className="services__category-desc">{category.description}</p>
            </div>
          ))}
        </div>

        {selectedCategoryData && (
          <div className="services__items">
            {selectedCategoryData.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;

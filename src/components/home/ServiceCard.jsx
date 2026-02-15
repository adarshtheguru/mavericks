import React from 'react';
import { HiArrowRight, HiCheck } from 'react-icons/hi';
import * as Icons from 'react-icons/hi';

const ServiceCard = ({ service }) => {
  const IconComponent = Icons[`Hi${service.icon.charAt(0).toUpperCase() + service.icon.slice(1)}`] || Icons.HiStar;

  return (
    <div className="service-card">
      <div className="service-card__icon">
        <IconComponent />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.description}</p>

      {service.features && service.features.length > 0 && (
        <div className="service-card__features">
          {service.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="service-card__feature">
              <HiCheck className="icon" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}

      <a href="#contact" className="service-card__link">
        Learn More
        <HiArrowRight className="icon" />
      </a>
    </div>
  );
};

export default ServiceCard;

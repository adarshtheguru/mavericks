import React from 'react';
import { HiStar } from 'react-icons/hi';
import { FaQuoteRight } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <HiStar key={index} />
    ));
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="testimonial-card">
      <FaQuoteRight className="testimonial-card__quote-icon" />

      <div className="testimonial-card__rating">
        {renderStars(testimonial.rating)}
      </div>

      <p className="testimonial-card__content">
        "{testimonial.text}"
      </p>

      <div className="testimonial-card__author">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="testimonial-card__avatar"
          />
        ) : (
          <div className="testimonial-card__avatar-placeholder">
            {getInitials(testimonial.name)}
          </div>
        )}
        <div className="testimonial-card__author-info">
          <h4 className="testimonial-card__name">{testimonial.name}</h4>
          <p className="testimonial-card__position">{testimonial.position}</p>
          {testimonial.company && (
            <p className="testimonial-card__company">{testimonial.company}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

import React from 'react';
import useFetch from '../../hooks/useFetch';
import Loader from '../common/Loader';
import TestimonialCard from './TestimonialCard';

const TestimonialSection = () => {
  const { data: testimonials, loading } = useFetch('/data/testimonials.json');

  if (loading) {
    return <Loader fullScreen={false} />;
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <p className="testimonials__subtitle">Client Stories</p>
          <h2 className="testimonials__title">
            What Our <span className="highlight">Clients</span> Say
          </h2>
          <p className="testimonials__description">
            Don't just take our word for it. Here's what our clients have to say about working with Mavericks.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials && testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

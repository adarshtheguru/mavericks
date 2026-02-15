import React from 'react';

const SectionTitle = ({
  subtitle,
  title,
  description,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`section-title ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className="section-title__subtitle">{subtitle}</p>
      )}
      {title && (
        <h2 className="section-title__title">{title}</h2>
      )}
      {description && (
        <p className="section-title__description">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;

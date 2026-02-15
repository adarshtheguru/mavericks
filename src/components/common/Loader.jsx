import React from 'react';

const Loader = ({ size = 'md', fullScreen = false }) => {
  const sizeClass = size === 'lg' ? 'loader-lg' : size === 'sm' ? 'loader-sm' : 'loader-md';

  if (fullScreen) {
    return (
      <div className="loader-fullscreen">
        <div className={`loader ${sizeClass}`}>
          <div className="loader-spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`loader ${sizeClass}`}>
      <div className="loader-spinner"></div>
    </div>
  );
};

export default Loader;

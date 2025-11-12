import React, { useState, useEffect } from 'react';
import './CircularSlideshow.css';

const CircularSlideshow = ({ images, size = "200px", square = false, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setNextIndex((currentIndex + 1) % images.length);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 800); // Transition duration
    }, 3000); // Display duration

    return () => clearInterval(interval);
  }, [images.length, currentIndex]);

  if (!images || images.length === 0) {
    return (
      <div 
        className={`circular-slideshow-container ${square ? 'square' : ''} ${className}`}
        style={{ width: size, height: size }}
      >
        <div className="circular-slideshow-placeholder">
          <span className="placeholder-initials">SW</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`circular-slideshow-container ${square ? 'square' : ''} ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="circular-slideshow-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Profile ${currentIndex + 1}`}
          className={`circular-slideshow-image current ${isTransitioning ? 'slide-out' : ''}`}
        />
        {isTransitioning && (
          <img
            src={images[nextIndex]}
            alt={`Profile ${nextIndex + 1}`}
            className="circular-slideshow-image next slide-in"
          />
        )}
      </div>
    </div>
  );
};

export default CircularSlideshow;

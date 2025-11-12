import React, { useState, useEffect } from 'react';
import './ImageSlideshow.css';

const ImageSlideshow = ({ images, height = "320px", borderRadius = "10px", objectFit = "contain", className = "" }) => {
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
        className={`slideshow-container ${className}`}
        style={{ height, borderRadius }}
      >
        <div className="slideshow-placeholder">No images available</div>
      </div>
    );
  }

  return (
    <div 
      className={`slideshow-container ${className}`}
      style={{ height, borderRadius, backgroundColor: '#f6f6f6' }}
    >
      <div className="slideshow-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`slideshow-image current ${isTransitioning ? 'slide-out' : ''}`}
          style={{
            objectFit,
            borderRadius,
          }}
        />
        {isTransitioning && (
          <img
            src={images[nextIndex]}
            alt={`Slide ${nextIndex + 1}`}
            className="slideshow-image next slide-in"
            style={{
              objectFit,
              borderRadius,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ImageSlideshow;

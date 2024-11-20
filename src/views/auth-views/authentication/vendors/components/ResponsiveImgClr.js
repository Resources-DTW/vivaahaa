import React, { useState, useEffect } from 'react';

const ResponsiveImage = ({ desktop, mobile}) => {
  const [imageSrc, setImageSrc] = useState(desktop);

  const updateImageSrc = () => {
    if (window.innerWidth >= 768) {
      setImageSrc(desktop);
    } else {
      setImageSrc(mobile);
    }
  };

  useEffect(() => {
    updateImageSrc(); 
    window.addEventListener('resize', updateImageSrc);
    return () => window.removeEventListener('resize', updateImageSrc);
  }, []);

  return <img src={imageSrc} alt="error" />;
};

export default ResponsiveImage;

import React from 'react';
import './EventsTitles.css';

const BannerText = ({ 
  outlineText = "Building", 
  solidText = "Together", 
  showSparkle = true 
}) => {
  return (
    <>
    
    <div className="banner-container">
      <h1 className="banner-heading">
        <span className="text-outline">{outlineText}</span>
        <span className="text-solid">{solidText}</span>
        
        {showSparkle && (
            <svg 
            className="sparkle-icon" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            >
            <path 
              d="M12 0C12 0 12 9 24 12C12 15 12 24 12 24C12 24 12 15 0 12C12 9 12 0 12 0Z" 
              fill="#D6D92A" /* Yellow color matching the image */
              />
          </svg>
   
)}
      </h1>
    </div>



</>
  );
};

export default BannerText;
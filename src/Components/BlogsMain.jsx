// BlogsTitleComponent.jsx
import React from 'react';
import './BlogsMain.css';


// Base64 encoded yellow star graphic from the original design
const yellowStarGraphic = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjciIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCA2NyA2NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM1IDBMNDMuNSAyMi41TDY3IDM1TDQzLjUgNDcuNUwzNSA3MEwyNi41IDQ3LjVMMCAzNUwyNi41IDIyLjVMMzUgMFoiIGZpbGw9IiNDQ0VFMTkiLz4KPC9zdmc+Cg==";

const BlogsTitleComponent = () => {
  // Letters of the text for individual targeting
  const letters = ['B', 'L', 'O', 'G'];


  return (
     <div className="faqs-animation-container">
      <div className="faqs-text-wrapper">
        {letters.map((letter, index) => (
          <span 
            key={index} 
            className="faq-letter" 
            style={{ '--delay': `${index * 0.1}s` }} // Sets staggered delay
          >
            {letter}
          </span>
        ))}
      </div>
      
      {/* Yellow Star Icon, positioned and animated with the text */}
      <img 
        src={yellowStarGraphic} 
        alt="Animated Star" 
        className="faq-star-icon"
        style={{ '--delay': `${letters.length * 0.1 + 0.15}s` }} // Delayed star entry
      />
    </div>
  );
};

export default BlogsTitleComponent;
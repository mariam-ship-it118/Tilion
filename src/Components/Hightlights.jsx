import React from 'react';
import './Highlights.css';

const Highlights = () => {
  const highlightData = [
    {
      title: "Screen time full control",
      description: "Parents have full control over child's screen time"
    },
    {
      title: "Screen time control",
      description: "Parents have full control over child's screen time"
    },
    {
      title: "Screen time control",
      description: "Parents have full control over child's screen time"
    }
  ];

  return (
    <section className="highlights-section">
      <div className="highlights-container">
        <h2 className="highlights-heading">Updated features</h2>
        
        <div className="highlights-grid">
          {highlightData.map((item, index) => (
            <div 
              className="highlight-card" 
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="icona-wrapper">
                {/* SVG Clock Icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 15 15"></polyline>
                </svg>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
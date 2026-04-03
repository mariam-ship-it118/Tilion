import React, { useState } from 'react';
import './FAQsAsk.css';

const FAQ = ({ title, faqItems }) => {
  // Stores the index of the currently open item
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">{title || "General questions"}</h2>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button 
              className="faq-question" 
              onClick={() => toggleItem(index)}
              aria-expanded={activeIndex === index}
            >
              <span>{item.question}</span>
              <svg 
                className="faq-icon" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            
            <div className="faq-answer">
              <div className="answer-content">
                <p>{item.answer}</p>
              </div>
            </div>
            <div className="faq-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
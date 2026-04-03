import React from 'react';
import './What-Makes-Us-Awesome.css'; 

const Features = () => {
  const featuresData = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" className="feature-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      title: "Chat with Friends",
      description: "Share jokes, drawings, and fun stories"
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" className="feature-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      title: "Collect Stickers",
      description: "Earn cool stickers for being kind and creative"
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" className="feature-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
          <path d="M4 22h16"></path>
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
        </svg>
      ),
      title: "Fun Challenges",
      description: "Join weekly challenges and show your talents"
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" className="feature-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2L15.35 5.65L19 7L15.35 8.35L14 12L12.65 8.35L9 7L12.65 5.65L14 2Z"></path>
          <path d="M7 14L7.67 15.83L9.5 16.5L7.67 17.17L7 19L6.33 17.17L4.5 16.5L6.33 15.83L7 14Z"></path>
        </svg>
      ),
      title: "Create & Share",
      description: "Make awesome art and share your creations"
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        
        <div className="features-header">
          <span className="features-title">What Makes Us Awesome</span>
          <span className="features-subtitle">So many cool things to do and explore!</span>
        </div>

        <div className="features-grid">
          {featuresData.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <span className="feature-card-title">{feature.title}</span>
              <p className="feature-card-desc">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
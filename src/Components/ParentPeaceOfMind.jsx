import React from 'react';
import './ParentPeaceOfMind.css';

const ParentPeaceOfMind = () => {
  const features = [
    {
      title: "Full Parental Controls",
      description: "Monitor your child's activity and set time limits"
    },
    {
      title: "24/7 Moderation Team",
      description: "Human moderators review flagged content."
    },
    {
      title: "Strict Age Verification",
      description: "Multi-step verification ensures only 9-11 year olds join"
    },
    {
      title: "No Personal Information",
      description: "Kids can't share addresses, phone numbers, or locations"
    },
    {
      title: "Kids account from contacts only",
      description: "Kids can't add each other without parental approval"
    },
    {
      title: "Instant Reporting",
      description: "Easy one-tap reporting for anything that feels wrong"
    }
  ];

  return (
    <section className="peace-container">
      <div className="header-badge">
        <span role="img" aria-label="family">👨‍👩‍👧‍👦</span> For Parents & Guardians
      </div>
      
      <h2 className="peace-title">Peace of Mind for Parents</h2>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="check-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParentPeaceOfMind;
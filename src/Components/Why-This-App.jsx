import React from 'react';
import './Why-This-App.css';

const YThisApp = () => {
  return (
    <section className="why-section">
      <div className="why-inner">
        <div className="why-heading-wrap">
          <h2 className="why-heading">
            Why this app?
            <svg viewBox="0 0 100 100" className="why-star" aria-hidden="true">
              <path d="M 75 5 C 75 20, 80 22, 95 22 C 80 22, 75 24, 75 39 C 75 24, 70 22, 55 22 C 70 22, 75 20, 75 5 Z" fill="#0C1331" />
            </svg>
          </h2>
        </div>

        <p className="why-text">
          Tilion was created to give kids a safer, more meaningful way to explore the digital world. Instead of endless scrolling or open platforms not built for children, Tilion focuses on creativity, learning, and positive communication—designed specifically for ages 7 to 13. With built-in parental guidance, accessibility for all kids, and a friendly experience across all devices, Tilion balances independence and safety. It's a place where kids can grow skills, express themselves, and connect responsibly, while parents feel confident about how their time online is spent.
        </p>
      </div>
    </section>
  );
};

export default YThisApp;

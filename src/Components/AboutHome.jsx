import React from 'react';
import Child from "../Assets/aboutpic.svg";
import Star from "../Assets/star.svg";
import "./AboutHome.css";
import Btnz from './Btnz';

const AboutHome = () => {
  return (
    <section className="about-home">
      <div className="about-home-inner">
        <div className="about-home-image">
          <img src={Child} alt="About Tilion" />
        </div>

        <div className="about-home-content">
          <div className="about-heading-wrap">
            <h2 className="about-us-container">
              <span className="text-outline-word">About</span>{' '}
              <span className="text-outline-us-wrap">
                us
                <img src={Star} alt="" className="about-star" aria-hidden="true" />
              </span>
            </h2>
          </div>

          <p className="about-home-text">
            We're a team of creators, designers, and parents who believe imagination should be a safe place to play. We built this app to give kids a fun, colorful world where they can explore, create, and connect kindly. Everything here is designed with care, safety, and smiles in mind.
          </p>

          <div className="about-home-btn">
            <Btnz btn="Explore" />
          </div>
        </div>
      </div>

      <svg className="about-home-wave" viewBox="0 0 1200 24" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0 12 C100 2, 200 22, 300 12 S500 2, 600 12 S800 22, 900 12 S1100 2, 1200 12"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeDasharray="10 8"
        />
      </svg>
    </section>
  );
};

export default AboutHome;

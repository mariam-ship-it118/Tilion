import React from 'react';
import "./HeroSec.css";
import Star from "../Assets/star.svg";
import Heart from "../Assets/heart.svg";
import Safe from "../Assets/safe.svg";
import Mockup from "../Assets/mockup.svg";

const HeroSec = () => {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-headlines">
            <h1 className="hero-title">
              Guareded with{' '}
              <span className="hero-love">
                l<span className="hero-o-wrap">o<img src={Heart} alt="" className="hero-heart" aria-hidden="true" /></span>ve
              </span>
            </h1>
            <h1 className="hero-title hero-title-second">
              <span className="hero-star-wrap">
                <img src={Star} alt="" className="hero-star" aria-hidden="true" />
              </span>
              Shining like the moon.
            </h1>
          </div>

          <p className="hero-subtitle">Social media for kids</p>

          <div className="hero-pcontrol">
            <img src={Safe} alt="" aria-hidden="true" />
            <p>strong parental control</p>
          </div>

          <button className="hero-download">Download the app</button>
        </div>

        <div className="hero-mockup">
          <img src={Mockup} alt="Tilion app mockup" />
        </div>
      </div>

     
    </section>
  );
};

export default HeroSec;

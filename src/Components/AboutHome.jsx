import React, { Component } from 'react';
import Child from "../Assets/aboutpic.svg";
import "./AboutHome.css";
import Btnz from './Btnz';

const AboutHome = () => {
    return ( <>
    

    <div className='diss'>

  
    <img src={Child} alt="About Tilion"  className='boyabout' />
    
    <section className='abouttextcard'>

  
    
   <div className="about-us-sector">
      <div className="about-us-container">
        <span className="text-solid-about">About</span>
        
        <div className="text-outline-wrapper">
          <span className="text-outline-us">Us</span>
          
          {/* Inline SVG for the precise sparkle graphics */}
          <svg viewBox="0 0 100 100" className="sparkles-graphic">
            {/* Large Sparkle */}
            <path 
              d="M 30 15 C 30 40, 40 45, 65 45 C 40 45, 30 50, 30 75 C 30 50, 20 45, -5 45 C 20 45, 30 40, 30 15 Z" 
              className="sparkle-fill" 
            />

            <path 
              d="M 30 15 C 30 40, 40 45, 65 45 C 40 45, 30 50, 30 75 C 30 50, 20 45, -5 45 C 20 45, 30 40, 30 15 Z" 
              className="sparkle-stroke" 
              transform="translate(3, 4)" 
            />
            
            {/* Small Sparkle */}
            <path 
              d="M 75 5 C 75 20, 80 22, 95 22 C 80 22, 75 24, 75 39 C 75 24, 70 22, 55 22 C 70 22, 75 20, 75 5 Z" 
              className="sparkle-fill" 
            />

            <path 
              d="M 75 5 C 75 20, 80 22, 95 22 C 80 22, 75 24, 75 39 C 75 24, 70 22, 55 22 C 70 22, 75 20, 75 5 Z" 
              className="sparkle-stroke" 
              transform="translate(2, 3)" 
            />
          </svg>  
        </div> 
      </div>
    </div>
    <p>We’re a team of creators, designers, and parents who believe imagination should be a safe place to play. We built this app to give kids a fun, colorful world where they can explore, create, and connect kindly. Everything here is designed with care, safety, and smiles in mind.</p>
  <div className='explrebtn'>
   
    <Btnz btn="Explore"/>
  </div>
    </section>
      </div>
  

    </> );
}
 
export default AboutHome;
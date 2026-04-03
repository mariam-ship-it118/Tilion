import React, { Component } from 'react';
import "./AboutCompany.css";
import TheStar from "../Assets/star.svg";
import Com from "../Assets/company.svg";

const AboutCompany = () => {
    return ( <>
    <h2 className='titly'>About Company</h2>
    <img src={TheStar} className='deco' alt="about tilion" />
    
    <div className='companion'>
        <img src={Com} alt="tilion" />
        <p className='comtext'>Tilion is a safe and creative social media platform designed especially for children. We provide a positive digital space where kids can connect, learn, and express themselves freely, while parents stay informed and in control. By combining fun, education, and innovative features like Augmented Reality, Tilion turns screen time into meaningful experiences.</p>
    </div>
    
    
    
    </> );
}
 
export default AboutCompany;
import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import AboutMain from '../Components/AboutMain';
import Features from '../Components/What-Makes-Us-Awesome';
import AboutCompany from '../Components/AboutCompany';
import ParentPeaceOfMind from '../Components/ParentPeaceOfMind';
import SubHeadz from '../Components/SubHeads';
import OurTeam from '../Components/OurTeam';
import Footer from '../Components/Footer';
const AboutUs = () => {
  return ( <>
  
  <NavBar active="aboutus"/>
  <br /><br /> <br /><br /><br /><br />
  <AboutMain/>
  <Features/>
  <AboutCompany/>
  <ParentPeaceOfMind/>
  <SubHeadz headz="Our Team" />
  <OurTeam/>
 
  <Footer/>

  </> );
}
 
export default AboutUs;
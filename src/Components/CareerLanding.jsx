import React from 'react';
import './CareerLanding.css'; // Make sure to import the CSS file
import NavBar from './NavBar';
import Bgcareer from "../Assets/careerbg.svg";
import Man from "../Assets/man.svg";

const CareerPage = () => {
  return (
    
    <section className='bgz'>
        <NavBar/>
       <h1 className='careerT'>Career</h1>
       <img src={Man} alt="jobs available in tilion" className='man' />
    </section>
  );
};

export default CareerPage;
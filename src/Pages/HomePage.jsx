import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import HeroSec from '../Components/HeroSection';
import Sep from "../Assets/sep.svg";
import Services from '../Components/Sevices';
import YThisApp from '../Components/Why-This-App';
import Ar from "../Assets/AR.svg";
const Home = () => {
    return ( <>
    
    
    <NavBar/>
    {/* hero section */}
    <HeroSec/>
    <img src={Sep} className='widdy' alt="Social media app for kids" />
{/* services section */}
<Services/>
{/* why this app section */}
<YThisApp />

{/* ar section */}
<img src={Ar} alt="Safe for kids" className='arimg' />


    </> );
}
 
export default Home;
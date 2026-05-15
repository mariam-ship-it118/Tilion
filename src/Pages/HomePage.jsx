import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import HeroSec from '../Components/HeroSection';
import Sep from "../Assets/sep.svg";
import Services from '../Components/Sevices';
import YThisApp from '../Components/Why-This-App';
import Ar from "../Assets/AR.svg";
import Reviews from '../Components/Reviews';
import Pro from "../Assets/profile.svg";
import SubHeadz from '../Components/SubHeads';
import "./Preloader.css";
import Septwo from "../Assets/sep2.svg";
import AboutHome from '../Components/AboutHome';
import FAQsHome from '../Components/FAQsHome';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home = () => {
    return ( <>

    
    <div className="loader "></div>
    <NavBar active="home"/>
    {/* hero section */}
    <HeroSec/>
    <img src={Sep} className='widdy' alt="Social media app for kids" />
{/* services section */}
<Services/>
<img src={Septwo} alt="safe app fpr kids" className='separation' />

{/* why this app section */}
<YThisApp />

{/* ar section */}
<img src={Ar} alt="Safe for kids" className='arimg' />

    <SubHeadz headz="Reviews" />


{/* reviews section */}
<section className='scroll-container'>

<section className='scroll-container'>
<Reviews prof={Pro} comment="I loved this app so mush my child feels free and safe." name="Marwa Sayed" />
<Reviews prof={Pro} comment="I loved this app so mush my child feels free and safe." name="Marwa Sayed" />
<Reviews prof={Pro} comment="I loved this app so mush my child feels free and safe." name="Marwa Sayed" />

</section>
</section>
<img src={Septwo} alt="safe app fpr kids" className='separation' />
<br /> <br /> <br />
<div className='reposition'>

<AboutHome/>
</div>
    <img src={Sep} className='widdy' alt="Social media app for kids" />

<SubHeadz headz="FAQs" />

<FAQsHome/>
    <img src={Sep} className='widdy' alt="Social media app for kids" />

    <SubHeadz headz="Contact" />
 
 <Contact/>

 <Footer/>

    </> );
}
 
export default Home;


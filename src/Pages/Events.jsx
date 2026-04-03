import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import EventMain from '../Components/EventsMain';
import EventsTypes from '../Components/SubMenuOne';
import EvSecTitle from '../Components/EventDivision';
import BannerText from '../Components/EventsTitles';
import HoverCard from '../Components/EventsCards';
import EventOne from "../Assets/event1.svg";
import Septwo from "../Assets/sep2.svg";
import Sep from "../Assets/sep.svg";
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";


const EventsMain = () => {
    return ( <>
    <NavBar active="events"/>
    
    <EventMain />
    <EventsTypes submenuu="middle"  menuone="Past" menutwo="Current" menuthree="Upcomming" />
    <EventsTypes submenuu="middle" menuone="Boys" menutwo="Girls" menuthree="Mix" />
               <EvSecTitle sec="Online"/>
              <BannerText 
        outlineText="Creating" 
        solidText="Tomorrow" 
      />   
      <Link to="">
      <HoverCard 
        imageUrl={EventOne}  
        title="Create a magic book with your parent"
        time="from 5:00pm to 8:00pm"
        tag="Girls only"
        />    
        </Link>  
 <img src={Septwo} alt="safe app fpr kids" className='separation' />

<br /><br /><br />

    <BannerText 
        outlineText="Knitting" 
        solidText="Tomorrow" 
      />   
             <HoverCard 
        imageUrl={EventOne}
        title="Makin gfashion sets together"
        time="from 7:00pm to 9:00pm"
        tag="Girls only"
      />   

    <img src={Sep} className='widdy' alt="Social media app for kids" />


  <EvSecTitle sec="On Site"/>
            <BannerText 
        outlineText="Painting" 
        solidText="Tomorrow" 
      />     
      <HoverCard 
        imageUrl={EventOne}
        title="Express freely with colors"
        time="from 1:00pm to 8:00pm"
        tag="Mix"
      />    
 <img src={Septwo} alt="safe app fpr kids" className='separation' />

<br /><br /><br />

    <BannerText 
        outlineText="Biulding" 
        solidText="Tomorrow" 
      />   
             <HoverCard 
        imageUrl={EventOne}
        title="Bring you ideas into life"
        time="from 11:00am to 7:00pm"
        tag="Boys only"
      />   

      <Footer/>
    </> );
}
 
export default EventsMain;
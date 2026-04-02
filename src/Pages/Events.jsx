import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import EventMain from '../Components/EventsMain';
import EventsTypes from '../Components/SubMenuOne';
import EvSecTitle from '../Components/EventDivision';
import BannerText from '../Components/EventsTitles';
import HoverCard from '../Components/EventsCards';
import EventOne from "../Assets/event1.svg";
const EventsMain = () => {
    return ( <>
    <NavBar/>
    
    <EventMain />
    <EventsTypes menuone="Past" menutwo="Current" menuthree="Upcomming" />
    <EventsTypes menuone="Boys" menutwo="Girls" menuthree="Mix" />
               <EvSecTitle sec="Online"/>
              <BannerText 
        outlineText="Creating" 
        solidText="Tomorrow" 
      />     
      <HoverCard 
        imageUrl={EventOne}
        title="Create a magic book with your parent"
        time="from 5:00pm to 8:00pm"
        tag="girls only"
      />                    
    </> );
}
 
export default EventsMain;
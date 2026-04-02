import React, { Component } from 'react';
import "./EventsMain.css";
import EventLand from "../Assets/eventslanding.svg";
import EventsTypes from './SubMenuOne';
import EvSecTitle from './EventDivision';
const EventMain = () => {
    return ( <>
    
    <img src={EventLand} className='eventframe' alt="eventys for children" />
    
    <EventsTypes/>
    
    </> );
}
 
export default EventMain;
import React, { Component } from 'react';
import "./SubMenuOne.css";
import { Link } from 'react-router-dom';
const EventsTypes = (props) => {
    return ( <>
    
    <section className=' well submenu' >
      <Link to="/events/past-events">
        <h2 className={props.submenuu ==="first"? "active" :""}>{props.menuone}</h2>
      </Link> 
      
       <Link to="/events">
        <h2 className={props.submenuu ==="middle"? "active" :""}>{props.menutwo}</h2>
       </Link>
        <Link to="/events/upcomming-events">
        <h2 className={props.submenuu ==="last"? "active" :""}>{props.menuthree}</h2>
        </Link>
    </section>
    
    </> );
}
 
export default EventsTypes;
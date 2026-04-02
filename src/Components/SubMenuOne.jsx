import React, { Component } from 'react';
import "./SubMenuOne.css";
const EventsTypes = (props) => {
    return ( <>
    
    <section className=' well submenu' >
        <h2>{props.menuone}</h2>
        <h2 >{props.menutwo}</h2>
        <h2>{props.menuthree}</h2>
    </section>
    
    </> );
}
 
export default EventsTypes;
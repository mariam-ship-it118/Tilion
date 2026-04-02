import React, { Component } from 'react';
import "./EventDivision.css";                                                                                               
const EvSecTitle = (props) => {
    return ( 
        <>
        <h3 className='secnames'>{props.sec}</h3>
        </>
     );
}
 
export default EvSecTitle;
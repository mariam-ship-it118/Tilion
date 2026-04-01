import React, { Component } from 'react';
import Starz from "../Assets/star.svg";
import "./SubHeads.css";
const SubHeadz = (props) => {
    return ( <>
    
    <div>
        <h2>{props.headz}</h2>
        <img src={Starz} alt="parental control" className='starry' />
        <div class="line"></div>
    </div>
    
    </> );
}
 
export default SubHeadz;
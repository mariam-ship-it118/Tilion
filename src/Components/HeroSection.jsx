import React, { Component } from 'react';
import "./HeroSec.css";
import Star from "../Assets/star.svg";
import Heart from "../Assets/heart.svg";
import Heading from "../Assets/heading.svg"; 

const HeroSec = () => {
    return ( <>
    
<div>
    <h1 className='healine'>Guareded with love</h1>
    <h1 className='healine'>Shining like the moon</h1>
    <img src={Heart} alt=""className='heartz' />
    <img src={Star} alt="" className='starz'/>
    
    </div>    
    <p>Social media app for kids</p>
    
    
    </> );
}
 
export default HeroSec;
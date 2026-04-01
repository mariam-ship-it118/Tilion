import React, { Component } from 'react';
import "./HeroSec.css";
import Star from "../Assets/star.svg";
import Heart from "../Assets/heart.svg";
import Heading from "../Assets/heading.svg"; 
import Safe from "../Assets/safe.svg";
import Mockup from "../Assets/mockup.svg";
const HeroSec = () => {
    return ( <>
    <div className='hero'>

        <div>

<div className='texthead'>
    <h1 className='healine'>Guareded with love</h1>
    <h1 className='healine'>Shining like the moon</h1>
    <img src={Heart} alt=""className='heartz' />
    <img src={Star} alt="" className='starz'/>
    
    </div>    
    <p>Social media app for kids</p>
    
    <div className='pcontrol'>
        <img src={Safe} alt="" />
        <p className='fixm '>Strong parental control</p>
    </div>
    <button className='download'>Download the app</button>
        </div>

<img src={Mockup} alt="" />

    </div>
    
    </> );
}
 
export default HeroSec;
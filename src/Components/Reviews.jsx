import React, { Component } from 'react';
import Pro from "../Assets/profile.svg";
import Rline from "../Assets/review.svg";
import "./Reviews.css";
import SubHeadz from './SubHeads';

const Reviews = (props) => {
    return ( <>
    

<div className='scroll-content'>

<div className='card'>

    <p className='margindelete comment'>{props.comment}</p>
    <img src={Rline} alt=""  />
    <div className='accountrev'>
        <img src={props.prof} alt="" />
        <h3 className='names'>{props.name}</h3>
    </div>
</div>
</div>
    
  
    
    </> );
}
 
export default Reviews;
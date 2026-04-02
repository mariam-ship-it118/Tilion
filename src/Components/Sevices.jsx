import React, { Component } from 'react';
import "./Services.css";
import Active from "../Assets/a.svg";
import Safety from "../Assets/s.svg";
import Connect from "../Assets/c.svg"; 
import SubHeadz from './SubHeads';
import Serv from './Serv';

const Services = () => {
    return ( <>
    
    <SubHeadz headz="Sevices"/>
<section>

<div className='disa'>
    
<Serv img={Safety}  type="afety" para="Kids can freely post their pictures online without worrying about adults or cyberbullying."/>   
<Serv img={Connect}  type="onnect" para="They can easily connect with their friends only form their phone contacts or request sent from parent."/>   
<Serv img={Active}  type="ctivities" para="they can practice any activity assigned by the parent into the child account and he get to choose from them."/>   
</div>











</section>

    </> );
}
 
export default Services;
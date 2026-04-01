import React, { Component } from 'react';
import "./Services.css";
import Active from "../Assets/a.svg";
import Safety from "../Assets/s.svg";
import Connect from "../Assets/c.svg";
const Serv = (props) => {
    return (  <>
    <div className='card-serv'>

    <div className='Thetitle'>
<img src={props.img} alt="" />
    <h3 className='servhead'>{props.type}</h3>
    </div>
    <p   className='servpara'>{props.para}</p>
    </div>
    
    </>);
}
 
export default Serv;
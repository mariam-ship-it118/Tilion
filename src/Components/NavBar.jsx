import React, { Component } from 'react';
import './NavBar.css';
import Logo from '../Assets/logo.svg';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const NavBar = (props) => {
    return ( <>

     <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Italianno&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    <ul className='fixed navie  '>
       <Link to="/">
       <li className={props.active ==="home"? "active" :""}>Home</li>
       </Link> 

       <Link to="/aboutus">
        <li className={props.active ==="aboutus"? "active" :""}>About</li>
       </Link>
       <Link to="/blogs">
       <li className={props.active ==="blogs"? "active" :""}>Blogs</li>
       </Link>
        <li><img src={Logo} className='logonav' alt="Social media app for kids" /></li>
       
       <Link to="/events">
        <li className={props.active ==="events"? "active" :""}>Events</li>
       </Link>
       <Link to="/faqs">
        <li className={props.active ==="faqs"? "active" :""}>FAQs</li>
       </Link>
        <li><button className='navbtns'>Login</button></li>
        <li><button className='navbtns'>ar</button></li>
    </ul>

     
      

    
    
    </> );
}
 
export default NavBar;


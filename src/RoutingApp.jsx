import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Home from './Pages/HomePage';
import {BrowserRouter, Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsMain from './Pages/Events';
import AboutUs from './Pages/AboutUs';

const RoutingApp = () => {
    return ( <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
             <Route path="/events" element={<EventsMain />} />
             <Route path="/aboutus" element={<AboutUs />} />

      </Routes>
    </Router>
    
    </> );
}
 
export default RoutingApp;
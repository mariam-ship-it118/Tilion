import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Home from './Pages/HomePage';
import {BrowserRouter, Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RoutingApp = () => {
    return ( <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    
    </> );
}
 
export default RoutingApp;
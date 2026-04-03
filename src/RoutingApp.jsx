import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Home from './Pages/HomePage';
import {BrowserRouter, Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsMain from './Pages/Events';
import AboutUs from './Pages/AboutUs';
import FAQZ from './Pages/FAQs';
import Blogs from './Pages/Blogs';
import EventOne from './Pages/EventOne';
import Career from './Pages/Career';
import EventsVerTwo from './Pages/EventOne';
import EventsVerThree from './Pages/EventOne';
import EventsVerOne from './Pages/EventTwo';

const RoutingApp = () => {
    return ( <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
             <Route path="/events" element={<EventsMain />} />
      <Route path="/aboutus" element={<AboutUs />} />
       <Route path="/faqs" element={<FAQZ />} />
    <Route path="/blogs" element={<Blogs />} />

       {/* <Route path="/events/" element={<EventOne />} /> */}
         <Route path="/career" element={<Career />} />
<Route path='/events/upcomming-events' element={<EventsVerThree/>}/>
<Route path='/events/past-events' element={<EventsVerOne/>}/>
      </Routes>
    </Router>
    
    </> );
}
 
export default RoutingApp;
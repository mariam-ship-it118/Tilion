import React, { Component } from 'react';
import BlogsTitleComponent from '../Components/BlogsMain';
import NavBar from '../Components/NavBar';
import HoverCard from '../Components/EventsCards';
import Blog1 from "../Assets/blog1.svg";
import Blog2 from "../Assets/blog2.svg";
import Blog3 from "../Assets/blog3.svg";
import Footer from '../Components/Footer';
const Blogs = () => {
    return ( <>
    <NavBar/>
    <BlogsTitleComponent/>
     <HoverCard 
        imageUrl={Blog1}
        title=" What is AR? "
        time=""
        tag="Yesterday"
      /> 

<br /> <br />

        <HoverCard 
        imageUrl={Blog2}
        title=" how doeas AR work? "
        time=""
        tag="2 april"
      /> 

<br /> <br />
  <HoverCard 
        imageUrl={Blog3}
        title=" What we all open AR together? "
        time=""
        tag="1 april"
      /> 

<Footer/>


    
    </> );
}
 
export default Blogs;
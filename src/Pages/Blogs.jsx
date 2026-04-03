import React, { Component } from 'react';
import BlogsTitleComponent from '../Components/BlogsMain';
import NavBar from '../Components/NavBar';
import HoverCard from '../Components/EventsCards';
import Blog1 from "../Assets/blog1.svg"

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
        imageUrl={Blog1}
        title=" What is AR? "
        time=""
        tag="Yesterday"
      /> 


    
    </> );
}
 
export default Blogs;
import React, { Component } from 'react';
import CareerPage from '../Components/CareerLanding';
import ArticleSection from '../Components/Articles';
import OpenPositions from '../Components/OpenPositions';
import Footer from '../Components/Footer';
import Officeone from "../Assets/officeimg1.svg";
import Officetwo from "../Assets/officeimg2.svg";

const articlesData = [ 
  {
    id: 1,
    heading: "Build the<br/>future of<br/>safe<br/>social.",
    paragraph: "At Tilion, we are building a safer and more creative digital world for children. We're looking for passionate, innovative minds who believe in positive technology and meaningful screen time.",
    imageSrc:Officetwo ,
  },
  {
    id: 2,
    heading: "Empower<br/>the next<br/>generation.",
    paragraph: "If you're ready to help shape the future of kids' social media in a trusted and inspiring environment, we'd love to grow with you. Join our dynamic team.",
    imageSrc: Officeone,
  }
];


const Career = () => {
    return ( <>
    
    
    <CareerPage/>
{articlesData.map((article, index) => (
        <ArticleSection 
          key={article.id}
          heading={article.heading}
          paragraph={article.paragraph}
          imageSrc={article.imageSrc}
          /* Using the modulo operator (%) to reverse every other layout */
          reverseLayout={index % 2 !== 0} 
        />
      ))}
    
    
    <OpenPositions/>
    
    <Footer/>
    
    </> );
}
 
export default Career;
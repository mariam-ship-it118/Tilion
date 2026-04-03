import React, { Component } from 'react';
import FAQ from '../Components/FAQsAsk';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import AnimatedFAQs from '../Components/AnimatedFAQ';


const myFaqs = [
  {
    question: "What is AR?",
    answer: "Augmented Reality (AR) is an interactive experience where digital objects are placed into the real world in real-time."
  },
  {
    question: "Is AR bad for kids?",
    answer: "Augmented Reality (AR) can actually be good for kids when it’s designed well. It encourages movement, creativity, and real-world interaction instead of passive scrolling. Kids aren’t just staring at a screen — they’re exploring, playing, and learning through it."
  },
  {
    question:"Can kids talk to strangers?",
    answer: "No. Kids can only interact with approved friends. Parents must confirm any new connection."
  },
  {
    question:"What is this app about?",
    answer:"This app is a safe social media platform designed especially for kids. It allows children to connect, share, and explore content in a fun and secure environment monitored by parents."
  },
  {
    question:" How do parents control the app?",
    answer:"Approve friend requests, Monitor messages and activity, Set screen time limits, Block or report users"
  }
];

const myOtherFaqs =[


{
  question: "Are there ads in the app?",
  answer:"No harmful or inappropriate ads are shown. The app is designed to be distraction-free and safe for kids."
},

{
  question:"What age group is this app for?",
  answer:"The app is designed for children aged 7–13 years old."
  
},
{
  question:"Is my child’s data protected?",
  answer:"Yes. The app follows strict privacy rules:  No sharing of personal data, Secure storage, Parent-controlled access"
}




];





const FAQZ = () => {
    return ( <>
    
    
    <NavBar/>
<AnimatedFAQs/>
    <FAQ  title="General questions" faqItems={myFaqs} />
    <FAQ  title="Frequently asked questions" faqItems={myOtherFaqs} />
    <Footer/>
    </> );
}
 
export default FAQZ;
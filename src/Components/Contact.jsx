import React, { Component } from 'react';
import "./Contact.css";

const Contact = () => {
    return ( <>
    <section className='body-wrapper'>

   
   <div class="container">
    <div class="background-group">
      <div class="dashed-border"></div>
      <div class="solid-background"></div>
    </div>
    
    <div class="form-wrapper">
      <form class="contact-form">
        <div class="form-field">
          <label for="name" class="form-label">Name</label>
          <input type="text" id="name" name="name" class="form-input"/>
        </div>
        
        <div class="form-field">
          <label for="email" class="form-label">email</label>
          <input type="email" id="email" name="email" class="form-input"/>
        </div>
        
        <div class="form-field">
          <label for="message" class="form-label">Message</label>
          <input type="text" id="message" name="message" class="form-input"/>
        </div>
        
        <button type="submit" class="send-button">Send</button>
      </form>
    </div>
  </div>
    
     </section>
    
    
    
    
    </> );
}
 
export default Contact;
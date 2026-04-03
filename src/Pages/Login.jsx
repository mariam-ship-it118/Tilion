import React from 'react';
import './LoginPage.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import kidsCollage from "../Assets/logintext.svg";

const LoginPage = () => {
  return (
    <div className="page-container">
     <NavBar/>
<div className="login-page">
      <div className="login-content">
        
        {/* Left Column - Login Form */}
        <div className="login-form-column">
          <h1 className="tillion-logo">
            <span className="login-into-text">login into</span> 
            <span className="tillion-text">Tillion</span>
          </h1>
          
          <form className="login-form">
            <div className="form-field">
              <label>mobile number, username, id</label>
              <input type="text" placeholder="" />
            </div>
            
            <div className="form-field">
              <label>Password</label>
              <input type="password" placeholder="" />
            </div>
            
            <button type="submit" className="login-btn">Login</button>
            
            <a href="#" className="forgot-password-link">Forgot password?</a>
            
            <button type="button" className="google-login-btn">
              {/* <img src={googleLogo} alt="Google Logo" className="google-icon" /> */}
              <span className="google-icon-placeholder">G</span>
              <span>login with google</span>
            </button>
            
            <button type="button" className="create-account-btn">create new account</button>
          </form>
        </div>
        
        {/* Right Column - Illustration Card */}
        <div className="illustration-column">
          <div className="illustration-wrapper">
            
            {/* Main Collage Placeholder - Recreates the stacked effect */}
            <div className="collage-layers">
              <div className="collage-base">
                <img src={kidsCollage} alt="Kids Selfie collage" />
              </div>
              
              {/* Floating Frame with Heart (Simplification) */}
              <div className="social-frame-overlay">
                <span className="heart-icon">❤️</span>
              </div>
            </div>
            
            {/* Absolutely Positioned Floating Elements */}
            
            {/* Emojis - I'll use Unicode approximations for simplicity, 
               but you'd use your specific image assets */}
            <div className="floating-emoji crying-emoji">😥</div>
            <div className="floating-emoji heart-eye-emoji">😍</div>
            
            {/* Text Bubbles */}
            <div className="text-bubble lets-go-bubble">
              <span>Let's go!</span>
              <span className="sparkle">✨</span>
            </div>
            
            <div className="text-bubble wow-bubble">
              <span>wow!</span>
              <span className="small-emoji">😳</span>
              <span className="sparkle">✨</span>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
<Footer/>
          </div>

      
  );
};

export default LoginPage;
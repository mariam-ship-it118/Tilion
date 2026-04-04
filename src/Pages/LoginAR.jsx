import React from 'react';
import './LoginPage.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import kidsCollage from "../Assets/logintext.svg";

const LoginPageAr = () => {
  return (
    <div className="page-container">
      <NavBar/>
      <div className="login-page">
        <div className="login-content">
          
          {/* العمود الأيسر - نموذج تسجيل الدخول */}
          <div className="login-form-column">
            <h1 className="tillion-logo">
              <span className="login-into-text">تسجيل الدخول إلى</span> 
              <span className="tillion-text">Tillion</span>
            </h1>
            
            <form className="login-form">
              <div className="form-field">
                <label>رقم الجوال، اسم المستخدم، المعرف</label>
                <input type="text" placeholder="" />
              </div>
              
              <div className="form-field">
                <label>كلمة المرور</label>
                <input type="password" placeholder="" />
              </div>
              
              <button type="submit" className="login-btn">تسجيل الدخول</button>
              
              <a href="#" className="forgot-password-link">هل نسيت كلمة المرور؟</a>
              
              <button type="button" className="google-login-btn">
                {/* <img src={googleLogo} alt="شعار جوجل" className="google-icon" /> */}
                <span className="google-icon-placeholder">G</span>
                <span>تسجيل الدخول باستخدام جوجل</span>
              </button>
              
              <button type="button" className="create-account-btn">إنشاء حساب جديد</button>
            </form>
          </div>
          
          {/* العمود الأيمن - بطاقة الرسم التوضيحي */}
          <div className="illustration-column">
            <div className="illustration-wrapper">
              
              {/* عنصر نائب مجمع رئيسي - يعيد إنشاء التأثير المتراكب */}
              <div className="collage-layers">
                <div className="collage-base">
                  <img src={kidsCollage} alt="مجمعة صور سيلفي للأطفال" />
                </div>
                
                {/* إطار عائم مع قلب (تبسيط) */}
                <div className="social-frame-overlay">
                  <span className="heart-icon">❤️</span>
                </div>
              </div>
              
              {/* عناصر عائمة متمركزة بشكل مطلق */}
              
              {/* الرموز التعبيرية - سأستخدم تقريبات Unicode للتبسيط، ولكن يمكنك استخدام أصول الصور الخاصة بك */}
              <div className="floating-emoji crying-emoji">😥</div>
              <div className="floating-emoji heart-eye-emoji">😍</div>
              
              {/* فقاعات نصية */}
              <div className="text-bubble lets-go-bubble">
                <span>هيا بنا!</span>
                <span className="sparkle">✨</span>
              </div>
              
              <div className="text-bubble wow-bubble">
                <span>واو!</span>
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

export default LoginPageAr;
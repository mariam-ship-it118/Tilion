import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../Assets/logo.svg';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const leftLinks = [
  { to: '/', label: 'Home', key: 'home' },
  { to: '/events', label: 'Events', key: 'events' },
  { to: '/aboutus', label: 'About', key: 'aboutus' },
];

const rightLinks = [
  { to: '/blogs', label: 'Blogs', key: 'blogs' },
  { to: '/faqs', label: 'FAQs', key: 'faqs' },
];

const NavBar = ({ active }) => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const linkClass = (key) => (active === key ? 'navbar-link active' : 'navbar-link');

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Italianno&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <nav className="navbar">
        <div className="navbar-inner">
          <button
            className={`navbar-burger ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>

          <ul className="navbar-links navbar-left">
            {leftLinks.map(({ to, label, key }) => (
              <li key={key}>
                <Link to={to} className={linkClass(key)}>{label}</Link>
              </li>
            ))}
          </ul>

          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={Logo} alt="Tilion" />
          </Link>

          <div className="navbar-right">
            <ul className="navbar-links">
              {rightLinks.map(({ to, label, key }) => (
                <li key={key}>
                  <Link to={to} className={linkClass(key)}>{label}</Link>
                </li>
              ))}
            </ul>

            <div className="navbar-actions">
              <Link to="/login" className="navbar-btn">Login</Link>
              <Link to="/login-ar" className="navbar-btn">Ar</Link>
            </div>
          </div>
        </div>

        <div className={`navbar-mobile ${open ? 'open' : ''}`}>
          <ul className="navbar-mobile-links">
            {[...leftLinks, ...rightLinks].map(({ to, label, key }) => (
              <li key={key}>
                <Link to={to} className={linkClass(key)} onClick={closeMenu}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className="navbar-mobile-actions">
            <Link to="/login" className="navbar-btn" onClick={closeMenu}>Login</Link>
            <Link to="/login-ar" className="navbar-btn" onClick={closeMenu}>Ar</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

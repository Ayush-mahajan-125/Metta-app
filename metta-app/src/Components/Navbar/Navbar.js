// File: src/components/Navbar/Navbar.js
import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import mettaLogo from '../../assets/img/metta-logo.png';

import { useLanguage } from '../../LanguageContext';

const Navbar = () => {

  const { translate } = useLanguage();

  return (
    <nav className="navbar navbar-expand-lg msm-navmneu-bar py-3 fixed-top">
      <div className="container">
        <NavLink className="navbar-brand text-success" to="/">
          <img src={mettaLogo} className="img-fluid" alt="MeTta Financial Investment & Trading Training Institute" loading="lazy" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto text-center text-white">

            {/* Home */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/" aria-current="page"> {translate('Home')}</NavLink>
            </li>
            {/* /Home */}

            {/* About Us */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/about-us">{translate('About us')}</NavLink>
            </li>
            {/* /About Us */}

            {/* Contact us */}
            <li className="nav-item ">
              <NavLink className="nav-link" to="/contact-us">{translate('About us')}</NavLink>
            </li>
            {/* /Contact us */}

            {/* Photo Gallery */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/testimonial">{translate('Testimonial')}</NavLink>
            </li>
            {/* Photo Gallery */}

            {/* Testimonials */}
            <li className="nav-item ">
              <NavLink className="nav-link" to="/gallery">{translate('Gallery')}</NavLink>
            </li>
            {/* /Testimonials */}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

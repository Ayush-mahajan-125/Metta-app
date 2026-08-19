// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { NavLink } from "react-router-dom";
// import mettaLogo from "../../assets/img/metta-logo.png";
// import { useLanguage } from "../../LanguageContext";
// import "./Navbar.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// const Navbar = () => {
//   const { translate } = useLanguage();
//   const [isNavCollapsed, setIsNavCollapsed] = useState(true);
//   const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

//   const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

//   return (

//     <>
//       <div className="bg-primary-color ">
//         <nav className="navbar navbar-expand-lg msm-navmenu-bar">
//           <div className="container">
//             <NavLink className="navbar-brand text-success" to="/">
//               <img
//                 src={mettaLogo}
//                 className="img-fluid msm-w-25"
//                 alt="MeTta Financial Investment & Trading Training Institute"
//                 loading="lazy"
//               />
//             </NavLink>
//             <button
//               className="navbar-toggler"
//               type="button"
//               aria-controls="navbarSupportedContent"
//               aria-expanded={!isNavCollapsed}
//               aria-label="Toggle navigation"
//               onClick={handleNavCollapse}
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav ms-auto text-center text-white">
//                 {/* Home */}
//                 <li className="nav-item">
//                   <NavLink
//                     className="nav-link"
//                     to="/"
//                     onClick={() => setIsNavCollapsed(true)}
//                   >
//                     {translate("Home")}
//                   </NavLink>
//                 </li>
//                 {/* /Home */}

//                 {/* Enrollment */}
//                 <li className="nav-item px-1">
//                   <NavLink
//                     className="nav-link"
//                     to="/enrollment-form"
//                     onClick={() => setIsNavCollapsed(true)}
//                   >
//                     {translate("Enrollment Form")}
//                   </NavLink>
//                 </li>
//                 {/* /Enrollment */}

//                 {/* Modules */}
//                 <li className="nav-item ">
//                   <NavLink
//                     className="nav-link"
//                     to="/share-market-courses"
//                     onClick={() => setIsNavCollapsed(true)}
//                   >
//                     {translate("Course Modules")}
//                   </NavLink>
//                 </li>
//                 {/* /Modules */}

//                  {/* Resources */}
//                  <li className="nav-item">
//                   <NavLink
//                     className="nav-link"
//                     to="/resources"
//                     onClick={() => setIsNavCollapsed(true)}
//                   >
//                     {translate("Resources")}
//                   </NavLink>
//                 </li>
//                 {/* /Resources */}

//                 {/* Contact us */}
//                 <li className="nav-item px-1">
//                   <NavLink
//                     className="nav-link"
//                     to="/contact-us"
//                     onClick={() => setIsNavCollapsed(true)}
//                   >
//                     {translate("Contact us")}
//                   </NavLink>
//                 </li>
//                 {/* /Contact us */}

//                 <li
//                   className="nav-item position-relative"
//                   onMouseEnter={() => setAboutMenuOpen(true)}
//                   onMouseLeave={() => setAboutMenuOpen(false)}
//                 >
//                   <span className="nav-link cursor-pointer dropdown-toggle">
//                     {translate("About us")}
//                   </span>

//                   <AnimatePresence>
//                     {aboutMenuOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 10 }}
//                         transition={{ duration: 0.2 }}
//                         className="position-absolute bg-white shadow-lg px-3 py-2 rounded-3 gap-3 justify-content-start msm-mobile-view"
//                         style={{
//                           top: "100%",
//                           left: "0",
//                           width: "210px",
//                           zIndex: "1000",
//                         }}
//                       >
//                         {/* about us */}
//                         <NavLink
//                           className="nav-link msm-text-dark-color"
//                           to="/about-us"
//                           onClick={() => setIsNavCollapsed(true)}
//                         >
//                           {translate("About Metta")}
//                         </NavLink>
//                         {/* /about us */}

//                         {/* Gallery */}
//                         <NavLink
//                           className="nav-link msm-text-dark-color"
//                           to="/gallery"
//                           onClick={() => setIsNavCollapsed(true)}
//                         >
//                           {translate("Gallery")}
//                         </NavLink>
//                         {/* /Gallery */}

//                         {/* Testimonials */}
//                         <NavLink
//                           className="nav-link msm-text-dark-color"
//                           to="/testimonial"
//                           onClick={() => setIsNavCollapsed(true)}
//                         >
//                           {translate("Testimonial")}
//                         </NavLink>
//                         {/* /Testimonials */}

//                         {/* Calculator */}
//                         <li className="nav-item">
//                           <NavLink
//                             className="nav-link msm-text-blue"
//                             to="/sip-calculator"
//                             onClick={() => setIsNavCollapsed(true)}
//                           >
//                             {translate("SIP Calculator")}
//                           </NavLink>
//                         </li>
//                         {/* /Calculator */}

//                         {/* CAGRCalculator */}
//                         <li className="nav-item">
//                           <NavLink
//                             className="nav-link msm-text-dark-color"
//                             to="/cagr-calculator"
//                             onClick={() => setIsNavCollapsed(true)}
//                           >
//                             {translate("CAGR Calculator")}
//                           </NavLink>
//                         </li>
//                         {/* /CAGRCalculator */}

//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </li>

//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewmettaLogo from "../../assets/img/metta-logo.png";

import {
  faPhone, faEnvelope, faBars, faTimes
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF, faInstagram, faTelegramPlane, faWhatsapp, faYoutube, faXTwitter, faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header-container">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="contact-info">
            <div className="contact-item">
              <a href="tel:+919834888821" className="icon-small"><FontAwesomeIcon icon={faPhone} />
                <span className='ps-2'>+91-9834888821</span> </a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="icon-small" />
              <span className='ps-2'>mettasharemarket@gmail.com</span>
            </div>
          </div>

          <div className="social-icons">

            <a className="" href="https://wa.me/919834888821" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faWhatsapp} className="msm-whatsapp-icon" /></a>

            <a className="" href="https://www.youtube.com/@mettasharemarket" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faYoutube} className="msm-whatsapp-icon" /></a>

            <a className="" href="https://www.instagram.com/mettasharemarket/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faInstagram} className="msm-whatsapp-icon" /></a>

            <a className="" href="https://www.facebook.com/sharemarketmetta/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faFacebookF} className="msm-whatsapp-icon" /></a>


            <a className="" href="https://t.me/joinchat/HrYYVxCqEvLAN3hc" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faTelegramPlane} className="msm-whatsapp-icon" /></a>

            <a className="" href="https://x.com/indiamettasm" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faXTwitter} className="msm-whatsapp-icon" /></a>
          </div>
        </div>
      </div>

      <nav className={`main-nav ${isSticky ? 'sticky-active' : ''}`}>
        <div className="container nav-content">

          <div className="logo">
            <a href="/" className='text-decoration-none'>  <img
              src={NewmettaLogo}
              className="img-fluid msm-w-25"
              alt="MeTta Financial Investment & Trading Training Institute"
              loading="lazy"
            /></a>
          </div>

          <div className="mobile-toggle" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </div>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>

            <li><a href="/">Home</a></li>
            <li><a href="https://www.nseindia.com/" className='text-orange-color'>NSE india</a></li>
            <li><a href="https://www.screener.in/" className='text-green-color'>Screener</a></li>
            <li><a href="/enquire-now" className=''>Enquire Now</a></li>
            {/* <li><a href="/admission-form" className='text-info'>Admission Form</a></li> */}
            <li><a href="https://classplusapp.com/w/metta-share-market-fhxiz/courses" className='nav-color'>Online Courses</a></li>
            <li><a href="/share-market-courses" className='nav-color'>Classroom Courses</a></li>

            <li className="dropdown-parent">
              <a href="#">About us</a>
              <ul className="dropdown-menu">
                <li><a href="/about-us">About Metta</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/testimonial">Testimonial</a></li>
                <li><a href="/resources">Resources</a></li>
                <li><a href="/cagr-calculator">CAGR Calculator</a></li>
                {/* <li><a href="/seminar-register">AI Seminar</a></li> */}
                <li><a href="/sip-calculator">SIP Calculator</a></li>
                <li><a href="/ai-prompt">AI Prompt</a></li>

              </ul>
            </li>
            <li><a href="/contact-us">Contact US</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;         
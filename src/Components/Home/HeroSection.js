// import React, { useEffect, useRef } from 'react';
// import Typed from 'typed.js'; // Import Typed.js
// import './Home.scss';
// import profileImage from '../../assets/img/IMG_1359.jpg';
// import { Helmet } from 'react-helmet-async';


// const HeroSection = () => {
//   const typingRef = useRef(null); // Reference for the typing effect

//   // Typing effect
//   useEffect(() => {
//     const typed = new Typed(typingRef.current, {
//       strings: ['"Art Of Wealth Creation"'], // Ensure the text is in quotes
//       typeSpeed: 50, // Typing speed
//       backSpeed: 30, // Backspacing speed
//       loop: true, //  loop
//       showCursor: false, // Hide cursor
//     });

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <>
//       {/* hero section */}
//         <Helmet>
//         <title>Metta Share Market | Learn Share Trading</title>
//         <meta name="description" content="Join Metta Share Market to learn stock trading. Live classes, beginner friendly, English , Marathi & Hindi available." />
//       </Helmet>
//       <div className="msm-masthead-header">
//         <div className="container col-12">
//           <div className="row align-items-center">
//             <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 msm-hero-section-mobile-view">
//               {/* heading */}

//               <h1 className="lead fw-normal text-dark mb-3">
//                 Welcome to
//               </h1>
//               <h1 className="display-5 fw-bold mb-3 text-dark">
//                 Metta Financial Investment & Trading Training Institute
//               </h1>

//               {/* /heading */}

//               {/* description */}
//               <p className="lead text-dark fs-6">
//                 Metta Share Market is Nagpur’s most trusted stock market training institute. Learn from experts and become a confident trader.
//               </p>
//               {/* /description */}

//               {/* button */}
//               <div className="lw-msm-button">
//                 <a class="btn-primary" href="/enrollment-form">Enroll Now</a>
//               </div>
//               {/* /button */}
//             </div>

//             {/* image */}
//             <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
//               <div className="image-container">
//                 <img src={profileImage} className="img-fluid msm-hero-image rounded-4" alt="Swapnil-khaire" loading="lazy" />
//               </div>
//             </div>
//             {/* /image */}
//           </div>
//         </div>
//       </div>
//       {/* hero section */}

//       {/* Typing Effect Section */}
//       <section className="msm-quotes">
//         <div className="container text-center">
//           <h1 ref={typingRef} className="typing" aria-label="Art Of Wealth Creation"></h1>
//         </div>
//       </section>
//       {/* Typing Effect Section */}
//     </>
//   );
// };


// import React from 'react';
// import './Home.scss';
// import tradingVideo from '../../assets/img/0_Global_Market_Financial_Data_1920x1080.mp4';
// // import  from './assets/video.mp4';

// const HeroSection = () => {
//   return (
//     <div className="hero-container">


//       <video autoPlay loop muted playsInline className="background-video">
//         <source src={tradingVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* <video width="100%" autoPlay muted loop>
//         <source src={tradingVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video> */}

//       {/* The Content Overlay */}
//       <div className="hero-content">
//         <h1>Master the Market</h1>
//         <p>Advanced trading strategies without the noise.</p>
//         <button className="hero-btn">Get Started</button>
//       </div>
//     </div>
//   );
// };


// export default HeroSection;





import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import these
import "./Home.scss";
import heroVideo from "../../assets/img/573259_Business_Stock_1920x1080.mp4";
import mettaLogo from "../../assets/img/metta-logo.png";


const words = ["Real Market Experience", "Practical Market Skills", "Expert Guidance", "Structured Learning", "Clear Concepts", "Professional Mentorship"];

const VideoHero = () => {
  const videoRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Rotate text index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.2;
    }
  }, []);

  return (
    <section className="video-hero">
      <video
        ref={videoRef}
        className="video-bg"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="overlay"></div>

      <div className="hero-content">
        
        <img
          src={mettaLogo}
          className="img-fluid hero-section-logo mb-2"
          alt="MeTta Financial Investment & Trading Training Institute"
          loading="lazy"
        /> 
        {/* <div className="main-logo">
          <img src={mettaLogo} alt="Logo" />
        </div> */}

        {/* Animated Heading with Zooming Text */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Master <i className="text-ani-h1">Stock Market </i> Trading with <br /> */}
          Master Stock Market Trading with <br />
          <div className="word-wrapper">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="highlight"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Shares I Futures I Options I SMC I Forex I Crypto I AI I Short & Long Term I Psychology
        </motion.p>
     
          {/* <a className=" btn homr-btn msm-primary" href="tel:+919834888821" >Call Us: (+91) 98348 88821</a> */}
          <a className="home-section-btn" href="tel:+919834888821" >Call Us: (+91) 98348 88821</a>
      </div>
    </section>
  );
};

export default VideoHero;



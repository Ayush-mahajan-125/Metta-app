import React, { useEffect, useState, useRef } from 'react';
import Typed from 'typed.js'; // Import Typed.js
import './Home.scss';
import profileImage from '../../assets/img/IMG_1359.JPG';


const HeroSection = () => {
  const typingRef = useRef(null); // Reference for the typing effect

  // call random image
  // Manually list all images
  const images = [
    require('../../assets/randomFolder1/image1.jpg'),
    require('../../assets/randomFolder1/image2.jpg'),
    require('../../assets/randomFolder1/image3.jpg'),
    require('../../assets/randomFolder1/image5.jpg'),
    require('../../assets/randomFolder1/image6.jpg'),
    require('../../assets/randomFolder1/image7.jpg'),
    require('../../assets/randomFolder1/image8.jpg'),
    require('../../assets/randomFolder1/image9.jpg'),
    require('../../assets/randomFolder1/image10.jpg'),
    require('../../assets/randomFolder1/image11.jpg'),
  ];

  // Select a random image on reload
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  // Typing effect
  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ['"Art Of Wealth Creation"'], // Ensure the text is in quotes
      typeSpeed: 50, // Typing speed
      backSpeed: 30, // Backspacing speed
      loop: true, //  loop
      showCursor: false, // Hide cursor
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* hero section */}
      <div className="msm-masthead-header" style={{ backgroundImage: `url(${randomImage})` }}>
        <div className="container col-12">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 msm-hero-section-mobile-view">
              {/* heading */}
              <p className="lead text-white fs-6 mb-2 fw-bold">
                Welcome to
              </p>
              <h1 className="display-5 fw-bold mb-3 text-white">
                <span className="msm-text-success">Me</span>
                <span className="msm-text-danger">Tta</span> Financial Investment & Trading Training Institute
              </h1>
              {/* /heading */}

              {/* description */}
              <p className="lead msm-text-secondary fs-6">
                Unlock the secrets of smart investing and trading with expert-led training. Gain the skills to navigate financial markets and build lasting wealth!
              </p>
              {/* /description */}

              {/* button */}
              <div className="lw-msm-button">
                <a class="btn-primary" href="#">Get Started</a>
              </div>
              {/* /button */}
            </div>

            {/* image */}
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="image-container">
                <img src={profileImage} className="img-fluid msm-hero-image rounded-4" alt="Swapnil-khaire" loading="lazy" />
              </div>
            </div>
            {/* /image */}
          </div>
        </div>
      </div>
      {/* hero section */}

      {/* Typing Effect Section */}
      <section className="msm-quotes">
        <div className="container text-center">
          <h1 ref={typingRef} className="typing "></h1>
        </div>
      </section>
      {/* Typing Effect Section */}
    </>
  );
};

export default HeroSection;

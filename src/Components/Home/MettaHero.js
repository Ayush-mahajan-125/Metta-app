import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Import Typed.js
import './Home.scss';
import profileImage from '../../assets/img/IMG_1359.png';
import { Helmet } from 'react-helmet-async';


const MettaHero = () => {
    const typingRef = useRef(null); // Reference for the typing effect

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
            <Helmet>
                <title>Metta Share Market | Learn Share Trading</title>
                <meta name="description" content="Join Metta Share Market to learn stock trading. Live classes, beginner friendly, English , Marathi & Hindi available." />
            </Helmet>
            <div className="msm-masthead-header">
                <div className="container col-12">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 msm-hero-section-mobile-view">

                            <h1 className="display-6 fw-bold mb-3 text-white">
                                MeTta Financial Investment & Trading Training Institute
                            </h1>
                            <p className="lead text-light fs-6">
                                Metta Share Market is Nagpur’s most trusted stock market training institute. Learn from experts and become a confident trader.
                            </p>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="msm-card">
                                <div class="msm-bg-container">
                                    <img src={profileImage} className="img-fluid msm-hero-image " alt="Swapnil-khaire" loading="lazy" />
                                </div>
                                <div class="blob"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* hero section */}

            {/* Typing Effect Section */}
            <section className="msm-quotes">
                <div className="container text-center">
                    <h1 ref={typingRef} className="typing" aria-label="Art Of Wealth Creation"></h1>
                </div>
            </section>
            {/* Typing Effect Section */}
        </>
    );
};
export default MettaHero;
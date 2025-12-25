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

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

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
        <a className="home-section-btn" href="tel:+919834888821" >Call Us: (+91) 98348 88821</a>
      </div>
    </section>
  );
};

export default VideoHero;



import React, { useState, useEffect } from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// pages
import HeroSection from './HeroSection';
import MettaHero from './MettaHero';
import SmoothCursor from './SmoothCursor';
import HeroGallery from './HeroGallery';
import TestimonialSlider from './TestimonialSlider';
// import BrochureDownloadForm from './BrochureDownloadForm';
// import HomeBrochureDownloadForm from './HomeBrochureDownloadForm';
import HomeAbout from './HomeAbout';
import HomeWhyChoose from './HomeWhyChoose';
import NagpurBestClasses from './NagpurBestClasses';
import CallToAction from './CallToAction';
// import EmailSubscriptionForm from './EmailSubscriptionForm';
import Certification from './Certification';
import poterImage from "../../assets/img/trading with AI.png";


// Import Bootstrap's Modal
import { Modal } from 'bootstrap';

const Home = () => {


  const [showBrochureForm, setShowBrochureForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBrochureForm(true);

      const modalElement = document.getElementById('brochureModal');
      if (modalElement) {
        const modal = new Modal(modalElement);
        modal.show();
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="home">

      <HeroSection />

      <MettaHero />

      {/* <SmoothCursor /> */}
      
      <HomeAbout />
      
      {/* <div className='msm-bg-cover-image'> */}
    
      <HomeWhyChoose />
     

      {/* Certification */}
      <Certification />
      {/* /Certification */}

      {/* best nagpur classes */}
      < NagpurBestClasses />
      {/* /best nagpur classes */}

      {/* Gallery */}
      <HeroGallery />
      {/* /Gallery */}

      {/* Testimonial */}
      <TestimonialSlider />
      {/* /Testimonial */}

      {/* Brochure Form */}
      <div className="msm-home-form">
        {/* <HomeBrochureDownloadForm /> */}
      </div>
      {/* /Brochure Form */}

      {/* Bootstrap Modal - Auto Shows After 15 sec */}
      <div className="modal fade h-100 msm-content-modal msm-modal-content-show" id="brochureModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-white">
              <p className='text-secondary'></p>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {showBrochureForm ? <div className='d-flex justify-content-center'><img
                src={poterImage}
                className="img-fluid image-batch mb-2"
                alt="MeTta Financial Investment & Trading Training Institute"
                loading="lazy"
              /></div> : <p>Loading...</p>}
            </div>
          </div>
        </div>
      </div>
      {/* Bootstrap Modal */}

      {/* call to action */}
      <CallToAction />
      {/* /call to action */}

      {/* email form */}
      {/* <EmailSubscriptionForm /> */}
      {/* /email form */}
    </div>
  );
};

export default Home;
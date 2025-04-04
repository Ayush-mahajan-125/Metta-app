import React, { useState, useEffect } from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// pages
import HeroSection from './HeroSection';
import HeroGallery from './HeroGallery';
import TestimonialSlider from './TestimonialSlider';
import BrochureDownloadForm from './BrochureDownloadForm';
import HomeBrochureDownloadForm from './HomeBrochureDownloadForm';
import HomeAbout from './HomeAbout';
import HomeWhyChoose from './HomeWhyChoose';
import Accordion from './Accordion';
import NagpurBestClasses from './NagpurBestClasses';
import CallToAction from './CallToAction';
import EmailSubscriptionForm from './EmailSubscriptionForm';
import Certification from './Certification';


// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
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
      {/* hero */}
      <HeroSection />
      {/* /hero */}

      {/* About */}
      <HomeAbout />
      {/* /About */}

      {/* Why choose section */}
      <HomeWhyChoose />
      {/* /Why choose section */}

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
        <HomeBrochureDownloadForm />
      </div>
      {/* /Brochure Form */}

      {/* Bootstrap Modal - Auto Shows After 15 sec */}
      <div className="modal fade h-100 msm-content-modal " id="brochureModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title ">Brochure Download</h5>
              <p className='text-secondary'></p>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {showBrochureForm ? <BrochureDownloadForm /> : <p>Loading...</p>}
            </div>
          </div>
        </div>
      </div>
      {/* Bootstrap Modal */}

      {/* FAQ */}
      <Accordion />
      {/* /FAQ */}

      {/* call to action */}
      <CallToAction />
      {/* /call to action */}

      {/* email form */}
      <EmailSubscriptionForm />
      {/* /email form */}

     
      <div className="msm-social-icons">
        <a className="msm-whatsapp-btn whatsapp-msm-btn" href="https://wa.me/919834888821" target="_blank"> <FontAwesomeIcon icon={faWhatsapp} className="msm-whatsapp-icon" /></a>
        <a className="msm-whatsapp-btn bg-danger" href="https://www.youtube.com/@mettasharemarket" target="_blank"> <FontAwesomeIcon icon={faYoutube} className="msm-whatsapp-icon" /></a>
        <a className="msm-whatsapp-btn msm-facebook-btn" href="https://m.facebook.com/sharemarketmetta/" target="_blank"> <FontAwesomeIcon icon={faFacebook} className="msm-whatsapp-icon" /></a>
        <a className="msm-whatsapp-btn msm-instagram-btn" href="http://instagram.com/mettasharemarket" target="_blank"> <FontAwesomeIcon icon={faInstagram} className="msm-whatsapp-icon" /></a>
        <a className="msm-whatsapp-btn msm-telegram-btn" href="https://t.me/joinchat/HrYYVxCqEvLAN3hc" target="_blank"> <FontAwesomeIcon icon={faTelegram} className="msm-whatsapp-icon" /></a>
      </div>
     
    </div>
  );
};

export default Home;

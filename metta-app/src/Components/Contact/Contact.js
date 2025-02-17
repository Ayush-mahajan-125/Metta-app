import React, { useState } from "react";
import './Contact.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";



const ContactForm = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
    Address: "",
    City: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { FullName, Email, Phone, Subject, Message, Address, City } = formData;

    // Phone number validation: Must be exactly 10 digits
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(Phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const whatsappNumber = "917030126683"; // Replace with your actual WhatsApp number in international format
    const whatsappMessage = `*Contact Form Submission*\n\nFull Name: ${FullName}\nEmail: ${Email}\nPhone: ${Phone}\nSubject: ${Subject}\nMessage: ${Message}\nAddress: ${Address}\nCity: ${City}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    alert("You will be redirected to WhatsApp. Press send to complete the process.");
  };

  return (
    <section className="msm-mt-5 msm-contact-page-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">

            {/* heading */}
            <h1 class="display-6 fw-bold text-white">Connect with Us</h1>
            <p class=" text-light fw-normal mb-5 ">Have questions or need assistance? Our team at Metta Share Market is ready to help. Contact us today!</p>
            {/* /heading */}

            <h5 class="mb-4 text-white">Connect with Us</h5>
            {/* social icons */}
            <ul class="social-menu mb-5">
              <li class="social-btn facebook" tooltip="Facebook">
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              </li>
              <li class="social-btn instagram" tooltip="Instagram">
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              </li>
              <li class="social-btn whatsapp" tooltip="WhatsApp">
                <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
              </li>
              <li class="social-btn telegram" tooltip="Telegram">
                <a href="#"><FontAwesomeIcon icon={faTelegram} /></a>
              </li>
            </ul>
            {/* /social icons */}

            {/* email address */}
            <h5 class="text-white">Email Address :</h5>
            <h6 class="nav-item text-light fw-normal mb-5 msm-font-size"><span><FontAwesomeIcon icon={faEnvelope} className='pe-2 ' /></span>
              swapnilkhare3@gmail.com</h6>
            {/* /email address */}

            {/* Call Us */}
            <h5 class="text-white">Call Us</h5>
            <h6 class="nav-item mb-2 text-light msm-font-size">  <span><FontAwesomeIcon icon={faPhone} className='pe-2  ' /></span>
              +91-9834888821</h6>

            <h6 class="nav-item mb-2 text-light mb-5 msm-font-size"><span><FontAwesomeIcon icon={faPhone} className='pe-2' /></span>
              +91-9970500727</h6>

            {/* /Call Us */}

            {/* Address */}
            <h5 class="text-white">Our Office Address</h5>
            <p class=" text-light fw-normal mb-5 msm-font-size"> <FontAwesomeIcon icon={faLocationDot} className='pe-2 ' />Flat No 101, Aqua habitat, shatabdi sq, Badil Kheda, Nagpur, Maharashtra 440027</p>
            {/* /Address */}

            <div className="row">
              <div className="col-12"> <a href="#" target="_blank" className="btn btn-success mb-3">Give me feedback </a></div>
              <div className="col-12"><a href="#" target="_blank" className="btn btn-danger mb-5">Google map Location </a></div>
            </div>


          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">

            {/* contact form */}

            <form onSubmit={handleSubmit} className="space-y-4">
              {Object.keys(formData).map((field) => (
                <input
                  key={field}
                  type={field === "Email" ? "Email" : "text"}
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, ' $1').trim()}
                  value={formData[field]}
                  onChange={handleChange}
                  className=" border bg-white text-dark"
                  required
                />
              ))}
              <button type="submit" className=" btn-primary w-100 border-0">
                Submit Form
              </button>
            </form>
            {/* contact form */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
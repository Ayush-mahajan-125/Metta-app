import React, { useState } from "react";
import "./RegistrationForm.css";
import mettaLogo from "../../assets/img/whatsapp-qr.jpeg";
import OnlineRegistration from '../../assets/img/Share MarketTraining Institute.png';


const RegistrationForm = () => {

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("q221015737@ybl");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  const [errors, setErrors] = useState({});

  const validateForm = (e) => {
    const email = e.target.email.value;
    const whatsapp = e.target.whatsapp.value;

    let newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    // WhatsApp validation (India, exactly 10 digits)
    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!phoneRegex.test(whatsapp)) {
      newErrors.whatsapp = "WhatsApp number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (!validateForm(e)) {
      e.preventDefault();
    }
  };

  return (
    <div className="back-cover-image">
      <div className="container">
        <div className="registration-container">
          <img
            src={OnlineRegistration}
            className="img-fluid registration-image-metta mb-3"
            alt="GPay QR Code"
            loading="lazy"
          />
          <div className="text-center mb-4">
            <h1 className="registration-text">Online Registration</h1>
          </div>
          <div className="row p-4">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
            >
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="ce4f0829-83e2-43ff-9e0e-1662f17955d1" />

              <input type="text" name="full_name" placeholder="Full Name" required />

              <input
                type="text"
                name="mother_name"
                placeholder="Mother's Name"
                required
              />

              <input type="text" name="qualification" placeholder="Qualification" />

              <input type="text" name="profession" placeholder="Profession" />

              <input type="date" name="dob" required />

              <input
                type="email"
                name="email"
                placeholder="Email ID"
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp Number (10 digits)"
                maxLength="10"
                pattern="[6-9]{1}[0-9]{9}"
                required
              />
              {errors.whatsapp && <span className="error">{errors.whatsapp}</span>}

              <textarea
                name="address"
                placeholder="Address"
                rows="3"
                required
              ></textarea>

              <label>Course Module For</label>
              <select name="course_group" required>
                <option value="">Select module</option>
                <option value="Group 1">Module 1</option>
                <option value="Group 2">Module 2</option>
              </select>

              <label>Do you practice trading or investment?</label>
              <select name="experience" required>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <label>Date of Joining</label>
              <input type="date" name="joining_date" required />

              <hr />

              <h3>Payment Details</h3>

              <input
                type="number"
                name="amount"
                placeholder="Paid Amount (₹)"
                required
              />

              {/* Redirect after submit */}
              <input
                type="hidden"
                name="redirect"
                value="https://mettasharemarket.in/thank-you"
              />

              <button type="submit" className="">Submit Registration</button>
            </form>


          </div>

          <div className="payment-box">
            <h4 className="text-primary">Pay via QR Code</h4>
            <img
              src={mettaLogo}
              className="img-fluid qr-image"
              alt="GPay QR Code"
              loading="lazy"
            />

            <hr />
            {/* <p>After payment, enter transaction ID</p> */}
            <h4 className="text-primary mt-4"> Pay via UPI ID - </h4>
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control"
                value="q221015737@ybl"
                readOnly
              />
              <button
                className="btn btn-dark"
                type="button"
                onClick={copyToClipboard}
              >
                Copy
              </button>
            </div>

            {copied && (
              <small style={{ color: "#192e19", backgroundColor: "#5be05b", borderRadius: "5px", padding: "5px" }}>
                UPI ID copied ✓
              </small>

            )}

          </div>
          <hr />
          <div className="d-flex justify-content-center mt-4 pb-4">
            <a href="https://wa.me/919834888821" target="_blank" rel="noopener noreferrer" className="btn btn-success m-auto">Share Payment Screenshot on WhatsApp</a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default RegistrationForm;

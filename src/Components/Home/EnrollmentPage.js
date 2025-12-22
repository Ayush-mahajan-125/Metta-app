import React, { Component } from 'react';
import './Home.scss';
import AboutOne from '../../assets/img/undraw_thought-process_pavs.png';

class EnrollmentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: 'login',
      formSubmitted: false,
    };
  }

  switchForm = (form) => {
    this.setState({ activeForm: form, formSubmitted: false });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(form),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.setState({ formSubmitted: true });
          form.reset();
        } else {
          alert("Something went wrong. Please try again!");
        }
      })
      .catch(() => alert("Network error!"));
  };

  render() {
    const { formSubmitted } = this.state;

    return (
      <div className="msm-form-container-block">
        <div className="auth-wrapper">
       
          <div className="auth-card">
            <p><img src={AboutOne} alt="metta share market free demo clases" loading="lazy" className='w-50 m-auto d-flex' /></p>

          <h3 className='text-center fw-normal mb-4'>Enrolment Form</h3>

            <div className="form-slider">
              {formSubmitted && (
                <div className="success-message text-success text-center mb-3">
                  ✅ Your form has been submitted successfully!
                </div>
              )}

              <form className="form" onSubmit={this.handleFormSubmit}>
                <input type="hidden" name="access_key" value="ce4f0829-83e2-43ff-9e0e-1662f17955d1" />
                <input type="text" name="full_name" placeholder="Full Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="WhatsApp number"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                  }}
                />
                <textarea name="address" placeholder="Enter Address" required />
                <input type="text" name="qualification" placeholder="Qualification" required />
                <input type="text" name="profession" placeholder="Profession" required />
                <button type="submit">Submit</button>
      
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EnrollmentPage;

import React from 'react';
const RefundPolicy = () => {

    return (
            <div className="msm-mt-5 msm-policy-section">
                <div className="container">
                    <h1 className="display-6 fw-bold text-white pt-5">7-Day Refund Policy</h1>

                    <p className='text-secondary fw-normal my-3'>At Metta Share Market, your satisfaction is our priority. We believe in delivering value and building trust with every service we provide. To ensure you feel confident in choosing us, we offer a 7-Day Refund Policy with no hassle and complete transparency.</p>

                    {/* How It Works */}
                    <div className="my-5">
                        <h5 className='text-white'>How It Works:</h5>

                        <p className='text-secondary mb-3 '><strong className='text-light fw-light'>Risk-Free Experience:</strong> If you're not satisfied with our services for any reason, you are eligible for a refund within 7 days of your purchase.</p>

                        <p className='text-secondary mb-3'><strong className='text-light fw-light'>Simple Request Process:</strong> Visit us directly at our office with your order details and reason for the refund. Our team will review your request and process your refund swiftly.</p>

                        <p className='text-secondary mb-3'><strong className='text-light fw-light'>No Hidden Conditions:</strong> We value your trust. As long as your refund request falls within 7 days of purchase, we'll ensure a smooth and quick refund process without unnecessary questions.</p>
                    </div>
                    {/* /How It Works */}

                    {/* Our Commitment */}
                    <div className="my-5">
                        <h5 className='text-white'>Our Commitment:</h5>

                        <p className='text-secondary mb-3 fw-light'> <strong className='text-light'>100% Transparency : </strong>Clear and fair refund terms with no fine print.</p>

                        <p className='text-secondary mb-3 fw-light'> <strong className='text-light'>Customer First: </strong>Your satisfaction is our priority, and we work to resolve your concerns quickly.</p>

                        <p className='text-secondary mb-3 fw-light'> <strong className='text-light'>Quick Refunds:</strong> Approved refunds are processed immediately during your visit.</p>
                    </div>
                    {/* /Our Commitment */}

                    {/* Refund Response */}
                    <div className="my-5">
                        <h5 className='text-white'>Refund Response:</h5>

                        <p className='text-secondary'>Once you visit our office for a refund:</p>

                        <p className='text-secondary mb-3 fw-light'> <strong className='text-light'>Acknowledgement </strong> Our team will confirm receipt of your refund request in person.</p>

                        <p className='text-secondary mb-3 fw-light'> <strong className='text-light'>Review Process : </strong>We will verify your order details and evaluate the reason provided.</p>

                        <p className='text-secondary mb-3 fw-light'> <strong className='text-light'>Approval & Refund : </strong>Upon approval, the refund will be processed immediately to your original payment method.</p>
                    </div>
                    {/* /Refund Response */}

                    {/* contact */}
                    <div className="my-5">
                        <p className='text-secondary'>We are here to provide you with the best experience. Your success is our mission, and we stand by our services with confidence.</p>

                        <p className='text-secondary'>Got Questions? Feel free to <a href="/contact-us" target="_blank" className='text-decoration-none'>contact us</a> at.</p>

                        <p className='text-warning'>Experience Metta Share Market – Where Your Trust Matters.</p>
                    </div>
                    {/* /contact */}
                </div>
            </div>
    );
};

export default RefundPolicy;

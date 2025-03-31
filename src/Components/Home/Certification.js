import React from 'react';
import './Home.scss';
import HeroAbout from '../../assets/img/WhatsApp Image 2025-03-31 at 17.42.54_ae756fe6.jpg';
const Certification = () => {
    return (
        <div className="msm-certification-block bg-primary-color text-white py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-6">

                        <h1 className="display-6 fw-normal mb-3">
                            Our Commitment to Quality Excellence
                        </h1>

                        <p className='mb-4 msm-text-secondary'>At Metta Share Market Training Institute, we are dedicated to maintaining the highest standards of education and training. We are proud to be ISO 9001:2015 Certified, ensuring a world-class learning experience for our students.</p>

                        <h5>Certification Details:</h5>
                        <li className='msm-text-secondary'>Certificate No: INQ/AN-21409/125871/1224</li>
                        <li className='msm-text-secondary'>Issued On: 11-12-2024</li>
                        <li className='msm-text-secondary'>Valid Until: 10-12-2027</li>
                        <li className='msm-text-secondary mb-4'>Accredited By: United Accreditation Management Licensing Services</li>

                        <p className='mb-4 msm-text-secondary'>This certification reflects our ongoing commitment to quality, professionalism, and continuous improvement in Share Market Training.</p>

                        <p>🔗 Verify Our Certification:</p>
                        <a href="https://www.uamls.org.uk/certified-clients.php" target="_blank" rel="Check Status" className='btn btn-primary mt-0 border-0'>Check Status</a>

                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="msm-image-content">
                            <img src={HeroAbout} className="img-fluid w-50" alt="MeTta share market" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Certification;

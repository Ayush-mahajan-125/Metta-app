import React from "react";
import "./Home.scss";
import HeroAbout from '../../assets/img/about.png';

const HomeAbout = () => {
    return (
        <section className="msm-about-section d-flex align-items-center">
            <div className="container">
                <div className="text-center mb-5">
                    <h6>About us</h6>
                    <h1><span className="text-white">Best Stock Market Institute in Nagpur</span> <span className="text-highlight">– Metta Share Market</span></h1>
                </div>
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="d-flex justify-content-center">
                            <img src={HeroAbout} className="img-fluid-about-image" alt="MeTta Financial Investment & Trading Training Institute " loading="lazy" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <p>
                            <li>We provide practical stock market education through <b>live market sessions</b> , real trade examples, and hands-on chart analysis.</li>

                            <li>Our structured learning approach helps both beginners and experienced traders develop strong market understanding and trading confidence.</li>

                            <li>Students receive guidance from experienced mentors with a strong focus on risk management, trading psychology, and disciplined decision-making.</li>

                            <li>We offer comprehensive training in Stock Market, <b>Technical Analysis, F&O, Smart Money Concepts (SMC), Forex, Commodities, and Cryptocurrency markets.</b></li>

                            <li>With flexible online and offline programs, we make professional stock market education accessible to learners across Nagpur and India.</li>

                            <li>Our mission is to create skilled, confident, and independent traders through transparent, practical, and market-oriented training</li>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HomeAbout;

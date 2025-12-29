import React from "react";
import "./Home.scss";
import HeroAbout from '../../assets/img/about.png';;

const HomeAbout = () => {
    return (
        <section className="msm-about-section d-flex align-items-center">
            <div className="container">
                <div className="text-center mb-5">
                    <h6>About us</h6>
                    <h1><span className="text-white">Best Stock Market Institute in India</span> <span className="text-highlight">– Metta Share Market</span></h1>
                </div>
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="d-flex justify-content-center">
                            <img src={HeroAbout} className="img-fluid-about-image" alt="MeTta Financial Investment & Trading Training Institute " loading="lazy" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <p><b className="text-white">Metta Share Market </b>is a professional Stock Market Training Institute dedicated to providing practical, structured, and real-market education for traders and investors across India. We focus on building strong market understanding through modern trading techniques, live market analysis, and disciplined risk management, helping learners gain confidence in financial markets

                            <li className="mt-2">We offer comprehensive training in stock market trading, long-term investing, technical analysis, fundamental analysis, Futures & Options (F&O), Smart Money Concepts (SMC), Forex, currency, commodity, and cryptocurrency markets.</li>

                            <li>Our learning approach is practical and market-oriented, using live charts, real trade examples, and price action strategies instead of theory-based teaching.</li>

                            <li>Metta Share Market provides guidance for both beginners and experienced traders through step-by-step learning and structured course modules.</li>

                            <li>Our expert mentors bring years of real trading and teaching experience, helping students understand market behavior, trends, volatility, and trading psychology.</li>

                            <li>We emphasize risk management, capital protection, and disciplined decision-making to support long-term trading success.</li>

                            <li>We offer flexible online and offline training programs, making professional stock market education accessible to learners across India.</li>

                            <li>Our goal is to create confident, skilled, and independent traders by delivering transparent, practical, and professional stock market training.</li>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HomeAbout;

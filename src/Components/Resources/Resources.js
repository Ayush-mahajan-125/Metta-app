import React from 'react';
import './Resources.scss';
import Sahi from '../../assets/img/sahi.webp';
import Book1 from '../../assets/img/81BE7eeKzAL._SY466_.jpg';
import Book2 from '../../assets/img/711xMzVPIuL._SY342_.jpg';
import Book3 from '../../assets/img/41lJjTYiFfL._SY445_SX342_.jpg';
import Book4 from '../../assets/img/41yanQNNzbL._SY445_SX342_.jpg';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import pdf1 from '../../assets/img/61sXtbO-ZzL._SY466_.jpg';
import pdf2 from '../../assets/img/71pvFCvMM2L._SY466_.jpg';
import pdf3 from '../../assets/img/51dpNq7AMeL._SY445_SX342_.jpg';
import pdf4 from '../../assets/img/411yLi6ql1L._SY445_SX342_.jpg';
import pdf5 from '../../assets/img/715ucF1cMZS._SY466_.jpg';
// import pdf6 from '../../assets/img/61B84NiWabL._AC_UY218_.jpg';
import pdf7 from '../../assets/img/71fUpJ2S30L._SY466_.jpg';
// import pdf8 from '../../assets/img/71aySJnxQZL._SY466_.jpg';

import pdf11 from '../../assets/img/61qvQIlGEXL._SY466_.jpg';
import pdf12 from '../../assets/img/61M9jjepwTL._SY425_.jpg';
import pdf14 from '../../assets/img/51vZwFpYT9L._SY445_SX342_.jpg';
import pdf15 from '../../assets/img/51tYFBUvQqL._SY445_SX342_.jpg';

// import NSIM from './NSIM';

const Resources = () => {
    return (
        <div className="msm-mt-5 msm-resources-conatiner">
            <div className="container text-center">
                <h1 className="display-6 fw-normal pt-5">
                    Recommended Brokers for Stock Market
                </h1>
                <img src={Sahi} className="my-3 msm-upstox" alt="Upstox" loading="lazy" />
                <h6 className='mb-5'>
                    <span className='text-dark'> Open Your Demant Account in Sahi : Options & Stock Trading</span><br />
                    <a href="https://sahi.onelink.me/lsr5/e191p03c*Address*" target="_blank" className='text-orange' rel="noreferrer"> https://sahi.onelink.me/lsr5/e191p03c*Address*</a>
                </h6>
            </div>

            {/* books */}
            <div className="container text-center">
                <h4 className="fw-normal pt-5 mb-5">
                    Books We Recommend
                </h4>
                <div className="row">

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={Book1} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>Rich Dad Poor Dad</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="https://amzn.in/d/fnS82r9" target="_blank" className='btn btn-warning mb-3'  rel="noreferrer">Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={Book2} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>Think and Grow Rich</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="https://amzn.in/d/hcovvtF" target="_blank" className='btn btn-warning mb-3' rel="noreferrer">Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={Book3} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>How I Made $2,000,000 in the Stock Market</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="https://amzn.in/d/em73e6W" target="_blank" className='btn btn-warning mb-3' rel="noreferrer" >Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={Book4} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>The Power of Your Subconscious Mind</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="https://amzn.in/d/gDOeeT8" target="_blank" className='btn btn-warning mb-3' rel="noreferrer" >Buy now</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* books */}

            {/*  */}
            <div className="container">
                <h4 className="fw-normal pt-5 mb-5 text-center">
                    For Beginners
                </h4>

                <div className="row ">

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={pdf1} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>The Intelligent Investor</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="/pdf/pdf/THE-INTELLIGENT-INVESTOR.pdf" download="THE-INTELLIGENT-INVESTOR.pdf" target="_blank" className='btn btn-warning mb-3'>Download for Free</a>
                                <br />
                                <a href="https://amzn.in/d/0736Bge" target="_blank" rel="noreferrer" className=" btn-link text-dark"> Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={pdf2} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>One Up On Wall Street</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="/pdf/pdf/one-up-on-wall-street.pdf" download="one-up-on-wall-street.pdf" target="_blank" className='btn btn-warning mb-3'>Download for Free</a>
                                <br />
                                <a href="https://amzn.in/d/5EuyOdu" target="_blank" rel="noreferrer" className=" btn-link text-dark"> Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={pdf3} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>Common Stocks and Uncommon Profits</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="/pdf/pdf/common_stocks_and_uncommon_profits_and_other_writings.pdf" download="common_stocks_and_uncommon_profits_and_other_writings.pdf" target="_blank" className='btn btn-warning mb-3'>Download for Free</a>
                                <br />
                                <a href="https://amzn.in/d/8m9DaRN" target="_blank" rel="noreferrer" className=" btn-link text-dark"> Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={pdf4} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>The Little Book That Still Beats the Market</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="/pdf/pdf/The Little Book That Beats the Market 2006.pdf" download="The Little Book That Beats the Market 2006.pdf" target="_blank" className='btn btn-warning mb-3'>Download for Free</a>
                                <br />
                                <a href="https://amzn.in/d/9W6OyKg" target="_blank" rel="noreferrer" className=" btn-link text-dark"> Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={pdf5} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>The Psychology of Money</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="/pdf/pdf/The Psychology of Money.pdf" download="The Psychology of Money.pdf" target="_blank" className='btn btn-warning mb-3'>Download for Free</a>
                                <br />
                                <a href="https://amzn.in/d/fhBAS23" target="_blank" rel="noreferrer" className=" btn-link text-dark"> Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={Book2} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>Think and Grow Rich</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="/pdf/pdf/Think and Grow Rich.pdf" download="Think and Grow Rich.pdf" target="_blank" className='btn btn-warning mb-3'>Download for Free</a>
                                <br />
                                <a href="https://amzn.in/d/eRGwrjj" target="_blank" rel="noreferrer" className=" btn-link text-dark"> Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={pdf7} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>Unshakeable</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="/pdf/pdf/Unshakeable_ Your Financial Freedom Playbook ( PDFDrive.com ).pdf" download="Unshakeable_ Your Financial Freedom Playbook ( PDFDrive.com ).pdf" target="_blank" className='btn btn-warning mb-3'>Download for Free</a>
                                <br />
                                <a href="https://amzn.in/d/5CP6esd" target="_blank" rel="noreferrer" className=" btn-link text-dark"> Buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}

            <div className="container">
                <h4 className="fw-normal pt-5 mb-5 text-center">
                    Fundamental Analysis & Value Investing
                </h4>

                <div className="row ">

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={pdf11} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>Security Analysis</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="/pdf/pdf/security-analysis-benjamin-graham-6th-edition-pdf-february-24-2010-12-08-am-3-0-meg.pdf" download="security-analysis-benjamin-graham-6th-edition-pdf-february-24-2010-12-08-am-3-0-meg.pdf" target="_blank" className='btn btn-warning mb-3'>Download for Free</a>
                                <br />
                                <a href="https://amzn.in/d/1SCvLzB" target="_blank" rel="noreferrer" className=" btn-link text-dark"> Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={pdf12} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>The Little Book of Value Investing</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="/pdf/pdf/1597833614500Little-Book-Of-Value-Investing-.pdf" download="1597833614500Little-Book-Of-Value-Investing-.pdf" target="_blank" className='btn btn-warning mb-3'>Download for Free</a>
                                <br />
                                <a href="https://amzn.in/d/i0rANYa" target="_blank" rel="noreferrer" className=" btn-link text-dark"> Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={pdf14} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>The Dhandho Investor</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="/pdf/pdf/[Mohnish_Pabrai]_The_Dhandho_Investor_The_Low_-_R.pdf" download="THE-INTELLIGENT-INVESTOR.pdf" target="_blank" className='btn btn-warning mb-3'>Download for Free</a>
                                <br />
                                <a href="https://amzn.in/d/90gaDoz" target="_blank" rel="noreferrer" className=" btn-link text-dark"> Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={pdf15} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>Quality Investing</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="/pdf/pdf/Quality Investing PDF.pdf" download="Quality Investing PDF.pdf" target="_blank" className='btn btn-warning mb-3'>Download for Free</a>
                                <br />
                                <a href="https://amzn.in/d/7BNdRU0" target="_blank" rel="noreferrer" className=" btn-link text-dark"> Buy now</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container d-none">
                <h4 className="fw-normal pt-5 mb-5 text-center">
                    Technical Analysis & Trading Strategies
                </h4>

                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={pdf11} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>Security Analysis</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="https://amzn.in/d/gDOeeT8" target="_blank" className='btn btn-warning mb-3' rel="noreferrer" >Download for Free</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <NSIM/> */}
        </div>
    );
};
export default Resources;

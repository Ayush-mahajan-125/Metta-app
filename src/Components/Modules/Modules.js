import React, { useState } from 'react';
import './Modules.scss';
const Configurations = () => {
    return (
        <div className="msm-mt-5 container pb-5 msm-module-page-block">

            {/* heading */}
            <div className="text-center py-5">
                <h1 className="display-6 fw-normal mb-3 text-orange">
                     Course Modules
                </h1>
                <p className="lead text-dark h6 fw-normal">
                   Available Online and Offline
                </p>
            </div>
            {/* /heading */}

            <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Module 1 - Technical Analysis
            </button>

            <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                Module 2 - Fundamental Analysis
            </button>

            <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Module 3 -   Future and Option
            </button>

            <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                Module 4 - Currency market and Commodity market
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel"> Basic To Advanced Technical Analysis</h1>
                            <button type="button" class="ms-auto btn" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                        </div>
                        <div class="modal-body text-dark">

                            <h4 className='mb-4 mt-3 text-green'>Core Concepts</h4>
                            <p>1. Introduction to Dow theory</p>
                            <p>2. Introduction to Elliott wave theory</p>
                            <p>3. Candlestick Formation</p>
                            <p>4. Candlestick Pattern</p>
                            <p>5. Basic Price Action </p>
                            <p>6. Advanced Price Action</p>
                            <p>7. How to Draw Trend line</p>
                            <p>8. How to use Volume  </p>
                            <p>9. Types of Indicator</p>
                            <p>10. Strategy</p>

                            <h4 className='my-4 text-green'>Advanced Techniques</h4>
                            <p>1. Moving Averages</p>
                            <p>2. Relative Strength Index (RSI)</p>
                            <p>3. MACD (Moving Average Convergence Divergence) </p>
                            <p>4. Bollinger Bands </p>
                            <p>5. Fibonacci Retracement</p>

                            <h5 className='my-4 text-green'>Practical Applications</h5>
                            <p>1. Developing Trading Strategies </p>
                            <p>2. Identifying Entry and Exit Points</p>
                            <p>3. Managing Risk and Profits</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel">Fundamental Analysis & Long Term Investment</h1>
                            <button type="button" class="ms-auto btn" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                        </div>
                        <div class="modal-body text-dark">
                            <p>1. Company Analysis</p>
                            <p>2. Industry Analysis</p>
                            <p>3. Economic Analysis</p>
                            <p>4. Valuation Techniques </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel">Derivative And Future & Option’s</h1>
                            <button type="button" class="ms-auto btn" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                        </div>
                        <div class="modal-body text-dark">
                            <p>1. When to Buy Call Option</p>
                            <p>2. When to Buy Put Option </p>
                            <p>3. Option Greeks (Delta, Gamma, Vega, Theta, Rho)</p>
                            <p>4. How to Select Strike Price</p>
                            <p>5. Types of Strike Prices</p>
                            <p>6. What is an Option Chain</p>
                            <p>7. What is India VIX </p>
                            <p>8. What is a Future Contract</p>
                            <p>9. Strategy</p>
                            <p>10. How to Use Hedging Strategy</p>
                            <p>11. Build Strategy</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel">Currency market and Commodity market</h1>
                            <button type="button" class="ms-auto btn" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                        </div>
                        <div class="modal-body text-dark">
                            <p>1. Currency Market</p>
                            <p>2. Commodity Market</p>
                            <p>3. Crypto Currency</p>
                            <p>4. Forex Market</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Configurations;

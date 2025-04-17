import React from 'react';
import './Modules.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faNoteSticky, faMoneyCheck, faSatelliteDish, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Modules = () => {
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


            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <h4 className='text-center mb-4 text-orange'>Group 1</h4>

                    <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        Module 1 - Technical Analysis
                    </button>

                    <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal21">
                        Module 2 -   Future and Option
                    </button>

                    <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal31">
                        Module 3 - Fundamental Analysis
                    </button>

                    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel"> Basic To Advanced Technical Analysis</h1>
                                    <button type="button" class="ms-auto btn" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                                </div>
                                <div class="modal-body text-dark">
                                    <h4 class='mb-4 mt-3 text-green'>Core Concepts</h4>

                                    <ol>
                                        <li><strong>Introduction to Technical Analysis</strong>
                                            <ul>
                                                <li>Overview of technical analysis as a trading approach.</li>
                                                <li>Difference between technical and fundamental analysis.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Introduction to Dow Theory</strong>
                                            <ul>
                                                <li>Basic principles of Dow Theory.</li>
                                                <li>Understanding market trends and phases (accumulation, distribution).</li>
                                            </ul>
                                        </li>
                                        <li><strong>Candlestick Patterns and Formations</strong>
                                            <ul>
                                                <li>Common candlestick formations.</li>
                                                <li>Reading single vs. multiple candlestick patterns to forecast trends.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Trend Analysis</strong>
                                            <ul>
                                                <li>Identifying market trends (uptrend, downtrend, sideways).</li>
                                                <li>Using moving averages, trendlines, and higher-high/lower-low patterns.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Support and Resistance Levels</strong>
                                            <ul>
                                                <li>Key concepts of support and resistance.</li>
                                                <li>Methods to identify major and minor levels and their importance in trading decisions.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Volume Analysis</strong>
                                            <ul>
                                                <li>Understanding volume in relation to price movement.</li>
                                                <li>How volume confirms trends and signals possible reversals.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Chart Patterns</strong>
                                            <ul>
                                                <li>Recognizing continuation and reversal chart patterns.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Time Frame Selection</strong>
                                            <ul>
                                                <li>How to choose the appropriate time frame based on trading style (day trading, swing trading, long-term trading).</li>
                                            </ul>
                                        </li>
                                        <li><strong>Price Action Trading</strong>
                                            <ul>
                                                <li>The fundamentals of price action trading.</li>
                                                <li>Advanced price action strategies and understanding market psychology.</li>
                                            </ul>
                                        </li>
                                        <li><strong>How to Draw Trendlines</strong>
                                            <ul>
                                                <li>Drawing and using trendlines for determining trend direction and potential entry/exit points.</li>
                                            </ul>
                                        </li>
                                        <li><strong>How to Find Entry, Exit, and Stop-Loss Points</strong>
                                            <ul>
                                                <li>Rules for determining optimal entry, exit, and stop-loss points to maximize profits and minimize losses.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Gaps in Trading (Gap Up and Gap Down)</strong>
                                            <ul>
                                                <li>Understanding gap theory and how to trade around price gaps.</li>
                                                <li>The significance of gap fills and breakaway gaps.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Types of Technical Indicators</strong>
                                            <ul>
                                                <li>Classification of indicators: trend, momentum, volatility, and volume-based.</li>
                                                <li>Types of indicators: lagging indicators and leading indicators.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Structure Mapping</strong>
                                            <ul>
                                                <li>Identifying key market patterns such as trends, swing highs and lows, and support/resistance levels to visualize the overall market structure.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Effect of News-Based Market</strong>
                                            <ul>
                                                <li>Market prices often react sharply to major news events such as economic data releases, political developments, or corporate announcements.</li>
                                                <li>Traders use news to anticipate volatility, leading to rapid price fluctuations and trading opportunities.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Scalping Strategy</strong>
                                            <ul>
                                                <li>Techniques for quick, small trades throughout the day.</li>
                                                <li>Managing risks and using fast time frames.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Intraday Trading Strategies</strong>
                                            <ul>
                                                <li>Effective strategies for intraday traders using chart patterns, volume, and technical indicators.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Swing Trading Strategy</strong>
                                            <ul>
                                                <li>Identifying medium-term trends and how to capture price swings using technical analysis.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Money Management and Risk Control</strong>
                                            <ul>
                                                <li>Importance of risk management in trading.</li>
                                                <li>Setting risk-reward ratios, position sizing, and stop-losses.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Psychology in Trading</strong>
                                            <ul>
                                                <li>Managing emotions like fear and greed in trading.</li>
                                                <li>Developing discipline and patience for long-term success.</li>
                                            </ul>
                                        </li>
                                    </ol>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /module first */}

                    {/* module second */}
                    <div class="modal fade" id="exampleModal21" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel">Derivative And Future & Option’s</h1>
                                    <button type="button" class="ms-auto btn" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                                </div>
                                <div class="modal-body text-dark">
                                    <h4 className='mb-3 mt-3 text-green'>Futures Contract Trading</h4>
                                    <ol>
                                        <li><strong>Introduction to Futures Contracts</strong>
                                            <ul>
                                                <li>Covers the basics of futures, the mechanics of how futures contracts work, and why they're used in trading and hedging. Ideal for beginners.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Trading in Futures vs Trading in Stocks</strong>
                                            <ul>
                                                <li>A comparison of key differences, such as leverage, risk, and capital requirements. Good if you're deciding whether futures or stocks are the right asset class for you.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Contract Cycle and Expiry Date in Futures Trading</strong>
                                            <ul>
                                                <li>This explains how futures contracts follow a life cycle and the importance of understanding expiration dates.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Rollover of Futures Contracts</strong>
                                            <ul>
                                                <li>A practical topic that explains how traders avoid physical delivery by rolling over positions to the next contract month.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Margin Requirements: SPAN and Exposure Margin</strong>
                                            <ul>
                                                <li>Essential for understanding the risk management tools used by exchanges, helping you grasp how much capital is required to maintain futures positions.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Mark to Market Calculations</strong>
                                            <ul>
                                                <li>Vital for learning how daily gains and losses are calculated and credited/debited to your account.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Settlement in the Futures Market</strong>
                                            <ul>
                                                <li>Covers how futures contracts are settled, including cash settlement vs. physical delivery.</li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <h4 className='mb-3 mt-3 text-green'>Basic Option Contracts</h4>
                                    <ol>
                                        <li><strong>Introduction to Option Contracts</strong>
                                            <ul>
                                                <li>Understanding call and put options.</li>
                                                <li>How option contracts work in the financial markets.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Option Premium Calculation</strong>
                                            <ul>
                                                <li>Factors affecting the premium, including volatility, time, and intrinsic value.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Futures Contract Trading</strong>
                                            <ul>
                                                <li>Differences between futures and stocks.</li>
                                                <li>Contract cycle, expiry, and rollovers.</li>
                                                <li>Mark to market and margin calculations.</li>
                                            </ul>
                                        </li>
                                    </ol>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /module second */}

                    {/* module thrid  */}
                    <div class="modal fade" id="exampleModal31" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel">Fundamental Analysis & Long Term Investment</h1>
                                    <button type="button" class="ms-auto btn" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                                </div>
                                <div class="modal-body text-dark">
                                    <h4 className='mb-3 mt-3 text-green'>Fundamental Analysis</h4>
                                    <ol>
                                        <li><strong>Key Financial Ratios in Fundamental Analysis</strong>
                                            <ul>
                                                <li>Explore essential financial ratios like Price-to-Earnings (P/E), Price-to-Book (P/B), Debt-to-Equity, Return on Equity (ROE), and how they are used in evaluating a company's financial health and stock value.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Discounted Cash Flow (DCF) Model in Stock Valuation</strong>
                                            <ul>
                                                <li>Delve into the DCF model, its components (free cash flow, discount rate, terminal value), and how it is used to estimate the intrinsic value of a stock.</li>
                                            </ul>
                                        </li>
                                        <li><strong>The Role of Earnings Reports in Stock Analysis</strong>
                                            <ul>
                                                <li>Understand how quarterly and annual earnings reports affect stock prices and the role they play in fundamental analysis. Focus on key metrics like EPS, revenue growth, and profit margins.</li>
                                            </ul>
                                        </li>
                                        <li><strong>How Macroeconomic Factors Impact Stock Valuation</strong>
                                            <ul>
                                                <li>Analyze how inflation, interest rates, GDP growth, and unemployment levels influence stock prices and valuations from a fundamental perspective.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Growth vs. Value Investing: A Fundamental Analysis Perspective</strong>
                                            <ul>
                                                <li>Compare growth stocks (companies expected to grow at an above-average rate) and value stocks (companies trading below their intrinsic value), using fundamental analysis techniques.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Assessing Management Effectiveness in Fundamental Analysis</strong>
                                            <ul>
                                                <li>Examine how investors can evaluate the performance and decision-making of a company’s management team, using factors like Return on Assets (ROA), ROE, and company governance.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Impact of Industry and Competitive Position on Stock Valuation</strong>
                                            <ul>
                                                <li>Explore how the competitive landscape, market share, and industry conditions (e.g., technology, healthcare) influence the fundamental valuation of a company’s stock.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Balance Sheet Analysis for Stock Valuation</strong>
                                            <ul>
                                                <li>Study how the assets, liabilities, and equity on a company's balance sheet provide insights into its financial stability and ability to generate long-term shareholder value.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Understanding the Profit and Loss (P&amp;L) Statement</strong>
                                            <ul>
                                                <li>Analyze the components of the P&amp;L statement, including revenue, expenses, net profit, and how it provides insights into a company's profitability and operational efficiency.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Impact of Dividends and Dividend Growth on Stock Valuation</strong>
                                            <ul>
                                                <li>Discuss the significance of dividends in fundamental analysis, and how models like the Dividend Discount Model (DDM) help in valuing dividend-paying stocks.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Analyzing a Company’s Moat and Competitive Advantage</strong>
                                            <ul>
                                                <li>Look into the concept of an economic moat (a company’s long-term competitive advantage) and how this qualitative factor impacts long-term stock value in fundamental analysis.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Top-Down vs. Bottom-Up Approach in Fundamental Analysis</strong>
                                            <ul>
                                                <li>Discuss the differences between the top-down approach (starting with macroeconomic factors and working down to individual stocks) and the bottom-up approach (focusing on individual stocks first) in fundamental analysis.</li>
                                            </ul>
                                        </li>
                                        <li><strong>The Role of Free Cash Flow in Stock Valuation</strong>
                                            <ul>
                                                <li>Explore how free cash flow (FCF) is used as an important metric in evaluating a company’s ability to generate profits and reinvest for future growth.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Analyzing Stock Valuation through Comparable Company Analysis (CCA)</strong>
                                            <ul>
                                                <li>Investigate how CCA is used to compare the valuation of a company with its industry peers and determine if the stock is fairly priced.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Fundamental Analysis vs. Technical Analysis: A Comparative Study</strong>
                                            <ul>
                                                <li>Contrast the approaches of fundamental and technical analysis, focusing on their respective strengths and weaknesses in stock valuation.</li>
                                            </ul>
                                        </li>
                                        <li><strong>The Influence of Corporate Governance on Stock Valuation</strong>
                                            <ul>
                                                <li>Examine how corporate governance practices, such as transparency, accountability, and board structure, affect investor confidence and stock performance from a fundamental analysis perspective.</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* module thrid  */}
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">

                    <h4 className='text-center mb-4 text-orange'>Group 2</h4>

                    <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Module 1 - Technical Analysis
                    </button>

                    <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                        Module 2 -   Future and Option
                    </button>

                    <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                        Module 3 - Fundamental Analysis
                    </button>

                    <button type="button" class="btn-toggle-collapse mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                        Module 4 - Forex, Commodity, and Cryptocurrency Markets
                    </button>

                    {/* module first */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel"> Basic To Advanced Technical Analysis</h1>
                                    <button type="button" class="ms-auto btn" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                                </div>
                                <div class="modal-body text-dark">
                                    <h4 className='mb-4 mt-3 text-green'>Core Concepts</h4>
                                    <ol>
                                        <li>
                                            <strong>Introduction to Technical Analysis</strong>
                                            <ul>
                                                <li>Overview of technical analysis as a trading approach.</li>
                                                <li>Difference between technical and fundamental analysis.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Introduction to Dow Theory</strong>
                                            <ul>
                                                <li>Basic principles of Dow Theory.</li>
                                                <li>Understanding market trends and phases (accumulation, distribution).</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Introduction to Elliott Wave Theory</strong>
                                            <ul>
                                                <li>Concepts of impulse and corrective waves.</li>
                                                <li>Applying Elliott waves to predict market movements.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Candlestick Patterns and Formations</strong>
                                            <ul>
                                                <li>Common candlestick formations.</li>
                                                <li>Reading single vs. multiple candlestick patterns to forecast trends.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Trend Analysis</strong>
                                            <ul>
                                                <li>Identifying market trends (uptrend, downtrend, sideways).</li>
                                                <li>Using moving averages, trendlines, and higher-high/lower-low patterns.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Support and Resistance Levels</strong>
                                            <ul>
                                                <li>Key concepts of support and resistance.</li>
                                                <li>Methods to identify major and minor levels and their importance in trading decisions.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Volume Analysis</strong>
                                            <ul>
                                                <li>Understanding volume in relation to price movement.</li>
                                                <li>How volume confirms trends and signals possible reversals.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Chart Patterns</strong>
                                            <ul>
                                                <li>Recognizing continuation and reversal chart patterns.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Time Frame Selection</strong>
                                            <ul>
                                                <li>How to choose the appropriate time frame based on trading style (day trading, swing trading, long-term trading).</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Price Action Trading</strong>
                                            <ul>
                                                <li>The fundamentals of price action trading.</li>
                                                <li>Advanced price action strategies and understanding market psychology.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>How to Draw Trendlines</strong>
                                            <ul>
                                                <li>Drawing and using trendlines for determining trend direction and potential entry/exit points.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>How to Find Entry, Exit, and Stop-Loss Points</strong>
                                            <ul>
                                                <li>Rules for determining optimal entry, exit, and stop-loss points to maximize profits and minimize losses.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Gaps in Trading (Gap Up and Gap Down)</strong>
                                            <ul>
                                                <li>Understanding gap theory and how to trade around price gaps.</li>
                                                <li>The significance of gap fills and breakaway gaps.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Types of Technical Indicators</strong>
                                            <ul>
                                                <li>Classification of indicators (trend, momentum, volatility, volume-based).</li>
                                                <li>Types of indicators: lagging indicators and leading indicators.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Structure Mapping</strong>
                                            <ul>
                                                <li>Identifying key market patterns such as trends, swing highs and lows, and support/resistance levels to visualize the overall market structure.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Effect of News-Based Market</strong>
                                            <ul>
                                                <li>Market prices often react sharply to major news events, such as economic data releases, political developments, or corporate announcements.</li>
                                                <li>Traders use news to anticipate volatility, which can lead to rapid price fluctuations and trading opportunities.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Scalping Strategy</strong>
                                            <ul>
                                                <li>Techniques for quick, small trades throughout the day.</li>
                                                <li>Managing risks and using fast time frames.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Intraday Trading Strategies</strong>
                                            <ul>
                                                <li>Effective strategies for intraday traders using chart patterns, volume, and technical indicators.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Swing Trading Strategy</strong>
                                            <ul>
                                                <li>Identifying medium-term trends and how to capture price swings using technical analysis.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Money Management and Risk Control</strong>
                                            <ul>
                                                <li>Importance of risk management in trading.</li>
                                                <li>Setting risk-reward ratios, position sizing, and stop-losses.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Psychology in Trading</strong>
                                            <ul>
                                                <li>Managing emotions like fear and greed in trading.</li>
                                                <li>Developing discipline and patience for long-term success.</li>
                                            </ul>
                                        </li>
                                    </ol>
                                    <h4 className='my-4 text-green'>Advanced Techniques Analysis</h4>
                                    <strong className='fw-normal' >1. Advanced Technical Concepts</strong>
                                    <ol className='mt-2'>
                                        <li>Advanced Price Action</li>
                                        <li>Psychology of Price Action</li>
                                        <li>Advanced Chart Patterns</li>
                                        <li>Advanced Structure Mapping</li>
                                        <li>Algorithm of Market Sentiment</li>
                                        <li>Fibonacci Retracement</li>
                                        <li>Harmonic Pattern</li>
                                        <li>Moving Averages</li>
                                        <li>Relative Strength Index (RSI)</li>
                                        <li>MACD (Moving Average Convergence Divergence)</li>
                                        <li>Bollinger Bands</li>
                                        <li>Scalping Trading Strategy</li>
                                        <li>Intraday Strategy</li>
                                        <li>Swing Trade Strategy</li>
                                        <li>Long Term Strategy</li>
                                    </ol>
                                    <strong className='fw-normal'>2. Practical Applications</strong>
                                    <ol className='mt-2'>
                                        <li>Using Technical Screener Website to Find Shares</li>
                                        <li>Paper Trading</li>
                                        <li>Practical Demo (Virtual Trading)</li>
                                        <li>Live Trading</li>
                                        <li>Technical Trading Strategy Practice</li>
                                        <li>Intraday Trading</li>
                                        <li>Swing Trading</li>
                                        <li>Short-Term Trading, Long-Term Trading</li>
                                    </ol>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /module first */}

                    {/* module second */}
                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel">Derivative And Future & Option’s</h1>
                                    <button type="button" class="ms-auto btn" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                                </div>
                                <div class="modal-body text-dark">
                                    <h4 className='mb-3 mt-3 text-green'>Futures Contract Trading</h4>
                                    <ol>
                                        <li><strong>Introduction to Futures Contracts</strong>
                                            <ul>
                                                <li>Covers the basics of futures, mechanics of contracts, and their use in trading and hedging.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Trading in Futures vs Trading in Stocks</strong>
                                            <ul>
                                                <li>Comparison of leverage, risk, and capital requirements between futures and stocks.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Contract Cycle and Expiry Date in Futures Trading</strong>
                                            <ul>
                                                <li>Understanding the life cycle of futures contracts and expiration dates.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Rollover of Futures Contracts</strong>
                                            <ul>
                                                <li>How traders roll over positions to the next contract month to avoid physical delivery.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Margin Requirements: SPAN and Exposure Margin</strong>
                                            <ul>
                                                <li>Understanding risk management and capital requirements for futures trading.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Mark to Market Calculations</strong>
                                            <ul>
                                                <li>Daily profit/loss calculations and their effect on trading accounts.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Settlement in the Futures Market</strong>
                                            <ul>
                                                <li>Cash settlement vs. physical delivery in futures trading.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Order Placement in Futures</strong>
                                            <ul>
                                                <li>Types of orders such as market, limit, and stop orders.</li>
                                            </ul>
                                        </li>
                                    </ol>
                                    <ol className='list-style-disc'>
                                        <li>
                                            <strong>If you're looking for a focused topic:</strong>
                                            <ul>
                                                <li className='mb-2'>
                                                    "Rollover of Futures Contracts": A practical and often misunderstood aspect of futures trading that can help improve your strategy.
                                                </li>

                                                <li>
                                                    "Mark to Market Calculations": This topic helps in understanding daily profit/loss management and is key for capital management.
                                                </li>

                                            </ul>
                                        </li>
                                    </ol>
                                    <h4 className='mb-3 mt-3 text-green'>Option Contracts</h4>
                                    <ol>
                                        <li><strong>Introduction to Option Contracts</strong>
                                            <ul>
                                                <li>Understanding call and put options and their role in financial markets.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Option Greeks</strong>
                                            <ul>
                                                <li>Exploring Delta, Gamma, Vega, Theta, and Rho for risk management.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Option Trading Strategies</strong>
                                            <ul>
                                                <li>Long Straddle and Long Strangle: Strategies for high volatility.</li>
                                                <li>Short Straddle and Short Strangle: Riskier strategies for low volatility.</li>
                                                <li>Bull Call Spread, Bear Put Spread: Directional strategies with limited risk.</li>
                                                <li>Iron Butterfly, Condor: Advanced strategies with defined risk.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Option Premium Calculation</strong>
                                            <ul>
                                                <li>Factors affecting premium such as volatility, time, and intrinsic value.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Reading Option Chain Data</strong>
                                            <ul>
                                                <li>Analyzing open interest, volume, and strike prices for better decision-making.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Put-Call Ratio and Market Indicators</strong>
                                            <ul>
                                                <li>Understanding Put-Call Ratio, India VIX, and US VIX for market sentiment analysis.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Order Placement in Futures & Options</strong>
                                            <ul>
                                                <li>How to place orders effectively and set stop losses in options trading.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Building Strategies</strong>
                                            <ul>
                                                <li>Personalized option strategies based on market conditions:</li>
                                                <ul className='p-0 list-style-circle'>
                                                    <li>Long Straddle</li>
                                                    <li>Long Strangle</li>
                                                    <li>Short Straddle</li>
                                                    <li>Short Strangle</li>
                                                    <li>Call Protection Strategy</li>
                                                    <li>Put Protection Strategy</li>
                                                    <li>Covered Call</li>
                                                    <li>Covered Put</li>
                                                    <li>Bull Call Spread</li>
                                                    <li>Bull Put Spread</li>
                                                    <li>Bear Call Spread</li>
                                                    <li>Bear Put Spread</li>
                                                    <li>Butterfly Spread</li>
                                                    <li>Iron Butterfly</li>
                                                    <li>Condor</li>
                                                </ul>
                                            </ul>
                                        </li>
                                    </ol>

                                    <h6 className='small'>This structure gives you a good mix of theory, practical strategy, and technical analysis. You can start with Introduction to Option Contracts and gradually move to advanced concepts like Greeks and strategies.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /module second */}

                    {/* module thrid  */}
                    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel">Fundamental Analysis & Long Term Investment</h1>
                                    <button type="button" class="ms-auto btn" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                                </div>
                                <div class="modal-body text-dark">
                                    <h4 className='mb-3 mt-3 text-green'>Fundamental Analysis</h4>
                                    <ol>
                                        <li><strong>Key Financial Ratios in Fundamental Analysis</strong>
                                            <ul>
                                                <li>Explore P/E, P/B, Debt-to-Equity, ROE, and their role in stock valuation.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Discounted Cash Flow (DCF) Model in Stock Valuation</strong>
                                            <ul>
                                                <li>Understanding free cash flow, discount rates, and intrinsic value estimation.</li>
                                            </ul>
                                        </li>
                                        <li><strong>The Role of Earnings Reports in Stock Analysis</strong>
                                            <ul>
                                                <li>How EPS, revenue growth, and profit margins impact stock prices.</li>
                                            </ul>
                                        </li>
                                        <li><strong>How Macroeconomic Factors Impact Stock Valuation</strong>
                                            <ul>
                                                <li>Effects of inflation, interest rates, GDP, and unemployment on stocks.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Growth vs. Value Investing</strong>
                                            <ul>
                                                <li>Comparison of growth stocks vs. value stocks using fundamental analysis.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Assessing Management Effectiveness</strong>
                                            <ul>
                                                <li>Analyzing management through ROA, ROE, and corporate governance.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Industry and Competitive Position in Stock Valuation</strong>
                                            <ul>
                                                <li>Evaluating industry conditions and competitive landscape.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Balance Sheet Analysis</strong>
                                            <ul>
                                                <li>Understanding assets, liabilities, and shareholder equity.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Understanding the Profit and Loss (P&L) Statement</strong>
                                            <ul>
                                                <li>Analyzing revenue, expenses, and net profit for business performance.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Impact of Dividends on Stock Valuation</strong>
                                            <ul>
                                                <li>Using Dividend Discount Models (DDM) to evaluate dividend stocks.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Company’s Moat and Competitive Advantage</strong>
                                            <ul>
                                                <li>Understanding how strong market positions lead to long-term value.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Top-Down vs. Bottom-Up Approach</strong>
                                            <ul>
                                                <li>Comparing two investment approaches in fundamental analysis.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Role of Free Cash Flow (FCF)</strong>
                                            <ul>
                                                <li>Using FCF as a key metric for evaluating company profitability.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Stock Valuation through Comparable Company Analysis (CCA)</strong>
                                            <ul>
                                                <li>Comparing company valuations with industry peers.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Fundamental vs. Technical Analysis</strong>
                                            <ul>
                                                <li>Comparing strengths and weaknesses of both approaches.</li>
                                            </ul>
                                        </li>
                                        <li><strong>Influence of Corporate Governance on Stock Valuation</strong>
                                            <ul>
                                                <li>Examining transparency, accountability, and investor confidence.</li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <h4 className='mb-3 mt-3 text-green'>Other Financial Topics</h4>
                                    <ul>
                                        <li>IPO, FPO, Rights Issue, Offer for Sale & Buyback.</li>
                                        <li>Merger, Acquisition, and Takeover.</li>
                                        <li>How to Read GDP, Fiscal Policy, and Monetary Policy.</li>
                                        <li>Where to Invest: Bonds, Gold, Fixed Deposits (FD).</li>
                                        <li>Mutual Funds and Financial Literacy.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* module thrid  */}

                    {/* module fourth  */}
                    <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel">Forex, Commodity, and Cryptocurrency Markets</h1>
                                    <button type="button" class="ms-auto btn" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                                </div>
                                <div class="modal-body text-dark">
                                    <h4 className='mb-3 mt-3 text-green'>Forex Market</h4>
                                    <ol>
                                        <li>Introduction to Forex Trading</li>
                                        <li>Currency Pairs and How They Work</li>
                                        <li>Major vs. Minor vs. Exotic Currency Pairs</li>
                                        <li>Forex Market Trading Hours and Liquidity</li>
                                        <li>Role of Central Banks in the Forex Market</li>
                                        <li>Leverage and Margin in Forex Trading</li>
                                        <li>Forex Trading Strategies (Scalping, Swing, Day Trading)</li>
                                        <li>Understanding Forex Spreads and Pips</li>
                                        <li>Impact of Global Economic News on Forex Markets</li>
                                        <li>Forex Risk Management and Position Sizing</li>
                                        <li>Forex Technical Indicators and Tools (RSI, MACD, Fibonacci)</li>
                                        <li>Carry Trade Strategy in Forex</li>
                                        <li>Fundamental Analysis for Forex (Interest Rates, Inflation, GDP)</li>
                                        <li>How to Read a Forex Chart</li>
                                        <li>Correlation Between Currency Pairs</li>
                                    </ol>

                                    <h4 className='mb-3 mt-3 text-green'>Currency Market</h4>
                                    <ol>
                                        <li>Understanding the Global Currency Market</li>
                                        <li>Factors Influencing Exchange Rates</li>
                                        <li>Role of Interest Rates in Currency Valuation</li>
                                        <li>Foreign Exchange Reserves and Their Impact</li>
                                        <li>Impact of Trade Deficits on Currency Prices</li>
                                        <li>Currency Pegs and Exchange Rate Mechanisms</li>
                                        <li>Currency Wars: Competitive Devaluation</li>
                                        <li>Role of the International Monetary Fund (IMF) in the Currency Market</li>
                                        <li>Safe Haven Currencies: USD, JPY, CHF</li>
                                        <li>Currency Futures and Options Trading</li>
                                        <li>Impact of Political Events on Currency Market</li>
                                        <li>Emerging Market Currencies and Volatility</li>
                                        <li>Currency Intervention by Governments and Central Banks</li>
                                        <li>Effect of Inflation and Deflation on Currencies</li>
                                        <li>Hedging Against Currency Risk</li>
                                    </ol>

                                    <h4 className='mb-3 mt-3 text-green'>Commodity Market</h4>
                                    <ol>
                                        <li>Introduction to the Commodity Market</li>
                                        <li>Types of Commodities: Metals, Energy, Agriculture</li>
                                        <li>How Commodity Futures and Options Work</li>
                                        <li>Key Factors Affecting Commodity Prices (Supply, Demand, Geopolitics)</li>
                                        <li>Role of OPEC in the Oil Market</li>
                                        <li>Precious Metals: Gold, Silver, and Their Role in Portfolio Diversification</li>
                                        <li>Commodity Trading Strategies (Momentum, Mean Reversion, Breakout)</li>
                                        <li>Role of Weather in Agricultural Commodity Prices</li>
                                        <li>Impact of Global Economic Growth on Commodity Demand</li>
                                        <li>Trading Commodities vs. Stocks: Differences and Similarities</li>
                                        <li>Energy Commodities: Oil, Natural Gas, Coal</li>
                                        <li>Commodity ETFs and How to Invest in Them</li>
                                        <li>Speculation and Hedging in the Commodity Market</li>
                                        <li>Impact of Trade Wars on Commodity Prices</li>
                                        <li>How Geopolitical Events Affect Commodity Markets</li>
                                    </ol>

                                    <h4 className='mb-3 mt-3 text-green'>Cryptocurrency</h4>
                                    <ol>
                                        <li>Introduction to Cryptocurrencies: What They Are and How They Work</li>
                                        <li>Bitcoin vs. Altcoins: Key Differences and Similarities</li>
                                        <li>Blockchain Technology and Its Applications Beyond Cryptocurrencies</li>
                                        <li>How to Trade Cryptocurrencies on Exchanges</li>
                                        <li>Cryptocurrency Wallets: Hot vs. Cold Storage</li>
                                        <li>Understanding Crypto Market Volatility</li>
                                        <li>How to Analyze a Cryptocurrency Project (Whitepapers, Team, Use Case)</li>
                                        <li>Bitcoin Halving and Its Impact on Price</li>
                                        <li>Decentralized Finance (DeFi) and Its Growth</li>
                                        <li>Risks and Benefits of Cryptocurrency Investment</li>
                                        <li>Regulation of Cryptocurrencies Across the Globe</li>
                                        <li>Cryptocurrency Mining: Proof of Work vs. Proof of Stake</li>
                                        <li>Security Risks in Crypto: Hacking, Scams, and Fraud</li>
                                        <li>How to Use Technical Analysis in Cryptocurrency Trading</li>
                                        <li>Stablecoins and Their Role in the Crypto Ecosystem</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="container ">
                <h1 className="fs-1 fw-normal text-dark text-center my-5">Benefits</h1>
                <div className="row msm-top-spacing justify-content-center">
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faGaugeHigh} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Life-Time Support</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faSatelliteDish} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Live Session</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faMoneyCheck} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>7 Day's Refundable policy</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faNoteSticky} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Provide Quality Notes </h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faWhatsapp} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>What's App group</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faRightFromBracket} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Batch Rejoin Facility Within One Year</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modules;




// <?php
// /**
//  * The template for displaying header layout 2.
//  *
//  * @package     Bloglamp
//  * @author      Peregrine Themes
//  * @since       1.0.0
//  */

// ?>

// <div class="bloghash-container bloghash-header-container">

// 	<?php
// 	bloghash_header_logo_template();
// 	?>

// 	<span class="bloghash-header-element bloghash-mobile-nav">
// 		<?php bloghash_hamburger( bloghash_option( 'main_nav_mobile_label' ), 'bloghash-primary-nav' ); ?>
// 		<?php bloghash_main_navigation_template(); ?>
// 	</span>

// 	<?php
// 	bloghash_main_navigation_template();
// 	do_action( 'bloghash_header_widget_location', array( 'left', 'right' ) );
// 	?>

// </div>
// <!-- END .bloghash-container -->
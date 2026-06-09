import React from 'react';
import './Modules.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faNoteSticky, faMoneyCheck, faSatelliteDish, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import AboutThree from '../../assets/img/Screenshot 2025-04-24 183210.png';
import AboutFour from '../../assets/img/Screenshot 2025-04-24 184234.png';
import Fundammental from '../../assets/img/Fundammental.png';
import Option from '../../assets/img/Option.png';


const Modules = () => {
    return (
        <div className="msm-mt-5 container pb-5 msm-module-page-block">

            {/* heading */}
            <div className="text-center py-5">
                <h1 className="display-6 fw-normal mb-3 text-orange text-uppercase">
                    Course Modules
                </h1>
                <p className="lead text-dark h6 fw-normal text-uppercase">
                    Available Online and Offline
                </p>
            </div>
            {/* /heading */}

            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-4">
                    <div className='card px-2 msm-bg-color py-2 lw-card-color'>
                        <summary className='text-center text-black fw-bold p-3 text-uppercase'>Module 1 <br /> <small className='text-dark msm-font-size'>( Basic To Advanced )</small></summary>
                        <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            <b className='text-center msm-text-color-text'>Chapter 1</b> <br /> Technical Analysis
                        </button>

                        <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal400">
                            <b className='text-center msm-text-color-text'>Chapter 2</b> <br /> Future and Option
                        </button>

                        <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal40">
                            <b className='text-center msm-text-color-text'>Chapter 3</b> <br /> Forex Market and Cryptocurrency Market
                        </button>

                        <span className='text-center text-dark fw-bold my-2'>------(OR)------</span>

                        <button type="button" class="btn-toggle-collapse msm-font-size-16px" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                            <b className='text-center msm-text-color-text'>Chapter 1</b> <br />
                            Fundamental Analysis
                        </button>

                        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel"> Basic To Advanced Technical Analysis</h1>
                                        <button type="button" class="ms-auto btn msm-w-25" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
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
                                        <div> <img src={AboutThree} alt="Metta share market" loading="lazy" className='w-100' /></div>

                                        <div className="d-flex justify-content-center">
                                            <a href="https://in.tradingview.com/chart/?symbol=NSE%3ANIFTY" target="_blank" rel="noopener noreferrer" className='btn btn-dark' > Go to</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade" id="exampleModal40" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel">Forex Market and Cryptocurrency Market</h1>
                                        <button type="button" class="ms-auto btn msm-w-25" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
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
                                        {/* <h4 className='mb-3 mt-3 text-green'>Currency Market</h4>
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
                                        </ol> */}

                                        {/* <h4 className='mb-3 mt-3 text-green'>Commodity Market</h4>
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
                                        </ol> */}

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
                                        <div> <img src={AboutFour} alt="Metta share market" loading="lazy" className='w-100' /></div>

                                        <div className="d-flex justify-content-center">
                                            <a href="https://in.tradingview.com/chart/?symbol=FX_IDC%3AUSDINR" target="_blank" rel="noopener noreferrer" className='btn btn-dark' > Go to</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade" id="exampleModal400" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel">Derivative And Future & Option’s</h1>
                                        <button type="button" class="ms-auto btn msm-w-25" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                                    </div>
                                    <div class="modal-body text-dark">
                                        <ol>
                                            <li><strong>Introduction to Derivatives</strong>
                                                <ul>
                                                    <li>What are Futures & Options (F&O)?</li>
                                                    <li>Difference between Futures & Options</li>
                                                    <li>Key Market Participants: Hedgers, Speculators, Arbitrageurs</li>
                                                </ul>
                                            </li>

                                            <li><strong>Futures – Basic Concepts</strong>
                                                <ul>
                                                    <li>How Futures Contracts work</li>
                                                    <li>Spot Price vs Futures Price</li>
                                                    <li>Lot Size, Tick Size, Expiry, Open Interest (OI)</li>
                                                    <li>Contract Specifications (Index, Stock, Commodity Futures)</li>
                                                </ul>
                                            </li>

                                            <li><strong>Order Types</strong>
                                                <ul>
                                                    <li>Market Order</li>
                                                    <li>Limit Order</li>
                                                    <li>Stop-Loss Order</li>
                                                    <li>Bracket Order (BO)</li>
                                                    <li>Cover Order (CO)</li>
                                                </ul>
                                            </li>

                                            <li><strong>Margin Requirements</strong>
                                                <ul>
                                                    <li>SPAN Margin</li>
                                                    <li>Exposure Margin</li>
                                                    <li>How margin affects position size</li>
                                                    <li>Mark-to-Market (MTM) settlement</li>
                                                </ul>
                                            </li>

                                            <li><strong>Contract Cycle & Rollover</strong>
                                                <ul>
                                                    <li>Near, Next & Far Month Contracts</li>
                                                    <li>Meaning of Rollover</li>
                                                    <li>Rollover Cost</li>
                                                    <li>Interpretation of Rollover Data</li>
                                                </ul>
                                            </li>

                                            <li><strong>Settlement</strong>
                                                <ul>
                                                    <li>Cash Settlement (for Index)</li>
                                                    <li>Physical Delivery (for Stocks)</li>
                                                </ul>
                                            </li>

                                            <li><strong>Introduction to Options</strong>
                                                <ul>
                                                    <li>What is an Option Contract?</li>
                                                    <li>Call Option = Right to Buy</li>
                                                    <li>Put Option = Right to Sell</li>
                                                    <li>Key Option Terms:
                                                        <ul>
                                                            <li>Strike Price</li>
                                                            <li>Expiry</li>
                                                            <li>Premium</li>
                                                            <li>ITM / ATM / OTM</li>
                                                            <li>Lot size</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li><strong>Mechanics of Options</strong>
                                                <ul>
                                                    <li>Option Premium = Intrinsic Value + Time Value</li>
                                                    <li>Factors affecting premium:
                                                        <ul>
                                                            <li>Volatility</li>
                                                            <li>Time to expiry</li>
                                                            <li>Strike vs Market Price</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                        <hr></hr>
                                        <div> <img src={Option} alt="Metta share market" loading="lazy" className='w-100 mb-3' /></div>

                                        <div className="d-flex justify-content-center">
                                            <a href="https://www.nseindia.com/option-chain" target="_blank" rel="noopener noreferrer" className='btn btn-dark' > Go to</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-4">
                    <div className='card msm-bg-color px-2 py-2 lw-card-color'>
                        <summary className='text-center text-black fw-bold p-3 text-uppercase '>Modules 2 <br /> <small className='text-dark msm-font-size '>( Advanced Pro Plus )</small></summary>

                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                                {/* <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <b className='text-center msm-text-color-text'>Chapter 1</b> <br /> Advanced Analysis Tracker
                                </button> */}

                                <button type="button" class="btn-toggle-collapse msm-pointer">
                                    <b className='text-center msm-text-color-text'>Chapter 1</b> <br /> Advanced Analysis Tracker
                                </button>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <button type="button" class="btn-toggle-collapse " data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                    <b className='text-center msm-text-color-text'>Chapter 2</b> <br /> Future and Option
                                </button>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <button type="button" class="btn-toggle-collapse msm-pointer">
                                    <b className='text-center msm-text-color-text'>Chapter 3</b> <br /> ICT + Smart Money Trading Mastery
                                </button>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <button type="button" class="btn-toggle-collapse msm-pointer">
                                    <b className='text-center msm-text-color-text'>Chapter 4</b> <br /> Money Management, Market Psychology & Mindset
                                </button>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-12  ">
                                <button type="button" class="btn-toggle-collapse msm-pointer">
                                    <b className='text-center msm-text-color-text'>Chapter 5</b> <br /> Trading With Artificial intelligence (AI)
                                </button>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-12 ">
                                <button type="button" class="btn-toggle-collapse lw-100-w" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                                    <b className='text-center msm-text-color-text'>Chapter 6</b> <br />Forex, Currency, Commodity, and Cryptocurrency Markets
                                </button>
                            </div>
                        </div>

                        {/* module first */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel"> Basic To Advanced and Advanced Pro </h1>
                                        <button type="button" class="ms-auto btn msm-w-25" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
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
                                        <div> <img src={AboutThree} alt="Metta share market" loading="lazy" className='w-100' /></div>
                                        <div className="d-flex justify-content-center">
                                            <a href="https://in.tradingview.com/chart/?symbol=NSE%3ANIFTY" target="_blank" rel="noopener noreferrer" className='btn btn-dark' > Go to</a>
                                        </div>
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
                                        <button type="button" class="ms-auto btn msm-w-25" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                                    </div>
                                    <div class="modal-body text-dark">
                                        <ol>
                                            <li><strong>Advanced Futures Trading Strategies</strong>
                                                <ul>
                                                    <li>Long/Short Futures (Directional)</li>
                                                    <li>Hedging with Futures</li>
                                                    <li>Arbitrage (Cash-Futures Arbitrage)</li>
                                                    <li>Spread Trading</li>
                                                    <li>Calendar Spread</li>
                                                    <li>Inter-commodity Spread</li>
                                                </ul>
                                            </li>

                                            <li><strong>Futures Pricing Models</strong>
                                                <ul>
                                                    <li>Cost of Carry Model</li>
                                                    <li>Futures Fair Value</li>
                                                    <li>Relationship with Interest Rates & Dividends</li>
                                                </ul>
                                            </li>

                                            <li><strong>Open Interest & Volume Analysis</strong>
                                                <ul>
                                                    <li>Using OI to detect trend strength</li>
                                                    <li>Identifying short covering & long buildup</li>
                                                    <li>Volume–OI correlation signals</li>
                                                </ul>
                                            </li>

                                            <li><strong>Volatility-Based Trading</strong>
                                                <ul>
                                                    <li>IV vs HV</li>
                                                    <li>Role of Volatility in Futures & Options</li>
                                                    <li>Trading high-IV and low-IV setups</li>
                                                </ul>
                                            </li>

                                            <li><strong>Institutional Data Analysis</strong>
                                                <ul>
                                                    <li>FII/DII Futures Positions</li>
                                                    <li>Client vs Pro Data</li>
                                                    <li>Sentiment Shifts near Expiry</li>
                                                </ul>
                                            </li>

                                            <li><strong>Expiry & Rollover Behavior</strong>
                                                <ul>
                                                    <li>Expiry Week Volatility</li>
                                                    <li>Max Pain Effect</li>
                                                    <li>Rollover Tactics</li>
                                                    <li>Volume Surges near expiry</li>
                                                </ul>
                                            </li>

                                            <li><strong>Algorithmic Futures Trading</strong>
                                                <ul>
                                                    <li>Basics of Algo Trading</li>
                                                    <li>Execution Algorithms</li>
                                                    <li>Backtesting</li>
                                                    <li>API-based Trading</li>
                                                </ul>
                                            </li>

                                            <li><strong>Advanced Options Trading Strategies</strong>
                                                <ul>
                                                    <li><strong>Volatility Strategies</strong>
                                                        <ul>
                                                            <li>Long Straddle</li>
                                                            <li>Long Strangle</li>
                                                            <li>Short Straddle</li>
                                                            <li>Short Strangle</li>
                                                        </ul>
                                                    </li>

                                                    <li><strong>Directional Strategies</strong>
                                                        <ul>
                                                            <li>Bull Call Spread</li>
                                                            <li>Bear Put Spread</li>
                                                            <li>Covered Call / Put</li>
                                                            <li>Protective Call / Put</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li><strong>Pro-Level Multi-Leg Strategies</strong>
                                                <ul>
                                                    <li>Iron Condor</li>
                                                    <li>Iron Butterfly</li>
                                                    <li>Ratio Spreads</li>
                                                    <li>Calendar Spread</li>
                                                    <li>Diagonal Spread</li>
                                                </ul>
                                            </li>

                                            <li><strong>Expert Tools & Market Sentiment</strong>
                                                <ul>
                                                    <li>Put-Call Ratio (PCR)</li>
                                                    <li>India VIX / US VIX</li>
                                                    <li>FII/DII Data Interpretation</li>
                                                    <li>Max Pain Theory</li>
                                                    <li>IV Crush & Slippage Avoidance</li>
                                                    <li>Always use Limit Orders in Options</li>
                                                </ul>
                                            </li>
                                        </ol>

                                        <hr></hr>
                                        <div> <img src={Option} alt="Metta share market" loading="lazy" className='w-100 mb-3' /></div>

                                        <div className="d-flex justify-content-center">
                                            <a href="https://www.nseindia.com/option-chain" target="_blank" rel="noopener noreferrer" className='btn btn-dark' > Go to</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /module second */}

                        {/* module fourth  */}
                        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel">Currency ,Commodity, and Cryptocurrency Markets</h1>
                                        <button type="button" class="ms-auto btn msm-w-25" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
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
                                        <div> <img src={AboutFour} alt="Metta share market" loading="lazy" className='w-100' /></div>

                                        <div className="d-flex justify-content-center">
                                            <a href="https://in.tradingview.com/chart/?symbol=FX_IDC%3AUSDINR" target="_blank" rel="noopener noreferrer" className='btn btn-dark' > Go to</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-4">
                    <div className='card msm-bg-color px-2 py-2 lw-card-color'>
                        <summary className='text-center text-black fw-bold text-uppercase p-3'>Modules 3 <br /> <small className='text-dark msm-font-size'></small></summary>
                        <button type="button" class="btn-toggle-collapse msm-font-size-16px" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                            <b className='text-center msm-text-color-text'>Chapter 1</b> <br />
                            Fundamental Analysis <br /><br />

                            <small> ( Financial Literacy/<br />Financial Planning & Goal Setting/<br />Mutual Funds/<br />Systematic Investment Plan/<br />Macroeconomics & Economic Indicators )

                            </small>

                        </button>

                        {/* Fundamental Analysis  */}
                        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-4 text-orange" id="exampleModalLabel">Fundamental Analysis</h1>
                                        <button type="button" class="ms-auto btn msm-w-25" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                                    </div>
                                    <div class="modal-body text-dark">
                                        <ol className='p-0'>

                                            <strong className='module-text'>1. Business & Industry Evaluation</strong><br />
                                            <b className=''>
                                                Business & industry evaluation focuses on growth potential, competition,
                                                market position, and industry trends.
                                            </b>
                                            <ol className='mt-3'>
                                                <li> <b>Business Analysis </b> – Understand the company’s model, revenue streams, and core operations.</li>
                                                <li><b>Sectoral Analysis </b> – Examine industry dynamics, growth trends, and regulatory environment.</li>
                                                <li><b>Economic Moat & Competitive Advantage</b> – Identify long-term edge over competitors.</li>
                                                <li><b>SWOT Analysis </b> – Evaluate internal strengths/weaknesses and external opportunities/threats.</li>
                                                <li><b>Top-Down vs. Bottom-Up Approach</b> – Macro-to-micro vs. micro-to-macro analysis methodologies.</li>
                                                <li>
                                                    Market share & demand /
                                                    Customer base & diversification /
                                                    Cost structure & pricing power /
                                                    Technology & innovation impact
                                                </li>
                                            </ol>

                                            <hr />
                                            <strong className='module-text'>2. Management & Governance</strong>
                                            <ol className=''>
                                                <li><b>Management & Corporate Governance</b> – Assess leadership credibility, board practices, and transparency.</li>
                                                <li><b>Management quality & experience</b></li>
                                                <li><b>Leadership vision and strategy</b></li>
                                                <li><b>Decision-making & execution ability</b></li>
                                                <li><b>Capital allocation discipline</b></li>
                                                <li><b>Transparency in communication</b></li>
                                                <li><b>Shareholder protection</b></li>
                                                <li><b>Risk management & internal controls</b></li>
                                                <li><b>Board independence, Ethical practices and Regulatory compliance</b></li>
                                            </ol>
                                            <hr />


                                            <strong className='module-text'>3. Financial Health & Performance</strong>
                                            <ol className=''>
                                                <li><b>Financial Statement Analysis</b> – Deep dive into P&amp;L, balance sheet, and cash flow statements.</li>
                                                <li><b>Key Financial Ratios</b> – Metrics like P/E, P/B, ROE, ROCE, D/E ratio to judge performance.</li>
                                                <li><b>Balance Sheet Analysis</b> – Understand asset quality, debt load, and equity health.</li>
                                                <li><b>Profit &amp; Loss (P&amp;L) Statement</b> – Assess operational efficiency and profitability.</li>
                                            </ol>
                                            <hr />

                                            <strong className='module-text'>4. Valuation Techniques</strong>
                                            <ol className=''>
                                                <li><b>Company Valuation Analysis </b>– Overall approach to determining fair stock value.</li>
                                                <li><b>Price-to-Earnings (P/E) Ratio</b></li>
                                                <li><b>Earnings-Based Valuation</b></li>
                                                <li><b>Market Capitalization Method</b></li>
                                                <li><b>Asset-Based Valuation</b></li>
                                                <li><b>Discounted Cash Flow (DCF) Model</b> – Estimate intrinsic value using FCF and discounting future cash flows.</li>
                                            </ol>
                                            <hr />

                                            <strong className='module-text'>5. Stock-Specific Factors</strong>
                                            <ol>
                                                <li><b>Stock Analysis</b> – Evaluate price trends, volume, financials, and fundamentals.</li>
                                                <li><b>Earnings Reports Analysis</b> – Interpret quarterly/annual reports for revenue, EPS, margins.</li>
                                                <li><b>Dividend &amp; Return Analysis</b> – Study historical and expected dividends and total return potential.</li>
                                                <li><b>Shareholding Pattern Analysis </b>– Analyse promoter, FII, DII, and retail investor trends.</li>
                                            </ol>
                                            <hr />

                                            <strong className='module-text'>6. Broader Influencing Factors</strong>
                                            <ol>
                                                <li><b>Macro and Micro Economic Impact</b> – Understand how GDP, inflation, interest rates, and unemployment affect stock prices.</li>
                                                <li><b>ESG (Environmental, Social and Governance) Analysis </b>– Assess environmental, social, and governance criteria for sustainable investing.</li>
                                            </ol>
                                            <hr />
                                            <strong className='module-text'> 7. Strategy Comparison</strong>
                                            <ol>
                                                <li><b>Growth vs. Value Investing </b>– Contrast two major stock-picking philosophies through a fundamental lens.</li>
                                                <li><b>Fundamental vs. Technical Analysis</b> – Understand how they differ and when to apply each.</li>
                                            </ol>
                                            <hr />

                                            <strong className='module-text'>AI in Fundamental Analysis – Simplified</strong>
                                            <ol>
                                                <li><b>Data Extraction</b> – AI reads financial data from reports, websites, and PDFs.</li>
                                                <li><b>Sentiment Analysis</b> – Analyses news, CEO interviews, and earnings calls.</li>
                                                <li><b>Financial Forecasting</b> – Predicts future revenue, profit, and growth.</li>
                                                <li><b>Stock Valuation</b> – Calculates fair value using DCF or peer comparison.</li>
                                                <li><b>Red Flag Detection</b> – Identifies fraud or financial risks.</li>
                                                <li><b>Portfolio Building</b> – Creates balanced portfolios.</li>
                                                <li><b>ESG Scoring</b> – Scores companies on sustainability metrics.</li>
                                            </ol>
                                            <hr />
                                        </ol>

                                        <div className="ps-2">
                                            <p><strong>Recorded videos are available on other financial topics.</strong></p>

                                            <h6 className='text-dark '>Primary &amp; Secondary Market Instruments</h6>
                                            <ul>
                                                <li>IPO (Initial Public Offering)</li>
                                                <li>FPO (Follow-on Public Offering)</li>
                                                <li>Rights Issue</li>
                                                <li>Offer for Sale (OFS)</li>
                                                <li>Buyback of Shares</li>
                                            </ul>

                                            <h6 className='text-dark'>Corporate Actions &amp; Restructuring</h6>
                                            <ul>
                                                <li>Mergers, Acquisitions &amp; Takeovers</li>
                                                <li>Demergers &amp; Spin-offs</li>
                                                <li>Stock Split &amp; Bonus Shares</li>
                                                <li>Dividends (Interim &amp; Final)</li>
                                            </ul>

                                            <h6 className='text-dark'>Macro Economics &amp; Micro Economic Effect</h6>
                                            <ul>
                                                <li>How to Read GDP (Gross Domestic Product)</li>
                                                <li>Inflation &amp; Deflation</li>
                                                <li>Fiscal Policy (Government Spending &amp; Taxation)</li>
                                                <li>Monetary Policy (Repo Rate, CRR, SLR, etc.)</li>
                                                <li>Union Budget &amp; Economic Survey</li>
                                            </ul>

                                            <h6 className='text-dark'>Financial Literacy &amp; Investment Instruments</h6>
                                            <ul>
                                                <li>Financial Planning &amp; Goal Setting</li>
                                                <li>Understanding Risk vs Return</li>
                                                <li>Asset Allocation &amp; Diversification</li>
                                                <li>Bonds (Government, Corporate, Tax-free)</li>
                                                <li>Gold (Physical, Digital, Sovereign Gold Bonds)</li>
                                                <li>Fixed Deposits (FD) &amp; Recurring Deposits (RD)</li>
                                                <li>Public Provident Fund (PPF), NPS, SCSS</li>
                                            </ul>

                                            <h6 className='text-dark'>Mutual Funds &amp; Other Market Instruments</h6>
                                            <ul>
                                                <li>Mutual Funds (Equity, Debt, Hybrid)</li>
                                                <li>SIP &amp; SWP</li>
                                                <li>Exchange-Traded Funds (ETFs)</li>
                                                <li>Real Estate Investment Trusts (REITs)</li>
                                                <li>Asset Management Companies (AMCs)</li>
                                            </ul>

                                            <h6 className='text-dark'>Modern Financial Concepts</h6>
                                            <ul>
                                                <li>Insurance (Life, Health, Term)</li>
                                                <li>Cryptocurrency &amp; Blockchain Basics</li>
                                                <li>ESG Investing</li>
                                            </ul>
                                        </div>


                                        <hr></hr>
                                        <div> <img src={Fundammental} alt="Metta share market" loading="lazy" className='w-100 mb-3' /></div>
                                        <div className="d-flex justify-content-center">
                                            <a href="https://www.screener.in/company/DMART/consolidated/" target="_blank" rel="noopener noreferrer" className='btn btn-dark' > Go to</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Fundamental Analysis  */}
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <h1 className="fs-2 fw-normal text-orange text-center my-5 text-uppercase">Benefits</h1>

                <div className="row msm-top-spacing justify-content-center">
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center msm-bg-color">
                            <FontAwesomeIcon icon={faSatelliteDish} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6 className='fw-normal'>Live Session</h6>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center msm-bg-color">
                            <FontAwesomeIcon icon={faWhatsapp} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6 className='fw-normal'>What's App group</h6>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center msm-bg-color">
                            <FontAwesomeIcon icon={faGaugeHigh} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6 className='fw-normal'>Life-Time Support</h6>
                        </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center msm-bg-color">
                            <FontAwesomeIcon icon={faMoneyCheck} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6 className='fw-normal'>7 Day's Refundable policy</h6>
                        </div>
                    </div>
                    {/*  */}

                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center msm-bg-color">
                            <FontAwesomeIcon icon={faRightFromBracket} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6 className='fw-normal'>Batch Rejoin Facility Within One Year</h6>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center msm-bg-color">
                            <FontAwesomeIcon icon={faNoteSticky} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6 className='fw-normal'>Provide Quality Notes </h6>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
        </div>
    );
};

export default Modules;

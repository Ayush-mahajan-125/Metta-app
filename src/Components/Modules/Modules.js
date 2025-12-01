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

                        <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal40">
                            <b className='text-center msm-text-color-text'>Chapter 2</b> <br /> Forex, Commodity, and Cryptocurrency Markets
                        </button>

                        <button type="button" class="btn-toggle-collapse" data-bs-toggle="modal" data-bs-target="#exampleModal400">
                            <b className='text-center msm-text-color-text'>Chapter 3</b> <br /> Future and Option
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
                                        <button type="button" class="ms-auto btn" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
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
                                                    <li>Basic Greeks:
                                                        <ul>
                                                            <li>Delta</li>
                                                            <li>Gamma</li>
                                                            <li>Theta</li>
                                                            <li>Vega</li>
                                                            <li>Rho</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li><strong>Reading Option Chain</strong>
                                                <ul>
                                                    <li>Open Interest</li>
                                                    <li>Volume</li>
                                                    <li>Change in OI</li>
                                                    <li>PCR (Put-Call Ratio)</li>
                                                    <li>Max Pain</li>
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
                                    <b className='text-center msm-text-color-text'>Chapter 6</b> <br /> Currency, Commodity, and Cryptocurrency Markets
                                </button>
                            </div>
                        </div>

                        {/* module first */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel"> Basic To Advanced and Advanced Pro </h1>
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
                                        <button type="button" class="ms-auto btn" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
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
                                        <button type="button" class="ms-auto btn" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                                    </div>
                                    <div class="modal-body text-dark">
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
                                        <h1 class="modal-title fs-5 text-orange" id="exampleModalLabel">Fundamental Analysis</h1>
                                        <button type="button" class="ms-auto btn" data-bs-dismiss="modal" aria-label="Close"><span>❌</span></button>
                                    </div>
                                    <div class="modal-body text-dark">
                                        <h5 className='mb-3 text-dark fw-bold'>1. Business & Industry Evaluation</h5>
                                        <ol>
                                            <li><strong>Business Analysis</strong> – Understand the company’s model, revenue streams, and core operations.</li>
                                            <li><strong>Sectoral Analysis</strong> – Examine industry dynamics, growth trends, and regulatory environment.</li>
                                            <li><strong>Economic Moat & Competitive Advantage</strong> – Identify long-term edge over competitors.</li>
                                            <li><strong>SWOT Analysis</strong> – Evaluate internal strengths/weaknesses and external opportunities/threats.</li>
                                            <li><strong>Top-Down vs. Bottom-Up Approach</strong> – Macro-to-micro vs. micro-to-macro analysis methodologies.</li>
                                        </ol>
                                        <hr></hr>
                                        <h5 className='mt-4 mb-3 text-dark fw-bold'>2. Management & Governance</h5>
                                        <ol start="6">
                                            <li><strong>Management & Corporate Governance</strong> – Assess leadership credibility, board practices, and transparency.</li>
                                            <li><strong>Assessing Management Effectiveness</strong> – Use ROA, ROE, and strategic decisions as evaluation tools.</li>
                                            <li><strong>Influence of Corporate Governance on Valuation</strong> – Understand how governance impacts investor confidence.</li>
                                        </ol>
                                        <hr></hr>
                                        <h5 className='mt-4 mb-3 text-dark fw-bold'>3. Financial Health & Performance</h5>
                                        <ol start="9">
                                            <li><strong>Financial Statement Analysis</strong> – Deep dive into P&amp;L, balance sheet, and cash flow statements.</li>
                                            <li><strong>Key Financial Ratios</strong> – Metrics like P/E, P/B, ROE, ROCE, D/E ratio to judge performance.</li>
                                            <li><strong>Balance Sheet Analysis</strong> – Understand asset quality, debt load, and equity health.</li>
                                            <li><strong>Profit &amp; Loss (P&amp;L) Statement</strong> – Assess operational efficiency and profitability.</li>
                                        </ol>
                                        <hr></hr>
                                        <h5 className='mt-4 mb-3 text-dark fw-bold'>4. Valuation Techniques</h5>
                                        <ol start="13">
                                            <li><strong>Company Valuation Analysis</strong> – Overall approach to determining fair stock value.</li>
                                            <li><strong>Discounted Cash Flow (DCF) Model</strong> – Estimate intrinsic value using FCF and discounting future cash flows.</li>
                                            <li><strong>Comparable Company Analysis (CCA)</strong> – Relative valuation using peer multiples.</li>
                                            <li><strong>Dividend Discount Model (DDM)</strong> – Valuation of dividend-paying stocks.</li>
                                            <li><strong>Free Cash Flow Valuation</strong> – Use FCF as a key indicator of intrinsic worth.</li>
                                        </ol>
                                        <hr></hr>
                                        <h5 className='mt-4 mb-3 text-dark fw-bold'>5. Stock-Specific Factors</h5>
                                        <ol start="18">
                                            <li><strong>Stock Analysis</strong> – Evaluate price trends, volume, financials, and fundamentals.</li>
                                            <li><strong>Earnings Reports Analysis</strong> – Interpret quarterly/annual reports for revenue, EPS, margins.</li>
                                            <li><strong>Dividend &amp; Return Analysis</strong> – Study historical and expected dividends and total return potential.</li>
                                            <li><strong>Shareholding Pattern Analysis</strong> – Analyze promoter, FII, DII, and retail investor trends.</li>
                                        </ol>
                                        <hr></hr>
                                        <h5 className='mt-4 mb-3 text-dark fw-bold'>6. Broader Influencing Factors</h5>
                                        <ol start="22">
                                            <li><strong>Macroeconomic Impact</strong> – Understand how GDP, inflation, interest rates, and unemployment affect stock prices.</li>
                                            <li><strong>ESG Analysis</strong> – Assess environmental, social, and governance criteria for sustainable investing.</li>
                                            <li><strong>Industry Position &amp; Competitive Landscape</strong> – Examine market share, disruption risks, and peer strength.</li>
                                        </ol>
                                        <hr></hr>
                                        <h5 className='mt-4 mb-3 text-dark fw-bold'>7. Strategy Comparison</h5>
                                        <ol start="25">
                                            <li><strong>Growth vs. Value Investing</strong> – Contrast two major stock-picking philosophies through a fundamental lens.</li>
                                            <li><strong>Fundamental vs. Technical Analysis</strong> – Understand how they differ and when to apply each.</li>
                                        </ol>
                                        <hr></hr>
                                        <h5 className='mt-4 mb-3 text-dark fw-bold'>8. AI in Fundamental Analysis – Simplified</h5>
                                        <ul>
                                            <li><strong>Data Extraction:</strong> AI can quickly read and extract financial data from reports, websites, and PDFs, saving hours of manual work.</li>
                                            <li><strong>Sentiment Analysis:</strong> It analyzes news, CEO interviews, and earnings calls to understand market mood (positive or negative).</li>
                                            <li><strong>Financial Forecasting:</strong> AI predicts future revenue, profit, and growth using past trends and market conditions.</li>
                                            <li><strong>Stock Valuation:</strong> AI helps calculate the fair value of a stock using models like DCF or peer comparison—automatically updating with new data.</li>
                                            <li><strong>Red Flag Detection:</strong> AI can catch signs of fraud or risk in financial statements, like unusual income or rising debt.</li>
                                            <li><strong>Portfolio Building:</strong> It helps create balanced investment portfolios based on risk, return, and sector exposure.</li>
                                            <li><strong>ESG Scoring:</strong> AI scores companies on environmental and social responsibility using reports and public data.</li>
                                        </ul>
                                        <hr></hr>
                                        <h5 className='mt-4 mb-3 text-dark fw-bold'>Other Financial Topics</h5>

                                        <h6> <strong className='text-dark'>Primary & Secondary Market Instruments</strong> </h6>
                                        <ul>
                                            <li>IPO (Initial Public Offering)</li>
                                            <li>FPO (Follow-on Public Offering)</li>
                                            <li>Rights Issue</li>
                                            <li>Offer for Sale (OFS)</li>
                                            <li>Buyback of Shares</li>
                                        </ul>

                                        <h6><strong className='text-dark'> Corporate Actions & Restructuring</strong></h6>
                                        <ul>
                                            <li>Mergers, Acquisitions & Takeovers</li>
                                            <li>Demergers & Spin-offs</li>
                                            <li>Stock Split & Bonus Shares</li>
                                            <li>Dividends (Interim & Final)</li>
                                        </ul>

                                        <h6><strong className='text-dark'> Macroeconomics & Economic Indicators</strong></h6>
                                        <ul>
                                            <li>How to Read GDP (Gross Domestic Product)</li>
                                            <li>Inflation & Deflation</li>
                                            <li>Fiscal Policy (Government Spending & Taxation)</li>
                                            <li>Monetary Policy (Repo Rate, CRR, SLR, etc.)</li>
                                            <li>Union Budget & Economic Survey</li>
                                        </ul>

                                        <h6><strong className='text-dark'> Financial Literacy & Investment Instruments</strong></h6>
                                        <ul>
                                            <li>Financial Planning & Goal Setting</li>
                                            <li>Understanding Risk vs Return</li>
                                            <li>Asset Allocation & Diversification</li>
                                            <li>Bonds (Government, Corporate, Tax-free)</li>
                                            <li>Gold (Physical, Digital, Sovereign Gold Bonds)</li>
                                            <li>Fixed Deposits (FD) & Recurring Deposits (RD)</li>
                                            <li>Public Provident Fund (PPF), NPS, SCSS</li>
                                        </ul>

                                        <h6><strong className='text-dark'> Mutual Funds & Other Market Instruments</strong></h6>
                                        <ul>
                                            <li>Mutual Funds (Types: Equity, Debt, Hybrid)</li>
                                            <li>SIP (Systematic Investment Plan) & SWP (Systematic Withdrawal Plan)</li>
                                            <li>Exchange-Traded Funds (ETFs)</li>
                                            <li>Real Estate Investment Trusts (REITs)</li>
                                            <li>Asset Management Companies (AMCs)</li>
                                        </ul>

                                        <h6><strong className='text-dark'>Modern Financial Concepts</strong></h6>
                                        <ul>
                                            <li>Credit Score & Credit Reports (CIBIL, Experian, etc.)</li>
                                            <li>Insurance (Life, Health, Term, ULIP)</li>
                                            <li>Cryptocurrency & Blockchain Basics</li>
                                            <li>ESG Investing (Environmental, Social, Governance)</li>
                                            <li>Robo-Advisory & FinTech Trends</li>
                                        </ul>


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

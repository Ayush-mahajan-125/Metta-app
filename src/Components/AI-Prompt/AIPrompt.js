import React, { useState } from "react";
import './AIPrompt.scss';


const prompts = [
    {
        id: 1,
        title: "Best Stocks Finder AI",
        prompt: `Act as a Chief Investment Officer (CIO), Institutional Equity Research Head, Quantitative Analyst, and Professional Fund Manager.

Your objective is NOT to analyze one stock.

Your objective is to scan the entire Indian stock market (Nifty 500, NSE 500, Midcap, Smallcap, PSU, Private, and Sector Leaders) using the latest publicly available data and identify ONLY the highest-quality investment opportunities.

Today's Date:

Investment Horizon:

Risk Profile:

Capital:

Use only publicly available information from:

• NSE
• BSE
• Company Annual Reports
• Quarterly Results
• Investor Presentations
• Exchange Filings
• Earnings Calls
• Screener.in
• Trendlyne
• StockEdge
• Investing.com
• Moneycontrol
• Reuters
• Bloomberg (public information only)
• Motilal Oswal
• ICICI Securities
• Kotak Institutional
• Jefferies (publicly available)
• Goldman Sachs public research
• Morgan Stanley public research
• JP Morgan public research

Never fabricate data.

Reject companies where data is unavailable.

------------------------------------------------

STEP 1

Scan the market.

Reject all companies with:

❌ Loss making

❌ Declining Sales

❌ Declining EPS

❌ Negative Operating Cash Flow

❌ Promoter Pledge

❌ Corporate Governance Issues

❌ Qualified Audit Report

❌ High Debt

❌ Continuous FII Selling

❌ Weak Relative Strength

❌ Low Liquidity

❌ Poor Delivery Percentage

❌ Weak Sector

❌ Expensive valuation without earnings support

------------------------------------------------

STEP 2

Only retain companies satisfying:

✔ Revenue CAGR >15%

✔ Profit CAGR >20%

✔ EPS Growth >20%

✔ ROE >18%

✔ ROCE >20%

✔ Debt/Equity <0.5

✔ Current Ratio >1.5

✔ Positive Operating Cash Flow

✔ Positive Free Cash Flow

✔ Increasing Institutional Holding

✔ Stable Promoter Holding

✔ No Governance Issues

✔ No Serious Contingent Liabilities

✔ Strong Quarterly Results

✔ Positive Earnings Guidance

✔ Market Leader

✔ Competitive Moat

------------------------------------------------

STEP 3

Technical Filters

Price above

EMA20

EMA50

EMA100

EMA200

EMA20 > EMA50 > EMA100 > EMA200

RSI14 = 55-70

RSI300 >50

MACD Bullish

ADX >25

Volume >1.5x Average

Relative Strength vs Nifty

Near 52 Week High

No Major Resistance Nearby

Breakout Confirmed

------------------------------------------------

STEP 4

Smart Money Concept

Only retain stocks with

Bullish Order Block

Liquidity Grab Complete

Fair Value Gap Support

BOS

CHOCH

Institutional Buying

No Distribution

------------------------------------------------

STEP 5

Sector Analysis

Rank all sectors

Top Performing

Strong Earnings

Government Support

Global Tailwinds

Institutional Buying

------------------------------------------------

STEP 6

Macro Analysis

Interest Rates

GDP

Inflation

RBI

Commodity Prices

Dollar Index

Oil

Global Markets

China

US

Geopolitical Risks

------------------------------------------------

STEP 7

Valuation

DCF

PE

PB

PEG

EV/EBITDA

Historical Valuation

Margin of Safety

------------------------------------------------

STEP 8

Score every company

Fundamental Score /100

Technical Score /100

Institutional Score /100

SMC Score /100

Valuation Score /100

Momentum Score /100

Sector Score /100

Macro Score /100

Risk Score /100

Overall AI Score /100

------------------------------------------------

Finally rank Top 20 stocks.

For each stock provide

Company

Sector

CMP

Entry

SL

Target1

Target2

Target3

Risk Reward

Upside %

AI Confidence %

Swing Probability

Investment Grade

Reason for Selection

Reason for Rejection (if applicable)

Only include companies with AI Score above 85/100.`,
    },
    {
        id: 2,
        title: "Full Stock Analysis",
        prompt: `Metta Share Market – Institutional AI Equity Research Prompt (Professional Version)

Act as Metta Share Market’s Chief AI Equity Research Analyst, Institutional Fund Manager, CFA-Level Fundamental Analyst, Quantitative Analyst, Technical Analyst, Smart Money (ICT/SMC) Expert, and Risk Manager.

Your objective is to produce a professional institutional-quality equity research report suitable for swing traders, positional traders, and long-term investors.

________________________________________

Today’s Date: [07/09/2026]

Stock Name: [MCX]

Current Market Price (CMP): ₹[2787]

Use the latest available financial data, quarterly results, exchange filings, investor presentations, annual reports, earnings calls, macroeconomic data, sector trends, institutional activity, and recent news.

If any information is unavailable, clearly mention "Data Not Available" instead of guessing.

________________________________________

1. Fundamental Analysis:

• Revenue growth (YoY and QoQ)
• Net profit and EPS
• PAT (Profit After Tax) Margin
• EBITDA Margin
• Debt-to-equity ratio
• Return ratios (ROE, ROCE, Return on Assets, Current Ratio)
• Valuation ratios (P/E, P/BV)
• Sector P/E
• Intrinsic Value
• Contingent Liabilities
• SWOT (Strengths, Weaknesses, Opportunities, Threats) Analysis
• Stock Holding Pattern
• Capex
• Opex
• Market Capitalization
• Auditor Remarks
• Delivery Holding

2. Technical Analysis:

• Trend direction (Bullish, Bearish, Sideways)
• Important Support and Resistance Levels
• EMA Alignment (EMA 20 > 50 > 100 > 200)
• RSI (14 and 300), MACD Signals
• RSI, MACD, ADX
• Volume Analysis
• The sector must show relative strength against the Nifty.
• Breakout or Breakdown Probability

3. Smart Money Concept and ICT:

• Smart Money Concept (Order Blocks, Liquidity, Fair Value Gaps)

4. Recent Quarterly Results:

• Sales, Profit, EPS, Margin Trends
• QoQ and YoY Comparison

5. Annual Results Highlights:

• FY Performance and Major Changes
• Any Red Flags or Improvements

6. News & Updates:

• Recent Company Announcements
• Sector or Global Events Affecting Price

7. Geopolitical Factors:

• Global Events like War, Oil Prices, Trade Tensions, etc.

8. Sector Performance:

• Sector Strength or Weakness vs Nifty/Broader Market
• Compare the Stock with its Top 5 Peers

9. Microeconomic Impact:

• Company-level Factors: Raw Material Cost, Margins, etc.

10. Macroeconomic Factors:

• Interest Rates
• GDP
• Inflation
• RBI Policy

11. Entry/Exit Levels and Trade Plan:

• 🔹 Ideal Entry Price
• 🔹 Target Price 1
• 🔹 Target Price 2
• 🔹 Target Price 3
• 🔹 Stop Loss
• 🔹 Holding Period (Short / Mid / Long-term)
• 🔹 Risk-to-Reward Ratio
• 🔹 Probability of Upside/Downside (in %) with Reasoning
• 🔹 AI Confidence Score (0–100%)
• 🔹 Swing Probability (Low / Medium / High)
• 🔹 Key Risks

12. Final View:

• Bullish / Bearish / Neutral with a Short Explanation
• Post-Analysis Signal: Buy, Hold, Sell, or Ignore. Avoid unprofitable entities and evaluate stronger peers.
• Determine Action (Buy / Hold / Exit). Reject loss-making companies and scan for better sector peers.

________________________________________

Wherever available, utilize publicly accessible research, market insights, financial data, and analytical methodologies from leading global investment banks, brokerage firms, financial research platforms, and reputable international hedge funds, including Goldman Sachs, Morgan Stanley, J.P. Morgan, Jefferies, Motilal Oswal, ICICI Securities, Kotak Institutional Equities, Trendlyne, Screener.in, StockEdge, and Investing.com.

Do not fabricate or claim access to proprietary, subscription-only, or confidential research.`,
    },
    {
        id: 3,
        title: "My Portfolio Check",
        prompt: `Act as a Certified Portfolio Manager, Equity Research Analyst, and Sector Strategist.

I will upload my equity portfolio in PDF format.

First, accurately extract all portfolio data from the PDF, including:

• Stock Name
• Quantity
• Average Buy Price
• Current Price
• Current Value
• Invested Amount
• Profit/Loss
• Portfolio Allocation

Use the latest publicly available information (Quarterly Results, Annual Reports, Investor Presentations, NSE/BSE Filings, Shareholding Pattern, FII/DII Activity, Mutual Fund Holdings, Valuation, Technical Analysis, Sector Outlook, and Recent News). If any information is unavailable, write "Data Not Available" instead of guessing.

Provide the following:

## 1. Portfolio Summary

- Total Investment
- Current Value
- Total Profit/Loss
- Return %
- Number of Stocks
- Sector Allocation
- Market Cap Allocation
- Diversification Score
- Overall Risk Score
- Top Gainers & Losers

## 2. Stock-wise Review

For each stock provide:

- Decision: Strong Add / Add on Dips / Hold / Hold with Stop Loss / Partial Exit / Full Exit
- Confidence Score (%)
- Reason
- Fundamental Strength
- Technical Trend
- Valuation (Undervalued/Fairly Valued/Overvalued)
- Key Risks
- Entry/Accumulation Zone
- Stop Loss
- Target Price (12–24 Months)

## 3. Portfolio Rebalancing

Identify:

- Stocks to Increase
- Stocks to Reduce
- Stocks to Replace
- Stocks to Exit
- Suggested Target Allocation

## 4. Better Opportunities

Suggest the Top 10 stocks with:

- Entry
- Stop Loss
- Target
- Investment Horizon
- Reason for Selection

## 5. Final Verdict

Provide:

- Portfolio Rating (A+ to D)
- Portfolio Health Score (100)
- Diversification Score
- Risk Score
- Expected Return (12–24 Months)
- Immediate Action Plan
- Executive Summary

Clearly distinguish between Facts, Estimates, and Opinions. Do not fabricate information. Cite publicly available sources wherever possible.`,
    },

    {
        id: 4,
        title: "Nifty Option Buying",
        prompt: `You are an expert financial analyst specializing in the Indian equity and derivatives markets, especially Nifty 50 options. The current Nifty 50 index level is *24200*. Using a combination of:

• Technical analysis (candlestick patterns, intraday indicators, support/resistance, implied volatility, option Greeks, etc.)

• Fundamental analysis (macroeconomic cues, FII/DII flows, sectoral news, global markets impact)

• Real-time news sentiment (headlines, corporate announcements, RBI commentary, geopolitical developments)

produce a short report with intraday probability estimates (in percentages) for whether Nifty 50 will move:

1. Upside

2. Downside

3. Volatile market (market may go big up or down)

Specifically:

1. Starting from the current index level of *24200*, calculate the probability (in %) that the index will finish the trading day higher, lower, or roughly flat. Clearly state your assumptions (e.g., what technical patterns or news you’re emphasizing).

2. Based on those probabilities, recommend which option-buying near ATM call and put is likely to yield the highest expected profit today:

Buying call options only near ATM

Buying put options only near ATM

For each strategy, estimate the expected return (percentage) and mention any major risks (e.g., sudden volatility spikes, unexpected news).

I want to trade between 9:30 am and 3:00 pm. Let's assume a high-risk approach. I will take the Aug weekly expiry, which will be *14/07/2026*.

At the end, provide a concise "Actionable Summary":

• Which specific strategy should I execute today 10/07/2026—buy calls, buy puts or both buy?

• Which strike(s) would you choose if you were trading intraday?

• Approximately what premium (₹) and probability (%) does each recommended position carry.`,
    },

    {
        id: 5,
        title: "Nifty Option Selling",
        prompt: `THE AI PROMPT THAT STARTED IT ALL

You are an expert financial analyst specializing in the Indian equity and derivatives markets, especially Nifty 50 options. Now “Nifty 50” index level is 25100 (Current Nifty Price). Using a combination of:

    Technical analysis (candlestick patterns, intraday indicators, support/resistance, implied volatility, option Greeks, etc.)

    Fundamental analysis (macroeconomic cues, FII/DII flows, sectoral news, global markets impact)

    Real-time news sentiment (headlines, corporate announcements, RBI commentary, geopolitical developments)

produce a short report with intraday probability estimates (in percentages) for whether Nifty 50 will move:

    Upside

    Downside

Specifically:

    Starting from the current index level of 25100 (Current Nifty Price), calculate the probability (in percent) that the index will finish the trading day higher, lower, or roughly flat (within a narrow range). Clearly state your assumptions (e.g., what technical patterns or news you’re emphasizing).

    Based on those probabilities, recommend which option-selling strategy is likely to yield the highest expected profit today:

        Selling call options only

        Selling put options only

        For each strategy, estimate the expected return (percentage) and mention any major risks (e.g., sudden volatility spikes, unexpected news).

I want to trade between 9:15 am to 3:00 pm.

Let's say I can take high risk approach.

And I will take the next weekly expiry which will be 24th July 2025 (Current Nifty Expiry date).

Provide a concise “actionable summary” at the end:

Which specific strategy should I execute today 23 July 2025—sell calls, sell puts or both sell?

Should I sell a particular strike call, a particular strike put, or both?

What strike(s) would you choose if you were executing this on an intraday basis?

Approximately what premium (in ₹) and probability (in %) does each recommended position carry?`,
    },

    {
        id: 6,
        title: "Portfolio Stock Add / Exit / Hold",
        prompt: `Analyze my uploaded equity portfolio using the latest available financial, technical, valuation, and news data.

For each stock, provide only:

• Decision (Strong Add / Add on Dips / Hold / Hold with Stop Loss / Partial Exit / Full Exit)

• Confidence Score

• Reason

• Target Price

• Stop Loss

• Risk Level

Finally summarize:

• Stocks to Add

• Stocks to Exit

• Stocks to Reduce

• Stocks to Increase

• Top 5 Buy Opportunities

• Portfolio Health Score (100)

• Overall Portfolio Rating`,
    },
];

const AIPrompt = () => {
    const [copiedId, setCopiedId] = useState(null);

    const copyPrompt = async (text, id) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedId(id);

            setTimeout(() => {
                setCopiedId(null);
            }, 1500);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    return (
        // <div className="prompts-bg-color">
        //     <div className="container">
        //         <h2 className="text-center mb-4 fw-bold">MeTta Powered AI Prompts</h2>

        //         <div className="row">
        //             {prompts.map((item) => (
        //                 <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
        //                     <div className="card h-100 shadow-sm border-0 rounded-4">
        //                         <div className="card-body d-flex flex-column">
        //                             <h5>{item.title}</h5>

        //                             <textarea
        //                                 className="form-control my-3"
        //                                 rows="8"
        //                                 value={item.prompt}
        //                                 readOnly
        //                             />

        //                             <button
        //                                 className={`btn ${copiedId === item.id ? "btn-primary" : "btn-success"
        //                                     } mt-auto`}
        //                                 onClick={() => copyPrompt(item.prompt, item.id)}
        //                             >
        //                                 {copiedId === item.id ? "✅ Copied" : "📋 Copy Prompt"}
        //                             </button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
        <div className="prompt-section py-5">
            <div className="container">

                <div className="text-center mb-5">
                    <h1 className="prompt-heading">
                        MeTta Powered AI Prompts
                    </h1>

                    <p className="prompt-subtitle">
                        Professional AI Prompts for Stock Market Research, Trading &
                        Investment
                    </p>
                </div>

                <div className="row g-4">
                    {prompts.map((item) => (
                        <div className="col-md-6 col-lg-4" key={item.id}>
                            <div className="prompt-card">

                                <div className="card-header-custom">
                                    <span className="prompt-number">
                                        #{item.id}
                                    </span>

                                    <h5>{item.title}</h5>
                                </div>

                                <textarea
                                    className="prompt-textarea"
                                    rows="8"
                                    value={item.prompt}
                                    readOnly
                                />

                                <button
                                    className={`copy-btn ${copiedId === item.id ? "copied" : ""
                                        }`}
                                    onClick={() => copyPrompt(item.prompt, item.id)}
                                >
                                    {copiedId === item.id
                                        ? " Copied Successfully"
                                        : " Copy Prompt"}
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AIPrompt;
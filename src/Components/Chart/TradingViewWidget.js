// // MettaChart.js
// import React, { useEffect, useRef, memo } from "react";

// function TradingViewWidget() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Clear previous widget
//     if (containerRef.current) {
//       containerRef.current.innerHTML = "";
//     }

//     // Create script element
//     const script = document.createElement("script");
//     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;

//     // Set raw JSON configuration (no JSON.stringify)
//     script.innerHTML = `
//       {
//         "autosize": true,
//         "symbol": "NASDAQ:AAPL",
//         "interval": "15",
//         "timezone": "Asia/Kolkata",
//         "theme": "light",
//         "style": "1",
//         "locale": "en",
//         "withdateranges": true,
//         "allow_symbol_change": true,
//         "watchlist": [
//           "BMFBOVESPA:BIT1!",
//           "ACTIVTRADES:GOLD",
//           "CMCMARKETS:EURUSD",
//           "BINANCE:ETHUSDT"
//         ]
//       }
//     `;

//     containerRef.current.appendChild(script);
//   }, []);

//   return (
//     <div
//       className="tradingview-widget-container"
//       ref={containerRef}
//       style={{ marginTop: "6rem" }}
//     >
//       <div className="tradingview-widget-container__widget" />
//       <div className="tradingview-widget-copyright">
//         <a
//           href="https://www.tradingview.com/"
//           rel="noopener noreferrer"
//           target="_blank"
//         >
//           <span className="blue-text">Track all markets on TradingView</span>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);

// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Clear previous widget if any
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: 'NASDAQ:AAPL',
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'light',
      style: '1',
      locale: 'en',
      allow_symbol_change: true,
      support_host: 'https://www.tradingview.com',
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={containerRef}
      style={{ marginTop: '5.5rem', position: 'fixed' }}
    />
  );
}

export default memo(TradingViewWidget);



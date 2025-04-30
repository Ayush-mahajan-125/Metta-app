import React, { useState } from 'react';
import './CAGRCalculator.scss'; // Import the CSS file

export default function CAGRCalculator() {
  const [initialValue, setInitialValue] = useState('200000');
  const [finalValue, setFinalValue] = useState('');
  const [years, setYears] = useState('');
  const [cagr, setCAGR] = useState(null);

  const calculateCAGR = () => {
    const initial = parseFloat(initialValue.replace(/,/g, ''));
    const final = parseFloat(finalValue.replace(/,/g, ''));
    const yrs = parseFloat(years);

    if (initial > 0 && final > 0 && yrs > 0) {
      const result = ((Math.pow(final / initial, 1 / yrs)) - 1) * 100;
      setCAGR(result.toFixed(2));
    } else {
      setCAGR(null);
    }
  };

  const resetFields = () => {
    setInitialValue('');
    setFinalValue('');
    setYears('');
    setCAGR(null);
  };

  const formatNumber = (value) => {
    return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };


  return (
    <section className="msm-bg-video-frame " >
  
      <div className="container">
        <div className="calculator-container">
          <div className="calculator-card">
            <h2 className="fw-normal text-center text-uppercase text-orange">CAGR Calculator </h2>
            <h6 className="fw-normal mb-5 text-center text-secondary">(Compound Annual Growth Rate)</h6>


            <div className="calculator-grid">
              <div className="form-section">
                {/* Initial Value */}
                <div className="msm-input-group">
                  <label className='fw-normal'>Initial Value</label>
                  <div className="input-with-icon">
                    <input
                      type="text"
                      value={formatNumber(initialValue)}
                      onChange={(e) => setInitialValue(e.target.value)}
                    />
                    <span>₹</span>
                  </div>
                </div>

                {/* Final Value */}
                <div className="msm-input-group">
                  <label className='fw-normal'>Final Value</label>
                  <div className="input-with-icon">
                    <input
                      type="text" placeholder='2000000'
                      value={formatNumber(finalValue)}
                      onChange={(e) => setFinalValue(e.target.value)}
                    />
                    <span>₹</span>
                  </div>
                </div>

                {/* Duration */}
                <div className="msm-input-group">
                  <label className='fw-normal'>Duration of Investment</label>
                  <div className="input-with-icon">
                    <input
                      type="number"
                      value={years} placeholder='10'
                      onChange={(e) => setYears(e.target.value)}
                    />
                    <span>Yrs</span>
                  </div>
                </div>

                <h2 className='text-center fw-bold'>  {cagr !== null ? `${cagr}%` : '-'}</h2>

                {/* Buttons */}
                <button className="btn btn-primary border-0" onClick={calculateCAGR}>
                  Calculate CAGR
                </button>

                <button className="btn btn-outline-dark" onClick={resetFields}>
                  Reset
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

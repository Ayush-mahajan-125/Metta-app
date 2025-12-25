import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";

import './Calculator.scss';

import { Helmet } from 'react-helmet-async';

ChartJS.register(ArcElement, Tooltip, Legend);

const Calculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(500);
  const [rate, setRate] = useState(15);
  const [years, setYears] = useState(15);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estReturns, setEstReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const n = years * 12;
    const r = rate / 100 / 12;
    const futureValue =
      monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const invested = monthlyInvestment * n;
    setInvestedAmount(invested);
    setTotalValue(futureValue);
    setEstReturns(futureValue - invested);
  }, [monthlyInvestment, rate, years]);

  const data = {
    labels: ["Invested amount", "Est. returns"],
    datasets: [
      {
        data: [investedAmount, estReturns],
        backgroundColor: ["#E8EBFD", "#4B61FF"],
        borderWidth: 0,
      },
    ],
  };

  return (

    <div className=" msm-mt-5 bg-white">

      <Helmet>
        <meta name="description" content="Top-rated share market classes and training in Nagpur." />
        <meta name="keywords" content="Nagpur Share Market, Best Share Market Nagpur, Trading Institute Nagpur, Metta Share Market, Metta , top share market in nagpur ,share market" />
      </Helmet>
      
      {/* primary section */}
      <div className="text-center msm-ayush-chart">
        <h1 className="fw-bold text-white mb-3">SIP Calculator</h1>
        <h6 className="text-light">Simplify your investments with our SIP Calculator – plan, invest, and grow your wealth effortlessly</h6>
        <a href="https://sahi.onelink.me/lsr5/e191p03c*Address*" target="_blank" className="btn btn-dark my-3">Invest Now</a>
      </div>
      {/* /primary section */}

      <div className="container ">
        <div className="msm-card-container-block bg-white px-5 py-3">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="">

                <div>
                  {/*  amout*/}
                  <label className="fw-bold mb-1 fs-5">Enter Amout</label>
                  <div class="input-group mb-4">
                    <span class="input-group-text" id="basic-addon1">₹</span>
                    <input type="number" class="form-control border p-2 rounded w-28 form-select-sm" placeholder="Username" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value))} />
                  </div>
                  {/* /amout */}

                  {/* Return */}
                  <label className="fw-bold mb-1 fs-6 ">Expected Rate of Return</label>
                  <div class="input-group">
                    <input type="number" value={rate} class="form-control" onChange={(e) => setRate(Number(e.target.value))} />
                    <span class="input-group-text" id="basic-addon2">%</span>
                  </div>

                  <input type="range" min="1" max="30" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mb-4" />
                  {/* Return */}

                  {/* Duration */}
                  <label className="fw-bold mb-1 fs-6">Select Duration</label>
                  <div class="input-group">
                    <input type="number" value={years} class="form-control" onChange={(e) => setYears(Number(e.target.value))} />
                    <span class="input-group-text" id="basic-addon2">Yr</span>
                  </div>

                  <input type="range" min="1" max="30" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full mb-4" />
                  {/* /Duration */}

                  {/* amount */}
                  <div className="msm-text-digital-ammount">

                    <h5 className="mb-4 text-success">
                      <span className="fs-6 fw-normal mb-3">Total Value</span><br />
                      <span className="fw-bold "> ₹ {totalValue.toLocaleString("en-IN")}</span>
                    </h5>
                    <hr className="w-75" />
                    <h6 className="mb-4">
                      <span className="fw-normal mb-3">Invested Amount</span><br />
                      <span className="fw-bold"> ₹ {investedAmount.toLocaleString("en-IN")}</span>
                    </h6>

                    <h6 className="mb-4">
                      <span className="fw-normal mb-3">Est. Returns</span><br />
                      <span className="fw-bold"> ₹ {estReturns.toLocaleString("en-IN")}</span>
                    </h6>

                  </div>
                  {/* /amount */}

                </div>
              </div>
            </div>

            {/* pie data */}
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="d-flex justify-content-center lign-items-center">
                <div className="chart ">
                  <Pie data={data} />
                </div>
              </div>
            </div>
            {/* /pie data */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

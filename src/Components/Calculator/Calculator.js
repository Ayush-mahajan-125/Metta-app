import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";

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
    <div className="sip-container container p-6 bg-white rounded-2xl shadow-xl flex gap-6 max-w-5xl mx-auto mt-10 msm-mt-5">
      <div className="inputs w-1/2">
        <div className="tabs flex gap-2 mb-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">SIP</button>
          <button className="bg-gray-200 px-4 py-2 rounded-full">Lumpsum</button>
        </div>
        <div>
          <label className="block mb-1">Monthly investment</label>
          <div className="flex items-center gap-2 mb-2">
            <span>₹</span>
            <input
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="border p-2 rounded w-28"
            />
          </div>
          <input
            type="range"
            min="500"
            max="100000"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            className="w-full mb-4"
          />

          <label className="block mb-1">Expected return rate (p.a)</label>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="border p-2 rounded w-28"
            />
            <span>%</span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full mb-4"
          />

          <label className="block mb-1">Time period</label>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="border p-2 rounded w-28"
            />
            <span>Yr</span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full mb-6"
          />

          <div className="space-y-2">
            <p>Invested amount: ₹{investedAmount.toLocaleString()}</p>
            <p>Est. returns: ₹{estReturns.toLocaleString()}</p>
            <p>Total value: ₹{totalValue.toLocaleString()}</p>
          </div>

          <button className="bg-green-500 text-white px-6 py-3 rounded-xl mt-4 hover:bg-green-600">
            INVEST NOW
          </button>
        </div>
      </div>
      <div className="chart w-1/2 flex items-center justify-center">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Calculator;

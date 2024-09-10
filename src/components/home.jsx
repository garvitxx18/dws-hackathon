import React, { useState } from 'react';
import GrowwImg from "../assets/GrowwLogo.png";

const brokers = [
  { name: "5 Paisa", logo: "path_to_5paisa_logo" },
  { name: "Angel One", logo: "path_to_angelone_logo" },
  { name: "Dhan", logo: "path_to_dhan_logo" },
  { name: "Groww", logo: "src/assets/groww.png" },
  { name: "Motilal Oswal", logo: "path_to_motilal_oswal_logo" },
];

const midTermStrategy = [
  { name: "EquityMutualFunds", value: 40, color: "blue-500" },
  { name: "BalancedOrHybridFunds", value: 25, color: "orange-500" },
  { name: "FixedDeposits", value: 20, color: "green-500" },
  { name: "ShortTermBondFunds", value: 10, color: "purple-500" },
  { name: "GoldETFsOrSovereignGoldBonds", value: 5, color: "yellow-500" },
];

const shortTermStrategy = [
    { name: "HighYieldSavingsAccounts", value: 20, color: "blue-500" },
    { name: "FixedDeposits", value: 30, color: "orange-500" },
    { name: "LiquidMutualFunds", value: 25, color: "green-500" },
    { name: "ShortTermDebtFunds", value: 15, color: "purple-500" },
    { name: "GoldETFsOrSovereignGoldBonds", value: 10, color: "yellow-500" },
];

const longTermStrategy = [
    { name: "EquityMutualFunds ", value: 50, color: "blue-500" },
    { name: "EquityIndexFundsOrETFs", value: 20, color: "orange-500" },
    { name: "BalancedOrHybridFunds", value: 20, color: "green-500" },
    { name: "FixedDeposits", value: 10, color: "purple-500" },
    { name: "GoldETFsOrSovereignGoldBonds", value: 5, color: "yellow-500" },
]

const Home = () => {
  const [strategy, setStrategy] = useState('Short Term');

  const handleStrategyChange = (event) => {
    setStrategy(event.target.value);
  };

  // Calculate the stroke-dasharray based on the strategy values
  const totalValue = shortTermStrategy.reduce((acc, item) => acc + item.value, 0);
  let cumulativeOffset = 0;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-6 pt-24">
      {/* Content */}
      <div className="flex items-center justify-center bg-gray-900">
        <div className="flex flex-col items-center justify-center py-10 bg-gradient-to-br from-gray-800 to-gray-700 shadow-lg rounded-lg p-6 max-w-3xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Import in one click</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-8">
            {brokers.map((broker, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img src={GrowwImg} alt={broker.name} className="h-12 w-12 mb-2" />
                <span className="text-sm font-medium text-gray-300">{broker.name}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => {}}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform transform hover:scale-105"
          >
            Import Portfolio
          </button>

          <p className="text-gray-400 mt-4 text-sm text-center">
            <strong>Note:</strong> Your trust is our priority. Rest assured, we do not store any of your broker's user details.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl mt-10">
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <label htmlFor="strategy-dropdown" className="mr-2 font-medium text-gray-400">
              Select strategy
            </label>
            <select
              id="strategy-dropdown"
              className="bg-gray-700 border border-gray-600 text-white rounded p-2 focus:ring-2 focus:ring-green-500"
              value={strategy}
              onChange={handleStrategyChange}
            >
              <option value="Short Term">Short Term</option>
              <option value="Medium Term">Medium Term</option>
              <option value="Long Term">Long Term</option>
            </select>
          </div>
        </header>

        <main className="text-center">
          <p className="text-lg font-semibold mb-4 text-gray-300">
            Your investment strategy is {strategy}
          </p>

          {/* Dynamic Pie Chart */}
          <div className="flex justify-center items-center">
            <svg width="200" height="200" viewBox="0 0 42 42" className="transform rotate-90">
              {shortTermStrategy.map((item, index) => {
                const dashArray = (item.value / totalValue) * 100;
                const strokeDasharray = `${dashArray} ${100 - dashArray}`;
                const strokeDashoffset = cumulativeOffset;
                cumulativeOffset -= dashArray;

                return (
                  <circle
                    key={index}
                    className={`text-${item.color} stroke-current`}
                    cx="21"
                    cy="21"
                    r="15.915"
                    fill="transparent"
                    strokeWidth="3.2"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                  />
                );
              })}
            </svg>

            {/* Chart Labels */}
            <div className="ml-6">
              {shortTermStrategy.map((item, index) => (
                <p key={index} className="font-semibold text-gray-300">
                  {item.name}: {item.value}%
                </p>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;

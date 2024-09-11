import React, { useState } from "react";
import GrowwImg from "../assets/GrowwLogo.png";
import Dhan from "../assets/dhanLogo.jpg";
import Motilal from "../assets/Motillal.jpeg";
import Angel from "../assets/AngelOne.jpg";
import paisa from "../assets/5paisa.jpeg";
import { useNavigate } from "react-router-dom";

const brokers = [
  { name: "5 Paisa", logo: paisa },
  { name: "Angel One", logo: Angel },
  { name: "Dhan", logo: Dhan },
  { name: "Groww", logo: GrowwImg },
  { name: "Motilal Oswal", logo: Motilal },
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
];

const Home = () => {
  const [strategy, setStrategy] = useState("Short Term");
  const [loader, setShowLoader] = useState(false);

  const handleStrategyChange = (event) => {
    setStrategy(event.target.value);
  };

  const navigate = useNavigate();
  // Calculate the stroke-dasharray based on the strategy values
  const totalValue = shortTermStrategy.reduce(
    (acc, item) => acc + item.value,
    0
  );
  let cumulativeOffset = 0;

  if (loader) {
    setTimeout(() => navigate("/analytics"), 3000);
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-6 pt-24">
      {/* Content */}
      <div className="flex items-center justify-center w-full p-6">
        <div className="flex flex-col items-center justify-center py-10 bg-gradient-to-br from-gray-800 to-gray-700 shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Import in one click
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-8 w-full">
            {brokers.map((broker, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={broker.logo}
                  alt={broker.name}
                  className="h-16 w-16 mb-2 rounded-full"
                />
                <span className="text-sm font-medium text-gray-300">
                  {broker.name}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => {}}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform transform hover:scale-105"
          >
            Consolidate Report
          </button>

          <button
            onClick={() => {
              setShowLoader(true);
              // navigate("/analytics");
            }}
            className="flex gap-4 items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform transform hover:scale-105 mt-6"
          >
            Import Portfolio
            {!!loader && <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>}
          </button>

          <p className="text-gray-400 mt-4 text-sm text-center">
            <strong>Note:</strong> Your trust is our priority. Rest assured, we
            do not store any of your broker's user details.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl mt-10">
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <label
              htmlFor="strategy-dropdown"
              className="mr-2 font-medium text-gray-400"
            >
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
            <svg
              width="200"
              height="200"
              viewBox="0 0 42 42"
              className="transform rotate-90"
            >
              {getStrategyMap(strategy).map((item, index) => {
                const dashArray = (item.value / totalValue) * 100;
                const strokeDasharray = `${dashArray} ${100 - dashArray}`;
                const strokeDashoffset = cumulativeOffset;
                cumulativeOffset -= dashArray;

                return (
                  <circle
                    key={`${index}-${item.name}`}
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
            <div className="flex flex-col ml-6 items-start">
              {getStrategyMap(strategy).map((item, index) => (
                <div key={index} className="flex py-1 items-center">
                  <span
                    className={`bg-${item.color} mr-2 w-2 h-2 rounded-full`}
                  ></span>
                  <p className="font-semibold text-gray-300">
                    {item.name}: {item.value}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const getStrategyMap = (strategyValue) => {
  if (strategyValue === "Short Term") {
    return shortTermStrategy;
  } else if (strategyValue === "Long Term") {
    return longTermStrategy;
  } else if (strategyValue === "Medium Term") {
    return midTermStrategy;
  }
};

export default Home;

import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const stocks = {
  GOOGL: 1500.0,
  MSFT: 1200.0,
  PFE: 800.0,
  TSLA: 1000.0,
};

const suggestedRatios = {
  GOOGL: 2.19,
  MSFT: 70.33,
  PFE: 0.8,
  TSLA: 26.68,
};

// Function to get the total value of investments and calculate the recommended allocation
const getTotalInvestment = () => {
  return Object.values(stocks).reduce((acc, value) => acc + value, 0);
};

const totalInvestment = getTotalInvestment();

// Calculate suggested allocation in terms of price
const recommendedAllocation = Object.keys(suggestedRatios).reduce(
  (acc, stock) => {
    acc[stock] = (suggestedRatios[stock] / 100) * totalInvestment;
    return acc;
  },
  {}
);

// Prepare data for Pie Chart
const chartData = {
  labels: ["GOOGL", "MSFT", "PFE", "TSLA"],
  datasets: [
    {
      label: "Current Investment",
      data: Object.values(stocks),
      backgroundColor: ["#f87171", "#60a5fa", "#34d399", "#fbbf24"],
      borderColor: ["#e63946", "#1d4ed8", "#10b981", "#f59e0b"],
      borderWidth: 1,
    },
    {
      label: "Recommended Allocation",
      data: Object.values(recommendedAllocation),
      backgroundColor: ["#fca5a5", "#93c5fd", "#6ee7b7", "#fcd34d"],
      borderColor: ["#ef4444", "#3b82f6", "#22c55e", "#fbbf24"],
      borderWidth: 1,
    },
  ],
};

const Analytics = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      {/* Page Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Analytics</h1>
        <nav className="space-x-6">
          <a href="/about-us" className="text-lg font-medium text-gray-300 hover:text-white">
            About Us
          </a>
          <a href="/finacademy" className="text-lg font-medium text-gray-300 hover:text-white">
            FinAcademy
          </a>
          <a href="/analytics" className="text-lg font-medium text-gray-300 hover:text-white">
            Analytics
          </a>
        </nav>
      </header>

      {/* Top Trades Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {Object.keys(stocks).map((stock) => (
          <div
            key={stock}
            className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col space-y-4"
          >
            <div className="text-lg font-semibold">{stock}</div>
            <div className="text-sm text-red-500">
              Current Investment: ${stocks[stock].toFixed(2)} (
              {((stocks[stock] / totalInvestment) * 100).toFixed(2)}%)
            </div>
            <div className="text-sm text-green-500">
              Suggested Allocation: ${recommendedAllocation[stock].toFixed(2)} (
              {suggestedRatios[stock].toFixed(2)}%)
            </div>
          </div>
        ))}
      </section>

      {/* Pie Chart Section */}
      <section className="bg-gray-800 p-8 rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Investment vs Suggested Allocation</h2>
        <div className="w-full max-w-lg mx-auto mb-6">
          <Pie
            data={chartData}
            options={{
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      let label = context.label || "";
                      if (label) {
                        label += ": ";
                      }
                      if (context.raw !== null) {
                        label += `$${context.raw.toFixed(2)} (${((context.raw / totalInvestment) * 100).toFixed(2)}%)`;
                      }
                      return label;
                    },
                  },
                },
              },
            }}
          />
        </div>

        {/* Pie Chart Labels */}
        <div className="flex flex-col items-center text-white space-y-2">
          {Object.keys(stocks).map((stock, index) => (
            <div key={index} className="text-sm">
              <span className="font-semibold">{stock}:</span> Current: $
              {stocks[stock].toFixed(2)} (
              {((stocks[stock] / totalInvestment) * 100).toFixed(2)}%) | Recommended: $
              {recommendedAllocation[stock].toFixed(2)} (
              {suggestedRatios[stock].toFixed(2)}%)
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Analytics;

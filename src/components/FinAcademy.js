import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  ArcElement,
  CategoryScale
);

const FinAcademy = () => {
  const growthData = {
    labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
    datasets: [
      {
        label: "Investment Growth",
        data: [1000, 1100, 1250, 1400, 1600],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const riskData = {
    labels: ["Low Risk", "Medium Risk", "High Risk"],
    datasets: [
      {
        label: "Risk Tolerance",
        data: [30, 40, 30],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex h-max items-center justify-center bg-black text-white pt-24">
      <div className="w-full max-w-4xl p-8 space-y-6 bg-gray-900 rounded-lg shadow-lg">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-white">
            Welcome to FinAcademy
          </h1>
          <p className="mt-2 text-lg text-gray-400">
            Your guide to understanding and optimizing investments
          </p>
        </header>

        <nav className="flex justify-center space-x-4 text-sm font-medium">
          <a
            href="#investment-basics"
            className="text-green-500 hover:underline"
          >
            Investment Basics
          </a>
          <a
            href="#short-term-goals"
            className="text-green-500 hover:underline"
          >
            Short-Term Goals
          </a>
          <a
            href="#medium-term-goals"
            className="text-green-500 hover:underline"
          >
            Medium-Term Goals
          </a>
          <a href="#long-term-goals" className="text-green-500 hover:underline">
            Long-Term Goals
          </a>
          <a
            href="#tips-for-beginners"
            className="text-green-500 hover:underline"
          >
            Tips for Beginners
          </a>
        </nav>

        <main className="space-y-8">
          <section
            id="investment-basics"
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-3xl font-semibold mb-4">Investment Basics</h2>
            <p className="mb-4 text-gray-300">
              Investing involves allocating your money into different assets to
              grow your wealth over time. Here are key concepts you should
              understand:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-300">
              <li>
                <strong>Compound Interest:</strong> Interest on both the initial
                principal and the accumulated interest from previous periods.
              </li>
              <li>
                <strong>Diversification:</strong> Spreading investments across
                various assets to reduce risk.
              </li>
              <li>
                <strong>Asset Allocation:</strong> The process of deciding how
                to distribute your investments among different asset categories.
              </li>
            </ul>
            <div className="p-4 bg-gray-900 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Investment Growth Over Time
              </h3>
              <Line data={growthData} />
            </div>
          </section>

          <section id="short-term-goals" className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">
              Short-Term Goals (Up to 2 Years)
            </h2>
            <p className="text-gray-300 mb-4">
              Here’s a potential allocation strategy for investing ₹1,00,000
              with a short-term horizon of up to 2 years:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-300">
              <li>
                <strong>High-Yield Savings Accounts (20%):</strong> ₹20,000 in
                accounts like HDFC Bank or SBI (Interest rate: 3-4%).
              </li>
              <li>
                <strong>Fixed Deposits (30%):</strong> ₹30,000 in short-term FDs
                from ICICI Bank or HDFC (6-7% returns).
              </li>
              <li>
                <strong>Liquid Mutual Funds (25%):</strong> ₹25,000 in funds
                like SBI Liquid Fund (4-6% returns).
              </li>
              <li>
                <strong>Short-Term Debt Funds (15%):</strong> ₹15,000 in debt
                funds such as HDFC Short Term Debt Fund (6-8% returns).
              </li>
              <li>
                <strong>Gold ETFs or Sovereign Gold Bonds (10%):</strong>{" "}
                ₹10,000 in SBI Gold ETFs or Sovereign Gold Bonds (2.5% interest
                component).
              </li>
            </ul>
            <div className="p-4 bg-gray-900 rounded-lg">
              <Doughnut data={riskData} />
            </div>
          </section>

          <section
            id="medium-term-goals"
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-3xl font-semibold mb-4">
              Medium-Term Goals (3-5 Years)
            </h2>
            <p className="text-gray-300 mb-4">
              For a medium-term goal of investing ₹1,00,000, here’s a potential
              strategy:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-300">
              <li>
                <strong>Equity Mutual Funds (40%):</strong> ₹40,000 in funds
                like SBI Bluechip Fund (12-15% returns).
              </li>
              <li>
                <strong>Balanced or Hybrid Funds (25%):</strong> ₹25,000 in
                ICICI Prudential Balanced Advantage Fund (10-12% returns).
              </li>
              <li>
                <strong>Fixed Deposits (20%):</strong> ₹20,000 in FDs with 2-5
                years tenure (6-7% returns).
              </li>
              <li>
                <strong>Short-Term Bond Funds (10%):</strong> ₹10,000 in HDFC
                Short Term Debt Fund (7-9% returns).
              </li>
              <li>
                <strong>Gold ETFs or Sovereign Gold Bonds (5%):</strong> ₹5,000
                in Gold ETFs or Sovereign Gold Bonds (2.5% interest component).
              </li>
            </ul>
            <div className="p-4 bg-gray-900 rounded-lg">
              <Line data={growthData} />
            </div>
          </section>

          <section id="long-term-goals" className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">
              Long-Term Goals (More than 5 Years)
            </h2>
            <p className="text-gray-300 mb-4">
              Here’s a strategy for investing ₹1,00,000 with a long-term horizon
              (5+ years):
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-300">
              <li>
                <strong>Equity Mutual Funds (50%):</strong> ₹50,000 in large-cap
                funds like HDFC Equity Fund (12-15% returns).
              </li>
              <li>
                <strong>Equity Index Funds or ETFs (20%):</strong> ₹20,000 in
                Nifty 50 index funds like Nippon India Index Fund (10-12%
                returns).
              </li>
              <li>
                <strong>Balanced or Hybrid Funds (15%):</strong> ₹15,000 in
                ICICI Prudential Balanced Advantage Fund (10-12% returns).
              </li>
              <li>
                <strong>Fixed Deposits (10%):</strong> ₹10,000 in ICICI Bank
                5-Year FD (6-7% returns).
              </li>
              <li>
                <strong>Gold ETFs or Sovereign Gold Bonds (5%):</strong> ₹5,000
                in SBI Gold ETFs or Sovereign Gold Bonds (2.5% interest
                component).
              </li>
            </ul>
            <div className="p-4 bg-gray-900 rounded-lg">
              <Doughnut data={riskData} />
            </div>
          </section>

          <section
            id="tips-for-beginners"
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-3xl font-semibold mb-4">Tips for Beginners</h2>
            <ol className="list-decimal pl-5 text-gray-300">
              <li>
                <strong>Start Small:</strong> Begin with manageable amounts to
                learn how different investments work.
              </li>
              <li>
                <strong>Diversify Your Portfolio:</strong> Spread investments
                across various asset classes to manage risk.
              </li>
              <li>
                <strong>Educate Yourself:</strong> Continuously learn about
                different investment options and market trends.
              </li>
              <li>
                <strong>Set Clear Goals:</strong> Define your financial goals to
                guide your investment decisions.
              </li>
              <li>
                <strong>Consult Professionals:</strong> Seek advice from
                financial advisors to refine your strategy.
              </li>
            </ol>
          </section>
        </main>

        <footer className="text-center text-gray-400 mt-6">
          <p>&copy; 2024 FinAcademy. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default FinAcademy;

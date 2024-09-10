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
            Investment for Dummies: A Comprehensive Guide to Getting Started
          </h1>
          <p className="mt-2 text-lg text-gray-400">
            Welcome to FinAcademy’s ultimate guide to investing. If you’re new
            to the world of investments, this guide will provide you with a
            thorough understanding of investment basics, types of investments,
            risk tolerance, and strategies for achieving your financial goals.
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
            href="#types-of-investments"
            className="text-green-500 hover:underline"
          >
            Types of Investments
          </a>
          <a
            href="#understanding-risk-tolerance"
            className="text-green-500 hover:underline"
          >
            Risk Tolerance
          </a>
          <a
            href="#investment-strategies"
            className="text-green-500 hover:underline"
          >
            Investment Strategies
          </a>
          <a
            href="#tips-for-beginners"
            className="text-green-500 hover:underline"
          >
            Tips for Beginners
          </a>
        </nav>

        <main className="space-y-8">
          {/* Section 1: Investment Basics */}
          <section
            id="investment-basics"
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-3xl font-semibold mb-4">1. What is Investing?</h2>
            <p className="mb-4 text-gray-300">
              Investing involves committing your money to assets with the
              expectation of generating a profit over time. Unlike savings,
              which typically earn minimal interest, investing aims to grow your
              wealth by taking on varying levels of risk.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-300">
              <li>
                <strong>Compound Interest:</strong> The process where the
                interest you earn on your investments is reinvested, so you earn
                interest on both your original investment and the accumulated
                interest.
              </li>
              <li>
                <strong>Diversification:</strong> A strategy involving spreading
                investments across different asset classes to minimize the risk.
              </li>
              <li>
                <strong>Asset Allocation:</strong> Dividing your portfolio among
                different asset categories to manage risk.
              </li>
            </ul>
            <div className="p-4 bg-gray-900 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Investment Growth Over Time
              </h3>
              <Line data={growthData} />
            </div>
          </section>

          {/* Section 2: Types of Investments */}
          <section id="types-of-investments" className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">
              2. Types of Investments
            </h2>
            <ul className="list-disc pl-5 mb-4 text-gray-300">
              <li>
                <strong>Stocks:</strong> Represent ownership in a company, with
                potential for long-term growth.
              </li>
              <li>
                <strong>Bonds:</strong> Debt securities offering regular
                interest payments with lower risk than stocks.
              </li>
              <li>
                <strong>Mutual Funds:</strong> Professionally managed portfolios
                of stocks, bonds, or other securities.
              </li>
              <li>
                <strong>ETFs:</strong> Exchange-Traded Funds that track
                different indices and asset classes.
              </li>
              <li>
                <strong>Real Estate:</strong> Investing in residential or
                commercial properties for rental income and appreciation.
              </li>
              <li>
                <strong>Gold & Precious Metals:</strong> A hedge against
                inflation and economic uncertainty.
              </li>
            </ul>
          </section>

          {/* Section 3: Risk Tolerance */}
          <section
            id="understanding-risk-tolerance"
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-3xl font-semibold mb-4">
              3. Understanding Risk Tolerance
            </h2>
            <p className="text-gray-300 mb-4">
              Risk tolerance is your ability to endure market fluctuations and
              potential losses. It varies based on financial goals and personal
              comfort with risk.
            </p>
            <div className="p-4 bg-gray-900 rounded-lg">
              <Doughnut data={riskData} />
            </div>
          </section>

          {/* Section 4: Investment Strategies */}
          <section id="investment-strategies" className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">
              4. Investment Strategies
            </h2>
            <ul className="list-disc pl-5 mb-4 text-gray-300">
              <li>
                <strong>Short-Term Goals:</strong> Prioritize safety and
                liquidity with savings accounts, short-term bonds, and money
                market funds.
              </li>
              <li>
                <strong>Medium-Term Goals:</strong> Balance risk and return with
                mutual funds, dividend stocks, and balanced funds.
              </li>
              <li>
                <strong>Long-Term Goals:</strong> Focus on growth with stocks,
                equity mutual funds, and real estate.
              </li>
            </ul>
          </section>

          {/* Section 5: Tips for Beginners */}
          <section id="tips-for-beginners" className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">5. Tips for Beginners</h2>
            <ol className="list-decimal pl-5 text-gray-300">
              <li>Start Small</li>
              <li>Diversify Your Portfolio</li>
              <li>Educate Yourself</li>
              <li>Set Clear Goals</li>
              <li>Consult Professionals</li>
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

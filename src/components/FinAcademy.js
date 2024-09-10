import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, ArcElement);

const FinAcademy = () => {
    const growthData = {
        labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
        datasets: [{
            label: 'Investment Growth',
            data: [1000, 1100, 1250, 1400, 1600],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    };

    const riskData = {
        labels: ['Low Risk', 'Medium Risk', 'High Risk'],
        datasets: [{
            label: 'Risk Tolerance',
            data: [30, 40, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-gray-800 text-white p-6 text-center">
                <h1 className="text-4xl font-bold">Welcome to FinAcademy</h1>
                <p className="mt-2 text-lg">Your guide to understanding and optimizing investments</p>
            </header>

            <nav className="bg-gray-700 text-white">
                <ul className="flex justify-center p-4 space-x-4">
                    <li><a href="#investment-basics" className="hover:underline">Investment Basics</a></li>
                    <li><a href="#types-of-investments" className="hover:underline">Types of Investments</a></li>
                    <li><a href="#risk-tolerance" className="hover:underline">Risk Tolerance</a></li>
                    <li><a href="#investment-strategies" className="hover:underline">Investment Strategies</a></li>
                    <li><a href="#tips-for-beginners" className="hover:underline">Tips for Beginners</a></li>
                </ul>
            </nav>

            <main className="p-6 max-w-4xl mx-auto">
                <section id="investment-basics" className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Investment Basics</h2>
                    <p className="mb-4">Investing involves allocating your money into different assets to grow your wealth over time. Here are key concepts you should understand:</p>
                    <ul className="list-disc pl-5 mb-4">
                        <li><strong>Compound Interest:</strong> Interest on both the initial principal and the accumulated interest from previous periods.</li>
                        <li><strong>Diversification:</strong> Spreading investments across various assets to reduce risk.</li>
                        <li><strong>Asset Allocation:</strong> The process of deciding how to distribute your investments among different asset categories.</li>
                    </ul>
                    <div className="bg-white p-4 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Investment Growth Over Time</h3>
                        <Line data={growthData} />
                    </div>
                </section>

                <section id="types-of-investments" className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Types of Investments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-4 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Stocks</h3>
                            <p>Shares of ownership in a company. Potential for high returns, but also higher risk. Ideal for long-term growth.</p>
                            <img src="https://via.placeholder.com/150" alt="Stocks" className="mt-4"/>
                        </div>
                        <div className="bg-white p-4 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Bonds</h3>
                            <p>Debt securities issued by corporations or governments. Generally offer lower returns but are safer than stocks.</p>
                            <img src="https://via.placeholder.com/150" alt="Bonds" className="mt-4"/>
                        </div>
                        <div className="bg-white p-4 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Mutual Funds</h3>
                            <p>Investment funds that pool money from many investors to purchase a diversified portfolio of stocks and bonds.</p>
                            <img src="https://via.placeholder.com/150" alt="Mutual Funds" className="mt-4"/>
                        </div>
                        <div className="bg-white p-4 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Real Estate</h3>
                            <p>Investment in property. Provides rental income and potential appreciation. Requires more capital and management.</p>
                            <img src="https://via.placeholder.com/150" alt="Real Estate" className="mt-4"/>
                        </div>
                        <div className="bg-white p-4 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Gold</h3>
                            <p>Precious metal investment that can serve as a hedge against inflation and economic uncertainty.</p>
                            <img src="https://via.placeholder.com/150" alt="Gold" className="mt-4"/>
                        </div>
                    </div>
                </section>

                <section id="risk-tolerance" className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Understanding Risk Tolerance</h2>
                    <p className="mb-4">Risk tolerance is your ability to endure market fluctuations and investment losses. It varies based on your financial goals, time horizon, and investment experience.</p>
                    <div className="bg-white p-4 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Risk Tolerance Assessment</h3>
                        <Doughnut data={riskData} />
                    </div>
                    <ul className="list-disc pl-5 mt-4">
                        <li><strong>Low Risk:</strong> Suitable for conservative investors. Investments include savings accounts and fixed deposits.</li>
                        <li><strong>Medium Risk:</strong> Suitable for moderate investors. Investments include balanced funds and short-term bonds.</li>
                        <li><strong>High Risk:</strong> Suitable for aggressive investors. Investments include stocks and equity mutual funds.</li>
                    </ul>
                </section>

                <section id="investment-strategies" className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Investment Strategies</h2>
                    <p className="mb-4">Choose an investment strategy based on your time horizon and risk tolerance:</p>
                    <ul className="list-disc pl-5">
                        <li><strong>Short-Term Strategy:</strong> Focus on low-risk investments such as savings accounts and short-term bonds.</li>
                        <li><strong>Medium-Term Strategy:</strong> Balance risk with investments in mutual funds and balanced funds.</li>
                        <li><strong>Long-Term Strategy:</strong> Opt for growth-oriented investments such as equities and equity mutual funds.</li>
                    </ul>
                </section>

                <section id="tips-for-beginners">
                    <h2 className="text-3xl font-semibold mb-4">Tips for Beginners</h2>
                    <ol className="list-decimal pl-5">
                        <li><strong>Start Small:</strong> Begin with manageable amounts to learn how different investments work.</li>
                        <li><strong>Diversify Your Portfolio:</strong> Spread investments across various asset classes to manage risk.</li>
                        <li><strong>Educate Yourself:</strong> Continuously learn about different investment options and market trends.</li>
                        <li><strong>Set Clear Goals:</strong> Define your financial goals to guide your investment decisions.</li>
                        <li><strong>Consult Professionals:</strong> Seek advice from financial advisors to refine your strategy.</li>
                    </ol>
                </section>
            </main>

            <footer className="bg-gray-800 text-white text-center p-4 absolute bottom-0 w-full">
                <p>&copy; 2024 FinAcademy. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default FinAcademy;

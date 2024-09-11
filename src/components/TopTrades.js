import React from "react";

// Merged data for top trades

const topESGData = [
    { fund_long_name: "MFS Blended Research Mid Cap Equity Fund R1", esg_score: 40.05 },
    { fund_long_name: "UBS Dynamic Alpha Fund Class A", esg_score: 40.05 },
    { fund_long_name: "Destinations Large Cap Equity Fund Class I", esg_score: 38.98 },
    { fund_long_name: "Delaware High-Yield Opportunities Fund Class A", esg_score: 38.17 },
    { fund_long_name: "American Funds International Vantage Fund Class F-1", esg_score: 37.80 }
  ];

  
const topTradesData = {
  "Other": [
    {
      "fund_name": "HDFC Index Fund",
      "fund_manager": "Nirman Morakhia",
      "amc_name": "HDFC Mutual Fund",
      "risk_level": 6.0,
      "rating": 4.0,
      "expense_ratio": 0.2,
      "returns_1yr": 2.4,
      "returns_3yr": 25.8,
      "returns_5yr": 12.8
    },
    {
      "fund_name": "ICICI Pru Debt Management Fund",
      "fund_manager": "Manish Banthia",
      "amc_name": "ICICI Prudential Mutual Fund",
      "risk_level": 3.0,
      "rating": 4.0,
      "expense_ratio": 0.41,
      "returns_1yr": 5.8,
      "returns_3yr": 6.7,
      "returns_5yr": 7.0
    },
    // New data for Other category
    {
      "fund_name": "HSBC Managed Solutions Moderate Fund",
      "fund_manager": "Gautam Bhupal",
      "amc_name": "HSBC Mutual Fund",
      "risk_level": 5,
      "rating": 2,
      "expense_ratio": 0.76,
      "returns_1yr": 1.2,
      "returns_3yr": 19.0,
      "returns_5yr": 8.7
    },
    {
      "fund_name": "Taurus Nifty 50 Index Fund",
      "fund_manager": "Ramneek Kundra",
      "amc_name": "Taurus Mutual Fund",
      "risk_level": 6,
      "rating": 0,
      "expense_ratio": 0.44,
      "returns_1yr": 1.2,
      "returns_3yr": 25.8,
      "returns_5yr": 12.3
    },
    {
      "fund_name": "UTI-Nifty 50 Index Fund",
      "fund_manager": "Sharwan Kumar Goyal",
      "amc_name": "UTI Mutual Fund",
      "risk_level": 6,
      "rating": 3,
      "expense_ratio": 0.2,
      "returns_1yr": 0.9,
      "returns_3yr": 26.2,
      "returns_5yr": 12.0
    }
  ],
  "Hybrid": [
    {
      "fund_name": "AXIS Arbitrage Fund",
      "fund_manager": "Ashish Naik",
      "amc_name": "Axis Mutual Fund",
      "risk_level": 1.0,
      "rating": 4.0,
      "expense_ratio": 0.31,
      "returns_1yr": 5.6,
      "returns_3yr": 4.9,
      "returns_5yr": 5.6
    },
    // New data for Hybrid category
    {
      "fund_name": "Kotak Equity Arbitrage Fund",
      "fund_manager": "Hiten Shah",
      "amc_name": "Kotak Mahindra Mutual Fund",
      "risk_level": 1,
      "rating": 4,
      "expense_ratio": 0.43,
      "returns_1yr": 5.8,
      "returns_3yr": 4.9,
      "returns_5yr": 5.6
    },
    {
      "fund_name": "Nippon India Arbitrage Fund",
      "fund_manager": "Anand Devendra Gupta",
      "amc_name": "Nippon India Mutual Fund",
      "risk_level": 1,
      "rating": 4,
      "expense_ratio": 0.21,
      "returns_1yr": 5.6,
      "returns_3yr": 4.9,
      "returns_5yr": 5.7
    }
  ],
  "Equity": [
    {
      "fund_name": "SBI Magnum Midcap Fund",
      "fund_manager": "Sohini Andani",
      "amc_name": "SBI Mutual Fund",
      "risk_level": 6.0,
      "rating": 4.0,
      "expense_ratio": 0.97,
      "returns_1yr": 6.4,
      "returns_3yr": 37.0,
      "returns_5yr": 13.5
    },
    // New data for Equity category
    {
      "fund_name": "ICICI Pru Multicap Fund",
      "fund_manager": "Sankaran Naren",
      "amc_name": "ICICI Prudential Mutual Fund",
      "risk_level": 6,
      "rating": 0,
      "expense_ratio": 1.02,
      "returns_1yr": 5.7,
      "returns_3yr": 29.1,
      "returns_5yr": 11.8
    },
    {
      "fund_name": "HDFC Capital Builder Value Fund",
      "fund_manager": "Gopal Agrawal",
      "amc_name": "HDFC Mutual Fund",
      "risk_level": 6,
      "rating": 2,
      "expense_ratio": 1.04,
      "returns_1yr": -0.7,
      "returns_3yr": 33.7,
      "returns_5yr": 11.3
    },
    {
      "fund_name": "UTI-Value Opportunities Fund",
      "fund_manager": "Vetri Subramaniam",
      "amc_name": "UTI Mutual Fund",
      "risk_level": 6,
      "rating": 4,
      "expense_ratio": 1.16,
      "returns_1yr": 1.7,
      "returns_3yr": 27.2,
      "returns_5yr": 12.2
    }
  ],
  "Debt": [
    {
      "fund_name": "Invesco India Money Market Fund",
      "fund_manager": "Krishna Cheemalapati",
      "amc_name": "Invesco Mutual Fund",
      "risk_level": 2.0,
      "rating": 2.0,
      "expense_ratio": 0.22,
      "returns_1yr": 5.0,
      "returns_3yr": 5.1,
      "returns_5yr": 5.8
    },
    // New data for Debt category
    {
      "fund_name": "IDBI Liquid Fund",
      "fund_manager": "Raju Sharma",
      "amc_name": "IDBI Mutual Fund",
      "risk_level": 2,
      "rating": 4,
      "expense_ratio": 0.13,
      "returns_1yr": 5.6,
      "returns_3yr": 4.4,
      "returns_5yr": 5.4
    },
    {
      "fund_name": "WhiteOak Capital Overnight Fund",
      "fund_manager": "Piyush Baranwal",
      "amc_name": "WhiteOak Capital Mutual Fund",
      "risk_level": 1,
      "rating": 1,
      "expense_ratio": 0.22,
      "returns_1yr": 1.7,
      "returns_3yr": 32.4,
      "returns_5yr": 13.3
    }
  ],
  "Solution Oriented": [
    {
      "fund_name": "UTI-Retirement Benefit Pension Plan – Direct",
      "fund_manager": "Sunil Patil",
      "amc_name": "UTI Mutual Fund",
      "risk_level": 5.0,
      "rating": 0.0,
      "expense_ratio": 1.05,
      "returns_1yr": 5.2,
      "returns_3yr": 17.2,
      "returns_5yr": 7.5
    },
    // New data for Solution Oriented category
    {
      "fund_name": "HDFC Children's Gift Fund",
      "fund_manager": "Chirag Setalvad",
      "amc_name": "HDFC Mutual Fund",
      "risk_level": 6,
      "rating": 0,
      "expense_ratio": 0.96,
      "returns_1yr": 10.5,
      "returns_3yr": 26.8,
      "returns_5yr": 12.9
    },
    {
      "fund_name": "LIC MF Children's Gift Fund",
      "fund_manager": "Karan Desai",
      "amc_name": "LIC Mutual Fund",
      "risk_level": 6,
      "rating": 1,
      "expense_ratio": 1.86,
      "returns_1yr": -1.9,
      "returns_3yr": 17.1,
      "returns_5yr": 7.6
    }
  ]
};

// ESG Card Component
const ESGCard = ({ fund }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-lg space-y-2 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-lg font-semibold text-white">{fund.fund_long_name}</h2>
      <p className="text-gray-300">ESG Score: <span className="text-green-400">{fund.esg_score}</span></p>
    </div>
  );
};

// FundCard Component
const FundCard = ({ fund }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg space-y-4 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-white">{fund.fund_name}</h2>
      <p className="text-gray-300">Fund Manager: {fund.fund_manager}</p>
      <p className="text-gray-300">AMC: {fund.amc_name}</p>
      <p className="text-gray-300">Risk Level: <span className="text-yellow-400">{fund.risk_level}</span></p>
      <p className="text-gray-300">Rating: <span className="text-green-400">{fund.rating}</span></p>
      <p className="text-gray-300">Expense Ratio: <span className="text-pink-400">{fund.expense_ratio}%</span></p>
      <p className="text-gray-300">1 Year Return: <span className="text-green-400">{fund.returns_1yr}%</span></p>
      <p className="text-gray-300">3 Year Return: <span className="text-green-400">{fund.returns_3yr}%</span></p>
      <p className="text-gray-300">5 Year Return: <span className="text-green-400">{fund.returns_5yr}%</span></p>
    </div>
  );
};

// Main TopTrades Component
const TopTrades = () => {
  const orderedCategories = ['Equity', 'Debt', 'Hybrid', 'Solution Oriented', 'Other'];

  return (
    <div className="min-h-screen bg-black text-white p-10 flex justify-center">
      <div className="max-w-6xl p-20">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold">Recommendations</h1>
        </header>

        {/* ESG Section */}
        <section className="mb-16 pt-6">
          <h2 className="text-3xl font-bold text-white mb-8">Top ESG Funds</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topESGData.map((fund, index) => (
              <ESGCard key={index} fund={fund} />
            ))}
          </div>
        </section>

        {/* Render funds in specified order */}
        {orderedCategories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Top {category} Funds</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {topTradesData[category]?.map((fund, index) => (
                <FundCard key={index} fund={fund} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTrades;

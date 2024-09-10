import React, { useState } from 'react';

const FinancialGoalsForm = ({ onSubmit }) => {
  const [income, setIncome] = useState("");
  const [savings, setSavings] = useState("");
  const [expenses, setExpenses] = useState("");
  const [goal, setGoal] = useState("");
  const [riskTolerance, setRiskTolerance] = useState("medium");
  const [timeHorizon, setTimeHorizon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { income, savings, expenses, goal, riskTolerance, timeHorizon };
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-8 max-w-lg mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Financial Goals
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Monthly Income
        </label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Savings
        </label>
        <input
          type="number"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Monthly Expenses
        </label>
        <input
          type="number"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Investment Goal
        </label>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="e.g., retirement, wealth building"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Risk Tolerance
        </label>
        <select
          value={riskTolerance}
          onChange={(e) => setRiskTolerance(e.target.value)}
          className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
          required
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Time Horizon (in years)
        </label>
        <input
          type="number"
          value={timeHorizon}
          onChange={(e) => setTimeHorizon(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default FinancialGoalsForm;

import React, { useState } from 'react';
import NanoIcon from '../assets/nano.svg'; // Adjust these paths to your image file locations
import BeemerIcon from '../assets/tesla.svg';
import RRIcon from '../assets/porsche.svg';
import hospital from '../assets/hospital.svg';
import home from '../assets/home.svg';
import Money from '../assets/money-bag.svg';
import castle from '../assets/icons8-house-64 (1).png';
import { useNavigate } from 'react-router-dom';

const FinancialQuestionsMultiPage = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    annualIncome: '',
    goalTimeline: '',
    riskTolerance: '',
    savingsInvestment: '',
    dmatAccount: '',
  });
  
  const navigate = useNavigate();

  const handleCheckboxChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: prevData[field].includes(value)
        ? prevData[field].filter((item) => item !== value)
        : [...prevData[field], value],
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    if(formData.dmatAccount==='no'){
      navigate("/");
    }else{
      navigate("/")
    }
  };

  const nextPage = () => {
    if (page < 3) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="max-w-2xl w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        {/* Progress bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-5/6 h-1 bg-gray-600 rounded">
            <div className="absolute top-0 left-0 h-full bg-green-500 rounded" style={{ width: `${(page / 3) * 100}%` }}></div>
          </div>
          <span className="ml-4 text-gray-400 text-sm w-fit">{page} of 3</span>
        </div>

        {/* Page 1 */}
        {page === 1 && (
          <div>
            <label className="block text-gray-400 mb-2">What is your annual income (in USD or local currency)?</label>
            <input
              name="annualIncome"
              type="number"
              value={formData.annualIncome}
              onChange={handleChange}
              className="w-full p-3 mb-4 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            {/* <label className="block text-gray-400 mb-2">What are your primary financial goals? (Select all that apply)</label>
            {['Saving for a short-term goal', 'Buying a home', 'Retirement planning', 'Paying off debt', 'Wealth building for future generations', 'Other'].map((goal) => (
              <label key={goal} className="block mb-2">
                <input
                  type="checkbox"
                  checked={formData.financialGoals.includes(goal)}
                  onChange={() => handleCheckboxChange('financialGoals', goal)}
                  className="mr-2"
                />
                {goal}
              </label>
            ))} */}

            <label className="block text-gray-400 mb-2">When do you plan to achieve this goal?</label>
            <select
              name="goalTimeline"
              value={formData.goalTimeline}
              onChange={handleChange}
              className="w-full p-3 mb-4 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select a timeline</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="More than 5 years">More than 5 years</option>
            </select>
          </div>
        )}

        {/* Page 2 */}
        {page === 2 && (
          <div>
            <label className="block text-gray-400 mb-2">How would you feel if the value of your investments dropped by 20% in a short period?</label>
            <select
              name="riskTolerance"
              value={formData.riskTolerance}
              onChange={handleChange}
              className="w-full p-3 mb-4 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select your risk tolerance</option>
              <option value="Low">Very uncomfortable</option>
              <option value="Medium">Slightly uncomfortable</option>
              <option value="High">Not concerned</option>
            </select>

            <label className="block text-gray-400 mb-2">How much of your total savings are you willing to invest in riskier assets like stocks?</label>
            <select
              name="savingsInvestment"
              value={formData.savingsInvestment}
              onChange={handleChange}
              className="w-full p-3 mb-4 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select an amount</option>
              <option value="Less than 10%">Less than 10%</option>
              <option value="10-25%">10-25%</option>
              <option value="25-50%">25-50%</option>
              <option value="More than 50%">More than 50%</option>
            </select>
          </div>
        )}

        {/* Page 3 */}
        {/* {page === 3 && (
          <div>
            <label className="block text-gray-400 mb-4">What car do you want to buy?</label>
            <div className="flex justify-around mb-10">
              {[
                { label: 'Volkswagen', src: NanoIcon },
                { label: 'Tesla', src: BeemerIcon },
                { label: 'Porsche', src: RRIcon },
              ].map(({ label, src }) => (
                <label key={label}>
                  <input
                    type="radio"
                    name="carChoice"
                    value={label}
                    checked={formData.carChoice === label}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <img
                    src={src}
                    alt={label}
                    className={`w-16 h-16 cursor-pointer transition duration-300 transform hover:scale-110 ${
                      formData.carChoice === label ? 'ring-4 ring-green-500 ring-opacity-50' : ''
                    }`}
                  />
                </label>
              ))}
            </div>
          </div>
        )} */}

        {/* Page 4 */}
        {page === 3 && (
          <div>
            <label className="block text-gray-400 mb-4">What is the primary purpose of this investment?</label>
            <div className="flex justify-around mb-10">
              {[
                { label: 'hospital', src: hospital },
                { label: 'home', src: home },
                { label: 'Money', src: Money },
              ].map(({ label, src }) => (
                <label key={label}>
                  <input
                    type="radio"
                    name="houseChoice"
                    value={label}
                    checked={formData.houseChoice === label}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <img
                    src={src}
                    alt={label}
                    className={`w-16 h-16 cursor-pointer transition duration-300 transform hover:scale-110 ${
                      formData.houseChoice === label ? 'ring-4 ring-green-500 ring-opacity-50' : ''
                    }`}
                  />
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Page 5 */}
        {/* {page === 4 && (
          <div>
            <label className="block text-gray-400 mb-2">Do you want to import your Dmat account?</label>
            <div className="flex">
              <label className="mr-4">
                <input
                  type="radio"
                  name="dmatAccount"
                  value="yes"
                  checked={formData.dmatAccount === 'yes'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="dmatAccount"
                  value="no"
                  checked={formData.dmatAccount === 'no'}
                  onChange={handleChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
        )} */}

        <div className="flex justify-between mt-6">
          {page > 1 && (
            <button
              type="button"
              onClick={prevPage}
              className="px-4 py-2 bg-gray-600 text-gray-200 rounded hover:bg-gray-500"
            >
              Previous
            </button>
          )}
          {page < 3 && (
            <button
              type="button"
              onClick={nextPage}
              className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Next
            </button>
          )}
          {page === 3 && (
            <button
              type="submit"
              className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FinancialQuestionsMultiPage;

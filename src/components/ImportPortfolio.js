import React from "react";
import Dhan from "../assets/GrowwLogo.png";
import GrowwImg from "../assets/dhanLogo.jpg";
import { useNavigate } from "react-router-dom";

const brokers = [
  { name: "5 Paisa", logo: GrowwImg },
  { name: "Angel One", logo: GrowwImg },
  { name: "Dhan", logo: Dhan },
  { name: "Groww", logo: GrowwImg },
  { name: "Motilal Oswal", logo: GrowwImg },
];

const ImportPortfolio = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 to-indigo-900">
      <div className="flex flex-col items-center justify-center py-14 bg-gradient-to-br from-indigo-100 to-white shadow-2xl rounded-3xl p-10 max-w-4xl w-full transform transition-all duration-300 hover:scale-105">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 drop-shadow-md">
          Import Your Portfolio in One Click
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {brokers.map((broker, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl hover:bg-indigo-50 transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <img
                src={broker.logo}
                alt={broker.name}
                className="h-16 w-16 mb-4 rounded-full shadow-md"
              />
              <span className="text-lg font-semibold text-gray-800">{broker.name}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/")}
          className="px-12 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-xl font-semibold hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-purple-400 transition-transform transform hover:scale-110 shadow-lg"
        >
          Import Portfolio
        </button>

        <p className="text-gray-600 mt-6 text-md text-center">
          <strong>Note:</strong> Your trust is our priority. Rest assured, we do not store any of your broker's user details.
        </p>
      </div>
    </div>
  );
};

export default ImportPortfolio;

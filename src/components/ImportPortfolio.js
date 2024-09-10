import React from "react";

const brokers = [
  { name: "5 Paisa", logo: "path_to_5paisa_logo" },
  { name: "Angel One", logo: "path_to_angelone_logo" },
  { name: "Dhan", logo: "path_to_dhan_logo" },
  { name: "Groww", logo: "path_to_groww_logo" },
  { name: "IIFL", logo: "path_to_iifl_logo" },
  { name: "Motilal Oswal", logo: "path_to_motilal_oswal_logo" },
];

const ImportPortfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gradient-to-br from-gray-50 to-indigo-100">
      <h2 className="text-3xl font-bold mb-6">Import in one click</h2>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 mb-8">
        {brokers.map((broker, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img src={broker.logo} alt={broker.name} className="h-12 w-12 mb-2" />
            <span className="text-sm font-medium text-gray-700">{broker.name}</span>
          </div>
        ))}
      </div>

      <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform transform hover:scale-105">
        Import Portfolio
      </button>

      <p className="text-gray-500 mt-4 text-sm">
        <strong>Note:</strong> Your trust is our priority. Rest assured, we do not store any of your broker's user details.
      </p>
    </div>
  );
};

export default ImportPortfolio;

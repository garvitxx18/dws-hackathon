import React from "react";
import imageUrl from "../assets/f12.png"; // Assuming this is the path to your image
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center bg-black p-30 text-center space-y-6 flex-grow">
        <h1 className="text-5xl font-bold text-white pt-12">
          Let’s Start Investing Toward Your Dream Car
        </h1>
        <p>Opportunity is missed by most people because it is dressed in overalls and looks like work.</p>
        <button onClick={()=>{navigate("/login")}} className="px-8 py-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform transform hover:scale-105">
          Get Started
        </button>
    
      </div>

      {/* Car Photo Section */}
      <div className="flex items-center justify-center bg-gray-800 h-auto">
        <div className="w-full h-full rounded-lg flex items-center justify-center">
          <img
            src={imageUrl}
            alt="Car"
            className="w-full object-cover rounded-lg scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

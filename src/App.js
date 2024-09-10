import logo from './logo.svg';
import './App.css';
import FinancialGoalsForm from './components/FinancialQuestionsMultiPage';
import LoginPage from './components/Login';
import ImportPortfolio from './components/ImportPortfolio';
import FinAcademy from './components/FinAcademy';
import FinancialQuestionsMultiPage from './components/FinancialQuestionsMultiPage';
import Home from './components/home';
import DWSLogo from "./assets/DWS.svg"
import { Routes, BrowserRouter, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="bg-black">
      <nav className="flex justify-between items-center bg-black px-8 py-2 shadow-md h-46 w-full mb-6 fixed top-0 z-50">
        <div className="flex items-center">
        <div className="bg-black rounded-full h-30 w-20 flex items-center justify-center">
          </div>
          <div className="bg-black rounded-full h-20 w-20 flex items-center justify-center">
            <img 
              onClick={()=>{window.location.href = "http://localhost:3000";}}
              src={DWSLogo}
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="flex space-x-8">
          <a href="/about-us" className="text-base font-medium text-gray-300 hover:text-white transition duration-200">
            About Us
          </a>
          <a href="/academy" className="text-base font-medium text-gray-300 hover:text-white transition duration-200">
            FinAcademy
          </a>
          <a href="/analytics" className="text-base font-medium text-gray-300 hover:text-white transition duration-200">
            Analytics
          </a>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/question" element={<FinancialQuestionsMultiPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/academy" element={<FinAcademy />} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

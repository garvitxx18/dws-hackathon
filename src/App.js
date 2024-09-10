import logo from './logo.svg';
import './App.css';
import FinancialGoalsForm from './components/FinancialQuestionsMultiPage';
import LoginPage from './components/Login';
import ImportPortfolio from './components/ImportPortfolio';
import FinancialQuestionsMultiPage from './components/FinancialQuestionsMultiPage';
import FinAcademy from './components/FinAcademy';
import Home from './components/home';
import DWSLogo from "./assets/DWS.svg"
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-900">
      <nav className="flex justify-between items-center bg-gray-800 p-4 shadow-md rounded-lg w-full mb-6 fixed">
        <div className="flex items-center">
          <div className="bg-gray-700 rounded-full h-12 w-12 flex items-center justify-center">
            <img 
              src={DWSLogo}
              alt="Logo"
              className="h-8 w-8"
            />
          </div>
        </div>
        <a href="/about-us" className="text-lg font-medium text-gray-300">
          About Us
        </a>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<FinancialQuestionsMultiPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/importPortfolio" element={<ImportPortfolio/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

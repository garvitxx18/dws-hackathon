import logo from './logo.svg';
import './App.css';
import FinancialGoalsForm from './components/FinancialGoalsForm';
import LoginPage from './components/Login';
import ImportPortfolio from './components/ImportPortfolio';

function App() {
  return (
    <>
    <LoginPage/>
    <ImportPortfolio/>
    <FinancialGoalsForm/>
    </>
  );
}

export default App;

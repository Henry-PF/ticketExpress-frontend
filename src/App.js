import Home from '../src/components/LandingPage/Home/Home'
import Summary from './components/SummaryPage/Summary/Summary';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Detail/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/summary" element={<Summary />}/>
    </Routes>
  );
}

export default App;

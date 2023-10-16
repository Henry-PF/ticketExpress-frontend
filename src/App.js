import { Route, Routes } from 'react-router-dom';
import Home from '../src/components/LandingPage/Home/Home'
import Summary from './components/SummaryPage/Summary/Summary';
import Register from './components/Register/Register';
import CreateRoute from './components/CreateRoute/CreateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path="/summary" element={<Summary />}/>
        <Route path='/create_route' element={<CreateRoute />} />
      </Routes>
    </div>
  );
}

export default App;

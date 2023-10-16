import { Route, Routes } from 'react-router';
import Home from '../src/components/LandingPage/Home/Home'
import Register from './components/Register/Register';
import CreateRoute from './components/CreateRoute/CreateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create_route' element={<CreateRoute />} />
      </Routes>
    </div>
  );
}

export default App;

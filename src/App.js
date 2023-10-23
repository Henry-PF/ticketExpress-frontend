import { Route, Routes } from 'react-router-dom';
import Home from '../src/components/LandingPage/Home/Home'
import Trips from './components/Detail/Trips/Trips'
import Summary from './components/SummaryPage/Summary/Summary';
import Register from './components/Register/Register';
import CreateRoute from './components/CreateRoute/CreateRoute';
import './App.css';
import Selection from './Selection/Selection';
import { Route, Routes} from "react-router-dom";
import CreateCompany from './CreateCompany/CreateCompany';
import CreateBus from './CreateBus/CreateBus';
import CreateRoute from './CreateRoute/CreateRoute';
import ModifyCompany from './ModifyCompany/ModifyCompany';
import ModifyBus from './ModifyBus/ModifyBus';
import ModifyRoute from './ModifyRoute/ModifyRoute';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Selection />} />
          <Route path='/create_company' element={<CreateCompany />} />
          <Route path='/create_bus' element={<CreateBus />} />
          <Route path='/create_route' element={<CreateRoute />} />
          <Route path='/modify_company' element={<ModifyCompany />} />
          <Route path='/modify_bus' element={<ModifyBus />} />
          <Route path='/modify_route' element={<ModifyRoute />} />
          <Route exact path='/results' element={<Trips />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path="/ticket_detail/:id" element={<Summary />} />
          <Route exact path='/create_route' element={<CreateRoute />} />
        </Routes>
      </div>
  );
}

export default App;

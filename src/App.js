import logo from './logo.svg';
import './App.css';
import Selection from './Selection/Selection';
import { Route, Routes} from "react-router-dom";
import CreateCompany from './CreateCompany/CreateCompany';
import CreateBus from './CreateBus/CreateBus';
import CreateRoute from './CreateRoute/CreateRoute';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Selection />} />
          <Route path='/create_company' element={<CreateCompany />} />
          <Route path='/create_bus' element={<CreateBus />} />
          <Route path='/create_route' element={<CreateRoute />} />
        </Routes>
      </div>
  );
}

export default App;

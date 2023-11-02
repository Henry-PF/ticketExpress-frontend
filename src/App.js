import { Route, Routes } from "react-router-dom";
import Home from "../src/components/LandingPage/Home/Home";
import Trips from "./components/Detail/Trips/Trips";
import Summary from "./components/SummaryPage/Summary/Summary";
import Reviews from "./components/LandingPage/Reviews/Reviews";
import Register from "./components/Register/Register";
import "./App.css";
import UserPanel from "./components/UserPanel/UserPanel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/reviews" element={<Reviews />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/results" element={<Trips />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/ticket_detail/:id" element={<Summary />} />
        <Route exact path="/user" element={<UserPanel />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "../src/components/LandingPage/Home/Home";
import Trips from "./components/Detail/Trips/Trips";
import Summary from "./components/SummaryPage/Summary/Summary";
import Register from "./components/Register/Register";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/results" element={<Trips />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/ticket_detail/:id" element={<Summary />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "../src/components/LandingPage/Home/Home";
import Trips from "./components/Detail/Trips/Trips";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import Reviews from "./components/LandingPage/Reviews/Reviews";
import Register from "./components/Register/Register";
import UserPanel from "./components/UserPanel/UserPanel";
import ReviewForm from "./components/LandingPage/Reviews/ReviewForm/ReviewForm";
import Summary from "./components/SummaryPage/Summary/Summary";
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/results" element={<Trips />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/ticket_detail/:origen/:destino/:fecha_salida/:hora_salida/:hora_llegada/:precio" element={<Summary />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/user" element={<UserPanel />} />
        <Route exact path="/reviews" element={<ReviewForm />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "../src/components/LandingPage/Home/Home";
import Trips from "./components/Detail/Trips/Trips";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import Reviews from "./components/LandingPage/Reviews/Reviews";
import Register from "./components/Register/Register";
import UserPanel from "./components/UserPanel/UserPanel";
import "./App.css";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import TicketDetail from "./components/SummaryPage/TicketDetail/TicketDetail";
import Summary from "./components/SummaryPage/Summary/Summary";

function App() {
  return (
    <div className="App">
      <Routes>


        <Route exact path="/reviews" element={<Reviews />} />

        <Route exact path="/" element={<Home />} />
        <Route exact path="/results" element={<Trips />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/ticket_detail/:origen/:destino/:fecha_salida/:hora_salida/:hora_llegada/:precio" element={<Summary />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/user" element={<UserPanel />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;

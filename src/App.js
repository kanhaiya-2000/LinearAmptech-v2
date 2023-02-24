import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs, Home, Team, Innovations, NewsEvents } from "./Pages";
import { SDR, RFPower, PowerAmp, RFlinear } from "./Pages/products";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/innovations" exact element={<Innovations />} />
          <Route path="/news-and-events" exact element={<NewsEvents />} />
          <Route path="/about-us" exact element={<AboutUs />} />

          {/* ************PRODUCT*********************** */}
          <Route
            path="/products/rf-power-amplifiers"
            exact
            element={<RFPower />}
          />
          <Route
            path="/products/software-defined-radio"
            exact
            element={<SDR />}
          />
          <Route
            path="/products/rf-linear-nonlinear-characterization"
            exact
            element={<RFlinear />}
          />
          <Route
            path="/products/power-amplifier-linearization"
            exact
            element={<PowerAmp />}
          />
          <Route path="/team" exact element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

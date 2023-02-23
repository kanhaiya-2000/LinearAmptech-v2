import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs, Home } from "./Pages";
import { SDR, RFPower, PowerAmp, RFlinear } from "./Pages/products";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;

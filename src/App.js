import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs, Home, Team } from "./Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/team" exact element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

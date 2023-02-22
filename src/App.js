import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs, Home } from "./Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/aboutus" exact element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

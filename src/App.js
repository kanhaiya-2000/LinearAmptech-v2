import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs, Home, Team, Innovations, NewsEvents } from "./Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/innovations" exact element={<Innovations />} />
          <Route path="/news-and-events" exact element={<NewsEvents />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/team" exact element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

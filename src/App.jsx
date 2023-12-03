import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, History, Schedule } from "./Pages";
import { NavBar } from "./Components";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/History" element={<History />} />
            <Route path="/Schedule" element={<Schedule />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

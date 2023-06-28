import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import MovieComponent from "./components/MovieComponent";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:movieId" element={<MovieComponent />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

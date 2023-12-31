import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContentPage from "./components/ContentPage";
import MovieComponent from "./components/MovieComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/movies" element={<ContentPage type="movie" />} />
          <Route path="/tv" element={<ContentPage type="tv" />} />
          <Route path="/:type/:movieId" element={<MovieComponent />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

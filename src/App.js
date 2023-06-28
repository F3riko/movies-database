import React from "react";
import Movies from "./components/Movies";
import MovieComponent from "./components/MovieComponent";
import "./App.css";

function App() {
  return (
    // <Movies />
    <MovieComponent movieId={255} />
  );
}

export default App;

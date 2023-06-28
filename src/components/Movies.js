import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import "bootstrap/dist/css/bootstrap.min.css";

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=54afa970f66b8f17236a011ce7bf1603`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <Gallery movies={movies} />
    </div>
  );
}

export default Movie;

import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import ContentPreview from "./ContentPreview";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function ContentPage({ type }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/${type}?api_key=54afa970f66b8f17236a011ce7bf1603`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [type]);

  return (
    <div>
      {/* <h1>{`${type.charAt(0).toUpperCase()}${type.slice(1)}`}</h1> */}
      <Navigation />
      <Gallery type={type} movies={movies} />
      {movies.map((movie) => {
        return <ContentPreview movie={movie} type={type}/>;
      })}
    </div>
  );
}

export default ContentPage;

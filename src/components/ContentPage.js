import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import ContentPreview from "./ContentPreview";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function ContentPage({ type }) {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/${type}?api_key=54afa970f66b8f17236a011ce7bf1603&query=${searchQuery}`
        );
        const data = await response.json();
        setSearchMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [searchQuery, type]);

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
    setSearchMovies([]);
  }, [type]);

  return (
    <div>
      <Navigation handleSearchQuery={handleSearchQuery} />
      <Gallery type={type} movies={movies} />
      {searchMovies.length === 0
        ? movies.map((movie) => <ContentPreview movie={movie} type={type} />)
        : searchMovies.map((movie) => (
            <ContentPreview movie={movie} type={type} />
          ))}
    </div>
  );
}

export default ContentPage;

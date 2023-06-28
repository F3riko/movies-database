import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=54afa970f66b8f17236a011ce7bf1603&query=${query}`
        );
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <h2>Search Results</h2>
      {results.map((result) => (
        <div key={result.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${result.poster_path}`}
            alt={result.title || result.name}
          />
          <h3>{result.title || result.name}</h3>
          <p>Rating: {result.vote_average}</p>
          <p>{result.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;

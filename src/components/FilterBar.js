import React, { useState, useEffect } from "react";

const FilterBar = ({ type, moviesToFilter, setMoviesAfterFilter }) => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [rating, setRating] = useState(0);
  const [year, setYear] = useState("");

  useEffect(() => {
    setSelectedGenre("");
    setRating(0);
    setYear("");
  }, [type]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=54afa970f66b8f17236a011ce7bf1603`
        );
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenres();
  }, []);

  const [genres, setGenres] = useState([]);

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const filterMovies = () => {
    setMoviesAfterFilter([false]);
    const filteredMovies = moviesToFilter.filter((movie) => {
      let matchGenre = true;
      let matchRating = true;
      let matchYear = true;

      if (selectedGenre !== "") {
        matchGenre = movie.genre_ids.includes(parseInt(selectedGenre));
      }

      if (rating > 0) {
        matchRating = movie.vote_average >= rating;
      }

      if (year !== "") {
        matchYear = movie.release_date && movie.release_date.startsWith(year);
      }

      return matchGenre && matchRating && matchYear;
    });

    if (filteredMovies.length === 0) {
      return;
    }

    setMoviesAfterFilter(filteredMovies);
  };

  return (
    <div className="container">
      <div className="row p-5 align-items-center">
        <div className="col">
          <div className="form-group text-center">
            <label htmlFor="genre">Genre</label>
            <select
              className="form-control"
              id="genre"
              value={selectedGenre}
              onChange={handleGenreChange}
            >
              <option value="">All Genres</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col">
          <div className="form-group text-center d-flex flex-column align-items-center">
            <label htmlFor="rating" style={{ marginBottom: "10px" }}>
              Rating: {rating}
            </label>
            <input
              type="range"
              min={0}
              max={10}
              value={rating}
              onChange={handleRatingChange}
              className="form-control-range d-block"
              id="rating"
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group text-center">
            <label htmlFor="releaseYear">Release Year</label>
            <input
              type="number"
              value={year}
              onChange={handleYearChange}
              className="form-control"
              id="releaseYear"
              min={1900}
              max={2030}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group text-center">
            <button className="btn btn-primary" onClick={filterMovies}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

import React, { useEffect, useState } from 'react';

const MovieComponent = ({ movieId }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=54afa970f66b8f17236a011ce7bf1603`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  const { title, overview, poster_path, release_date, vote_average, runtime } = movie;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <h2>{title}</h2>
          <p>{overview}</p>
          <p>
            <strong>Release Date:</strong> {release_date}
          </p>
          <p>
            <strong>Rating:</strong> {vote_average}/10
          </p>
          <p>
            <strong>Runtime:</strong> {runtime} minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieComponent = () => {
  const [movie, setMovie] = useState(null);
  const [trailers, setTrailers] = useState([]);
  const [cast, setCast] = useState([]);
  const { movieId, type } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/${type}/${movieId}?api_key=54afa970f66b8f17236a011ce7bf1603`
        );
        const movieData = await movieResponse.json();
        setMovie(movieData);

        const trailerResponse = await fetch(
          `https://api.themoviedb.org/3/${type}/${movieId}/videos?api_key=54afa970f66b8f17236a011ce7bf1603`
        );
        const trailerData = await trailerResponse.json();
        setTrailers(trailerData.results.slice(0, 5));

        const castResponse = await fetch(
          `https://api.themoviedb.org/3/${type}/${movieId}/credits?api_key=54afa970f66b8f17236a011ce7bf1603`
        );
        const castData = await castResponse.json();
        setCast(castData.cast.slice(0, 10));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [movieId, type]);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  if (Object.keys(movie).length === 0) {
    return <h1>Not found</h1>;
  }

  const { title, overview, poster_path, release_date, vote_average, runtime } =
    movie;

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
      <h3>Cast</h3>
      <div className="row">
        {cast.map((actor) => (
          actor.profile_path && (
            <div key={actor.id} className="col-md-2 mb-3">
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
                className="img-fluid rounded-circle"
              />
              <p>{actor.name}</p>
            </div>
          )
        ))}
      </div>
      <h3>Trailers</h3>
      <ul className="list-group">
        {trailers.map((trailer) => (
          <li key={trailer.key} className="list-group-item">
            <a
              href={`https://www.youtube.com/watch?v=${trailer.key}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {trailer.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieComponent;
  
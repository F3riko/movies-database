import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Gallery({ movies }) {
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-3" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="Card cap"
                />
                <div className="card-body">
                  <p className="card-text">Some info about the film</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

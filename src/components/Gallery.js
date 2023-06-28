import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Gallery({ movies }) {
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <div className="card" style={{ width: "10rem" }}>
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="Card image cap"
            />
            <div className="card-body">
              <p classNamen="card-text">
                Some info about the film
                {/* Integrate API here later */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

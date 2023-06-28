import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Gallery({ movies, type }) {
  return (
    <div className="container d-flex p-3 text-center" style={{overflowX: "auto"}}>
      <div className='d-flex flex-row'>
        {movies.map((movie) => (
          <div className="col-md-3 mb-3 card-container-movie" key={movie.id}>
            <Link to={`/${type}/${movie.id}`}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="Card cap"
                />
                <div className="card-body">
                  <p className="card-text">{movie.title}</p>
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

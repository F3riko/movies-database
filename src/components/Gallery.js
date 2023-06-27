import React from "react";

function Gallery({ movies }) {
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <div class="card" style={{ width: "18rem" }}>
            <img
              class="card-img-top"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

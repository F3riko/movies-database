import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ContentPreview = ({ movie, type }) => {
  const { id, title, poster_path, overview, vote_average } = movie;

  return (
    <div className="container d-flex justify-content-center">
      <div className="card mb-3" style={{ width: "80%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={title}
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{overview}</p>
              <p className="card-text">
                Rating: {vote_average}/10
              </p>
              <Link to={`/${type}/${id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPreview;

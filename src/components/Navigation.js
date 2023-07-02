import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ handleSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      handleSearchQuery(searchQuery);
      setSearchQuery("")
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">F Y M - find your movie!</div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tv">
              TV Shows
            </Link>
          </li>
        </ul>
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="input-group">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;

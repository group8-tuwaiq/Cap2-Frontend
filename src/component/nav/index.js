import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  const location = useLocation();
  let welcome = "";
  let hide = false;
  if (location.state) {
    console.log("There is a user");
    welcome = "Welcome " + location.state;
    hide = true;
  }
  return (
    <div>
      <div class="header-dark">
        <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
          <div class="container">
            <Link class="navbar-brand" to="books">
              Books
            </Link>
            <button
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navcol-1"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse d-flex justify-content-between"
              id="navcol-1"
            >
              <ul class="nav navbar-nav">
                <li class="nav-item" role="presentation">
                  <Link class="nav-link" to="home">
                    Home
                  </Link>
                </li>
                <li class="nav-item" role="presentation">
                  <Link class="nav-link" to="books">
                    Books
                  </Link>
                </li>
                <li class="nav-item" role="presentation">
                  <Link class="nav-link" to="Films">
                    Movies
                  </Link>
                </li>
                <li class="nav-item" role="presentation">
                  <Link class="nav-link" to="audio">
                    Audio
                  </Link>
                </li>
                <li class="nav-item" role="presentation">
                  <Link class="nav-link" to="favourite">
                  Favourite
                  </Link>
                </li>
              </ul>
              <form class="form-inline mr-auto" target="_self">
                <div class="form-group">
                  <label for="search-field">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </label>
                  <input
                    class="form-control search-field"
                    type="search"
                    name="search"
                    id="search-field"
                  />
                </div>
              </form>
              {welcome}
              <div>
                {!hide ? (
                  <Link className="btn btn-light action-button mx-4" to="login">
                    Login
                  </Link>
                ) : (
                  ""
                )}
                {!hide ? (
                  <Link className="btn btn-light action-button" to="register">
                    Sign Up
                  </Link>
                ) : (
                  ""
                )}
                {hide ? (
                  <Link className="btn btn-light action-button" to="home">
                    Log out
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </nav>
        <div class="container hero">
          <div class="row"></div>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Nav;

import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  const location = useLocation();
  let welcome =''
  let hide = false;
    if(location.state&&location.state.userName!=undefined){
      console.log("There is a user");
      welcome = "Welcome " + location.state.userName
      hide = true;
    }
  return (
    <div>
      <div className="header-dark">
        <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
          <div className="container d-flex">
            <Link className="navbar-brand" to="/">
            Sweet Spot
            </Link>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-flex justify-content-between"
              id="navcol-1"
            >
              <ul className="nav navbar-nav mx-5" style={{fontSize:'1.1vw'}}>
                <li className="nav-item " role="presentation">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link className="nav-link" to="books">
                    Ebooks
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link className="nav-link" to="Films">
                    Movies
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link className="nav-link" to="audio">
                    Audio
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link className="nav-link" to="favourite">
                  Favourite
                  </Link>
                </li>
              </ul>

            <b style={{fontSize:'1.3rem'}}>{welcome}</b>
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
                  <Link  className="btn btn-light action-button" to="/">
                    Log out 
                  </Link>
                  
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </nav>

        <br></br>
      </div>
    </div>
  );
};

export default Nav;

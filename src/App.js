import React, { useState, useEffect } from "react";
import axios from "axios";

import Register from "./component/register";
import Login from "./component/login";
import Home from "./component/home";
import About from "./component/about us";
import Books from "./component/books";
import Films from "./component/Films";
import Card from "./component/card";
import Nav from "./component/nav";
import Audio from "./component/audio";
import Favorite from "./component/favourite";
import Footer from "./component/footer"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

function App() {
  const [Movies, setMovies] = useState([]);
  const getMyAPI = async () => {
    const response = await axios.get("http://localhost:4000/movies");
    setMovies(response.data.results);
  };

  useEffect(() => {
    getMyAPI();
  }, []);

  const getSearched = async (e) => {
    if (e.key === "Enter") {
      let myTerm = e.target.value;
      const response = await axios.get(
        `http://localhost:4000/movies/search/${myTerm}`
      );
      setMovies(response.data.results);
    }
  };

  return (
    <div className="App">
      {/* {console.log(Movies)}
      <input onKeyDown={getSearched} autoFocus id="search" placeholder="search for something..." type="text"/> */}
      {/* {Movies.map((elem) => {
        return (
          <>
            <li>{elem.trackName}</li>
            <img src={elem.artworkUrl100} />
          </>
        );
      })} */}
      {/* <p>react working</p> */}
      {/* <p>{Movies}</p> */}
      {/* <Link to="/home"><p>Home</p></Link>
      <Link to="/music"><p>Music</p></Link>
      <Link to="/login"><p>Login</p></Link>
      <Link to="/register"><p>Register</p></Link>

      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/music" element={<Music />} />
        <Route exact path="/card/:id" element={<Card />} />

        <Route
          path="*"
          render={() => {
            return <h1>404</h1>;
          }}
        />
      </Routes> */}

      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/Films" element={<Films />} />
        <Route exact path="/Card/:id" element={<Card />} />
        <Route exact path="/audio" element={<Audio />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/favourite" element={<Favorite />} />
        <Route
          path="*"
          render={() => {
            return <h1>404</h1>;
          }}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

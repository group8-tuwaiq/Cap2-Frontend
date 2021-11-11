import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./component/home";
import About from "./component/about us";
import Contact from "./component/contact us";
import Films from "./component/Films";
import Card from "./component/card";
import Nav from "./component/nav";
import 'bootstrap/dist/css/bootstrap.min.css';

//////////////////////

function Movie() {
  const [Movies, setMovies] = useState([]);
  const getMyAPI = async () => {
    const response = await axios.get("http://localhost:4000/movies");
    setMovies(response.data.results);
  };

  useEffect(() => {
    getMyAPI();
  }, []);

  console.log(typeof getMyAPI);

  return (
    <div className="App">
      {Movies.map((elem) => {
        return (
          <>
            <li>{elem.trackName}</li>
            {/* <img src={elem.artworkUrl100} /> */}
          </>
        );
      })}
      <p>react working</p>
      {/* { <p>{Movies}</p> } */}
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/Films" element={<Films />} />
        <Route exact path="/Card/:id" element={<Card />} />
        <Route
          path="*"
          render={() => {
            return <h1>404</h1>;
          }}
        />
      </Routes>
    </div>
  );
};

export default App;

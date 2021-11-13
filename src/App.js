import React from "react";
import { Routes, Route } from "react-router-dom";
// import axios from "axios"; { useState, useEffect }
import "./App.css";
import Home from "./component/home";
import About from "./component/about us";
import Books from "./component/books";
import Films from "./component/Films";
import Card from "./component/card";
import Nav from "./component/nav";
import Audio from "./component/audio";
import Footer from "./component/footer"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/Films" element={<Films />} />
        <Route exact path="/Card/:id" element={<Card />} /> 
        <Route exact path="/audio/" element={<Audio />} />
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
};

export default App;

import React, { useState, useEffect } from "react";
import Register from "./component/register";
import Login from "./component/login";
import Home from "./component/home";
import Books from "./component/books";
import Films from "./component/Films";
import Card from "./component/card";
import Nav from "./component/nav";
import Audio from "./component/audio";
import Favorite from "./component/favourite";
import Footer from "./component/footer";
import Team from "./component/team";
import VideoCard from "./component/videoCard";
import AudioCard from "./component/audioCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/Films" element={<Films />} />
        <Route exact path="/Card/:id" element={<Card />} />
        <Route exact path="/audio" element={<Audio />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/favourite" element={<Favorite />} />
        <Route exact path="/team/" element={<Team />} />
        <Route exact path="/videocard/:id" element={<VideoCard />} />
        <Route exact path="/audiocard/:id" element={<AudioCard />} />
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

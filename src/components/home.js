import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import axios from "axios";

const Home = () => {
  const location = useLocation();
  console.log(location);
  const [Movies, setMovies] = useState([]);
  const getMyAPI = async () => {
    const response = await axios.get("http://localhost:4000/movies");
    setMovies(response.data.results);
  };

  useEffect(() => {
    getMyAPI();
  }, []);

  return (
    <div>
      {Movies.map((elem) => {
        return (
          <>
          <p>Welcome {location.state}</p>
            <li>{elem.trackName}</li>
            <img src={elem.artworkUrl100} />
          </>
        );
      })}
    </div>
  );
};

export default Home;

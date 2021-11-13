import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Music = () => {
  const navigate = useNavigate();

  const [Movies, setMovies] = useState([]);
  const api = "http://localhost:4000/movies/music"
  const getMyAPI = async () => {
    const response = await axios.get(api);
    setMovies(response.data.results);
    console.log(response.data.results);
  };

  useEffect(() => {
    getMyAPI();
  }, []);

  const specificCard = (n) => {
    navigate(`/card/${n}`,{ state: api });
  };

  return (
    <div>
      {Movies.map((elem) => {
        return (
          <div
            onClick={() => {
              specificCard(elem.trackId);
            }}
          >
            <li>{elem.trackName}</li>
            <img src={elem.artworkUrl100} />
          </div>
        );
      })}
    </div>
  );
};

export default Music;

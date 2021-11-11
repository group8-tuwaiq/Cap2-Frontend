import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
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
            <img src={elem.artworkUrl100} />
          </>
        );
      })}
      <p>react working</p>
      {/* <p>{Movies}</p> */}
    </div>
  );
}

export default App;

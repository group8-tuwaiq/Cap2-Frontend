import { React, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import axios from "axios";

const Card = () => {
  const location = useLocation();

  const [Movies, setMovies] = useState([]);
  const [trackId, settrackId] = useState();
  let myItem = {};
  const { id } = useParams();
  const getMyAPI = async () => {
    const response = await axios.get(location.state);
    myItem = response.data.results.find((item) => {
      return Number(id) === item.trackId;
    });
    setMovies(myItem);
    console.log(myItem);
  };

  useEffect(() => {
    getMyAPI();
  }, []);

  //   const myItem = Movies.find((item) => {
  //     return Number(id) === item.trackId;
  //   });

  console.log(myItem);

  return (
    <div>
      <h1>Card</h1>
      <p>{Movies.trackName}</p>
    </div>
  );
};

export default Card;

import { Button, Card, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const Films = () => {
  const navigate = useNavigate();

  const [Movies, setMovies] = useState([]);
  const [api, setapi] = useState("http://localhost:4000/movies");
  const [myTerm, setmyTerm] = useState("action")
  const getMyAPI = async () => {
    const response = await axios.get(api);
    setMovies(response.data.results);
  };

  useEffect(() => {
    getMyAPI();
  }, []);

  const specificCard = (n) => {
    navigate(`/card/${n}`, { state: api });
  };
  
  
  const getSearched = async (e) => {
    if (e.key === "Enter") {
      let passTerm = e.target.value
      setapi(`http://localhost:4000/movies/search/${passTerm}`);
      const response = await axios.get(
        `http://localhost:4000/movies/search/${passTerm}`
      );
      setMovies(response.data.results);
      setmyTerm(e.target.value)
    }
  };

  const goFavourite = async (id) => {
    const addToFavourite = await axios.post(
      `http://localhost:4000/movies/favourite/${id}/movie/${myTerm}`
    );
    console.log("add response ",addToFavourite.data);
  };

  return (
    <>
      <Container>
        <h1 className="text-center p-5 bg-dark text-white">Movies</h1>
        <Col className="d-flex mx-5 m-3">
          <FormControl
            onKeyDown={getSearched}
            type="search"
            placeholder="Search for something..."
            className="search"
          />
          <Button className="bg-dark mx-2 px-4 py-2">Search</Button>
        </Col>
        <Row xs={2} md={3} className="bg-dark m-0">
          {Movies.map((elem) => {
            return (
              <>
                <Col>
                  <Card className="text-center m-5">
                    <Card.Img
                      variant="top"
                      src={elem.artworkUrl100}
                      height="350"
                      width="250"
                      alt="no image"
                    />
                    <Card.Body>
                      <Card.Title>{elem.trackName}</Card.Title>
                      <Card.Text>{elem.artistName}</Card.Text>
                      <Button
                        variant="danger"
                        onClick={() => {
                          specificCard(elem.trackId);
                        }}
                      >
                        More
                      </Button>
                      <Button variant="light">
                        <svg
                          onClick={() => {
                            goFavourite(elem.trackId);
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="red"
                          class="bi bi-heart-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          />
                        </svg>
                      </Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">{elem.releaseDate}</small>
                    </Card.Footer>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default Films;

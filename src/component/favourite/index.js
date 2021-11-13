import { Button, Card, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const navigate = useNavigate();

  const [Movies, setMovies] = useState([]);
  const [api, setapi] = useState("https://sweetspot-8-back.herokuapp.com/favourite");
//   const [myTerm, setmyTerm] = useState("action");
  const getMyAPI = async () => {
    const response = await axios.get(api);
    console.log(response.data);
    setMovies(response.data);
  };

  useEffect(() => {
    getMyAPI();
  }, []);

  const specificCard = (n) => {
    navigate(`/card/${n}`, { state: api });
  };


const [searchValue, setsearchValue] = useState("")

const results = !searchValue
  ? Movies
  : Movies.filter(item =>
      item.trackName.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );

const searchChanged = (e) => {
  setsearchValue(e.target.value);
  };
  return (
    <>
      <Container className="mb-5">
        <h1 className="text-center p-5 bg-dark text-white">Favourites</h1>
        <Col className="d-flex mx-5 m-3">
          <FormControl
            onKeyUp={searchChanged}
            type="search"
            placeholder="Search for something..."
            className="search"
          />
          <Button className="bg-dark mx-2 px-4 py-2">Search</Button>
        </Col>
        <Row xs={2} md={3} className="bg-dark m-0">
          {results.map((elem, index) => {
            return (
              <div key={index}>
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
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Released {elem.releaseDate.slice(0,10)}</small>
                    </Card.Footer>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default Favorite;

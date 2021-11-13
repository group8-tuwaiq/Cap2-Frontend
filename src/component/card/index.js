import { React, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";

const OneCard = () => {
  const location = useLocation();

  const [Movies, setMovies] = useState([]);
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

  return (
    <div className="cards">
      <Container>
      <CardGroup>
        <Col>
          <Card style={{ margin: "20px auto", width:'70%' }}>
            <Card.Img
              variant="top"
              src={Movies.artworkUrl100}
              height="550px"
              width="250px"
              alt="no image"
            />
            <Card.Body>
              <Card.Title>{Movies.trackName}</Card.Title>
              <Card.Text>{Movies.longDescription}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Download 3 month ago</small>
            </Card.Footer>
          </Card>
        </Col>
      </CardGroup>
      </Container>
    </div>
  );
};

export default OneCard;

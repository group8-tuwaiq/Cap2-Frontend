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
  const [check, setCheck] = useState("");
  const [myTerm, setmyTerm] = useState("action")

  let myItem = {};
  const { id } = useParams();
  const getMyAPI = async () => {
    const response = await axios.get(location.state);
    if (response.data.length) {
      myItem = response.data.find((item) => {
        return Number(id) === item.trackId;
      });
    } else {
      myItem = response.data.results.find((item) => {
        return Number(id) === item.trackId;
      });
      setCheck("d-none");
    }
    setMovies(myItem);
    console.log(myItem);
  };

  useEffect(() => {
    getMyAPI();
  }, []);
  const [btn, setBtn] = useState("Remove from favourite");
  const addOrRemove = async(id) => {
    if (btn == "Remove from favourite") {
      setBtn("Add to favourite");
    } else {
      setBtn("Remove from favourite");
    }
    const addToFavourite = await axios.post(
      `https://sweetspot-8-back.herokuapp.com/favourite/${id}/movie/${myTerm}`
    );
    console.log("add response ",addToFavourite.data);
  };
  return (
    <div className="cards">
      <Container>
        <CardGroup>
          <Col>
            <Card style={{ margin: "20px auto", width: "70%" }}>
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
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Download 3 month ago</small>
                <Button
                  variant="danger"
                  className={check}
                  onClick={() => {
                    addOrRemove(Movies.trackId);
                  }}
                >
                  {btn}
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </CardGroup>
      </Container>
    </div>
  );
};

export default OneCard;

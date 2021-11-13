import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import { Carousel, Row, Col, Button, Card } from "react-bootstrap";
import "./style.css";
// import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  // const navigate = useNavigate();

  const [Movies, setMovies] = useState([]);
  const [Audio, setaudio] = useState([]);
  const getMyAPI = async () => {
    const response = await axios.get("https://sweetspot-8-back.herokuapp.com/search/great");
    setMovies(response.data.results);
  };
  const getMyaudio = async () => {
    const response = await axios.get("https://sweetspot-8-back.herokuapp.com/search/audio");
    setaudio(response.data.results);
  };

  useEffect(() => {
    getMyAPI();
    getMyaudio();
  }, []);

  // const specificCard = (n) => {
  //   navigate(`/card/${n}`, { state: api });
  // };

  return (
    <div>
      <Container>
        <div className="slid">
          <Carousel>
            <Carousel.Item>
              <img
                src="http://www.simbasible.com/wp-content/uploads/2020/04/1-4.gif"
                height="400px"
                width="1500px"
                alt="img"
              />

              <Carousel.Caption>
                <h2>The Harder they Fall 2019</h2>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="https://i.pinimg.com/originals/31/e0/12/31e012b525f9509662d31a107c48db11.gif"
                height="400px"
                width="1500px"
                alt="img"
              />

              <Carousel.Caption>
                <h2>The Fog 2021</h2>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="https://i.pinimg.com/originals/85/f9/44/85f944b8d653ac4cf284ce22b3f5df11.gif"
                height="400px"
                width="1500px"
                alt="img"
              />

              <Carousel.Caption>
                <h2>Pigeon Sat 2014</h2>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="https://c.tenor.com/pMOX7JJ1-ZAAAAAC/blizzard-snowplow.gif"
                height="400px"
                width="1500px"
                alt="img"
              />

              <Carousel.Caption>
                <h2>Children of Men 1999</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <br></br>
        <br></br>
        <div className="h2">
          <h2 style={{ width: "60%" }}>Welcome to Sweet Spots</h2>
        </div>
        <br></br>
        <p style={{ width: "60%", marginLeft: "20%" }}>
          Movies move us like nothing else can, whether they’re scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience. From Netflix to Amazon Prime, and HBO Max to the Criterion
          Channel, here are the best movies coming to each streaming platform
          this month. Warner Bros’ whole “let’s release every single one of our
          2021 Just in time for the release of Sean Baker’s incredible “Red
          Rocket,” Magnolia Selects is celebrating the movie that elevated him
          towards the highest echelons of American indie cinema and
          kick-started.
        </p>
        <br></br>

        <br></br>
        <br></br>
        <div className="h2">
          <h2>Top Reted Movies</h2>
        </div>
        <br></br>
        <div className="App">
          <header className="App-header">
            <CardGroup>
              {Movies.map((elem, index) => {
                return (
                  <div key={index}>
                    {index >= 4 ? (
                      <p></p>
                    ) : (
                      <Card style={({ color: "black" }, { margin: "13px" })}>
                        <Card.Img
                          variant="top"
                          src={elem.artworkUrl100}
                          height="350"
                          width="250"
                          alt="no image"
                        />
                        <Card.Body>
                          <Card.Title
                            style={{ color: "black" }}
                            className="d-flex justify-content-center"
                          >
                            {elem.trackName}
                          </Card.Title>
                          <Card.Text style={{ color: "black" }}>
                            {elem.artistName}
                          </Card.Text>
                          <Button
                            style={{ width: "100%" }}
                            variant="danger"
                            className="d-flex justify-content-center"
                          >
                            Read More
                          </Button>
                        </Card.Body>
                        <Card.Footer
                          style={
                            ({ background: "#ce6363" }, { color: "black" })
                          }
                        >
                          <small className="text-muted d-flex justify-content-center ">
                            Watch Now
                          </small>
                        </Card.Footer>
                      </Card>
                    )}
                  </div>
                );
              })}
            </CardGroup>
          </header>
        </div>

        <br></br>
        <br></br>
        <div className="h2">
          <h2>Top Reted Books</h2>
        </div>
        <br></br>
        <br></br>
        <Row>
          <Col style={{ margin: "20px" }}>
            <Image
              src="https://is1-ssl.mzstatic.com/image/thumb/Publication2/v4/db/fa/f8/dbfaf8df-3a6c-a99a-7169-7c912b775cf0/9781612680187-frontcover.jpg/100x100bb.jpg"
              width="70%"
              alt="no haha"
              rounded
            />
          </Col>
          <Col>
            <p>
              It's been nearly 25 years since Robert Kiyosaki’s Rich Dad Poor
              Dad first made waves in the Personal Finance arena. It has since
              become the #1 Personal Finance book of all time... translated into
              dozens of languages and sold around the world. Rich Dad Poor Dad
              is Robert's story of growing up with two dads — his real father
              and the father of his best friend, his rich dad — and the ways in
              which both men shaped his thoughts about money and investing. The
              book explodes the myth that you need to earn a high income to be
              rich and explains the difference between working for money and
              having your money work for you. 20 Years... 20/20 Hindsight In the
              20th Anniversary Edition of this classic, Robert offers an update
              on what we’ve seen over the past 20 years related to money,
              investing, and the global economy. Sidebars throughout the book
              will take readers “fast forward” — from 1997 to today — as Robert
              assesses how the principles taught by his rich dad have stood the
              test of time. In many ways, the messages of Rich Dad Poor Dad,
              messages that were criticized and challenged two decades ago, are
              more meaningful, relevant and important today than they were 20
              years ago. As always, readers can expect that Robert will be
              candid, insightful. and continue to rock more than a few boats in
              his retrospective. Will there be a few surprises? Count on it.
              Rich Dad Poor Dad. Explodes the myth that you need to earn a high
              income to become rich Challenges the belief that your house is an
              asset Shows parents why they can't rely on the school system to
              teach their kids about money Defines once and for all an asset and
              a liability Teaches you what to teach your kids about money for
              their fuure financial success Rich Dad Poor Dad has sold over 32
              million copies[2] in more than 51 languages across more than 109
              countries, been on the New York Times bestsellers list for over
              six years, launched a series of books and related products; and
              received positive reviews from some critics.
            </p>
          </Col>
        </Row>

        <br></br>
        <br></br>
        <div className="h2">
          <h2>Top Reted Audio </h2>
        </div>
        <br></br>
        <br></br>
        <Row>
          <Col style={{ margin: "20px" }}>
            {" "}
            <CardGroup className="mx-5">
              {Audio.map((elem, index) => {
                return (
                  <div key={index}>
                    {index >= 2 ? (
                      <p></p>
                    ) : (
                      <Card style={({ color: "black" }, { margin: "13px" })}>
                        <Card.Img
                          variant="top"
                          src={elem.artworkUrl100}
                          height="350"
                          width="250"
                          alt="no image"
                        />
                        <Card.Body>
                          <Card.Title
                            style={{ color: "black" }}
                            className="d-flex justify-content-center"
                          >
                            {elem.trackName}
                          </Card.Title>
                          <Card.Text style={{ color: "black" }}>
                            {elem.artistName}
                          </Card.Text>
                          <Button
                            style={{ width: "100%" }}
                            variant="danger"
                            className="d-flex justify-content-center"
                          >
                            Read More
                          </Button>
                        </Card.Body>
                        <Card.Footer
                          style={
                            ({ background: "#ce6363" }, { color: "black" })
                          }
                        >
                          <small className="text-muted d-flex justify-content-center ">
                            Listen Now
                          </small>
                        </Card.Footer>
                      </Card>
                    )}
                  </div>
                );
              })}
            </CardGroup>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
    </div>
  );
};

export default Home;

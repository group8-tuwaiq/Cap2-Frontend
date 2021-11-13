import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import { Carousel, Row, Col, Button, Card } from "react-bootstrap";
import "./style.css";

const Home = () => {
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
                <h2>Text here</h2>
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
                <h2>Text here</h2>
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
                <h2>Text here</h2>
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
                <h2>Text here</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <br></br>
        <br></br>
        <h2> welcome to site !</h2>
        <br></br>
        <p>
          Text messages are used for personal, family, business and social
          purposes. Governmental and non-governmental organizations use text
          messaging for communication between colleagues. In the 2010s, the
          sending of short informal messages became an accepted part of many
        </p>
        <br></br>

        <br></br>
        <br></br>
        <h2> Top Relted Movies ... ! </h2>
        <br></br>
        <div className="App">
          <header className="App-header">
            <CardGroup>
              <Card style={({ color: "black" }, { margin: "13px" })}>
                <Card.Img
                  variant="top"
                  src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg"
                  height="350"
                  width="250"
                  alt="no image"
                />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Movies Name
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    Movies Description
                  </Card.Text>
                  <Button style={{ margin: "13px" }} variant="danger">
                    More
                  </Button>
                  <Button variant="light">
                    {" "}
                    <svg
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
                    </svg>{" "}
                  </Button>
                </Card.Body>
                <Card.Footer
                  style={({ background: "#ce6363" }, { color: "black" })}
                >
                  <small className="text-muted">Watch Now</small>
                </Card.Footer>
              </Card>
              <Card style={{ margin: "13px" }}>
                <Card.Img
                  src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg"
                  height="350"
                  width="250"
                  alt="no image"
                  variant="top"
                />

                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Tomorrowland{" "}
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    Movies Description
                  </Card.Text>
                  <Button style={{ margin: "13px" }} variant="danger">
                    More
                  </Button>
                  <Button variant="light">
                    {" "}
                    <svg
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
                    </svg>{" "}
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Watch Movie Now</small>
                </Card.Footer>
              </Card>
              <Card style={({ color: "black" }, { margin: "13px" })}>
                <Card.Img
                  variant="top"
                  src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg"
                  height="350"
                  width="250"
                  alt="no image"
                />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    {" "}
                    Movies Name
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    Movies Description
                  </Card.Text>
                  <Button style={{ margin: "13px" }} variant="danger">
                    More
                  </Button>
                  <Button variant="light">
                    {" "}
                    <svg
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
                    </svg>{" "}
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Watch Movie Now</small>
                </Card.Footer>
              </Card>
              <Card style={({ color: "black" }, { margin: "13px" })}>
                <Card.Img
                  variant="top"
                  src="https://i.imgflip.com/1yj1os.gif"
                  height="350"
                  width="250"
                  alt="no image"
                />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Movies Name
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    Movies Description
                  </Card.Text>
                  <Button variant="danger">More</Button>
                  <Button variant="light">
                    {" "}
                    <svg
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
                    </svg>{" "}
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Watch Movie Now</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </header>
        </div>

        <br></br>
        <br></br>
      </Container>
      <h2> Top Relted Books !</h2>
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col style={{ margin: "20px" }}>
            {" "}
            <Image
              src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg"
              width="180px"
              height="100%"
              alt="no image"
              rounded
            />
          </Col>
          <Col>
            <p>
              messages are used for personal, family, business and social
              purposes. Governmental and non-governmental organizations use text
              messaging for communication between colleagues. In the 2010s, the
              sending of short informal messages became an accepted part of many
              cultures, as happened earlier with emailing.[1] This makes texting
              a quick and easy way to communicate with friends, family and
              colleagues, including in contexts where a call would be impolite
              or inappropriate (e.g., calling very late at night or when one
              knows the other person is busy with family or work activities).
              Like e-mail and voicemail and unlike calls (in which the caller
              hopes to speak directly with the recipient), texting does not
              require the caller and recipient to both be free at the same
              moment; this permits communication even between busy.
            </p>
          </Col>
        </Row>
      </Container>

      <br></br>
      <br></br>

      <h2> Top Relted Audio !</h2>
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col style={{ margin: "20px" }}>
            {" "}
            <CardGroup>
              <Card style={{ color: "black" }}>
                <Card.Img
                  variant="top"
                  src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg"
                  height="350"
                  width="250"
                  alt="no image"
                />
                <Card.Body>
                  <Card.Title>Audio Name</Card.Title>
                  <Card.Text>Audio Description</Card.Text>
                  <Button variant="danger">More</Button>
                  <Button variant="light">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-caret-right-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082z" />
                    </svg>{" "}
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Download 3 month ago</small>
                </Card.Footer>
              </Card>
              {/* ///////////////////////////////// */}
            </CardGroup>
          </Col>
          <Col style={{ margin: "20px" }}>
            <Card style={{ color: "black" }}>
              <Card.Img
                variant="top"
                src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg"
                height="350"
                width="250"
                alt="no image"
              />
              <Card.Body>
                <Card.Title>Movies Name</Card.Title>
                <Card.Text>Movies Description</Card.Text>
                <Button variant="danger">More</Button>
                <Button variant="light">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-caret-right-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082z" />
                  </svg>{" "}
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Download 3 month ago</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
    </div>
  );
};

export default Home;

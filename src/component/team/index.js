import { Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Team = () => {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <br></br>
          <br></br>
          <div className="h2">
          <h2> Team Members </h2></div>
          <br></br>
          <br></br>
          <CardGroup className ="m-5">
            <Card style={({ color: "black" }, { margin: "30px" })}>
              <Card.Img
                variant="top"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQFi2QOAoT1UAw/profile-displayphoto-shrink_800_800/0/1624171936830?e=1642032000&v=beta&t=zFPvVUdOwHSv2mMyAMx4XaBXh9x0T1HJex9fEQIGU-c"
                height="400"
                width="160"
                alt="no image"
              />
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  Suliman Saleh{" "}
                </Card.Title>
                <Card.Text style={{ color: "black" }}>
                  Secrum of Group 8
                </Card.Text>
                <Card.Text style={{ color: "black" }}>
                  Computer Science
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={({ color: "red" }, { margin: "30px" })}>
              <Card.Img
                variant="top"
                src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-hijab-woman-religious-graphic-design-template-png-image_1785357.jpg"
                height="400"
                width="160"
                alt="no image"
              />
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  Thoraya Alrashidi
                </Card.Title>
                <Card.Text style={{ color: "black" }}>
                  Information Technology{" "}
                </Card.Text>
                <Card.Text style={{ color: "black" }}>
                  Member of JS Bootcamp
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={({ color: "red" }, { margin: "30px" })}>
              <Card.Img
                variant="top"
                src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-hijab-woman-religious-graphic-design-template-png-image_1785357.jpg"
                height="400"
                width="160"
                alt="no image"
              />
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  Rawan Almutairi
                </Card.Title>
                <Card.Text style={{ color: "black" }}>
                  Information Technology{" "}
                </Card.Text>
                <Card.Text style={{ color: "black" }}>
                  Member of JS Bootcamp
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </header>
      </div>
    </Container>
  );
};

export default Team;
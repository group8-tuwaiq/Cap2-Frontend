import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Books = () => {
  return (
    <div>
      <header>
        <h2>  Books </h2>
        <br></br>
        <br></br>

        <Container>
          <Row>
            <Col style={({ margin: "13px" }, { padding: "13px" })}>
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
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col style={({ margin: "13px" }, { padding: "13px" })}>
              {" "}
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
            </Col>
            <Col style={({ margin: "13px" }, { padding: "13px" })}>>
              {" "}
              <Image
                src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg"
                width="180px"
                height="100%"
                alt="no image"
                rounded
              />
            </Col>
          </Row>
          <Row>
            <Col style={({ margin: "13px" }, { padding: "13px" })}>
              {" "}
              <Image
                src="https://www.planetbroadcasting.com/wp-content/uploads/2020/05/Annotation-2020-05-04-081104-1.jpg"
                width="180px"
                height="100%"
                alt="no image"
                rounded
              />
            </Col>
            <Col style={({ margin: "13px" }, { padding: "13px" })}>

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
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Books;

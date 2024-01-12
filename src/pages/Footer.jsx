import React from "react";

// React Bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// React FontAwesome
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faEnvelope,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { Row, Col, Card } from "react-bootstrap";

// Footer function
const Footer = () => (
  <Row xs={1} md={2} className="g-5">
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>You made it!</Card.Title>
          <Card.Text>
            Thank you for checking out my work and look forward to more of my
            projects!
          </Card.Text>

          <Card.Text className="mt-5 spacing">
            &copy; {new Date().getFullYear()} Daisie Moua
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Get In Touch!</Card.Title>
          <Card.Text>
            <a href="https://github.com/auom-eisiad" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <br />
            <a href="https://www.linkedin.com/in/daisie-moua-6b8402221/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <br />
            <a href="https://www.figma.com/files/user/1299515299305454755?fuid=1299515299305454755" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFigma} />
            </a>
            <br />
            <a href="mailto:daisiemouaa@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Footer;

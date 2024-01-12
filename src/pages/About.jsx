import React from "react";

// React Bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// React FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// About function
const About = () => (
  <Row xs={1} md={2} className="g-2">
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>
            Hi there! <FontAwesomeIcon icon={faFlower} />
          </Card.Title>
          <Card.Text>
            I'm Daisie, a passionate full-stack developer dedicated to crafting
            user-friendly and accessible applications. I thrive in challenging
            environments, navigating demanding client expectations, and excel
            under pressure, meeting tight deadlines. Whether working
            independently or collaboratively in a team, I bring enthusiasm and
            expertise to every project. I look forward to creating something
            amazing together!
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <div class="hero"></div>
      </Card>
    </Col>
  </Row>
);

export default About;

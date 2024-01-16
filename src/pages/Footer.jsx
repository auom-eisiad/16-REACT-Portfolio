import React from "react";

// React Bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// React FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, far);

// Footer function
const Footer = () => (
  <Row xs={1} md={2} className="footer-page g-5">
    <Col className="credit">
      <Card>
        <Card.Body className="credit-text">
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
    <Col className="social">
      <Card>
        <Card.Body>
          <Card.Title className="social-title">Get In Touch!</Card.Title>
          <Card.Text className="icon">
            <a href="https://github.com/auom-eisiad" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <br />
            <a href="https://www.linkedin.com/in/daisie-moua-6b8402221/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
            <br />
            <a href="https://www.figma.com/files/user/1299515299305454755?fuid=1299515299305454755" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'figma']} />
            </a>
            <br />
            <a href="mailto:daisiemouaa@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['far', 'envelope']} />
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Footer;

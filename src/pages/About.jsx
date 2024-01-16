import React from "react";

// React Bootstrap
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

// React FontAwesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// About function
const About = () => (
  <CardGroup>
      <Card className="about">
        <Card.Body>
          <Card.Title className="about-title">
            Hi there! 
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
  </CardGroup>
);

export default About;

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
        <Card.Title className="about-title">Hi there! &#10022;</Card.Title>
        <Card.Text>
          I'm Daisie, a passionate full-stack developer dedicated to crafting
          user-friendly and accessible applications. Each day I learn something
          new and I strive for improvement. Whether working independently
          or collaboratively in a team, I bring enthusiasm and expertise to
          every project. I look forward to creating something amazing together!
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="skills">
      <Card.Body>
        <Card.Title className="skill-title">Skills:</Card.Title>
        <Card.Text className="skill-sets">
          <div className="skill-set1">
            <div className="skill">HTML, CSS, JS</div>
            <div className="skill">Git</div>
            <div className="skill">MySql</div>
            <div className="skill">MongoDB</div>
            <div className="skill">React.js</div>
          </div>
          <div className="skill-set2">
            <div className="skill">Bootstrap</div>
            <div className="skill">jQuery</div>
            <div className="skill">Express.js</div>
            <div className="skill">Sequelize.js</div>
            <div className="skill">Mongoose.js</div>
          </div>
          <div className="skill-set3">
            <div className="skill">Object-Oriented-Programming (OOP)</div>
            <div className="skill">Application Programming Interfaces (API)</div>
            <div className="skill">Command Line Interfaces (CLI)</div>
            <div className="skill">Progressive Web Applications (PWA)</div>
            <div className="skill">Functional-Programming (FP)</div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  </CardGroup>
);

export default About;

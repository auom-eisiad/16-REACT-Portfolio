import React from "react";

// React Bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// Project function
const Project = () => {
  const cardsContent = [
    {
      title: "Movie Reels",
      text: "Collaberative project building a movie watchlist website",
      imageUrl: "/images/movie-reels.png",
      linkUrl: 'https://auom-eisiad.github.io/Movie-Reels/moviereels.html',
      date: "August 28, 2023",
    },
    {
      title: "Lyrx",
      text: "Collabertive project building lyrics to their favorite song",
      imageUrl: "/images/lyrx.png",
      linkUrl: 'https://lyrx-8c8792a2e8e6.herokuapp.com/',
      date: "October 26, 2023",
    },
    {
      title: "5-day Weather Forecast",
      text: "Weather dashboard for today's weather and the next 5 days",
      imageUrl: "/images/weather-forecast.png",
      linkUrl: 'https://auom-eisiad.github.io/06-Weather-Forecast/',
      date: "August 24, 2023",
    },
    {
      title: "Code Quiz",
      text: "A mini quiz to test your coding knowledge",
      imageUrl: "/images/code-quiz.png",
      linkUrl: 'https://auom-eisiad.github.io/04-Code-Quiz/',
      date: "August 10, 2023",
    },
    {
      title: "README Generator",
      text: "A professional README file generator",
      imageUrl: "/images/readme-generator.png",
      linkUrl: 'https://github.com/auom-eisiad/07-README-Generator',
      date: "October 25, 2023",
    },
    {
      title: "Work Scheduler",
      text: "A to-do list for a 9-5 work schedule",
      imageUrl: "/images/workday-scheduler.png",
      linkUrl: 'https://auom-eisiad.github.io/05-Work-Schedule/',
      date: "August 18, 2023",
    },
  ];

  return (
    <Row className="project-page">
      {cardsContent.map((card, idx) => (
        <Col className="procol" key={idx}>
          <Card className="project">
          <a href={card.linkUrl}>
            <Card.Img className="project-img" src={card.imageUrl} style={{ width: '80%'}} />
            </a>
            <Card.Body>
              <Card.Title className="project-title">{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{card.date}</small>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Project;

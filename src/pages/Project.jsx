import React from "react";

// React Bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// Project function
const Project = () => {
  const cardsContent = [
    {
      title: "Card 1 Title",
      text: "This is the content for Card 1.",
      imageUrl: "https://example.com/image1.jpg",
      date: "Date 1",
    },
    {
      title: "Card 2 Title",
      text: "This is the content for Card 2.",
      imageUrl: "https://example.com/image2.jpg",
      date: "Date 2",
    },
    {
      title: "Card 3 Title",
      text: "This is the content for Card 3.",
      imageUrl: "https://example.com/image3.jpg",
      date: "Date 3",
    },
    {
      title: "Card 4 Title",
      text: "This is the content for Card 4.",
      imageUrl: "https://example.com/image4.jpg",
    },
    {
      title: "Card 5 Title",
      text: "This is the content for Card 5.",
      imageUrl: "https://example.com/image4.jpg",
    },
    {
      title: "Card 6 Title",
      text: "This is the content for Card 6.",
      imageUrl: "https://example.com/image4.jpg",
    },
  ];

  return (
    <Row xs={1} md={3} className="g-3">
      {cardsContent.map((card, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={card.imageUrl} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
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

import React from "react";

// React Bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Resume function
const Resume = () => {
    const downloadResume = () => {
        const resumeUrl = 'public/daisie-moua-resume.pdf';
        window.open(resumeUrl, '_blank');
      };
    
      return (
        <Card className="resume">
          <Card.Body>
            <Button variant="primary" onClick={downloadResume}>
              Check out my resume here
            </Button>
          </Card.Body>
        </Card>
      );
};

export default Resume;
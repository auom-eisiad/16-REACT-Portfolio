import React from "react";

// React Bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Resume function
const Resume = () => {
    const downloadResume = () => {
        const resumeUrl = 'https://www.canva.com/design/DAF8Z0SWFb4/SiL8zH1tKI4SLMo-2j3aTw/view?utm_content=DAF8Z0SWFb4&utm_campaign=designshare&utm_medium=link&utm_source=editor';
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
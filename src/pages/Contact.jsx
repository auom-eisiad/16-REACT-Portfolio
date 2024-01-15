import React from "react";

// React Bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// React FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Contact function
const Contact = () => {
  // Validate the inputs if it's state is empty
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   Using email regex to validate the user's input making sure it follows the traditional email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   If the submit button is clicked, it will check if all form fields have been filled correctly.
  // - Uses form.checkValidity() to ensure all fields meet HTML validation rules.
  // - Uses the emailRegex to validate the email format.
  // - Ensures the message field is not empty.
  // If any validation fails, prevents the form submission and prompts the user to correct errors.
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (
      form.checkValidity() === false ||
      !emailRegex.test(email) ||
      message.trim() === ""
    ) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // Updates the 'email' state based on the input value when the email input field changes.
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Updates the 'message' state based on the input value when the message input field changes.
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Card className="mx-auto mt-5 mb-5" style={{ maxWidth: "600px" }}>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validateEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={handleEmailChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              placeholder="Message"
              as="textarea"
              rows={5}
              required
              value={message}
              onChange={handleMessageChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a message
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" className="mt-2">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Contact;

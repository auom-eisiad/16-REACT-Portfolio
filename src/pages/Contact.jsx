import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email) || message.trim() === "") {
      alert("Please enter a valid email and/or message.");
    } else {
      setSubmitted(true);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="contact-form" style={{ maxWidth: "1000px" }}>
      <div className="card-body">
        <form noValidate onSubmit={handleSubmit}>
          {submitted ? (
            <div className="alert alert-success">Message Sent!</div>
          ) : (
            <>
              <div>
                <label htmlFor="email">Email</label>
                <input className="email-form" type="email" id="email" placeholder="Email" required value={email} onChange={handleEmailChange} />
              </div>
              <div className="mt-2 message">
                <label htmlFor="message">Message</label>
                <textarea class="message-form" id="message" placeholder="Message" rows="5" required value={message} onChange={handleMessageChange}></textarea>
              </div>
              <button type="submit" className="btn mt-2">Submit</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;

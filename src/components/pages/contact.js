import React, { useState } from "react";
import "../styles/form.css";
import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-column: 1fr;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div``;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container>
      <FormContainer>
        <form className="form" data-netlify="true">
          <label className="label"></label>
          <input
            type="text"
            value={name}
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="label"></label>
          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label"></label>
          <input
            className="message-input"
            type="text"
            value={message}
            placeholder="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="submit-button" type="submit">
            Submit →
          </button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Contact;

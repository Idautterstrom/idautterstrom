import React, { useState } from "react";
import "../styles/form.css";
import styled from "styled-components";
import Email from "../../img/Email.png";
import Phone from "../../img/Phone.png";
import LinkedIn from "../../img/Li-logo.png";
import Instagram from "../../img/Instagram.png";

const Container = styled.section`
  display: grid;
  grid-template-column: 1fr;
  align-items: center;
  justify-content: center;
`;

const Img = styled.a`
  display: flex;
  height: 40px;
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
      <div>
        <Img href="mailto: ida.utterstrom@hotmail.com">
          <img src={Email} alt="email" />
        </Img>
        <Img href="https://wa.me/+46760465094?text=">
          <img src={Phone} alt="phone" />
        </Img>
        <Img href="https://www.linkedin.com/in/ida-u-9361b7a9">
          <img src={LinkedIn} alt="linkedin" />
        </Img>
        <Img href="https://www.instagram.com/idaswebdev/?hl=en">
          <img src={Instagram} alt="instagram" />
        </Img>
      </div>
    </Container>
  );
};

export default Contact;

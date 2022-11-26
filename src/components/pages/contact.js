import React, { useState } from "react";
import "../styles/form.css";
import styled from "styled-components";
import Email from "../../img/Email.png";
import Phone from "../../img/Phone.png";
import LinkedIn from "../../img/Li-logo.png";
import Instagram from "../../img/Instagram.png";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  background-color: #ede8e2;
  margin-top: 40px;
  margin-left: 100px;
  margin-right: 100px;
  padding-top: 100px;
  padding-bottom: 100px;
  box-shadow: 5px 5px 10px gray;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;
const ImgContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const Text = styled.p`
  font-family: "Rische Serif", serif;
  font-size: 30px;
  font-weight: bold;
`;

const SmallText = styled.p`
  font-family: "poppins", serif;
  font-size: 15px;
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
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    setSubmitting(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
        setSubmitting(false);
        setSubmitted("Thanks for contacting me!");
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  if (submitting) {
    return (
      <div className="transition ease-in-out duration-300 pb-10 m-auto bg-white text-center pt-20 success">
        <p className="text-2xl font-bold mb-8 text-main-color">
          Sending message..
        </p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="transition ease-in-out duration-300 pb-10 m-auto bg-white text-center pt-20 success">
        <p className="text-main-color">Thanks for your message!.</p>
      </div>
    );
  }

  return (
    <Container>
      <InfoContainer>
        <Text>SAY HELLO!</Text>
        <SmallText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
        </SmallText>
        <ImgContainer>
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
        </ImgContainer>
      </InfoContainer>
      <FormContainer>
        <form
          onSubmit={handleSubmit}
          className="form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

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

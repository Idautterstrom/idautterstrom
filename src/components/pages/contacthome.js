import React, { useState } from "react";
import "../styles/form.css";
import styled from "styled-components";
import Email from "../../img/envelope.png";
import Phone from "../../img/phonewhite.png";
import LinkedIn from "../../img/liwhite.png";
import Instagram from "../../img/instawhite.png";


const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const BigContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Color = styled.div`
  width: 1000px;
  margin-top: 50px;
  border: 1px solid black;
  border-radius: 300px 300px 300px 0px;
  padding: 10px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 80px;
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #3d1920;
  border-radius: 300px 300px 300px 0px;
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
  font-family: "Gotu", serif;
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-bottom: -20px;
`;

const SmallText = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 20px;
  color: white;
`;

const Img = styled.a`
  display: flex;
  height: 30px;
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
    <BigContainer>
      <Color>
        <Container>
          <InfoContainer>
            <Text>SAY HELLO!</Text>
            <SmallText>
              For any business inquiries contact me via the form or any medias
              below.
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
      </Color>
    </BigContainer>
  );
};

export default Contact;

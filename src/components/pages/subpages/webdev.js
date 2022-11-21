import React from "react";
import styled from "styled-components";
import Urban from "../../../img/Urban.jpeg";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin-left: 40px;
  margin-right: 40px;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  text-decoration: none;
  justify-content: center;
  box-shadow: 5px 5px 10px lightgray;
  transform: scale(1);
  animation: pulse 2s infinite;
  &:hover {
    animation-name: bounce;
    animation-timing-function: ease;
  }
  @keyframes bounce {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-20px); }
    100% { transform: translateY(0); }
  }
  }
`;

const Text = styled.a`
  font-family: "poppins", serif;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: black;
  position: absolute;
  top: 50%;
  left: 25%;
`;

const Img = styled.img`
  width: 100%;
  filter: grayscale(100%);
  opacity: 20%;
`;

const Webdev = () => {
  return (
    <Section>
      <Container>
        <Img src={Urban} alt="me" />
        <Text>Rhodin Consulting & Coaching</Text>
      </Container>
      <Container>
        <Text>XXX</Text>
      </Container>
    </Section>
  );
};

export default Webdev;

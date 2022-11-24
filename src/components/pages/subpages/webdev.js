import React from "react";
import styled from "styled-components";
import Urban from "../../../img/Urban.jpeg";
import RB from "../../../img/RB.jpeg";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-left: 40px;
  margin-right: 40px;
`;

const InfoContainer = styled.div``;

const Container = styled.a`
  display: flex;
  position: relative;
  flex-direction: column;
  text-decoration: none;
  justify-content: center;
  align-items: center;
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
`;

const Text = styled.p`
  font-family: "raleway", serif;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  color: yellow;
`;

const SmallText = styled.p`
  font-family: "poppins", serif;
  font-size: 12px;
  color: black;
  font-weight: bold;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  filter: grayscale(100%);
  opacity: 20%;
`;

const Webdev = () => {
  return (
    <Section>
      <InfoContainer>
        <Text>Hey!</Text>
        <Text>
          I'm making single- & multipage websites for freelancers & small
          companies.
        </Text>
        <Text>Skillset</Text>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Styled Components</li>
          <li>Wordpress</li>
        </ul>
      </InfoContainer>
      <Container href="https://rhodinconsulting.com/">
        <Img src={Urban} alt="me" />
        <TextContainer>
          <Text>Rhodin Consulting & Coaching</Text>
          <SmallText>
            Multipage website made in React, using JavaScript & Styled
            components.
          </SmallText>
        </TextContainer>
      </Container>
      <Container href="https://recommendedby.se/">
        <Img src={RB} alt="me" />
        <TextContainer>
          <Text>Recommended by AB</Text>
          <SmallText>Website made in Wordpress.</SmallText>
        </TextContainer>
      </Container>
    </Section>
  );
};

export default Webdev;

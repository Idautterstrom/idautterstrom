import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-left: 20px;
  margin-right: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const TextContainer = styled.div`
  justify-content: center;
  margin-left: 40px;
  margin-right: 40px;
`;

const InfoText = styled.p`
  font-family: "raleway", serif;
  font-size: 60px;
  text-align: center;
  text-shadow: 2px 2px lightgray;
`;

const Arrow = styled.p`
  font-size: 80px;
  text-align: center;
  transform: scale(1);
  animation: pulse 2s infinite;
  @keyframes pulse {
    0% {
      transform: scale(0.95);
    }
    70% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.95);
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
`;

const LinkContainer = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: center;
  padding: 20px;
  height: 170px;
  box-shadow: 5px 5px 10px lightgray;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: bottom;
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

const Header = styled.p`
  font-family: "poppins", serif;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  color: black;
`;

const Text = styled.p`
  font-family: "Poppins", serif;
  font-size: 10px;
  text-align: center;
  margin-right: 10%;
  margin-left: 10%;
  color: black;
  margin-top: -5px;
`;

const Featured = () => {
  return (
    <Section>
      <TextContainer>
        <InfoText>Welcome to my creative hub.</InfoText>
        <Arrow>→</Arrow>
      </TextContainer>
      <Container>
        <LinkContainer href="/resume">
          <Header>BUSINESS DEVELOPMENT | RESUMÉ</Header>
          <Text>
            View my experience in Business Strategy, Project Managagement,
            Product Ownership, People Experience & Marketing
          </Text>
        </LinkContainer>

        <LinkContainer href="/webdevelopment">
          <Header>WEB DEVELOPMENT</Header>
          <Text>
            Single- and multipage websites for freelancers & small companies
          </Text>
        </LinkContainer>

        <LinkContainer href="/leatherwork">
          <Header>LEATHER WORK</Header>
          <Text>Handmade products from vegetable tanned eco leather</Text>
        </LinkContainer>

        <LinkContainer href="/other">
          <Header>OTHER</Header>
          <Text>Projects & Hobbies</Text>
        </LinkContainer>
      </Container>
    </Section>
  );
};

export default Featured;

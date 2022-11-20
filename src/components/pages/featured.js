import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
`;

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const TextContainer = styled.div`
  justify-content: center;
  padding: 20px;
`;

const InfoText = styled.p`
  font-family: "poppins", serif;
  font-size: 60px;
  text-align: center;
`;

const Arrow = styled.p`
  font-size: 70px;
  margin-left: 50%;
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

const HeadContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 50px;
  align-items: center;
`;

const Container = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: center;
/*   background: rgba(0,0,0,0.2); */
  padding: 20px;
  height: 150px;
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
  font-family: "Raleway", serif;
  font-size: 12px;
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
      <SectionContainer>
        <TextContainer>
          <InfoText>Welcome to my creative hub.</InfoText>
          <Arrow>→</Arrow>
        </TextContainer>
        <HeadContainer>
          <Container href="/resume">
            <Header>BUSINESS DEVELOPMENT | RESUMÉ</Header>
            <Text>
              View my experience in Business Strategy, Project Managagement,
              Product Ownership, People Experience & Marketing
            </Text>
          </Container>

          <Container href="/webdevelopment">
            <Header>WEB DEVELOPMENT</Header>
            <Text>
              Single- and multipage websites for freelancers & small companies
            </Text>
          </Container>

          <Container href="/leatherwork">
            <Header>LEATHER WORK</Header>
            <Text>Handmade products from vegetable tanned eco leather</Text>
          </Container>

          <Container href="/other">
            <Header>OTHER</Header>
            <Text>Projects & Hobbies</Text>
          </Container>
        </HeadContainer>
      </SectionContainer>
    </Section>
  );
};

export default Featured;

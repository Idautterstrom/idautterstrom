import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-left: 20px;
  margin-right: 20px;
`;

const HeadContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const Container = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 20px;
  height: 150px;
  background-color: black;
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
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  color: white;
`;

const Text = styled.p`
  font-family: "Poppins", serif;
  font-size: 15px;
  text-align: center;
  margin-right: 10%;
  margin-left: 10%;
  color: white;
  margin-top: -5px;
`;

const Featured = () => {
  return (
    <Section>
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
            Single- and multipage websites for freelancers or small companies
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
    </Section>
  );
};

export default Featured;

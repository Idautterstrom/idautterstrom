import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  border-bottom-style: double;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: center;
`;

const HeaderText = styled.h2`
  font-family: "raleway", serif;
  font-size: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 20px;
  padding: 20px;
  border-bottom-style: double;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: bottom;

  &:hover {
    animation-name: bounce;
    animation-timing-function: ease;
  }
  @keyframes bounce {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
  }
`;

const Header = styled.h1`
  font-family: "Raleway", serif;
  font-size: 20px;
  text-align: center;
  color: black;
`;

const Text = styled.p`
  font-family: "Poppins", serif;
  font-size: 12px;
  text-align: center;
  color: black;
  margin-top: -5px;
`;

const Featured = () => {
  return (
    <Section>
      <HeaderContainer>
        <HeaderText>explore my experience.</HeaderText>
      </HeaderContainer>
      <Container>
        <Header>BUSINESS DEVELOPMENT | RESUMÉ</Header>
        <Text>
          View my experience in Business Strategy, Project Managagement, Product
          Ownership, People Experience & Marketing
        </Text>
      </Container>
      <Container>
        <Header>WEB DEVELOPMENT</Header>
        <Text>
          Single- and multipage websites for freelancers or small companies
        </Text>
      </Container>
      <Container>
        <Header>LEATHER WORK</Header>
        <Text>Handmade products from vegetable tanned eco leather</Text>
      </Container>

      <Container>
        <Header>OTHER</Header>
        <Text>Projects & Hobbies</Text>
      </Container>
    </Section>
  );
};

export default Featured;

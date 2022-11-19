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

const HeadContainer = styled.div`
  display: flex;
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right-style: double;
  margin-top: 20px;
`;

const HeaderText = styled.h2`
  font-family: "raleway", serif;
  font-size: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 10px;
  margin-top: 20px;
  padding: 20px;
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
  text-align: right;
  color: black;
`;

const Text = styled.p`
  font-family: "Poppins", serif;
  font-size: 12px;
  text-align: right;
  color: black;
  margin-top: -5px;
`;

const AboutContainer = styled.div`
  display: flex;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 10px;
  margin-top: 20px;
  padding: 20px;
`;

const AboutText = styled.h1`
  font-family: "railway", serif;
`;

const Featured = () => {
  return (
    <Section>
      <HeaderContainer>
        <HeaderText>explore my experience.</HeaderText>
      </HeaderContainer>
      <HeadContainer>
        <SecondContainer>
          <a href="/resume">
            <Container>
              <Header>BUSINESS DEVELOPMENT | RESUMÉ</Header>
              <Text>
                View my experience in Business Strategy, Project Managagement,
                Product Ownership, People Experience & Marketing
              </Text>
            </Container>
          </a>
          <a href="/webdevelopment">
            <Container>
              <Header>WEB DEVELOPMENT</Header>
              <Text>
                Single- and multipage websites for freelancers or small
                companies
              </Text>
            </Container>
          </a>
          <a href="/leatherwork">
            <Container>
              <Header>LEATHER WORK</Header>
              <Text>Handmade products from vegetable tanned eco leather</Text>
            </Container>
          </a>

          <a href="/other">
            <Container>
              <Header>OTHER</Header>
              <Text>Projects & Hobbies</Text>
            </Container>
          </a>
        </SecondContainer>
        <AboutContainer>
          <Div>
            <AboutText>About me</AboutText>
          </Div>
        </AboutContainer>
      </HeadContainer>
    </Section>
  );
};

export default Featured;

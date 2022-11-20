import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-left: 10%;
  margin-right: 10%;
  padding: 20px;
`;
const HeaderText = styled.p`
  font-family: "raleway", serif;
  font-size: 60px;
  font-weight: bold;
`;

const HeaderContainer = styled.div`
  display: flex;
  border-bottom-style: double;
  justify-content: center;
`;

const HeadContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SecondContainer = styled.div`
  flex-direction: column;
  border-right-style: double;
  margin-top: 20px;
`;

const Container = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px whitesmoke;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 40px;
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
    50%  { transform: translateY(-20px); }
    100% { transform: translateY(0); }
  }
  }
`;

const Header = styled.p`
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

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-top: 20px;
  margin-left: 20px;
`;

const AboutText = styled.p`
  font-family: "poppins", serif;
  font-size: 40px;
  color: black;
  margin-right: 100px;
`;

const SmallText = styled.p``;

const Featured = () => {
  return (
    <Section>
      <HeaderContainer>
        <HeaderText>Welcome to my creative hub.</HeaderText>
      </HeaderContainer>
      <HeadContainer>
        <SecondContainer>
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
        </SecondContainer>
        <div>
          <Div>
            <AboutText>Welcome to my creative hub.</AboutText>
            <SmallText>Some text about me</SmallText>
          </Div>
        </div>
      </HeadContainer>
    </Section>
  );
};

export default Featured;

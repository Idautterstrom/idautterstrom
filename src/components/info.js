import React from "react";
import styled from "styled-components";
import CandyImg from "../img/candy.jpeg";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  margin-top: -10px;
  text-align: left;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  } ;
`;

const DivContainer = styled.div`
  display: flex;
  grid-template-columns; row;
  grid-gap: 30px;
  margin-top: -20px;
`;

const Header = styled.h1`
  font-family: "DM Serif Display", serif;
  font-size: 30px;
  font-weight: bold;
`;

const Link = styled.a`
  font-family: "DM Serif Display", serif;
  color: #875053;
  font-size: 30px;
  font-weight: bold;
  margin-top: 150px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Div = styled.div`
  background: #fbbfca;
  padding: 20px;
  display: flex;
  grid-template-columns; row;
`;

const DivNoColor = styled.div`
  padding: 20px;
`;

const Photo = styled.div`
  display: flex;
  height: 400px;
`;

const Text = styled.p`
  text-align: justify;
  font-family: "Poppins", serif;
  font-size: 12px;
`;

const Info = () => {
  return (
    <Container>
      <DivNoColor>
        <Header>About</Header>
        <DivContainer>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </DivContainer>
      </DivNoColor>
      <Div>
        <DivContainer>
          <Link href="https://www.linkedin.com/in/ida-u-9361b7a9">
            Contact me
          </Link>
        </DivContainer>
      </Div>
      <Photo>
        <img src={CandyImg} alt="Candy image" />
      </Photo>
    </Container>
  );
};

export default Info;

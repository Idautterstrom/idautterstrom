import React from "react";
import styled from "styled-components";
import Image from "../img/candy.jpeg";

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
  margin-left: 30px;
  margin-bottom: 25px;
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
  background-image: url(${Image});
  width: 400px;
  height: 400px;
`;

const Text = styled.p``;

const Info = () => {
  return (
    <Container>
      <DivNoColor>
        <Header>About</Header>
        <Text>
          I work fulltime as a Business developer, Product Owner, People &
          Culture consultant
        </Text>
      </DivNoColor>
      <Div>
        <Link href="https://www.linkedin.com/in/ida-u-9361b7a9">
          Contact me
        </Link>
        <Text></Text>
      </Div>
      <Photo></Photo>
    </Container>
  );
};

export default Info;

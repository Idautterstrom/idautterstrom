import React from "react";
import styled from "styled-components";
import Email from "../img/email.png";
import Phone from "../img/phone-call.png";
import LinkedIn from "../img/Li-logo.png";

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

// const Link = styled.a`
//   font-family: "DM Serif Display", serif;
//   color: #875053;
//   font-size: 30px;
//   font-weight: bold;
//   margin-top: 150px;
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

const Div = styled.div`
  background: #fbbfca;
  padding: 20px;
  display: flex;
  grid-template-columns; row;
`;

const DivNoColor = styled.div`
  padding: 20px;
`;

const Text = styled.p`
  text-align: justify;
  font-family: "Poppins", serif;
  font-size: 12px;
`;

const Img = styled.div`
  display: flex;
  height: 30px;
  margin-top: 200px;
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
          <Img>
            <img src={Email} alt="email" />
          </Img>
          <Img>
            <img src={Phone} alt="phone" />
          </Img>
          <Img>
            <img src={LinkedIn} alt="linkedin" />
          </Img>
        </DivContainer>
      </Div>
    </Container>
  );
};

export default Info;

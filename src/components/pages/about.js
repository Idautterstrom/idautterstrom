import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  padding: 20px;
`;

const Header = styled.h1`
  font-family: "DM Serif Display", serif;
  font-size: 20px;
  text-align: center;
  color: #fbbfca;
`;

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 200px;
  margin-right: 200px;
  margin-bottom: 20px;
`;

// const DivColor = styled.div`
//   display: flex;
//   background-color: #ef5157;
//   width: 250px;
//   height: 250px;
//   border-radius: 50%;
// `;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-family: "Poppins", serif;
  font-size: 12px;
`;

const About = () => {
  return (
    <section>
      <HeaderContainer>
        <Header>ABOUT ME</Header>
      </HeaderContainer>
      <DivContainer>
        <Div></Div>
        <Div>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Div>
      </DivContainer>
    </section>
  );
};

export default About;

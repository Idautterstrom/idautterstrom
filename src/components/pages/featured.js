import React from "react";
import Urban from "../../img/urbanweb.png";
import Bags from "../../img/CollageBags.png";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 20px;
  padding: 20px;
  background-color: black;
  border-radius: 10px;

  &:hover {
    background-color: green;
  }
`;

const Header = styled.h1`
  font-family: "DM Serif Display", serif;
  font-size: 20px;
  text-align: center;
  color: #fbbfca;
`;

const Text = styled.p`
  font-family: "Poppins", serif;
  font-size: 12px;
  text-align: center;
  color: white;
  margin-top: -10px;
`;

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr
  padding: 20px;
  margin-left: 50px;
  margin-right: 50px;
  margin-buttom: 50px;
  gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

  }
`;

const Div = styled.div`
  display: flex;
  height: 500px;
  padding: 20px;
  border-radius: 4px;
`;

const Featured = () => {
  return (
    <section>
      <HeaderContainer>
        <Header>BUSINESS DEVELOPMENT | RESUMÉ</Header>
        <Text>
          Business Strategy, Project Managagement, Product Ownership, People
          Experience, Agility, Marketing
        </Text>
      </HeaderContainer>
      <HeaderContainer>
        <Header>WEB DEVELOPMENT</Header>
        <Text>JavaScript, React, Styled Components, HTML, CSS</Text>
      </HeaderContainer>
      <HeaderContainer>
        <Header>LEATHER WORK</Header>
        <Text>Handmade products from vegetable tanned eco leather</Text>
      </HeaderContainer>

      <HeaderContainer>
        <Header>OTHER</Header>
        <Text>Projects & Hobbies</Text>
      </HeaderContainer>

      <DivContainer>
        <Div>
          <img src={Urban} alt="Urban" />
        </Div>
        <Div>
          <img src={Bags} alt="Bags" />
        </Div>
      </DivContainer>
    </section>
  );
};

export default Featured;

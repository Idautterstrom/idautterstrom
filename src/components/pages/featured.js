import React from "react";
import Urban from "../../img/urbanweb.png";
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
        <Header>PREVIOUS PROJECTS</Header>
      </HeaderContainer>
      <DivContainer>
        <Div>
          <img src={Urban} alt="Urban" />
        </Div>
        <Div></Div>
      </DivContainer>
    </section>
  );
};

export default Featured;

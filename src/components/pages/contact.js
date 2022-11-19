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

const Contact = () => {
  return (
    <section>
      <HeaderContainer>
        <Header>CONTACT</Header>
      </HeaderContainer>

      <p>ida.utterstrom@hotmail.com</p>
      <p>+46 76 046 50 94</p>
    </section>
  );
};

export default Contact;

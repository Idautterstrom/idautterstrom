import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 50px;
`;

const Text = styled.p`
  font-family: "poppins", serif;
  font-size: 40px;
  font-weight: bold;
  color: black;
`;

const Footer = () => {
  return (
    <Container>
      <Text>contact</Text>
    </Container>
  );
};

export default Footer;

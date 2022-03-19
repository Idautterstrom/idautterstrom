import React from "react";
import styled from "styled-components";

const FootBox = styled.section`
  background-color: #548687;
  text-align: center;
`;

const Text = styled.h3`
  color: #c5fad5;
  font-family: "poppins", serif;
  font-size: 12px;
`;

const Footer = () => {
  return (
    <FootBox>
      <Text>
        Website made by<br></br>LOGO
      </Text>
    </FootBox>
  );
};

export default Footer;

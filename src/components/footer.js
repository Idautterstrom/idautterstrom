import React from "react";
import styled from "styled-components";
import Email from "../img/Email.png";
import Phone from "../img/Phone.png";
import LinkedIn from "../img/Li-logo.png";
import Instagram from "../img/Instagram.png";
import Logo from "../img/LOGO 2.png";

const FootBox = styled.section`
  display: flex;
  justify-content: space-between;

  background-color: #548687;
  padding: 10px;
  gap: 100px;
  margin-top: auto;
`;

const LogoContainer = styled.div`
  display: flex;
  height: 20px;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const Img = styled.a`
  display: flex;
  height: 20px;
`;

const Footer = () => {
  return (
    <FootBox>
      <LogoContainer>
        <img src={Logo} alt="logo" />
      </LogoContainer>
      <Container>
        <Img href="mailto: ida.utterstrom@hotmail.com">
          <img src={Email} alt="email" />
        </Img>
        <Img href="https://wa.me/+46760465094?text=">
          <img src={Phone} alt="phone" />
        </Img>
        <Img href="https://www.linkedin.com/in/ida-u-9361b7a9">
          <img src={LinkedIn} alt="linkedin" />
        </Img>
        <Img href="https://www.instagram.com/idaswebdev/?hl=en">
          <img src={Instagram} alt="instagram" />
        </Img>
      </Container>
    </FootBox>
  );
};

export default Footer;

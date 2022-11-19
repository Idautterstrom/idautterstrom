import React from "react";
import styled from "styled-components";
import Email from "../img/Email.png";
import Phone from "../img/Phone.png";
import LinkedIn from "../img/Li-logo.png";
import Instagram from "../img/Instagram.png";

const FootBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 100px;
  margin-top: auto;
  height: 100px;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Img = styled.a`
  display: flex;
  height: 40px;
`;

const Footer = () => {
  return (
    <FootBox>
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

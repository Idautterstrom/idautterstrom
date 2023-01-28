import React from "react";
import styled from "styled-components";
import Email from "../img/Email.png";
import Phone from "../img/Phone.png";
import LinkedIn from "../img/Li-logo.png";
import Instagram from "../img/Instagram.png";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  justify-content: left;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ImgContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
  justify-content: center;
`;

const Img = styled.a`
  display: flex;
  height: 20px;
`;

const Text = styled.p`
  text-decoration: none;
  font-family: "gotu", serif;
  font-size: 12px;
  text-align: center;
  text-justify: center;
  margin-left: 400px;
`;

const Footer = () => {
  return (
    <Container>
      <ImgContainer>
        <Img href="https://www.linkedin.com/in/ida-u-9361b7a9">
          <img src={LinkedIn} alt="linkedin" />
        </Img>
        <Img href="mailto: ida.utterstrom@hotmail.com">
          <img src={Email} alt="email" />
        </Img>
        <Img href="https://wa.me/+46760465094?text=">
          <img src={Phone} alt="phone" />
        </Img>

        <Img href="https://www.instagram.com/idaswebdev/?hl=en">
          <img src={Instagram} alt="instagram" />
        </Img>
      </ImgContainer>
      <Text>
        PX. Business development. Frontend. Craftwork.<br></br>Copyright © 2023
        Ida Utterström
      </Text>
    </Container>
  );
};

export default Footer;

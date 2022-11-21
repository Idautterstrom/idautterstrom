import React from "react";
import styled from "styled-components";

const FootBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 100px;
  margin-top: auto;
  height: 100px;
`;

const Text = styled.p`
  font-family: "poppins", serif;
  font-size: 50px;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  animation: slide-left 10s linear infinite;
  @keyframes slide-left {
    from {
      -webkit-transform: translateX(0);
              transform: translateX(0);
    }
    to {
      -webkit-transform: translateX(-150%);
              transform: translateX(-150%);
    }
  }
  }
`;

const Footer = () => {
  return (
    <FootBox>
      <Container>
        <Text>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CONTACT ME
        </Text>
      </Container>
    </FootBox>
  );
};

export default Footer;

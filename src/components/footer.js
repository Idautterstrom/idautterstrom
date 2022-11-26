import React from "react";
import styled from "styled-components";

const FootBox = styled.a`
  display: flex;
  margin-left: auto;
  text-decoration: none;
`;

const Text = styled.p`
  font-family: "poppins", serif;
  font-size: 40px;
  font-weight: bold;
  color: black;
`;

const Container = styled.div`
  display: flex;

  -moz-transform: translateX(120%);
  -webkit-transform: translateX(120%);
  transform: translateX(120%);
  
  -moz-animation: my-animation 20s linear infinite;
  -webkit-animation: my-animation 20s linear infinite;
  animation: my-animation 20s linear infinite;
}

@-moz-keyframes my-animation {
  from { -moz-transform: translateX(120%); }
  to { -moz-transform: translateX(-120%); }
}

@-webkit-keyframes my-animation {
  from { -webkit-transform: translateX(120%); }
  to { -webkit-transform: translateX(-120%); }
}

@keyframes my-animation {
  from {
    -moz-transform: translateX(120%);
    -webkit-transform: translateX(120%);
    transform: translateX(120%);
  }
  to {
    -moz-transform: translateX(-120%);
    -webkit-transform: translateX(-120%);
    transform: translateX(-120%);
  }
  
`;

const Footer = () => {
  return (
    <FootBox href="/contact">
      <Container>
        <Text>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CONTACT ME
        </Text>
      </Container>
    </FootBox>
  );
};

export default Footer;

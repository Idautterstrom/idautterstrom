import React from "react";
import ReactPlayer from "react-player";
import Video from "../img/background.mp4";
import styled from "styled-components";

const Hero = styled.section`
  width: cover;
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  padding: 50px;
  border-radius: 10px;
  position: absolute;
  justify-content: center;
  margin-left: 10px;
  animation: animation 2s ease-out;
  #slide-in {
    text-align: center;
    color: #fff;
  }
  @keyframes animation {
    0% {
      opacity: 0;
      top: -700px;
    }
    100% {
      top: 0;
    }
  }
  @media (min-width: 768px) {
    align-items: left;
    margin-left: 70px;
    font-size: 35px;
  }
`;

const Text = styled.h2`
  font-family: "raleway", serif;
  color: white;
  font-size: 70px;
  text-shadow: 2px 2px black;
`;

const SmallText = styled.p`
  font-family: "poppins", serif;
  font-size: 30px;
  color: #fbd44a;
  margin-top: -20px;
`;

const Header = () => {
  return (
    <Hero>
      {" "}
      <Box>
        <Text>
          PX. Strategy.<br></br>Craftwork. Frontend.
        </Text>
        <SmallText>This is my Portfolio & Resumé.</SmallText>
      </Box>
      <ReactPlayer url={Video} playing loop muted width="100%" height="100%" />
    </Hero>
  );
};

export default Header;

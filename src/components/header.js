import React from "react";
import ReactPlayer from "react-player";
import Video from "../img/Video2.mp4";
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
  background-color: black;
  position: absolute;
  justify-content: center;
  margin-left: 10px;
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
  font-size: 20px;
  color: white;
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

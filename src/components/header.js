import React from "react";
import ReactPlayer from "react-player";
import Video from "../img/Video2.mp4";
import styled from "styled-components";

const Hero = styled.section`
  width: cover;
  position: relative;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15%;
  padding: 50px;
  border-radius: 10px;
  background-color: black;
  position: absolute;
  justify-content: center;
  margin-left: 10px;
  font-family: "DM Serif Display", serif;
  font-size: 20px;
  color: #c5fad5;
  text-shadow: 2px 2px black;
  @media (min-width: 768px) {
    align-items: left;
    margin-left: 70px;
    font-size: 35px;
  }
`;

const Text = styled.h2`
  font-family: "poppins", serif;
  color: white;
`;

const Header = () => {
  return (
    <Hero>
      {" "}
      <Box>
        <Text>
          Welcome, I'm Ida. <br></br>This is my Portfolio & Resumé.
        </Text>
      </Box>
      <ReactPlayer url={Video} playing loop muted width="100%" height="100%" />
    </Hero>
  );
};

export default Header;

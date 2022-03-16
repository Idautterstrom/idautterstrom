import React from "react";
import ReactPlayer from "react-player";
import heroVideo from "../img/herovideo.mp4";
import styled from "styled-components";

const Hero = styled.section`
  width: cover;
  position: relative;
`;

const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
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

const Header = () => {
  return (
    <Hero>
      {" "}
      <Box>
        <h2>
          Welcome, I'm Ida. <br></br>I design & develop websites. <br></br>For
          fun.
        </h2>
      </Box>
      <ReactPlayer
        url={heroVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
    </Hero>
  );
};

export default Header;

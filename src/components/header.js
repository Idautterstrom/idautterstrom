import React from "react";
/* import ReactPlayer from "react-player"; */
/* import Video from "../img/background.mp4"; */
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
  margin-top: 8%;
  padding: 50px;
  border-radius: 10px;
  position: absolute;
  justify-content: center;
  animation: animation 3s ease-out;
  #slide-in {
    text-align: center;
  }
  @keyframes animation {
    0% {
      opacity: 0;
      left: -700px;
    }
    100% {
      left: 0;
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
  font-size: 80px;
  text-shadow: 2px 2px black;
`;

/* const SmallText = styled.p`
  font-family: "poppins", serif;
  font-size: 30px;
  color: #fbd44a;
  margin-top: -20px;
`; */

const Header = () => {
  return (
    <Hero>
      <Box>
        <Text>
          PX. Frontend.<br></br> Business Strategy.<br></br> Craftwork.
        </Text>
      </Box>
      {/*       <ReactPlayer url={Video} playing loop muted width="100%" height="100%" />{" "} */}
    </Hero>
  );
};

export default Header;

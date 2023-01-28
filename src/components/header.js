import React from "react";
/* import ReactPlayer from "react-player"; */
/* import Video from "../img/background.mp4"; */
import styled from "styled-components";
import Image from "../img/BG1.jpg";
import Navbar from "./navbar";

const Container = styled.div`
  display: flex;
  background-image: url(${Image});
  background-size: cover;
  height: 600px;
  margin-top: -150px;
  padding-top: 40px;
  padding-bottom: 40px;
  align-items: center;
  background-color: #211d1c;
`;

const TitleContainer = styled.div`
  position: relative;
  padding-left: 1em;
  color: #3d1920;
  grid-column: 1 / -1;
  grid-row: 1;

  font-family: "gotu", serif;
  font-size: 50px;
  width: 100%;
  z-index: 2;

  animation: outer-left 1s 1s ease both;
`;

const InnerContainer = styled.div`
  display: inline-block;
  animation: inner-left 1s 1s ease both;
}
  @keyframes text-clip {
    from {
      clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    }
    to {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

  @keyframes outer-left {
    from {
      transform: translateX(50%);
    }
    to {
      transform: none;
    }
  }

  @keyframes inner-left {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: none;
    }
  }
`;

const FirstInner = styled.div`
  display: inline-block;

  animation: inner-left 1s 1s ease both,
    text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
`;

const SecondInner = styled.div`
  animation: text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
`;

const First = styled.div``;

const Second = styled.div`
  display: inline-block;
`;

const Header = () => {
  return (
    <section>
      <Navbar />
      <Container>
        <TitleContainer>
          <InnerContainer>
            <First>
              <FirstInner>PX. Business Strategy.</FirstInner>
            </First>
            <Second>
              <SecondInner>Frontend. Craftwork.</SecondInner>
            </Second>
          </InnerContainer>
        </TitleContainer>
      </Container>
    </section>
  );
};

export default Header;

import React from "react";
/* import ReactPlayer from "react-player"; */
/* import Video from "../img/background.mp4"; */
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-left: 40px;
  margin-right: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  align-items: center;
  background-color: #ede8e2;
`;

const TitleContainer = styled.div`
  padding-left: 1em;
  grid-column: 1 / -1;
  grid-row: 1;

  font-family: "Rische Serif", serif;
  font-size: 60px;
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

const ImageContainer = styled.div`
  grid-row: 1;
  grid-column: 2;
  opacity: 0.2;

  animation: image-in 1s cubic-bezier(0.5, 0, 0.1, 1) 2s backwards;

  @keyframes image-in {
    from {
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }
    to {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
`;

const Image = styled.img`
  display: block;
  width: 700px;
  height: auto;
`;

const Header = () => {
  return (
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

      <ImageContainer>
        <Image
          src="https://images.unsplash.com/photo-1616362355051-6a9f8c434fff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzE0MTYzNQ&ixlib=rb-1.2.1&q=80&w=800&h=600"
          alt=""
        ></Image>
      </ImageContainer>
    </Container>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";
import Green from "../../../img/Greenbag.JPG";
import Black from "../../../img/Blackbag.JPG";
import Computercase from "../../../img/Computercase.JPG";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 40px;
  justify-content: center;
`;

const Img = styled.div`
  display: flex;
  height: 400px;
`;

const Leather = () => {
  return (
    <section>
      <Container>
        <Img>
          <img src={Green} alt="Green" />
        </Img>
        <Img>
          <img src={Black} alt="Black" />
        </Img>
        <Img>
          <img src={Computercase} alt="Computercase" />
        </Img>
      </Container>
    </section>
  );
};

export default Leather;

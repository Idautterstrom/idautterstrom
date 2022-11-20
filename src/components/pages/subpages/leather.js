import React from "react";
import ImageSlider from "../subpages/ImageSlider";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10%;
  margin: 40px;
  height: 400px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-family: "Poppins", serif;
  font-size: 40px;
`;

const Leather = () => {
  const slides = [
    { url: "https://i.ibb.co/HCqn0dS/Greenbag.jpg", title: "Green bag" },
    { url: "https://i.ibb.co/cTTLmwy/Computercase.jpg", title: "Computercase" },
    { url: "https://i.ibb.co/zPvzN26/Blackbag.jpg", title: "Black bag" },
    { url: "https://i.ibb.co/7451bNZ/Lightbag.jpg", title: "Beige bag" },
  ];

  const containerStyles = {
    width: "700px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <Section>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <TextContainer>
        <Text>
          Handmade leather products. Crafted from vegetable tanned ecological
          leather.
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Leather;

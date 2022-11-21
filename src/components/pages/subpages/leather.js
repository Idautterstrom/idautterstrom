import React from "react";
import ImageSlider from "../subpages/ImageSlider";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10%;
  margin-left: 40px;
  margin-right: 40px;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.p`
  font-family: "Poppins", serif;
  font-size: 40px;
`;

const SmallText = styled.p`
  font-family: "Poppins", serif;
  font-size: 20px;
  color: #de8785;
`;

const Leather = () => {
  const slides = [
    { url: "https://i.ibb.co/HCqn0dS/Greenbag.jpg", title: "Green bag" },
    { url: "https://i.ibb.co/cTTLmwy/Computercase.jpg", title: "Computercase" },
    { url: "https://i.ibb.co/zPvzN26/Blackbag.jpg", title: "Black bag" },
    { url: "https://i.ibb.co/7451bNZ/Lightbag.jpg", title: "Beige bag" },
    {
      url: "https://i.ibb.co/ng7QKwN/1970-F5-D4-C603-43-EA-96-DC-B1-C09-DB04-D3-C-9-BE4-ECB0-850-C-4974-ABFA-E33-FC6-ED2406-2.jpg",
      title: "Beige bag",
    },
    {
      url: "https://i.ibb.co/5M4k6XL/E9-E70-AF0-B213-45-B1-AEDB-AF4-AE4-FDF9-E3-86941-EA2-167-B-4437-AA1-C-948-A9-DC54745.jpg",
      title: "Beige bag",
    },
    {
      url: "https://i.ibb.co/FbM93GF/F59-D016-E-3-A45-458-F-BCBC-B68-CCB0-D06-B9-990-C6103-7-A2-D-47-FD-B67-E-57725079-FB3-F.jpg",
      title: "Beige bag",
    },
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
        <SmallText>Price upon request.</SmallText>
      </TextContainer>
    </Section>
  );
};

export default Leather;

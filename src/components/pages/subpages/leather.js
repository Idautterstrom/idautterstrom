import React from "react";
import ImageSlider from "../subpages/ImageSlider";
import styled from "styled-components";
import Instagram from "../../../img/Instagram.png";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
  margin-left: 100px;
  margin-right: 100px;
  background-color: #ede8e2;
  box-shadow: 5px 5px 10px lightgray;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 450px;
  margin-left: 40px;
  margin-right: 40px;
`;

const Text = styled.p`
  font-family: "Rische Serif", serif;
  text-align: center;
  font-size: 30px;
`;

const SmallText = styled.p`
  font-family: "Poppins", serif;
  text-align: center;
  font-size: 15px;
`;

const ImageContainer = styled.div``;

const Img = styled.a`
  display: flex;
  height: 40px;
  justify-content: center;
`;

const Leather = () => {
  const slides = [
    {
      url: "https://i.ibb.co/FbM93GF/F59-D016-E-3-A45-458-F-BCBC-B68-CCB0-D06-B9-990-C6103-7-A2-D-47-FD-B67-E-57725079-FB3-F.jpg",
      title: "Beige bag",
    },
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
        <SmallText>View more on Instagram.</SmallText>
        <ImageContainer>
          <Img href="https://www.instagram.com/craftedbyida/?hl=en">
            <img src={Instagram} alt="instagram" />
          </Img>
        </ImageContainer>
      </TextContainer>
    </Section>
  );
};

export default Leather;

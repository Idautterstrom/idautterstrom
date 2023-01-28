import React from "react";
import styled from "styled-components";
import Navbarsub from "../navbarsub";

const Container = styled.section`
  display: flex;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 100px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 50px;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  background-color: #b1aba3;
  padding: 100px;
  justify-content: center;
`;

const Image = styled.img`
  display: flex;
  height: 250px;
  width: 250px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -40px;
  width: 500px;
`;

const Text = styled.p`
  font-family: "gotu", serif;
  font-size: 50px;
  margin-bottom: -10px;
`;

const SmallText = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 20px;
`;

const Other = () => {
  return (
    <Container>
      <Navbarsub />
      <Section>
        <ImageContainer>
          <Image src="https://i.ibb.co/R97gZkL/IMG-0761.jpg" alt=""></Image>
          <Image src="https://i.ibb.co/ct4S0Gp/IMG-1142.jpg" alt=""></Image>
          <Image src="https://i.ibb.co/v3yYp7f/IMG-1150.jpg" alt=""></Image>
          <Image src="https://i.ibb.co/sH7HZ1s/IMG-1149.jpg" alt=""></Image>
          <Image src="https://i.ibb.co/njWjr3d/IMG-1143.jpg" alt=""></Image>
          <Image src="https://i.ibb.co/x1btRPq/IMG-0642-2.jpg" alt=""></Image>
          <Image src="https://i.ibb.co/YZXcwLJ/IMG-0762-2.jpg" alt=""></Image>
          <Image src="https://i.ibb.co/KbQMBP0/IMG-1146.jpg" alt=""></Image>
          <Image src="https://i.ibb.co/s1KqD8j/IMG-1104-2.jpg" alt=""></Image>
        </ImageContainer>

        <TextContainer>
          <Text>Handmade ceramics.</Text>
          <SmallText>
            Handmade in a studio in Barcelona. Items not for sale.
          </SmallText>
        </TextContainer>
      </Section>
    </Container>
  );
};

export default Other;

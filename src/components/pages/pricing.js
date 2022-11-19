import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

const HeaderContainer = styled.div`
  padding: 20px;
`;

const Header = styled.h1`
  font-family: "DM Serif Display", serif;
  font-size: 20px;
  color: #fbbfca;
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SmallHeader = styled.h2`
  font-family: "Poppins", serif;
  font-size: 15px;
`;

const Text = styled.p`
  font-family: "Poppins", serif;
  font-size: 12px;
  margin-top: -10px;
`;

const TextVat = styled.p`
  font-family: "Poppins", serif;
  font-size: 10px;
`;

const Pricing = () => {
  return (
    <Section>
      <HeaderContainer>
        <Header>PRICING</Header>
      </HeaderContainer>
      <DivContainer>
        <Container>
          <SmallHeader>SEK</SmallHeader>
          <Text>Single-page website: 5000 SEK</Text>
          <Text>Multi-page website: 6000 SEK + 500 SEK per added page</Text>
          <TextVat>All prices excl. VAT.</TextVat>
        </Container>
        <Container>
          <SmallHeader>&euro; Euro</SmallHeader>
          <Text>Single-page website: 500 &euro;</Text>
          <Text>Multi-page website: 600 &euro; + 50 &euro; per added page</Text>
          <TextVat>All prices excl. VAT.</TextVat>
        </Container>
      </DivContainer>
    </Section>
  );
};

export default Pricing;

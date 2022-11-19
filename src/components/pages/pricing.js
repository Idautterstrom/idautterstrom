import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  border-bottom-style: double;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: center;
`;

const Header = styled.h1`
  font-family: "raleway", serif;
  font-size: 40px;
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  justify-content: center;
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
        <Header>price for websites.</Header>
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

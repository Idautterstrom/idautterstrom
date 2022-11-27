import React from "react";
import styled from "styled-components";
import Browser from "../../img/browser.png";
import SingleBrowser from "../../img/web-design.png";
import Maintainance from "../../img/maintainance.png";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  align-items: center;
`;

const Header = styled.h1`
  font-family: "Rische Serif", serif;
  font-size: 40px;
`;

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 1000px;
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #ede8e2;
  box-shadow: 5px 5px 10px lightgray;
`;

const SmallHeader = styled.h2`
  font-family: "Rische Serif", serif;
  font-size: 15px;
`;

const Text = styled.p`
  font-family: "Poppins", serif;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: -10px;
`;

const TextVat = styled.p`
  font-family: "Poppins", serif;
  font-size: 10px;
  margin-top: 40px;
`;

const Icon = styled.img`
  width: 50px;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  font-family: "Poppins", serif;
  font-size: 12px;
`;

const Contact = styled.a`
  font-family: "Rische Serif", serif;
  text-decoration: none;
  color: black;
  font-size: 15px;
  padding: 15px;
  margin-top: 20px;
  border-style: solid;
`;

const Pricing = () => {
  return (
    <Section>
      <Header>Price for websites</Header>
      <DivContainer>
        <Container>
          <Icon src={SingleBrowser} alt="single website icon" />
          <SmallHeader>Single page website</SmallHeader>
          <InfoText>Adapted for computer, tablet & mobile view.</InfoText>
          <Text>6000 SEK</Text>
          <Text>600 &euro;</Text>
          <TextVat>All prices excl. VAT.</TextVat>
          <Contact href="/contact">Contact me</Contact>
        </Container>
        <Container>
          <Icon src={Browser} alt="multipage website icon" />
          <SmallHeader>Multipage website</SmallHeader>
          <InfoText>Adapted for computer, tablet & mobile view.</InfoText>
          <Text>7000 SEK + 1000 SEK per added page</Text>
          <Text>700 &euro; + 100 &euro; per added page</Text>
          <TextVat>All prices excl. VAT.</TextVat>
          <Contact href="/contact">Contact me</Contact>
        </Container>
        <Container>
          <Icon src={Maintainance} alt="maintainance website icon" />
          <SmallHeader>Website maintenance</SmallHeader>
          <InfoText>Info & style updates on current pages.</InfoText>
          <Text>2000 SEK per year</Text>
          <Text>200 &euro; per year</Text>
          <TextVat>All prices excl. VAT.</TextVat>
          <Contact href="/contact">Contact me</Contact>
        </Container>
      </DivContainer>
    </Section>
  );
};

export default Pricing;

import React from "react";
import styled from "styled-components";
import Browser from "../../img/browser.png";
import SingleBrowser from "../../img/web-design.png";
import Maintainance from "../../img/maintainance.png";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;
`;

const Header = styled.h1`
  font-family: "gotu", serif;
  font-size: 30px;
`;

const DivContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 50px;
  justify-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #f7f6f4;
`;

const Color = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

const SmallHeader = styled.h2`
  font-family: "gotu", serif;
  font-size: 15px;
`;

const Text = styled.p`
  font-family: "gotu", serif;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: -10px;
`;

const TextVat = styled.p`
  font-family: "Cormorant Garamond", serif;

  font-size: 12px;
  margin-top: 40px;
`;

const Icon = styled.img`
  width: 50px;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  font-family: "Cormorant Garamond", serif;
  text-align: center;
  font-size: 15px;
`;

const Contact = styled.a`
  font-family: "gotu", serif;
  text-decoration: none;
  color: black;
  font-size: 12px;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

const Pricing = () => {
  return (
    <Section>
      <Header>Prices</Header>
      <DivContainer>
        <Color>
          <Container>
            <Icon src={SingleBrowser} alt="single website icon" />
            <SmallHeader>Single page website</SmallHeader>
            <InfoText>Adapted for computer, tablet & mobile view.</InfoText>
            <Text>6000 SEK</Text>
            <Text>600 &euro;</Text>
            <TextVat>All prices excl. VAT.</TextVat>
            <Contact href="/contact">Contact me</Contact>
          </Container>
        </Color>
        <Color>
          <Container>
            <Icon src={Browser} alt="multipage website icon" />
            <SmallHeader>Multipage website</SmallHeader>
            <InfoText>Adapted for computer, tablet & mobile view.</InfoText>
            <Text>7000 SEK + 1000 SEK per added page</Text>
            <Text>700 &euro; + 100 &euro; per added page</Text>
            <TextVat>All prices excl. VAT.</TextVat>
            <Contact href="/contact">Contact me</Contact>
          </Container>
        </Color>
        <Color>
          <Container>
            <Icon src={Maintainance} alt="maintainance website icon" />
            <SmallHeader>Website maintenance</SmallHeader>
            <InfoText>Minor info & style updates on current pages.</InfoText>
            <Text>2000 SEK per year</Text>
            <Text>200 &euro; per year</Text>
            <TextVat>All prices excl. VAT.</TextVat>
            <Contact href="/contact">Contact me</Contact>
          </Container>
        </Color>
      </DivContainer>
    </Section>
  );
};

export default Pricing;

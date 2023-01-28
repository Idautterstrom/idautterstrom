import React from "react";
import styled from "styled-components";
import RB from "img/Previous work/RB.jpg";
import BRF from "img/BRFGBG.jpeg";
import Pricing from "./pricing";
import Navbarsub from "../navbarsub";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PortfolioContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 250px;
  padding-right: 250px;
  padding-top: 70px;
  padding-bottom: 50px;
`;

const WebContainer = styled.div`
  font-family: "gotu", serif;
  display: flex;
  gap: 40px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const NameHeader = styled.h1`
  font-family: "gotu", serif;
  font-size: 30px;
`;

const SecondName = styled.h1`
  font-family: "arapey";
  font-style: italic;
  font-size: 40px;
`;

const SecondHeader = styled.h1`
  font-family: "arapey";
  font-style: italic;
  font-size: 40px;
  margin-left: 90px;
  margin-top: -40px;
`;

const Company = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 18px;
  color: black;
  padding-top: 80px;
  text-align: right;
`;

const CenterText = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 18px;
  color: black;
  padding-top: 80px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px;
  gap: 20px;
  background-color: #c3c1b2;
  width: 500px;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const ImgOne = styled.img`
  display: flex;
  border-radius: 400px 400px 0px 0px;
  width: 200px;
  margin-bottom: -80px;
`;

const ImgTwo = styled.img`
  display: flex;
  border-radius: 10px;
  width: 450px;
`;

const Webdev = () => {
  return (
    <Section>
      <Navbarsub />

      <PortfolioContainer>
        <WebContainer>
          <Container>
            <NameContainer>
              <NameHeader>WEB</NameHeader>
              <SecondName>development</SecondName>
            </NameContainer>
            <ImgOne src={RB} alt="Recommended by" />
            <CenterText>
              I design & develop single & multipage websites, career sites &
              applications for freelancers & small companies.
            </CenterText>
          </Container>
          <Container>
            <ImgTwo src={BRF} alt="BRF göteborgshus 8" />
            <SmallContainer>
              <div>
                <NameHeader>RESPONSIVE</NameHeader>
                <SecondHeader>websites</SecondHeader>
              </div>
              <Company>
                I develop websites & applications using React, JavaScript, HTML
                & CSS, or Wordpress. I always provide responsive design adapted
                for computer, tablet & mobile.
              </Company>
            </SmallContainer>
          </Container>
        </WebContainer>
      </PortfolioContainer>
      <Pricing />
    </Section>
  );
};

export default Webdev;

import React from "react";
import styled from "styled-components";
import Heather from "./header";
import Contact from "./pages/contacthome";
import Featured from "./pages/featuredhome";
import QuoteSign from "../img/Quotation.png";

const HomeGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 30px;
  margin-right: 30px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 150px;
    margin-right: 150px;
    grid-gap: 50px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  @media (min-width: 768px) {
    justify-content: right;
  }
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  border-radius: 400px 400px 0px 0px;
  border: 1px solid black;
  padding: 8px;
  @media (min-width: 768px) {
    width: 350px;
  }
`;

const Text = styled.p`
text-align: center;
font-family: "gotu", serif;
font-size: 20px;
@media (min-width: 768px) {
  font-size: 30px;
  text-align:left; 
`;

const InfoText = styled.p`
font-family: "Cormorant Garamond", serif;
text-align: center;
@media (min-width: 768px) {
  font-size: 20px;
  text-align:left; 
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-left: 10px;
  margin-right: 10px
  padding-bottom: 50px;
  margin-top: 100px;
  justify-content: center;
`;

const SmallContainer = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
`;

const Quote = styled.p`
  font-family: "gotu", serif;
  font-size: 15px;
  text-align: center;
`;

const Name = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 15px;
`;

const Img = styled.img`
  display: flex;
  width: 15px;
`;

const Header = () => {
  return (
    <HomeGrid>
      <Heather />
      <Container>
        <ImageContainer>
          <Image
            src="
            https://i.ibb.co/CvfgSpk/jagro-d.png"
            alt=""
          ></Image>
        </ImageContainer>
        <div>
          <Text>WELCOME TO MY CREATIVE HUB</Text>
          <InfoText>
            With a passion for design, web development, business strategy,
            communication, marketing, content creation, people experience,
            change management, leadership & agile methology I offer project
            management & development of websites for freelancers & small
            businesses.
          </InfoText>
        </div>
      </Container>
      <Featured />
      <QuoteContainer>
        <SmallContainer>
          <Img src={QuoteSign} alt="logo" />
          <Quote>
            Ida really inspires me in her way of getting ideas come to life in
            such an effective and spot on - kind of way!
          </Quote>
          <Name>Anonymous feedback, Recommended by</Name>
        </SmallContainer>
        <SmallContainer>
          <Img src={QuoteSign} alt="logo" />
          <Quote>
            Inspiring that she's always hands on and rolling up her sleeves,
            always wise knowing what to do and brave to speak the truth. But
            always humble, never proud or letting her ego speak.
          </Quote>
          <Name>Anonymous feedback, Recommended by</Name>
        </SmallContainer>
        <SmallContainer>
          <Img src={QuoteSign} alt="logo" />
          <Quote>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an
          </Quote>
          <Name>Urban Rhodin, Rhodin Consulting</Name>
        </SmallContainer>
      </QuoteContainer>

      <Contact />
    </HomeGrid>
  );
};

export default Header;

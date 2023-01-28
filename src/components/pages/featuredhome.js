import React from "react";
import styled from "styled-components";
import Arrow from "img/arrow-right2.png";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
`;

const DarkContainer = styled.div`
  background-color: #211d1c;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const SecondImage = styled.img`
  width: 300px;
  height: auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 10px;
`;

const WhiteText = styled.p`
  font-family: "gotu", serif;
  font-size: 20px;
  color: white;
  margin-bottom: -10px;
`;

const WhiteInfoText = styled.p`
  color: white;
  font-family: "Cormorant Garamond", serif;
  font-size: 15px;
`;

const Button = styled.a``;

const Img = styled.img`
  width: 30px;
`;

const Featured = () => {
  return (
    <section>
      <Section>
        <DarkContainer>
          <TextContainer>
            <SecondImage
              src="https://i.ibb.co/xqwG8tP/dell-7-ZWVn-VSaaf-Y-unsplash.jpg"
              alt=""
            ></SecondImage>
            <WhiteText>Web development</WhiteText>
            <WhiteInfoText>
              I design and develop Single- and multipage websites for
              freelancers & small companies. Using Javascript, HTML, CSS &
              wordpress.
            </WhiteInfoText>
            <Button href="/webdevelopment">
              <Img src={Arrow} alt="logo" />
            </Button>
          </TextContainer>

          <TextContainer>
            <SecondImage
              src="https://i.ibb.co/kJdp60Z/pexels-fauxels-3182773-2.jpg"
              alt=""
            ></SecondImage>
            <WhiteText>My resumé</WhiteText>
            <WhiteInfoText>
              View my experience in Business Strategy, Project Managagement,
              Product Ownership, People Experience & Marketing.
            </WhiteInfoText>
            <Button href="/resume">
              <Img src={Arrow} alt="logo" />
            </Button>
          </TextContainer>

          <TextContainer>
            <SecondImage
              src="https://i.ibb.co/yVBp4qS/IMG-4586.jpg"
              alt=""
            ></SecondImage>
            <WhiteText>Leather work</WhiteText>
            <WhiteInfoText>
              Handmade products made from vegetable tanned leather. All products
              are made from secondhand leather waste from other industries.
            </WhiteInfoText>
            <Button href="/leatherwork">
              <Img src={Arrow} alt="logo" />
            </Button>
          </TextContainer>

          <TextContainer>
            <SecondImage
              src="https://i.ibb.co/x1btRPq/IMG-0642-2.jpg"
              alt=""
            ></SecondImage>
            <WhiteText>Other</WhiteText>
            <WhiteInfoText>
              I have a passion for anything creative. View my other projects &
              hobbies.
            </WhiteInfoText>
            <Button href="/other">
              <Img src={Arrow} alt="logo" />
            </Button>
          </TextContainer>
        </DarkContainer>
      </Section>
    </section>
  );
};

export default Featured;

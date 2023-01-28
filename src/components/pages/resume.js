import React from "react";
import styled from "styled-components";
import Navbarsub from "../navbarsub";

const Section = styled.section``;

const NameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-items: center;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 50px;
  height: 400px;
`;

const NameHeader = styled.h1`
  font-family: "gotu", serif;
  font-size: 50px;
`;

const ImageContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 350px;
  height: auto;
  margin-top: 50px;
  border: 1px solid black;
  padding: 8px;
  border-radius: 400px 400px 0px 0px;
`;

const SecondImage = styled.img`
  height: 400px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 8px;
  margin-top: -100px;
`;

const FeaturedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;
const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Number = styled.p`
  font-family: "gotu", serif;
  margin-bottom: -5px;
  font-size: 25px;
`;

const Header = styled.p`
  display: grid;
  font-family: "gotu", serif;
  font-size: 25px;
  font-weight: bold;
`;

const FeaturedHeader = styled.p`
  display: grid;
  font-family: "gotu", serif;
  font-size: 25px;
  font-weight: bold;
`;

const Title = styled.p`
  font-family: "Gotu", serif;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: -20px;
`;

const Company = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 18px;
`;

const FeaturedProjects = styled.div`
  padding: 100px;
  background-color: #c3c1b2;
  margin-left: 100px;
  margin-right: 100px;
`;

const Project = styled.p`
  font-family: "Gotu", serif;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: -5px;
`;

const Description = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 18px;
`;

const Container = styled.div``;

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 100px;
  padding-right: 100px;
  margin-left: 50px;
  margin-right: 50px;
  justify-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Contact = styled.a`
  font-family: "gotu", serif;
  text-decoration: none;
  font-size: 15px;
  padding: 10px;
  margin-top: 20px;
  border-style: solid;
  color: black;
  border-radius: 10px;
`;

const Resume = () => {
  return (
    <Section>
      <Navbarsub />
      <NameContainer>
        <NameHeader>
          Ida Utterström
          <Company>
            Business Developer, Marketing, Product & Client delivery Lead @
            Recommended by.
          </Company>
        </NameHeader>

        <ImageContainer>
          <Image src="https://i.ibb.co/CvfgSpk/jagro-d.png" alt=""></Image>
        </ImageContainer>
      </NameContainer>
      <FeaturedProjects>
        <FeaturedHeader>Featured Projects & Responsibilities</FeaturedHeader>
        <FeaturedContainer>
          <SmallContainer>
            <Number>01</Number>
            <Project>Product & Client delivery Lead</Project>
            <Description>
              Owner of our team delivery service where we provide the customer
              with a tailor-made HR department. Managing & implementing concept
              & sales improvement opportunities. Working closely with the
              consultant team to ensure alignment & clarity of requirements &
              expectations.
            </Description>
          </SmallContainer>
          <SmallContainer>
            <Number>02</Number>
            <Project>Marketing Lead</Project>
            <Description>
              Driving our marketing- & EB strategy to increase sales & awareness
              of our brand. Identifying & implementing needs for content
              creation, social media, website & career site. Ensure alignment
              with marketing team, sales & overall business needs.
            </Description>
          </SmallContainer>
          <SmallContainer>
            <Number>03</Number>
            <Project>Project Lead: New business model</Project>
            <Description>
              Managing change of business model from hourly pricing to value
              based pricing for the purpose of increasing revenue & quality of
              customer delivery. Ensuring business model is in line with our
              internal way of working & enhancing best possible delivery towards
              our customers.
            </Description>
          </SmallContainer>
          <SmallContainer>
            <Number>04</Number>
            <Project>Project Lead: Teal organization</Project>
            <Description>
              Managing organizational change towards becoming an organization
              without managers or hierarchies. Idetifying, creating &
              implementing process needs in terms of decision-making, self
              leadership, way of acting, change management, internal
              communication, performance management & autonomous team work.
            </Description>
          </SmallContainer>
          <SmallContainer>
            <Number>05</Number>
            <Project>Project Lead: Positioning & Rebranding</Project>
            <Description>
              Initiating & leading the project to rebrand Recommended by due to
              new industry positioning.
            </Description>
          </SmallContainer>
          <SmallContainer>
            <Number>06</Number>
            <Project>Project Lead: Leadership aspirations</Project>
            <Description>
              Together with the leadership team identifying & create alignment
              for overall leadership aspirations. The goal was to create a
              reference point for hiring & leadership performance, as well as
              increasing the commitment for improvement & expectations of
              leaders at Mojang Studios.
            </Description>
          </SmallContainer>
          <SmallContainer>
            <Number>07</Number>
            <Project>Project Lead: Value-driven recruitment</Project>
            <Description>
              Designing & implementing a value-driven recruitment organization
              for Mojang Studios. The work included identifying needs for &
              improving the recruitment process, educate & coach hiring teams in
              the new process, as well as value-driven & bias free recruitment.
            </Description>
          </SmallContainer>
          <SmallContainer>
            <Number>08</Number>
            <Project>Jury member: Business model awards</Project>
            <Description>
              In collaboration with Affärsvärlden, Cordial & 4Potentials,
              analyzing companies that challange today's business models &
              markets.
            </Description>
          </SmallContainer>
          <SmallContainer></SmallContainer>
        </FeaturedContainer>
      </FeaturedProjects>
      <ExperienceContainer>
        <ImageContainer>
          <SecondImage src="https://i.ibb.co/hmC4fWX/8443-CB43-0-B66-4586-9749-54-FBED2-F2-C9-A-1-201-a.jpg" />
        </ImageContainer>
        <Container>
          <Header>7+ years of Experience</Header>
          <Title>Business developer</Title>
          <Company>Recommended by AB</Company>
          <Title>People Experience Consultant</Title>
          <Company>Whispr Group</Company>
          <Title>People Experience Consultant</Title>
          <Company>Mojang Studios</Company>
          <Title>People & Performance Coordinator</Title>
          <Company>Academic Work</Company>
          <Title>Recruiter</Title>
          <Company>Academic Work</Company>
        </Container>
        <Container>
          <Header>Education</Header>

          <Title>
            Master's degree in Human Resource Management & Development
          </Title>
          <Company>Linköping's University</Company>
          <Title>Bachelor's degree in Economics</Title>
          <Company>Mälardalen's University</Company>
          <Title>Frontend development bootcamp</Title>
          <Company>Technigo</Company>
          <ButtonContainer>
            <Contact href="/contact">Contact me</Contact>
          </ButtonContainer>
        </Container>
      </ExperienceContainer>
    </Section>
  );
};

export default Resume;

import React from "react";
import styled from "styled-components";
import Img from "../../../img/jag.jpg";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  margin-left: 40px;
  margin-right: 40px;
`;

const Picture = styled.div`
  display: flex;
  margin-top: 35px;
  height: 400px;
  width: 250px;
  box-shadow: 5px 5px 10px lightgray;
`;

const Header = styled.p`
  display: grid;
  font-family: "raleway", serif;
  font-size: 25px;
  font-weight: bold;
`;

const Title = styled.p`
  font-family: "poppins", serif;
  font-weight: bold;
  font-size: 15px;
`;

const Company = styled.p`
  font-family: "poppins", serif;
  font-size: 12px;
`;

const FeaturedProjects = styled.div`
  grid-column: span 2;
`;

const Container = styled.div``;

const Resume = () => {
  return (
    <Section>
      <Picture>
        <img src={Img} alt="me" />
      </Picture>
      <div>
        <h1>About me</h1>
        <div>hey hahah</div>
      </div>

      <div>
        <Header>7 + years of Experience</Header>
        <Container>
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
        <div>
          <Header>Education</Header>
          <div>
            <Title>
              Master's degree in Human Resource Management & Development
            </Title>
            <Company>Linköping's University</Company>
            <Title>Bachelor's degree in Economics</Title>
            <Company>Mälardalen's University</Company>
            <Title>Frontend development bootcamp</Title>
            <Company>Technigo</Company>
          </div>
        </div>
      </div>

      <FeaturedProjects>
        <Header>Featured projects</Header>
        <div>
          <Title>Product Owner</Title>
          <Company>
            Owner of our team delivery service where we provide the customer
            with a tailor-made HR department. Managing & implementing concept &
            sales improvement opportunities. Working closely with the consultant
            team to ensure alignment & clarity of requirements & expectations.
          </Company>
          <Title>Project Manager: Teal organization</Title>
          <Company>
            Managing organizational change towards becoming an organization
            without managers or hierarchies. Idetifying, creating & implementing
            process needs in terms of decision-making, self leadership, way of
            acting, change management, internal communication, performance
            management & autonomous team work.
          </Company>
          <Title>Project Manager: New business model</Title>
          <Company>
            Managing change of business model from hourly pricing to value based
            pricing for the purpose of increasing revenue & quality of customer
            delivery. Ensuring business model is in line with our internal way
            of working & enhancing best possible delivery towards our customers.
          </Company>
          <Title>Marketing Manager</Title>
          <Company>
            Driving our marketing- & EB strategy. Identifying & implementing
            needs for content creation, social media, website & career site.
            Ensure alignment with marketing team, sales & overall needs.
          </Company>
          <Title>Jury member: Business model awards</Title>
          <Company>
            In collaboration with Affärsvärlden, Cordial & 4Potentials,
            analyzing companies that challange today's business models &
            markets.
          </Company>
          <Title>Project Manager: Leadership aspirations</Title>
          <Company>
            Together with the leadership team identifying & create alignment for
            overall leadership aspirations. The goal was to create a reference
            point for hiring & leadership performance, as well as increasing the
            commitment for improvement & expectations of leaders at Mojang
            Studios.
          </Company>
          <Title>Project Manager: Value-driven recruitment</Title>
          <Company>
            Designing & implementing a value-driven recruitment organization for
            Mojang Studios. The work included identifying needs for & improving
            the recruitment process, educate & coach hiring teams in the new
            process, as well as value-driven & bias free recruitment.
          </Company>
        </div>
      </FeaturedProjects>
    </Section>
  );
};

export default Resume;

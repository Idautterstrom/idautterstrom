/* import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  margin-top: -10px;
  text-align: left;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  } ;
`;

const DivContainer = styled.div`
  display: flex;
  grid-gap: 30px;
  margin-top: -20px;
`;

const Header = styled.h1`
  font-family: "DM Serif Display", serif;
  font-size: 30px;
  font-weight: bold;
`;

const Div = styled.div`
  background: #fbbfca;
  padding: 20px;
  display: flex;
  grid-template-columns; row;
`;

const DivNoColor = styled.div`
  padding: 20px;
`;

const Text = styled.p`
  text-align: justify;
  font-family: "Poppins", serif;
  font-size: 10px;
`;

const TextColor = styled.p`
  text-align: justify;
  font-family: "Poppins", serif;
  font-weight: bold;
  font-size: 10px;
  color: #ef5157;
`;

const CitatContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 80px;
  margin-right: 80px;
`;

const Citat = styled.a`
  display: flex;
  text-decoration: none;
  font-size: 15px;
  font-family: "DM Serif Display", serif;
  color: #ef5157;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const Info = () => {
  return (
    <Container>
      <DivNoColor>
        <Header>About</Header>
        <DivContainer>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </DivContainer>
      </DivNoColor>
      <Div>
        <CitatContainer>
          <Citat href="/featured">
            "Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </Citat>
          <TextColor>Name, Company</TextColor>
        </CitatContainer>
      </Div>
    </Container>
  );
};

export default Info;
 */

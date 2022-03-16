import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 10px;
  text-align: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin-left: 100px;
    margin-right: 100px;
  } ;
`;

const Header = styled.h1`
  font-family: "poppins", serif;
`;

const Text = styled.p`
`;

const About = () => {
  return (
    <Container>
      <div>
        <Header>About</Header>
        <Text>
          dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </div>
      <div>
        <Header>Featured</Header>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Text>
      </div>
    </Container>
  );
};

export default About;

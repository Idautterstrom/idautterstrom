import React from "react";
import styled from "styled-components";

import Header from "./header";

const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
  }
`;

const Home = () => {
  return (
    <HomeGrid>
      <div>
        <Header />
      </div>
    </HomeGrid>
  );
};

export default Home;

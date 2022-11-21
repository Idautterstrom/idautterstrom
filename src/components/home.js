import React from "react";
import styled from "styled-components";

import Heather from "./header";

const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
  }
`;

const Header = () => {
  return (
    <HomeGrid>
      <Heather />
    </HomeGrid>
  );
};

export default Header;

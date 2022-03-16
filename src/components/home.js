import React from "react";
import styled from "styled-components";

import Navbar from "./navbar";
import Header from "./header";
import About from "./about";
import Footer from "./footer";

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
        <Navbar />
        <Header />
      </div>
      <About />
      <Footer />
    </HomeGrid>
  );
};

export default Home;

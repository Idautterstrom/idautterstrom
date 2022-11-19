import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/home";
import About from "./components/pages/about";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Featured from "./components/pages/featured";
import Pricing from "./components/pages/pricing";
import Contact from "./components/pages/contact";

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const App = () => {
  return (
    <BrowserRouter>
      <Body>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Body>
    </BrowserRouter>
  );
};

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/home";
import Footer from "./components/footer";
import Featured from "./components/pages/featured";
import Pricing from "./components/pages/pricing";
import Contact from "./components/pages/contact";
import Leather from "./components/pages/leather";
import Other from "./components/pages/other";
import Resume from "./components/pages/resume";
import Webdev from "./components/pages/webdev";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #e5e4de;
`;

export const App = () => {
  return (
    <BrowserRouter>
      <Body>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leatherwork" element={<Leather />} />
          <Route path="/other" element={<Other />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/webdevelopment" element={<Webdev />} />
        </Routes>
        <Footer />
      </Body>
    </BrowserRouter>
  );
};

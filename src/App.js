import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "./img/background3.jpg";

import Home from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Featured from "./components/pages/featured";
import Pricing from "./components/pages/pricing";
import Contact from "./components/pages/contact";
import Leather from "./components/pages/subpages/leather";
import Other from "./components/pages/subpages/other";
import Resume from "./components/pages/subpages/resume";
import Webdev from "./components/pages/subpages/webdev";

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${BackgroundImage});
  width: 100%;
  height: 100%;
`;

export const App = () => {
  return (
    <BrowserRouter>
      <Body>
        <Navbar />
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

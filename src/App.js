import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home";
import About from "./components/pages/about";
import Navbar from "components/navbar";
import Footer from "components/footer";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

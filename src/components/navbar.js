import React from "react";
import styled from "styled-components";
/* import logo from "../img/ida-logo.jpeg"; */

const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding-right: 30px;
    padding-left: 30px;
    background-color: #e2d1f9;
    border: 1px solid black;
  }
`;

const Navlinks = styled.div`
  display: flex;
  gap: 70px;
`;

const Link = styled.a`
  font-family: "poppins", sans serif;
  text-decoration: none;
  font-size: 10px;
  font-weight: bold;
  color: #317773;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: green;
  }
`;

const Logo = styled.p`
  font-family: "DM Serif Display", serif;
  font-size: 40px;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>WEB DESIGN</Logo>
      <Navlinks>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Featured</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Contact</Link>
      </Navlinks>
    </Nav>
  );
};

export default Navbar;

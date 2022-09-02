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
  font-size: 12px;
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
      <Logo>'FANCY LOGO'</Logo>
      <Navlinks>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/featured">Featured</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
      </Navlinks>
    </Nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/navbar.css";
import Logo from "../img/LOGO white.png";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  padding-bottom: 100px;
  background-color: #211d1c;
`;

const List = styled.ul`
  list-style-type: none;
  padding-right: 10px;
`;

const Items = styled.li`
  cursor: pointer;
  text-align: right;
  margin-right: 10px;
`;

const Link = styled.a`
  color: white;
  font-family: "Cormorant Garamond", serif;
  font-size: 20px;
  text-decoration: none;
`;

const LinkContainer = styled.div`
  position: absolute;
  margin-top: 20px;
`;

const LogoContainer = styled.a`
  display: flex;
  position: absolute;
  left: 20px;
  height: 25px;
  padding: 5px;
`;

const Button = styled.button`
  display: flex;
  position: absolute;
  background: none;
  border: none;
  right: 20px;
  padding: 5px;
  cursor: pointer;
  color: white;
  font-size: 18px;
`;

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <Nav>
      <LogoContainer href="/">
        <img src={Logo} alt="logo" />
      </LogoContainer>
      {toggleMenu && (
        <LinkContainer>
          <List className="list">
            <Items className="items">
              <Link className="link" href="/featured">
                featured
              </Link>
            </Items>
            <Items className="items">
              <Link className="link" href="/contact">
                contact
              </Link>
            </Items>
          </List>
        </LinkContainer>
      )}
      <Button onClick={toggleNav} className="btn">
        <FontAwesomeIcon icon={faBars} />
      </Button>
    </Nav>
  );
}

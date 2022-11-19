import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/navbar.css";
import Logo from "../img/LOGO 2.png";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  height: 20px;
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
    <div>
      <nav>
        <LogoContainer>
          <img src={Logo} alt="logo" />
        </LogoContainer>

        {(toggleMenu || screenWidth > 500) && (
          <ul className="list">
            <li className="items">
              <a className="link" href="/">
                home
              </a>
            </li>
            <li className="items">
              <a className="link" href="/about">
                about
              </a>
            </li>
            <li className="items">
              <a className="link" href="/featured">
                featured
              </a>
            </li>
            <li className="items">
              <a className="link" href="/pricing">
                pricing
              </a>
            </li>
            <li className="items">
              <a className="link" href="/contact">
                contact
              </a>
            </li>
          </ul>
        )}

        <button onClick={toggleNav} className="btn">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </div>
  );
}

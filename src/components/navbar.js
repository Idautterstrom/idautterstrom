import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/navbar.css";

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
        <h1 className="logo">'FANCY LOGO'</h1>

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

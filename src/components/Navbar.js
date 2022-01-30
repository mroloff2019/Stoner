import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { elRefs, scrollToEl, showMintPage } = props

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-logo">
            Super Stoner Costume Party
          </h1>
          {!showMintPage &&
            (
              <>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={() => scrollToEl(elRefs.welcomeRef)}>
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={() => scrollToEl(elRefs.welcomeRef)}>
                      Socials
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={() => scrollToEl(elRefs.roadMapRef)}>
                      Roadmap
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={() => scrollToEl(elRefs.teamRef)}>
                      Team
                    </Link>
                  </li>
                </ul>
              </>
            )
          }
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items"></div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Super Stoner Costume Party <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights"></small>
          <div className="social-icons">
            <a
              className="social-icon-link twitter"
              href="https://twitter.com/SSCostumeParty"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="social-icon-link discord"
              href="https://discord.gg/qK453kMFM3"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
            >
              <i className="fab fa-discord"></i>
            </a>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

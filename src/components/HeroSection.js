import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={require("../images/houseparty1.png").default} alt=""  style={{ width: '374px', height: 'auto', marginLeft: '16px' }} />
    </div>
  );
}

export default HeroSection;

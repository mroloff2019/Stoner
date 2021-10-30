import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={require("../images/houseparty1.png").default} alt="" />
    </div>
  );
}

export default HeroSection;

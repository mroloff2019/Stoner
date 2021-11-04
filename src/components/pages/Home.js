import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";
import WelcomeMessage from "../welcomeMessage/WelcomeMessage";
import RoadMap from "../roadmap/RoadMap";

function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeMessage />
      <RoadMap />
      <Cards />
    </>
  );
}

export default Home;

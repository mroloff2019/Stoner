import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";
import WelcomeMessage from "../welcomeMessage/WelcomeMessage";
import RoadMap from "../roadmap/RoadMap";

function Home(props) {
  const { welcomeRef, roadMapRef, teamRef } = props.elRefs
  return (
    <>
      <HeroSection />
      <WelcomeMessage welcomeRef={welcomeRef} />
      <RoadMap roadMapRef={roadMapRef} />
      <Cards teamRef={teamRef} />
    </>
  );
}

export default Home;

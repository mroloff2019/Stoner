import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import WelcomeMessage from "../welcomeMessage/WelcomeMessage";
import RoadMap from "../roadmap/RoadMap";
import Purchase from "../Purchase/Purchase";

function Home(props) {
  const { showMintPage, setShowMintPage } = props
  const { welcomeRef, roadMapRef, teamRef } = props.elRefs

  if (showMintPage) {
    return (
      <div>
        <Purchase />
      </div>
    )
  } else {
    return (
      <>
        <HeroSection />
        <WelcomeMessage welcomeRef={welcomeRef} setShowMintPage={setShowMintPage} />
        <RoadMap roadMapRef={roadMapRef} />
        <Cards teamRef={teamRef} />
      </>
    );
  }
}

export default Home;

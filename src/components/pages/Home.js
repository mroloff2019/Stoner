import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import WelcomeMessage from "../welcomeMessage/WelcomeMessage";
import RoadMap from "../roadmap/RoadMap";

function Home(props) {
  const { showMintPage, setShowMintPage } = props
  const { welcomeRef, roadMapRef, teamRef } = props.elRefs

  if (showMintPage) {
    return (
      <div>
        <p>The new page</p>
        <button onClick={() => setShowMintPage(false)}> go back</button>
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

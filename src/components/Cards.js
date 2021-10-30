import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Meet the Team</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../images/SuperStonerBirthdayParty1.jpg").default}
              text="MRstoner - Lead Stoner"
              label="Software"
              path="/"
            />
            <CardItem
              src={require("../images/SuperStonerBirthdayParty2.jpg").default}
              text="DesginerDrugged - Designer"
              label="UI"
              path="/"
            />
            <CardItem
              src={require("../images/SuperStonerBirthdayParty8.png").default}
              text="gh0stlee - Marketing"
              label="Community"
              path="/"
            />
            <CardItem
              src={require("../images/SuperStonerBirthdayParty6.png").default}
              text="stonedSkynet - Developer"
              label="Software"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

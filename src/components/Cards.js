import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards(props) {
  const { teamRef } = props
  return (
    <div className="cards" ref={teamRef}>
      <p className="card__header">Team</p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../images/MRstoner.png").default}
              name="MRstoner"
              text="Brains on brains"
              path="/"
            />
            <CardItem
              src={require("../images/CoolPartyFavors.png").default}
              name="CoolPartyFavors"
              text="Arts ‘n tings"
              path="/"
            />
            <CardItem
              src={require("../images/ghostlee.png").default}
              name="gh0stlee"
              text="Packs the party"
              path="/"
            />
            </ul>
            <ul className="cards__items">
            <CardItem
              src={require("../images/designerDrugd.png").default}
              name="designerDrug’d"
              text="Draws boxes"
              path="/"
            />
            <CardItem
              src={require("../images/QL.png").default}
              name="QL"
              text="Our link to the blockchain"
              path="/"
            />
            <CardItem
              src={require("../images/stonedSkyn3t.png").default}
              name="stonedSkyn3t"
              text="Too many keyboards"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from 'react'
import './Team.css'
import { Link } from "react-router-dom";


// TODO: 
// - finish styling

const TeamItem = props => {
  const { path, src, text, name } = props
  return (
    <>
      <li className="teamItemContainer">
      <img className="teamItemImgWrap" alt="" src={src} />
      <div className="">
        <h5 className="">{name}</h5>
        <h5 className="">{text}</h5>
      </div>
      </li>
    </>
  );
}


const Team = () => {
  return (
    <div className="teamContainer">
      <p className="teamHeader">Team</p>
      <div className="teamListWrapper">
        <ul className="teamList">
          <TeamItem
            src={require("../../images/SuperStonerBirthdayParty1.jpg").default}
            text="Brains on brains"
            name="MRstoner"
            path="/"
          />
          <TeamItem
            src={require("../../images/SuperStonerBirthdayParty8.png").default}
            text="Arts 'n tings"
            name="CoolPartyFavors"
            path="/"
          />
          <TeamItem
            src={require("../../images/SuperStonerBirthdayParty6.png").default}
            text="Packs the party"
            name="ghostlee"
            path="/"
          />
          <TeamItem
            src={require("../../images/SuperStonerBirthdayParty2.jpg").default}
            text="designerDrug’d"
            name="Draws boxes"
            path="/"
          />
          <TeamItem
            src={require("../../images/SuperStonerBirthdayParty6.png").default}
            text="Our link to the blockchain"
            name="QL"
            path="/"
          />
          <TeamItem
            src={require("../../images/SuperStonerBirthdayParty6.png").default}
            text="stonedSkynet"
            name="Too many keyboards"
            path="/"
          />
        </ul>
      </div>
    </div>
  )
}

export default Team

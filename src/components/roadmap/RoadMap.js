import React from 'react'
import './RoadMap.css'


const RoadMap = props => {
  const { roadMapRef } = props
  return (
    <div className="roadMapContainer" ref={roadMapRef}>
      <p className="roadMapTitle">Roadmap</p>
      <ul className="roadMapList">
        <li className="roadMapItem">
          <p>0%|</p>
          • Join your fellow stoners on Discord. .1 eth giveaway once we reach 5k members. We will match a .1 donation to a 420 related charity. Post your donation ideas in the 💡ideas section.
        </li>
        <li className="roadMapItem">
          Have a toke and relax. The party will be starting soon. 💨 🍻
        </li>
        
        <li className="roadMapItem">
          <p>20%|</p>
          • Our website image changes and the house image becomes interactive. The first 20% of NFTs sold will be put towards a fund to inject into marketing to ensure the longevity of the project. We will also be using funds to sweep the floor to further protect your investment.
        </li>
        <li className="roadMapItem">
          <p>40%|</p>
          • 5 Stoner NFTs are airdropped to random wallets
        </li>
        <li className="roadMapItem">
          <p>60% |</p>
          • You're allowed to enter the smoker's lounge on the site. Development for the Stoner exclusive merch store starts. We got some cool merch and smoking accessories in the works for the community.
        </li>
        <li className="roadMapItem">
          <p>80% |</p>
          • The doors to the backyard open up. We'll be donating $20,000 to a marijuana charity of the communities choice and another airdrop of 5 Stoner NFTs will happen.
        </li>
        <li className="roadMapItem">
          <p>100% |</p>
          • Development for Roadmap 2.0. We will start development for a breeding function for holders who have 2 Stoner NFTs. Continued giveaways, exclusive meetups complimentary for all members, seasonal drops, and more will be in the works. Stay in the discord for updates!
        </li>
      </ul>
    </div>
  )
}

export default RoadMap
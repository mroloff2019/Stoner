import React from 'react'
import { Link } from 'react-router-dom'
import './WelcomeMessage.css'


const WelcomeMessage = () => {

  const handleButtonClick = () => {
    console.log('button clicked navigate to somewhere')
  }

  return (
    <>
    <div className="welcomeContainer">
      <div className="welcomeLeftSide">
        <div className="textTitleContainer">
          <p className="welcomeTitle">Welcome to the Super Stoner Costume party at Royalty Ln.</p>
          <p className="welcomeBody">A group of 10,000 Stoners each received an invite to an exclusive costume party from an undisclosed number. Each stoner is an alcohol drinking, kush smoking, party animal who loves good vibes. </p>
        </div>
        <div>
          <span className="joinSocial">Join our discord</span>
          <a
              className="socialIcon"
              href="https://discord.gg/qK453kMFM3"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
            >
              <i className="fab fa-discord"></i>
            </a>
        </div>
      </div>
      <div className="welcomeRightSide">
        <div>
          <button
            className="inviteBtn"
            onClick={handleButtonClick}
          >
            Get My Stoner!
          </button>
        </div>
        <div className="socialContainer">
          <span className="joinSocial">Follow us on</span>
          <a
            style={{ marginRight: '58px'}}
            className="socialIcon"
            href="https://twitter.com/SSCostumeParty"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <Link
              className="socialIcon"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
        </div>
      </div>
    </div>
    <hr className="welcomeContainer" style={{ marginBottom: '80px' }} />
    </>
  )
}

export default WelcomeMessage
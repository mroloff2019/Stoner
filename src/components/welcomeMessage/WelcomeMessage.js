import React from 'react'
import { Link } from 'react-router-dom'
import './WelcomeMessage.css'


const WelcomeMessage = props => {

  const { welcomeRef } = props

  const handleButtonClick = () => {
    console.log('button clicked navigate to somewhere')
  }

  return (
    <>
      <div className="welcomeContainer" ref={welcomeRef}>
          <div className="textTitleContainer">
            <p className="welcomeTitle">Welcome to the Super Stoner Costume party at Royalty Ln.</p>
            <p className="welcomeBody">A group of 10,000 Stoners each received an invite to an exclusive costume party from an undisclosed number. Each stoner is an alcohol drinking, kush smoking, party animal who loves good vibes. </p>
          </div>
          <div className="socialContainer">
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '90px'}}>
              <p className="socialTitle">CONNECT WITH US TO SEE WHO’S WEARING WHAT</p>
            </div>
            <div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '36px', marginBottom: '40px' }}>
              <div style={{ marginRight: '64px' }}>
                  <Link
                    className="socialIcon"
                    to="https://www.instagram.com/superstonercostumeparty/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              <div style={{ marginRight: '64px' }}>
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
              <div>
                <a
                  className="socialIcon"
                  href="https://twitter.com/SSCostumeParty"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            </div>
          </div>
         
        <div className="mobileSocial">
            <p className="mobileSocialText">GET SOCIAL</p>
            <div className="mobileBtnContainer">
              <div>
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
              <div>
                <a
                  className="socialIcon"
                  href="https://twitter.com/SSCostumeParty"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div>
                <Link
                  className="socialIcon"
                  to="https://www.instagram.com/superstonercostumeparty/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
      <hr style={{ maxWidth: '1260px', display: 'flex', justifyItems: 'center', margin: '0 auto', marginBottom: '80px' }} />
      </div>
    </>
  )
}

export default WelcomeMessage
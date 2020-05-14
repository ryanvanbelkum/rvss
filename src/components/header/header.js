import PropTypes from "prop-types"
import React from "react"
// import { Link } from "gatsby"

import medium from '../../images/medium-new.png';
import resume from '../../images/resume-100.png';
import linkedin from '../../images/linkedin.png';

import "./header.scss"

const Header = ({ siteTitle, mobileTitle }) => (
  <header>
    <div className="container row">
      <p className="logo">{siteTitle}</p>
      <p className="logo logo--mobile">{mobileTitle}</p>
      <ul className="links">
        {/* <li><Link to="/about">About</Link></li> */}
        <li className="social">
          <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1aoulfq7AH_8uMn6LI5Bnm_zoG9kmbq53MRNJbRYH3-A/edit?usp=sharing">
            <img src={resume} alt="resume" />
          </a>
        </li>
        <li className="social">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ryan-vanbelkum-9a82371a8/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li className="social">
          <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@hello_62448">
            <img src={medium} alt="medium" />
          </a>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
